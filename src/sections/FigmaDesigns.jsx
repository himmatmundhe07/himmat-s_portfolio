import React from "react";
import { motion } from "framer-motion";
import { Pen } from "lucide-react";

import flightBookingImage from "../assets/flight-booking.png";
import codingGitaImage from "../assets/coding-gita.png";
import mallWebsiteImage from "../assets/mall-website.png";
import educationSiteImage from "../assets/education-site.png";

const figmaProjects = [
    {
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
        title: "CodingGita Website Clone",
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
        title: "Mall Website",
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
        title: "Educational Website",
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

export default function FigmaDesigns() {
    return (
        <section id="designs" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <div className="flex justify-center mb-4">
                        <span className="p-3 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-full">
                            <Pen size={28} />
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-heading">
                        UI/UX Architecture
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Precision-engineered Figma designs focusing on wireframing, layout discipline, and developer handoffs.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10">
                    {figmaProjects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                        >
                            <div className="h-64 relative overflow-hidden bg-slate-100 dark:bg-slate-900 p-4 pb-0 flex items-end justify-center">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    width={600}
                                    height={400}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-[90%] h-[90%] object-cover object-top rounded-t-xl transform group-hover:scale-105 transition-transform duration-700 shadow-lg"
                                />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="bg-violet-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-sm shadow-md">
                                        Figma
                                    </span>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-heading mb-1">{project.title}</h3>
                                    <p className="text-violet-600 dark:text-violet-400 font-semibold text-sm">{project.tagline}</p>
                                </div>

                                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs font-bold text-slate-800 dark:text-slate-100 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded border border-slate-300 dark:border-slate-600"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.links.figma}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-full items-center justify-center gap-2 bg-slate-900 dark:bg-violet-600 hover:bg-slate-800 dark:hover:bg-violet-700 text-white py-3 px-6 rounded-xl font-bold transition-all"
                                >
                                    <Pen size={18} /> View in Figma
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
