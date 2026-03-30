import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Journey from "./sections/Journey";
import Projects from "./sections/Projects";
import Hackathons from "./sections/Hackathons";
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

  // High-performance Framer Motion values (does not trigger React re-renders)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      dotX.set(e.clientX - 3);
      dotY.set(e.clientY - 3);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    // Initial Load Timer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Add smooth scrolling behavior to html element programmatically just in case
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {/* Custom Cursor Ring */}
      <motion.div 
        className="hidden lg:flex fixed top-0 left-0 w-8 h-8 border border-slate-400 dark:border-slate-500 rounded-full pointer-events-none z-[9999] opacity-70 justify-center items-center"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      >
      </motion.div>
      {/* Custom Cursor Dot */}
      <motion.div 
        className="hidden lg:block fixed top-0 left-0 w-1.5 h-1.5 bg-slate-800 dark:bg-white rounded-full pointer-events-none z-[9999]"
        style={{ x: dotX, y: dotY }}
      />

      <LiveBackground />
      <div className={`min-h-screen font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300 ${loading ? 'h-screen overflow-hidden' : ''}`}>
        <ScrollToTop />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Hackathons />
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
