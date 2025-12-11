"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Gamepad2, ArrowLeft, Volume2, VolumeX } from "lucide-react";
import { useSound } from "@/context/SoundContext";

export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const { isMuted, toggleMute, playClick } = useSound();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-cyber-black/80 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Left Side: Logo or Back Button */}
                    <div className="flex items-center gap-4">
                        {!isHome && (
                            <Link
                                href="/"
                                onClick={playClick}
                                className="md:hidden p-2 bg-white/5 rounded-lg text-neon-blue hover:bg-neon-blue hover:text-black transition-colors"
                            >
                                <ArrowLeft size={20} />
                            </Link>
                        )}

                        <Link href="/" onClick={playClick} className="flex items-center gap-2 group">
                            <div className="p-2 rounded-lg bg-cyber-gray border border-white/10 group-hover:border-neon-blue transition-colors">
                                <Gamepad2 className="w-6 h-6 text-neon-blue group-hover:text-neon-purple transition-colors" />
                            </div>
                            <span className="font-cyber font-bold text-xl tracking-wider text-white group-hover:text-neon-blue transition-colors hidden sm:block">
                                VARUN<span className="text-neon-blue">.DEV</span>
                            </span>
                        </Link>

                        {!isHome && (
                            <Link
                                href="/"
                                onClick={playClick}
                                className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md text-sm text-gray-300 hover:text-white transition-all ml-4 font-mono group"
                            >
                                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform text-neon-blue" />
                                BACK TO MENU
                            </Link>
                        )}
                    </div>

                    {/* Right Side: Sound Toggle */}
                    <div>
                        <button
                            onClick={() => {
                                toggleMute();
                                playClick();
                            }}
                            className={`p-2 rounded-lg transition-colors border ${isMuted ? 'text-gray-500 border-white/5 hover:text-white' : 'text-neon-green border-neon-green/30 bg-neon-green/10'}`}
                            aria-label={isMuted ? "Unmute Sound" : "Mute Sound"}
                        >
                            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
