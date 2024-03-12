import React from "react";
import { Link } from "react-router-dom";
import "./ColorDetail.css";

function ColorDetail({ match, colors }) {
  const { color } = match.params;
  const selectedColor = colors.find(c => c.name === color);

  console.log("Selected color:", selectedColor);

  if (!selectedColor) {
    return <div>Color not found!</div>;
  }

  const style = {
    backgroundColor: selectedColor.hex
  }

  return (
    <div className="color-box" style={style}>
      <h1>This is {selectedColor.name}.</h1>
      <h1>Isn't it beautiful?</h1>
      <Link to="/home" className="go-back-link">Go Back</Link>
    </div>
  );
}

export default ColorDetail;

