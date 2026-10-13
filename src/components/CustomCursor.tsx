"use client";

import { useEffect, useState, useRef } from "react";

export function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const cursorRef = useRef<HTMLDivElement>(null);
    const pos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
    const rafId = useRef<number | null>(null);

    useEffect(() => {
        // Only show custom cursor on non-touch devices
        if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return;

        let hasShown = false;

        const updatePosition = () => {
            pos.current.x += (pos.current.targetX - pos.current.x) * 0.22;
            pos.current.y += (pos.current.targetY - pos.current.y) * 0.22;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
            }

            rafId.current = requestAnimationFrame(updatePosition);
        };

        const moveCursor = (e: MouseEvent) => {
            pos.current.targetX = e.clientX;
            pos.current.targetY = e.clientY;

            if (!hasShown) {
                hasShown = true;
                pos.current.x = e.clientX;
                pos.current.y = e.clientY;
                setIsVisible(true);
                rafId.current = requestAnimationFrame(updatePosition);
            }
        };

        window.addEventListener("mousemove", moveCursor, { passive: true });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-difference bg-white will-change-transform"
        />
    );
}
