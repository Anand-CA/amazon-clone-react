import React, { useEffect, useState } from "react"
import { Container, Grid } from "@material-ui/core"
import "./Payment.css"
import { useStateValue } from "./StateProvider"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { getBasketTotal } from "./reducer"
import CurrencyFormat from "react-currency-format"
import axios from "./axios"
import { useHistory } from "react-router"
import { db } from "./firebase"
import CheckoutProduct from "./CheckoutProduct"

function Payment() {
   const history = useHistory()
   const [{ basket, user }, dispatch] = useStateValue()
   const [processing, setProcessing] = useState("")
   const [succeeded, setSucceeded] = useState(false)
   const [disabled, setDisabled] = useState(true)
   const [error, setError] = useState(null)
   const [clientSecret, setClientSecret] = useState(true)
   const stripe = useStripe()
   const element = useElements()

   useEffect(() => {
      const getClientSecret = async () => {
         const response = await axios({
            method: "post",
            url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
         })
         console.log("response>>>", response)
         setClientSecret(response.data.clientSecret)
      }
      getClientSecret()
   }, [basket])
   console.log("client secret key >>>>", clientSecret)
   const handleSubmit = async (e) => {
      e.preventDefault()
      setProcessing(true)

      const payload = await stripe
         .confirmCardPayment(clientSecret, {
            payment_method: {
               card: element.getElement(CardElement),
            },
         })
         .then(({ paymentIntent }) => {
            db.collection("users")
               .doc(user?.uid)
               .collection("orders")
               .doc(paymentIntent.id)
               .set({
                  basket: basket,
                  amount: paymentIntent.amount,
                  create: paymentIntent.created,
               })
            //paymentIntent means payment Confirmation
            setSucceeded(true)
            setError(null)
            setProcessing(false)

            dispatch({
               type: "EMPTY_BASKET",
            })

            history.replace("/order")
            console.log("payment successfull👍")
         })
   }
   const handleChange = (e) => {
      setDisabled(e.empty)
      setError(e.error ? e.error.message : "")
   }

   return (
      <div className="payment">
         <div className="container">
            <Container>
               <div className="section__1">
                  <h3>Delivery Address</h3>
                  <p>
                     2763 Neville Street ,Evansville Indiana,47708 2763 Neville
                     Street ,Evansville Indiana,47708
                  </p>
               </div>
               <div className="section__2">
                  <h3>Reiview items and delivery</h3>
                  <div className="payment__productContainer">
                     {basket.map((item) => (
                        <CheckoutProduct
                           id={item.id}
                           title={item.title}
                           price={item.price}
                           rating={item.rating}
                           image={item.image}
                        />
                     ))}
                  </div>
               </div>
               <div className="section__3">
                  <h3>Payment method</h3>
                  <div className="payment__card">
                     <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />
                        <div className="payment__priceContainter">
                           <CurrencyFormat
                              renderText={(value) => (
                                 <>
                                    <h3>Order Total: {value}</h3>
                                 </>
                              )}
                              decimalScale={2}
                              value={getBasketTotal(basket)}
                              displayType={"text"}
                              thousandSeparator={true}
                              prefix={"₹"}
                           />
                           <button
                              disabled={processing || disabled || succeeded}
                           >
                              <span>
                                 {processing ? <p>processing</p> : "Buy"}
                              </span>
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </Container>
         </div>
      </div>
   )
}

export default Payment
