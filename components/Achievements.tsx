"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";

import Link from "next/link";

export default function Achievements() {
    return (
        <section id="achievements" className="py-20 relative">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2 className="font-cyber text-3xl md:text-4xl font-bold text-text-main mb-12 text-center">
                    unlocked <span className="text-neon-green">ACHIEVEMENTS</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Education */}
                    <Link href="https://www.gannon.edu/" target="_blank">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 rounded-2xl border border-neon-blue/30 relative overflow-hidden group hover:bg-white/5 transition-all cursor-pointer h-full"
                        >
                            {/* Banner Image */}
                            <div className="absolute inset-0 z-0">
                                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/90 to-cyber-black/40 z-10" />
                                <img
                                    src="/gannon-banner.png"
                                    alt="Gannon University"
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity transform group-hover:scale-105 duration-700"
                                />
                            </div>

                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity z-10">
                                <GraduationCap size={120} />
                            </div>

                            <div className="flex items-start gap-4 relative z-20">
                                <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10 shrink-0 bg-black/50 backdrop-blur-sm">
                                    <img src="/gannon-banner.png" alt="GU Logo" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h3 className="font-cyber text-2xl text-text-main mb-2 shadow-black drop-shadow-lg">Master's Degree</h3>
                                    <p className="text-xl text-text-dim mb-1 font-semibold shadow-black drop-shadow-md">Information Assurance & Cybersecurity</p>
                                    <p className="text-neon-purple font-mono font-bold">Gannon University</p>
                                    <p className="text-sm text-text-dim mt-2 font-mono bg-black/40 inline-block px-2 py-1 rounded">Jan 2024 – Dec 2025</p>
                                </div>
                            </div>
                        </motion.div>
                    </Link>

                    {/* Certifications Container */}
                    <div className="grid grid-cols-1 gap-4">
                        <CertificationCard
                            title="AWS Solutions Architect – Associate"
                            issuer="Amazon Web Services"
                            color="text-orange-400"
                            delay={0.1}
                            href="https://www.credly.com/badges/d4b329f6-cc1e-4711-9c7c-f84f2af08985/linked_in?t=svgqb0"
                            logo="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                        />
                        <CertificationCard
                            title="AWS Cloud Practitioner"
                            issuer="Amazon Web Services"
                            color="text-orange-400"
                            delay={0.2}
                            href="https://www.credly.com/badges/d4b329f6-cc1e-4711-9c7c-f84f2af08985/linked_in?t=svgqb0"
                            logo="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                        />
                        <CertificationCard
                            title="Google Crash Course on Python"
                            issuer="Google"
                            color="text-blue-400"
                            delay={0.3}
                            href="https://www.coursera.org/account/accomplishments/verify/20GTW5HDZLBW"
                            logo="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg"
                        />
                        <CertificationCard
                            title="Linux and SQL"
                            issuer="Google"
                            color="text-blue-400"
                            delay={0.3}
                            href="https://www.coursera.org/account/accomplishments/verify/P50A29H5ARAN"
                            logo="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function CertificationCard({ title, issuer, color, delay, href, logo }: { title: string, issuer: string, color: string, delay: number, href: string, logo?: string }) {
    return (
        <Link href={href} target="_blank" className="block">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay }}
                className="glass-card p-4 rounded-xl border border-white/5 flex items-center gap-4 hover:border-white/20 hover:bg-white/5 transition-colors cursor-pointer"
            >
                <div className={`p-2 rounded-lg bg-white/5 ${color} w-12 h-12 flex items-center justify-center shrink-0`}>
                    {logo ? (
                        <img src={logo} alt={issuer} className="w-full h-full object-contain" />
                    ) : (
                        <Award size={24} />
                    )}
                </div>
                <div>
                    <h4 className="text-text-main font-medium">{title}</h4>
                    <p className="text-sm text-text-dim font-mono">{issuer}</p>
                </div>
            </motion.div>
        </Link>
    );
}
