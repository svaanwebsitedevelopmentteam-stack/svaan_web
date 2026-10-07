"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icons3D } from "@/components/ui/Icons3D";
import { TechStack } from "@/components/TechStack";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SignalsSection, type SignalItem } from "@/components/SignalsSection";

/* ────────────────────────────────────────────────────────────
   1. HERO SECTION
   ──────────────────────────────────────────────────────────── */
function EvolveHero() {
    return (
        <section className="relative min-h-[85vh] flex flex-col justify-center overflow-clip pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 border-b"
            style={{ borderColor: "var(--t-border)" }}>
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[300px] sm:h-[400px] rounded-full blur-[160px] pointer-events-none"
                style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }} />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 sm:gap-14 lg:gap-16 items-center">

                {/* Left Content */}
                <div className="relative">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-4 sm:mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border text-xs font-semibold tracking-wider uppercase"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--t-accent)" }} />
                            Solution Focus
                        </div>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-4 sm:mb-6"
                        style={{ color: "var(--t-text)" }}>
                        Keep improving{" "}
                        <span className="italic" style={{ color: "var(--t-accent)" }}>after launch.</span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-base sm:text-lg lg:text-xl max-w-2xl mb-8 sm:mb-10 leading-relaxed"
                        style={{ color: "var(--t-text-muted)" }}>
                        Business needs change. SVaaN helps you automate work, use AI where it has a clear purpose, and keep improving the technology you already run.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap items-center gap-3 sm:gap-4">
                        <div className="flex items-center gap-3 px-4 sm:px-5 py-3 rounded-xl border transition-all duration-300 hover:border-[var(--t-accent)] hover:shadow-sm"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border"
                                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <span className="font-semibold text-xs sm:text-sm tracking-wide uppercase" style={{ color: "var(--t-text)" }}>Continuous Value</span>
                        </div>
                        <div className="flex items-center gap-3 px-4 sm:px-5 py-3 rounded-xl border transition-all duration-300 hover:border-[var(--t-accent)] hover:shadow-sm"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border"
                                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <span className="font-semibold text-xs sm:text-sm tracking-wide uppercase" style={{ color: "var(--t-text)" }}>Automated Workflows</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Content: Floating 3D Icon */}
                <motion.div initial={{ opacity: 0, scale: 0.9, rotateY: -10 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ duration: 0.9, delay: 0.3 }}
                    className="relative flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-square rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex items-center justify-center transform-gpu border"
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
                            <div className="w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] flex items-center justify-center">
                                <Icons3D.AI className="w-full h-full relative z-10 filter drop-shadow-2xl" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   2. THE PROBLEM SECTION
   ──────────────────────────────────────────────────────────── */
function TheProblem() {
    return (
        <section className="py-14 sm:py-20 lg:py-24 relative overflow-clip border-b"
            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
            <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-10">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}
                    className="p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-10 border relative overflow-hidden shadow-lg transition-all duration-300"
                    style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>

                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[var(--t-accent)] to-transparent" />

                    <div className="shrink-0 md:w-5/12">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-md border text-xs font-semibold tracking-wider uppercase"
                            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                            The Problem
                        </div>
                        <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight leading-snug" style={{ color: "var(--t-text)" }}>
                            Many systems are left alone after launch.
                        </h2>
                    </div>

                    <div className="md:w-7/12 border-t md:border-t-0 md:border-l pt-5 md:pt-0 md:pl-10 text-sm sm:text-base lg:text-lg leading-relaxed"
                        style={{ borderColor: "var(--t-border)", color: "var(--t-text-muted)" }}>
                        <p>
                            Manual steps stay. Data goes unused. The roadmap is a list nobody owns. Business needs change, but technology stays fixed in time without continuous enhancement.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   3. WHAT WE DO (Services Grid)
   ──────────────────────────────────────────────────────────── */
const services = [
    { title: "AI and automation", desc: "Apply AI to defined business tasks, from document handling to decision support.", icon: <Icons3D.AI className="w-full h-full" /> },
    { title: "Workflow automation", desc: "Replace repeated manual steps with automated ones.", icon: <Icons3D.ProcessShape className="w-full h-full" /> },
    { title: "Product enhancement", desc: "Add features and fix friction in products already live.", icon: <Icons3D.Software className="w-full h-full" /> },
    { title: "Operational optimization", desc: "Find and remove waste in how technology supports operations.", icon: <Icons3D.Strategy className="w-full h-full" /> },
    { title: "Analytics & decision support", desc: "Turn your data into reports people can act on.", icon: <Icons3D.ProcessDiscover className="w-full h-full" /> },
    { title: "Technology roadmaps", desc: "A clear plan for what to improve next and why.", icon: <Icons3D.ProcessBuild className="w-full h-full" /> }
];

function WhatWeDo() {
    return (
        <section className="py-14 sm:py-20 lg:py-28 relative overflow-clip border-b"
            style={{ backgroundColor: "var(--t-bg)", borderColor: "var(--t-border)" }}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-md border text-xs font-semibold tracking-wider uppercase"
                            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                            Scope & Deliverables
                        </div>
                        <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-3 sm:mb-4" style={{ color: "var(--t-text)" }}>
                            What we <span className="italic" style={{ color: "var(--t-accent)" }}>deliver.</span>
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                            Ongoing evolution, intelligent automation and roadmap acceleration for modern products.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {services.map((s, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.05 }}
                            className="p-6 sm:p-7 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group flex flex-col justify-between"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>
                            <div>
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 border [&>svg]:w-7 [&>svg]:h-7"
                                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                    {s.icon}
                                </div>
                                <h3 className="font-display text-base sm:text-lg font-bold mb-2 group-hover:text-[var(--t-accent)] transition-colors duration-200 leading-snug"
                                    style={{ color: "var(--t-text)" }}>
                                    {s.title}
                                </h3>
                                <p className="text-xs sm:text-sm leading-relaxed opacity-75" style={{ color: "var(--t-text-muted)" }}>
                                    {s.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   4. WHEN YOU NEED IT (Triggers)
   ──────────────────────────────────────────────────────────── */
const evolveSignals: SignalItem[] = [
    { tag: "Automation Deficit", text: "Your staff spend valuable hours repeating the same manual tasks every single day." },
    { tag: "Data Fragmentation", text: "Executive reports are assembled manually by cross-referencing disjointed tools." },
    { tag: "Applied AI Strategy", text: "You want to adopt AI capabilities but need clear direction on where it fits practically." },
    { tag: "Continuous Velocity", text: "Your product needs a steady cadence of incremental enhancements, not monolithic releases." },
    { tag: "Strategic Roadmap", text: "You need an actionable, engineering-aligned transformation roadmap your leadership team can execute on." },
    { tag: "Operational Ceiling", text: "Spreadsheets and patchwork tools are holding back leadership decision-making." }
];

function WhenYouNeedIt() {
    return (
        <SignalsSection
            subtitle="Common operational indicators that your technology and workflows need structured evolution."
            signals={evolveSignals}
        />
    );
}

/* ────────────────────────────────────────────────────────────
   5. FAQ SECTION
   ──────────────────────────────────────────────────────────── */
const faqs = [
    { q: "Where should we start with AI?", a: "With one process where you can name the time or errors involved. We test small before we expand." },
    { q: "Do you need our data?", a: "Often yes. We first review what data exists, where it sits and who can access it." },
    { q: "How do you measure results?", a: "We agree the measure before work starts, such as hours saved or errors reduced." },
    { q: "Can you improve a system you did not build?", a: "Yes, after a structured current-state architectural review." }
];

function FAQ() {
    return (
        <section className="py-14 sm:py-20 lg:py-28 relative overflow-clip border-b"
            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
            <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="text-center mb-10 sm:mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-md border text-xs font-semibold tracking-wider uppercase"
                        style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                        FAQ
                    </div>
                    <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-3" style={{ color: "var(--t-text)" }}>
                        Frequently asked <span className="italic" style={{ color: "var(--t-accent)" }}>questions.</span>
                    </h2>
                    <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                        Everything you need to know about our Evolve process.
                    </p>
                </div>
                <FAQAccordion faqs={faqs} />
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   6. CTA SECTION
   ──────────────────────────────────────────────────────────── */
function CTA() {
    return (
        <section className="py-16 sm:py-24 lg:py-32 relative overflow-clip text-center"
            style={{ backgroundColor: "var(--t-bg)", borderColor: "var(--t-border)" }}>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[300px] sm:h-[400px] rounded-full blur-[180px] pointer-events-none"
                style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }} />
            <div className="max-w-[800px] mx-auto px-4 sm:px-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-md border text-xs font-semibold tracking-wider uppercase"
                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                    Optimize & Evolve
                </div>
                <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6" style={{ color: "var(--t-text)" }}>
                    Tell us where your team{" "}
                    <span className="italic" style={{ color: "var(--t-accent)" }}>loses time.</span>
                </h2>
                <p className="text-sm sm:text-base lg:text-lg mb-8 leading-relaxed max-w-xl mx-auto" style={{ color: "var(--t-text-muted)" }}>
                    Discover how automated workflows and targeted AI can eliminate repetitive friction from your business.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2.5 h-12 sm:h-14 px-7 sm:px-9 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
                    style={{ backgroundColor: "var(--t-btn-bg)", color: "var(--t-btn-text)" }}>
                    <span>Discuss your challenge</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </section>
    );
}

export default function EvolvePage() {
    return (
        <main className="w-full min-h-screen" style={{ backgroundColor: "var(--t-bg)" }}>
            <EvolveHero />
            <TheProblem />
            <WhatWeDo />
            <WhenYouNeedIt />
            <TechStack />
            <FAQ />
            <CTA />
        </main>
    );
}
