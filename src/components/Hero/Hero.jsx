// ─────────────────────────────────────────────
//  src/components/Hero/Hero.jsx
// ─────────────────────────────────────────────

import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <p className="hero-eyebrow">// Software Developer · Edmonton, AB</p>

      <h1 className="hero-name">
        [YOUR<br />NAME]
      </h1>

      <p className="hero-title">
        I build <span>real systems for real people</span> — from non-profit
        platforms to polished games and web apps. New to the field, not new
        to delivering.
      </p>

      <div className="hero-cta">
        <a href="#projects" className="btn btn-primary">View My Work ↓</a>
        <a href="#contact"  className="btn btn-outline">Get In Touch</a>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll" aria-hidden="true">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
