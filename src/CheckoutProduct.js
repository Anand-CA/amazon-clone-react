import React, { forwardRef } from "react"
import "./CheckoutProduct.css"
import { useStateValue } from "./StateProvider"
const CheckoutProduct = forwardRef(({ id, title, price, rating, image },ref) => {
   const [{ basket }, dispatch] = useStateValue()
   const removeFromBasket = () => {
      //remove item from basket
      dispatch({
         type: "REMOVE_FROM_BASKET",
         id: id,
      })
   }
   return (
      <div ref={ref} className="checkoutProduct animate__animated animate__pulse">
         <img className="checkoutProduct__image" src={image} alt="" />

         <div className="checkoutProduct__info">
            <p>{title}</p>
            <p>₹{price}</p>
            <div className="product__rating">
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
})
export default CheckoutProduct
