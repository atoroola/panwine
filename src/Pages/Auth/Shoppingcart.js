import React from "react";
import "./Shoppingcart.css";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Nav/navbar";

function Shoppingcart() {
  return (
    <div className="shopping-main-container">
      <div>
        <Navbar />
      </div>
      <div className="text-container">
        <div className="empty-cart">Your Shopping Cart is Empty</div>
        <div className="our-pdt">
          Explore our product page to add item(s) your cart
        </div>
      </div>
      <div className="explorea-btn-main-container">
        <Link to="/searchpage">
          <button className="explorea-btn">Explore Products</button>
        </Link>
      </div>
    </div>
  );
}

export default Shoppingcart;
