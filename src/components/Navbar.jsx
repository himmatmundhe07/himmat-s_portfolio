import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { NavLink } from "react-router-dom";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Hackathons", href: "/hackathons" },
    { name: "Experience", href: "/experience" },
    { name: "Certificates", href: "/certificates" },
    { name: "Journey", href: "/journey" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            return (
                localStorage.getItem("theme") === "dark" ||
                (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
            );
        }
        return false;
    });

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                const nextScrolled = window.scrollY > 50;
                setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
                ticking = false;
            });
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-[#F5F5F7]/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-md border-b border-slate-200/50 dark:border-slate-800/50 py-3"
                    : "bg-[#F5F5F7]/60 dark:bg-slate-900/60 backdrop-blur-md border-b border-slate-200/20 dark:border-slate-800/20 py-5"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
                <NavLink
                    to="/"
                    className="font-heading font-black text-2xl tracking-tighter text-slate-900 dark:text-white z-10 cursor-pointer flex items-center gap-1 group"
                >
                    Himmat
                    <span className="text-blue-600 text-4xl leading-[0] mb-2 group-hover:animate-bounce">.</span>
                </NavLink>

                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.href}
                            className={({ isActive }) => `text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors duration-200 text-sm tracking-wide relative group cursor-pointer ${isActive ? "text-blue-600 dark:text-blue-400 font-semibold" : ""}`}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </NavLink>
                    ))}

                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none"
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                <div className="md:hidden flex items-center gap-4 z-10">
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors focus:outline-none"
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 dark:text-white focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            <motion.div
                className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-600 dark:bg-blue-500 origin-left"
                style={{ scaleX }}
            />

            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#F5F5F7] dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-lg py-8 flex flex-col items-center space-y-6 animate-fade-in">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.href}
                            className={({ isActive }) => `text-slate-600 dark:text-slate-300 text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer ${isActive ? "text-blue-600 dark:text-blue-400" : ""}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            )}
        </nav>
    );
}
