"use client";

import { motion } from "framer-motion";
import { User, MapPin, Coffee, Code } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    {/* Character Stats Card */}
                    <div className="order-2 md:order-1 relative">
                        <div className="absolute inset-0 bg-neon-purple blur-[100px] opacity-20" />
                        <div className="relative glass-card p-6 rounded-xl border border-white/10">
                            <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                                    <User className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-cyber text-xl text-white">PLAYER PROFILE</h3>
                                    <p className="text-neon-blue font-mono text-sm">Level 24 Cloud Engineer</p>
                                </div>
                            </div>

                            <div className="space-y-4 font-mono text-sm">
                                <div className="flex justify-between items-center text-gray-300">
                                    <span className="flex items-center gap-2"><MapPin size={16} /> Location</span>
                                    <span className="text-white">Erie, PA</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-300">
                                    <span className="flex items-center gap-2"><Code size={16} /> Class</span>
                                    <span className="text-white">Technomancer</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-300">
                                    <span className="flex items-center gap-2"><Coffee size={16} /> Fuel</span>
                                    <span className="text-white">Espresso</span>
                                </div>

                                <div className="pt-4 space-y-2">
                                    <div className="flex justify-between text-xs text-neon-blue">
                                        <span>Problem Solving</span>
                                        <span>95%</span>
                                    </div>
                                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-neon-blue w-[95%]" />
                                    </div>

                                    <div className="flex justify-between text-xs text-neon-purple">
                                        <span>Automation</span>
                                        <span>90%</span>
                                    </div>
                                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-neon-purple w-[90%]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bio Text */}
                    <div className="order-1 md:order-2">
                        <h2 className="font-cyber text-3xl md:text-4xl font-bold mb-6 text-white flex items-center gap-2">
                            <span className="text-neon-blue">#</span> ABOUT ME
                        </h2>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                As an international student and aspiring <span className="text-white font-semibold">Cloud Architect</span>, I approach infrastructure like a well-balanced RPG—optimizing stats, managing resources, and ensuring the party (user base) stays alive.
                            </p>

                            <p>
                                My journey involves hands-on quests in <span className="text-white">AWS architecture</span>, <span className="text-white">Linux administration</span>, and CI/CD pipeline construction. I thrive on solving complex server puzzles and automating repetitive grind, so I can focus on the boss fights (innovation).
                            </p>

                            <p>
                                Currently equipped with an M.S. in Information Assurance & Cybersecurity, I'm ready to join a guild (company) where I can deploy scalable solutions and turn chaos into code.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
