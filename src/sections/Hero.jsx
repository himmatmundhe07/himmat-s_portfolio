import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download, Youtube, Twitter } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";
import { Javascript, Typescript } from "lucide-react";

export default function Hero() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, x: -30 },
        show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center bg-transparent pt-20 overflow-hidden transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
                <motion.div variants={container} initial="hidden" animate="show" className="text-left order-2 md:order-1">
                    <motion.div variants={item} className="mb-4 flex items-center gap-3">
                        <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold tracking-wide uppercase border border-blue-100 dark:border-blue-800">
                            Portfolio
                        </span>
                        <span className="h-px w-12 bg-blue-200 dark:bg-blue-800"></span>
                    </motion.div>

                    <motion.h1
                        variants={item}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-slate-900 dark:text-white mb-4 tracking-tight leading-tight"
                    >
                        Hi, I am <br />
                        <span className="text-blue-600 dark:text-blue-500 relative inline-block">
                            <Typewriter
                                words={["Himmat Mundhe", "a MERN Developer", "a UI/UX Designer"]}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={120}
                                deleteSpeed={80}
                                delaySpeed={1500}
                            />
                            <svg
                                className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 dark:text-blue-900 -z-10"
                                viewBox="0 0 100 10"
                                preserveAspectRatio="none"
                            >
                                <path d="M0 5 Q 50 10 100 5 L 100 0 Q 50 5 0 0 Z" fill="currentColor" />
                            </svg>
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg mb-10 leading-relaxed font-light"
                    >
                        <strong className="font-semibold text-slate-900 dark:text-white block mb-4">
                            I build production-grade full-stack systems focused on clean architecture and real user impact.
                        </strong>
                        CSE student and builder from Ahmedabad, Gujarat, working across MERN apps, emergency health tech,
                        interactive web experiences, and UI/UX design.
                    </motion.p>

                    <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
                        <a
                            href="https://drive.google.com/file/d/1r_KVQM-E3jN99eb-pW0Jm1R7LUSIj85d/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group px-8 py-4 bg-slate-900 dark:bg-blue-600 text-white font-medium rounded-xl hover:bg-slate-800 dark:hover:bg-blue-700 transition-all flex items-center gap-2 shadow-xl shadow-slate-900/20 dark:shadow-blue-900/20 active:scale-95"
                        >
                            <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                            View Resume
                        </a>
                        <Link
                            to="/contact"
                            className="group px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-medium rounded-xl hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md transition-all flex items-center gap-2 active:scale-95"
                        >
                            Let us Talk
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    <motion.div variants={item} className="flex gap-4 flex-wrap text-slate-900 dark:text-slate-400">
                        <a
                            href="https://github.com/himmatmundhe07"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 dark:hover:text-white transition-colors p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"
                        >
                            <Github size={28} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/himmat-mundhe/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors p-2 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-full"
                        >
                            <Linkedin size={28} />
                        </a>
                        <a
                            href="mailto:himmatmundhe07@gmail.com"
                            className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors p-2 hover:bg-amber-50 dark:hover:bg-slate-800 rounded-full"
                        >
                            <Mail size={28} />
                        </a>
                        <a
                            href="https://leetcode.com/u/Mundhe_Himmat/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors p-2 hover:bg-yellow-50 dark:hover:bg-slate-800 rounded-full"
                        >
                            <SiLeetcode size={28} />
                        </a>
                        <a
                            href="https://www.youtube.com/@himmatmundhe07"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-red-500 dark:hover:text-red-400 transition-colors p-2 hover:bg-red-50 dark:hover:bg-slate-800 rounded-full"
                        >
                            <Youtube size={32} />
                        </a>
                        <a
                            href="https://x.com/Himmat_Mundhe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-slate-900 dark:hover:text-white transition-colors p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"
                        >
                            <Twitter size={28} />
                        </a>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
                    className="relative order-1 md:order-2 flex justify-center md:justify-end"
                >
                    <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
                        <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-blue-900/20 border-4 border-white dark:border-slate-800 transform rotate-3 hover:rotate-0 transition-all duration-700">
                            <img
                                src="/himmat.webp"
                                alt="Himmat Mundhe"
                                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                                loading="eager"
                                fetchpriority="high"
                                decoding="async"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
                        </div>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 animate-bounce-subtle"
                        >
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-slate-700 dark:text-slate-200 font-semibold text-sm">Open to Work</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
