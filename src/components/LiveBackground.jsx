import React, { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

const LiveBackground = ({ enableInteractive }) => {
    const shouldReduceMotion = useReducedMotion();
    const followerX = useMotionValue(-260);
    const followerY = useMotionValue(-260);

    const smoothX = useSpring(followerX, { stiffness: 120, damping: 24, mass: 0.8 });
    const smoothY = useSpring(followerY, { stiffness: 120, damping: 24, mass: 0.8 });

    useEffect(() => {
        if (!enableInteractive) return undefined;

        let rafId = null;
        const onMouseMove = (event) => {
            if (rafId) return;
            rafId = window.requestAnimationFrame(() => {
                followerX.set(event.clientX - 260);
                followerY.set(event.clientY - 260);
                rafId = null;
            });
        };

        window.addEventListener("mousemove", onMouseMove, { passive: true });
        return () => {
            if (rafId) window.cancelAnimationFrame(rafId);
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, [enableInteractive, followerX, followerY]);

    const blobMotionClass = shouldReduceMotion ? "" : "animate-blob";

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center opacity-55">
                <div
                    className={`absolute top-[-10%] left-[0%] w-[28rem] h-[28rem] md:w-[42rem] md:h-[42rem] bg-white/55 dark:bg-slate-800/35 rounded-full mix-blend-normal filter blur-[90px] ${blobMotionClass}`}
                ></div>
                <div
                    className={`absolute top-[20%] right-[-10%] w-[28rem] h-[28rem] md:w-[42rem] md:h-[42rem] bg-slate-300/55 dark:bg-slate-700/35 rounded-full mix-blend-normal filter blur-[90px] ${blobMotionClass}`}
                    style={{ animationDelay: "2s" }}
                ></div>
                <div
                    className={`hidden md:block absolute bottom-[-10%] left-[20%] w-[28rem] h-[28rem] md:w-[42rem] md:h-[42rem] bg-gray-300/55 dark:bg-slate-800/35 rounded-full mix-blend-normal filter blur-[90px] ${blobMotionClass}`}
                    style={{ animationDelay: "4s" }}
                ></div>
            </div>

            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTQ4LCAxNjMsIDE4NCwgMC4yNSkiLz48L3N2Zz4=')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjI2LCAyMzIsIDI0MCwgMC4wNSkiLz48L3N2Zz4=')] opacity-60"></div>

            {enableInteractive && !shouldReduceMotion && (
                <motion.div
                    className="hidden lg:block absolute top-0 left-0 w-[520px] h-[520px] bg-white/35 dark:bg-slate-600/15 rounded-full filter blur-[100px]"
                    style={{ x: smoothX, y: smoothY }}
                />
            )}
        </div>
    );
};

export default LiveBackground;
