import React from "react";
import "./Checkoutpage.css";
import { Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";

function Checkoutpage() {
  return (
    <div>
      <div>
        <Nav />
      </div>
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
          <div className="checkout-input-fielddd">
            <label htmlFor="Fullname" className="checkout-labelll">
              Full Name
            </label>

            <input
              placeholder="Placeholder"
              type="text"
              name="full name"
              className="checkout-inputtt"
            />
          </div>
          <div className="checkout-input-fielddd">
            <label htmlFor="Phone Number" className="checkout-labelll">
              Phone number
            </label>
            <input
              placeholder="Placeholder"
              type="number"
              name="phone number "
              className="checkout-inputtt"
            />
          </div>

          <div className="checkout-input-fielddd">
            <label htmlFor="Address" className="checkout-labelll">
              Address
            </label>
            <input
              placeholder="Placeholder"
              type="Address"
              name="Address "
              className="checkout-inputtt"
            />
          </div>
          <div className="checkout-input-fielddd">
            <label htmlFor="Country" className="checkout-labelll">
              Country
            </label>
            <input
              placeholder="Placeholder"
              type="country"
              name="Country "
              className="checkout-inputtt"
            />
          </div>
          <div>
            <button className="confirm-btn">Confirm and Continue</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkoutpage;
