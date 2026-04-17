import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    Trophy,
    Calendar,
    Github,
    ExternalLink,
    Award,
    ChevronRight,
    ChevronLeft,
    Code,
    MapPin,
    Users,
    Quote,
    CheckCircle2,
} from "lucide-react";
import wceHackathon from "../assets/wce-hackathon.jpg";
import sangamHackathon1 from "../assets/sangam-hackathon-1.jpg";
import sangamHackathon2 from "../assets/sangam-hackathon-2.jpg";
import electroSphereImage from "../assets/electrosphere-2k26.jpg";
import electroSphereCertificateImage from "../assets/electrosphere-2k26-certificate.jpg";

const AUTOPLAY_INTERVAL_MS = 10000;

const cardVariants = {
    enter: (direction) => ({
        x: direction > 0 ? 120 : -120,
        opacity: 0,
        scale: 0.98,
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
    },
    exit: (direction) => ({
        x: direction > 0 ? -120 : 120,
        opacity: 0,
        scale: 0.98,
    }),
};

const hackathons = [
    {
        id: 1,
        title: "WCE ACM Hackathon 2026",
        project: "Sanjeevani",
        date: "March 2026",
        venue: "WCE ACM, Sangli",
        team: "Team 4-Bits",
        result: "Finalist, Top 10 / 1,745 Teams",
        resultColor: "text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/40 border-amber-300 dark:border-amber-500/40",
        description:
            "Secured a top spot out of 1,745 teams with Sanjeevani, an AI-powered emergency healthcare ecosystem designed for high-pressure emergency response.",
        details:
            "Implemented critical emergency workflows including patient profile access, AI-assisted triage support, location intelligence, and live incident tracking to reduce decision time during peak pressure scenarios.",
        contribution:
            "Led core product flow, frontend architecture, and integration of emergency-focused modules with Supabase and mapping intelligence.",
        impact:
            "Validated at scale in a competitive environment and recognized in the top 10 from 1,745 teams for practical real-world healthcare impact.",
        pullQuote:
            "A race against time: replacing chaotic emergency rooms with an intelligent ecosystem.",
        tech: ["React 18", "TypeScript", "Supabase", "Gemini 2.5", "face-api.js", "Leaflet.js"],
        highlights: [
            "Top 10 out of 1,745 teams",
            "Live facial recognition demo",
            "End-to-end emergency response flow demoed to judges",
        ],
        images: [wceHackathon],
        links: {
            github: "https://github.com/himmatmundhe07/Sanjeevani",
            live: "https://wce-hackathon2026-4-bits.vercel.app/",
            certificate: "https://drive.google.com/file/d/1CUqwkBa9A4THL1WIBSU-8OvpP7G0hU2x/view?usp=sharing",
        },
    },
    {
        id: 2,
        title: "SU Hackathon 2026",
        project: "Sanjeevani (Initial Version)",
        date: "2026",
        venue: "Sangam University",
        team: "Team 4-Bits",
        result: "Finalist",
        resultColor: "text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/40 border-emerald-300 dark:border-emerald-500/40",
        description:
            "Built the initial version of Sanjeevani as a QR-based emergency health record system for faster and safer patient data access.",
        details:
            "Focused on rapid patient identity-to-record retrieval with QR scanning workflows, minimizing friction for responders who need immediate medical context in time-sensitive cases.",
        contribution:
            "Designed the primary patient flow, implemented scan-based lookup UX, and shipped a functional prototype in an overnight hackathon cycle.",
        impact:
            "Established the foundation that later evolved into the advanced WCE ACM version, with judges highlighting practical implementation and usability.",
        pullQuote: "Built entirely overnight with nothing but adrenaline and React.",
        tech: ["React", "Supabase", "QR Generation", "EHR System"],
        highlights: [
            "Built core QR-scan lookup in one night",
            "Judges praised real-world impact",
            "Delivered working prototype under strict time pressure",
        ],
        images: [sangamHackathon1, sangamHackathon2],
        links: {
            github: "https://github.com/himmatmundhe07/Sanjeevani",
            certificate: "https://drive.google.com/file/d/1VEtfuU8Ul7nHqSbWHM8fOm9TrKE3Qijj/view?usp=sharing",
        },
    },
    {
        id: 3,
        title: "ElectroSphere 2K26 Software Edition",
        project: "Air Talk",
        date: "7 January 2026",
        venue: "TechXDM Club, Faculty of Engineering, Swaminarayan University",
        team: "Team 4-Bits",
        result: "Bluetooth Offline Chat Application",
        resultColor: "text-blue-800 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/40 border-blue-300 dark:border-blue-500/40",
        description:
            "Built Air Talk, a Bluetooth-based offline chat application for resilient communication when network infrastructure is unavailable.",
        details:
            "Engineered peer-to-peer offline communication using Bluetooth RFCOMM, enabling device discovery, session setup, and message exchange without internet or mobile network dependency.",
        contribution:
            "Built communication flow and app-level reliability handling for unstable signal and reconnection scenarios in constrained environments.",
        impact:
            "Showcased a practical communication fallback for outage conditions, aligning with disaster-response and emergency-ready use cases.",
        pullQuote: "Resilient, off-the-grid communication for when the network goes down.",
        tech: ["Java", "Kotlin", "Android Studio", "Bluetooth RFCOMM"],
        highlights: [
            "Seamless offline communication",
            "Custom RFCOMM protocol",
            "Emergency-ready communication design",
            "Multi-device chat simulation demonstrated",
        ],
        images: [electroSphereImage, electroSphereCertificateImage],
        links: {
            certificate: "https://drive.google.com/file/d/1-Xlo3eGpDJ7YEiywb90TREX-gTZgQhVk/view?usp=sharing",
        },
    },
];

export default function Hackathons() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const totalHackathons = hackathons.length;
    const selectedHackathon = useMemo(() => hackathons[activeIndex] ?? hackathons[0], [activeIndex]);

    const changeHackathon = useCallback(
        (step) => {
            setDirection(step >= 0 ? 1 : -1);
            setActiveIndex((prev) => (prev + step + totalHackathons) % totalHackathons);
            setCurrentImageIndex(0);
        },
        [totalHackathons]
    );

    const goToHackathon = (index) => {
        if (index === activeIndex) return;
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
        setCurrentImageIndex(0);
    };

    useEffect(() => {
        if (isPaused) return undefined;
        const timer = setInterval(() => {
            changeHackathon(1);
        }, AUTOPLAY_INTERVAL_MS);
        return () => clearInterval(timer);
    }, [isPaused, changeHackathon]);

    const nextImage = () => {
        if (!selectedHackathon || selectedHackathon.images.length <= 1) return;
        setCurrentImageIndex((prev) => (prev + 1) % selectedHackathon.images.length);
    };

    const prevImage = () => {
        if (!selectedHackathon || selectedHackathon.images.length <= 1) return;
        setCurrentImageIndex((prev) => (prev === 0 ? selectedHackathon.images.length - 1 : prev - 1));
    };

    if (!selectedHackathon) return null;

    return (
        <section id="hackathons" className="py-16 sm:py-20 bg-transparent relative overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
                        Hackathons and Competitions
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
                        Infinite side-scroll card with full details. Auto-advances every {AUTOPLAY_INTERVAL_MS / 1000} seconds.
                    </p>
                </motion.div>

                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl shadow-slate-900/5">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.article
                                key={selectedHackathon.id}
                                custom={direction}
                                variants={cardVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                className="grid lg:grid-cols-12 gap-4 lg:gap-5 p-4 sm:p-5 md:p-6 items-start"
                            >
                                <div className="lg:col-span-6 flex flex-col gap-4">
                                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 h-[18rem] sm:h-[22rem] md:h-[24rem] lg:h-[26rem] xl:h-[30rem]">
                                        <motion.img
                                            key={`${selectedHackathon.id}-${currentImageIndex}`}
                                            initial={{ opacity: 0.3 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.2 }}
                                            src={selectedHackathon.images[currentImageIndex]}
                                            alt={`${selectedHackathon.title} visual ${currentImageIndex + 1}`}
                                            className="block w-full h-full object-cover object-center"
                                            loading="eager"
                                            decoding="async"
                                        />

                                        {selectedHackathon.images.length > 1 && (
                                            <>
                                                <button
                                                    type="button"
                                                    onClick={prevImage}
                                                    className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/30 hover:bg-white/50 text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                                                    aria-label="Previous image"
                                                >
                                                    <ChevronLeft size={20} />
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={nextImage}
                                                    className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/30 hover:bg-white/50 text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                                                    aria-label="Next image"
                                                >
                                                    <ChevronRight size={20} />
                                                </button>
                                                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900/55 backdrop-blur-sm flex gap-0 items-center">
                                                    {selectedHackathon.images.map((_, i) => (
                                                        <button
                                                            key={i}
                                                            type="button"
                                                            onClick={() => setCurrentImageIndex(i)}
                                                            aria-label={`View image ${i + 1} of ${selectedHackathon.images.length}`}
                                                            className="p-3 flex items-center justify-center min-w-[32px] min-h-[32px]"
                                                        >
                                                            <span className={`block h-1.5 rounded-full transition-all ${i === currentImageIndex ? "w-5 bg-white" : "w-1.5 bg-white/55"}`} />
                                                        </button>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-700">
                                        <p className="text-slate-700 dark:text-slate-200 italic text-sm inline-flex gap-2">
                                            <Quote size={15} className="mt-0.5 shrink-0" />
                                            {selectedHackathon.pullQuote}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2.5">
                                        {selectedHackathon.links.certificate && (
                                            <a
                                                href={selectedHackathon.links.certificate}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full py-2.5 px-3 bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                                            >
                                                <Award size={15} />
                                                Certificate
                                            </a>
                                        )}
                                        {selectedHackathon.links.github && (
                                            <a
                                                href={selectedHackathon.links.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full py-2.5 px-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-900 dark:text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                                            >
                                                <Github size={15} />
                                                Repository
                                            </a>
                                        )}
                                        {selectedHackathon.links.live && (
                                            <a
                                                href={selectedHackathon.links.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full py-2.5 px-3 bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                                            >
                                                <ExternalLink size={15} />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="lg:col-span-6 flex flex-col">
                                    <div
                                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold border w-fit mb-3 ${selectedHackathon.resultColor}`}
                                    >
                                        <Trophy size={14} />
                                        {selectedHackathon.result}
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white font-heading mb-3">
                                        {selectedHackathon.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 mb-3">
                                        <span className="font-semibold">Project:</span> {selectedHackathon.project}
                                    </p>

                                    <div className="grid sm:grid-cols-3 gap-2 text-slate-600 dark:text-slate-400 text-sm mb-4">
                                        <p className="inline-flex items-center gap-1.5">
                                            <Calendar size={14} />
                                            {selectedHackathon.date}
                                        </p>
                                        <p className="inline-flex items-center gap-1.5">
                                            <MapPin size={14} />
                                            {selectedHackathon.venue}
                                        </p>
                                        <p className="inline-flex items-center gap-1.5">
                                            <Users size={14} />
                                            {selectedHackathon.team}
                                        </p>
                                    </div>

                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-sm md:text-base">
                                        {selectedHackathon.description}
                                    </p>
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 text-sm md:text-base">
                                        {selectedHackathon.details}
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-3 mb-4">
                                        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-700">
                                            <h4 className="text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1.5">
                                                Contribution
                                            </h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                                {selectedHackathon.contribution}
                                            </p>
                                        </div>
                                        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-700">
                                            <h4 className="text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-1.5">
                                                Impact
                                            </h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                                {selectedHackathon.impact}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                                                Highlights
                                            </h4>
                                            <div className="space-y-2">
                                                {selectedHackathon.highlights.map((highlight) => (
                                                    <p
                                                        key={highlight}
                                                        className="text-sm text-slate-700 dark:text-slate-300 inline-flex items-center gap-2"
                                                    >
                                                        <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                                                        {highlight}
                                                    </p>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                                                Tech Stack Used
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedHackathon.tech.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2.5 py-1 text-xs font-semibold rounded-lg border bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 inline-flex items-center gap-1"
                                                    >
                                                        <Code size={12} />
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        </AnimatePresence>
                    </div>

                    <button
                        type="button"
                        onClick={() => changeHackathon(-1)}
                        className="absolute top-[calc(1rem+9rem)] sm:top-[calc(1.25rem+11rem)] md:top-[calc(1.5rem+12rem)] lg:top-[calc(1.5rem+13rem)] xl:top-[calc(1.5rem+15rem)] -translate-y-1/2 left-1 md:-left-4 p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 shadow-lg hover:shadow-xl transition-all"
                        aria-label="Previous hackathon"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        type="button"
                        onClick={() => changeHackathon(1)}
                        className="absolute top-[calc(1rem+9rem)] sm:top-[calc(1.25rem+11rem)] md:top-[calc(1.5rem+12rem)] lg:top-[calc(1.5rem+13rem)] xl:top-[calc(1.5rem+15rem)] -translate-y-1/2 right-1 md:-right-4 p-2.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 shadow-lg hover:shadow-xl transition-all"
                        aria-label="Next hackathon"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>

                <div className="mt-5 flex items-center justify-center gap-0">
                    {hackathons.map((hackathon, index) => (
                        <button
                            key={hackathon.id}
                            type="button"
                            onClick={() => goToHackathon(index)}
                            aria-label={`Go to ${hackathon.title}`}
                            className="p-4 flex items-center justify-center min-w-[44px] min-h-[44px]"
                        >
                            <span className={`block h-2 rounded-full transition-all ${index === activeIndex ? "w-8 bg-blue-600 dark:bg-blue-400" : "w-2 bg-slate-300 dark:bg-slate-600"}`} />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
