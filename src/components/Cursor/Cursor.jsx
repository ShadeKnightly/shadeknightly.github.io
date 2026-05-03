// ─────────────────────────────────────────────
//  src/components/Cursor/Cursor.jsx
// ─────────────────────────────────────────────

import { useEffect, useRef } from "react";
import "./Cursor.css";

export default function Cursor() {
  const leafRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const leaf = leafRef.current;
    const dots = dotsRef.current;

    let mx = 0, my = 0;
    let tailX = 0, tailY = 0;
    let angle = Math.PI / 2;
    let visible = false;
    let frameId;

    function lerp(a, b, t) { return a + (b - a) * t; }

    function lerpAngle(a, b, t) {
      let d = b - a;
      while (d >  Math.PI) d -= Math.PI * 2;
      while (d < -Math.PI) d += Math.PI * 2;
      return a + d * t;
    }

    function show() {
      visible = true;
      leaf.style.display = "block";
      dots.forEach(d => d.el.style.display = "block");
    }

    function hide() {
      visible = false;
      leaf.style.display = "none";
      dots.forEach(d => d.el.style.display = "none");
    }

    function onMouseMove(e) {
      mx = e.clientX;
      my = e.clientY;
      if (!visible) {
        tailX = mx;
        tailY = my - 30;
        show();
      }
    }

  function onBlur()  { hide(); }
  function onFocus() { visible = false; }

    function tick() {
      frameId = requestAnimationFrame(tick);
      if (!visible) return;

      tailX = lerp(tailX, mx, 0.06);
      tailY = lerp(tailY, my, 0.06);

      const dx = mx - tailX;
      const dy = my - tailY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 0.3) {
        const target = Math.atan2(dy, dx) + Math.PI / 2;
        angle = lerpAngle(angle, target, 0.18);
      }

      const deg = angle * 180 / Math.PI;
      leaf.style.transform = `translate(${mx - 14}px, ${my - 1}px) rotate(${deg}deg)`;

      for (let i = dots.length - 1; i > 0; i--) {
        dots[i].x = lerp(dots[i].x, dots[i - 1].x, 0.28);
        dots[i].y = lerp(dots[i].y, dots[i - 1].y, 0.28);
      }
      dots[0].x = mx;
      dots[0].y = my;
      dots.forEach(d => {
        d.el.style.transform = `translate(${d.x - d.s / 2}px, ${d.y - d.s / 2}px)`;
      });
    }

    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);
    frameId = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      {/* Leaf SVG — tip at (14, 1), hotspot = tip */}
      <svg
        ref={leafRef}
        className="leaf-cursor"
        width="28"
        height="46"
        viewBox="0 0 28 46"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="leafGrad" x1="0%" y1="100%" x2="80%" y2="0%">
            <stop offset="0%"   stopColor="#88BAC8" />
            <stop offset="50%"  stopColor="#4D869B" />
            <stop offset="100%" stopColor="#2a5254" />
          </linearGradient>
        </defs>
        {/* Tip at top y=1, round base at bottom y=45 */}
        <path
          d="M14 1
             C20 11, 27 20, 27 30
             C27 39, 21 45, 14 45
             C7  45, 1  39, 1  30
             C1  20, 8  11, 14 1Z"
          fill="url(#leafGrad)"
          stroke="rgba(136,186,200,0.55)"
          strokeWidth="0.7"
        />
        {/* Highlight */}
        <ellipse
          cx="10" cy="18" rx="2.8" ry="5.5"
          fill="rgba(255,255,255,0.12)"
          transform="rotate(-14,10,18)"
        />
        {/* Center vein */}
        <path d="M14 3 Q13.6 24 14 44"
          fill="none" stroke="rgba(136,186,200,0.25)"
          strokeWidth="0.6" strokeLinecap="round" />
        {/* Side veins */}
        <path d="M14 20 Q10 23 5 24"  fill="none" stroke="rgba(136,186,200,0.16)" strokeWidth="0.5" strokeLinecap="round" />
        <path d="M14 20 Q18 23 23 24" fill="none" stroke="rgba(136,186,200,0.16)" strokeWidth="0.5" strokeLinecap="round" />
        <path d="M14 29 Q10 31 5 32"  fill="none" stroke="rgba(136,186,200,0.1)"  strokeWidth="0.5" strokeLinecap="round" />
        <path d="M14 29 Q18 31 23 32" fill="none" stroke="rgba(136,186,200,0.1)"  strokeWidth="0.5" strokeLinecap="round" />
      </svg>

      {/* Trail dots */}
      <TrailDots dotsRef={dotsRef} />
    </>
  );
}

// Renders trail dot divs and registers them into dotsRef
function TrailDots({ dotsRef }) {
  const TRAIL = 8;
  return (
    <>
      {Array.from({ length: TRAIL }, (_, i) => {
        const s = 2 + (TRAIL - i) * 0.65;
        const opacity = ((i + 1) / TRAIL * 0.4).toFixed(2);
        return (
          <div
            key={i}
            className="leaf-trail-dot"
            style={{ width: s, height: s, opacity, display: "none" }}
            ref={el => { if (el) dotsRef.current[i] = { el, x: 0, y: 0, s }; }}
          />
        );
      })}
    </>
  );
}
