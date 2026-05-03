// ─────────────────────────────────────────────
//  src/components/Nav/Nav.jsx
// ─────────────────────────────────────────────

import "./Nav.css";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills"   },
  { label: "Git Guide",href: "#git"      },
  { label: "Contact",  href: "#contact"  },
];

export default function Nav() {
  return (
    <nav className="nav">
      <a href="#hero" className="nav-logo">Heather-may Howse</a>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
        <li>
          <a href="/Resume_2026.pdf" download className="btn btn-outline nav-resume">
            Resume ↓
          </a>
        </li>
      </ul>
    </nav>
  );
}
