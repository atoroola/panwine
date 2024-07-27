import React from "react";
import "./Checkoutpage.css";
import { Link } from "react-router-dom";
import Nnewnav from "../../Components/Nav/Nnewnav";


function Checkoutpage() {
    return ( <div>
        <div><Nnewnav/></div>
        <div className="srp-container">
            <p>Shipping __________</p>
            <p>Review _________</p>
            <p>Payment</p>
        </div>
        <div className="checkout-form-container">
            <form className="checkout-form">
                <div className="child-checkout-form">
               <p className="checkout-form-caption"> Shipping Details</p>
               </div>
               <div className="checkout-input-field">
              <label className="checkout-label">
                Full Name 
              </label>
              <input
                placeholder="Placeholder"
                type="full name"
                name="full name "
                className="checkout-input"
              />
               </div>
               <div className="checkout-input-field">
              <label className="checkout-label">
                Phone number 
              </label>
              <input
                placeholder="Placeholder"
                type="phone number"
                name="phone number "
                className="checkout-input"
              />
               </div>

               <div className="checkout-input-field">
              <label className="checkout-label">
                Address
              </label>
              <input
                placeholder="Placeholder"
                type="Placeholder"
                name="Address "
                className="checkout-input"
              />
               </div>
               <div className="checkout-input-field">
              <label className="checkout-label">
                Country
              </label>
              <input
                placeholder="Placeholder"
                type="Placeholder"
                name="Country "
                className="checkout-input"
              />
               </div>
               <div>
                <button className="confirm-btn">Confirm and Continue</button>
                </div>
            </form>
        </div>
        </div> 
    )}


    export default Checkoutpage;