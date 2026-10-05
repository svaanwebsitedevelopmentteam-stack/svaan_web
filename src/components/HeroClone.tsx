"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const HeroClone = () => {
    // Motion values to track the mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springs for the dynamic background elements
    const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

    // A secondary spring for a cooler lagging effect
    const springX2 = useSpring(mouseX, { stiffness: 20, damping: 30 });
    const springY2 = useSpring(mouseY, { stiffness: 20, damping: 30 });

    useEffect(() => {
        // Center the effect initially
        mouseX.set(typeof window !== 'undefined' ? window.innerWidth / 2 : 500);
        mouseY.set(typeof window !== 'undefined' ? window.innerHeight / 2 : 500);
    }, [mouseX, mouseY]);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        // Adjust by bounding client rect if needed, but for fixed background clientX is fine
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#FAFBFF] text-neutral-900 pt-24 pb-16"
        >

            {/* Dynamic Interactive Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

                {/* Subtle Grid Background */}
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />

                {/* Primary Glow that directly follows the mouse cursor */}
                <motion.div
                    className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[120px] mix-blend-multiply"
                    style={{
                        x: springX,
                        y: springY,
                        translateX: "-50%",
                        translateY: "-50%",
                    }}
                />

                {/* Secondary Glow that trails behind slowly */}
                <motion.div
                    className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] mix-blend-multiply"
                    style={{
                        x: springX2,
                        y: springY2,
                        translateX: "-30%",
                        translateY: "-30%",
                    }}
                />

                {/* Ambient static glows so corners aren't entirely empty */}
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-300/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-200/30 blur-[130px] rounded-full" />

                {/* Soft grain texture */}
                <div className="absolute inset-0 opacity-[0.25]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
                {/* Top badge */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-[var(--t-radius-sm)] bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm text-sm font-semibold tracking-wide text-slate-700 mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600 -left-[1px] -top-[1px]"></span>
                    </span>
                    Next-Generation Business Consulting
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="type-display text-slate-900 mb-8 max-w-4xl"
                >
                    Strategy That Powers Your{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500">
                        Next Level of Growth.
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="type-body-lg text-slate-600 max-w-2xl mb-12 font-medium leading-relaxed"
                >
                    Stratwell Consulting is a results-driven business consultancy helping leaders navigate complexity, refine strategy, and achieve sustainable growth.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <Link
                        href="#expertise"
                        className="group flex items-center justify-center gap-2 bg-svaan-blue text-white px-8 py-3.5 rounded-[var(--t-radius-btn)] font-semibold shadow-md hover:bg-[#005FA3] transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-svaan-blue focus-visible:ring-offset-2"
                    >
                        Our Expertise
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="#contact"
                        className="flex items-center justify-center px-8 py-3.5 rounded-[var(--t-radius-btn)] font-semibold border border-slate-200 text-slate-700 bg-white/70 backdrop-blur hover:border-slate-300 hover:bg-white transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-svaan-blue focus-visible:ring-offset-2"
                    >
                        Start Your Growth Journey
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
