"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function HeroSection() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

    const springX2 = useSpring(mouseX, { stiffness: 20, damping: 30 });
    const springY2 = useSpring(mouseY, { stiffness: 20, damping: 30 });

    useEffect(() => {
        mouseX.set(typeof window !== 'undefined' ? window.innerWidth / 2 : 500);
        mouseY.set(typeof window !== 'undefined' ? window.innerHeight / 2 : 500);
    }, [mouseX, mouseY]);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative min-h-screen flex flex-col justify-center overflow-hidden"
        >
            {/* Dynamic Interactive Background from homeClone */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Subtle Grid Background */}
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />

                {/* Primary Glow that directly follows the mouse cursor */}
                <motion.div
                    className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none"
                    style={{
                        backgroundColor: "var(--t-accent)",
                        opacity: "calc(var(--t-orb-opacity) + 0.1)",
                        x: springX,
                        y: springY,
                        translateX: "-50%",
                        translateY: "-50%",
                        transform: "translateZ(0)",
                    }}
                />

                {/* Secondary Glow that trails behind slowly */}
                <motion.div
                    className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none"
                    style={{
                        backgroundColor: "var(--t-accent)",
                        opacity: "var(--t-orb-opacity)",
                        x: springX2,
                        y: springY2,
                        translateX: "-30%",
                        translateY: "-30%",
                        transform: "translateZ(0)",
                    }}
                />

                {/* Ambient static glows so corners aren't entirely empty */}
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] opacity-20 blur-[120px] rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />

                {/* Soft grain texture */}
                <div className="absolute inset-0 opacity-[0.25]"
                // style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
                >

                </div>
            </div>

            <div className="w-full px-[40px] pt-[70px] pb-[60px] relative z-10 grid grid-cols-1 lg:grid-cols-[6fr_4fr] gap-12 lg:gap-8 items-center">

                {/* Left Side: Content */}
                <div className="text-left flex flex-col items-start pt-6 lg:pt-0">
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <span
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[var(--t-radius-sm)] text-xs font-semibold uppercase tracking-wider"
                            style={{
                                backgroundColor: "var(--t-bg-surface)",
                                border: "1px solid var(--t-border)",
                                color: "var(--t-text-muted)",
                            }}
                        >
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Available for new projects
                        </span>
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="type-display mb-6"
                        style={{ color: "var(--t-text)" }}
                    >
                        We build technology
                        <br />
                        that moves{" "}
                        <span className="italic" style={{ color: "var(--t-accent)" }}>business</span>
                        <br />
                        forward.
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        className="text-lg md:text-xl max-w-lg leading-relaxed mb-12"
                        style={{ color: "var(--t-text-muted)" }}
                    >
                        SVaaN Global Tech connects strategy, design, and engineering to help
                        organizations solve complex challenges and build practical digital
                        solutions.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-3 h-12 px-7 rounded-[var(--t-radius-btn)] font-semibold text-base transition-all duration-200 shadow-sm hover:shadow-md hover:bg-[var(--t-btn-hover)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--t-bg)]"
                            style={{
                                backgroundColor: "var(--t-btn-bg)",
                                color: "var(--t-btn-text)",
                            }}
                        >
                            Start a project
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                        </Link>
                        <Link
                            href="/work"
                            className="inline-flex items-center gap-2 h-12 px-7 rounded-[var(--t-radius-btn)] font-semibold text-base transition-all duration-200 border hover:bg-[var(--t-bg-surface)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--t-bg)]"
                            style={{
                                borderColor: "var(--t-border)",
                                color: "var(--t-text)",
                            }}
                        >
                            View our work
                        </Link>
                    </motion.div>
                </div>

                {/* Right Side: Image / Video */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative w-full h-[350px] md:h-[500px] lg:h-[600px] mt-10 lg:mt-0"
                >
                    <Image
                        src="/herosection.png"
                        alt="SVaaN Hero"
                        fill
                        className="object-contain lg:object-right object-center"
                        priority
                    />
                </motion.div>

            </div>

            {/* Bento nav cards */}
            {/* <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-[60px] relative z-10">
                 <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    {[
                        { title: "Our Work", desc: "Explore selected projects and our approach to delivery.", href: "/work" },
                        { title: "About Us", desc: "A closer look at our mission, values, and the team behind SVaaN.", href: "/about" },
                        { title: "Contact Us", desc: "Let's work together to bring your vision to life.", href: "/contact" },
                    ].map((card) => (
                        <Link
                            key={card.title}
                            href={card.href}
                            className="group relative rounded-[var(--t-radius-card)] p-8 transition-all duration-500 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2"
                            style={{
                                backgroundColor: "var(--t-bg-card)",
                                border: "1px solid var(--t-border)",
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--t-accent)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--t-border)"; }}
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: "linear-gradient(135deg, var(--t-gradient-from), transparent)" }}
                            />
                            <div className="relative z-10">
                                <h3 className="type-h3 mb-3 group-hover:text-[var(--t-accent)] transition-colors" style={{ color: "var(--t-text)" }}>
                                    {card.title}
                                </h3>
                                <p className="type-body-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{card.desc}</p>
                            </div>
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                                <svg className="w-5 h-5" style={{ color: "var(--t-accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </motion.div> 
            </div> */}
        </section>
    );
}
