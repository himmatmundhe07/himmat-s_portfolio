import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const LiveBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMounted, setIsMounted] = useState(false);
    const shouldReduceMotion = useReducedMotion();

    useEffect(() => {
        setIsMounted(true);
        const handleMouseMove = (e) => {
            // Add a slight delay/smoothness by using requestAnimationFrame if needed, 
            // but for Framer Motion setting state directly is usually fine.
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 250,
            y: mousePosition.y - 250,
            transition: {
                type: 'tween',
                ease: 'linear',
                duration: 0.15
            }
        },
    };

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center opacity-60">
                <div 
                    className="absolute top-[-10%] left-[0%] w-[35rem] h-[35rem] md:w-[50rem] md:h-[50rem] bg-white/60 dark:bg-slate-800/40 rounded-full mix-blend-normal filter blur-[120px] animate-blob"
                ></div>
                <div 
                    className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] md:w-[50rem] md:h-[50rem] bg-slate-300/60 dark:bg-slate-700/40 rounded-full mix-blend-normal filter blur-[120px] animate-blob"
                    style={{ animationDelay: '2s' }}
                ></div>
                <div 
                    className="absolute bottom-[-10%] left-[20%] w-[35rem] h-[35rem] md:w-[50rem] md:h-[50rem] bg-gray-300/60 dark:bg-slate-800/40 rounded-full mix-blend-normal filter blur-[120px] animate-blob"
                    style={{ animationDelay: '4s' }}
                ></div>
                <div 
                    className="absolute bottom-[20%] right-[20%] w-[35rem] h-[35rem] md:w-[50rem] md:h-[50rem] bg-white/50 dark:bg-slate-700/40 rounded-full mix-blend-normal filter blur-[120px] animate-blob"
                    style={{ animationDelay: '6s' }}
                ></div>
            </div>

            {/* Subtle Dotted Grid Overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTQ4LCAxNjMsIDE4NCwgMC4yNSkiLz48L3N2Zz4=')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjI2LCAyMzIsIDI0MCwgMC4wNSkiLz48L3N2Zz4=')] opacity-70"></div>
            
            {/* Interactive Cursor Follower */}
            {!shouldReduceMotion && isMounted && (
                <motion.div
                    className="hidden lg:block absolute top-0 left-0 w-[500px] h-[500px] bg-white/40 dark:bg-slate-600/20 rounded-full filter blur-[120px]"
                    variants={variants}
                    animate="default"
                />
            )}
        </div>
    );
};

export default LiveBackground;
