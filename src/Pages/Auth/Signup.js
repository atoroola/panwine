import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import NewNav from "../../Components/NewNav";

function Signup() {
  return (
    <div className="signup-main">
      {" "}
      <NewNav />
      <div className="mage-container">
        <img src="../../images/wine.png" alt="wine" className="signup-mage" />
        <div className="signup-form-container">
          <form className="signup-form">
            <div className="child-signup-form">
              <p className="signup-form-create"> Create Acccount</p>
            </div>
            <div className="signup-input-field">
              <label htmlFor="full name" className="signup-label">
                Full Name{" "}
              </label>
              <input
                placeholder="Placeholder"
                type="full name"
                name="Full-name"
                className="signup-input"
              />
            </div>
            <div className="signup-input-field">
              <label htmlFor="full name" className="signup-label">
                Email
              </label>
              <input
                placeholder="Placeholder"
                type="email"
                name="Email"
                className="signup-input"
              />
            </div>
            <div className="signup-input-field">
              <label htmlFor="full name" className="signup-label">
                Phone
              </label>
              <input
                placeholder="Placeholder"
                type="phone"
                name="Phone"
                className="signup-input"
              />
            </div>
            <div className="signup-input-field">
              <label htmlFor="full name" className="signup-label">
                Password
              </label>
              <input
                placeholder="Placeholder"
                type="password"
                name="Password"
                className="signup-input"
              />
            </div>
            <div>
              <button className="signup-btn">Sign Up</button>
            </div>
            <div>
              {" "}
              <button className="signin-btn">
                {" "}
                <div className="vector-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.803 8.12475C19.9305 8.79419 20 9.49411 20 10.2245C20 15.9376 16.0981 20 10.2047 20C8.86452 20.0004 7.53735 19.742 6.29907 19.2396C5.06079 18.7372 3.93567 18.0006 2.98799 17.072C2.04031 16.1433 1.28865 15.0407 0.775958 13.8273C0.263266 12.6139 -0.00040815 11.3133 4.74216e-07 10C-0.00040815 8.68667 0.263266 7.38613 0.775958 6.17269C1.28865 4.95926 2.04031 3.85671 2.98799 2.92804C3.93567 1.99937 5.06079 1.26279 6.29907 0.76039C7.53735 0.257984 8.86452 -0.000399962 10.2047 4.64702e-07C12.9601 4.64702e-07 15.2625 0.9935 17.029 2.60666L14.1523 5.42564V5.41853C13.0814 4.41894 11.7224 3.90593 10.2047 3.90593C6.83771 3.90593 4.10097 6.69342 4.10097 9.99391C4.10097 13.2934 6.83771 16.087 10.2047 16.087C13.2597 16.087 15.3392 14.3753 15.7663 12.0246H10.2047V8.12475H19.8041H19.803Z"
                      fill="#80295E"
                    />
                  </svg>
                </div>
                <p>Sign Up with Google</p>
              </button>
            </div>
            <div>
              {" "}
              <span className="signin-advice">
                Already have an account?
                <Link to={"/login"} className="sign-in">
                  Sign In
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Signup;
