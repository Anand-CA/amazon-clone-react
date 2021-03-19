import React, { useEffect } from "react"
import Header from "./Header"
import Home from "./Home"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Checkout from "./Checkout"
import Login from "./Login"
import { useStateValue } from "./StateProvider"
import { auth } from "./firebase"
import Payment from "./Payment"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Order from "./Order"

const stripePromise = loadStripe(
   "pk_test_51IW3ewKfMHvCiftycnkjxQgXLH5BtsKRRSfI9WWibO3PwrC8FeeC9WAaG04GQRzTl71flGG0eyYFtXWJ5dJJ9xae005wXaC47K"
)
function App() {
   const [{ basket }, dispatch] = useStateValue()

   useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
         console.log(authUser)
         if (authUser) {
            dispatch({
               type: "SET_USER",
               user: authUser,
            })
         } else {
            dispatch({
               type: "SET_USER",
               user: null,
            })
         }
      })
   }, [])

   return (
      <Router>
         <div className="app ">
            <Switch>
               <Route path="/order">
                  <Header/>
                  <Order />
               </Route>
               <Route path="/login">
                  <Login />
               </Route>
               <Route path="/payment">
                  <Header />
                  <Elements stripe={stripePromise}>
                     <Payment />
                  </Elements>
               </Route>
               <Route path="/checkout">
                  <Header />
                  <Checkout />
               </Route>
               <Route path="/">
                  <Header />
                  <Home />
               </Route>
            </Switch>
         </div>
      </Router>
   )
}

export default App
