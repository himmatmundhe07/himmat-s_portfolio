import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Calendar, Github, ExternalLink, Award, X, ChevronRight, ChevronLeft, Code } from 'lucide-react';
import suHackathon1 from '../assets/su-hackathon-1.jpg';
import suHackathon2 from '../assets/su-hackathon-2.jpg';
import wceHackathon from '../assets/wce-hackathon.jpg';

const hackathons = [
    {
        id: 1,
        title: "WCE ACM Hackathon 2026",
        date: "March 2026",
        result: "Finalist — Top 10 / 1,745 Teams",
        resultColor: "text-amber-500 bg-amber-50 dark:bg-amber-500/10 border-amber-200 dark:border-amber-500/20",
        description: "Secured a top spot out of 1,745 teams at WCE ACM Sangli with 'Sanjeevani' — an AI-powered emergency healthcare ecosystem. Built with React 18, TypeScript, Supabase, Gemini 2.5 API, face-api.js, and Leaflet.js.",
        tech: ["React 18", "TypeScript", "Supabase", "Gemini 2.5 API", "face-api.js", "Leaflet.js"],
        images: [
            wceHackathon
        ],
        certificate: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=1000&auto=format&fit=crop",
        github: "https://github.com/himmatmundhe07/Sanjeevani",
        live: "https://wce-hackathon2026-4-bits.vercel.app/"
    },
    {
        id: 2,
        title: "SU Hackathon — Sangam University",
        date: "2026",
        result: "Finalist",
        resultColor: "text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20",
        description: "Built the initial version of Sanjeevani — a QR-based Electronic Health Record (EHR) system. Designed to streamline patient data access in emergency scenarios using quick scan technology.",
        tech: ["React", "Supabase", "QR Generation", "EHR System"],
        images: [
            suHackathon1,
            suHackathon2
        ],
        certificate: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=1000&auto=format&fit=crop",
        github: "https://github.com/himmatmundhe07/Sanjeevani"
    },
];

export default function Hackathons() {
    const [selectedHackathon, setSelectedHackathon] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (hackathon) => {
        setSelectedHackathon(hackathon);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedHackathon(null);
        document.body.style.overflow = 'auto';
    };

    const nextImage = () => {
        if (!selectedHackathon) return;
        setCurrentImageIndex((prev) => (prev + 1) % (selectedHackathon.images.length + 1)); // +1 for certificate
    };

    const prevImage = () => {
        if (!selectedHackathon) return;
        setCurrentImageIndex((prev) => (prev === 0 ? selectedHackathon.images.length : prev - 1));
    };

    return (
        <section id="hackathons" className="py-24 bg-transparent relative overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-24"
                >
                    <div className="flex justify-center items-center gap-3 mb-6">
                        <span className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-bold tracking-widest uppercase border border-blue-200 dark:border-blue-800">
                            Innovate & Build
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 font-heading tracking-tight">
                        Hackathons <span className="text-slate-400 dark:text-slate-500">&</span> Competitions
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
                        Where I turn large amounts of caffeine into working software under intense 48-hour pressure.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:gap-10">
                    {hackathons.map((hackathon, index) => (
                        <motion.div
                            key={hackathon.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group relative flex flex-col bg-white dark:bg-slate-800/80 backdrop-blur-sm rounded-[2rem] border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                            onClick={() => openModal(hackathon)}
                        >
                            {/* Image Header */}
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                <img 
                                    src={hackathon.images[0]} 
                                    alt={hackathon.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                                {/* Placement Badge */}
                                <div className={`absolute top-4 right-4 z-20 px-4 py-2 rounded-full font-bold text-sm border flex items-center gap-2 backdrop-blur-md shadow-lg ${hackathon.resultColor}`}>
                                    <Trophy size={16} />
                                    {hackathon.result}
                                </div>
                            </div>

                            {/* Content body */}
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium mb-4">
                                    <Calendar size={16} />
                                    {hackathon.date}
                                </div>
                                
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {hackathon.title}
                                </h3>
                                
                                <p className="text-slate-600 dark:text-slate-300 line-clamp-3 mb-6 flex-1">
                                    {hackathon.description}
                                </p>

                                {/* Tech stack pills */}
                                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-100 dark:border-slate-700">
                                    {hackathon.tech.slice(0, 3).map((t, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-lg flex items-center gap-1">
                                            <Code size={12} /> {t}
                                        </span>
                                    ))}
                                    {hackathon.tech.length > 3 && (
                                        <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs font-semibold rounded-lg">
                                            +{hackathon.tech.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal Gallery & Details */}
                <AnimatePresence>
                    {selectedHackathon && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-10 bg-slate-900/90 backdrop-blur-xl"
                            onClick={closeModal}
                        >
                            <motion.div
                                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="relative w-full max-w-5xl bg-[#F5F5F7] dark:bg-slate-900 rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl border border-white/20 dark:border-slate-700 max-h-[90vh]"
                                onClick={(e) => e.stopPropagation()} // Prevent close on modal click
                            >
                                {/* Close Button */}
                                <button 
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 z-50 p-2 bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-700 backdrop-blur-md rounded-full text-slate-900 dark:text-white transition-all shadow-md"
                                >
                                    <X size={24} />
                                </button>

                                {/* Left Side: Image Gallery */}
                                <div className="w-full md:w-3/5 h-[400px] md:h-auto relative bg-slate-900 flex items-center justify-center group/gallery">
                                    <AnimatePresence mode="wait">
                                        <motion.img
                                            key={currentImageIndex}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            src={currentImageIndex === selectedHackathon.images.length ? selectedHackathon.certificate : selectedHackathon.images[currentImageIndex]}
                                            alt="Gallery"
                                            className={`w-full h-full object-cover ${currentImageIndex === selectedHackathon.images.length ? 'object-contain bg-slate-800 p-8' : ''}`}
                                        />
                                    </AnimatePresence>
                                    
                                    {/* Gallery Controls */}
                                    <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover/gallery:opacity-100 transition-opacity">
                                        <button onClick={prevImage} className="p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors">
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button onClick={nextImage} className="p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors">
                                            <ChevronRight size={24} />
                                        </button>
                                    </div>
                                    
                                    {/* Image Indicator */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-slate-900/50 backdrop-blur-sm px-4 py-2 rounded-full">
                                        {[...selectedHackathon.images, selectedHackathon.certificate].map((_, i) => (
                                            <div 
                                                key={i} 
                                                className={`h-2 rounded-full transition-all duration-300 ${i === currentImageIndex ? 'w-6 bg-white' : 'w-2 bg-white/50'}`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Right Side: Details */}
                                <div className="w-full md:w-2/5 p-8 md:p-12 overflow-y-auto custom-scrollbar flex flex-col">
                                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm border shadow-sm w-fit mb-6 ${selectedHackathon.resultColor}`}>
                                        <Trophy size={16} />
                                        {selectedHackathon.result}
                                    </div>
                                    
                                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 font-heading">
                                        {selectedHackathon.title}
                                    </h3>
                                    
                                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium mb-8">
                                        <Calendar size={18} />
                                        {selectedHackathon.date}
                                    </div>

                                    <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 mb-8 font-light leading-relaxed">
                                        <p>{selectedHackathon.description}</p>
                                    </div>

                                    <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                                        Tech Stack Used
                                    </h4>
                                    <div className="flex flex-wrap gap-2 mb-10">
                                        {selectedHackathon.tech.map((t, idx) => (
                                            <span key={idx} className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold rounded-xl shadow-sm">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-auto grid grid-cols-2 gap-4">
                                        <button 
                                            onClick={() => setCurrentImageIndex(selectedHackathon.images.length)}
                                            className="w-full py-4 px-4 bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg"
                                        >
                                            <Award size={18} />
                                            Certificate
                                        </button>
                                        <a 
                                            href={selectedHackathon.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full py-4 px-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
                                        >
                                            <Github size={18} />
                                            Repository
                                        </a>
                                        {selectedHackathon.live && (
                                            <a 
                                                href={selectedHackathon.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full col-span-2 py-4 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg"
                                            >
                                                <ExternalLink size={18} />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
