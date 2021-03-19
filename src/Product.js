import React from "react"
import "./Product.css"
import { useStateValue } from "./StateProvider"
import { useSpring, animated } from "react-spring"
import { Button, Grid } from "@material-ui/core"

const calc = (x, y) => [
   -(y - window.innerHeight / 2) / 20,
   (x - window.innerWidth / 2) / 20,
   1.1,
]
const trans = (x, y, s) =>
   `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function Product({ id, title, price, rating, image }) {
   const [{}, dispatch] = useStateValue()

   // add the product details to the data layer so that it is acessable in every component
   const addToBasket = () => {
      //dispatch(add) item into data layer
      dispatch({
         type: "ADD_TO_BASKET",
         item: {
            id: id,
            title: title,
            price: price,
            rating: rating,
            image: image,
         },
      })
   }
   return (
      <div className="product animate__animated animate__fadeIn">
         <div className="product__info">
            <p>{title}</p>
            <div className="product__price">
               <strong>₹{price}</strong>
            </div>
            <div className="product__rating">
               {Array(rating)
                  .fill()
                  .map((_, i) => (
                     <p>⭐️</p>
                  ))}
            </div>
         </div>
         <img className="product__image" src={image} alt="" />
         <button className="product__button" onClick={addToBasket}>
            Add to basket
         </button>
      </div>
   )
}

export default Product
