"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

const experiences = [
    {
        id: 1,
        title: "Teaching Assistant",
        company: "Gannon University",
        date: "Aug 2025 – Dec 2025",
        location: "Erie, PA",
        description: "Mentored 40+ students in Linux, virtualization, and network security. Designed 3 critical network labs improving course comprehension by 25%.",
        type: "Main Quest"
    },
    {
        id: 2,
        title: "IT Support Technician",
        company: "Gannon University",
        date: "Mar 2024 – May 2025",
        location: "Erie, PA",
        description: "Diagnosed connectivity issues, reducing downtime by 20%. Managed patch management and endpoint hardening for HIPAA compliance.",
        type: "Side Quest"
    },
    {
        id: 3,
        title: "Junior DevOps Engineer (Intern)",
        company: "Side Quest",
        date: "May 2025 – Nov 2025",
        location: "Remote / New York City",
        description: "Deployed Redis Clusters and Nominatim servers. Optimized Jenkins pipelines reducing build times by 40% and scaled workloads on AWS/Hetzner.",
        type: "Internship"
    },
    {
        id: 4,
        title: "System Administrator",
        company: "KnoahSoft Inc",
        date: "May 2020 – Dec 2023",
        location: "Hyderabad,India",
        description: "Administered 50+ mixed-OS endpoints and AWS resources. Automated user provisioning with Python/Bash reducing manual errors by 30%.",
        type: "Full Time"
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-cyber-black/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="font-cyber text-3xl md:text-4xl font-bold text-text-main">
                        QUEST <span className="text-neon-purple">LOG</span>
                    </h2>
                    <div className="h-0.5 flex-grow bg-white/10" />
                </div>

                <div className="relative border-l-2 border-white/10 ml-4 md:ml-8 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Connector Node */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyber-black border-2 border-neon-blue shadow-[0_0_10px_rgba(0,243,255,0.5)]" />

                            {/* Card */}
                            <div className="glass-card p-6 rounded-xl hover:border-neon-blue/50 transition-colors group">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                                    <div>
                                        <h3 className="font-cyber text-xl text-text-main group-hover:text-neon-blue transition-colors">
                                            {exp.title}
                                        </h3>
                                        <p className="text-neon-purple font-semibold">{exp.company}</p>
                                    </div>
                                    <div className="flex flex-col items-start md:items-end text-sm text-text-dim font-mono">
                                        <span className="flex items-center gap-1"><Calendar size={14} /> {exp.date}</span>
                                        <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
                                    </div>
                                </div>

                                <p className="text-text-dim leading-relaxed text-sm md:text-base">
                                    {exp.description}
                                </p>

                                <div className="mt-4 flex gap-2">
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-text-dim font-mono flex items-center gap-1">
                                        <CheckCircle size={12} className="text-neon-green" /> COMPLETED
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-xs text-neon-purple font-mono">
                                        {exp.type}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
