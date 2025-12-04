import { projects } from "../projects";

export default function ProjectsCard() {
  const card = projects.map((p) => (
    <div key={p} className="project-card">
      <h1> {p.name} </h1>
      <p>Summary: {p.description}</p>

      <div className="tech-container">
        Tech used :
        {p.tech.map((t) => (
          <div className="tech-items"> {t} </div>
        ))}
      </div>

      <div className="show-link">
        <a href={p.github} target="_blank">
          GitHub
        </a>
        <a href={p.demoUrl} target="_blank">
          Live
        </a>
      </div>
      <div className="image-container">
        <img src={p.image}></img>
      </div>
    </div>
  ));

  return (
    <>
      <div className="project-container">{card}</div>
    </>
  );
}
