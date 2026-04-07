import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Youtube, Layers, Layout, Gamepad2, Pen, Award } from "lucide-react";

import sanjeevaniImage from "../assets/sanjeevani.png";
import taazaKhabarImage from "../assets/taaza-khabar.png";
import airTalkImage from "../assets/air-talk.png";
import bombayCloset from "../assets/Bombay Closet Cleanse.png";
import cetaphil from "../assets/cetaphil.png";
import trueClassic from "../assets/True-Classic.png";
import iCalm from "../assets/Icalm.png";
import whackAMoleImage from "../assets/whack-a-mole.png";
import rgbMasterImage from "../assets/color guessing game.jpg";
import clickCounterImage from "../assets/click-game.png";
import flightBookingImage from "../assets/flight-booking.png";
import codingGitaImage from "../assets/coding-gita.png";
import mallWebsiteImage from "../assets/mall-website.png";
import educationSiteImage from "../assets/education-site.png";

const categories = [
    { id: "functional", label: "Functional Apps", icon: Layers },
    { id: "clones", label: "Website Clones", icon: Layout },
    { id: "games", label: "Interactive Games", icon: Gamepad2 },
    { id: "designs", label: "UI/UX Design", icon: Pen },
];

const projects = [
    {
        category: "functional",
        title: "Sanjeevani",
        tagline: "AI-Powered Emergency Healthcare Ecosystem",
        description: "An advanced emergency healthcare platform that bridges the critical information gap between accidents and hospitals with real-time biometric scanning and AI triage intelligence.",
        tech: ["React", "Node.js", "MongoDB", "Gemini AI", "WebSocket"],
        image: sanjeevaniImage,
        links: {
            live: "https://wce-hackathon2026-4-bits.vercel.app/",
            github: "https://github.com/himmatmundhe07/Sanjeevani",
            certificate: "https://drive.google.com/file/d/1CUqwkBa9A4THL1WIBSU-8OvpP7G0hU2x/view?usp=sharing",
        },
        color: "bg-emerald-600",
    },
    {
        category: "functional",
        title: "Taaza Khabar",
        tagline: "Real-time News and Weather Portal",
        description: "A centralized hub for breaking news and live weather updates with high-performance layouts, smart filtering, and real-time global API integration.",
        tech: ["React", "The Guardian API", "WeatherAPI", "Tailwind"],
        image: taazaKhabarImage,
        links: {
            live: "https://taazakhabarbydemu.netlify.app/",
            github: "https://github.com/himmatmundhe07/Taaza-Khabar",
        },
        color: "bg-red-500",
    },
    {
        category: "functional",
        title: "Air Talk",
        tagline: "Bluetooth Offline Messenger",
        description: "A decentralized mobile messenger for situations without Internet or SIM, built on Bluetooth RFCOMM for secure peer-to-peer communication.",
        tech: ["Java", "Android SDK", "Bluetooth API"],
        image: airTalkImage,
        links: {
            github: "https://github.com/himmatmundhe07/Air-Talks",
            certificate: "https://drive.google.com/file/d/1-Xlo3eGpDJ7YEiywb90TREX-gTZgQhVk/view?usp=sharing",
        },
        color: "bg-blue-600",
    },
    {
        category: "clones",
        title: "Bombay Closet Cleanse",
        tagline: "Sustainable Thrift Store",
        description: "A comprehensive e-commerce experience for a luxury thrift shop, focused on smooth transitions, product discovery, and a minimalist premium feel.",
        tech: ["React", "CSS Modules", "Vite", "Responsive Design"],
        image: bombayCloset,
        links: {
            live: "https://bombay-closet-by-demu.netlify.app/",
            github: "https://github.com/himmatmundhe07/Website-Clones/tree/master/Bombay-closet",
            youtube: "https://youtu.be/fUZAMmhxA8o?si=lC4vTyUr52ZbwUHl",
        },
    },
    {
        category: "clones",
        title: "Cetaphil",
        tagline: "Medical Skincare Interface Clone",
        description: "A precision-engineered Cetaphil replica with clean typography, sticky filtering navigation, and corporate brand-consistent UI patterns.",
        tech: ["React", "HTML5", "CSS3", "JavaScript"],
        image: cetaphil,
        links: {
            live: "https://cetaphilbydemu.netlify.app/",
            github: "https://github.com/himmatmundhe07/Website-Clones/tree/master/Cetaphil",
            youtube: "https://youtu.be/6w-wtvtZ4KY?si=Ic8uHW_hC9nCLzgh",
        },
    },
    {
        category: "clones",
        title: "True Classic",
        tagline: "Apparel Brand E-commerce Clone",
        description: "A high-conversion fashion e-commerce clone showcasing complex product grids, social proof components, and marketing-focused UI sections.",
        tech: ["React", "Tailwind CSS", "Lucide Icons"],
        image: trueClassic,
        links: {
            live: "https://tureclassicbydemu.netlify.app/",
            github: "https://github.com/himmatmundhe07/Website-Clones/tree/master/True-Classic",
            youtube: "https://youtu.be/9urEq2xSO2E?si=4odKTMPLvKfZckGV",
        },
    },
    {
        category: "clones",
        title: "iCalm",
        tagline: "Wellness Store Interface",
        description: "A serene minimalist wellness store experience centered around storytelling, whitespace, and accessibility-forward product exploration.",
        tech: ["React", "Framer Motion", "Styled Components"],
        image: iCalm,
        links: {
            live: "https://icalmbydemu.netlify.app/",
            github: "https://github.com/himmatmundhe07/Website-Clones/tree/master/icalm",
            youtube: "https://youtu.be/Nq9c__ZcADc?si=kc2yUginavk5kq9Q",
        },
    },
    {
        category: "games",
        title: "Whack-a-Mole",
        tagline: "Reaction Speed Game",
        description: "Classic arcade fun for the web: smack moles before they hide, track your reflexes, and push for higher scores.",
        tech: ["Vanilla JS", "DOM Manipulation", "Game Timer"],
        image: whackAMoleImage,
        links: {
            live: "https://whack-a-mole-by-demu.netlify.app/",
            github: "https://github.com/himmatmundhe07/JavaScript-Games/tree/master/Whack-a-mole",
            youtube: "https://youtu.be/J62u0EuMsu0?si=Wp3O1CgPylw8uOQ_",
        },
        color: "bg-amber-600",
    },
    {
        category: "games",
        title: "RGB Master",
        tagline: "Color Theory Challenge",
        description: "A visual perception challenge where players identify the correct color from its RGB code while sharpening color theory instincts.",
        tech: ["JavaScript", "Color Logic", "Game UI"],
        image: rgbMasterImage,
        links: {
            live: "https://js-color-guessing-game.netlify.app/",
            github: "https://github.com/himmatmundhe07/JavaScript-Games/tree/master/Color-game",
            youtube: "https://youtu.be/L831qOq3tGw?si=FwZ3uJpD1mX2eT1R",
        },
    },
    {
        category: "games",
        title: "Click Counter",
        tagline: "Speed and Stress Test",
        description: "A simple but addictive click-speed game with CPM tracking and personal best records for instant replay value.",
        tech: ["JavaScript", "Event Handling", "State Tracking"],
        image: clickCounterImage,
        links: {
            live: "https://js-game-click.netlify.app/",
            github: "https://github.com/himmatmundhe07/JavaScript-Games/tree/master/ClickGame",
            youtube: "https://youtu.be/T5_hE5tYSf4?si=63kH2g0yv4R3eN1X",
        },
        color: "bg-purple-600",
    },
    {
        category: "designs",
        title: "Flight Booking UI/UX",
        tagline: "End-to-End Booking Flow",
        description: "High-fidelity Figma booking flow with reusable components and progressive disclosure for better conversion and clarity.",
        tech: ["Figma", "UI/UX", "Prototyping", "Design System"],
        image: flightBookingImage,
        links: {
            figma: "https://www.figma.com/design/Cwx3aXDvJ9tM0QU760L0iw/work?node-id=362-1612&t=JFYDWb9Cwte8Hqp5-1",
        },
        color: "bg-violet-600",
    },
    {
        category: "designs",
        title: "CodingGita Website Clone (Design)",
        tagline: "Educational Platform Design Clone",
        description: "A pixel-perfect Figma recreation of CodingGita focused on layout discipline, hierarchy, and developer-friendly branding.",
        tech: ["Figma", "Web Design", "Layout", "UI Clone"],
        image: codingGitaImage,
        links: {
            figma: "https://www.figma.com/design/Cwx3aXDvJ9tM0QU760L0iw/work?node-id=59-352&t=JFYDWb9Cwte8Hqp5-1",
        },
        color: "bg-slate-700",
    },
    {
        category: "designs",
        title: "Mall Website (Design)",
        tagline: "Retail Experience Interface",
        description: "Modern shopping mall website design with storefront discovery, promotional sections, and high-clarity navigation structures.",
        tech: ["Figma", "E-Commerce", "UI/UX", "Wireframing"],
        image: mallWebsiteImage,
        links: {
            figma: "https://www.figma.com/design/Cwx3aXDvJ9tM0QU760L0iw/work?node-id=472-3736&t=JFYDWb9Cwte8Hqp5-1",
        },
        color: "bg-cyan-700",
    },
    {
        category: "designs",
        title: "Educational Website (Design)",
        tagline: "Learning Platform Experience",
        description: "A clean educational interface with course discovery, dashboard patterns, and accessibility-driven information architecture.",
        tech: ["Figma", "EdTech", "Dashboard", "Prototyping"],
        image: educationSiteImage,
        links: {
            figma: "https://www.figma.com/design/Cwx3aXDvJ9tM0QU760L0iw/work?node-id=213-558&t=JFYDWb9Cwte8Hqp5-1",
        },
        color: "bg-emerald-700",
    },
];

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("functional");

    const filteredProjects = projects.filter((project) => project.category === activeCategory);

    return (
        <section id="projects" className="py-24 bg-transparent relative transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-heading">
                        Selected Projects
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
                        Functional apps, website clones, games, and UI/UX design work from my project lab.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                                activeCategory === cat.id
                                    ? "bg-slate-900 dark:bg-blue-600 text-white shadow-lg scale-105"
                                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                            }`}
                        >
                            {cat.icon && <cat.icon size={18} />}
                            {cat.label}
                        </button>
                    ))}
                </div>

                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.title}
                                className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 group flex flex-col h-full"
                            >
                                <div className={`h-52 relative overflow-hidden ${project.image ? "" : project.color || "bg-slate-800"}`}>
                                    {project.image ? (
                                        <>
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors"></div>
                                        </>
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                                            <div className="absolute inset-0 bg-black/10"></div>
                                            <h3 className="text-3xl font-bold text-white/90 font-heading text-center px-4 relative z-10">
                                                {project.title}
                                            </h3>
                                        </div>
                                    )}

                                    <div className="absolute top-4 right-4 z-20">
                                        {project.category === "functional" && (
                                            <span className="bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">App</span>
                                        )}
                                        {project.category === "clones" && (
                                            <span className="bg-emerald-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">Clone</span>
                                        )}
                                        {project.category === "games" && (
                                            <span className="bg-amber-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">Game</span>
                                        )}
                                        {project.category === "designs" && (
                                            <span className="bg-violet-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">Design</span>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="mb-2">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-1">{project.title}</h3>
                                        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{project.tagline}</p>
                                    </div>

                                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto">
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tech.map((t) => (
                                                <span
                                                    key={t}
                                                    className="text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-200/50 dark:bg-slate-700/50 px-2 py-1 rounded border border-slate-200 dark:border-slate-600"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center flex-wrap gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
                                            {project.links.github && (
                                                <a
                                                    href={project.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded text-slate-900 dark:text-white text-sm font-bold transition-all"
                                                >
                                                    <Github size={16} /> Code
                                                </a>
                                            )}
                                            {project.links.live && (
                                                <a
                                                    href={project.links.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors"
                                                >
                                                    <ExternalLink size={16} /> Live
                                                </a>
                                            )}
                                            {project.links.figma && (
                                                <a
                                                    href={project.links.figma}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm font-medium transition-colors"
                                                >
                                                    <Pen size={16} /> Figma
                                                </a>
                                            )}
                                            {project.links.certificate && (
                                                <a
                                                    href={project.links.certificate}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 text-sm font-medium transition-colors"
                                                >
                                                    <Award size={16} /> Certificate
                                                </a>
                                            )}
                                            {project.links.youtube && (
                                                <a
                                                    href={project.links.youtube}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 text-sm font-medium transition-colors ml-auto"
                                                >
                                                    <Youtube size={18} /> Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
