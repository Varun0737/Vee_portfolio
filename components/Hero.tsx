"use client";

import { motion } from "framer-motion";
import { Cloud, Server, Terminal, FileDown, Database, ChevronDown } from "lucide-react";
import { useSound } from "@/context/SoundContext";
import { useLowMotion } from "@/hooks/useLowMotion";

export default function Hero() {
    const { playClick, playHover } = useSound();
    const lowMotion = useLowMotion();

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Dark Overlay for contrast */}
            <div className="absolute inset-0 bg-cyber-black/40 z-0 pointer-events-none" />

            {/* Background Grid */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div
                    className={`absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] ${!lowMotion && "animate-grid-drift"}`}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] opacity-80" />
            </div>

            {/* Floating Icons Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <FloatingIcon icon={Cloud} delay={0} x={10} y={20} lowMotion={lowMotion} />
                <FloatingIcon icon={Server} delay={2} x={80} y={15} lowMotion={lowMotion} />
                <FloatingIcon icon={Terminal} delay={4} x={20} y={80} lowMotion={lowMotion} />
                <FloatingIcon icon={Database} delay={6} x={85} y={70} lowMotion={lowMotion} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-text-dim text-xs font-mono tracking-widest uppercase">
                        Available for new opportunities
                    </div>

                    <h1 className="font-cyber text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-text-main">
                        VARUN <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple text-glow">REDDY</span>
                    </h1>

                    <p className="font-mono text-lg md:text-2xl text-text-dim mb-12 max-w-2xl mx-auto leading-relaxed">
                        Cloud, DevOps & IT Engineer
                        <span className="block mt-2 text-sm text-neon-blue opacity-80 tracking-[0.2em] font-cyber uppercase">
                            Architecting Scalable Solutions
                        </span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                        <a
                            href="#about"
                            onClick={(e) => {
                                e.preventDefault();
                                playClick();
                                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            onMouseEnter={playHover}
                            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-white/5 border border-white/10 rounded-full text-text-main font-cyber tracking-widest hover:bg-neon-blue hover:text-black transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,210,255,0.3)] hover:border-neon-blue"
                        >
                            EXPLORE WORK
                        </a>

                        <a
                            href="/Varun-cloud engineer-Resume.docx"
                            download="Varun_Reddy_Shyamala_Resume.docx"
                            onClick={playClick}
                            onMouseEnter={playHover}
                            className="group relative inline-flex items-center gap-3 px-10 py-4 bg-neon-blue/10 border border-neon-blue/30 rounded-full text-neon-blue font-cyber tracking-widest hover:bg-neon-blue/20 transition-all duration-300"
                        >
                            <FileDown className="w-5 h-5 group-hover:animate-bounce" />
                            RESUME
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-dim animate-bounce"
            >
                <ChevronDown size={32} />
            </motion.div>
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
                opacity: lowMotion ? 0.05 : undefined
            }}
        >
            <Icon size={64} />
        </div>
    );
}
