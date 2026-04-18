import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, Search, X } from "lucide-react";

import googleAiCertImage from "../assets/google-ai-cert.png";
import arcadePointsImage from "../assets/arcade-points.png";
import copilotCertImage from "../assets/microsoft certificate.jpg";
import cppIntermediateImage from "../assets/cpp-intermediate.png";
import seoAiImage from "../assets/seo-ai-cert.png";
import dataAnalyticsAiImage from "../assets/data-analytics-ai.png";

const certificates = [
    {
        title: "Introduction to Generative AI",
        issuer: "Google Cloud",
        description: "Generative AI fundamentals, LLM concepts, and responsible AI practices.",
        image: googleAiCertImage,
        verifyUrl:
            "https://www.skills.google/public_profiles/efe1f4e9-3716-4ab8-b8ec-845bf975987b/badges/21065485",
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "Google Cloud Arcade - Silver League",
        issuer: "Google Cloud",
        description: "Achieved 4 Sprint Badges and 782 points through hands-on Google Cloud practice.",
        image: arcadePointsImage,
        verifyUrl:
            "https://www.skills.google/public_profiles/efe1f4e9-3716-4ab8-b8ec-845bf975987b/badges/22620055",
        color: "from-yellow-400 to-amber-500",
    },
    {
        title: "GitHub Copilot Fundamentals",
        issuer: "Microsoft x Simplilearn",
        description: "AI-assisted development and productivity workflows with GitHub Copilot.",
        image: copilotCertImage,
        color: "from-blue-600 to-indigo-700",
    },
    {
        title: "C++ Intermediate Certificate",
        issuer: "SoloLearn",
        description: "Intermediate C++ concepts including OOP, data structures, and memory management.",
        image: cppIntermediateImage,
        verifyUrl: "https://drive.google.com/file/d/1-dDZIEjy1K7yQKQAeiA8IjwWFWu8jwmJ/view?usp=sharing",
        color: "from-emerald-500 to-teal-600",
    },
    {
        title: "SEO with AI",
        issuer: "SoloLearn",
        description: "AI-powered SEO ranking methods, content strategy, and workflow optimization.",
        image: seoAiImage,
        verifyUrl: "https://drive.google.com/file/d/1xbwq78kEzx7SW_qOOn4iVqmKU9vF5bad/view?usp=sharing",
        color: "from-pink-500 to-rose-600",
    },
    {
        title: "Data Analytics with AI",
        issuer: "SoloLearn",
        description: "AI-driven analysis, predictive modeling, and large dataset insight generation.",
        image: dataAnalyticsAiImage,
        verifyUrl: "https://drive.google.com/file/d/18bE1kUJnG_hABvp98s43SlZsnq8f-OaX/view?usp=sharing",
        color: "from-violet-500 to-indigo-600",
    },
];

export default function Certificates() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section
            id="certificates"
            className="py-24 bg-transparent relative overflow-hidden transition-colors duration-300"
            ref={ref}
        >
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
                        Verified learning through consistent execution and hands-on practice.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 dark:border-slate-700 hover:border-slate-800 dark:hover:border-slate-500 overflow-hidden flex flex-col h-full"
                        >
                            <div
                                className="relative h-56 overflow-hidden bg-slate-200 dark:bg-slate-700 cursor-pointer"
                                role="button"
                                tabIndex={0}
                                aria-label={`View ${cert.title} certificate full size`}
                                onClick={() => setSelectedCert(cert)}
                                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedCert(cert); } }}
                            >
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`}
                                ></div>

                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 z-20 flex items-center justify-center">
                                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 border border-white/20 text-white">
                                        <Search size={24} />
                                    </div>
                                </div>

                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>

                            <div className="p-8 flex flex-col flex-grow relative">
                                <div
                                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cert.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                                ></div>

                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-heading group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-4">
                                    {cert.issuer}
                                </p>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm mb-6 flex-grow">
                                    {cert.description}
                                </p>

                                {cert.verifyUrl && (
                                    <a
                                        href={cert.verifyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                                    >
                                        Verify Credential <ExternalLink size={15} />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

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
                                aria-label="Close certificate preview"
                            >
                                <X size={24} />
                            </button>
                            <img
                                src={selectedCert.image}
                                alt={selectedCert.title}
                                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl relative"
                                loading="eager"
                                decoding="async"
                            />
                            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-md px-8 py-3 rounded-full text-slate-900 dark:text-white font-bold shadow-2xl z-50 whitespace-nowrap text-lg">
                                {selectedCert.title}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
