import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="main-nav-cont">
        <div className="hps-cont">
          <Link to="/home-page">
            <p className="hhh">Home</p>
          </Link>
          <Link to="/winecard">
            <p className="hhh">Products </p>
          </Link>
          <Link to="/forgot-password">
            <p className="hhh">Suppport</p>
          </Link>
        </div>
      </div>
      <div>
        <div className="sub-navbar">
          <Link className="paw" to="/home-page">
            PanWines
          </Link>
          {/* <Link to="/searchpage"> */}
          <div className="search-container">
            <input id="inputsearch" type="search" placeholder="Search..." />
            {/* <i
                className="fa fa-search"
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#888",
                }}
              ></i> */}
          </div>
          {/* </Link> */}
          <div className="cls">
            <Link to="/shoppingcart">
              <div className="cart">
                <img
                  src="/shopping-cart.ico"
                  alt="shopping-con"
                  width="24"
                  height="24"
                />
              </div>
            </Link>
            <Link to="/login">
              <button className="logbt">Login</button>
            </Link>
            <Link to="/signup">
              <button className="logbt signbt">Signup</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
