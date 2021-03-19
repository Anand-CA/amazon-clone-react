import React from "react"
import "./Header.css"
import { auth } from "./firebase"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import { Link } from "react-router-dom"
import { useStateValue } from "./StateProvider"
function Header() {
   const [{ basket, user }, dispatch] = useStateValue()

   const handleAuth = () => {
      auth.signOut()
   }
   return (
      <div className="header">
         <Link to="/">
            <img
               className="header__logo"
               src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
               alt=""
            />
         </Link>

         <div className="header__search">
            <input className="header__searchInput" type="text" />
            <SearchIcon fontSize="small" className="header__searchIcon" />
         </div>
         <div className="header__nav">
            <Link to={!user && "/login"}>
               <div onClick={handleAuth} className="header__options">
                  <span className="header__optionLineOne">
                     Hello {user?.email}
                  </span>
                  <span className="header__optionLineTwo">
                     {user ? "sign Out" : "sign In"}
                  </span>
               </div>
            </Link>
            <Link to="/order">
               <div className="header__options">
                  <span className="header__optionLineOne">Returns</span>
                  <span className="header__optionLineTwo">& Orders</span>
               </div>
            </Link>
            <div className="header__options">
               <span className="header__optionLineOne"> Your</span>
               <span className="header__optionLineTwo">Prime</span>
            </div>
         </div>
         <Link to="/checkout">
            <div className="header__optionBasket">
               <ShoppingCartIcon className="header__basket" />
               <span className="header__optionLineTwo">{basket?.length}</span>
            </div>
         </Link>
      </div>
   )
}

export default Header
