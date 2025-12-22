"use client";

import { motion } from "framer-motion";
import { User, MapPin, Coffee, Code } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
                >
                    {/* Character Stats Card */}
                    <div className="order-2 md:order-1 relative">
                        <div className="absolute inset-0 bg-neon-purple blur-[120px] opacity-10" />
                        <div className="relative glass-card p-10 rounded-2xl border border-white/10">
                            <div className="flex items-center gap-6 mb-8 border-b border-white/10 pb-6">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center shadow-lg">
                                    <User className="w-10 h-10 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-cyber text-2xl text-text-main tracking-tight">MY PROFILE</h3>
                                    <p className="text-neon-blue font-mono text-xs tracking-widest uppercase">Cloud, DevOps & IT Engineer</p>
                                </div>
                            </div>

                            <div className="space-y-5 font-mono text-sm">
                                <div className="flex justify-between items-center text-text-dim">
                                    <span className="flex items-center gap-3"><MapPin size={18} className="text-neon-blue" /> Location</span>
                                    <span className="text-text-main">Erie, PA</span>
                                </div>
                                <div className="flex justify-between items-center text-text-dim">
                                    <span className="flex items-center gap-3"><Code size={18} className="text-neon-purple" /> Expertise</span>
                                    <span className="text-text-main">Architecture</span>
                                </div>
                                <div className="flex justify-between items-center text-text-dim">
                                    <span className="flex items-center gap-3"><Coffee size={18} className="text-neon-green" /> Fuel</span>
                                    <span className="text-text-main">Espresso</span>
                                </div>

                                <div className="pt-6 space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-[10px] uppercase tracking-tighter text-text-dim">
                                            <span>Problem Solving</span>
                                            <span className="text-neon-blue">95%</span>
                                        </div>
                                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "95%" }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                className="h-full bg-neon-blue shadow-[0_0_10px_rgba(0,210,255,0.4)]"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between text-[10px] uppercase tracking-tighter text-text-dim">
                                            <span>Automation</span>
                                            <span className="text-neon-purple">90%</span>
                                        </div>
                                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "90%" }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                className="h-full bg-neon-purple shadow-[0_0_10px_rgba(168,85,247,0.4)]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bio Text */}
                    <div className="order-1 md:order-2">
                        <h2 className="font-cyber text-4xl md:text-5xl font-bold mb-10 text-text-main flex items-center gap-4">
                            <span className="text-neon-blue text-3xl">/</span> ABOUT ME
                        </h2>

                        <div className="space-y-8 text-text-dim text-lg leading-relaxed">
                            <p>
                                As an international student and aspiring <span className="text-text-main font-semibold border-b border-neon-blue/30">Cloud, DevOps & IT Engineer</span>, I approach infrastructure with a focus on optimization, scalability, and robust security.
                            </p>

                            <p>
                                My expertise spans <span className="text-text-main">AWS architecture</span>, <span className="text-text-main">Linux administration</span>, and CI/CD automation. I specialize in turning complex infrastructure challenges into elegant, automated solutions that drive efficiency.
                            </p>

                            <p>
                                Currently completing an M.S. in Information Assurance & Cybersecurity, I am focused on deploying enterprise-grade cloud solutions that bridge the gap between development and operations.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
