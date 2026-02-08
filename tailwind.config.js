export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#f8fafc', // slate-50
                surface: '#ffffff',
                primary: '#0f172a', // slate-900 (Deep charcoal)
                secondary: '#64748b', // slate-500 (Muted blue/slate)
                accent: '#3b82f6', // blue-500 (Muted/Standard blue, can adjust)
                // "Warm neutral" option mentioned: maybe sand/beige? 
                // Suggest sticking to "Muted blue / slate / indigo" as requested first option.
                // Let's refine based on "Muted blue / slate / indigo".
                // Maybe primary accent: Indigo-500 or Slate-600.
                muted: '#94a3b8', // slate-400
            },
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
                heading: ['"Space Grotesk"', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.5s ease-out forwards',
                'blob': 'blob 7s infinite',
                'bounce-subtle': 'bounceSubtle 3s infinite ease-in-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                blob: {
                    "0%": { transform: "translate(0px, 0px) scale(1)" },
                    "33%": { transform: "translate(30px, -50px) scale(1.1)" },
                    "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
                    "100%": { transform: "translate(0px, 0px) scale(1)" }
                },
                bounceSubtle: {
                    "0%, 100%": { transform: "translateY(-3%)" },
                    "50%": { transform: "translateY(3%)" }
                }
            }
        },
    },
    plugins: [],
}
