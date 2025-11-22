import React from "react";
import bgImg from "../assets/home-bg.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page-container">
      <img src={bgImg} className="about-hero-image" />
      <div className="about-page-content">
        <h1>Dont Waste money on scamms</h1>
        <p>
          Our mission is safe gaurd our customers from potenetiol scamm rentiing
          become professional well mainteinded rental of bilke
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className="about-page-cta">
        <h2>
          Your destination is waiting.
          <br />
          Your Bike is ready.
        </h2>
        <Link className="link-btn" to="/bikes">
          Explore our vans
        </Link>
      </div>
    </div>
  );
}
