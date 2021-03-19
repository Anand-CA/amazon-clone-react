import React from "react"
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "./StateProvider"
import { getBasketTotal } from "./reducer"
import { Link, useHistory } from "react-router-dom"
function Subtotal() {
   const [{ basket ,user}, dispatch] = useStateValue()
   const history = useHistory()
   return (
      <div className="subtotal">
         <CurrencyFormat
            renderText={(value) => (
               <>
                  <p>
                     Subtotal ({basket.length} items): <strong>{value}</strong>
                  </p>
                  <small className="subtotal__gift">
                     <input type="checkbox" />
                     This order containes a gift
                  </small>
               </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
         />
         {!user ? (
            <h3>Sign in to continue</h3>
         ) : (
            <button
               onClick={(e) => {
                  basket.length == 0
                     ? alert("Your cart is empty")
                     : history.push("/payment")
               }}
            >
               Proceed To Checkout
            </button>
         )}
      </div>
   )
}

export default Subtotal
