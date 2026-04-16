import React, { useState } from "react";
import { ArrowUp } from "lucide-react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setVisible(latest > 300);
    });

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            {visible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none animate-bounce-subtle"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={24} />
                </button>
            )}
        </>
    );
}
