// ─────────────────────────────────────────────
//  src/components/Hero/Hero.jsx
// ─────────────────────────────────────────────

import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <p className="hero-eyebrow">// Software Developer · Calgary, AB</p>

      <h1 className="hero-name">
        Heather-may<br />Howse
      </h1>

      <p className="hero-title">
        I build <span>projects and systems for individuals and businesses</span> - from non-profit
        platforms to polished games and web apps. New to the field, committed to user friendly experiences, 
        and well designed projects. 
      </p>

      <div className="hero-subtitle">
      <span>Let's build something great together.</span>
      </div>

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
