"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-cyber-black text-white min-h-screen selection:bg-neon-blue selection:text-black scroll-smooth">
      <Hero />
      <div className="relative z-10">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-blue/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-purple/5 blur-[150px] rounded-full" />
      </div>
    </main>
  );
}
