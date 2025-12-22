"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Shield, Server, Layout, Bot } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "LLM Threat Intel Dashboard",
        category: "Security",
        description: "Cloud-native threat intelligence platform processing 50K+ daily records using React, Node.js, and AI APIs. Achieved 99.9% uptime on AWS.",
        tech: ["React", "AWS", "Node.js", "MongoDB", "Terraform"],
        icon: Shield,
        color: "from-red-500 to-orange-600",
        links: { github: "https://github.com/Varun0737/Cloud-based-LLM-powered-threat-intelligence-Dashboard", live: "#" }
    },
    {
        id: 2,
        title: "Linux Playground for Students",
        category: "Cloud",
        description: "A hands-on Linux environment for GannonHacks.club members. Provides a safe, isolated playground for students to learn command-line skills and system administration.",
        tech: ["Linux", "Web Terminal", "Docker", "Education"],
        icon: Server,
        color: "from-emerald-500 to-cyan-500",
        links: { github: "https://github.com/Varun0737/Gannonhacks.club", live: "https://Gannonhacks.club" }
    },
    {
        id: 3,
        title: "Portfolio Website",
        category: "Frontend",
        description: "The site you are looking at! Built with Next.js 14, Tailwind, and Framer Motion to showcase my cloud journey.",
        tech: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
        icon: Layout,
        color: "from-neon-purple to-pink-600",
        links: { github: "https://github.com/Varun0737/Vee_portfolio", live: "https://varunreddy.com" }
    },
    {
        id: 4,
        title: "Cyber Chatbot (Clover)",
        category: "AI",
        description: "An intelligent cybersecurity assistant designed to help with threat analysis and security queries.",
        tech: ["React", "AI", "Node.js", "Cybersecurity"],
        icon: Bot,
        color: "from-green-400 to-emerald-600",
        links: { github: "https://github.com/Varun0737/cyberawarnesschatbot", live: "#" }
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 mb-20">
                    <h2 className="font-cyber text-3xl md:text-5xl font-bold text-text-main">
                        FEATURED <span className="text-neon-blue">PROJECTS</span>
                    </h2>
                    <div className="h-px flex-grow bg-white/10" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="glass-card h-full rounded-2xl overflow-hidden border border-white/10 hover:border-neon-blue/30 transition-all duration-500 flex flex-col hover:shadow-[0_0_30px_rgba(0,210,255,0.1)]">
                                {/* Banner */}
                                <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/20" />
                                    <project.icon size={56} className="text-white relative z-10 opacity-90 group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-mono tracking-widest text-white border border-white/10">
                                        {project.category.toUpperCase()}
                                    </div>
                                </div>

                                <div className="p-8 flex-grow flex flex-col">
                                    <h3 className="font-cyber text-2xl text-text-main mb-4 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-text-dim text-base mb-8 flex-grow leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 text-xs font-mono rounded-full bg-white/5 border border-white/10 text-text-dim">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-6 mt-auto">
                                        <Link
                                            href={project.links.github}
                                            className="flex items-center gap-2 text-sm text-text-dim hover:text-neon-blue transition-colors font-mono"
                                        >
                                            <Github size={18} /> GITHUB
                                        </Link>
                                        <Link
                                            href={project.links.live}
                                            className="flex items-center gap-2 text-sm text-text-dim hover:text-neon-blue transition-colors font-mono"
                                        >
                                            <ExternalLink size={18} /> DEMO
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
