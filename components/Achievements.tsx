"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function Achievements() {
    return (
        <section id="achievements" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex items-center gap-4 mb-20">
                    <h2 className="font-cyber text-3xl md:text-5xl font-bold text-text-main">
                        ACHIEVEMENTS
                    </h2>
                    <div className="h-px flex-grow bg-white/10" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
                    {/* Education */}
                    <Link href="https://www.gannon.edu/" target="_blank" className="h-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-10 rounded-2xl border border-neon-blue/20 relative overflow-hidden group hover:bg-white/5 transition-all duration-500 h-full"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity z-0">
                                <GraduationCap size={160} />
                            </div>

                            <div className="relative z-10">
                                <span className="inline-block px-3 py-1 bg-neon-blue/10 text-neon-blue text-[10px] font-mono tracking-widest uppercase rounded-full mb-6 border border-neon-blue/20">
                                    Education
                                </span>
                                <h3 className="font-cyber text-3xl text-text-main mb-2">Master's Degree</h3>
                                <p className="text-xl text-text-dim mb-4 font-semibold">Information Assurance & Cybersecurity</p>
                                <p className="text-neon-purple font-cyber text-lg tracking-wide uppercase">Gannon University</p>
                                <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                                    <span className="text-sm text-text-dim font-mono">Jan 2024 – Dec 2025</span>
                                    <span className="text-xs text-neon-blue font-mono group-hover:underline">VIEW INSTITUTION →</span>
                                </div>
                            </div>
                        </motion.div>
                    </Link>

                    {/* Certifications Container */}
                    <div className="grid grid-cols-1 gap-6">
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
                            delay={0.4}
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
                className="glass-card p-6 rounded-2xl border border-white/5 flex items-center gap-6 hover:border-white/20 hover:bg-white/5 transition-all duration-300 cursor-pointer group"
            >
                <div className={`p-3 rounded-xl bg-white/5 ${color} w-16 h-16 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-white/10 transition-colors`}>
                    {logo ? (
                        <img src={logo} alt={issuer} className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all" />
                    ) : (
                        <Award size={32} />
                    )}
                </div>
                <div>
                    <h4 className="text-text-main font-semibold text-lg">{title}</h4>
                    <p className="text-sm text-text-dim font-mono tracking-tight">{issuer}</p>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-neon-blue font-mono text-xs">VERIFY →</span>
                </div>
            </motion.div>
        </Link>
    );
}
