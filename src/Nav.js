import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav({ colors }) {
  if (!colors || !colors.length) {
    return null;
  }

  return (
    <div className="nav-container">
      <ul>
        <p>Please select a color.</p>
        {colors.map((color, index) => (
          <ul key={index}>
            <Link to={`/colors/${color.name}`}>{color.name}</Link>
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
