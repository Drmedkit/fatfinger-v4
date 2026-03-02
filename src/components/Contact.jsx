import { Mail, Phone, MapPin } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Contact() {
    return (
        <section id="contact-section" className="relative w-full py-24 md:py-32 px-6 overflow-hidden"
            style={{ backgroundImage: 'linear-gradient(180deg, var(--bg), #FFECD2)' }}>
            {/* Ambient Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-accent-1 rounded-full blur-[100px] md:blur-[160px] opacity-[0.04] animate-[breathe_6s_ease-in-out_infinite] pointer-events-none" />

            <div className="relative z-10 max-w-[800px] mx-auto text-center flex flex-col items-center">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent-1 mb-6">Let's go</div>

                <h2 className="leading-[1.05] tracking-tight mb-8">
                    <span className="font-clash font-bold text-[clamp(3rem,7vw,6rem)] text-text uppercase">Ready to </span>
                    <span
                        className="font-playfair italic text-[clamp(3rem,7vw,6rem)] text-transparent bg-clip-text inline-block"
                        style={{
                            backgroundImage: 'linear-gradient(90deg, var(--accent-1), var(--accent-2), var(--accent-3), var(--accent-1))',
                            backgroundSize: '200% auto',
                            animation: 'shimmer 4s linear infinite'
                        }}
                    >party?</span>
                </h2>

                <p className="font-outfit text-[18px] text-text-muted max-w-[600px] leading-relaxed mb-12">
                    Zoek je een event dat anders durft te zijn? Out of the box. Met inhoud én fun. Dan weet je ons te vinden.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                    <a href="mailto:hello@fatfinger.nl" className="inline-block">
                        <MagneticButton variant="primary">
                            Bakkie doen? <span className="ml-1">→</span>
                        </MagneticButton>
                    </a>
                    <a href="tel:+31646631269" className="inline-block">
                        <MagneticButton variant="outline">
                            <Phone className="w-4 h-4 mr-2" />
                            Bel ons
                        </MagneticButton>
                    </a>
                </div>

                {/* Contact Row */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-text-muted font-outfit text-[14px]">
                    <a href="mailto:hello@fatfinger.nl" className="flex items-center gap-2 hover:text-accent-1 transition-colors">
                        <Mail className="w-4 h-4" /> hello@fatfinger.nl
                    </a>
                    <a href="tel:+31646631269" className="flex items-center gap-2 hover:text-accent-1 transition-colors">
                        <Phone className="w-4 h-4" /> 06-46631269
                    </a>
                    <div className="flex items-center gap-2 hover:text-accent-1 transition-colors cursor-default">
                        <MapPin className="w-4 h-4" /> Amsterdam
                    </div>
                </div>
            </div>
        </section>
    );
}
