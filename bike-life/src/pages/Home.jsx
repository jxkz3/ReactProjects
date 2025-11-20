import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <h1> You got the travle plan go to bike life</h1>
        <p>
          Add adveneture to the life by joining Bike life rent the perfect bike
          without any scamm
        </p>
        <Link to="bikes">Find your bike</Link>
      </div>
    </>
  );
}
