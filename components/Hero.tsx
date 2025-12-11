"use client";

import { motion } from "framer-motion";
import {
    Terminal, Cloud, Server, Database,
    User, Briefcase, Code, Award, Zap, Mail
} from "lucide-react";
import Link from "next/link";

const menuItems = [
    { name: "Character Stats", href: "/about", icon: User, color: "text-blue-400", desc: "About Me" },
    { name: "Quest Log", href: "/experience", icon: Briefcase, color: "text-purple-400", desc: "Experience" },
    { name: "Boss Fights", href: "/projects", icon: Code, color: "text-green-400", desc: "Projects" },
    { name: "Skill Tree", href: "/skills", icon: Zap, color: "text-yellow-400", desc: "Technical Skills" },
    { name: "Achievements", href: "/achievements", icon: Award, color: "text-orange-400", desc: "Certs & Education" },
    { name: "Comm Link", href: "/contact", icon: Mail, color: "text-cyan-400", desc: "Contact System" }
];

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Grid & Particles */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
            <div className="absolute inset-0 bg-cyber-black/50" />

            {/* Floating Icons Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <FloatingIcon icon={Cloud} delay={0} x={10} y={20} />
                <FloatingIcon icon={Server} delay={2} x={80} y={15} />
                <FloatingIcon icon={Terminal} delay={4} x={20} y={80} />
                <FloatingIcon icon={Database} delay={6} x={85} y={70} />
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

                    <h1 className="font-cyber text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
                        VARUN <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple text-glow">REDDY</span>
                    </h1>

                    <p className="font-mono text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Cloud & DevOps Engineer
                        <span className="text-neon-purple mx-2">|</span>
                        SELECT GAME MODE
                    </p>

                    {/* Game Menu Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl px-4">
                        {menuItems.map((item, index) => (
                            <Link key={item.name} href={item.href} className="block group">
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
                                        <h3 className="font-cyber text-lg text-white group-hover:text-neon-blue transition-colors">
                                            {item.name}
                                        </h3>
                                        <p className="font-mono text-xs text-gray-400">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-4 text-xs font-mono text-gray-600">
                PRESS START TO BEGIN
            </div>
        </section>
    );
}

function FloatingIcon({ icon: Icon, delay, x, y }: { icon: any, delay: number, x: number, y: number }) {
    return (
        <motion.div
            className="absolute text-white/5"
            style={{ left: `${x}%`, top: `${y}%` }}
            animate={{
                y: [0, -20, 0],
                opacity: [0.05, 0.1, 0.05]
            }}
            transition={{
                duration: 5,
                delay: delay,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <Icon size={64} />
        </motion.div>
    );
}
