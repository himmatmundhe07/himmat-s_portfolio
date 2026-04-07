import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Loader2, Send, Github, Linkedin, ExternalLink, Youtube, Twitter, MapPin } from "lucide-react";
import { SiLeetcode } from "react-icons/si";

const SUBMIT_COOLDOWN_MS = 30_000;

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [company, setCompany] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const formStartRef = useRef(Date.now());
    const lastSubmitRef = useRef(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const resetForm = () => {
        setForm({ name: "", email: "", message: "" });
        setCompany("");
        formStartRef.current = Date.now();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const now = Date.now();
        if (now - lastSubmitRef.current < SUBMIT_COOLDOWN_MS) {
            setError("Please wait a few seconds before sending another message.");
            return;
        }

        setLoading(true);
        setSuccess(false);
        setError("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...form,
                    company,
                    elapsedMs: now - formStartRef.current,
                }),
            });

            const payload = await response.json().catch(() => ({}));
            if (!response.ok) {
                throw new Error(payload?.message || "Something went wrong. Please try again later.");
            }

            setSuccess(true);
            resetForm();
            lastSubmitRef.current = now;
            setTimeout(() => setSuccess(false), 5000);
        } catch (submitError) {
            const message = submitError instanceof Error ? submitError.message : "Something went wrong. Please try again later.";
            setError(message);
            console.error(submitError);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-24 bg-transparent relative overflow-hidden transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-heading">
                        Let us Connect
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
                        Have an idea, internship, or collaboration in mind? I would love to hear about it.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-all">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-heading">Contact Details</h3>
                            <div className="space-y-6">
                                <a
                                    href="mailto:himmatmundhe07@gmail.com"
                                    className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <Mail size={22} />
                                    </div>
                                    <span className="font-medium">himmatmundhe07@gmail.com</span>
                                </a>

                                <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
                                    <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                                        <MapPin size={22} />
                                    </div>
                                    <span className="font-medium">Ahmedabad, Gujarat</span>
                                </div>

                                <a
                                    href="https://www.linkedin.com/in/himmat-mundhe/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-blue-50 dark:bg-slate-700 rounded-full flex items-center justify-center text-blue-700 dark:text-blue-400 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                                        <Linkedin size={22} />
                                    </div>
                                    <span className="font-medium">LinkedIn Profile</span>
                                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                                </a>

                                <a
                                    href="https://github.com/himmatmundhe07"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                                        <Github size={22} />
                                    </div>
                                    <span className="font-medium">GitHub Profile</span>
                                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                                </a>

                                <a
                                    href="https://www.youtube.com/@himmatmundhe07"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-500 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-red-50 dark:bg-slate-700 rounded-full flex items-center justify-center text-red-600 dark:text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                                        <Youtube size={22} />
                                    </div>
                                    <span className="font-medium">YouTube Channel</span>
                                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                                </a>

                                <a
                                    href="https://x.com/Himmat_Mundhe"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                                        <Twitter size={22} />
                                    </div>
                                    <span className="font-medium">X (Twitter)</span>
                                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                                </a>

                                <a
                                    href="https://leetcode.com/u/Mundhe_Himmat/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors group"
                                >
                                    <div className="w-12 h-12 bg-yellow-50 dark:bg-slate-700 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-500 group-hover:bg-yellow-600 group-hover:text-white transition-all duration-300">
                                        <SiLeetcode size={22} />
                                    </div>
                                    <span className="font-medium">LeetCode Profile</span>
                                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 relative transition-colors"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="hidden" aria-hidden="true">
                                <label htmlFor="company">Company</label>
                                <input
                                    id="company"
                                    type="text"
                                    name="company"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </div>

                            <div>
                                <label className="block text-slate-700 dark:text-slate-300 font-medium mb-2 text-sm uppercase tracking-wider">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="What is your name?"
                                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent block p-4 transition-all outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-slate-700 dark:text-slate-300 font-medium mb-2 text-sm uppercase tracking-wider">Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="What is your email?"
                                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent block p-4 transition-all outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-slate-700 dark:text-slate-300 font-medium mb-2 text-sm uppercase tracking-wider">Message</label>
                                <textarea
                                    rows="5"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="What do you want to say?"
                                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white text-sm rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent block p-4 transition-all outline-none resize-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-4 px-6 bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} /> Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </button>

                            {success && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-green-50 text-green-700 rounded-xl text-center font-medium border border-green-100"
                                >
                                    Thank you. I will get back to you as soon as possible.
                                </motion.div>
                            )}

                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-red-50 text-red-700 rounded-xl text-center font-medium border border-red-100"
                                >
                                    {error}
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
