"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

export default function Achievements() {
    return (
        <section id="achievements" className="py-20 relative">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="font-cyber text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                    unlocked <span className="text-neon-green">ACHIEVEMENTS</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Education */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 rounded-2xl border border-neon-blue/30 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <GraduationCap size={120} />
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-neon-blue/20 rounded-lg text-neon-blue">
                                <GraduationCap size={32} />
                            </div>
                            <div>
                                <h3 className="font-cyber text-2xl text-white mb-2">Master's Degree</h3>
                                <p className="text-xl text-gray-300 mb-1">Information Assurance & Cybersecurity</p>
                                <p className="text-neon-purple font-mono">Gannon University</p>
                                <p className="text-sm text-gray-500 mt-2 font-mono">Jan 2024 – Dec 2025</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Certifications Container */}
                    <div className="grid grid-cols-1 gap-4">
                        <CertificationCard
                            title="AWS Solutions Architect – Associate"
                            issuer="Amazon Web Services"
                            color="text-orange-400"
                            delay={0.1}
                        />
                        <CertificationCard
                            title="AWS Cloud Practitioner"
                            issuer="Amazon Web Services"
                            color="text-orange-400"
                            delay={0.2}
                        />
                        <CertificationCard
                            title="Google Data Analytics / IT Support"
                            issuer="Google"
                            color="text-blue-400"
                            delay={0.3}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function CertificationCard({ title, issuer, color, delay }: { title: string, issuer: string, color: string, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="glass-card p-4 rounded-xl border border-white/5 flex items-center gap-4 hover:border-white/20 transition-colors"
        >
            <div className={`p-2 rounded-lg bg-white/5 ${color}`}>
                <Award size={24} />
            </div>
            <div>
                <h4 className="text-white font-medium">{title}</h4>
                <p className="text-sm text-gray-400 font-mono">{issuer}</p>
            </div>
        </motion.div>
    );
}
