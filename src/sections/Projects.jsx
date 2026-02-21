import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Youtube, Layers, Layout, Gamepad2 } from "lucide-react";

import bombayCloset from "../assets/Bombay Closet Cleanse.png";
import cetaphil from "../assets/cetaphil.png";
import trueClassic from "../assets/True-Classic.png";
import iCalm from "../assets/Icalm.png";
import rgbMaster from "../assets/color guessing game.jpg";

const categories = [
    { id: "functional", label: "Functional Apps", icon: Layers },
    { id: "clones", label: "Website Clones", icon: Layout },
    { id: "games", label: "Interactive Games", icon: Gamepad2 },
];

const projects = [
    // Functional Applications
    {
        category: "functional",
        title: "Taaza Khabar",
        tagline: "Real-time News & Weather Portal",
        description: "A responsive web application acting as a central hub for breaking news and live weather updates. Features a clean interface inspired by top-tier publications.",
        tech: ["React", "The Guardian API", "WeatherAPI", "CSS Grid"],
        image: "https://private-user-images.githubusercontent.com/139203530/526552284-d7fd68bf-67f8-463e-b77d-b77a26cf81a6.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzE2NTQxNzIsIm5iZiI6MTc3MTY1Mzg3MiwicGF0aCI6Ii8xMzkyMDM1MzAvNTI2NTUyMjg0LWQ3ZmQ2OGJmLTY3ZjgtNDYzZS1iNzdkLWI3N2EyNmNmODFhNi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMjIxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDIyMVQwNjA0MzJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xMDQ0YTc5N2Y4MDUxYjUyM2EwNjRmNWE5Nzc3ZTJhNzg3MjFjM2Y2NjVmNmI5NGQ2YmRlZmY2YzM5ODc1NDJjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.SKqK7-hW7W9Yut35F2f-uWu63ItnBonKBnjIxssNTE0",
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
        description: "A decentralized chat application enabling real-time communication without Internet or SIM cards using Bluetooth RFCOMM.",
        tech: ["Java", "Android SDK", "Bluetooth API"],
        links: {
            github: "https://github.com/himmatmundhe07/Air-Talks",
        },
        color: "bg-blue-600",
    },

    // Website Replicas
    {
        category: "clones",
        title: "Bombay Closet Cleanse",
        tagline: "Thrift Store E-commerce",
        description: "A thrift shop e-commerce interface focusing on fashion and sustainability. Features home, premium finds, and cart pages.",
        tech: ["HTML/CSS", "JS", "Responsive"],
        image: bombayCloset,
        links: {
            live: "https://bombay-closet-by-demu.netlify.app/",
            github: "https://github.com/himmatmundhe07/Website-Clones/tree/master/Bombay-closet",
            youtube: "https://youtu.be/fUZAMmhxA8o?si=lC4vTyUr52ZbwUHl",
        },
    },
    {
        category: "clones",
        title: "Cetaphil Clone",
        tagline: "Skincare Brand Replica",
        description: "Medical-grade skincare brand replica. Focuses on clean aesthetics, sticky navigation, and detailed product filtering.",
        tech: ["HTML/CSS", "JS", "Responsive"],
        image: cetaphil,
        links: {
            live: "https://cetaphilbydemu.netlify.app/",
            github: "https://github.com/himmatmundhe07/Website-Clones/tree/master/Cetaphil",
            youtube: "https://youtu.be/6w-wtvtZ4KY?si=Ic8uHW_hC9nCLzgh",
        },
    },
    {
        category: "clones",
        title: "True Classic Clone",
        tagline: "Men's Fashion E-commerce",
        description: "Men's fashion e-commerce site. Features extensive product grids, review badges, and best-seller filtering.",
        tech: ["Frontend", "E-commerce UI"],
        image: trueClassic,
        links: {
            live: "https://tureclassicbydemu.netlify.app/",
            github: "https://github.com/himmatmundhe07/Website-Clones/tree/master/True-Classic",
            youtube: "https://youtu.be/9urEq2xSO2E?si=4odKTMPLvKfZckGV",
        },
    },
    {
        category: "clones",
        title: "iCalm Clone",
        tagline: "Wellness Brand Page",
        description: "Stress-relief supplement brand page. Minimalist design focusing on storytelling and 'Our Story' sections.",
        tech: ["Minimalist UI", "CSS Animations"],
        image: iCalm,
        links: {
            live: "https://icalmbydemu.netlify.app/",
            github: "https://github.com/himmatmundhe07/Website-Clones/tree/master/icalm",
            youtube: "https://youtu.be/Nq9c__ZcADc?si=kc2yUginavk5kq9Q",
        },
    },

    // Interactive Games
    {
        category: "games",
        title: "Whack-a-Mole",
        tagline: "Classic Arcade Game",
        description: "Smack the moles before they hide! Test your reaction speed with this classic arcade game.",
        tech: ["Vanilla JS", "DOM Manipulation"],
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
        tagline: "Color Theory Game",
        description: "Test your color theory skills. Guess the correct color from the RGB code shown.",
        tech: ["JavaScript", "Color Logic"],
        image: rgbMaster,
        links: {
            live: "https://js-color-guessing-game.netlify.app/",
            github: "https://github.com/himmatmundhe07/JavaScript-Games/tree/master/Color-game",
            youtube: "https://youtu.be/L831qOq3tGw?si=FwZ3uJpD1mX2eT1R",
        },
    },
    {
        category: "games",
        title: "Click Counter",
        tagline: "Speed Test & Stress Relief",
        description: "How fast can you click? A simple but addictive stress reliever and speed test.",
        tech: ["JS Events", "State Management"],
        links: {
            live: "https://js-game-click.netlify.app/",
            github: "https://github.com/himmatmundhe07/JavaScript-Games/tree/master/ClickGame",
            youtube: "https://youtu.be/T5_hE5tYSf4?si=63kH2g0yv4R3eN1X",
        },
        color: "bg-purple-600",
    },
];

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("functional");

    const filteredProjects = projects.filter(p => p.category === activeCategory);

    return (
        <section id="projects" className="py-24 bg-white dark:bg-slate-900 relative transition-colors duration-300">
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
                        A showcase of functional applications, pixel-perfect clones, and interactive games.
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === cat.id
                                ? "bg-slate-900 dark:bg-blue-600 text-white shadow-lg scale-105"
                                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                                }`}
                        >
                            {cat.icon && <cat.icon size={18} />}
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.title}
                                className="bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 group flex flex-col h-full"
                            >
                                {/* Image or Fallback Header */}
                                <div className={`h-52 relative overflow-hidden ${project.image ? "" : project.color || 'bg-slate-800'}`}>
                                    {project.image ? (
                                        <>
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
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

                                    {/* Category Badge */}
                                    <div className="absolute top-4 right-4 z-20">
                                        {project.category === "functional" && <span className="bg-blue-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">App</span>}
                                        {project.category === "clones" && <span className="bg-emerald-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">Clone</span>}
                                        {project.category === "games" && <span className="bg-amber-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">Game</span>}
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            {project.image && <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading mb-1">{project.title}</h3>}
                                            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{project.tagline}</p>
                                        </div>
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

                                        <div className="flex items-center gap-4 pt-4 border-t border-slate-100 dark:border-slate-700">
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
