import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const slidesData = [
    {
        id: 0,
        label: "Concepting",
        titleNode: <>Van <span className="font-playfair italic font-normal">gek idee</span> tot concept.</>,
        desc: "Het begint altijd met een wild idee. Aan een keukentafel, op een bierviltje, of midden in de nacht. Wij pakken dat idee en bouwen het uit tot een compleet concept — met draaiboek, visuele identiteit en een plan dat staat als een huis.",
        bgClass: "bg-[#FFDD00]",
        textClass: "text-[#2D1B33]",
        titleClass: "font-clash font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[1.1]",
        ambient: 'concepting',
        img: "/assets/240518-181639-HoH-Marco Scheurink-6175-HR.jpg", // New test image
        imgClass: "opacity-40 mix-blend-normal"
    },
    {
        id: 1,
        label: "Business Events",
        titleNode: <>Professioneel.<br />Maar nooit saai.</>,
        desc: "Congressen, seminars, productlanceringen en corporate events. Strak georganiseerd met oog voor detail. Maar altijd met een twist die mensen nog weken later bespreken bij de koffieautomaat.",
        bgClass: "bg-[#0A0A0F]",
        textClass: "text-[#FFFFFF]",
        titleClass: "font-inter font-bold tracking-tight text-[clamp(2.5rem,5vw,4rem)] leading-[1.1]",
        ambient: 'corporate',
        img: "/assets/image_1763898462772.png",
        imgClass: "opacity-40 mix-blend-overlay"
    },
    {
        id: 2,
        label: "Personeelsfeest",
        titleNode: <>Jullie feest.<br />Onze energie.</>,
        desc: "Jullie team verdient beter dan een buffet en een DJ die Top 40 draait. Wij maken er een ervaring van. Met een thema, entertainment, en momenten die het team dichter bij elkaar brengen.",
        bgClass: "bg-gradient-to-br from-[#FF6B35] to-[#FF0099]",
        textClass: "text-[#FFFFFF]",
        titleClass: "font-clash font-extrabold -rotate-2 inline-block text-[clamp(2.5rem,5vw,4rem)] leading-[1.1]",
        ambient: 'party',
        img: "/assets/240519-161618-7th-Sophia van Dorp-0404-HR.jpg",
        imgClass: "opacity-60 mix-blend-normal"
    },
    {
        id: 3,
        label: "Stage Hosting",
        titleNode: <>Wij zijn <span style={{ textShadow: "0 0 20px #FF0099, 0 0 40px rgba(255,0,153,0.6)" }}>het podium.</span></>,
        desc: "Van Club 7 Alles Geven op de grootste festivals tot custom stages voor merken. Wij bouwen, hosten, entertainen en zorgen dat elke seconde op dat podium knalt.",
        bgClass: "bg-[#0D0020]",
        style: { backgroundImage: 'radial-gradient(ellipse at 50% 60%, rgba(255,0,153,0.3) 0%, transparent 60%)' },
        textClass: "text-[#FFFFFF]",
        titleClass: "font-clash font-bold uppercase text-[clamp(2.5rem,5vw,4rem)] leading-[1.1]",
        ambient: 'stage',
        img: "/assets/Artboard-1-100.jpg", // Old Concepting image moved here
        imgClass: "opacity-40 mix-blend-normal"
    },
    {
        id: 4,
        label: "Merk Activatie",
        titleNode: <>OPVALLEN.<br />PUNT.</>,
        desc: "Merkactivaties die bezoekers niet meer vergeten. Wij bedenken en bouwen ervaringen die jouw merk op de kaart zetten — op festivals, in winkelcentra, op straat, of waar je doelgroep ook is.",
        bgClass: "bg-[#05050A]", // Dark & cinematic background
        textClass: "text-[#FFFFFF]", // Bright text for high contrast
        titleClass: "font-clash font-black uppercase text-[clamp(3.5rem,7vw,6rem)] leading-[0.9] tracking-tight",
        ambient: 'activation',
        img: "/assets/image_1763915989107.png",
        imgClass: "opacity-40 mix-blend-overlay" // Subtle background texture
    },
    {
        id: 5,
        label: "Pop Up Party",
        titleNode: <>Uit het niets<br />een feest.</>,
        desc: "Een rave in een tent. Een club op een camping. Een feest waar niemand het verwacht. Wij duiken op, bouwen in een paar uur een complete ervaring, en verdwijnen weer. Dat is onze specialiteit.",
        bgClass: "bg-[#0A0A0F]",
        textClass: "text-[#FFFFFF]",
        titleClass: "font-clash font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[1.1]",
        ambient: 'popup',
        img: "/assets/240518-221636-HoH-Marco Scheurink-7097-HR.jpg",
        imgClass: "opacity-40 mix-blend-overlay"
    }
];

export default function Services() {
    const container = useRef(null);
    const slidesRef = useRef([]);
    const wrapperRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        // Only apply ScrollTrigger on desktop (min-width 768px)
        const mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            const slides = slidesRef.current;
            if (!slides.length) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top top",
                    end: "+=500%",
                    scrub: true,
                    pin: true,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        // 6 slides -> 5 transitions -> length of each is 1/5
                        const index = Math.min(5, Math.floor(progress * 5.99));
                        if (index !== activeSlide) setActiveSlide(index);
                    }
                }
            });

            // Setup timeline for crossfades
            slides.forEach((slide, i) => {
                if (i === 0) return; // First slide is already visible

                const prevSlide = slides[i - 1];

                // At progress point (i/5), prevSlide fades out, current slide fades in
                tl.to(prevSlide, { opacity: 0, scale: 0.95, duration: 1 }, i - 0.5)
                    .fromTo(slide, { opacity: 0, scale: 1.05 }, { opacity: 1, scale: 1, duration: 1 }, i - 0.5);
            });

            // Set initial state
            gsap.set(slides.slice(1), { opacity: 0 });

            return () => {
                tl.kill();
            };
        });

        return () => mm.revert();
    }, [activeSlide]);

    return (
        <div id="services-section">
            {/* Intro Section - Scrolls normally */}
            <section className="w-full bg-bg py-24 px-6 md:px-12 relative z-10">
                <div className="max-w-[1200px] mx-auto text-center">
                    <h2 className="font-clash font-bold text-4xl md:text-5xl lg:text-6xl text-text tracking-tight mb-4">
                        Wat wij doen
                    </h2>
                    <p className="font-outfit text-lg text-text-muted">
                        Zes expertises. Zes werelden. Scroll door ons DNA.
                    </p>
                </div>
            </section>

            {/* Pinned Showcase Container */}
            <div
                ref={wrapperRef}
                className="w-full relative bg-bg md:h-screen z-10 md:overflow-hidden"
            >
                {slidesData.map((slide, i) => (
                    <div
                        key={i}
                        ref={(el) => (slidesRef.current[i] = el)}
                        className={`w-full md:absolute md:inset-0 min-h-[80vh] md:min-h-screen flex items-center p-6 md:p-16 
              ${slide.bgClass} ${slide.textClass}
              transition-colors duration-500 ease-in-out
            `}
                        style={slide.style || {}}
                    >
                        {/* Ambient Animation Layers */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
                            {slide.img && (
                                <img
                                    src={slide.img}
                                    alt=""
                                    className={`absolute inset-0 w-full h-full object-cover max-w-none ${slide.imgClass || 'opacity-20 mix-blend-overlay'}`}
                                />
                            )}
                            {slide.ambient === 'concepting' && (
                                <>
                                    <div className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full border-4 border-accent-1/20 animate-[floatParticle_20s_infinite]" />
                                    <div className="absolute top-[60%] right-[15%] w-24 h-24 border-4 border-accent-2/20 animate-[floatParticle_25s_infinite_reverse] rotate-45" />
                                    <div className="absolute bottom-[20%] left-[30%] w-16 h-1 rounded-full bg-accent-pop/20 animate-[floatParticle_15s_infinite]" />
                                </>
                            )}
                            {slide.ambient === 'corporate' && (
                                <>
                                    <div className="absolute top-[10%] left-[5%] w-full h-[1px] bg-white/5" />
                                    <div className="absolute top-[50%] right-[-10%] w-[40%] h-[30%] bg-white/5 backdrop-blur-3xl rounded-3xl" />
                                    <div className="absolute bottom-[20%] left-[15%] w-64 h-64 bg-accent-pop/10 blur-[100px]" />
                                </>
                            )}
                            {slide.ambient === 'party' && (
                                Array.from({ length: 20 }).map((_, j) => (
                                    <div
                                        key={j}
                                        className="absolute w-2 h-4 bg-white/40"
                                        style={{
                                            left: `${Math.random() * 100}%`,
                                            top: `-5%`,
                                            animation: `floatConfetti ${Math.random() * 3 + 2}s linear infinite`,
                                            animationDelay: `${Math.random() * 5}s`
                                        }}
                                    />
                                ))
                            )}
                            {slide.ambient === 'stage' && (
                                <>
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-accent-pop/30 animate-[laserScan_10s_linear_infinite]" />
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-accent-1/50 animate-[laserScan_8s_linear_infinite_reverse]" style={{ animationDelay: '2s' }} />
                                </>
                            )}
                            {slide.ambient === 'activation' && (
                                <>
                                    {/* Dark, elegant neon orbs that slowly float */}
                                    <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] bg-[#00D4FF] rounded-full mix-blend-screen opacity-30 blur-[100px] animate-[floatParticle_20s_infinite]" />
                                    <div className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] bg-[#FF0099] rounded-full mix-blend-screen opacity-20 blur-[120px] animate-[floatParticle_25s_infinite_reverse]" />
                                    {/* Edge highlight to frame the content slightly */}
                                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00D4FF]/30 to-transparent" />
                                </>
                            )}
                            {slide.ambient === 'popup' && (
                                <>
                                    <div className="absolute top-[20%] right-[10%] w-[30vw] h-[30vw] bg-[#FF0099] mix-blend-screen opacity-20 blur-[100px] rounded-full animate-[floatParticle_15s_infinite]" />
                                    <div className="absolute bottom-[10%] left-[10%] w-[20vw] h-[20vw] bg-[#00D4FF] mix-blend-screen opacity-10 blur-[80px] rounded-full animate-[floatParticle_20s_infinite_reverse]" />
                                </>
                            )}
                        </div>

                        {/* Content */}
                        <div className="relative z-10 max-w-4xl mx-auto w-full">
                            <div className="font-mono text-[40px] md:text-[80px] leading-none opacity-15 absolute top-0 right-0 -translate-y-1/2 md:-translate-y-full uppercase whitespace-nowrap truncate max-w-[120%] pl-4" style={{ WebkitTextFillColor: 'transparent', WebkitTextStroke: '2px currentColor' }}>
                                {slide.label}
                            </div>

                            <h3 className={`${slide.titleClass} mb-6`}>
                                {slide.titleNode}
                            </h3>

                            <p className={`font-outfit text-lg md:text-xl max-w-[500px] leading-relaxed ${slide.descClass || 'opacity-90'}`}>
                                {slide.desc}
                            </p>
                        </div>
                    </div>
                ))}

                {/* Progress Indicator (Desktop only) */}
                <div className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 flex-col gap-2 items-end">
                    {slidesData.map((slide, i) => (
                        <div key={i} className="flex items-center justify-end gap-4">
                            <span className={`font-mono text-[10px] uppercase whitespace-nowrap transition-opacity duration-300 ${i === activeSlide ? 'opacity-100 text-white mix-blend-difference' : 'opacity-0'}`}>
                                {slide.label}
                            </span>
                            <div
                                className={`w-[2px] h-12 transition-all duration-300 ${i === activeSlide ? 'opacity-100 bg-white mix-blend-difference' : 'opacity-20 bg-text'}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
