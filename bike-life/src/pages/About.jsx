import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page-container">
      <img alt="image"></img>
      <div className="about-page-content">
        <h2>Dont Waste money on scamms</h2>
        <p>
          Our mission is safe gaurd our customers from potenetiol scamm rentiing
          become professional well mainteinded rental of bilke
        </p>
      </div>

      <div className="about-page-cta">
        <h5>Your desitination is waiting , Your bike is ready</h5>
        <button>explore our bikes</button>
        <Link to="/Bikes"></Link>
      </div>
    </div>
  );
}

export default About;
