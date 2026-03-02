import { useRef, useState } from 'react';

export default function MagneticButton({ children, className, variant = 'primary', ...props }) {
    const buttonRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = buttonRef.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const x = (clientX - centerX) * 0.15;
        const y = (clientY - centerY) * 0.15;
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const baseClasses = "relative inline-flex items-center justify-center rounded-full px-8 py-4 font-outfit text-[15px] font-medium transition-all duration-500 overflow-hidden group hover:scale-[1.03]";
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
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">{children}</span>
            {variant === 'primary' && (
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] rounded-full"></span>
            )}
        </button>
    );
}
