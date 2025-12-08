import React from "react";
import bgImg from "../assets/home-bg.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page-container">
      <div className="about-page-content">
        <h1>Don’t lose money to rental scams.</h1>
        <p>
          Our mission is to protect riders from unreliable rentals and make sure
          every bike you get is safe, inspected, and ready for the road.
        </p>
        <p>
          We’re a team of riders who know the thrill of exploring new places on
          two wheels. That’s why we built a service we’d trust ourselves.
        </p>
      </div>

      <div className="about-page-cta">
        <h2>
          Your destination is waiting.
          <br />
          Your bike is ready.
        </h2>
        <Link className="link-btn" to="/bikes">
          Explore Our Bikes
        </Link>
      </div>
    </div>
  );
}
