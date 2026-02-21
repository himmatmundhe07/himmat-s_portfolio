import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import { Typewriter } from 'react-simple-typewriter';
import profileImage from "../assets/himmat.png";

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
            className="min-h-screen flex items-center bg-slate-50 dark:bg-slate-900 pt-20 overflow-hidden transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
                {/* Left Column: Text Content */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="text-left order-2 md:order-1"
                >
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
                        Hi, I’m <br />
                        <span className="text-blue-600 dark:text-blue-500 relative inline-block">
                            <Typewriter
                                words={['Himmat', 'a Developer', 'a Designer']}
                                loop={0}
                                cursor
                                cursorStyle='|'
                                typeSpeed={120}
                                deleteSpeed={80}
                                delaySpeed={1500}
                            />
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 dark:text-blue-900 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5 L 100 0 Q 50 5 0 0 Z" fill="currentColor" />
                            </svg>
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg mb-10 leading-relaxed font-light"
                    >
                        <strong className="font-semibold text-slate-900 dark:text-white block mb-4">
                            I build clean, interactive web experiences with a focus on usability and performance.
                        </strong>
                        A Computer Science student and aspiring Software Developer, focused on
                        building practical, efficient solutions through code.
                    </motion.p>

                    <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
                        <a
                            href="/resume.pdf"
                            className="group px-8 py-4 bg-slate-900 dark:bg-blue-600 text-white font-medium rounded-xl hover:bg-slate-800 dark:hover:bg-blue-700 transition-all flex items-center gap-2 shadow-xl shadow-slate-900/20 dark:shadow-blue-900/20 active:scale-95"
                        >
                            <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                            Download Resume
                        </a>
                        <a
                            href="#contact"
                            className="group px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-medium rounded-xl hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md transition-all flex items-center gap-2 active:scale-95"
                        >
                            Let's Talk
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>

                    <motion.div variants={item} className="flex gap-6 text-slate-900 dark:text-slate-400">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 dark:hover:text-white transition-colors p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"
                        >
                            <Github size={28} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors p-2 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-full"
                        >
                            <Linkedin size={28} />
                        </a>
                        <a
                            href="mailto:email@example.com"
                            className="hover:text-red-500 dark:hover:text-red-400 transition-colors p-2 hover:bg-red-50 dark:hover:bg-slate-800 rounded-full"
                        >
                            <Mail size={28} />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Column: Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }}
                    className="relative order-1 md:order-2 flex justify-center md:justify-end"
                >
                    <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
                        {/* Abstract decorative blobs */}
                        <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 dark:opacity-20 animate-blob"></div>
                        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-100 dark:bg-indigo-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000"></div>

                        {/* Main Image Container */}
                        <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10 dark:shadow-blue-900/20 border-4 border-white dark:border-slate-800 transform rotate-3 hover:rotate-0 transition-all duration-700">
                            <img
                                src={profileImage}
                                alt="Himmat"
                                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                            />
                            {/* Overlay gradient for better text contrast if needed, mostly for aesthetics */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent"></div>
                        </div>

                        {/* Floating Badge */}
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
