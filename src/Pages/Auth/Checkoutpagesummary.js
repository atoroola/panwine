import React from "react";
import "./Checkoutpagesummary.css";
import { Link } from "react-router-dom";
import Navchop from "../../Components/Navchop";


function Checkoutpagesummary() {
    return ( <div>
        <div><Navchop/></div>
        <div className="ship-pay-review-container">

<div className="ship-container"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76515 24 8.8174 24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76515 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76515 3.51472 3.51472C5.76515 1.26428 8.8174 0 12 0ZM10.5051 14.3674L7.83943 11.7C7.74386 11.6044 7.63041 11.5286 7.50555 11.4769C7.38069 11.4252 7.24686 11.3986 7.11171 11.3986C6.97657 11.3986 6.84274 11.4252 6.71788 11.4769C6.59302 11.5286 6.47956 11.6044 6.384 11.7C6.191 11.893 6.08257 12.1548 6.08257 12.4277C6.08257 12.7007 6.191 12.9624 6.384 13.1554L9.77829 16.5497C9.87358 16.6458 9.98695 16.722 10.1118 16.774C10.2367 16.826 10.3707 16.8528 10.506 16.8528C10.6413 16.8528 10.7753 16.826 10.9002 16.774C11.0251 16.722 11.1384 16.6458 11.2337 16.5497L18.2623 9.51943C18.3591 9.42426 18.4362 9.31086 18.489 9.18577C18.5418 9.06068 18.5693 8.92637 18.5699 8.79059C18.5705 8.65482 18.5443 8.52026 18.4926 8.39468C18.441 8.26911 18.365 8.15499 18.2691 8.05893C18.1731 7.96286 18.0591 7.88675 17.9336 7.83497C17.8081 7.78319 17.6735 7.75677 17.5378 7.75725C17.402 7.75772 17.2677 7.78507 17.1425 7.83771C17.0173 7.89036 16.9039 7.96727 16.8086 8.064L10.5051 14.3674Z" fill="#411530"/>
</svg> Shipping
</div> 

<div  className="paymentt-container"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="12" fill="#411530"/>
</svg>  Payment
</div>

<div className="revieww-container"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="12" fill="#411530"/>
</svg> Review
</div> 
</div>
<div className="please-container">
    <p>Please confirm and submit your order</p>
</div>
<div className="agree-container">
    <p>By clicking submit order, you agree to Terms of Use and Privacy Policy </p>
</div>
  
<div className="pe-container"><p>Payment <p>*********897</p></p> <p>Edit <p>MM/YY</p></p></div>

<div className="shippp-container"><p>Shipping Address <p>Name <p>country</p></p></p> <p>Edit <p>lawrence kingsley <p>Albania</p></p></p></div>
<div className="order-container"> <div>Order Summary
    <p>sub total <p>delivery </p></p></div> <p>$4,200 <p>$200</p></p>
</div>
<div className="grand-container"> Grand Total <p>$4,400</p></div>

<div className="btn-container"><button  className="submit-btn">Submit Order</button></div>

        </div>
        
        )}


        export default Checkoutpagesummary;