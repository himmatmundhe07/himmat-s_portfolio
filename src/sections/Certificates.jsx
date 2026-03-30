import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, Search, X } from "lucide-react";

import cCert from "../assets/C certificate.jpg";
import jsCert from "../assets/javaScript certificate.jpg";
import msCert from "../assets/microsoft certificate.jpg";

const certificates = [
    {
        title: "Introduction to Generative AI",
        issuer: "Google Cloud",
        date: "December 2025",
        description: "Comprehensive understanding of Generative AI fundamentals, large language models, and responsible AI practices from Google Cloud.",
        image: cCert,
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "Google Cloud Arcade — Silver League",
        issuer: "Google Cloud",
        date: "February 2026",
        description: "Achieved 4 Sprint Badges and 782 points. Hands-on experience with Google Cloud services and cloud computing fundamentals.",
        image: jsCert,
        color: "from-yellow-400 to-amber-500",
    },
    {
        title: "GitHub Copilot Fundamentals",
        issuer: "Microsoft × Simplilearn",
        date: "December 2025",
        description: "Mastered AI-assisted development with GitHub Copilot, enhancing coding productivity and understanding AI-powered software development workflows.",
        image: msCert,
        color: "from-blue-600 to-indigo-700",
    },
];

export default function Certificates() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section id="certificates" className="py-24 bg-transparent relative overflow-hidden transition-colors duration-300" ref={ref}>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 dark:from-slate-800 via-transparent to-transparent opacity-60 transition-colors"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Award className="text-blue-600 dark:text-blue-400" size={32} />
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white font-heading">
                            Certifications
                        </h2>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
                        Focused on fundamentals, not shortcuts.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-10">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 dark:border-slate-700 hover:border-slate-800 dark:hover:border-slate-500 overflow-hidden flex flex-col h-full"
                        >
                            {/* Image Container with Overlay */}
                            <div
                                className="relative h-56 overflow-hidden bg-slate-200 dark:bg-slate-700 cursor-pointer"
                                onClick={() => setSelectedCert(cert)}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`}></div>

                                {/* Hover Overlay with Magnifying Glass */}
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 z-20 flex items-center justify-center">
                                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 border border-white/20 text-white">
                                        <Search size={24} />
                                    </div>
                                </div>

                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow relative">
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cert.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>

                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-heading group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">
                                    {cert.issuer}
                                </p>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm mb-6 flex-grow">
                                    {cert.description}
                                </p>

                                {/* Optional: Add a 'Verify' link if you have URLs */}

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Certificate Modal */}
            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        onClick={() => setSelectedCert(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-4xl max-h-[90vh] w-full bg-transparent rounded-lg overflow-hidden flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
                                onClick={() => setSelectedCert(null)}
                            >
                                <X size={24} />
                            </button>
                            <img
                                src={selectedCert.image}
                                alt={selectedCert.title}
                                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl relative"
                            />
                            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md px-8 py-3 rounded-full text-slate-900 dark:text-white font-bold shadow-2xl z-50 whitespace-nowrap text-lg">
                                {selectedCert.title}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section >
    );
}
