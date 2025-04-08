import React from "react";
import { useState } from "react";
import "./searchcard.css";

function SearchCard() {
  return (
    <div className="wholee-container">
      <div className="winecardd-container">
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

export default SearchCard;

function ProductCard({ title, price, addCount, substractCount, cart, image }) {
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
      <img src={image} alt="winebottle1.png" className="productt-image" />
      <div className="titlee-container">
        {<p className="cllearspring">{title}</p>}
        {<p className="clearspringggg"> {price}</p>}
        {<p className="clearspppringgg"> {cart}</p>}
        {<p className="clearspppringgg"> {addCount}</p>}
        {<p className="clearspppringgg"> {substractCount}</p>}
      </div>

      <div className="plusminus-containerr">
        <div>
          <button className="minus" onClick={substractCount}>
            -
          </button>
        </div>
        <div className="hundrredd">{count}</div>
        <div>
          <button className="plus" onClick={addCount}>
            +
          </button>
        </div>
        <div className="nairaa">#12,400,00</div>
      </div>
    </div>
  );
}
