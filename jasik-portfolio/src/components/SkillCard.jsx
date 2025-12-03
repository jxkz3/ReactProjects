import { skills } from "../skills";

export default function SkillCard() {
  const card = skills.map((s) => (
    <div key={s} className="skill-card">
      {s.category}
      <div className="skill-items">
        {s.items.map((i) => (
          <div className="skill-item" key={i}>
            {i}
          </div>
        ))}
      </div>
    </div>
  ));
  return <div className="skill-container">{card}</div>;
}
