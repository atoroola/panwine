import React from "react";
import "./Searchpage.css";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Nav/navbar";
import SearchCard from "../../Components/searchcard";

function Searchpage() {
  return (
    <div className="the-whole-container">
      <div>
        <Navbar />
      </div>
      <Link to="/winecard">
        <div className="search-text">Search Result</div>{" "}
      </Link>
      <div className="product-list-container">
        <Link to="/searchcard">
          {" "}
          <div className="scanner">
            <div className="cat"> Category</div>
            <Link to="/winecard">
              {" "}
              <div className="rwrsf-container">
                <div className="white"> Red wine</div>
                <div className="white">White wine</div>
                <div className="white">Rose Wine</div>
                <div className="white">Sparkling Wine</div>
                <div className="white">Fortified Wine</div>
                <div className="white">Wiskey</div>
                <div className="white">Vodka</div>
                <div className="white">Rum</div>
                <div className="white">Gin</div>
                <div className="white">Tequila</div>
              </div>
            </Link>
            <div className="cat">Filter</div>
          </div>{" "}
        </Link>
      </div>

      <div className="wine-card-contain">
        <SearchCard />
      </div>

      <div className="below-caption-containerr">
        <div className="left-footer-boxx">
          <Link to="/home-page">
            {" "}
            <p className="pan-captionn">Pan Wines</p>
          </Link>
          <p className="hh"> Home for luxury wines and </p>
          <p className="hh"> liquors for that special</p>
          <p className="hh"> celebration</p>
        </div>
        <div className="right-footerr-box">
          <div className="page-contt">
            <Link to="/home-page">
              <p className="h-p-p">Homepage</p>
            </Link>
            <Link to="/home-page">
              <p className="h-a-p-s-s">Home</p>
            </Link>

            <p className="h-a-p-s-s">Authentication</p>
            <Link to="/winecard">
              <p className="h-a-p-s-s">Products</p>
            </Link>
            <Link to="/shoppingcart">
              <p className="h-a-p-s-s">Shopping</p>
            </Link>
          </div>
          <div className="right-footerr-box">
            <div className="page-contt">
              <Link to="https://www.instagram.com/atoroola?igsh=Z28yMHB4OTV4c3Zl&utm_source=qr">
                <p className="h-p-p">Contact Us</p>
              </Link>{" "}
              <Link to="ogunbonaolayinka09@gmail.com">
                <p className="h-a-p-s-s">info@panwines.com </p>
              </Link>
              <Link to="">
                <p className="h-a-p-s-s">http://panwine.com</p>
              </Link>
              <p className="h-a-p-s-s">+2347088718939</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchpage;
