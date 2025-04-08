import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className="navbar-container">
        <Link to="/home-page">
          <p className="pan">PanWines</p>
        </Link>
        <div className="hhps">
          <Link to="/home-page">
            <p className="ho">Home</p>
          </Link>
          <Link to="/search-page">
            <p className="ho">Product</p>
          </Link>
          <Link to="/shopping-cart">
            <p className="ho">Shopping Cart</p>
          </Link>
          <Link to="/shopping-cart">
            <p>
              <img
                src="/shopping-cart.ico"
                alt="shopping-con"
                width="28"
                height="28"
              />
            </p>
          </Link>
        </div>
        <div className="con-con">
          {" "}
          <img src="/Vector.ico" alt="Vectoricon" width="28" height="28" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
