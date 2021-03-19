import React from "react"
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import { useStateValue } from "./StateProvider"
import Subtotal from "./Subtotal"
import Grid from "@material-ui/core/Grid"
import FlipMove from "react-flip-move"

function Checkout() {
   const [{ basket, user }, dispatch] = useStateValue()
   console.log(basket)
   const style = (
      <div className="empty__cart">
         <h2>Your Basket Is Empty 🚀</h2>
      </div>
   )

   return (
      <div className="checkout ">
         <Grid container spacing={3}>
            <Grid item sm={6} xs={12}>
               <div className="checkout__left">
                  <img
                     className="checkout__ad"
                     src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                     alt=""
                  />
                  <div className="checkout__title">
                     <h2>Your ShoppingCart</h2>
                     <h1>Hello, {user?.email}</h1>
                  </div>
                  <FlipMove>
                     {basket?.length === 0
                        ? style
                        : basket.map((item) => (
                             <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                                image={item.image}
                             />
                          ))}
                  </FlipMove>
               </div>
            </Grid>
            <Grid item sm={6} xs={12}>
               <div className="checkout__right">
                  <Subtotal />
               </div>
            </Grid>
         </Grid>
      </div>
   )
}

export default Checkout
