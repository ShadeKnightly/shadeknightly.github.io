// ─────────────────────────────────────────────
//  src/components/Projects/Projects.jsx
// ─────────────────────────────────────────────

import { useScrollReveal } from "../../hooks/useScrollReveal";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" ref={ref} className="reveal">
      <div className="section-inner">
        <p className="section-label">// 01 — work</p>
        <h2 className="section-title">
          Featured <span className="accent">Projects</span>
        </h2>
        <div className="section-divider" />

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
