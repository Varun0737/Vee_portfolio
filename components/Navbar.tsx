"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gamepad2, Volume2, VolumeX, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useSound } from "@/context/SoundContext";

export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const { isMuted, toggleMute, playClick, playHover } = useSound();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Achievements", href: "#achievements" },
        { name: "Contact", href: "#contact" },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (isHome && href.startsWith("#")) {
            e.preventDefault();
            playClick();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                setIsMobileMenuOpen(false);
            }
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-cyber-black/80 backdrop-blur-lg border-b border-white/10 py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        href="/"
                        onClick={(e) => {
                            if (isHome) {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                            playClick();
                        }}
                        className="flex items-center gap-3 group"
                    >
                        <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:border-neon-blue transition-all duration-300">
                            <Gamepad2 className="w-6 h-6 text-neon-blue group-hover:text-neon-purple transition-colors" />
                        </div>
                        <span className="font-cyber font-bold text-xl tracking-tighter text-text-main transition-colors">
                            VARUN<span className="text-neon-blue group-hover:text-neon-purple transition-colors">.DEV</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                onMouseEnter={playHover}
                                className="text-sm font-mono tracking-widest text-text-dim hover:text-neon-blue transition-colors uppercase"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => {
                                toggleMute();
                                playClick();
                            }}
                            className={`p-2.5 rounded-xl transition-all duration-300 border ${isMuted
                                    ? 'text-text-dim border-white/5 hover:text-white'
                                    : 'text-neon-blue border-neon-blue/20 bg-neon-blue/5 shadow-[0_0_15px_rgba(0,210,255,0.1)]'
                                }`}
                            aria-label={isMuted ? "Unmute Sound" : "Mute Sound"}
                        >
                            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2.5 rounded-xl border border-white/10 text-text-main"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 right-0 bg-cyber-black/95 backdrop-blur-xl border-b border-white/10 p-6 space-y-4"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="block text-lg font-mono tracking-widest text-text-dim hover:text-neon-blue py-2 uppercase"
                        >
                            {link.name}
                        </Link>
                    ))}
                </motion.div>
            )}
        </nav>
    );
}
