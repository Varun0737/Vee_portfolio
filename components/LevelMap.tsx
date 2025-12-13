"use client";

import { motion } from "framer-motion";
import { User, Briefcase, Code, Award, Zap, Mail, Lock } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSound } from "@/context/SoundContext";

// Map Configuration
// Map Configuration
const nodes = [
    { id: "about", name: "Character Stats", href: "/about", icon: User, x: 20, y: 15, color: "text-blue-400", bg: "bg-blue-500/20", border: "border-blue-400" },
    { id: "skills", name: "Skill Tree", href: "/skills", icon: Zap, x: 80, y: 30, color: "text-yellow-400", bg: "bg-yellow-500/20", border: "border-yellow-400" },
    { id: "projects", name: "BOSS PROJECT", href: "/projects", icon: Code, x: 50, y: 50, color: "text-green-400", bg: "bg-green-500/20", border: "border-green-400", scale: 1.5 },
    { id: "experience", name: "Experience", href: "/experience", icon: Briefcase, x: 20, y: 75, color: "text-purple-400", bg: "bg-purple-500/20", border: "border-purple-400" },
    { id: "achievements", name: "Achievements", href: "/achievements", icon: Award, x: 80, y: 80, color: "text-orange-400", bg: "bg-orange-500/20", border: "border-orange-400" },
    { id: "contact", name: "Comm Link", href: "/contact", icon: Mail, x: 50, y: 95, color: "text-cyan-400", bg: "bg-cyan-500/20", border: "border-cyan-400" },
];

export default function LevelMap() {
    const { playClick, playHover } = useSound();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Mobile specific layout (Vertical timeline)
    if (isMobile) {
        return (
            <div className="flex flex-col gap-8 w-full max-w-md px-4 py-8 relative">
                {/* Central Timeline Line */}
                <div className="absolute left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-transparent via-neon-blue/50 to-transparent -translate-x-1/2" />

                {nodes.map((node, index) => (
                    <motion.div
                        key={node.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative z-10 flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center gap-4`}
                    >
                        {/* Node Icon */}
                        <Link href={node.href} onClick={playClick} className="relative group shrink-0">
                            <div className={`w-16 h-16 rounded-full ${node.bg} backdrop-blur-md border-2 ${node.border} flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300`}>
                                <node.icon className={`${node.color}`} size={28} />
                            </div>
                        </Link>

                        {/* Text Label */}
                        <div className={`flex-1 glass-card p-4 rounded-lg border ${node.bg} border-white/10 ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                            <h3 className={`font-cyber font-bold ${node.color}`}>{node.name}</h3>
                            <p className="text-xs text-text-dim font-mono">Level {index + 1}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        );
    }

    // Desktop/Tablet Map Layout
    return (
        <div className="relative w-full max-w-5xl h-[600px] mt-8 select-none">
            {/* Nodes Layer */}
            {nodes.map((node, index) => (
                <div
                    key={node.id}
                    className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                    <Link href={node.href} onClick={playClick} onMouseEnter={playHover}>
                        <motion.div
                            initial={{ scale: 0, opacity: 0, y: 0 }}
                            animate={{
                                scale: node.scale || 1,
                                opacity: 1,
                                y: [0, -10, 0]
                            }}
                            whileHover={{ scale: (node.scale || 1) * 1.2 }}
                            transition={{
                                scale: { type: "spring", stiffness: 260, damping: 20, delay: index * 0.1 },
                                opacity: { duration: 0.5, delay: index * 0.1 },
                                y: {
                                    repeat: Infinity,
                                    duration: 3 + index * 0.5,
                                    ease: "easeInOut",
                                    delay: index * 0.2 // Stagger float start
                                }
                            }}
                            className="relative group cursor-pointer"
                        >
                            {/* Hexagon/Circle Shape */}
                            <div className={`w-24 h-24 ${node.bg} backdrop-blur-md rounded-full border-2 ${node.border} flex items-center justify-center relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_50px_rgba(0,243,255,0.4)] transition-all duration-300`}>
                                {/* Inner Rotating Ring */}
                                <div className="absolute inset-1 border border-white/20 rounded-full animate-[spin_10s_linear_infinite]" />
                                <node.icon className={`${node.color} relative z-10 w-10 h-10 group-hover:w-12 group-hover:h-12 transition-all duration-300`} />

                                {/* Scanline Effect */}
                                <div className="absolute w-full h-[2px] bg-white/20 animate-scan-fast top-0" />
                            </div>

                            {/* Label Tooltip Style - Always visible or on hover? Let's make it always visible but subtle */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap text-center">
                                <div className={`font-cyber font-bold text-lg ${node.color} drop-shadow-md`}>
                                    {node.name}
                                </div>
                                <div className="h-1 w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mt-1" />
                            </div>
                        </motion.div>
                    </Link>
                </div>
            ))}

            {/* Decor Elements */}
            <div className="absolute bottom-4 left-4 text-xs font-mono text-neon-blue/40 border border-neon-blue/20 px-2 py-1">
                MAP_COORD: SECTOR_07
            </div>
        </div>
    );
}
