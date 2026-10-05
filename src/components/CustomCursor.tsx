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

    const [isPointer, setIsPointer] = useState(false);
    const [isSolidMode, setIsSolidMode] = useState(false);

    useEffect(() => {
        // Only show custom cursor on non-touch devices
        if (window.matchMedia("(pointer: coarse)").matches) return;

        setIsVisible(true);

        const moveCursor = (e: MouseEvent) => {
            cursorXEvent.current = e.clientX;
            cursorYEvent.current = e.clientY;
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Check if we are hovering a logo that shouldn't be inverted
            const solidTarget = target.closest('[data-cursor-solid="true"]');
            setIsSolidMode(!!solidTarget);

            // Expand cursor when hovering over clickable elements
            if (
                window.getComputedStyle(target).cursor === 'pointer' ||
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                !!solidTarget
            ) {
                setIsPointer(true);
            } else {
                setIsPointer(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    if (!isVisible) return null;

    return (
        <>
            <motion.div
                className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center transition-colors duration-300 ${isSolidMode ? 'mix-blend-normal' : 'mix-blend-difference'}`}
                animate={{
                    width: isPointer ? 64 : 16,
                    height: isPointer ? 64 : 16,
                }}
                transition={{
                    width: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
                    height: { duration: 0.3, ease: [0.25, 1, 0.5, 1] }
                }}
                style={{
                    backgroundColor: isSolidMode ? "transparent" : "white",
                    border: isSolidMode ? "1px solid white" : "none",
                    backdropFilter: isSolidMode ? "blur(2px)" : "none",
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            >
                {/* Optional internal text or dot can go here in the future if they want a 'VIEW' text */}
            </motion.div>
        </>
    );
}
