import React from "react";
import "./Productpurchasepage.css";
import { Link } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";

function Productpurchasepage() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="themain-container">
        <div className="panwine-container">PanWines</div>
        <div className="sa-container">
          Street Address<div className="cc-cont"> City, Country </div>
        </div>
        <div className="email-container">Email</div>
        <div className="td-cont">Transaction Details</div>
        <div className="p-m">
          Payment method <p>Credit Card</p>
        </div>
        <div className="name-cont">
          Name <p>Credit Card</p>
        </div>
        <div className="in-cont">
          Invoice Number <p>Lawrence kingsley</p>
        </div>
        <div className="t-d">
          Transaction Date <p>8/19/2022</p>
        </div>
        <div className="t-t">
          Transaction Time <p>19:05</p>
        </div>

        <div>
          <div className="qty-con">
            <p>Qty</p> <p>Item(s) </p> <p>Price per unit ($)</p>
          </div>
          <div className="meriot">
            1 <p>Meriot: Red</p> <p>$1200</p>
          </div>
          <div className="pinot">
            3 <p>Pinot Noir </p>
            <p>$1200</p>
          </div>
          <div className="docieto">
            2 <p>Docieto </p>
            <p>$1200</p>
          </div>
          <div className="sub">
            SubTotal <p>$7200</p>
          </div>
          <div className="deliv">
            Delivery <p>$400</p>
          </div>
          <div className="ground">
            Groundtotal <p>$7600</p>
          </div>
          <div className="thanks">Thanks For Your Patronage</div>
          <div className="print-container">
            <button className="btn-cont">Print Receipt</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Productpurchasepage;
