import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "Club MPH — Defqon.1",
        subtitle: "Secret Stage × Q-dance",
        desc: "Van geheime verrassing tot vaste publieksfavoriet. Vijf edities lang het best bewaarde geheim van Defqon.1. In 2025: Secret Santa's Summer Hideaway — bezoekers kropen door een schoorsteen en ontdekten de verborgen hideaway van de kerstman.",
        gradient: "linear-gradient(135deg, #2D1B33 0%, #1A0F20 40%, rgba(255,0,153,0.3) 100%)",
        img: "/assets/ClubMPH_Defqon-005.jpg"
    },
    {
        title: "Poolparty Mysteryland",
        subtitle: "Festival Camping × 2025",
        desc: "Het grootste opblaaszwembad van Nederland op de festivalcamping. Ochtendgymnastiek met hakkuh, wet T-shirt contests, en Club 7 shows. Wakker worden was nog nooit zo leuk.",
        gradient: "linear-gradient(135deg, #1B2D33 0%, #0F1A20 40%, rgba(0,212,255,0.25) 100%)",
        img: "/assets/54b0c8d9-26c9-4de9-a162-afd4d55640e3.jpg"
    },
    {
        title: "Club 7 Alles Geven",
        subtitle: "Het Origineel × Sinds 2019",
        desc: "Zeven minuten alles geven. Begonnen als grap op Koningsdag, uitgegroeid tot een fenomeen op festivals door heel Nederland.",
        gradient: "linear-gradient(135deg, #332D1B 0%, #201A0F 40%, rgba(255,221,0,0.25) 100%)",
        img: "/assets/240519-174143-7th-Daphne Termeer-0203-HR.JPG"
    },
    {
        title: "Decibel Wake-up Service",
        subtitle: "Camping Entertainment × Decibel Outdoor",
        desc: "De hardste wekker van Nederland. Ochtendshows op de festivalcamping die niemand zag aankomen maar iedereen onthield.",
        gradient: "linear-gradient(135deg, #331B1B 0%, #200F0F 40%, rgba(255,107,53,0.25) 100%)",
        img: "/assets/20240817_120844_DECIBELOUTDOOR_RICHARD.jpg"
    }
];

export default function Portfolio() {
    const container = useRef(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const drawerRef = useRef(null);
    const backdropRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray('.portfolio-card').forEach((card, i) => {
                gsap.from(card, {
                    y: 60,
                    scale: 0.95,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                    }
                });
            });
        }, container);
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';

            // Fullscreen Expansion Enter Animation
            gsap.fromTo(backdropRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power2.out' });
            gsap.fromTo(drawerRef.current,
                { opacity: 0, scale: 0.95, y: 20 },
                { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'power3.out' }
            );
            gsap.fromTo('.drawer-item',
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 0.2, ease: 'power3.out' }
            );
        } else {
            document.body.style.overflow = '';
        }
    }, [selectedProject]);

    const closeDrawer = () => {
        // Fullscreen Expansion Exit Animation
        gsap.to(drawerRef.current, { opacity: 0, scale: 0.98, duration: 0.3, ease: 'power2.in' });
        gsap.to(backdropRef.current, {
            opacity: 0, duration: 0.3, ease: 'power2.in', onComplete: () => {
                setSelectedProject(null);
            }
        });
    };

    return (
        <section ref={container} className="w-full bg-bg py-24 md:py-32 px-6 md:px-12 relative z-10">
            <div className="max-w-[1200px] mx-auto">
                <h2 className="text-4xl md:text-5xl tracking-tight mb-16 px-4">
                    <span className="font-clash font-bold text-text uppercase">Projecten waar we </span>
                    <span
                        className="font-playfair italic text-transparent bg-clip-text inline-block"
                        style={{ backgroundImage: 'linear-gradient(90deg, var(--accent-1), var(--accent-2))' }}
                    >trots</span>
                    <span className="font-clash font-bold text-text uppercase"> op zijn.</span>
                </h2>

                <div className="flex flex-col gap-8 md:gap-12">
                    {projects.map((proj, i) => (
                        <div
                            key={i}
                            className="portfolio-card relative w-full min-h-[400px] rounded-[2rem] overflow-hidden group cursor-pointer"
                            onClick={() => setSelectedProject(proj)}
                        >
                            {/* Background */}
                            <div
                                className="absolute inset-0 transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                                style={{ background: proj.gradient }}
                            >
                                {proj.img && (
                                    <img
                                        src={proj.img}
                                        alt={proj.title}
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30"
                                        onError={(e) => { e.target.style.display = 'none'; }}
                                    />
                                )}
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] opacity-15 mix-blend-overlay pointer-events-none"></div>
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-end">
                                <div className="font-mono text-[10px] uppercase tracking-wider text-white/40 mb-3 transition-colors group-hover:text-white/60">
                                    {proj.subtitle}
                                </div>
                                <h3 className="font-clash font-bold text-[32px] md:text-[40px] text-white leading-tight mb-4">
                                    {proj.title}
                                </h3>
                                <p className="font-outfit text-[14px] text-white/60 max-w-[450px] leading-relaxed mb-6">
                                    {proj.desc}
                                </p>
                                <div className="flex items-center text-white/40 font-mono text-[12px] uppercase tracking-wider group-hover:text-accent-1 transition-colors">
                                    Bekijk project <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Fullscreen Hero Expansion Overlay */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 overflow-hidden">
                    {/* Backdrop */}
                    <div
                        ref={backdropRef}
                        className="absolute inset-0 bg-bg/90 backdrop-blur-xl opacity-0 cursor-pointer"
                        onClick={closeDrawer}
                    />

                    {/* Fullscreen Container */}
                    <div
                        ref={drawerRef}
                        className="relative w-full h-full max-w-[1400px] bg-bg md:rounded-[2rem] flex flex-col overflow-hidden shadow-2xl opacity-0 origin-center"
                    >
                        {/* Close button */}
                        <button
                            onClick={closeDrawer}
                            className="absolute top-6 right-6 md:top-8 md:right-8 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md hover:bg-black/40 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        {/* Scrollable Content Area */}
                        <div className="flex-1 overflow-y-auto w-full scrollbar-hide">

                            {/* Cinematic Hero Header */}
                            <div className="relative w-full min-h-[60vh] md:min-h-[75vh] flex flex-col justify-end p-8 md:p-16">
                                <div className="absolute inset-0" style={{ background: selectedProject.gradient }}>
                                    {selectedProject.img && (
                                        <img
                                            src={selectedProject.img}
                                            alt={selectedProject.title}
                                            loading="lazy"
                                            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
                                        />
                                    )}
                                </div>
                                {/* Gradient fade to text area */}
                                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent opacity-90" />

                                <div className="relative z-10 max-w-4xl">
                                    <div className="drawer-item font-mono text-[12px] uppercase tracking-wider text-accent-1 mb-4">
                                        {selectedProject.subtitle}
                                    </div>
                                    <h2 className="drawer-item font-clash font-bold text-5xl md:text-7xl text-white leading-tight mb-6">
                                        {selectedProject.title}
                                    </h2>
                                </div>
                            </div>

                            {/* Deep Dive Content Row */}
                            <div className="w-full bg-bg px-8 md:px-16 py-12 md:py-20 lg:py-24 max-w-7xl mx-auto grid md:grid-cols-12 gap-12 md:gap-8">
                                <div className="md:col-span-5 lg:col-span-4">
                                    <div className="drawer-item font-clash font-bold text-2xl text-text mb-4">
                                        Over dit project
                                    </div>
                                    <p className="drawer-item font-outfit text-lg md:text-xl text-text-muted leading-relaxed">
                                        {selectedProject.desc}
                                    </p>
                                </div>
                                <div className="md:col-start-7 md:col-span-6">
                                    <div className="drawer-item font-outfit text-md text-text-muted leading-relaxed mb-12">
                                        Dit gebied is klaargestoomd voor de uitgebreide case study. Hier kun je de uitdaging, de aanpak en het indrukwekkende resultaat omschrijven. Omdat we nu het hele scherm gebruiken, voelt dit als een premium redactioneel artikel.
                                    </div>

                                    {/* Placeholder content grid */}
                                    <div className="drawer-item grid grid-cols-2 gap-4">
                                        <div className="aspect-[4/3] bg-text/5 rounded-2xl overflow-hidden relative group">
                                            {selectedProject.img && <img src={selectedProject.img} loading="lazy" className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500" alt="" />}
                                        </div>
                                        <div className="aspect-[4/3] bg-text/5 rounded-2xl relative overflow-hidden group">
                                            {selectedProject.img && <img src={selectedProject.img} loading="lazy" className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500 scale-110" alt="" />}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
