import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Check both window and document element for scroll to catch all contexts
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            setIsVisible(scrollY > 300);
        };

        window.addEventListener("scroll", toggleVisibility, { passive: true });
        toggleVisibility();
        
        // Also poll just in case the scrolling container is deeply nested and we missed it
        const interval = setInterval(toggleVisibility, 500);
        
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
            clearInterval(interval);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        // Fallback for nested scrolling containers
        document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            style={{
                position: 'fixed',
                bottom: '40px',
                right: '40px',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'linear-gradient(180deg, #3b82f6 0%, #1d4ed8 100%)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.2), 0 6px 20px rgba(37,99,235,0.5), 0 2px 6px rgba(0,0,0,0.4)',
                border: '1px solid rgba(255,255,255,0.15)',
                zIndex: 999999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
                pointerEvents: isVisible ? 'auto' : 'none',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
            aria-label="Back to top"
        >
             <ArrowUp className="w-6 h-6" style={{ color: 'white', filter: 'drop-shadow(0 1px 2px rgba(0,0,50,0.4))' }} />
        </button>
    );
}
