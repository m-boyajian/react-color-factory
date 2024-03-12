import React from "react";
import Nav from "./Nav";
import { Link } from 'react-router-dom';
import "./Home.css";

function Home({ colors }) {
  return (
    <div>
      <div className="home-heading">
        <h2>Welcome to the color factory!</h2>
        <div className="add-color-container">
          <Link to="/colors/new">Add a color</Link>
        </div>
      </div>
      <Nav colors={colors} />  
    </div>
  );
}

export default Home;