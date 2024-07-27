import React, { useContext } from "react";

import "./WineCard.css";

function WineCard() {
  return (
    <div className="whole-container">
      <div className="suggestion-container">
        <p className="suggestion">New Arrivals</p>
        <div className="winecard-container">
          <ProductCard
            image={"../../images/winebottle1.png"}
            title={"Clearsprings"}
            price={"#12,400"}
          />
          <ProductCard
            image={"../../images/winebottle2.png"}
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
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default WineCard;

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
