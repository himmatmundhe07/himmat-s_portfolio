import React, { useEffect, useRef, useState } from "react";
import { GitHubCalendar } from 'react-github-calendar';
import { motion, useInView } from "framer-motion";

export default function GithubActivity() {
    const [theme, setTheme] = useState(() => {
        if (typeof document === "undefined") return "light";
        return document.documentElement.classList.contains("dark") ? "dark" : "light";
    });
    const sectionRef = useRef(null);
    const showCalendar = useInView(sectionRef, { once: true, margin: "200px" });

    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    const isDark = document.documentElement.classList.contains('dark');
                    setTheme(isDark ? 'dark' : 'light');
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });
        return () => observer.disconnect();
    }, []);

    const explicitTheme = {
        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    };

    return (
        <section ref={sectionRef} className="py-12 bg-transparent transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 flex justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full text-center"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8 font-heading">
                        Days I <span className="text-blue-600 dark:text-blue-500">Code</span>
                    </h2>

                    <div className="flex justify-center overflow-hidden pb-4">
                        {showCalendar ? (
                            <GitHubCalendar
                                username="himmatmundhe07"
                                blockSize={15}
                                blockMargin={5}
                                colorScheme={theme}
                                fontSize={14}
                                theme={explicitTheme}
                                style={{
                                    color: theme === 'dark' ? '#cbd5e1' : '#475569',
                                }}
                            />
                        ) : (
                            <div className="h-[140px] w-full max-w-4xl bg-slate-100/70 dark:bg-slate-800/60 rounded-xl animate-pulse"></div>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
