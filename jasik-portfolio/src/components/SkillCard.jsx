import { skills } from "../skills";

export default function SkillCard() {
  const card = skills.map((s) => (
    <div key={s} className="skill-card">
      <h3>
        <b> {s.category}</b>{" "}
      </h3>
      <div className="skill-items">
        {s.items.map((i) => (
          <div className="skill-name" key={i}>
            {i}
          </div>
        ))}
      </div>
    </div>
  ));
  return (
    <>
      <div className="skill-container">{card}</div>
    </>
  );
}
