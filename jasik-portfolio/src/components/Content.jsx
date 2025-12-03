import Projects from "./Projects";

export default function Content() {
  return (
    <div>
      <div>
        <h1> Jasik Mj</h1>
        <h2>Who am I </h2>
        <p>
          I am webdevA self-taught React developer skilled in building
          responsive, interactive web applications with strong JavaScript
          fundamentals. Experienced with React, API integration, debugging, and
          backend basics using Node.js. Background in web security from bug
          bounty work strengthens my secure-development approach and improves my
          ability to understand complex technical concepts.
        </p>
      </div>
      <div>
        <Projects />
      </div>

      <div>Other details here</div>
    </div>
  );
}
