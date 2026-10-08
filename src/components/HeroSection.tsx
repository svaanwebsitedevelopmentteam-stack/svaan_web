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

                {/* Primary Glow that directly follows the mouse cursor - GPU accelerated */}
                <motion.div
                    className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                    style={{
                        background: "radial-gradient(circle, var(--t-accent) 0%, transparent 70%)",
                        opacity: "calc(var(--t-orb-opacity) + 0.1)",
                        x: springX,
                        y: springY,
                        translateX: "-50%",
                        translateY: "-50%",
                        transform: "translateZ(0)",
                        willChange: "transform",
                    }}
                />

                {/* Secondary Glow that trails behind slowly */}
                <motion.div
                    className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
                    style={{
                        background: "radial-gradient(circle, var(--t-accent) 0%, transparent 70%)",
                        opacity: "var(--t-orb-opacity)",
                        x: springX2,
                        y: springY2,
                        translateX: "-30%",
                        translateY: "-30%",
                        transform: "translateZ(0)",
                        willChange: "transform",
                    }}
                />

                {/* Ambient static glows */}
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] opacity-20 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, var(--t-accent) 0%, transparent 70%)" }} />

                {/* Soft grain texture */}
                <div className="absolute inset-0 opacity-[0.25]" />
            </div>

            <div className="w-full px-[40px] pt-[70px] pb-[60px] relative z-10 grid grid-cols-1 lg:grid-cols-[6fr_4fr] gap-12 lg:gap-8 items-center">

                {/* Left Side: Content */}
                <div className="text-left flex flex-col items-start pt-6 lg:pt-0">
                    {/* Eyebrow */}
                    <div className="flex items-center gap-3 mb-8">
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
                    </div>

                    {/* Main heading */}
                    <h1
                        className="type-display mb-6"
                        style={{ color: "var(--t-text)" }}
                    >
                        We build technology
                        <br />
                        that moves{" "}
                        <span className="italic" style={{ color: "var(--t-accent)" }}>business</span>
                        <br />
                        forward.
                    </h1>

                    {/* Subtext */}
                    <p
                        className="text-lg md:text-xl max-w-lg leading-relaxed mb-12"
                        style={{ color: "var(--t-text-muted)" }}
                    >
                        SVaaN Global Tech connects strategy, design, and engineering to help
                        organizations solve complex challenges and build practical digital
                        solutions.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-4">
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
                    </div>
                </div>

                {/* Right Side: Image / Video */}
                <div className="relative w-full h-[350px] md:h-[500px] lg:h-[600px] mt-10 lg:mt-0">
                    <Image
                        src="/herosection.webp"
                        alt="SVaaN Hero"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        className="object-contain lg:object-right object-center"
                        priority
                        fetchPriority="high"
                    />
                </div>

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
