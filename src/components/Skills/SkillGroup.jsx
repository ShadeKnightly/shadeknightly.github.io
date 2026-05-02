// ─────────────────────────────────────────────
//  src/components/Skills/SkillGroup.jsx
// ─────────────────────────────────────────────

export default function SkillGroup({ group }) {
  const { icon, name, skills } = group;

  return (
    <div className="skill-group">
      <div className="skill-group-icon" aria-hidden="true">{icon}</div>
      <p className="skill-group-name">{name}</p>
      <div className="skill-pills">
        {skills.map((skill) => (
          <span
            key={skill.label}
            className={`skill-pill ${skill.highlight ? "skill-pill--highlight" : ""}`}
          >
            {skill.label}
          </span>
        ))}
      </div>
    </div>
  );
}
