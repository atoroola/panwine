import React from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";
import NewNav from "../../Components/NewNav";

function ForgotPassword() {
  return (
    <div className="forgot-main">
      {" "}
      <NewNav />
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
              <button className="submitt-btnnn">Submit</button>
            </div>
            <div>
              {" "}
              <Link to="/login">
                {" "}
                <span className="forrrgot-advice">
                  Already have an account? Sign In
                </span>{" "}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
