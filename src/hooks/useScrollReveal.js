// ─────────────────────────────────────────────
//  src/hooks/useScrollReveal.js
//
//  Attaches an IntersectionObserver to a ref.
//  When the element enters the viewport, adds the
//  'visible' class so CSS transitions can fire.
//
//  Usage:
//    const ref = useScrollReveal();
//    <div ref={ref} className="reveal"> ... </div>
//
//  Or reveal a whole section with one ref:
//    const sectionRef = useScrollReveal();
//    <section ref={sectionRef}>
//      <h2 className="reveal"> ... </h2>   ← still needs the CSS class
//    </section>
// ─────────────────────────────────────────────

import { useEffect, useRef } from "react";

/**
 * @param {Object}  options
 * @param {number}  options.threshold  - 0–1, how much of the element must be visible (default 0.1)
 * @param {string}  options.rootMargin - margin around root (default "0px")
 * @param {boolean} options.once       - stop observing after first reveal (default true)
 */
export function useScrollReveal({
  threshold = 0.1,
  rootMargin = "0px",
  once = true,
} = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add 'visible' to the container AND any .reveal children inside it
            entry.target.classList.add("visible");
            entry.target
              .querySelectorAll(".reveal")
              .forEach((child) => child.classList.add("visible"));

            if (once) observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return ref;
}
