// ─────────────────────────────────────────────
//  src/components/Footer/Footer.jsx
// ─────────────────────────────────────────────

import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>Built with ♥ by [Heather-may Howse] · {year}</p>
    </footer>
  );
}
