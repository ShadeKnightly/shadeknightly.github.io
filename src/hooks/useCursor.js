// ─────────────────────────────────────────────
//  src/hooks/useCursor.js
//
//  Tracks mouse position for the custom cursor.
//  Returns { x, y } for the dot (snaps instantly)
//  and { x, y } for the ring (lerps behind the dot).
//
//  Usage:
//    const { dot, ring, isHovering, onMouseEnter, onMouseLeave } = useCursor();
//    <div style={{ left: dot.x, top: dot.y }} />
//    <div style={{ left: ring.x, top: ring.y }} />
// ─────────────────────────────────────────────

import { useEffect, useRef, useState } from "react";

const LERP = 0.12; // ring lag — lower = more lag

export function useCursor() {
  const [dot, setDot]           = useState({ x: 0, y: 0 });
  const [ring, setRing]         = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const mouse   = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const frameId = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      setDot({ x: e.clientX, y: e.clientY });
    };

    const animate = () => {
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * LERP;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * LERP;
      setRing({ x: ringPos.current.x, y: ringPos.current.y });
      frameId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    frameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frameId.current);
    };
  }, []);

  return {
    dot,
    ring,
    isHovering,
    onMouseEnter: () => setIsHovering(true),
    onMouseLeave: () => setIsHovering(false),
  };
}
