import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Loader2, Send, Github, Linkedin, ExternalLink, Youtube, Phone } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';

export default function Contact() {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);
        setError(false);

        emailjs
            .send(
                'service_3qxq711', // Service ID
                'template_bge35so', // Template ID
                {
                    from_name: form.name,
                    to_name: 'Himmat',
                    from_email: form.email,
                    to_email: 'himmat.mundhe.cg@gmail.com',
                    message: form.message,
                },
                'xnDOB86_fiNFY95I8' // Public Key
            )
            .then(
                () => {
                    setLoading(false);
                    setSuccess(true);
                    setForm({
                        name: '',
                        email: '',
                        message: '',
                    });
                    // Reset success message after 5 seconds
                    setTimeout(() => setSuccess(false), 5000);
                },
                (error) => {
                    setLoading(false);
                    setError(true);
                    console.error(error);
                }
            );
    };

    return (
        <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-heading">
                        Let's Connect
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto">
                        Have an idea, internship, or collaboration in mind? I’d love to hear about it.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Contact Info */}
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
                                <a href="tel:+919712720305" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors group">
                                    <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                                        <Phone size={22} />
                                    </div>
                                    <span className="font-medium">+91 9712720305</span>
                                </a>

                                <a href="mailto:himmat.mundhe.cg@gmail.com" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group">
                                    <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <Mail size={22} />
                                    </div>
                                    <span className="font-medium">himmat.mundhe.cg@gmail.com</span>
                                </a>

                                <a href="https://linkedin.com/in/himmat-mundhe-17b5a1213" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors group">
                                    <div className="w-12 h-12 bg-blue-50 dark:bg-slate-700 rounded-full flex items-center justify-center text-blue-700 dark:text-blue-400 group-hover:bg-blue-700 group-hover:text-white transition-all duration-300">
                                        <Linkedin size={22} />
                                    </div>
                                    <span className="font-medium">LinkedIn Profile</span>
                                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                                </a>

                                <a href="https://github.com/himmatmundhe07" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group">
                                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-900 dark:text-white group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                                        <Github size={22} />
                                    </div>
                                    <span className="font-medium">GitHub Profile</span>
                                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                                </a>
                                <a href="https://www.youtube.com/@himmatmundhe07" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-500 transition-colors group">
                                    <div className="w-12 h-12 bg-red-50 dark:bg-slate-700 rounded-full flex items-center justify-center text-red-600 dark:text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                                        <Youtube size={22} />
                                    </div>
                                    <span className="font-medium">YouTube Channel</span>
                                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                                </a>

                                <a href="https://leetcode.com/u/Mundhe_Himmat/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-yellow-600 dark:hover:text-yellow-500 transition-colors group">
                                    <div className="w-12 h-12 bg-yellow-50 dark:bg-slate-700 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-500 group-hover:bg-yellow-600 group-hover:text-white transition-all duration-300">
                                        <SiLeetcode size={22} />
                                    </div>
                                    <span className="font-medium">LeetCode Profile</span>
                                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 relative transition-colors"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-slate-700 dark:text-slate-300 font-medium mb-2 text-sm uppercase tracking-wider">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="What's your name?"
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
                                    placeholder="What's your email?"
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
                                    Thank you! I will get back to you as soon as possible.
                                </motion.div>
                            )}

                            {error && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="p-4 bg-red-50 text-red-700 rounded-xl text-center font-medium border border-red-100"
                                >
                                    Something went wrong. Please try again later.
                                </motion.div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
