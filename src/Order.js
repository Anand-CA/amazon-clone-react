import { Container } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import CheckoutProduct from "./CheckoutProduct"
import { db } from "./firebase"
import "./Order.css"
import OrderProduct from "./OrderProduct"
import { useStateValue } from "./StateProvider"

import { getBasketTotal } from "./reducer"

function Order() {
   const [{ basket, user }, dispatch] = useStateValue()
   const [orders, setOrders] = useState([])

   useEffect(() => {
      if (user) {
         db.collection("users")
            .doc(user?.uid)
            .collection("orders")
            .orderBy("create", "desc")
            .onSnapshot((snapshot) => {
               setOrders(
                  snapshot.docs.map((doc) => ({
                     id: doc.id,
                     data: doc.data(),
                  }))
               )
            })
      } else {
         setOrders([])
      }
   }, [user])

   console.log(" 👽 user >>>", user)
   console.log(" 🚀 orders >>>", orders)

   return (
      <div className="order">
         <Container>
            <div className="order__container">
               <div className="order__header">
                  <h1>Your Orders</h1>
               </div>
               {orders ? (
                  <div className="order__body">
                     {orders?.map((order) => (
                        <OrderProduct order={order} />
                     ))}
                  </div>
               ) : (
                  <h4>No Orders</h4>
               )}
            </div>
         </Container>
      </div>
   )
}

export default Order
