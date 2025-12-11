"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Shield, Server, Layout } from "lucide-react";
import Link from "next/link";

const projects = [
    {
        id: 1,
        title: "LLM Threat Intel Dashboard",
        category: "BOSS FIGHT",
        description: "Cloud-native threat intelligence platform processing 50K+ daily records using React, Node.js, and AI APIs. Achieved 99.9% uptime on AWS.",
        tech: ["React", "AWS", "Node.js", "MongoDB", "Terraform"],
        icon: Shield,
        color: "from-red-500 to-orange-600",
        links: { github: "https://github.com/Varun0737/Cloud-based-LLM-powered-threat-intelligence-Dashboard", live: "#" }
    },
    {
        id: 2,
        title: "DevOps Homelab Cluster",
        category: "SIDE QUEST",
        description: "Kubernetes playground for testing GitOps flows. Integrated ArgoCD, Prometheus, and Grafana for full observability.",
        tech: ["K8s", "Docker", "Ansible", "Linux", "Grafana"],
        icon: Server,
        color: "from-emerald-500 to-cyan-500",
        links: { github: "#", live: "#" }
    },
    {
        id: 3,
        title: "Portfolio Website",
        category: "SIDE QUEST",
        description: "The site you are looking at! Built with Next.js 14, Tailwind, and Framer Motion to showcase my cloud journey.",
        tech: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
        icon: Layout,
        color: "from-neon-purple to-pink-600",
        links: { github: "#", live: "#" }
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-16">
                    <div className="flex items-center gap-4">
                        <h2 className="font-cyber text-3xl md:text-4xl font-bold text-white">
                            BOSS <span className="text-neon-blue">FIGHTS</span>
                        </h2>
                    </div>
                    <div className="hidden md:block text-neon-blue font-mono text-sm border border-neon-blue px-4 py-2 rounded-lg bg-neon-blue/10">
                        Current Score: 3/3 CLEARED
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-xl -z-10" />

                            <div className="glass-card h-full rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col">
                                {/* Banner */}
                                <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/20" />
                                    <project.icon size={48} className="text-white relative z-10 opacity-80 group-hover:scale-110 transition-transform duration-300" />
                                    <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/50 backdrop-blur rounded text-xs font-mono text-white border border-white/20">
                                        {project.category}
                                    </div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="font-cyber text-xl text-white mb-3 group-hover:text-neon-blue transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-6 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-2 py-1 text-xs font-mono rounded bg-white/5 border border-white/10 text-gray-300">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <Link
                                            href={project.links.github}
                                            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                                        >
                                            <Github size={16} /> Code
                                        </Link>
                                        <Link
                                            href={project.links.live}
                                            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                                        >
                                            <ExternalLink size={16} /> Demo
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
