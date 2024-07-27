import React from "react";
import NnewNav from "../../Components/Nav/Nnewnav";
import "./Homepage.css";
import { Link } from "react-router-dom";
import WineCard from "../../Components/WineCard";
import ImageCard from "../../Components/ImageCard";

function Homepage() {
  return (
    <div className="newnav-container">
      <NnewNav />
      <div className="wine-image-container">
        <div className="wine-caption-container">
          <p className="taste-caption">
            Tastefulness & Elegance of a Best Wine
          </p>
          <p className="browse-caption">
            Browse our collection to find a delectable taste you desired
          </p>
          <p className="explore-btn-container">
          <button className="explore-btn">Explore Products </button>
        </p>
        </div>
       
      </div>
      <div>
        <WineCard />
      </div>
      <div>
        <ImageCard />
        <div className="view-more-container">
        <button className="view-morebtn">View More <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="29" height="29" transform="translate(0 0.5)" fill="#E1E1E1"/>
</svg>
</button>
      </div>
      </div>
     
      <div className="below-caption-container">
        
        <div className="pan-caption">Pan Wines
        <p className="home-for">Home for luxury wines and liquors for that special celebration</p>
        </div>
        <div className="h-page-container"> Home page
            <p>Home</p>
            <p>Authentication</p>
            <p>Products</p>
            <p>Shopping</p>
          </div>
          <div className="contact-container">
            <p>Contact-Us</p>
            <p>info@panwine.co</p>
            <p>http://panwine.com</p>
            <p>+234123456789</p>
           
        </div>
       
    
  </div> 
      </div>
   
  );
}

export default Homepage;
