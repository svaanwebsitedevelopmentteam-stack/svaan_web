"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Icons3D } from "@/components/ui/Icons3D";
import { TechStack } from "@/components/TechStack";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SignalsSection, type SignalItem } from "@/components/SignalsSection";
import { HowWeWorkSection, type StepItem } from "@/components/HowWeWorkSection";

/* ────────────────────────────────────────────────────────────
   1. HERO SECTION
   ──────────────────────────────────────────────────────────── */
function BuildHero() {
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
                        Build software around a real{" "}
                        <span className="italic" style={{ color: "var(--t-accent)" }}>business need.</span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-base sm:text-lg lg:text-xl max-w-2xl mb-8 sm:mb-10 leading-relaxed"
                        style={{ color: "var(--t-text-muted)" }}>
                        SVaaN designs and builds new software, from a first proof of concept to enterprise systems and AI-enabled products. We start with the problem the business needs solved, then choose the technology.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap items-center gap-3 sm:gap-4">
                        <div className="flex items-center gap-3 px-4 sm:px-5 py-3 rounded-xl border transition-all duration-300 hover:border-[var(--t-accent)] hover:shadow-sm"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border"
                                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <span className="font-semibold text-xs sm:text-sm tracking-wide uppercase" style={{ color: "var(--t-text)" }}>Enterprise Scale</span>
                        </div>
                        <div className="flex items-center gap-3 px-4 sm:px-5 py-3 rounded-xl border transition-all duration-300 hover:border-[var(--t-accent)] hover:shadow-sm"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border"
                                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <span className="font-semibold text-xs sm:text-sm tracking-wide uppercase" style={{ color: "var(--t-text)" }}>AI-Enabled</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Content: Hero Graphic */}
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center lg:justify-end">
                    <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-square rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/Build/hero/hero.webp"
                            alt="Build Software"
                            fill
                            priority
                            sizes="(max-width: 640px) 340px, 420px"
                            className="object-cover rounded-2xl sm:rounded-3xl"
                        />
                    </motion.div>
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
                            Software must solve a real need.
                        </h2>
                    </div>

                    <div className="md:w-7/12 border-t md:border-t-0 md:border-l pt-5 md:pt-0 md:pl-10 text-sm sm:text-base lg:text-lg leading-relaxed"
                        style={{ borderColor: "var(--t-border)", color: "var(--t-text-muted)" }}>
                        <p>
                            Many projects start with a long feature list and no clear first release. The result is software that takes too long, costs too much and misses the real need. New software is only worth building if it solves something specific.
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
    { title: "Custom software", desc: "Software shaped around how your business works, not a generic package.", icon: "/Build/Scope & Deliverables/1. Custom software.svg" },
    { title: "Product engineering", desc: "Taking a product from idea to a working, maintainable release.", icon: "/Build/Scope & Deliverables/2. Product engineering.svg" },
    { title: "MVP development", desc: "A first version real users can try, so you learn before you invest more.", icon: "/Build/Scope & Deliverables/3. MVP development.svg" },
    { title: "POC development", desc: "Test whether an idea works before you commit to a full build.", icon: "/Build/Scope & Deliverables/4. POC development.svg" },
    { title: "Enterprise software", desc: "Systems for complex operations with many users, roles and integrations.", icon: "/Build/Scope & Deliverables/5. Enterprise software.svg" },
    { title: "Web and mobile apps", desc: "Applications your customers and teams use every day.", icon: "/Build/Scope & Deliverables/6. Web and mobile apps.svg" },
    { title: "AI software", desc: "AI features that solve a defined business problem, such as workflow automation or decision support.", icon: "/Build/Scope & Deliverables/7. AI software.svg" },
    { title: "Systems integration", desc: "Connect new software to the systems you already use.", icon: "/Build/Scope & Deliverables/8. Systems integration.svg" }
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
                            End-to-end engineering and strategic capability tailored to your business outcomes.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {services.map((s, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.05 }}
                            className="p-6 sm:p-7 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group flex flex-col justify-between"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>
                            <div>
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 border"
                                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                    {typeof s.icon === "string" ? (
                                        <Image src={s.icon} alt={s.title} width={28} height={28} className="w-7 h-7 object-contain" />
                                    ) : (
                                        s.icon
                                    )}
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
const buildSignals: SignalItem[] = [
    {
        tag: "Validation Phase",
        text: "You have an idea and want to test it before committing large capital.",
        icon: "/Build/Signals & Triggers/1. You have an idea and want to test it before committing large capital..svg"
    },
    {
        tag: "Operational Ceiling",
        text: "Spreadsheets and manual processes are bottlenecking the business.",
        icon: "/Build/Signals & Triggers/2. Spreadsheets and manual processes are bottlenecking the business..svg"
    },
    {
        tag: "Off-the-Shelf Mismatch",
        text: "The tools you can buy off the shelf do not fit the way you work.",
        icon: "/Build/Signals & Triggers/3. The tools you can buy off the shelf do not fit the way you work..svg"
    },
    {
        tag: "AI Integration",
        text: "You want to add purposeful AI to a product with a clear high-value use case.",
        icon: "/Build/Signals & Triggers/4. You want to add purposeful AI to a product with a clear high-value use case..svg"
    },
    {
        tag: "Continuous Velocity",
        text: "Your engineering throughput cannot keep pace with accelerating business demand.",
        icon: "/Build/Signals & Triggers/5. Your engineering throughput cannot keep pace with accelerating business demand..svg"
    },
    {
        tag: "Throughput Limit",
        text: "Your current architecture struggles to handle enterprise concurrency and scale.",
        icon: "/Build/Signals & Triggers/6. Your current architecture struggles to handle enterprise concurrency and scale..svg"
    }
];

function WhenYouNeedIt() {
    return (
        <SignalsSection
            subtitle="Clear business indicators that it is time to engineer tailored software."
            signals={buildSignals}
        />
    );
}

/* ────────────────────────────────────────────────────────────
   5. FAQ SECTION
   ──────────────────────────────────────────────────────────── */
const faqs = [
    { q: "How do we start?", a: "With a conversation about the problem. We then agree the scope of a first release before any build begins." },
    { q: "Can we start small?", a: "Yes. A proof of concept or MVP is often the right first step because it tests the idea before the larger investment." },
    { q: "Who owns the software?", a: "You do. We build custom software as work-for-hire, so the intellectual property belongs to your business." },
    { q: "Will you support it after launch?", a: "Yes, if you want us to. Our Operate service covers application, production and infrastructure support." }
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
                        Everything you need to know about our Build process.
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
                    Start A Project
                </div>
                <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6" style={{ color: "var(--t-text)" }}>
                    Tell us what you want to{" "}
                    <span className="italic" style={{ color: "var(--t-accent)" }}>build.</span>
                </h2>
                <p className="text-sm sm:text-base lg:text-lg mb-8 leading-relaxed max-w-xl mx-auto" style={{ color: "var(--t-text-muted)" }}>
                    Schedule a conversation with our technical architects to explore scope, feasibility and timelines.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2.5 h-12 sm:h-14 px-7 sm:px-9 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
                    style={{ backgroundColor: "var(--t-btn-bg)", color: "var(--t-btn-text)" }}>
                    <span>Discuss your build</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </section>
    );
}

const buildWorkSteps: StepItem[] = [
    {
        num: "01",
        title: "Understand",
        tag: "Discovery & Validation",
        desc: "Deconstruct business objectives, interview stakeholders, and validate technical feasibility.",
    },
    {
        num: "02",
        title: "Decide",
        tag: "Architecture & Roadmap",
        desc: "Define target architecture, data models, API contracts, security standards, and milestones.",
    },
    {
        num: "03",
        title: "Build",
        tag: "Engineering & QA",
        desc: "Sprint-based software development with automated testing, CI/CD pipelines, and rigorous QA.",
    },
    {
        num: "04",
        title: "Run",
        tag: "Production Deployment",
        desc: "Secure cloud orchestration, telemetry observability, and zero-downtime production release.",
    },
    {
        num: "05",
        title: "Improve",
        tag: "Continuous Evolution",
        desc: "Data-backed iterative enhancements, performance scaling, and ongoing feature delivery.",
    },
];

export default function BuildPage() {
    return (
        <main className="w-full min-h-screen" style={{ backgroundColor: "var(--t-bg)" }}>
            <BuildHero />
            <TheProblem />
            <WhatWeDo />
            <WhenYouNeedIt />
            <HowWeWorkSection
                badge="Delivery Methodology"
                title="How we build custom"
                italicTitle="software."
                description="Every build engagement follows our disciplined 5-stage lifecycle from problem framing to production scale."
                steps={buildWorkSteps}
            />
            <TechStack />
            <FAQ />
            <CTA />
        </main>
    );
}
