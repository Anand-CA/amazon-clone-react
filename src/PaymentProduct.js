import React from "react"
import "./PaymentProduct.css"
import { useStateValue } from "./StateProvider"
function PaymentProduct({ id, title, price, rating, image }) {
   const [{ basket }, dispatch] = useStateValue()
   const removeFromBasket = () => {
      //remove item from basket
      dispatch({
         type: "REMOVE_FROM_BASKET",
         id: id,
      })
   }
   return (
      <div className="paymentProduct">
         <div className="paymentProduct__container">
            <img className="checkoutProduct__image" src={image} alt="" />
            <p className="PaymentProduct__title">{title}</p>
            <p className="PaymentProduct__price">₹{price}</p>
            <div className="paymentProduct__rating">
               {Array(rating)
                  .fill()
                  .map((_, i) => (
                     <p>⭐️</p>
                  ))}
            </div>
            <button onClick={removeFromBasket}>Remove From Cart</button>
         </div>
      </div>
   )
}

export default PaymentProduct
