import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";

// Lazy-loaded components for optimal bundle splitting (Below the fold)
const Projects = React.lazy(() => import("./sections/Projects"));
const FigmaDesigns = React.lazy(() => import("./sections/FigmaDesigns"));
const Hackathons = React.lazy(() => import("./sections/Hackathons"));
const Experience = React.lazy(() => import("./sections/Experience"));
const Certificates = React.lazy(() => import("./sections/Certificates"));
const Contact = React.lazy(() => import("./sections/Contact"));
const GithubActivity = React.lazy(() => import("./components/GithubActivity"));
const Journey = React.lazy(() => import("./sections/Journey"));

import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LiveBackground from "./components/LiveBackground";
import Loader from "./components/Loader";
import SEO from "./components/SEO";

function App() {
  const [loading, setLoading] = useState(true);
  const [enablePointerFx, setEnablePointerFx] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const location = useLocation();

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Handle route based smooth scrolling
  useEffect(() => {
    if (loading) return; // Wait for loader to finish
    const sectionId = location.pathname === "/" ? "home" : location.pathname.substring(1);
    const element = document.getElementById(sectionId);
    
    if (element) {
      setTimeout(() => {
        const yOffset = -70; // Navbar height offset
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 50);
    } else if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, loading]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const updatePreference = () => {
      const canUseFinePointer = window.matchMedia("(pointer: fine)").matches;
      const hasLargeViewport = window.innerWidth >= 1024;
      setEnablePointerFx(canUseFinePointer && hasLargeViewport && !shouldReduceMotion);
    };

    updatePreference();
    window.addEventListener("resize", updatePreference, { passive: true });
    return () => window.removeEventListener("resize", updatePreference);
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (!enablePointerFx) return undefined;

    let rafId = null;
    const moveCursor = (event) => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        cursorX.set(event.clientX - 16);
        cursorY.set(event.clientY - 16);
        dotX.set(event.clientX - 3);
        dotY.set(event.clientY - 3);
        rafId = null;
      });
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [enablePointerFx, cursorX, cursorY, dotX, dotY]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Optimized for speed from 1800ms
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SEO />
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>

      {enablePointerFx && (
        <>
          <motion.div
            className="hidden lg:flex fixed top-0 left-0 w-8 h-8 border border-slate-400 dark:border-slate-500 rounded-full pointer-events-none z-[9999] opacity-70 justify-center items-center"
            style={{ x: cursorXSpring, y: cursorYSpring }}
          />

          <motion.div
            className="hidden lg:block fixed top-0 left-0 w-1.5 h-1.5 bg-slate-800 dark:bg-white rounded-full pointer-events-none z-[9999]"
            style={{ x: dotX, y: dotY }}
          />
        </>
      )}

      <LiveBackground enableInteractive={enablePointerFx} />
      <div
        className={`min-h-screen font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300 ${
          loading ? "h-screen overflow-hidden" : ""
        }`}
      >
        <ScrollToTop />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <React.Suspense fallback={<div className="h-40 flex items-center justify-center text-slate-500">Loading section...</div>}>
            <Projects />
            <FigmaDesigns />
            <Hackathons />
            <Experience />
            <Certificates />
            <GithubActivity />
            <Journey />
            <Contact />
          </React.Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
