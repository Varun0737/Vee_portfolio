"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, Copy, Check } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const email = "shyamala002@gannon.edu";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/5 to-transparent pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-12 rounded-3xl border border-neon-blue/30 shadow-[0_0_50px_rgba(0,243,255,0.1)]"
                >
                    <h2 className="font-cyber text-3xl md:text-5xl font-bold text-white mb-6">
                        READY TO <span className="text-neon-blue">START?</span>
                    </h2>

                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        I'm currently looking for new opportunities to deploy my skills.
                        Whether you have a question or just want to say hi, my inbox is open!
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
                        <a
                            href={`mailto:${email}`}
                            className="flex items-center gap-2 px-8 py-4 bg-neon-blue text-black font-bold rounded-full hover:bg-neon-blue/80 transition-colors shadow-[0_0_20px_rgba(0,243,255,0.4)]"
                        >
                            <Mail size={20} /> SEND MESSAGE
                        </a>

                        <div className="flex items-center gap-2 px-6 py-4 bg-white/5 border border-white/10 rounded-full text-gray-300">
                            <Phone size={18} />
                            <span className="font-mono">+1 814-956-0423</span>
                        </div>
                    </div>

                    <div className="flex justify-center gap-8">
                        <Link href="https://www.linkedin.com/in/varun-reddy-shyamala-618a51307/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors border border-white/5 hover:border-white/20">
                            <Linkedin size={24} />
                        </Link>
                        <Link href="https://github.com/Varun0737" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors border border-white/5 hover:border-white/20">
                            <Github size={24} />
                        </Link>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 text-sm text-gray-500 font-mono">
                        <p>Designed & Built by Varun Reddy Shyamala</p>
                        <p className="mt-2 text-xs opacity-50">© 2025 ALL RIGHTS RESERVED | SYSTEM VER. 1.0.0</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
