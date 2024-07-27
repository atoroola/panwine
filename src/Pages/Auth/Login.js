import React from "react";
import AuthNav from "../../Components/Nav/Nav";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-main">
      <AuthNav />
      <div className="auth-main">
        <img src="../../images/wine.png" alt="wine" className="auth-image" />
        <div className="auth-form-container">
          <form className="auth-form">
            <div className="child-auth-form">
              <p className="auth-form-caption">Sign in to PanWines</p>
            </div>
            <div className="auth-input-field">
              <label htmlFor="email" className="auth-label">
                Email
              </label>
              <input
                placeholder="Placeholder"
                type="email"
                name="email"
                className="auth-input"
              />
            </div>
            <div className="auth-input-field">
              <label htmlFor="password" className="auth-label">
                Password
              </label>
              <input
                placeholder="Placeholder"
                type="password"
                name="password"
                className="auth-input"
              />
            </div>
            <button className="login-btn"> Sign In</button>
            <Link to={"/forgot-password"} className="login-forgot">
              Forgot Password
            </Link>
            <span className="login-advice">
              Don't have account?{" "}
              <Link to={"/signup"} className="login-advice">
                Sign up
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
