import React from 'react';
import { motion } from 'framer-motion';

export default function Loader() {
    return (
        <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] bg-[#F5F5F7] dark:bg-[#0B1120] flex items-center justify-center flex-col gap-4"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="font-heading font-black text-5xl md:text-7xl tracking-tighter text-slate-900 dark:text-white flex items-center gap-1"
            >
                Himmat<span className="text-blue-600 text-6xl md:text-8xl leading-[0] mb-2 animate-bounce">.</span>
            </motion.div>
            <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="h-1 bg-blue-600 rounded-full mt-4"
            />
        </motion.div>
    );
}
