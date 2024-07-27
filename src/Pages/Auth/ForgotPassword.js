import React from "react";
import AuthNav from "../../Components/Nav/Nav";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {
  return (
    <div className="forgot-main">
      {" "}
      <AuthNav />
      <div className="forgot-container">
        <img src="../../images/wine.png" alt="wine" className="forgot-mage" />
        <div className="forgot-form-container">
          <form className="forgot-form">
            <div className="child-auth-form">
              <p className="forgot-form-reset"> Reset Password </p>
            </div>
            <div className="forgot-input-field">
              <label htmlFor="email" className="forgot-label">
                Email
              </label>
              <input
                placeholder="Placeholder"
                type="email"
                name="Email"
                className="forgot-input"
              />
            </div>
            <div className="forgot-input-field">
              <label htmlFor="phone" className="forgot-label">
                Phone
              </label>
              <input
                placeholder="Placeholder"
                type="phone"
                name="Phone"
                className="forgot-input"
              />
            </div>
            <div>
              <button className="submit-btn">Submit</button>
            </div>
            <div>
              {" "}
              <span className="forgot-advice">
                Already have an account? Sign In
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
