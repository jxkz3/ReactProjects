import ProjectsCard from "./ProjectsCard";
import SkillCard from "./SkillCard";
import { Link } from "react-router-dom";

export default function Content() {
  return (
    <div className="center-box">
      <div className="main-container">
        <h1>JASIK MJ</h1>
        <h3>React Developer</h3>

        <p>
          I work with React and build real-world projects to get better. I’ve
          done security and bug hunting, so I pay attention to how things break.
          I’m learning Node and Express to understand the backend properly and
          become productive on both sides.
        </p>
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
