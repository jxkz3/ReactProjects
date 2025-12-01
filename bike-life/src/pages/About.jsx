import React from "react";
import bgImg from "../assets/home-bg.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page-container">
      <img src={bgImg} alt="background" className="about-hero-image" />

      <div className="about-page-content">
        <h1>Don’t waste money on scams</h1>
        <p>
          Our mission is to safeguard customers from potential rental scams and
          provide a trusted, well-maintained bike rental experience.
        </p>
        <p>
          Our team consists of riding enthusiasts who understand the joy and
          freedom of exploring the world on two wheels.
        </p>
      </div>

      <div className="about-page-cta">
        <h2>
          Your destination is waiting.
          <br />
          Your bike is ready.
        </h2>
        <Link className="link-btn" to="/bikes">
          Explore our Bikes
        </Link>
      </div>
    </div>
  );
}
