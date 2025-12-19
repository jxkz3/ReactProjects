import ProjectsCard from "./ProjectsCard";
import SkillCard from "./SkillCard";
import { Link } from "react-router-dom";
import Intigriti from "/src/assets/intigriti-svgrepo-com.svg";

export default function Content() {
  return (
    <div className="center-box">
      <div className="main-container">
        <h1>JASIK MJ</h1>
        <h3>React Developer</h3>

        <p>
          I work with React and build real-world projects to improve my skills.
          I’ve done security and bug hunting in the past, which helps me
          recognize common OWASP issues. I’m now learning Node and Express to
          understand the backend properly and become productive on both sides.
        </p>
        <div>
          <a href="https://www.linkedin.com/in/jxkz/"></a>
          <a href="https://hackerone.com/jxkz"></a>
          <a href="https://app.intigriti.com/researcher/profile/jxkz"></a>
        </div>
        <Link to="/about" className="about-link">
          Learn more about me →
        </Link>
      </div>
      <div className="page-ct">
        <h1> Projects</h1>

        <ProjectsCard />
      </div>
      <h1>Skills</h1>
      <SkillCard />

      <div>Other details here</div>
    </div>
  );
}
