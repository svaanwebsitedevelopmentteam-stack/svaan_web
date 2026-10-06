"use client";

import React from "react";
import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";

const leaders = [
    {
        name: "Dinesh Natarajan",
        role: "Founder",
        image: "/dinesh.webp",
        bio: [
            "Dinesh Natarajan founded SVaaN Global Tech with a focus on building a technology partner that remains accountable beyond go-live. With 17+ years of experience across network engineering, systems, IT service management, project management, technical support, and DevOps, he has worked across the technology lifecycle from infrastructure and operations to software delivery and support.",
            "SVaaN began with a single US application-support engagement in 2021 and has grown to a 60+ person team serving clients across the US, UAE, UK, and Canada. Dinesh's experience has shaped SVaaN's emphasis on application and helpdesk support, custom software development, AI integration, POC and MVP development, DevOps, and cloud-managed services.",
            "His approach is grounded in a simple principle: technology should not stop being owned when it goes live. SVaaN's role is to support, optimize, and scale the systems businesses depend on."
        ],
        linkedin: "https://www.linkedin.com/in/dineshnatarajan-"
    },
    {
        name: "Sai Ramamurthy",
        role: "Chief Executive Officer",
        image: "/Sai.jpg",
        bio: [
            "Sai Ramamurthy leads SVaaN Global Tech with a focus on business transformation, organizational design, and building systems that allow businesses to evolve beyond founder dependency. His approach begins with understanding the patterns, misalignments, and dependencies within a business before deciding what should be systemized, automated, or made autonomous.",
            "Before joining SVaaN as CEO, Sai built experience across business development, market analysis, financial planning, partner management, and organizational growth. He also founded NO TOXIC®, where he continues to focus on building systems around a clear set of principles.",
            "At SVaaN, Sai brings a business-first perspective to how strategy, technology, and organizational design come together."
        ],
        linkedin: "https://www.linkedin.com/in/sairamamurthy"
    },
];

export default function LeadershipPage() {
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
                            Executive Leadership
                        </div>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-4 sm:mb-6 max-w-4xl"
                        style={{ color: "var(--t-text)" }}>
                        Meet the people responsible for shaping SVaaN&apos;s{" "}
                        <span className="italic" style={{ color: "var(--t-accent)" }}>direction.</span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed"
                        style={{ color: "var(--t-text-muted)" }}>
                        Leadership grounded in engineering depth, hands-on operational ownership, and business-first strategy.
                    </motion.p>
                </div>
            </section>

            {/* 2. LEADERS SECTION (Exact 12-column layout preserved, restyled for premium aesthetics and mobile responsiveness) */}
            <section className="py-14 sm:py-20 lg:py-28 relative z-10">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="flex flex-col gap-16 sm:gap-24 lg:gap-32">
                        {leaders.map((leader, index) => (
                            <div
                                key={leader.name}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-start border-t first:border-t-0 pt-12 sm:pt-16 first:pt-0"
                                style={{ borderColor: "var(--t-border)" }}
                            >
                                {/* Left Col - Photo & Name (Sticky on desktop, clean full-width centered on mobile) */}
                                <motion.div
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.6 }}
                                    className="lg:col-span-4 lg:sticky lg:top-32"
                                >
                                    <div
                                        className="aspect-[4/5] max-w-[320px] sm:max-w-[380px] lg:max-w-none mx-auto lg:mx-0 rounded-2xl sm:rounded-3xl overflow-hidden mb-6 sm:mb-8 relative border shadow-lg group transition-all duration-300"
                                        style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}
                                    >
                                        <img
                                            src={leader.image}
                                            alt={leader.name}
                                            className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                    </div>

                                    <div className="text-center lg:text-left">
                                        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2" style={{ color: "var(--t-text)" }}>
                                            {leader.name}
                                        </h2>
                                        <div className="inline-block px-3 py-1 rounded-lg text-xs sm:text-sm font-semibold tracking-wide uppercase border mb-6"
                                            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                            {leader.role}
                                        </div>

                                        <div>
                                            <a
                                                href={leader.linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-300 hover:border-[var(--t-accent)] hover:shadow-sm group/link"
                                                style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-text)" }}
                                                aria-label={`${leader.name} LinkedIn Profile`}
                                            >
                                                <svg className="w-4 h-4" style={{ color: "var(--t-accent)" }} fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
                                                </svg>
                                                <span>LinkedIn Profile</span>
                                                <svg className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Right Col - Bio Paragraphs */}
                                <motion.div
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.6, delay: 0.15 }}
                                    className="lg:col-span-8"
                                >
                                    <div className="space-y-6 sm:space-y-8">
                                        {leader.bio.map((para, i) => (
                                            <p
                                                key={i}
                                                className={`leading-relaxed ${
                                                    i === 0
                                                        ? "text-base sm:text-lg lg:text-xl font-medium"
                                                        : "text-sm sm:text-base lg:text-lg"
                                                }`}
                                                style={{ color: i === 0 ? "var(--t-text)" : "var(--t-text-muted)" }}
                                            >
                                                {para}
                                            </p>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CTA SECTION */}
            <CTASection />
        </main>
    );
}
