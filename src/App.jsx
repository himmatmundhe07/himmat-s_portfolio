import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Journey from "./sections/Journey";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import GithubActivity from "./components/GithubActivity";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useEffect(() => {
    // Add smooth scrolling behavior to html element programmatically just in case
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <ScrollToTop />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <GithubActivity />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
