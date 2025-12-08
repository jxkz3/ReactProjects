import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home-container">
        <h1> You’ve got the travel plan — now ride with BikeLife</h1>
        <p>
          Add adventure to your life by joining BikeLife. Rent the perfect bike
          with zero hassle or scams.
        </p>
        <Link to="bikes">Find your bike</Link>
      </div>
    </>
  );
}
