import React from "react";
import { useState } from "react";
import "./WineCard.css";

function WineCard() {
  return (
    <div className="whole-container">
      <div className="suggestion-container">
        <p className="suggestion">New Arrivals</p>
      </div>
      <div className="winecard-container">
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />
        <ProductCard
          image={"../../images/winebottle2.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"#12,400"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearspring"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />{" "}
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />{" "}
        <ProductCard
          image={"../../images/winebottle1.png"}
          title={"Clearsprings"}
          price={"clearsprings"}
        />{" "}
      </div>
    </div>
  );
}

export default WineCard;

function ProductCard({ title, price, cart, addCount, substractCount, image }) {
  const [count, setCount] = useState(0);
  function substractCount() {
    if (count > 0) {
      return setCount((prevCount) => prevCount - 1);
    } else {
      return count;
    }
  }
  function addCount() {
    if (count < 10) {
      return setCount((prevCount) => prevCount + 1);
    } else {
      return count;
    }
  }
  return (
    <div>
      <img src={image} alt="winebottle1.png" className="product-image" />
      <div className="title-container">
        {<p className="clearspring">{title}</p>}
        {<p className="clearspringgg"> {price}</p>}
        {<p className="clearspppringgg"> {cart}</p>}
        {<p className="clearspppringgg"> {addCount}</p>}
        {<p className="clearspppringgg"> {substractCount}</p>}
      </div>

      <div className="plusminus-container">
        <div>
          {" "}
          <button className="minus" onClick={substractCount}>
            -
          </button>
        </div>
        <div className="hundred">{count}</div>
        <div>
          {" "}
          <button className="plus" onClick={addCount}>
            +
          </button>
        </div>
        <div className="naira">#12,400,00</div>
      </div>
    </div>
  );
}
