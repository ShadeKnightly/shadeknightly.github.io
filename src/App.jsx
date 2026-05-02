// ─────────────────────────────────────────────
//  src/App.jsx
//  Root component
// ─────────────────────────────────────────────

import Cursor   from "./components/Cursor/Cursor";
import Nav      from "./components/Nav/Nav";
import Hero     from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills   from "./components/Skills/Skills";
import GitGuide from "./components/GitGuide/GitGuide";
import Contact  from "./components/Contact/Contact";
import Footer   from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      {/* Fixed / overlay elements */}
      <div className="mesh" aria-hidden="true" />
      <Cursor />
      <Nav />

      {/* Page sections */}
      <main>
        <Hero />
        <Projects />
        <Skills />
        <GitGuide />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
