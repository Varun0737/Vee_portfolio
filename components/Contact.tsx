"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    const email = "shyamala002@gannon.edu";

    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/5 to-transparent pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-card p-12 md:p-20 rounded-[3rem] border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.4)]"
                >
                    <h2 className="font-cyber text-4xl md:text-6xl font-bold text-text-main mb-8 tracking-tight">
                        LET'S <span className="text-neon-blue">CONNECT</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-text-dim mb-16 max-w-2xl mx-auto leading-relaxed">
                        I'm currently seeking new opportunities to apply my DevOps & Cloud expertise.
                        Feel free to reach out for collaborations or just a friendly chat!
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
                        <a
                            href={`mailto:${email}`}
                            className="flex items-center gap-3 px-10 py-5 bg-neon-blue text-black font-bold rounded-full hover:bg-white hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <Mail size={22} /> SEND MESSAGE
                        </a>

                        <a href="tel:+18149560423" className="flex items-center gap-3 px-8 py-5 bg-white/5 border border-white/10 rounded-full text-text-main hover:bg-white/10 transition-all duration-300 font-mono tracking-tight group">
                            <Phone size={20} className="text-neon-blue group-hover:rotate-12 transition-transform" />
                            <span>+1 814-956-0423</span>
                        </a>
                    </div>

                    <div className="flex justify-center gap-10">
                        <Link href="https://www.linkedin.com/in/varun-reddy-shyamala-618a51307/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 hover:bg-neon-blue hover:text-black transition-all duration-300 border border-white/5 hover:border-neon-blue">
                            <Linkedin size={28} />
                        </Link>
                        <Link href="https://github.com/Varun0737" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 hover:bg-neon-blue hover:text-black transition-all duration-300 border border-white/5 hover:border-neon-blue">
                            <Github size={28} />
                        </Link>
                    </div>

                    <div className="mt-20 pt-12 border-t border-white/5 text-xs text-text-dim font-mono uppercase tracking-[0.3em]">
                        <p>Designed & Built by Varun Reddy Shyamala</p>
                        <p className="mt-4 opacity-30">© 2025 ALL RIGHTS RESERVED</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
