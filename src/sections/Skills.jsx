import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma, FaHtml5, FaCss3Alt, FaServer } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import { Brain, Code2, Terminal, Globe, Database, Server } from "lucide-react";

const skills = {
    "Frontend Magic": [
        { name: "React", icon: <FaReact className="text-blue-500" /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-400 bg-black rounded" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
        { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
    ],
    "Backend Systems": [
        { name: "C / C++", icon: <Code2 className="text-blue-700 dark:text-blue-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "Express", icon: <SiExpress className="text-slate-700 dark:text-slate-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "REST APIs", icon: <Server className="text-slate-500 dark:text-slate-400" /> },
    ],
    "Dev Tools": [
        { name: "Git & GitHub", icon: <FaGithub className="text-slate-900 dark:text-white" /> },
        { name: "VS Code", icon: <Code2 className="text-blue-500" /> },
        { name: "Postman", icon: <Terminal className="text-orange-500" /> },
        { name: "Vercel", icon: <Globe className="text-slate-900 dark:text-white" /> },
        { name: "Netlify", icon: <Globe className="text-teal-500" /> },
        { name: "Render", icon: <Globe className="text-purple-600 dark:text-purple-400" /> },
    ],
};

const learning = [
    { name: "Next.js", icon: <Globe className="text-slate-900 dark:text-white" /> },
    { name: "Data Structures", icon: <Brain className="text-pink-600" /> }
]

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-heading">
                        Technical Skills
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                        My technical toolbox. I'm always adding more tools to my arsenal.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {Object.entries(skills).map(([category, items], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group"
                        >
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 font-heading border-b border-slate-100 dark:border-slate-700 pb-3 flex items-center justify-between">
                                {category}
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></div>
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {items.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-2 bg-slate-50 dark:bg-slate-700/50 text-slate-700 dark:text-slate-200 px-3 py-2 rounded-lg text-sm font-medium border border-slate-100 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 hover:bg-slate-100 dark:hover:bg-slate-600 transition-all cursor-default select-none"
                                    >
                                        <span className="text-lg">{skill.icon}</span>
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Currently Learning Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-950 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Brain size={120} />
                    </div>

                    <div className="relative z-10 md:flex items-center justify-between gap-8">
                        <div className="mb-6 md:mb-0">
                            <h3 className="text-2xl font-bold mb-2 font-heading">Currently Learning & Exploring</h3>
                            <p className="text-slate-300">Constantly expanding my horizons with new technologies.</p>
                        </div>

                        <div className="flex gap-4">
                            {learning.map((item) => (
                                <div key={item.name} className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl hover:bg-white/20 transition-colors border border-white/10">
                                    <span className="text-3xl">{item.icon}</span>
                                    <span className="font-medium text-sm">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
