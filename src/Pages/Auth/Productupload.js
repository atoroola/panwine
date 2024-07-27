import React from "react";
import "./Productupload.css";
import { Link } from "react-router-dom";
import Navchop from "../../Components/Navchop";

function Productupload() {
  return (
    <div>
       <Navchop />
      <div className="product-content">
      <p className="upload-container">Upload Photo</p>
      <form className="form-con">
        <div className="product-form">
          <input
            placeholder="Product name"
            type="product name"
            name="product name"
            className="auth-input"
          />
        </div>
        <div className="product-form">
          <input
            placeholder="Product Price"
            type="product Price"
            name="product Price"
            className="auth-input"
          />
        </div>
        <div className="product-form">
          <input
            placeholder="Category"
            type="Category"
            name="Category"
            className="auth-input"
          />
        </div>
        <div className="product-form">
          <input
            placeholder="Stock"
            type="Stock"
            name="Stock"
            className="auth-input"
          />
        </div>
      </form>
      <div className="image-click">
        <p className="click-caption">
          Click to select image <div>Browse</div>{" "}
        </p>
      </div>
      <div className="upload-cont">
        <button className="up-btn">Upload</button>
      </div>
      </div>
      
     
    </div>
  );
}

export default Productupload;
