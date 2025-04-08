import React from "react";
// import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import NewNav from "../../Components/NewNav";

function Login() {
  // const initialValue = { email: "", password: "" };
  // const [values, setValues] = useState(initialValue);

  // function handleChange(e) {
  //   let value = e.target.value;
  //   let name = e.target.name;
  //   setValues((prevValues) => ({ ...prevValues, [name]: value }));
  // }
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   alert(`email: ${values.email},password: ${values.password}`);
  // }
  return (
    <div className="login-main">
      <NewNav />
      <div className="auth-mmain">
        <img src="../../images/wine.png" alt="wine" className="auth-imagee" />
        <div className="auth-form-containerr">
          <form className="auth-formm">
            <div className="child-auth-formm">
              <p className="auth-form-captionn">Sign in to PanWines</p>
            </div>
            <div className="auth-input-fieldd">
              <label htmlFor="email" className="auth-laabel">
                Email
              </label>
              <input
                placeholder="Placeholder"
                type="email"
                name="email"
                className="auth-iinput"
                // value={values.email}
                // onChange={handleChange}
              />
            </div>
            <div className="auth-input-fieldd">
              <label htmlFor="password" className="auth-laabel">
                Password
              </label>
              <input
                placeholder="Placeholder"
                type="password"
                name="password"
                className="auth-iinput"
                // value={values.password}
                // onChange={handleChange}
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
