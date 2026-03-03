export default function Footer() {
    return (
        <footer className="w-full bg-text text-white rounded-t-[3rem] border-t border-white/10 pt-20 pb-6 px-6 md:px-12 relative z-10">
            <div className="max-w-[1200px] mx-auto grid md:grid-cols-4 gap-12 mb-20">

                {/* Col 1-2 */}
                <div className="md:col-span-2">
                    <div className="mb-6">
                        <img
                            src="/assets/Fat-Finger-logo_1763898136388.png"
                            alt="Fat Finger Logo"
                            loading="lazy"
                            className="h-8 md:h-10 w-auto object-contain"
                        />
                    </div>
                    <p className="font-outfit text-[14px] text-white/40 max-w-sm leading-relaxed">
                        De dikke vinger naar saaie, vlakke en voorspelbare projecten.
                    </p>
                </div>

                {/* Col 3 */}
                <div>
                    <div className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/50 mb-6">Navigatie</div>
                    <div className="flex flex-col gap-4 font-outfit text-[14px] text-white/40">
                        <a href="#services-section" className="hover:text-white transition-colors w-fit">Diensten</a>
                        <a href="#" className="hover:text-white transition-colors w-fit">Over Ons</a>
                        <a href="#" className="hover:text-white transition-colors w-fit">Portfolio</a>
                        <a href="#contact-section" className="hover:text-white transition-colors w-fit">Contact</a>
                    </div>
                </div>

                {/* Col 4 */}
                <div>
                    <div className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/50 mb-6">Contact</div>
                    <div className="flex flex-col gap-4 font-outfit text-[14px] text-white/40">
                        <a href="mailto:hello@fatfinger.nl" className="hover:text-white transition-colors w-fit">hello@fatfinger.nl</a>
                        <a href="tel:+31646631269" className="hover:text-white transition-colors w-fit">06-46631269</a>
                        <div className="hover:text-white transition-colors w-fit cursor-default">Amsterdam</div>
                    </div>
                </div>

            </div>

            {/* Bottom Bar */}
            <div className="max-w-[1200px] mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                    <span className="font-mono text-[10px] tracking-wider text-white/25 uppercase">Party systems operational</span>
                </div>
                <div className="font-outfit text-[12px] text-white/20 text-center sm:text-right">
                    © {new Date().getFullYear()} Fat Finger. Alle rechten voorbehouden.
                </div>
            </div>
        </footer>
    );
}
