"use client";

import { useState, useCallback, useEffect, useRef } from "react";

export function useSoundEffects() {
    const [isMuted, setIsMuted] = useState(true); // Default to muted
    const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
    const humOscillator = useRef<OscillatorNode | null>(null);
    const humGain = useRef<GainNode | null>(null);

    useEffect(() => {
        // Initialize AudioContext only on client
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioContextClass) {
            const ctx = new AudioContextClass();
            setAudioContext(ctx);
        }
    }, []);

    const initAudio = useCallback(() => {
        if (audioContext && audioContext.state === "suspended") {
            audioContext.resume();
        }
        // Start hum if not muted
        if (!isMuted && audioContext && !humOscillator.current) {
            startHum();
        }
    }, [audioContext, isMuted]);

    const startHum = useCallback(() => {
        if (!audioContext) return;

        // Create hum
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();

        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(50, audioContext.currentTime); // Low drone

        // Filter to make it subtle
        const filter = audioContext.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(120, audioContext.currentTime);

        gain.gain.setValueAtTime(0.01, audioContext.currentTime); // Very low volume

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(audioContext.destination);

        osc.start();
        humOscillator.current = osc;
        humGain.current = gain;
    }, [audioContext]);

    const stopHum = useCallback(() => {
        if (humOscillator.current) {
            humOscillator.current.stop();
            humOscillator.current.disconnect();
            humOscillator.current = null;
        }
    }, []);

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

        gain.gain.setValueAtTime(0.1, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

        osc.connect(gain);
        gain.connect(audioContext.destination);

        osc.start();
        osc.stop(audioContext.currentTime + 0.1);
    }, [audioContext, isMuted]);

    const playHover = useCallback(() => {
        if (isMuted || !audioContext) return;

        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();

        osc.type = "triangle";
        osc.frequency.setValueAtTime(1200, audioContext.currentTime);

        gain.gain.setValueAtTime(0.02, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05);

        osc.connect(gain);
        gain.connect(audioContext.destination);

        osc.start();
        osc.stop(audioContext.currentTime + 0.05);
    }, [audioContext, isMuted]);

    return { playClick, playHover, isMuted, toggleMute, initAudio };
}
