"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Icons3D } from "@/components/ui/Icons3D";

/* ────────────────────────────────────────────────────────────
   DATA
   ──────────────────────────────────────────────────────────── */

const pillars = [
    {
        title: "We stay accountable beyond go-live.",
        short: "Accountability",
        desc: "Launch is the moment real use begins. We keep supporting, fixing and improving what we build.",
        icon: <Icons3D.Support className="w-full h-full" />
    },
    {
        title: "We work from the business problem.",
        short: "Problem-First",
        desc: "A requirement is often the start of a conversation, not the end of one. We ask why before we decide what to build.",
        icon: <Icons3D.Strategy className="w-full h-full" />
    },
    {
        title: "One partner from build to operation.",
        short: "One Partner",
        desc: "You do not need a new vendor at every stage, or a handover that loses what the last team knew.",
        icon: <Icons3D.Software className="w-full h-full" />
    },
    {
        title: "Long-term relationships over one-off delivery.",
        short: "Long-Term",
        desc: "SVaaN began in 2021 with a single US application-support engagement and now works with clients in the US, UAE, UK and Canada.",
        icon: <Icons3D.Database className="w-full h-full" />
    },
    {
        title: "Engineering depth with a business-first view.",
        short: "Depth & Vision",
        desc: "Our engineers build the systems. Our leadership looks at how the whole business runs, including people, process, customers and decisions.",
        icon: <Icons3D.Cloud className="w-full h-full" />
    }
];

const comparisons = [
    { vendor: "Starts from the requirements list", svaan: "Starts from the business problem" },
    { vendor: "Delivers what was asked for", svaan: "Helps decide what is worth building" },
    { vendor: "Finishes at launch", svaan: "Stays through running and improving" },
    { vendor: "Measures delivery", svaan: "Aims to measure what changed for the business" },
    { vendor: "A new vendor for each stage", svaan: "One partner across the lifecycle" }
];

/* ────────────────────────────────────────────────────────────
   COMPONENTS
   ──────────────────────────────────────────────────────────── */

export default function WhySvaanContent() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <main className="w-full overflow-x-clip min-h-screen" style={{ backgroundColor: "var(--t-bg)" }}>

            {/* 1. HERO SECTION (Aligned with Home-V2 style) */}
            <section className="relative min-h-[85vh] flex flex-col justify-center overflow-clip pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 border-b" style={{ borderColor: "var(--t-border)" }}>
                {/* Animated Grid Background */}
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: 'linear-gradient(to right, var(--t-border) 1px, transparent 1px), linear-gradient(to bottom, var(--t-border) 1px, transparent 1px)',
                        backgroundSize: '4rem 4rem',
                        maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 10%, transparent 100%)'
                    }}
                />

                {/* Floating Ambient Glows */}
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none"
                    style={{ backgroundColor: "var(--t-accent)", opacity: "calc(var(--t-orb-opacity) * 0.8)" }} />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none"
                    style={{ backgroundColor: "var(--t-text)", opacity: "calc(var(--t-orb-opacity) * 0.5)" }} />

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 sm:gap-14 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div className="relative">
                        {/* Decorative line */}
                        <div className="hidden lg:block absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--t-accent)] to-transparent opacity-30" />

                        <div className="mb-4 sm:mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border text-xs font-semibold tracking-wider uppercase"
                                style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--t-accent)" }} />
                                Why SVaaN
                            </div>
                        </div>

                        <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6" style={{ color: "var(--t-text)" }}>
                            A technology partner that stays{" "}
                            <span className="italic relative whitespace-nowrap">
                                <span className="relative z-10" style={{ color: "var(--t-accent)" }}>after go-live.</span>
                                <svg className="absolute w-full h-3 -bottom-1 left-0 z-0 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="var(--t-accent)" strokeWidth="4" fill="none" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>

                        <div className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mb-8 sm:mb-10" style={{ color: "var(--t-text-muted)" }}>
                            Many technology vendors finish when the software launches. SVaaN does not. We build it, run it and keep improving it, so the people who understand your system are the same people who support it.
                        </div>

                        <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                            <div className="flex items-center gap-3 px-4 sm:px-5 py-3 rounded-xl border transition-all duration-300 hover:border-[var(--t-accent)] hover:shadow-sm"
                                style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border"
                                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                </div>
                                <span className="font-semibold text-xs sm:text-sm tracking-wide uppercase" style={{ color: "var(--t-text)" }}>Post-Launch Ownership</span>
                            </div>
                            <div className="flex items-center gap-3 px-4 sm:px-5 py-3 rounded-xl border transition-all duration-300 hover:border-[var(--t-accent)] hover:shadow-sm"
                                style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>
                                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border"
                                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <span className="font-semibold text-xs sm:text-sm tracking-wide uppercase" style={{ color: "var(--t-text)" }}>Business-First Depth</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Content: Floating Icon */}
                    <motion.div initial={{ opacity: 0, scale: 0.9, rotateY: -10 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ duration: 0.9, delay: 0.3 }}
                        className="relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[420px] aspect-square rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex items-center justify-center transform-gpu border"
                            style={{
                                backgroundColor: "var(--t-bg-card)",
                                borderColor: "var(--t-border)",
                                boxShadow: "0 20px 40px -15px var(--t-shadow)"
                            }}>

                            {/* Rotating ring behind icon */}
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-6 rounded-full border border-dashed opacity-30 pointer-events-none"
                                style={{ borderColor: "var(--t-accent)" }} />

                            <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                                <div className="w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] flex items-center justify-center">
                                    <Icons3D.Strategy className="w-full h-full relative z-10 filter drop-shadow-2xl" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* 2. PILLARS (Interactive Tab Showcase) */}
            <section className="py-14 sm:py-20 lg:py-28 relative overflow-clip border-b"
                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-md border text-xs font-semibold tracking-wider uppercase"
                                style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--t-accent)" }} />
                                Our Core Philosophy
                            </div>
                            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-3 sm:mb-4" style={{ color: "var(--t-text)" }}>
                                Why businesses choose{" "}
                                <span className="italic" style={{ color: "var(--t-accent)" }}>SVaaN.</span>
                            </h2>
                        </motion.div>
                    </div>

                    {/* DESKTOP VIEW (Two-column scroll-driven sticky showcase) */}
                    <div className="hidden lg:flex flex-row gap-14 lg:gap-20 relative items-start">
                        {/* Left Sidebar (Scrollable Items) */}
                        <div className="w-1/2 flex flex-col pb-[30vh]">
                            {pillars.map((pillar, i) => (
                                <motion.div
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    onViewportEnter={() => setActiveIndex(i)}
                                    viewport={{ margin: "-45% 0px -45% 0px" }}
                                    className={`relative flex flex-col justify-center min-h-[40vh] transition-all duration-500 cursor-pointer ${
                                        activeIndex === i ? 'opacity-100 scale-100' : 'opacity-35 scale-95'
                                    }`}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-all duration-300"
                                            style={{
                                                backgroundColor: activeIndex === i ? "var(--t-accent)" : "var(--t-bg-card)",
                                                color: activeIndex === i ? "#fff" : "var(--t-accent)",
                                                border: "1px solid var(--t-border)"
                                            }}>
                                            0{i + 1}
                                        </span>
                                        <span className="text-[11px] font-semibold uppercase tracking-wider opacity-60" style={{ color: "var(--t-text-muted)" }}>
                                            Pillar 0{i + 1}
                                        </span>
                                    </div>
                                    <h3 className="font-display text-2xl xl:text-3xl font-bold leading-snug transition-colors duration-300"
                                        style={{ color: activeIndex === i ? "var(--t-text)" : "var(--t-text-muted)" }}>
                                        {pillar.title}
                                    </h3>
                                </motion.div>
                            ))}
                        </div>

                        {/* Right Content (Sticky Showcase) */}
                        <div className="w-1/2 sticky top-32 h-fit py-4 flex items-center justify-center">
                            <div className="relative w-full aspect-square xl:aspect-[4/3] rounded-3xl overflow-hidden p-8 sm:p-12 border shadow-xl flex items-center justify-center text-center transition-all duration-500"
                                style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>

                                <div className="absolute inset-0 opacity-15 pointer-events-none"
                                    style={{ background: "radial-gradient(circle at center, var(--t-accent) 0%, transparent 70%)" }} />

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -15, scale: 0.95 }}
                                        transition={{ duration: 0.35, ease: "easeOut" }}
                                        className="relative z-10 flex flex-col items-center justify-center w-full h-full max-w-md mx-auto"
                                    >
                                        <div className="w-28 h-28 xl:w-36 xl:h-36 mb-6 opacity-95 filter drop-shadow-lg">
                                            {pillars[activeIndex].icon}
                                        </div>
                                        <span className="inline-block text-[11px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border mb-3"
                                            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                            Pillar 0{activeIndex + 1} of 05
                                        </span>
                                        <p className="text-base sm:text-lg font-medium leading-relaxed" style={{ color: "var(--t-text)" }}>
                                            {pillars[activeIndex].desc}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* MOBILE VIEW (Scroll-through flow: Each pillar title followed immediately by its content card) */}
                    <div className="flex lg:hidden flex-col gap-10 sm:gap-14">
                        {pillars.map((pillar, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="flex flex-col gap-4"
                            >
                                {/* 1. Pillar Title Header */}
                                <div>
                                    <div className="flex items-center gap-2.5 mb-2.5">
                                        <span className="w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold border"
                                            style={{
                                                backgroundColor: "var(--t-accent)",
                                                color: "#ffffff",
                                                borderColor: "var(--t-accent)"
                                            }}>
                                            0{i + 1}
                                        </span>
                                        <span className="text-[11px] font-semibold uppercase tracking-wider opacity-70" style={{ color: "var(--t-accent)" }}>
                                            Pillar 0{i + 1}
                                        </span>
                                    </div>
                                    <h3 className="font-display text-xl sm:text-2xl font-bold leading-snug" style={{ color: "var(--t-text)" }}>
                                        {pillar.title}
                                    </h3>
                                </div>

                                {/* 2. Card at the bottom of the title */}
                                <div className="relative w-full rounded-2xl overflow-hidden p-6 sm:p-8 border shadow-lg transition-all duration-300"
                                    style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>

                                    <div className="absolute inset-0 opacity-15 pointer-events-none"
                                        style={{ background: "radial-gradient(circle at 50% 30%, var(--t-accent) 0%, transparent 70%)" }} />

                                    <div className="relative z-10 flex flex-col items-center text-center">
                                        {/* 3D Icon illustration with animated floating & glow */}
                                        <div className="w-24 h-24 sm:w-28 sm:h-28 mb-4 relative flex items-center justify-center">
                                            <div className="absolute inset-0 rounded-full blur-xl opacity-25" style={{ backgroundColor: "var(--t-accent)" }} />
                                            <div className="w-full h-full relative z-10 filter drop-shadow-lg">
                                                {pillar.icon}
                                            </div>
                                        </div>

                                        {/* Pillar Badge */}
                                        <span className="inline-block text-[11px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border mb-3"
                                            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                            Pillar 0{i + 1} of 05
                                        </span>

                                        {/* Description */}
                                        <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: "var(--t-text)" }}>
                                            {pillar.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. COMPARISON SECTION (Two Structured Pillars) */}
            <section className="py-14 sm:py-20 lg:py-28 relative overflow-clip border-b"
                style={{ backgroundColor: "var(--t-bg)", borderColor: "var(--t-border)" }}>
                <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-md border text-xs font-semibold tracking-wider uppercase"
                                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--t-accent)" }} />
                                Model Comparison
                            </div>
                            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-3 sm:mb-4" style={{ color: "var(--t-text)" }}>
                                How we{" "}
                                <span className="italic" style={{ color: "var(--t-accent)" }}>differ.</span>
                            </h2>
                            <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                                A fundamentally different approach to technology engagements and accountability.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 relative items-stretch">

                        {/* Left Column - Typical Vendor */}
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }}
                            className="rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden border transition-all duration-300 hover:shadow-md"
                            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>

                            <div>
                                <div className="flex items-center gap-3 mb-6 sm:mb-8 pb-4 border-b" style={{ borderColor: "var(--t-border)" }}>
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center border opacity-60"
                                        style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-text-muted)" }}>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                    </div>
                                    <h3 className="font-display text-lg sm:text-2xl font-bold" style={{ color: "var(--t-text-muted)" }}>
                                        A typical vendor
                                    </h3>
                                </div>

                                <div className="space-y-5 sm:space-y-6">
                                    {comparisons.map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <div className="w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 opacity-50"
                                                style={{ borderColor: "var(--t-border)", backgroundColor: "var(--t-bg-card)", color: "var(--t-text-muted)" }}>
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                            </div>
                                            <span className="text-sm sm:text-base leading-relaxed opacity-75" style={{ color: "var(--t-text-muted)" }}>
                                                {item.vendor}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Mobile "VS" Divider between the two comparison cards */}
                        <div className="flex lg:hidden items-center justify-center my-1 relative z-20">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full h-px" style={{ backgroundColor: "var(--t-border)" }} />
                            </div>
                            <div className="relative w-11 h-11 rounded-xl border flex items-center justify-center font-mono font-black text-xs shadow-md"
                                style={{
                                    backgroundColor: "var(--t-bg-card)",
                                    borderColor: "var(--t-border)",
                                    color: "var(--t-accent)"
                                }}>
                                VS
                            </div>
                        </div>

                        {/* Right Column - SVaaN Global Tech */}
                        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }}
                            className="rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden border-2 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 lg:-translate-y-4"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-accent)" }}>

                            {/* Glowing orb background */}
                            <div className="absolute top-0 right-0 w-[350px] h-[350px] rounded-full blur-[110px] opacity-20 pointer-events-none"
                                style={{ backgroundColor: "var(--t-accent)" }} />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6 sm:mb-8 pb-4 border-b" style={{ borderColor: "var(--t-border)" }}>
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm"
                                        style={{ backgroundColor: "var(--t-accent)", color: "#fff" }}>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <h3 className="font-display text-lg sm:text-2xl font-bold flex items-center gap-2.5" style={{ color: "var(--t-text)" }}>
                                        SVaaN Global Tech
                                    </h3>
                                </div>

                                <div className="space-y-5 sm:space-y-6">
                                    {comparisons.map((item, i) => (
                                        <div key={i} className="flex gap-4 items-start">
                                            <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 shadow-sm"
                                                style={{ backgroundColor: "var(--t-accent)", color: "#fff" }}>
                                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <span className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: "var(--t-text)" }}>
                                                {item.svaan}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating "VS" badge */}
                        <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, type: "spring" }}
                            className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 items-center justify-center rounded-2xl border-4 font-mono font-black text-sm sm:text-base shadow-xl backdrop-blur-md"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-bg)", color: "var(--t-accent)", zIndex: 20 }}>
                            VS
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* 4. CALL TO ACTION */}
            <section className="py-16 sm:py-24 lg:py-32 relative overflow-clip border-t text-center"
                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[200px] pointer-events-none"
                    style={{ backgroundColor: "var(--t-accent)", opacity: "calc(var(--t-orb-opacity) * 0.9)" }} />

                <div className="max-w-[800px] mx-auto px-4 sm:px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-md border text-xs font-semibold tracking-wider uppercase"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--t-accent)" }} />
                            Next Steps
                        </div>
                        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4 sm:mb-6" style={{ color: "var(--t-text)" }}>
                            See how an engagement{" "}
                            <span className="italic" style={{ color: "var(--t-accent)" }}>works.</span>
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg max-w-lg mx-auto mb-8 sm:mb-10 leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                            Explore our staged delivery process, or discuss your technology challenge directly with our engineering team.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button href="/approach" size="lg" className="w-full sm:w-auto group">
                                Our approach
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Button>
                            <Button href="/contact" variant="outline" size="lg" className="w-full sm:w-auto group">
                                Discuss your challenge
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

        </main>
    );
}
