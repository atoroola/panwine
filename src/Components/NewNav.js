import React from "react";
import "./NewNav.css";
import { Link } from "react-router-dom";

function NewNav() {
  return (
    <div>
      <div className="nav-container">
        <Link to="/home-page">
          <p className="pann">PanWines</p>
        </Link>
      </div>
    </div>
  );
}

export default NewNav;
