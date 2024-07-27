import React from "react";
import "./Shoppingcart.css";
import { Link } from "react-router-dom";
import Navchop from "../../Components/Navchop";

function Shoppingcart() {
    return ( <div>
        <div><Navchop/></div>
        <div className="text-container">
            <p className="empty-cart">Your Shopping Cart is Empty</p>
            <p className="explore">Explore our product page to add item(s) your cart</p>
        </div>
        <div className="explore-container">
            <button className="explore-btn">Explore Products</button>
        </div>

        </div>

    )
}


export default Shoppingcart;