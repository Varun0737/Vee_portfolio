"use client";

import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from "react";

interface SoundContextType {
    playClick: () => void;
    playHover: () => void;
    isMuted: boolean;
    toggleMute: () => void;
    initAudio: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: React.ReactNode }) {
    const [isMuted, setIsMuted] = useState(true);
    const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
    const osc1Ref = useRef<OscillatorNode | null>(null);
    const osc2Ref = useRef<OscillatorNode | null>(null);
    const gainNodeRef = useRef<GainNode | null>(null);

    useEffect(() => {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContextClass) {
            const ctx = new AudioContextClass();
            setAudioContext(ctx);
        }
    }, []);

    const startHum = useCallback(() => {
        if (!audioContext) return;

        // Create two oscillators for a "binaural" or "chorus" pad effect
        const osc1 = audioContext.createOscillator();
        const osc2 = audioContext.createOscillator();
        const gain = audioContext.createGain();

        // Use sine waves for a smoother, more relaxing tone
        osc1.type = "sine";
        osc2.type = "sine";

        // Slight detuning to create a gentle "beating" or atmospheric texture
        const baseFreq = 110; // Low A2 note, deep but not too rumbly
        osc1.frequency.setValueAtTime(baseFreq, audioContext.currentTime);
        osc2.frequency.setValueAtTime(baseFreq + 2, audioContext.currentTime); // 2Hz beat frequency (relaxing delta/theta range)

        // Very low volume with soft fade-in
        gain.gain.setValueAtTime(0, audioContext.currentTime);
        gain.gain.linearRampToValueAtTime(0.02, audioContext.currentTime + 2); // 2s fade in

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(audioContext.destination);

        osc1.start();
        osc2.start();

        osc1Ref.current = osc1;
        osc2Ref.current = osc2;
        gainNodeRef.current = gain;
    }, [audioContext]);

    const stopHum = useCallback(() => {
        if (gainNodeRef.current && audioContext) {
            // Soft fade out
            const currentTime = audioContext.currentTime;
            gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, currentTime);
            gainNodeRef.current.gain.linearRampToValueAtTime(0, currentTime + 0.5);

            setTimeout(() => {
                if (osc1Ref.current) { osc1Ref.current.stop(); osc1Ref.current.disconnect(); }
                if (osc2Ref.current) { osc2Ref.current.stop(); osc2Ref.current.disconnect(); }
                if (gainNodeRef.current) { gainNodeRef.current.disconnect(); }
                osc1Ref.current = null;
                osc2Ref.current = null;
                gainNodeRef.current = null;
            }, 500);
        }
    }, [audioContext]);

    const initAudio = useCallback(() => {
        if (audioContext && audioContext.state === "suspended") {
            audioContext.resume();
        }
    }, [audioContext]);

    const toggleMute = useCallback(() => {
        const newMuted = !isMuted;
        setIsMuted(newMuted);

        if (newMuted) {
            stopHum();
        } else {
            if (audioContext?.state === "suspended") audioContext.resume();
            startHum();
        }
    }, [isMuted, audioContext, startHum, stopHum]);

    const playClick = useCallback(() => {
        if (isMuted || !audioContext) return;

        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(800, audioContext.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.1);

        gain.gain.setValueAtTime(0.05, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.1);

        osc.connect(gain);
        gain.connect(audioContext.destination);

        osc.start();
        osc.stop(audioContext.currentTime + 0.1);
    }, [audioContext, isMuted]);

    const playHover = useCallback(() => {
        if (isMuted || !audioContext) return;

        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(1200, audioContext.currentTime);

        gain.gain.setValueAtTime(0.01, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.03);

        osc.connect(gain);
        gain.connect(audioContext.destination);

        osc.start();
        osc.stop(audioContext.currentTime + 0.03);
    }, [audioContext, isMuted]);

    return (
        <SoundContext.Provider value={{ playClick, playHover, isMuted, toggleMute, initAudio }}>
            {children}
        </SoundContext.Provider>
    );
}

export function useSound() {
    const context = useContext(SoundContext);
    if (context === undefined) {
        throw new Error("useSound must be used within a SoundProvider");
    }
    return context;
}
