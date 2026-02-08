import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const timelineData = [
    {
        year: "2025 - Present",
        title: "BE/B.Tech in CSE",
        description: "Pursuing Bachelor's in Computer Science Engineering at Swaminarayan University in collaboration with Coding Gita. Focusing on Full Stack Development and System Design.",
        type: "Education",
    },
    {
        year: "2025",
        title: "Higher Secondary",
        description: "Completed Higher Secondary Education with a focus on Science/Mathematics.",
        type: "Education",
    },
    {
        year: "2023",
        title: "Secondary School",
        description: "Completed Secondary School Foundation.",
        type: "Education",
    },
];

export default function Journey() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: "spring", stiffness: 50, damping: 20 }
        },
    };

    return (
        <section id="journey" className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-blue-50/50 dark:bg-blue-900/10 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-50 dark:opacity-20 transition-colors"></div>
                <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-50 dark:opacity-20 transition-colors"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-heading tracking-tight">My Journey</h2>
                    <p className="text-slate-600 dark:text-slate-300 text-lg max-w-xl mx-auto leading-relaxed">From writing my first line of code to architecting complex solutions, here is my path.</p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-4 md:ml-0 md:pl-0 space-y-16 transition-colors"
                >
                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariant}
                            className="relative pl-12 md:pl-0 md:grid md:grid-cols-5 items-center gap-10 group"
                        >
                            {/* Year - Left on Desktop */}
                            <div className="md:col-span-1 md:text-right mb-4 md:mb-0">
                                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-slate-800 px-4 py-1.5 rounded-full inline-block border border-blue-100 dark:border-slate-700 shadow-sm group-hover:bg-blue-600 group-hover:text-white dark:group-hover:text-white transition-all duration-300">
                                    {item.year}
                                </span>
                            </div>

                            {/* Timeline Dot */}
                            <div className="absolute left-[-9px] top-0 md:left-auto md:relative md:flex md:justify-center md:col-span-1 z-10 md:bg-transparent py-2">
                                <div className="w-5 h-5 bg-white dark:bg-slate-800 border-4 border-slate-300 dark:border-slate-600 rounded-full group-hover:scale-125 group-hover:border-blue-600 dark:group-hover:border-blue-500 transition-all duration-300 shadow-sm z-20"></div>
                            </div>

                            {/* Content - Right on Desktop */}
                            <div className="md:col-span-3 bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group-hover:border-blue-100 dark:group-hover:border-slate-600">
                                <div className="absolute top-6 -left-3 w-6 h-6 bg-white dark:bg-slate-800 transform rotate-45 border-l border-b border-slate-100 dark:border-slate-700 group-hover:border-blue-100 dark:group-hover:border-slate-600 transition-colors duration-300 md:block hidden"></div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2 font-heading">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                                    {item.description}
                                </p>
                                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 mt-4 block uppercase tracking-widest">
                                    {item.type}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
