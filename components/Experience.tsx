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
        type: "Education"
    },
    {
        id: 2,
        title: "IT Support Technician",
        company: "Gannon University",
        date: "Mar 2024 – May 2025",
        location: "Erie, PA",
        description: "Diagnosed connectivity issues, reducing downtime by 20%. Managed patch management and endpoint hardening for HIPAA compliance.",
        type: "IT Operations"
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
        <section id="experience" className="py-24 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-4 mb-20">
                    <h2 className="font-cyber text-3xl md:text-5xl font-bold text-text-main">
                        EXPERIENCE
                    </h2>
                    <div className="h-px flex-grow bg-white/10" />
                </div>

                <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-12 md:pl-16"
                        >
                            {/* Connector Node */}
                            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-neon-blue shadow-[0_0_15px_rgba(0,210,255,0.6)]" />

                            {/* Card */}
                            <div className="glass-card p-8 rounded-2xl hover:border-neon-blue/30 transition-all duration-500 group">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                                    <div>
                                        <h3 className="font-cyber text-2xl text-text-main group-hover:text-neon-blue transition-colors mb-1">
                                            {exp.title}
                                        </h3>
                                        <p className="text-neon-purple font-mono text-sm tracking-wide uppercase">{exp.company}</p>
                                    </div>
                                    <div className="flex flex-col items-start md:items-end text-sm text-text-dim font-mono gap-1">
                                        <span className="flex items-center gap-2"><Calendar size={14} className="text-neon-blue" /> {exp.date}</span>
                                        <span className="flex items-center gap-2"><MapPin size={14} className="text-neon-blue" /> {exp.location}</span>
                                    </div>
                                </div>

                                <p className="text-text-dim leading-relaxed text-base md:text-lg mb-8 max-w-4xl">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-text-dim font-mono flex items-center gap-2">
                                        <CheckCircle size={14} className="text-neon-green" /> PROFESSIONAL
                                    </span>
                                    <span className="px-4 py-1.5 rounded-full bg-neon-purple/5 border border-neon-purple/20 text-xs text-neon-purple font-mono uppercase tracking-wider">
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
