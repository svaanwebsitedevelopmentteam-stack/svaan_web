"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);

    // Smooth spring physics for the outer ring trailing
    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const cursorXEvent = useRef(0);
    const cursorYEvent = useRef(0);

    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        // Only show custom cursor on non-touch devices
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const moveCursor = (e: MouseEvent) => {
            setIsVisible(true);
            cursorXEvent.current = e.clientX;
            cursorYEvent.current = e.clientY;
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [cursorX, cursorY]);

    if (!isVisible) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center mix-blend-difference"
                animate={{
                    width: 16,
                    height: 16,
                }}
                style={{
                    backgroundColor: "white",
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />
        </>
    );
}
