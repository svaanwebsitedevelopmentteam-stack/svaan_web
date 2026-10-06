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
        desc: "Launch is the moment real use begins. We keep supporting, fixing and improving what we build.",
        icon: <Icons3D.Support />
    },
    {
        title: "We work from the business problem.",
        desc: "A requirement is often the start of a conversation, not the end of one. We ask why before we decide what to build.",
        icon: <Icons3D.Strategy />
    },
    {
        title: "One partner from build to operation.",
        desc: "You do not need a new vendor at every stage, or a handover that loses what the last team knew.",
        icon: <Icons3D.Software />
    },
    {
        title: "Long-term relationships over one-off delivery.",
        desc: "SVaaN began in 2021 with a single US application-support engagement and now works with clients in the US, UAE, UK and Canada.",
        icon: <Icons3D.Database />
    },
    {
        title: "Engineering depth with a business-first view.",
        desc: "Our engineers build the systems. Our leadership looks at how the whole business runs, including people, process, customers and decisions.",
        icon: <Icons3D.Cloud />
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
        <main className="min-h-screen" style={{ backgroundColor: "var(--t-bg)" }}>

            {/* 1. HERO SECTION (Identical to Solutions style) */}
            <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden py-24 border-b" style={{ borderColor: "var(--t-border)" }}>
                {/* Animated Grid Background */}
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                     style={{
                         backgroundImage: 'linear-gradient(to right, var(--t-border) 1px, transparent 1px), linear-gradient(to bottom, var(--t-border) 1px, transparent 1px)',
                         backgroundSize: '4rem 4rem',
                         maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 10%, transparent 100%)'
                     }}
                />

                {/* Floating Glows */}
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-20 animate-pulse" style={{ backgroundColor: "var(--t-accent)" }} />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10" style={{ backgroundColor: "var(--t-text)" }} />

                <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10 w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

                    {/* Left Content */}
                    <div className="relative">
                        {/* Decorative line */}
                        <div className="hidden lg:block absolute -left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--t-accent)] to-transparent opacity-30" />

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-[var(--t-radius-md)] text-xs font-bold uppercase tracking-widest border"
                                style={{ backgroundColor: "var(--t-bg-card)", color: "var(--t-accent)", borderColor: "var(--t-border)" }}>
                                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--t-accent)" }} />
                                Why SVaaN
                            </span>
                        </motion.div>

                        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                            className="type-display mb-8" style={{ color: "var(--t-text)" }}>
                            A technology partner that stays <span className="italic relative whitespace-nowrap">
                                <span className="relative z-10" style={{ color: "var(--t-accent)" }}>after go-live.</span>
                                <svg className="absolute w-full h-3 -bottom-1 left-0 z-0 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="var(--t-accent)" strokeWidth="4" fill="none" strokeLinecap="round"/></svg>
                            </span>
                        </motion.h1>

                        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                            className="type-body-lg max-w-2xl mb-12" style={{ color: "var(--t-text-muted)" }}>
                            Many technology vendors finish when the software launches. SVaaN does not. We build it, run it and keep improving it, so the people who understand your system are the same people who support it.
                        </motion.p>
                    </div>

                    {/* Right Content: Floating Icon */}
                    <motion.div initial={{ opacity: 0, scale: 0.8, rotateY: -15 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ duration: 1, delay: 0.3 }}
                        className="relative flex justify-center lg:justify-end">

                        <div className="relative w-full max-w-[450px] aspect-square rounded-[var(--t-radius-md)] p-10 flex items-center justify-center transform-gpu">

                            {/* Rotating ring behind icon */}
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-8 rounded-full border border-dashed opacity-30 pointer-events-none"
                                style={{ borderColor: "var(--t-accent)" }} />

                            <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                                <Icons3D.Strategy className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] relative z-10 filter drop-shadow-2xl" />
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* 2. PILLARS (Interactive Tab Showcase) */}
            <section className="py-32 relative" style={{ backgroundColor: "var(--t-bg-surface)", borderTop: "1px solid var(--t-border)" }}>
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                    <div className="text-center mb-20">
                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="type-display mb-6" style={{ color: "var(--t-text)" }}>Why businesses choose SVaaN</motion.h2>
                        <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start">
                        {/* Left Sidebar (Scrollable Items) */}
                        <div className="w-full lg:w-1/2 flex flex-col pb-[30vh]">
                            {pillars.map((pillar, i) => (
                                <motion.div
                                    key={i}
                                    onViewportEnter={() => setActiveIndex(i)}
                                    viewport={{ margin: "-45% 0px -45% 0px" }}
                                    className={`relative flex flex-col justify-center min-h-[40vh] transition-all duration-700 ${activeIndex === i ? 'opacity-100 scale-100' : 'opacity-30 scale-95'}`}
                                >
                                    <span className="type-display mb-6" style={{ color: "var(--t-accent)" }}>0{i+1}</span>
                                    <h3 className="type-h2" style={{ color: "var(--t-text)" }}>{pillar.title}</h3>
                                </motion.div>
                            ))}
                        </div>

                        {/* Right Content (Sticky) */}
                        <div className="w-full lg:w-1/2 sticky top-32 h-fit py-10 hidden lg:flex items-center justify-center">
                            <div className="relative w-full aspect-square xl:aspect-[4/3] rounded-[var(--t-radius-md)] overflow-hidden p-10 md:p-16 flex items-center justify-center text-center transition-all duration-500"
                                 style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}>

                                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle at center, var(--t-accent) 0%, transparent 70%)" }} />

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                                        transition={{ duration: 0.4 }}
                                        className="relative z-10 flex flex-col items-center justify-center w-full h-full"
                                    >
                                        <div className="w-40 h-40 xl:w-48 xl:h-48 mb-10 mix-blend-luminosity opacity-90 scale-125">
                                            {pillars[activeIndex].icon}
                                        </div>
                                        <p className="type-body-lg" style={{ color: "var(--t-text)" }}>
                                            {pillars[activeIndex].desc}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Mobile Fallback: Just show the square below the titles */}
                        <div className="w-full lg:hidden sticky top-24 z-10 mb-20">
                            <div className="relative w-full aspect-square rounded-[var(--t-radius-md)] overflow-hidden p-8 flex items-center justify-center text-center transition-all duration-500"
                                 style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}>
                                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle at center, var(--t-accent) 0%, transparent 70%)" }} />
                                <AnimatePresence mode="wait">
                                    <motion.div key={activeIndex} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.1 }} transition={{ duration: 0.3 }} className="relative z-10 flex flex-col items-center justify-center">
                                        <div className="w-24 h-24 mb-6 opacity-90 scale-125 mix-blend-luminosity">
                                            {pillars[activeIndex].icon}
                                        </div>
                                        <p className="type-body-lg" style={{ color: "var(--t-text)" }}>
                                            {pillars[activeIndex].desc}
                                        </p>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. COMPARISON SECTION (Two Massive Pillars) */}
            <section className="py-40 relative overflow-hidden" style={{ borderTop: "1px solid var(--t-border)", backgroundColor: "var(--t-bg)" }}>
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
                    <div className="text-center mb-24">
                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="type-display mb-6" style={{ color: "var(--t-text)" }}>How we differ</motion.h2>
                        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="type-h3" style={{ color: "var(--t-text-muted)" }}>A radically different approach to technology engagements.</motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative">

                        {/* Left Column - Typical Vendor */}
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                            className="rounded-[var(--t-radius-md)] p-10 md:p-14 flex flex-col gap-10 relative overflow-hidden"
                            style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", opacity: 0.7 }}>

                            <h3 className="type-h2" style={{ color: "var(--t-text-muted)" }}>A typical vendor</h3>

                            <div className="space-y-8">
                                {comparisons.map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 opacity-50" style={{ borderColor: "var(--t-text-muted)" }}>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                        </div>
                                        <span className="type-body-lg" style={{ color: "var(--t-text-muted)" }}>{item.vendor}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Column - SVaaN Global Tech */}
                        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                            className="rounded-[var(--t-radius-md)] p-10 md:p-14 flex flex-col gap-10 relative overflow-hidden lg:-translate-y-8"
                            style={{ backgroundColor: "var(--t-bg-card)", border: "2px solid var(--t-accent)" }}>

                            {/* Glowing orb background */}
                            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 pointer-events-none" style={{ backgroundColor: "var(--t-accent)" }} />

                            <h3 className="type-h2" style={{ color: "var(--t-text)" }}>
                                <span className="w-4 h-4 rounded-full animate-pulse" style={{ backgroundColor: "var(--t-accent)", boxShadow: "0 0 20px var(--t-accent)" }} />
                                SVaaN Global Tech
                            </h3>

                            <div className="space-y-8 relative z-10">
                                {comparisons.map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1" style={{ backgroundColor: "var(--t-accent)" }}>
                                            <svg className="w-5 h-5 text-white dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="type-body-lg" style={{ color: "var(--t-text)" }}>{item.svaan}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Floating "VS" badge */}
                        <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, type: "spring" }}
                            className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 items-center justify-center rounded-[var(--t-radius-md)] border-8 type-h2 shadow-sm"
                            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-bg)", color: "var(--t-text-muted)", zIndex: 10 }}>
                            VS
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* CALL TO ACTION */}
            <section className="py-32 text-center" style={{ backgroundColor: "var(--t-bg-surface)", borderTop: "1px solid var(--t-border)" }}>
                <div className="max-w-[800px] mx-auto px-6">
                    <h2 className="type-display mb-6" style={{ color: "var(--t-text)" }}>See how an engagement works.</h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button href="/approach" size="lg">
                            Our approach
                        </Button>
                        <Button href="/contact" variant="outline" size="lg">
                            Discuss your challenge
                        </Button>
                    </div>
                </div>
            </section>

        </main>
    );
}
