import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OriginStory() {
    const container = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.story-left', {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                delay: 0.2,
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 80%',
                }
            });
            gsap.from('.story-right', {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                delay: 0.4,
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 80%',
                }
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={container} className="w-full bg-bg py-24 md:py-32 px-6 md:px-12 relative z-10">
            <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 md:gap-24">

                {/* Left Column */}
                <div className="story-left md:pr-10">
                    <div className="font-clash text-xs uppercase tracking-[0.25em] font-bold text-accent-1 mb-8">Ons Verhaal</div>

                    <h2 className="flex flex-col leading-[0.9] tracking-tight mb-8">
                        <div className="flex flex-wrap items-end gap-x-3 md:gap-x-4 mb-2">
                            <span className="font-clash font-black text-text uppercase tracking-[-0.05em] text-[clamp(1.5rem,2.5vw,2.5rem)] pb-1 md:pb-2">BEGONNEN ALS</span>
                            <span className="font-playfair italic font-normal text-accent-1 lowercase text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[0.8] block">een</span>
                        </div>
                        <div
                            className="font-playfair italic font-normal text-transparent bg-clip-text text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[1.05] mb-1"
                            style={{ backgroundImage: 'linear-gradient(90deg, var(--accent-1), var(--accent-2))' }}
                        >
                            uit de hand gelopen
                        </div>
                        <div className="font-playfair italic font-normal text-accent-2 lowercase text-[clamp(2.5rem,4.5vw,4.5rem)] leading-[1.05]">
                            grap.
                        </div>
                    </h2>
                </div>

                {/* Right Column */}
                <div className="story-right font-outfit text-[16px] md:text-lg xl:text-xl text-text-muted leading-[1.7] md:pt-8">
                    <p className="mb-5">
                        Club 7 Alles Geven begon aan een keukentafel. Een week voor Koningsdag 2019. In plaats van weer doelloos rond te slenteren werd er een pop-up rave georganiseerd, midden op straat in Amsterdam. Met tape, een paar speakers en een tent die van 's ochtends vroeg tot 's avonds laat vol stond.
                    </p>
                    <p className="mb-5">
                        Zeven minuten alles geven op festivals. Het bleek een hit. De Zon Festival pikte het op en zo werd Club 7 Alles Geven officieel, en ontstond Fat Finger.
                    </p>
                    <p>
                        Fast forward naar nu. Talloze concepten, producties en ervaringen verder. Van bedrijfsfestivals en personeelsfeesten tot congressen en teambuilding weekenden. Altijd met fun, creativiteit en een gezonde dosis eigenzinnigheid.
                    </p>
                </div>

            </div>
        </section>
    );
}
