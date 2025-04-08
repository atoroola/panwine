import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import WineCard from "../../Components/WineCard";
import Navbar from "../../Components/Nav/navbar";

function Homepage() {
  return (
    <div className="newnav-container">
      <Navbar />
      <div className="wine-image-container">
        <div className="wine-caption-container">
          <div className="taste-caption">
            <p> Tastefulness & </p>
            <p>Elegance of a Best Wine</p>
          </div>
          <div className="browse-caption">
            <p> Browse our collection to find a delectable taste you desired</p>
          </div>
          <Link to="/searchpage">
            <div className="exp-btn-container">
              <button className="expl-btnn">Explore Products</button>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <div className="winec-container">
          <WineCard />
        </div>
        <Link to="/winecard">
          {" "}
          <div className="view-more-container">
            <button className="view-morebtn">View More</button>
          </div>
        </Link>
      </div>
      <div className="below-caption-container">
        <div className="left-footer-box">
          <Link to="/home-page">
            {" "}
            <p className="pan-caption">Pan Wines</p>
          </Link>
          <p className="h"> Home for luxury wines and </p>
          <p className="h"> liquors for that special</p>
          <p className="h"> celebration</p>
        </div>
        <div className="right-footer-box">
          <div className="page-cont">
            <Link to="/home-page">
              <p className="h-p">Homepage</p>
            </Link>
            <Link to="/home-page">
              <p className="h-a-p-s">Home</p>
            </Link>

            <p className="h-a-p-s">Authentication</p>
            <Link to="/winecard">
              <p className="h-a-p-s">Products</p>
            </Link>
            <Link to="/shoppingcart">
              <p className="h-a-p-s">Shopping</p>
            </Link>
          </div>
          <div className="right-footer-box">
            <div className="page-cont">
              <Link to="https://www.instagram.com/atoroola?igsh=Z28yMHB4OTV4c3Zl&utm_source=qr">
                <p className="h-p">Contact Us</p>
              </Link>{" "}
              <Link to="ogunbonaolayinka09@gmail.com">
                <p className="h-a-p-s">info@panwines.com </p>
              </Link>
              <Link to="">
                <p className="h-a-p-s">http://panwine.com</p>
              </Link>
              <p className="h-a-p-s">+2347088718939</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

//  <div className="below-caption-container">
//         <div>
//           <p className="home-for"> Pan Wines</p>
//           <p className="home-for">
//             Home for luxury wines and liquors for that special celebration
//           </p>

//           <div className="pan-caption">
//           <div className="h-page-container">
//           <Link to="/home-page">
//             {" "}
//             <span className="fbtn">
//               {" "}
//               <p>Home</p>
//             </span>
//           </Link>
//           <Link to="/checkoutpage">
//             {" "}
//             <span className="fbtn">
//               {" "}
//               <p>Authentication</p>
//             </span>{" "}
//           </Link>
//           <Link to="/searchpage">
//             {" "}
//             <span className="fbtn">
//               {" "}
//               <p>Products</p>
//             </span>
//           </Link>
//           <Link to="/shoppingcart">
//             {" "}
//             <span className="fbtn">
//               {" "}
//               <p>Shopping</p>
//             </span>
//           </Link>
//         </div>
//         <div className="contact-container">
//           <p>Contact-Us</p>
//           <p>info@panwine.co</p>
//           <p>http://panwine.com</p>
//           <p>+234123456789</p>
//           </div>
//           </div>
//         </div>
