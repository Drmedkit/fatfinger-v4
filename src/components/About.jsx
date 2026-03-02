import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const container = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.about-anim', {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
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
            <div className="max-w-[1200px] mx-auto grid md:grid-cols-5 gap-12 md:gap-16 items-center">

                {/* Left (2 cols) - Visual */}
                <div className="about-anim md:col-span-2 relative">
                    <div className="w-full aspect-[3/4] rounded-[2rem] overflow-hidden relative" style={{ background: 'linear-gradient(135deg, rgba(255,0,153,0.12), var(--bg-surface), rgba(0,212,255,0.06))' }}>
                        <img
                            src="/assets/248347591_4356372774432461_1351524117958465837_n.jpg"
                            alt="Karlijn & Lonneke"
                            className="w-full h-full object-cover mix-blend-overlay opacity-80"
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />
                    </div>
                </div>

                {/* Right (3 cols) - Text */}
                <div className="md:col-span-3">
                    <div className="about-anim font-mono text-[10px] uppercase tracking-[0.25em] text-accent-1 mb-6">De oprichters</div>

                    <h2 className="about-anim text-4xl md:text-5xl leading-[1.05] tracking-tight mb-8">
                        <span className="font-clash font-bold text-text uppercase">Karlijn</span>
                        <span className="font-playfair italic text-text-muted px-2">&</span>
                        <span className="font-clash font-bold text-text uppercase">Lonneke</span>
                    </h2>

                    <div className="about-anim font-outfit text-[15px] text-text-muted leading-[1.8] space-y-5 mb-10">
                        <p>
                            Twee vriendinnen die elkaar 25 jaar geleden leerden kennen op de middelbare school. Fat Finger is het resultaat van twee werelden die perfect samenkomen.
                        </p>
                        <p>
                            Karlijn brengt haar achtergrond als communicatieadviseur en haar creatieve blik vanuit de modeacademie mee. Taaie inhoud wordt door haar vertaald naar luchtige, visuele en aansprekende concepten.
                        </p>
                        <p>
                            Als voormalig verloskundige is Lonneke gewend aan hard werken, schakelen onder druk en altijd aanstaan. Binnen Fat Finger kan ze haar creativiteit en energie volledig kwijt.
                        </p>
                    </div>

                    <div className="about-anim grid sm:grid-cols-2 gap-4">
                        <div className="rounded-2xl border border-accent-1/20 bg-bg-surface p-5 transition-shadow hover:shadow-lg">
                            <div className="font-mono text-[11px] uppercase tracking-wider text-accent-1 mb-2">Karlijn</div>
                            <div className="font-outfit text-[14px] text-text font-medium">Concept × Communicatie × Mode</div>
                        </div>
                        <div className="rounded-2xl border border-accent-pop/20 bg-bg-surface p-5 transition-shadow hover:shadow-lg">
                            <div className="font-mono text-[11px] uppercase tracking-wider text-accent-pop mb-2">Lonneke</div>
                            <div className="font-outfit text-[14px] text-text font-medium">Productie × Uitvoering × Energie</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
