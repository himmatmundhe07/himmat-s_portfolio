import React from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-32 bg-transparent relative overflow-hidden transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="grid md:grid-cols-2 gap-20 items-center"
                >
                    {/* Text Content */}
                    <div className="order-2 md:order-1">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="h-px w-8 bg-blue-600 dark:bg-blue-500"></span>
                            <span className="text-blue-600 dark:text-blue-500 font-bold uppercase tracking-widest text-sm">About Me</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 font-heading leading-tight">
                            CSE Student & <br />
                            <span className="text-slate-600 dark:text-slate-400">MERN Stack Developer</span>
                        </h2>

                        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                            <p>
                                I'm a first-year <strong className="text-slate-900 dark:text-white font-semibold">Computer Science Engineering student</strong> at Swaminarayan University (Semester 1 SCPA: 10/10), specializing in the <strong className="text-slate-900 dark:text-white font-semibold">MERN Stack</strong>. Experienced in building production-grade systems including a full-stack healthcare platform and real-time communication tools.
                            </p>
                            <p>
                                Strong focus on <strong className="text-slate-900 dark:text-white font-semibold">clean code, scalable architecture, and intuitive UI/UX</strong>. I've solved 150+ problems on LeetCode with a strong grasp of arrays, strings, recursion, and dynamic programming.
                            </p>
                        </div>

                        <div className="mt-10 flex gap-6 text-center md:text-left">
                            <div className="flex flex-col gap-1">
                                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400 font-heading">150+</span>
                                <span className="text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wide font-bold">LeetCode Solved</span>
                            </div>
                            <div className="w-px h-12 bg-slate-200 dark:bg-slate-700"></div>
                            <div className="flex flex-col gap-1">
                                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400 font-heading">10+</span>
                                <span className="text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wide font-bold">Projects Built</span>
                            </div>
                            <div className="w-px h-12 bg-slate-200 dark:bg-slate-700"></div>
                            <div className="flex flex-col gap-1">
                                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400 font-heading">10</span>
                                <span className="text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wide font-bold">Sem 1 SCPA</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual/Card */}
                    <div className="relative order-1 md:order-2">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 relative shadow-2xl shadow-slate-900/10 dark:shadow-black/30 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950"></div>

                            {/* Simulated Code Editor */}
                            <div className="absolute inset-4 bg-slate-900 rounded-xl border border-slate-700/50 p-6 overflow-hidden" aria-label="Visual representation of developer identity as code">
                                <div className="flex gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="space-y-3 font-mono text-xs md:text-sm">
                                    <div className="flex gap-2">
                                        <span className="text-pink-400">const</span>
                                        <span className="text-blue-400">developer</span>
                                        <span className="text-slate-400">=</span>
                                        <span className="text-yellow-300">{"{"}</span>
                                    </div>
                                    <div className="pl-6 flex gap-2">
                                        <span className="text-slate-400">name:</span>
                                        <span className="text-green-400">'Himmat'</span>,
                                    </div>
                                    <div className="pl-6 flex gap-2">
                                        <span className="text-slate-400">role:</span>
                                        <span className="text-green-400">'MERN Stack'</span>,
                                    </div>
                                    <div className="pl-6 flex gap-2">
                                        <span className="text-slate-400">focus:</span>
                                        <span className="text-yellow-300">['Clean Code', 'Performance']</span>
                                    </div>
                                    <div className="text-yellow-300">{"}"}</div>
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950 to-transparent">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                        <Code size={20} />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">System Thinking</p>
                                        <p className="text-slate-400 text-xs">Always learning</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full -z-10 blur-3xl opacity-50 dark:opacity-20 mix-blend-multiply dark:mix-blend-normal transition-colors"></div>
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-indigo-100 dark:bg-indigo-900/20 rounded-full -z-10 blur-3xl opacity-50 dark:opacity-20 mix-blend-multiply dark:mix-blend-normal transition-colors"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
