// ─────────────────────────────────────────────
//  src/components/GitGuide/GitGuide.jsx
// ─────────────────────────────────────────────

import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./GitGuide.css";

// Reflects the team workflow from Git-Workflow.md
const terminalLines = [
  { type: "comment", text: "# 1. Sync main before starting anything" },
  { type: "cmd",     text: "$ git checkout main && git pull origin main" },
  { type: "comment", text: "# 2. Create a dedicated branch for your work" },
  { type: "cmd",     text: "$ git checkout -b ", suffix: { type: "branch", text: "feature/course-search" } },
  { type: "comment", text: "# 3. Stage and commit with a clear message" },
  { type: "cmd",     text: "$ git add ." },
  { type: "cmd",     text: "$ git commit -m ", suffix: { type: "string", text: '"Add new course search component"' } },
  { type: "comment", text: "# 4. Stay up to date while you work" },
  { type: "cmd",     text: "$ git fetch origin && git merge origin/main" },
  { type: "comment", text: "# 5. Push and open a pull request" },
  { type: "cmd",     text: "$ git push origin ", suffix: { type: "branch", text: "feature/course-search" } },
  { type: "success", text: "✓ Pull request opened for review" },
  { type: "success", text: "✓ Branch protected — never commit to main directly" },
];

// documents in the guide
const docs = [
  {
    title: "Git Terms Explained",
    desc: "A plain-language glossary covering every term that trips new devs up — repo, HEAD, origin, fetch vs pull, and more. Each term includes a real-world analogy.",
  },
  {
    title: "Git Quick Guide",
    desc: "A command reference for everyday Git use — branching, committing, syncing, fixing mistakes, checking merge compatibility, and helpful aliases.",
  },
  {
    title: "Git Workflow",
    desc: "The full team workflow from syncing main to cleaning up merged branches. Includes tips on commit messages, conflict resolution, dry-run merges, and optional rebasing.",
  },
];

const bullets = [
  "Written after watching teammates struggle with Git through the final semester",
  "Covers the complete feature-branch workflow used in real teams",
  "Includes conflict resolution, PR etiquette, and meaningful commit messages",
  "Open source — MIT licensed, free to fork and share with your own team",
];

export default function GitGuide() {
  const ref = useScrollReveal();

  return (
    <section id="git" ref={ref} className="reveal">
      <div className="section-inner">
        <p className="section-label">// 03 — community</p>
        <h2 className="section-title">
          The Git <span className="accent">Beginner's Guide</span>
        </h2>
        <div className="section-divider" />

        <div className="git-feature">

          {/* Terminal visual */}
          <div className="git-terminal" aria-hidden="true">
            <div className="git-bar">
              <span className="dot red"    />
              <span className="dot yellow" />
              <span className="dot green"  />
              <span className="git-bar-title">bash - team workflow</span>
            </div>
            {terminalLines.map((line, i) => (
              <div key={i} className={`git-line git-line--${line.type}`}>
                {line.text}
                {line.suffix && (
                  <span className={`git-line--${line.suffix.type}`}>
                    {line.suffix.text}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Copy */}
          <div className="git-content">
            <p>
              By the final semester, I'd watched too many teammates freeze at the
              command line - afraid to commit, confused by merge conflicts, unsure
              what a pull request even was. So I built a guide to fix that.
            </p>
            <p>
              <strong>The Git Beginner's Guide</strong> 
              is a three-part open-source reference 
              written for developers new to git and GitHub
              who need things explained simply, and clearly.
            </p>

            {/* Doc cards */}
            <div className="git-docs">
              {docs.map((doc) => (
                <div key={doc.title} className="git-doc-card">
                  <p className="git-doc-title">{doc.title}</p>
                  <p className="git-doc-desc">{doc.desc}</p>
                </div>
              ))}
            </div>

            <ul className="git-bullets">
              {bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>

            {/* Update href to your GitHub repo URL */}
            <a
              href="https://github.com/ShadeKnightly/git-beginners-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              View on GitHub →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
