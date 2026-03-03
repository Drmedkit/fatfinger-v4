import { useRef, useCallback } from 'react';

export default function MagneticButton({ children, className, variant = 'primary', ...props }) {
    const buttonRef = useRef(null);
    const rafRef = useRef(null);
    const posRef = useRef({ x: 0, y: 0 });

    const handleMouseMove = useCallback((e) => {
        if (rafRef.current) return;
        rafRef.current = requestAnimationFrame(() => {
            const { clientX, clientY } = e;
            const { width, height, left, top } = buttonRef.current.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;
            posRef.current = {
                x: (clientX - centerX) * 0.15,
                y: (clientY - centerY) * 0.15
            };
            buttonRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
            rafRef.current = null;
        });
    }, []);

    const handleMouseLeave = useCallback(() => {
        if (rafRef.current) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
        }
        posRef.current = { x: 0, y: 0 };
        buttonRef.current.style.transform = 'translate(0px, 0px)';
    }, []);

    const baseClasses = "relative inline-flex items-center justify-center rounded-full px-6 py-3 sm:px-8 sm:py-4 font-outfit text-[14px] sm:text-[15px] font-medium transition-all duration-500 overflow-hidden group hover:scale-[1.03]";
    const variants = {
        primary: "bg-accent-1 text-white border border-accent-1",
        outline: "border border-text/20 text-text hover:border-text/40 hover:bg-white/50"
    };

    return (
        <button
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`${baseClasses} ${variants[variant]} ${className || ''}`}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">{children}</span>
            {variant === 'primary' && (
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] rounded-full"></span>
            )}
        </button>
    );
}
