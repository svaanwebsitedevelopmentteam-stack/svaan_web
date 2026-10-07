"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icons3D } from "@/components/ui/Icons3D";
import { CTASection } from "@/components/CTASection";

const methodologies = [
    {
        num: "01",
        title: "Understand",
        subtitle: "Understand before deciding.",
        desc: "We clarify the business challenge, users, context, constraints, and desired progress.",
        deliverables: ["Discovery", "Stakeholder discussions", "Problem framing", "Current-state review", "Requirement analysis", "Opportunity identification"],
        icon: Icons3D.ProcessDiscover
    },
    {
        num: "02",
        title: "Strategize",
        subtitle: "Turn complexity into direction.",
        desc: "We identify priorities, opportunities, and the direction that makes sense for the situation.",
        deliverables: ["Prioritization", "Product and technology direction", "Transformation planning", "Solution options", "Roadmap definition"],
        icon: Icons3D.ProcessShape
    },
    {
        num: "03",
        title: "Design",
        subtitle: "Make the solution useful before making it real.",
        desc: "We translate direction into experiences, products, workflows, and solution concepts.",
        deliverables: ["User experience design", "Product definition", "Prototyping", "Interface design", "Solution design"],
        icon: Icons3D.ProcessPrototype
    },
    {
        num: "04",
        title: "Build",
        subtitle: "Turn direction into working technology.",
        desc: "We engineer and deliver the solution with appropriate technology, quality practices, and collaboration.",
        deliverables: ["Application development", "Integration", "Quality assurance", "Deployment", "Delivery management"],
        icon: Icons3D.ProcessBuild
    },
    {
        num: "05",
        title: "Evolve",
        subtitle: "Improve as the business changes.",
        desc: "We support, monitor, learn from, and improve technology after launch.",
        deliverables: ["Application support", "Infrastructure support", "Production support", "Cloud management", "Performance improvement", "Continuous enhancement"],
        icon: Icons3D.Support
    }
];

const engagementModels = [
    { step: "01", title: "Strategic Clarity", desc: "Understanding the market and outlining the roadmap." },
    { step: "02", title: "Product Validation", desc: "Shaping and verifying the product through MVPs." },
    { step: "03", title: "Software Build", desc: "Heavy engineering for new platforms and systems." },
    { step: "04", title: "Ongoing Support", desc: "Improving and maintaining existing live systems." }
];

/* ─── Animated Micro-Visualizations for Core Principles ─── */

function PrincipleRadarVisual() {
    return (
        <div className="relative w-full h-44 sm:h-48 md:h-52 flex items-center justify-center overflow-hidden rounded-2xl border"
            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
            {/* Grid background */}
            <div className="absolute inset-0 opacity-15"
                style={{ backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", backgroundSize: "16px 16px" }} />

            {/* Concentric radar circles */}
            <div className="absolute w-40 h-40 sm:w-48 sm:h-48 rounded-full border border-dashed opacity-30" style={{ borderColor: "var(--t-accent)" }} />
            <div className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full border opacity-40" style={{ borderColor: "var(--t-accent)" }} />
            <div className="absolute w-14 h-14 rounded-full border opacity-60" style={{ borderColor: "var(--t-accent)" }} />

            {/* Crosshairs */}
            <div className="absolute w-full h-[1px] opacity-25" style={{ backgroundColor: "var(--t-accent)" }} />
            <div className="absolute h-full w-[1px] opacity-25" style={{ backgroundColor: "var(--t-accent)" }} />

            {/* Rotating Radar Sweep Beam */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute w-40 h-40 sm:w-48 sm:h-48 rounded-full pointer-events-none origin-center"
                style={{
                    background: "conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(0, 118, 204, 0.4) 360deg)"
                }}
            />

            {/* Target Marker 1: Root Constraint */}
            <motion.div
                animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[26%] left-[28%] flex items-center gap-2 z-10"
            >
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "var(--t-accent)" }} />
                    <span className="relative inline-flex rounded-full h-3 w-3" style={{ backgroundColor: "var(--t-accent)" }} />
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider backdrop-blur-md border shadow-xs"
                    style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-text)" }}>
                    Root Problem
                </span>
            </motion.div>

            {/* Target Marker 2: User Context */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-[22%] right-[20%] flex items-center gap-2 z-10"
            >
                <span className="relative flex h-2.5 w-2.5">
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider backdrop-blur-md border shadow-xs"
                    style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-text)" }}>
                    Constraint Mapped
                </span>
            </motion.div>

            {/* Status indicator */}
            <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 z-10">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--t-accent)" }} />
                <span className="text-[9px] font-mono tracking-widest uppercase opacity-70" style={{ color: "var(--t-text-muted)" }}>
                    DIAGNOSTIC RADAR // ACTIVE
                </span>
            </div>
        </div>
    );
}

function PrincipleBridgeVisual() {
    return (
        <div className="relative w-full h-44 sm:h-48 md:h-52 flex flex-col justify-center px-4 sm:px-6 overflow-hidden rounded-2xl border"
            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>

            <div className="relative flex items-center justify-between z-10">
                {/* Strategy Node */}
                <div className="p-3 rounded-xl border flex flex-col items-center shadow-xs w-24 sm:w-28 text-center"
                    style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center mb-1"
                        style={{ backgroundColor: "var(--t-bg-surface)", color: "var(--t-accent)" }}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                    </div>
                    <span className="text-[11px] font-display font-bold" style={{ color: "var(--t-text)" }}>Strategy</span>
                    <span className="text-[9px] font-mono opacity-60 uppercase" style={{ color: "var(--t-text-muted)" }}>Roadmap</span>
                </div>

                {/* Animated Connecting Flow Bridge */}
                <div className="relative flex-1 mx-2 sm:mx-3 h-10 flex items-center justify-center">
                    <div className="w-full h-0.5 relative" style={{ backgroundColor: "var(--t-border)" }}>
                        {/* Moving packet: Strategy -> Execution */}
                        <motion.div
                            animate={{ left: ["0%", "100%"] }}
                            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full blur-[1px] shadow-sm"
                            style={{ backgroundColor: "var(--t-accent)" }}
                        />
                        {/* Moving packet: Execution -> Strategy feedback */}
                        <motion.div
                            animate={{ left: ["100%", "0%"] }}
                            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400 blur-[0.5px]"
                        />
                    </div>
                    <div className="absolute -top-3.5 px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider border shadow-xs"
                        style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                        Sync Loop
                    </div>
                </div>

                {/* Execution Node */}
                <div className="p-3 rounded-xl border flex flex-col items-center shadow-xs w-24 sm:w-28 text-center"
                    style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center mb-1"
                        style={{ backgroundColor: "var(--t-bg-surface)", color: "var(--t-accent)" }}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </div>
                    <span className="text-[11px] font-display font-bold" style={{ color: "var(--t-text)" }}>Execution</span>
                    <span className="text-[9px] font-mono opacity-60 uppercase" style={{ color: "var(--t-text-muted)" }}>Delivery</span>
                </div>
            </div>

            <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-mono tracking-widest uppercase opacity-70" style={{ color: "var(--t-text-muted)" }}>
                    BI-DIRECTIONAL ALIGNMENT // 100% FEASIBLE
                </span>
            </div>
        </div>
    );
}

function PrincipleEquilibriumVisual() {
    return (
        <div className="relative w-full h-40 sm:h-44 flex items-center justify-center overflow-hidden rounded-2xl border"
            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>

            <div className="relative w-48 h-32 flex items-center justify-center">
                {/* Left Orbit: User Needs */}
                <motion.div
                    animate={{ scale: [1, 1.05, 1], x: [-3, 3, -3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute left-2 w-24 h-24 rounded-full border border-dashed flex items-center justify-center"
                    style={{
                        borderColor: "var(--t-accent)",
                        backgroundColor: "rgba(0, 118, 204, 0.08)",
                    }}
                >
                    <span className="text-[10px] font-mono font-bold tracking-tight -translate-x-3" style={{ color: "var(--t-text)" }}>
                        User Needs
                    </span>
                </motion.div>

                {/* Right Orbit: Business Goals */}
                <motion.div
                    animate={{ scale: [1.05, 1, 1.05], x: [3, -3, 3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute right-2 w-24 h-24 rounded-full border border-dashed flex items-center justify-center"
                    style={{
                        borderColor: "#8b5cf6",
                        backgroundColor: "rgba(139, 92, 246, 0.08)",
                    }}
                >
                    <span className="text-[10px] font-mono font-bold tracking-tight translate-x-3" style={{ color: "var(--t-text)" }}>
                        Business ROI
                    </span>
                </motion.div>

                {/* Central Equilibrium Lens */}
                <motion.div
                    animate={{ scale: [0.95, 1.1, 0.95] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute z-10 w-9 h-9 rounded-full flex items-center justify-center shadow-md border"
                    style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-accent)" }}
                >
                    <span className="w-3 h-3 rounded-full animate-ping" style={{ backgroundColor: "var(--t-accent)" }} />
                </motion.div>
            </div>

            <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5">
                <span className="text-[9px] font-mono tracking-widest uppercase opacity-70" style={{ color: "var(--t-text-muted)" }}>
                    EQUILIBRIUM BALANCE // USER + VALUE
                </span>
            </div>
        </div>
    );
}

function PrincipleModularBlocksVisual() {
    return (
        <div className="relative w-full h-40 sm:h-44 flex items-center justify-center overflow-hidden rounded-2xl border"
            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>

            <div className="flex flex-col gap-1.5 w-44 items-center">
                {/* Floating Top Modular Block */}
                <motion.div
                    animate={{ y: [-5, 2, -5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-28 py-1 px-3 rounded-lg border text-center shadow-md relative"
                    style={{ backgroundColor: "var(--t-accent)", borderColor: "var(--t-accent)", color: "#fff" }}
                >
                    <span className="text-[10px] font-mono font-bold tracking-wide uppercase">New Capability</span>
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white" />
                </motion.div>

                {/* Middle Interface Layer */}
                <div className="w-36 py-1 px-3 rounded-lg border text-center shadow-xs"
                    style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-text)" }}>
                    <span className="text-[10px] font-mono font-medium">Modular Services</span>
                </div>

                {/* Foundation Core Layer */}
                <div className="w-44 py-1.5 px-3 rounded-lg border text-center shadow-sm"
                    style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-text-muted)" }}>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Clean Core Architecture</span>
                </div>
            </div>

            <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5">
                <span className="text-[9px] font-mono tracking-widest uppercase opacity-70" style={{ color: "var(--t-text-muted)" }}>
                    HOT-SWAPPABLE // EXTENSIBLE SCALE
                </span>
            </div>
        </div>
    );
}

function PrincipleTelemetryVisual() {
    return (
        <div className="relative w-full h-40 sm:h-44 flex flex-col justify-between p-3.5 sm:p-4 overflow-hidden rounded-2xl border"
            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>

            {/* Top Telemetry Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold uppercase" style={{ color: "var(--t-text)" }}>
                        Telemetry Monitor
                    </span>
                </div>
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded border"
                    style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                    LIVE: 99.8%
                </span>
            </div>

            {/* Animated Pulse Waveform */}
            <div className="relative w-full h-10 flex items-center overflow-hidden">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 200 40">
                    <motion.path
                        d="M 0 20 L 40 20 L 55 5 L 70 35 L 85 10 L 95 25 L 105 20 L 140 20 L 150 12 L 160 28 L 170 20 L 200 20"
                        fill="none"
                        stroke="var(--t-accent)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0.3, pathOffset: 0 }}
                        animate={{ pathOffset: [0, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    />
                </svg>
            </div>

            {/* Bottom Progress Tracker */}
            <div>
                <div className="flex justify-between text-[9px] font-mono mb-1" style={{ color: "var(--t-text-muted)" }}>
                    <span>Outcome Alignment</span>
                    <span className="font-bold" style={{ color: "var(--t-text)" }}>100% Verified</span>
                </div>
                <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "var(--t-border)" }}>
                    <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: "var(--t-accent)" }}
                        initial={{ width: "30%" }}
                        whileInView={{ width: "98%" }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                </div>
            </div>
        </div>
    );
}

export default function ApproachPage() {
    return (
        <main className="w-full overflow-x-clip min-h-screen" style={{ backgroundColor: "var(--t-bg)" }}>
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[50vh] lg:min-h-[55vh] flex flex-col justify-center overflow-clip pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 border-b"
                style={{ borderColor: "var(--t-border)" }}>
                {/* Ambient Glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[300px] sm:h-[400px] rounded-full blur-[180px] pointer-events-none"
                    style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }} />

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-4 sm:mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border text-xs font-semibold tracking-wider uppercase"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--t-accent)" }} />
                            Our Approach
                        </div>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-4 sm:mb-6 max-w-4xl"
                        style={{ color: "var(--t-text)" }}>
                        Understand the challenge. Shape the direction.{" "}
                        <span className="italic" style={{ color: "var(--t-accent)" }}>Build what matters.</span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed"
                        style={{ color: "var(--t-text-muted)" }}>
                        We do not begin with technology. We begin with understanding. Then we connect strategy, design, and engineering to create practical, measurable progress.
                    </motion.p>
                </div>
            </section>

            {/* 2. CORE STATEMENT (THE PHILOSOPHY) */}
            <section className="py-12 sm:py-16 lg:py-20 relative overflow-clip border-b"
                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }}
                        className="p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-10 border relative overflow-hidden shadow-md"
                        style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>

                        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[var(--t-accent)] to-transparent" />

                        <div className="shrink-0 md:w-5/12">
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-md border text-xs font-semibold tracking-wider uppercase"
                                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                                The Philosophy
                            </div>
                            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug" style={{ color: "var(--t-text)" }}>
                                Start with the problem,<br className="hidden sm:block" /> not the solution.
                            </h2>
                        </div>

                        <div className="md:w-7/12 border-t md:border-t-0 md:border-l pt-5 md:pt-0 md:pl-10 text-sm sm:text-base lg:text-lg leading-relaxed"
                            style={{ borderColor: "var(--t-border)", color: "var(--t-text-muted)" }}>
                            <p>
                                The right technology decision depends entirely on the problem it is meant to solve. Our approach creates space to understand the business context, clarify priorities, and build with purpose.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. CORE PRINCIPLES (HIDDEN) */}
            {false && (
                <section className="py-14 sm:py-20 lg:py-28 relative overflow-clip border-b"
                style={{ backgroundColor: "var(--t-bg)", borderColor: "var(--t-border)" }}>
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-md border text-xs font-semibold tracking-wider uppercase"
                                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                                Core Principles
                            </div>
                            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-3 sm:mb-4" style={{ color: "var(--t-text)" }}>
                                How we think and <span className="italic" style={{ color: "var(--t-accent)" }}>deliver.</span>
                            </h2>
                            <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                                The guiding engineering disciplines and architectural rules that govern every client engagement at SVaaN.
                            </p>
                        </motion.div>
                    </div>

                    {/* Bento Grid Architecture */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">

                {/* Bento Card 01: Start with the problem (Large Feature, 7 cols) */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-7 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border transition-all duration-300 hover:shadow-xl hover:border-[var(--t-accent)] hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between group"
                    style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}
                >
                    {/* Subtle Ambient Accent Gradient */}
                    <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] opacity-10 pointer-events-none"
                        style={{ backgroundColor: "var(--t-accent)" }} />

                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <span className="w-9 h-9 rounded-xl font-mono text-xs font-bold flex items-center justify-center border transition-colors duration-300 group-hover:bg-[var(--t-accent)] group-hover:text-white"
                                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                    01
                                </span>
                                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider border"
                                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                    Diagnostic First
                                </span>
                            </div>
                            <span className="text-[11px] font-mono uppercase tracking-widest opacity-40">
                                Principle // 01
                            </span>
                        </div>

                        <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight mb-2 group-hover:text-[var(--t-accent)] transition-colors duration-200"
                            style={{ color: "var(--t-text)" }}>
                            Start with the problem.
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold mb-3" style={{ color: "var(--t-accent)" }}>
                            Understand before deciding or architecting.
                        </p>
                        <p className="text-xs sm:text-sm sm:leading-relaxed mb-6" style={{ color: "var(--t-text-muted)" }}>
                            We clarify root constraints, human behaviors, workflows, and business objectives before recommending any technical solution or tool.
                        </p>
                    </div>

                    {/* Animated Diagnostic Visual */}
                    <div className="mt-2">
                        <PrincipleRadarVisual />
                    </div>
                </motion.div>

                {/* Bento Card 02: Connect strategy and execution (5 cols) */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="lg:col-span-5 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border transition-all duration-300 hover:shadow-xl hover:border-[var(--t-accent)] hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between group"
                    style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}
                >
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <span className="w-9 h-9 rounded-xl font-mono text-xs font-bold flex items-center justify-center border transition-colors duration-300 group-hover:bg-[var(--t-accent)] group-hover:text-white"
                                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                    02
                                </span>
                                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider border"
                                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                    Bi-Directional
                                </span>
                            </div>
                            <span className="text-[11px] font-mono uppercase tracking-widest opacity-40">
                                Principle // 02
                            </span>
                        </div>

                        <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight mb-2 group-hover:text-[var(--t-accent)] transition-colors duration-200"
                            style={{ color: "var(--t-text)" }}>
                            Connect strategy & execution.
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold mb-3" style={{ color: "var(--t-accent)" }}>
                            Direction anchored in actual delivery.
                        </p>
                        <p className="text-xs sm:text-sm sm:leading-relaxed mb-6" style={{ color: "var(--t-text-muted)" }}>
                            Direction remains inseparable from engineering reality. We validate feasibility continuously so high-level visions convert into working software.
                        </p>
                    </div>

                    {/* Animated Flow Bridge Visual */}
                    <div className="mt-2">
                        <PrincipleBridgeVisual />
                    </div>
                </motion.div>

                {/* Bento Card 03: Design for people and business (4 cols) */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="lg:col-span-4 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-300 hover:shadow-xl hover:border-[var(--t-accent)] hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between group"
                    style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}
                >
                    <div>
                        <div className="flex items-center justify-between mb-5">
                            <div className="flex items-center gap-2.5">
                                <span className="w-8 h-8 rounded-lg font-mono text-xs font-bold flex items-center justify-center border transition-colors duration-300 group-hover:bg-[var(--t-accent)] group-hover:text-white"
                                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                    03
                                </span>
                                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider border"
                                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                    Equilibrium
                                </span>
                            </div>
                            <span className="text-[10px] font-mono uppercase tracking-widest opacity-40">
                                03
                            </span>
                        </div>

                        <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight mb-1.5 group-hover:text-[var(--t-accent)] transition-colors duration-200"
                            style={{ color: "var(--t-text)" }}>
                            Design for people & business.
                        </h3>
                        <p className="text-xs font-semibold mb-2" style={{ color: "var(--t-accent)" }}>
                            Balance user intuition with commercial ROI.
                        </p>
                        <p className="text-xs sm:text-sm leading-relaxed mb-5" style={{ color: "var(--t-text-muted)" }}>
                            User adoption requires zero friction; business sustainability requires economic viability. We optimize for both simultaneously.
                        </p>
                    </div>

                    <PrincipleEquilibriumVisual />
                </motion.div>

                {/* Bento Card 04: Build for continuous change (4 cols) */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:col-span-4 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-300 hover:shadow-xl hover:border-[var(--t-accent)] hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between group"
                    style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}
                >
                    <div>
                        <div className="flex items-center justify-between mb-5">
                            <div className="flex items-center gap-2.5">
                                <span className="w-8 h-8 rounded-lg font-mono text-xs font-bold flex items-center justify-center border transition-colors duration-300 group-hover:bg-[var(--t-accent)] group-hover:text-white"
                                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                    04
                                </span>
                                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider border"
                                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                    Evolutionary
                                </span>
                            </div>
                            <span className="text-[10px] font-mono uppercase tracking-widest opacity-40">
                                04
                            </span>
                        </div>

                        <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight mb-1.5 group-hover:text-[var(--t-accent)] transition-colors duration-200"
                            style={{ color: "var(--t-text)" }}>
                            Build for continuous change.
                        </h3>
                        <p className="text-xs font-semibold mb-2" style={{ color: "var(--t-accent)" }}>
                            Modular systems that adapt as you scale.
                        </p>
                        <p className="text-xs sm:text-sm leading-relaxed mb-5" style={{ color: "var(--t-text-muted)" }}>
                            We architect decoupled, modular foundations that can pivot, scale, and integrate new capabilities without painful full rewrites.
                        </p>
                    </div>

                    <PrincipleModularBlocksVisual />
                </motion.div>

                {/* Bento Card 05: Keep the outcome visible (4 cols) */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="lg:col-span-4 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-300 hover:shadow-xl hover:border-[var(--t-accent)] hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between group"
                    style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}
                >
                    <div>
                        <div className="flex items-center justify-between mb-5">
                            <div className="flex items-center gap-2.5">
                                <span className="w-8 h-8 rounded-lg font-mono text-xs font-bold flex items-center justify-center border transition-colors duration-300 group-hover:bg-[var(--t-accent)] group-hover:text-white"
                                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                    05
                                </span>
                                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider border"
                                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                    Telemetry
                                </span>
                            </div>
                            <span className="text-[10px] font-mono uppercase tracking-widest opacity-40">
                                05
                            </span>
                        </div>

                        <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight mb-1.5 group-hover:text-[var(--t-accent)] transition-colors duration-200"
                            style={{ color: "var(--t-text)" }}>
                            Keep the outcome visible.
                        </h3>
                        <p className="text-xs font-semibold mb-2" style={{ color: "var(--t-accent)" }}>
                            True accountability against real business KPIs.
                        </p>
                        <p className="text-xs sm:text-sm leading-relaxed mb-5" style={{ color: "var(--t-text-muted)" }}>
                            Progress is measured by real user and commercial metrics — latency reductions, conversion increases, and uptime — not vanity tickets.
                        </p>
                    </div>

                    <PrincipleTelemetryVisual />
                </motion.div>

                        </div>
                    </div>
                </section>
            )}

{/* 4. THE SVAAN FRAMEWORK (Five Stages) */ }
<section className="py-14 sm:py-20 lg:py-28 relative overflow-clip border-b"
    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-10 sm:gap-14 lg:gap-16">
            {/* Sticky Left Sidebar (Desktop sticky, mobile static) */}
            <div className="lg:w-4/12 lg:sticky lg:top-32 relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-md border text-xs font-semibold tracking-wider uppercase"
                    style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                    The Framework
                </div>
                <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4" style={{ color: "var(--t-text)" }}>
                    Five Stages of <span className="italic" style={{ color: "var(--t-accent)" }}>Execution.</span>
                </h2>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                    A systematic methodology ensuring deep alignment before technical execution, leading to stable, long-lasting outcomes.
                </p>
            </div>

            {/* Right Stacked Stage Cards */}
            <div className="lg:w-8/12 flex flex-col gap-6 sm:gap-8 w-full">
                {methodologies.map((step, i) => (
                    <motion.div
                        key={step.num}
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        className="rounded-2xl sm:rounded-3xl p-6 sm:p-9 lg:p-10 border transition-all duration-300 hover:shadow-xl hover:border-[var(--t-accent)] group"
                        style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}
                    >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 border shadow-sm group-hover:scale-105 transition-transform duration-300"
                                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                    <step.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                                </div>
                                <div>
                                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider block opacity-75" style={{ color: "var(--t-accent)" }}>
                                        Stage {step.num}
                                    </span>
                                    <h3 className="font-display text-xl sm:text-2xl font-bold" style={{ color: "var(--t-text)" }}>
                                        {step.title}
                                    </h3>
                                </div>
                            </div>
                            <span className="font-display text-4xl sm:text-5xl font-black opacity-10 self-end sm:self-auto" style={{ color: "var(--t-text)" }}>
                                {step.num}
                            </span>
                        </div>

                        <h4 className="text-base sm:text-lg font-bold mb-2.5" style={{ color: "var(--t-accent)" }}>
                            {step.subtitle}
                        </h4>
                        <p className="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 pb-6 sm:pb-8 border-b"
                            style={{ color: "var(--t-text-muted)", borderColor: "var(--t-border)" }}>
                            {step.desc}
                        </p>

                        <div>
                            <h5 className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "var(--t-text)" }}>
                                Typical Activities & Deliverables
                            </h5>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                                {step.deliverables.map(item => (
                                    <li key={item} className="flex items-start gap-2.5">
                                        <div className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border"
                                            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-xs sm:text-sm font-medium" style={{ color: "var(--t-text-muted)" }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
</section>

{/* 5. ENGAGEMENT MODELS */ }
<section className="py-14 sm:py-20 lg:py-28 relative overflow-clip border-b"
    style={{ backgroundColor: "var(--t-bg)", borderColor: "var(--t-border)" }}>
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }}>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-md border text-xs font-semibold tracking-wider uppercase"
                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                    Flexible Delivery
                </div>
                <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-3 sm:mb-4" style={{ color: "var(--t-text)" }}>
                    The shape of the engagement follows the <span className="italic" style={{ color: "var(--t-accent)" }}>problem.</span>
                </h2>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                    Not every challenge needs the same starting point. We assemble the exact combination of strategy, engineering, and support you need.
                </p>
            </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {engagementModels.map((m, i) => (
                <motion.div
                    key={m.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[var(--t-accent)] flex flex-col justify-between group"
                    style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}
                >
                    <div>
                        <span className="w-8 h-8 rounded-lg font-mono text-xs font-bold flex items-center justify-center mb-6 border transition-colors duration-300 group-hover:bg-[var(--t-accent)] group-hover:text-white"
                            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                            {m.step}
                        </span>
                        <h3 className="font-display text-lg sm:text-xl font-bold mb-2.5 group-hover:text-[var(--t-accent)] transition-colors duration-200"
                            style={{ color: "var(--t-text)" }}>
                            {m.title}
                        </h3>
                        <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                            {m.desc}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
</section>

{/* 6. CTA SECTION */ }
<CTASection />
        </main >
    );
}
