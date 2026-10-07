"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export interface SignalItem {
    num?: string;
    tag: string;
    text: string;
    category?: string;
}

interface SignalsSectionProps {
    badge?: string;
    title?: string;
    highlightTitle?: string;
    subtitle: string;
    signals: SignalItem[];
}

export function SignalsSection({
    badge = "Signals & Triggers",
    title = "When you",
    highlightTitle = "need it.",
    subtitle,
    signals,
}: SignalsSectionProps) {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    return (
        <section
            className="py-14 sm:py-20 lg:py-28 relative overflow-clip border-b"
            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}
        >
            {/* Ambient Background Lighting */}
            <div
                className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[180px] pointer-events-none opacity-20"
                style={{ backgroundColor: "var(--t-accent)" }}
            />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div
                            className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-md border text-xs font-semibold tracking-wider uppercase"
                            style={{
                                backgroundColor: "var(--t-bg-card)",
                                borderColor: "var(--t-border)",
                                color: "var(--t-accent)",
                            }}
                        >
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--t-accent)" }} />
                            {badge}
                        </div>
                        <h2
                            className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-3 sm:mb-4"
                            style={{ color: "var(--t-text)" }}
                        >
                            {title}{" "}
                            <span className="italic" style={{ color: "var(--t-accent)" }}>
                                {highlightTitle}
                            </span>
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                            {subtitle}
                        </p>
                    </motion.div>
                </div>

                {/* Main Interactive Layout: 5 Cols Telemetry Scanner (Desktop Sticky) + 7 Cols Animated Signal Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* Left Column: Interactive Signal Telemetry & Radar Scanner (Sticky on desktop) */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col gap-5">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6 }}
                            className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl border shadow-md relative overflow-hidden flex flex-col justify-between"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}
                        >
                            {/* Card Accent Top Line */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--t-accent)] via-sky-400 to-transparent" />

                            {/* Telemetry Header */}
                            <div className="flex items-center justify-between mb-6 pb-4 border-b" style={{ borderColor: "var(--t-border)" }}>
                                <div className="flex items-center gap-2">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "var(--t-accent)" }} />
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ backgroundColor: "var(--t-accent)" }} />
                                    </span>
                                    <span className="text-[11px] font-mono font-bold tracking-wider uppercase" style={{ color: "var(--t-text)" }}>
                                        Diagnostic Feed
                                    </span>
                                </div>
                                <span
                                    className="px-2 py-0.5 rounded text-[10px] font-mono font-bold border"
                                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}
                                >
                                    {signals.length} Triggers Tracked
                                </span>
                            </div>

                            {/* Animated Radar & Signal Waveform Display */}
                            <div
                                className="relative w-full h-44 sm:h-52 rounded-2xl border overflow-hidden flex items-center justify-center mb-6"
                                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}
                            >
                                {/* Grid texture */}
                                <div
                                    className="absolute inset-0 opacity-15"
                                    style={{
                                        backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
                                        backgroundSize: "16px 16px",
                                    }}
                                />

                                {/* Concentric Radar Circles */}
                                <div className="absolute w-36 h-36 rounded-full border border-dashed opacity-25" style={{ borderColor: "var(--t-accent)" }} />
                                <div className="absolute w-24 h-24 rounded-full border opacity-35" style={{ borderColor: "var(--t-accent)" }} />
                                <div className="absolute w-12 h-12 rounded-full border opacity-50" style={{ borderColor: "var(--t-accent)" }} />

                                {/* Radar Sweep */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-36 h-36 rounded-full pointer-events-none origin-center"
                                    style={{
                                        background: "conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(0, 118, 204, 0.4) 360deg)",
                                    }}
                                />

                                {/* Animated Signal Waveform in foreground */}
                                <div className="absolute inset-x-0 bottom-4 px-4 h-12 flex items-center z-10">
                                    <svg className="w-full h-full overflow-visible" viewBox="0 0 200 40">
                                        <motion.path
                                            d="M 0 20 L 30 20 L 45 8 L 60 32 L 75 14 L 85 24 L 95 20 L 130 20 L 142 10 L 154 30 L 166 20 L 200 20"
                                            fill="none"
                                            stroke="var(--t-accent)"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            initial={{ pathLength: 0.3, pathOffset: 0 }}
                                            animate={{ pathOffset: [0, 1] }}
                                            transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
                                        />
                                    </svg>
                                </div>

                                {/* Active Signal Indicator Blips */}
                                {signals.map((_, i) => {
                                    const isHovered = hoveredIdx === i;
                                    const angle = (i / signals.length) * 2 * Math.PI - Math.PI / 2;
                                    const radius = 48; // px
                                    const x = Math.cos(angle) * radius;
                                    const y = Math.sin(angle) * radius;

                                    return (
                                        <motion.div
                                            key={i}
                                            animate={{
                                                scale: isHovered ? 1.6 : 1,
                                                opacity: isHovered ? 1 : 0.65,
                                            }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute w-2.5 h-2.5 rounded-full z-20 pointer-events-none"
                                            style={{
                                                transform: `translate(${x}px, ${y}px)`,
                                                backgroundColor: isHovered ? "var(--t-accent)" : "#38bdf8",
                                                boxShadow: isHovered ? "0 0 10px var(--t-accent)" : "none",
                                            }}
                                        />
                                    );
                                })}

                                <div className="absolute top-2.5 left-3 flex items-center gap-1.5 z-10">
                                    <span className="text-[9px] font-mono tracking-widest uppercase opacity-70" style={{ color: "var(--t-text-muted)" }}>
                                        {hoveredIdx !== null ? `FOCUS: SIGNAL // 0${hoveredIdx + 1}` : "SCANNING ENVIRONMENT"}
                                    </span>
                                </div>
                            </div>

                            {/* Strategic Insight Box */}
                            <div className="flex flex-col gap-3">
                                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                                    Recognizing <span className="font-semibold" style={{ color: "var(--t-text)" }}>two or more of these signals</span> indicates structural friction in your current operating model. Addressing them early prevents compounding technical debt.
                                </p>
                                <div className="pt-2">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold group/link transition-colors"
                                        style={{ color: "var(--t-accent)" }}
                                    >
                                        <span>Discuss these triggers with an engineer</span>
                                        <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Animated Signal Cards */}
                    <div className="lg:col-span-7 flex flex-col gap-4 sm:gap-5">
                        {signals.map((item, i) => {
                            const isHovered = hoveredIdx === i;

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-40px" }}
                                    transition={{ duration: 0.5, delay: i * 0.06 }}
                                    onMouseEnter={() => setHoveredIdx(i)}
                                    onMouseLeave={() => setHoveredIdx(null)}
                                    className={`p-6 sm:p-7 rounded-2xl border relative overflow-hidden transition-all duration-300 group cursor-default flex flex-col justify-between ${
                                        isHovered ? "shadow-lg -translate-y-1" : "hover:shadow-md"
                                    }`}
                                    style={{
                                        backgroundColor: "var(--t-bg-card)",
                                        borderColor: isHovered ? "var(--t-accent)" : "var(--t-border)",
                                    }}
                                >
                                    {/* Top Bar: Trigger Code, Tag Badge, Beacon */}
                                    <div className="flex items-center justify-between gap-3 mb-4">
                                        <div className="flex items-center gap-3">
                                            <span
                                                className="w-8 h-8 rounded-lg font-mono text-xs font-bold flex items-center justify-center border transition-colors duration-300"
                                                style={{
                                                    backgroundColor: isHovered ? "var(--t-accent)" : "var(--t-bg-surface)",
                                                    borderColor: "var(--t-border)",
                                                    color: isHovered ? "#fff" : "var(--t-accent)",
                                                }}
                                            >
                                                0{i + 1}
                                            </span>
                                            <span
                                                className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider border"
                                                style={{
                                                    backgroundColor: "var(--t-bg-surface)",
                                                    borderColor: "var(--t-border)",
                                                    color: "var(--t-accent)",
                                                }}
                                            >
                                                {item.tag}
                                            </span>
                                        </div>

                                        {/* Status Beacon */}
                                        <div className="flex items-center gap-1.5">
                                            <span className="relative flex h-2 w-2">
                                                <span
                                                    className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                                                        isHovered ? "bg-[var(--t-accent)]" : "bg-emerald-400"
                                                    }`}
                                                />
                                                <span
                                                    className={`relative inline-flex rounded-full h-2 w-2 ${
                                                        isHovered ? "bg-[var(--t-accent)]" : "bg-emerald-500"
                                                    }`}
                                                />
                                            </span>
                                            <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest hidden sm:inline">
                                                Signal Active
                                            </span>
                                        </div>
                                    </div>

                                    {/* Indicator Statement */}
                                    <p
                                        className="font-display text-sm sm:text-base font-semibold leading-relaxed mb-4 transition-colors duration-200"
                                        style={{ color: "var(--t-text)" }}
                                    >
                                        {item.text}
                                    </p>

                                    {/* Bottom Animated Frequency Indicator Line */}
                                    <div className="w-full h-1 rounded-full overflow-hidden" style={{ backgroundColor: "var(--t-bg-surface)" }}>
                                        <motion.div
                                            className="h-full rounded-full"
                                            style={{ backgroundColor: "var(--t-accent)" }}
                                            initial={{ width: "15%" }}
                                            animate={{ width: isHovered ? "100%" : "25%" }}
                                            transition={{ duration: 0.4, ease: "easeOut" }}
                                        />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
