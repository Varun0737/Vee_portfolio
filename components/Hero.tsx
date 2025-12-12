"use client";

import { motion } from "framer-motion";
import {
    Terminal, Cloud, Server, Database,
    User, Briefcase, Code, Award, Zap, Mail, FileDown
} from "lucide-react";
import Link from "next/link";
import { useSound } from "@/context/SoundContext";
import { useLowMotion } from "@/hooks/useLowMotion";

const menuItems = [
    { name: "Character Stats", href: "/about", icon: User, color: "text-blue-400", desc: "About Me" },
    { name: "Quest Log", href: "/experience", icon: Briefcase, color: "text-purple-400", desc: "Experience" },
    { name: "Boss Fights", href: "/projects", icon: Code, color: "text-green-400", desc: "Projects" },
    { name: "Skill Tree", href: "/skills", icon: Zap, color: "text-yellow-400", desc: "Technical Skills" },
    { name: "Achievements", href: "/achievements", icon: Award, color: "text-orange-400", desc: "Certs & Education" },
    { name: "Comm Link", href: "/contact", icon: Mail, color: "text-cyan-400", desc: "Contact System" }
];

export default function Hero() {
    const { playClick, playHover } = useSound();
    const lowMotion = useLowMotion();

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Dark Overlay for contrast */}
            <div className="absolute inset-0 bg-cyber-black/40 z-0 pointer-events-none" />

            {/* Sci-Fi Grid Scan Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Base Grid with Parallax Drift - Disabled on low motion */}
                <div
                    className={`absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] ${!lowMotion && "animate-grid-drift"}`}
                    style={!lowMotion ? { willChange: "background-position" } : {}}
                />

                {/* Vignette Overlay (keep opaque around edges) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] opacity-80" />

                {/* Horizontal Scan Beam - Hidden on low motion */}
                {!lowMotion && (
                    <div
                        className="absolute top-0 bottom-0 w-[500px] bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent blur-3xl animate-scan"
                        style={{
                            '--scan-opacity': '0.5',
                            willChange: "transform, opacity",
                        } as React.CSSProperties}
                    />
                )}
            </div>

            {/* Floating Icons Background - Static on low motion */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <FloatingIcon icon={Cloud} delay={0} x={10} y={20} lowMotion={lowMotion} />
                <FloatingIcon icon={Server} delay={2} x={80} y={15} lowMotion={lowMotion} />
                <FloatingIcon icon={Terminal} delay={4} x={20} y={80} lowMotion={lowMotion} />
                <FloatingIcon icon={Database} delay={6} x={85} y={70} lowMotion={lowMotion} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center"
                >
                    <div className="inline-block mb-4 px-3 py-1 rounded-full bg-white/5 border border-neon-blue/20 text-neon-blue text-sm font-mono tracking-widest">
                        SYSTEM_STATUS: ONLINE
                    </div>

                    <h1 className="font-cyber text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-text-main">
                        VARUN <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple text-glow">REDDY</span>
                    </h1>

                    <p className="font-mono text-lg md:text-xl text-text-dim mb-8 max-w-2xl mx-auto">
                        Cloud & DevOps Engineer
                        <span className="text-neon-purple mx-2">|</span>
                        SELECT GAME MODE
                    </p>

                    {/* Quick Stats Strip - Static on low motion */}
                    <div className="w-full max-w-4xl mb-12 overflow-hidden mask-linear-fade relative">
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-cyber-black to-transparent z-10" />
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-cyber-black to-transparent z-10" />

                        <div
                            className={`flex gap-6 w-max ${!lowMotion ? "animate-marquee" : "flex-wrap justify-center overflow-auto"}`}
                        >
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="flex gap-6">
                                    {[
                                        "⭐ 4+ Years IT & Cloud Experience",
                                        "☁️ AWS, Terraform, CI/CD Pipelines",
                                        "📡 Kubernetes | Docker | Linux",
                                        "🔐 Cybersecurity Background"
                                    ].map((stat, idx) => (
                                        <div key={idx} className="px-6 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm font-mono text-text-dim shadow-sm whitespace-nowrap">
                                            {stat}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Resume Download Button */}


                    {/* Game Menu Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl px-4">
                        {menuItems.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block group"
                                onClick={playClick}
                                onMouseEnter={playHover}
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass-card hover:bg-white/10 border border-white/10 hover:border-neon-blue/50 p-6 rounded-xl flex items-center gap-4 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,243,255,0.2)]"
                                >
                                    <div className={`p-3 rounded-lg bg-black/40 ${item.color}`}>
                                        <item.icon size={28} />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="font-cyber text-lg text-text-main group-hover:text-neon-blue transition-colors">
                                            {item.name}
                                        </h3>
                                        <p className="font-mono text-xs text-text-dim">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>

                    {/* Resume Download Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-12"
                    >
                        <a
                            href="/Varun-cloud engineer-Resume.docx"
                            download="Varun_Reddy_Shyamala_Resume.docx"
                            onClick={playClick}
                            onMouseEnter={playHover}
                            className="group relative inline-flex items-center gap-3 px-8 py-3 bg-neon-blue/10 border border-neon-blue/50 rounded-full text-neon-blue font-cyber tracking-wide hover:bg-neon-blue hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]"
                        >
                            <FileDown className="w-5 h-5 group-hover:animate-bounce" />
                            DOWNLOAD RESUME
                            <div className="absolute inset-0 rounded-full bg-neon-blue/20 blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            <div className="absolute bottom-4 text-xs font-mono text-text-dim">
                PRESS START TO BEGIN
            </div>
        </section>
    );
}

function FloatingIcon({ icon: Icon, delay, x, y, lowMotion }: { icon: any, delay: number, x: number, y: number, lowMotion: boolean }) {
    return (
        <div
            className={`absolute text-white/5 ${!lowMotion && "animate-float"}`}
            style={{
                left: `${x}%`,
                top: `${y}%`,
                animationDelay: `${delay}s`,
                opacity: lowMotion ? 0.05 : undefined // Static opacity if lowMotion
            }}
        >
            <Icon size={64} />
        </div>
    );
}
