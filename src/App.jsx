import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Journey from "./sections/Journey";
import Projects from "./sections/Projects";
import Hackathons from "./sections/Hackathons";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import GithubActivity from "./components/GithubActivity";
import ScrollToTop from "./components/ScrollToTop";
import LiveBackground from "./components/LiveBackground";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const [enablePointerFx, setEnablePointerFx] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

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
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
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
          <Projects />
          <Hackathons />
          <Experience />
          <Certificates />
          <GithubActivity />
          <Skills />
          <Journey />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
