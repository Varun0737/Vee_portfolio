import { useState, useEffect } from 'react';

export function useLowMotion() {
    const [lowMotion, setLowMotion] = useState(false);

    useEffect(() => {
        // Check if we are in the browser
        if (typeof window === 'undefined') return;

        // Define the media query
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        // Set initial value
        setLowMotion(mediaQuery.matches);

        // Handler for changes
        const handleChange = (e: MediaQueryListEvent) => {
            setLowMotion(e.matches);
        };

        // Add listener
        mediaQuery.addEventListener('change', handleChange);

        // Cleanup
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    return lowMotion;
}
