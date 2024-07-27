import React, { useContext } from "react";

import "./ImageCard.css";

function ImageCard() {
  return (
    <div className="second-container">
      <div className="head1-container">
        <p className="caption">Top Exoties</p>
        <div className="imagecard-container">
          <ProductCard
            image={"../../images/winebottle1.png"}
            title={"Clearsprings"}
            price={"#12,400"}
          />
          <ProductCard
            image={"../../images/winebottle1.png"}
            title={"Clearsprings"}
            price={"#12,400"}
          />
          <ProductCard
            image={"../../images/winebottle1.png"}
            title={"Clearsprings"}
            price={"#12,400"}
          />
          <ProductCard
            image={"../../images/winebottle1.png"}
            title={"Clearsprings"}
            price={"#12,400"}
          />
          <ProductCard
            image={"../../images/winebottle1.png"}
            title={"Clearsprings"}
            price={"#12,400"}
          />
          <ProductCard
            image={"../../images/winebottle1.png"}
            title={"Clearsprings"}
            price={"#12,400"}
          />
          <ProductCard
            image={"../../images/winebottle1.png"}
            title={"Clearsprings"}
            price={"#12,400"}
          />
           <ProductCard
            image={"../../images/winebottle1.png"}
            title={"Clearsprings"}
            price={"#12,400"}
          />
           
          
           </div>
      </div>
    </div>
  );
}

export default ImageCard;

function ProductCard({ title, price, quantity, image }) {
  return (
    <div>
      <img src={image} alt="winebottle1.png" className="product-image" />
      <div>
        <p>Title: {title}</p>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
      </div>
    </div>
  );
}
