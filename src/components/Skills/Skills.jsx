// ─────────────────────────────────────────────
//  src/components/Skills/Skills.jsx
// ─────────────────────────────────────────────

import { useScrollReveal } from "../../hooks/useScrollReveal";
import { skillGroups } from "../../data/skills";
import SkillGroup from "./SkillGroup";
import "./Skills.css";

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" ref={ref} className="reveal">
      <div className="section-inner">
        <p className="section-label">// 02 — toolkit</p>
        <h2 className="section-title">
          Skills & <span className="accent">Technologies</span>
        </h2>
        <div className="section-divider" />

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <SkillGroup key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}
