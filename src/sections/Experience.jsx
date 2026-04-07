import React from "react";
import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays } from "lucide-react";

const experiences = [
    {
        role: "Freelance Full Stack Developer",
        org: "PNC Public School",
        period: "2026",
        description:
            "Built a secure School Management System with role-based multi dashboards and a Summer Camp platform with landing pages, dynamic registration, and an admin panel.",
        tech: ["React", "Express", "Node.js", "MongoDB", "Tailwind CSS"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-transparent relative overflow-hidden transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-heading">
                        Experience
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
                        Real-world work where product thinking, speed, and reliability all matter.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {experiences.map((item, index) => (
                        <motion.article
                            key={`${item.role}-${item.org}`}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all"
                        >
                            <div className="flex items-start justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-heading">{item.role}</h3>
                                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">{item.org}</p>
                                </div>
                                <div className="h-11 w-11 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 grid place-items-center">
                                    <BriefcaseBusiness size={20} />
                                </div>
                            </div>

                            <div className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-5">
                                <CalendarDays size={15} />
                                {item.period}
                            </div>

                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{item.description}</p>

                            <div className="flex flex-wrap gap-2 pt-5 border-t border-slate-100 dark:border-slate-700">
                                {item.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700/60 px-2.5 py-1.5 rounded-md border border-slate-200 dark:border-slate-600"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
