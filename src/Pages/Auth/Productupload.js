import React from "react";
import "./Productupload.css";
import { Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";

function Productupload() {
  return (
    <div>
      <Nav />
      <div className="product-content">
        <p className="upload-container">Upload Photo</p>
      </div>

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
        <div className="image-click">
          <div className="click-caption">
            <p> Click to select image </p> <p>Browse</p>{" "}
          </div>
        </div>
        <div className="upload-cont">
          <button className="up-btn">Upload</button>
        </div>
      </form>
    </div>
  );
}

export default Productupload;
