import React, { useState, useEffect } from "react";
import { ArrowUp, Github, Linkedin, Mail, Heart, Twitter } from "lucide-react";
import { Link } from "react-scroll";
import GithubActivity from "./GithubActivity";

export default function Footer() {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 relative overflow-hidden">

            <div className="py-12 relative z-10 border-t border-slate-800/50">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        {/* Brand */}
                        <div className="md:col-span-1">
                            <Link to="home" smooth={true} duration={500} className="text-2xl font-bold font-heading text-white cursor-pointer inline-block mb-4">
                                Himmat<span className="text-blue-500">.</span>
                            </Link>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                Building digital experiences with clean code and modern design principles.
                            </p>
                            <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest">
                                Always learning. Always building.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Explore</h4>
                            <ul className="space-y-3 text-sm">
                                {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link
                                            to={item.toLowerCase()}
                                            smooth={true}
                                            duration={500}
                                            className="text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Connect</h4>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <a href="mailto:himmat.mundhe.cg@gmail.com" className="text-slate-400 hover:text-white transition-colors">
                                        himmat.mundhe.cg@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+919712720305" className="text-slate-400 hover:text-white transition-colors">
                                        +91 9712720305
                                    </a>
                                </li>
                                <li className="text-slate-500">
                                    Gujarat, India
                                </li>
                            </ul>
                        </div>

                        {/* Socials */}
                        <div>
                            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Follow Me</h4>
                            <div className="flex gap-4">
                                <a href="https://github.com/himmatmundhe07" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-lg hover:bg-slate-700 hover:text-white transition-all text-slate-400">
                                    <Github size={20} />
                                </a>
                                <a href="https://linkedin.com/in/himmat-mundhe-17b5a1213" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all text-slate-400">
                                    <Linkedin size={20} />
                                </a>
                                <a href="https://twitter.com/himmat_mundhe" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-lg hover:bg-sky-500 hover:text-white transition-all text-slate-400">
                                    <Twitter size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-slate-500">
                        <p>© {new Date().getFullYear()} Himmat Mundhe. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
