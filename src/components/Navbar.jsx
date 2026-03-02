import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [navStyle, setNavStyle] = useState('hero'); // 'hero', 'summer', 'dark', 'light'
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const vh = window.innerHeight;

            const servicesSection = document.getElementById('services-section');

            if (servicesSection) {
                const rect = servicesSection.getBoundingClientRect();
                // If we are inside the pinned services section
                if (rect.top <= 50 && rect.bottom >= 50) {
                    const progress = Math.abs(rect.top) / rect.height;
                    // 6 slides approx
                    const slideIndex = Math.floor(progress * 6);
                    // Dark slides: 1 (business), 3 (stage), 5 (popup) - index 1, 3, 5
                    if (slideIndex === 1 || slideIndex === 3 || slideIndex === 5) {
                        setNavStyle('dark');
                    } else {
                        setNavStyle('light');
                    }
                    return;
                }
            }

            if (scrollY < vh - 100) {
                setNavStyle('hero');
            } else {
                setNavStyle('summer');
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getNavClasses = () => {
        switch (navStyle) {
            case 'hero':
                return 'bg-transparent backdrop-blur-[4px] border border-white/10 text-white';
            case 'dark':
                return 'bg-transparent text-white border border-transparent';
            case 'light':
                return 'bg-transparent text-text border border-transparent';
            case 'summer':
            default:
                return 'bg-bg/85 backdrop-blur-[24px] border border-text/5 shadow-[0_8px_32px_rgba(0,0,0,0.1)] text-text';
        }
    };

    const getMenuClasses = () => {
        // For the mobile menu icon color based on context
        if (navStyle === 'hero' || navStyle === 'dark') return 'text-white';
        return 'text-text';
    };

    return (
        <>
            <nav
                className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] w-[calc(100%-2rem)] max-w-5xl ${getNavClasses()}`}
            >
                <a href="#" className="flex items-center transition-transform hover:scale-105">
                    <img
                        src="/assets/Fat-Finger-logo_1763898136388.png"
                        alt="Fat Finger Logo"
                        className={`h-6 md:h-8 w-auto object-contain transition-all duration-300 ${navStyle === 'hero' || navStyle === 'dark' ? 'brightness-0 invert' : ''}`}
                    />
                </a>

                <div className="hidden md:flex items-center gap-8 font-mono text-[13px] uppercase tracking-[0.12em]">
                    <a href="#services-section" className="hover:bg-accent-1/10 px-4 py-2 rounded-full transition-colors -translate-y-[1px] hover:-translate-y-[2px]">Diensten</a>
                    <a href="#" className="hover:bg-accent-1/10 px-4 py-2 rounded-full transition-colors -translate-y-[1px] hover:-translate-y-[2px]">Over Ons</a>
                    <a href="#" className="hover:bg-accent-1/10 px-4 py-2 rounded-full transition-colors -translate-y-[1px] hover:-translate-y-[2px]">Portfolio</a>
                    <a href="#contact-section" className="hover:bg-accent-1/10 px-4 py-2 rounded-full transition-colors -translate-y-[1px] hover:-translate-y-[2px]">Contact</a>
                </div>

                <div className="hidden md:flex">
                    <a href="mailto:hello@fatfinger.nl" className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-outfit font-medium text-[14px] hover:scale-105 transition-transform bg-accent-1 text-white border-none`}>
                        Bakkie doen? <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                </div>

                <button
                    className={`md:hidden p-2 relative z-[60] ${getMenuClasses()}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="w-6 h-6 text-text" /> : <Menu className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-bg z-[45] flex flex-col justify-center items-center gap-8 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <a href="#services-section" onClick={() => setMobileMenuOpen(false)} className="font-clash text-4xl text-text uppercase font-bold">Diensten</a>
                <a href="#" onClick={() => setMobileMenuOpen(false)} className="font-clash text-4xl text-text uppercase font-bold">Over Ons</a>
                <a href="#" onClick={() => setMobileMenuOpen(false)} className="font-clash text-4xl text-text uppercase font-bold">Portfolio</a>
                <a href="#contact-section" onClick={() => setMobileMenuOpen(false)} className="font-clash text-4xl text-text uppercase font-bold">Contact</a>
                <a href="mailto:hello@fatfinger.nl" onClick={() => setMobileMenuOpen(false)} className="mt-8 bg-accent-1 text-white px-8 py-4 rounded-full font-outfit text-lg flex items-center gap-2">
                    Bakkie doen? <ArrowRight className="w-5 h-5 ml-1" />
                </a>
            </div>
        </>
    );
}
