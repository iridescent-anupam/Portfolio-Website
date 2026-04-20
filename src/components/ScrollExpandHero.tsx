import {
    useEffect,
    useRef,
    useState,
    ReactNode,
} from 'react';
import { motion } from 'framer-motion';

interface ScrollExpandHeroProps {
    mediaSrc: string;
    bgImageSrc?: string;
    title?: string;
    subtitle?: string;
    scrollHint?: string;
    children?: ReactNode;
}

export function ScrollExpandHero({
    mediaSrc,
    bgImageSrc,
    title = 'Anupam Sanidhya',
    subtitle = 'Technical Product Manager',
    scrollHint = 'Scroll to explore',
    children,
}: ScrollExpandHeroProps) {
    const [scrollProgress, setScrollProgress] = useState<number>(0);
    const [showContent, setShowContent] = useState<boolean>(false);
    const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
    const [touchStartY, setTouchStartY] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setScrollProgress(0);
        setShowContent(false);
        setMediaFullyExpanded(false);
    }, []);

    useEffect(() => {
        const checkIfMobile = (): void => {
            setIsMobile(window.innerWidth < 768);
        };
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
                setMediaFullyExpanded(false);
                e.preventDefault();
            } else if (!mediaFullyExpanded) {
                e.preventDefault();
                const scrollDelta = e.deltaY * 0.0009;
                const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
                setScrollProgress(newProgress);
                if (newProgress >= 1) {
                    setMediaFullyExpanded(true);
                    setShowContent(true);
                } else if (newProgress < 0.75) {
                    setShowContent(false);
                }
            }
        };

        const handleTouchStart = (e: TouchEvent) => {
            setTouchStartY(e.touches[0].clientY);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!touchStartY) return;
            const touchY = e.touches[0].clientY;
            const deltaY = touchStartY - touchY;
            if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
                setMediaFullyExpanded(false);
                e.preventDefault();
            } else if (!mediaFullyExpanded) {
                e.preventDefault();
                const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
                const scrollDelta = deltaY * scrollFactor;
                const newProgress = Math.min(Math.max(scrollProgress + scrollDelta, 0), 1);
                setScrollProgress(newProgress);
                if (newProgress >= 1) {
                    setMediaFullyExpanded(true);
                    setShowContent(true);
                } else if (newProgress < 0.75) {
                    setShowContent(false);
                }
                setTouchStartY(touchY);
            }
        };

        const handleTouchEnd = (): void => { setTouchStartY(0); };

        const handleScroll = (): void => {
            if (!mediaFullyExpanded) { window.scrollTo(0, 0); }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('touchstart', handleTouchStart, { passive: false });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [scrollProgress, mediaFullyExpanded, touchStartY]);

    // Card sizing: starts as a centered card, expands to fill viewport
    const startW = isMobile ? 80 : 38;
    const startH = isMobile ? 40 : 55;
    const w = startW + scrollProgress * (100 - startW);
    const h = startH + scrollProgress * (100 - startH);
    const slide = scrollProgress * (isMobile ? 180 : 150);
    const txtAlpha = Math.max(0, 1 - scrollProgress * 2.5);
    const radius = Math.max(0, 20 - scrollProgress * 20);

    // Background darkening fades as the card expands
    const bgDarken = Math.max(0, 0.3 - scrollProgress * 0.25);

    const firstWord = title ? title.split(' ')[0] : '';
    const rest = title ? title.split(' ').slice(1).join(' ') : '';

    return (
        <div ref={sectionRef} style={{ overflow: 'hidden' }}>
            {/* ── Hero section — scoped to viewport height, NO fixed positioning ── */}
            <div
                style={{
                    position: 'relative',
                    width: '100vw',
                    height: '100vh',
                    overflow: 'hidden',
                }}
            >
                {/* Scroll progress bar — top edge fill */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '2px',
                    width: `${scrollProgress * 100}%`,
                    background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
                    boxShadow: '0 0 8px rgba(59,130,246,0.8)',
                    zIndex: 10,
                    transition: 'width 0.05s linear',
                    opacity: mediaFullyExpanded ? 0 : 1,
                }}
            />

            {/* Layer 1: Full-bleed background image (blurred + darkened) */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 1,
                    }}
                >
                    <img
                        src={bgImageSrc || mediaSrc}
                        alt=""
                        aria-hidden="true"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                            filter: `brightness(${1 - bgDarken})`,
                        }}
                    />
                    {/* Dark overlay for contrast */}
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background: `rgba(5, 8, 16, ${0.45 - scrollProgress * 0.3})`,
                        }}
                    />
                </div>

                {/* Layer 2: Expanding card (sharp image, rounded corners) */}
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: `${w}vw`,
                        height: `${h}vh`,
                        transform: 'translate(-50%, -50%)',
                        borderRadius: `${radius}px`,
                        overflow: 'hidden',
                        zIndex: 5,
                        boxShadow: `0 0 ${40 + scrollProgress * 40}px rgba(0, 240, 255, ${0.06 + scrollProgress * 0.1}), 0 8px 60px rgba(0, 0, 0, 0.6)`,
                    }}
                >
                    <img
                        src={mediaSrc}
                        alt={title || 'Hero media'}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                        }}
                    />
                    {/* Glass tint overlay on the card */}
                    <div
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background: `linear-gradient(135deg, rgba(0,240,255,${0.08 - scrollProgress * 0.06}), rgba(183,33,255,${0.05 - scrollProgress * 0.04}))`,
                            opacity: Math.max(0, 0.4 - scrollProgress * 0.35),
                        }}
                    />
                    {/* Bottom vignette on card */}
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '40%',
                            background: 'linear-gradient(to top, rgba(5,8,16,0.6), transparent)',
                        }}
                    />
                </div>

                {/* Layer 3: Hero identity overlay — visible immediately on load */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        opacity: txtAlpha,
                        zIndex: 6,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: scrollProgress > 0.05 ? 'none' : 'auto',
                        gap: '0px',
                    }}
                >
                    {/* Name — splits apart on scroll */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: isMobile ? '4px' : '8px' }}>
                        <h2
                            className="font-display tracking-tight text-center"
                            style={{
                                fontSize: isMobile ? '3rem' : 'clamp(3rem, 6.5vw, 7rem)',
                                fontWeight: 700,
                                color: 'white',
                                transform: `translateX(-${slide}vw)`,
                                textShadow: '0 4px 30px rgba(0,0,0,0.6), 0 1px 6px rgba(0,0,0,0.4)',
                                margin: 0,
                                lineHeight: 1.05,
                            }}
                        >
                            {firstWord}
                        </h2>
                        <h2
                            className="font-display tracking-tight text-center"
                            style={{
                                fontSize: isMobile ? '3rem' : 'clamp(3rem, 6.5vw, 7rem)',
                                fontWeight: 700,
                                color: 'white',
                                transform: `translateX(${slide}vw)`,
                                textShadow: '0 4px 30px rgba(0,0,0,0.6), 0 1px 6px rgba(0,0,0,0.4)',
                                margin: 0,
                                lineHeight: 1.05,
                            }}
                        >
                            {rest}
                        </h2>
                    </div>

                    {/* Role descriptor — HIGH PRIORITY: immediately visible */}
                    {subtitle && (
                        <p
                            style={{
                                fontSize: isMobile ? '0.75rem' : '1rem',
                                color: 'rgba(255, 255, 255, 0.92)',
                                fontWeight: 600,
                                letterSpacing: '0.25em',
                                textTransform: 'uppercase',
                                whiteSpace: 'nowrap',
                                margin: isMobile ? '10px 0 0' : '14px 0 0',
                                textShadow: '0 2px 16px rgba(0,0,0,0.9)',
                                borderTop: '1px solid rgba(255,255,255,0.25)',
                                paddingTop: '12px',
                            }}
                        >
                            {subtitle}
                        </p>
                    )}

                    {/* Domain tagline — anchors aesthetic to professional identity */}
                    <p
                        style={{
                            fontSize: isMobile ? '0.7rem' : '0.85rem',
                            color: 'rgba(255,255,255,0.65)',
                            fontWeight: 400,
                            letterSpacing: '0.08em',
                            margin: '6px 0 0',
                            textShadow: '0 2px 12px rgba(0,0,0,0.8)',
                            fontStyle: 'italic',
                        }}
                    >
                        Building data-driven products that scale
                    </p>
                </div>

                {/* Layer 4: Scroll cue at bottom */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '5vh',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        opacity: txtAlpha,
                        zIndex: 7,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px',
                        pointerEvents: 'none',
                    }}
                >
                    {scrollHint && (
                        <motion.div
                            className="flex flex-col items-center gap-2"
                            animate={{ opacity: scrollProgress > 0.1 ? 0 : [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <p style={{
                                fontSize: '0.65rem',
                                color: 'rgba(255, 255, 255, 0.55)',
                                letterSpacing: '0.25em',
                                textTransform: 'uppercase',
                                margin: 0,
                                textShadow: '0 1px 8px rgba(0,0,0,0.6)',
                            }}>
                                Scroll to see projects
                            </p>
                            <motion.div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '3px',
                                }}
                                animate={{ y: [0, 6, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <div style={{ width: '1px', height: '20px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)' }} />
                                <div style={{
                                    width: 0,
                                    height: 0,
                                    borderLeft: '5px solid transparent',
                                    borderRight: '5px solid transparent',
                                    borderTop: '6px solid rgba(255,255,255,0.5)',
                                }} />
                            </motion.div>
                        </motion.div>
                    )}
                </div>
            </div>

            {/* ── Content below the hero — its own background, no hero image ── */}
            <motion.div
                style={{
                    position: 'relative',
                    zIndex: 20,
                    background: 'linear-gradient(180deg, #090d1a 0%, #060a14 100%)',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 1 : 0 }}
                transition={{ duration: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
    );
}

export default ScrollExpandHero;
