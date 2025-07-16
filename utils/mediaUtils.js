import { useState, useEffect } from 'react';

// SSR-safe media query hook
export function useMediaQuery(query) {
    const [matches, setMatches] = useState(() => {
        // During SSR, always return false to prevent hydration mismatches
        if (typeof window === 'undefined') {
            return false;
        }
        // On client, get the initial value
        return window.matchMedia(query).matches;
    });

    useEffect(() => {
        // Only run on client
        if (typeof window === 'undefined') return;
        
        const media = window.matchMedia(query);
        
        // Update if the current value is different
        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        const listener = (event) => {
            setMatches(event.matches);
        };

        if (typeof media.addEventListener === "function") {
            media.addEventListener("change", listener);
        } else {
            // Fallback for older browsers
            media.addListener(listener);
        }

        return () => {
            if (typeof media.removeEventListener === "function") {
                media.removeEventListener("change", listener);
            } else {
                media.removeListener(listener);
            }
        };
    }, [query]); // Removed matches from dependencies to prevent unnecessary re-runs

    return matches;
}

// Specific breakpoint hooks
export const useIsSmall = () => useMediaQuery('(max-width: 767px)');
export const useIsMedium = () => useMediaQuery('(min-width: 768px) and (max-width: 791px)');
export const useIsLarge = () => useMediaQuery('(min-width: 992px)');
