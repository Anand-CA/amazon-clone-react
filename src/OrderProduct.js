import { Container } from "@material-ui/core"
import React, { forwardRef } from "react"
import "./OrderProduct.css"
import moment from "moment"
import CheckoutProduct from "./CheckoutProduct"
import CurrencyFormat from "react-currency-format"
import Products from "./order/Products"
import FlipMove from "react-flip-move"

function OrderProduct({ order }) {
   return (
      <div className="orderProduct">
         <div className="orderProduct__Container">
            <p>
               {moment.unix(order.data.create).format("MMMM Do YYYY, h:mma")}
            </p>
            <p className="order__id">
               <small>{order.id}</small>
            </p>
            {order.data.basket?.map((item) => (
               <Products
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
            
               />
            ))}
         </div>
         <div className="orderProduct__total">
            <CurrencyFormat
               renderText={(value) => (
                  <>
                     <h3>Order Total: {value}</h3>
                  </>
               )}
               decimalScale={2}
               value={order.data.amount / 100}
               displayType={"text"}
               thousandSeparator={true}
               prefix={"₹"}
            />
         </div>
      </div>
   )
}

export default OrderProduct
