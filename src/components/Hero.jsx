import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ChevronDown, ArrowRight } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Hero() {
    const container = useRef(null);
    const scrollIndicator = useRef(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100 && !scrolled) {
                setScrolled(true);
                gsap.to(scrollIndicator.current, { opacity: 0, duration: 0.3 });
            } else if (window.scrollY <= 100 && scrolled) {
                setScrolled(false);
                gsap.to(scrollIndicator.current, { opacity: 1, duration: 0.3 });
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-element', {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                delay: 0.2
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="relative w-full min-h-[100dvh] flex items-end">
            {/* Background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                    src="/assets/240519-174143-7th-Daphne Termeer-0203-HR.JPG"
                    alt=""
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-transparent pt-[60%]" style={{ background: 'linear-gradient(to top, var(--bg) 0%, rgba(255, 245, 235, 0.8) 30%, transparent 60%)' }}></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full px-6 md:px-12 pb-20 md:pb-28 pt-40">
                <div className="max-w-5xl">
                    <h1 className="hero-element flex flex-wrap items-baseline gap-x-4 leading-[1.1] mb-2">
                        <span className="font-clash font-bold text-[clamp(3rem,8vw,7rem)] text-text tracking-[-0.03em] uppercase">We put the</span>
                        <span
                            className="font-playfair italic text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] text-transparent bg-clip-text"
                            style={{
                                backgroundImage: 'linear-gradient(90deg, var(--accent-1), var(--accent-2), var(--accent-3), var(--accent-1))',
                                backgroundSize: '200% auto',
                                animation: 'shimmer 3s linear infinite'
                            }}
                        >art</span>
                        <div className="w-full sm:hidden"></div>
                        <span className="font-clash font-bold text-[clamp(3rem,8vw,7rem)] text-text tracking-[-0.03em] uppercase">in</span>
                        <span className="font-clash font-bold text-[clamp(3rem,8vw,7rem)] text-text tracking-[-0.03em] uppercase">party.</span>
                    </h1>

                    <p className="hero-element font-outfit text-[clamp(16px,2vw,18px)] text-text-muted max-w-2xl mt-6 mb-10 leading-relaxed">
                        Van wilde ideeën tot next level events. Wij zijn de dikke vinger naar saaie, vlakke en voorspelbare projecten.
                    </p>

                    <div className="hero-element flex flex-wrap items-center gap-4">
                        <MagneticButton variant="primary">
                            Neem contact op <ArrowRight className="w-4 h-4 ml-1" />
                        </MagneticButton>
                        <MagneticButton variant="outline">
                            Bekijk ons werk
                        </MagneticButton>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div ref={scrollIndicator} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
                <span className="font-mono text-[11px] uppercase tracking-widest text-text-muted">Scroll</span>
                <ChevronDown className="w-4 h-4 text-text animate-bounce opacity-50" />
            </div>
        </section>
    );
}
