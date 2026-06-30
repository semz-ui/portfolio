import { lazy, Suspense, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import IntroLoader from "./components/IntroLoader";
import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import { SectionSkeleton } from "./components/PageSkeleton";

const Marquee = lazy(() => import("./components/Marquee"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

export default function App() {
  const [booting, setBooting] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setBooting(false), 7000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = booting ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [booting]);

  return (
    <div className="noise relative min-h-screen overflow-x-clip">
      <AnimatePresence>{booting && <IntroLoader />}</AnimatePresence>
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<SectionSkeleton />}>
          <Marquee />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
