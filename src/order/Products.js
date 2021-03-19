import React from "react"
import "../order/Products.css"
const Products = ({ id, title, price, rating, image }) => {
   return (
      <>
         <div className="products">
            <img src={image} alt="" />
            <div className="products__details">
               <p>{title}</p>
               <p>₹{price}</p>
               <div className="product__rating">
                  {Array(rating)
                     .fill()
                     .map((_, i) => (
                        <p>⭐️</p>
                     ))}
               </div>
            </div>
         </div>
      </>
   )
}

export default Products
