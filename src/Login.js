import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { db, auth } from "./firebase"
import "./Login.css"
import { useStateValue } from "./StateProvider"
function Login() {
   const history = useHistory()
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [{ basket }, dispatch] = useStateValue()

   const signIn = (e) => {
      e.preventDefault()
      auth
         .signInWithEmailAndPassword(email, password)
         .then((auth) => {
            console.log(auth)
            history.push("/")
         })
         .catch((error) => alert(error.message))
   }

   const signUp = (e) => {
      e.preventDefault()
      auth
         .createUserWithEmailAndPassword(email, password)
         .then((auth) => {
            console.log("user >>>", auth)
            if (auth) {
               history.push("/")
            }
         })
         .catch((error) => alert(error.message))
   }
   return (
      <div className="login">
         <Link to="/">
            <img
               className="login__image"
               src="https://download.logo.wine/logo/Amazon_(company)/Amazon_(company)-Logo.wine.png"
               alt=""
            />
         </Link>
         <div className="login__info">
            <h1>Sign-In</h1>
            <form className="loginInfo">
               <div className="login__email">
                  <h5>Email</h5>
                  <input
                     type="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />
               </div>
               <div className="login__password">
                  <h5>Password</h5>
                  <input
                     type="password"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                  />
               </div>
               <button
                  onClick={signIn}
                  className="loginInfo__button"
                  type="submit"
               >
                  Sign In
               </button>
            </form>
            <div className="login__copyright">
               <p>
                  By continuing, you agree to Amazon-clone Conditions of Use and
                  Privacy Notice.
               </p>
            </div>
         </div>
         <button onClick={signUp} type="submit" className="login__button">
            Create a Amazon Account
         </button>
      </div>
   )
}

export default Login
