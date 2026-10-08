"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface Leader {
    name: string;
    role: string;
    image: string;
    linkedinLabel: string;
    linkedin: string;
    tagline?: string | null;
    bio: string[];
}

const leaders: Leader[] = [
    {
        name: "Dinesh Natarajan",
        role: "Founder, SVaaN Global Tech",
        image: "/dinesh.webp",
        linkedinLabel: "LinkedIn: Dinesh Natarajan",
        linkedin: "https://www.linkedin.com/in/dineshnatarajan-",
        tagline: null,
        bio: [
            "Dinesh Natarajan founded SVaaN Global Tech in 2021, bringing more than 17 years of experience in technology and IT operations. Over the years, he has worked across network engineering, systems, technical support, IT service management, project management, Scrum, and DevOps.",
            "His experience has shaped the way he thinks about technology. For him, the job doesn't end when a system is delivered. Someone still needs to be there when something breaks, when users need support, or when the business outgrows what was originally built.",
            "SVaaN began with a single application-support engagement in the US. Today, the company has a team of 60+ people working with businesses across the US, UAE, UK, and Canada. Much of that growth has come through client referrals and relationships built over time.",
            "Having worked across infrastructure, applications, cloud, software delivery, and DevOps, Dinesh has seen the challenges businesses face after implementation. His focus at SVaaN is to build a team that takes responsibility beyond delivery - supporting clients, solving problems as they come up, and helping their technology keep pace as the business grows."
        ]
    },
    {
        name: "Sai Ramamurthy",
        role: "Chief Executive Officer, SVaaN Global Tech",
        image: "/Sai.webp",
        linkedinLabel: "LinkedIn: Sai Ramamurthy",
        linkedin: "https://www.linkedin.com/in/sairamamurthy",
        tagline: "Helping businesses figure out what needs to change before deciding what technology they need.",
        bio: [
            "Sai Ramamurthy works with businesses on transformation, organizational structure, CRM, and the challenges that come with growth. At SVaaN, he spends a lot of time looking beyond the technology itself and trying to understand how the business actually works.",
            "He usually starts with questions. Where are the same problems showing up again and again? Which parts of the business are not working as they should? Is a process really necessary, or has it simply been done the same way for years? And how much of the business still depends on the founder being involved in everything?",
            "These questions help him identify where a business needs better processes, where work can be automated, and where technology can actually make a difference. The goal is not to add another system just because one is available, but to solve a problem that matters to the business.",
            "Before joining SVaaN as CEO, Sai worked across business development, financial planning, partner management, marketing, market analysis, and organizational growth. He is also the founder of NO TOXIC®, a business built around the belief that people and the planet should come before profit when the three come into conflict.",
            "At SVaaN, Sai works closely with the business side of technology decisions. His focus is on understanding how the organization works today, what is holding it back, and where technology can help it work better as it grows."
        ]
    }
];

export default function LeadershipPage() {
    return (
        <main className="w-full overflow-x-clip min-h-screen" style={{ backgroundColor: "var(--t-bg)" }}>
            {/* 1. HERO SECTION (FULL WIDTH) */}
            <section className="relative min-h-[50vh] lg:min-h-[58vh] flex flex-col justify-center overflow-clip pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 border-b w-full"
                style={{ borderColor: "var(--t-border)" }}>
                {/* Ambient Glow */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[350px] sm:h-[500px] rounded-full blur-[200px] pointer-events-none"
                    style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }} />

                <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-4 sm:mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border text-xs font-semibold tracking-wider uppercase"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--t-accent)" }} />
                            Leadership
                        </div>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.12] mb-8 sm:mb-10 w-full"
                        style={{ color: "var(--t-text)" }}>
                        The people shaping how SVaaN thinks, builds, and{" "}
                        <span className="italic" style={{ color: "var(--t-accent)" }}>grows.</span>
                    </motion.h1>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 pt-6 border-t w-full"
                        style={{ borderColor: "var(--t-border)" }}>
                        <div className="lg:col-span-7">
                            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed font-medium"
                                style={{ color: "var(--t-text)" }}>
                                SVaaN is built around a simple idea: technology works better when the people behind it understand the business, take ownership, and stay involved beyond the point of delivery.
                            </p>
                        </div>
                        <div className="lg:col-span-5 flex items-center">
                            <p className="text-sm sm:text-base lg:text-lg leading-relaxed pl-0 lg:pl-8 border-l-0 lg:border-l"
                                style={{ color: "var(--t-text-muted)", borderColor: "var(--t-border)" }}>
                                Our leadership brings together two complementary perspectives - deep technology and operational experience, and a business-first approach to transformation and growth.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. MEET OUR LEADERSHIP (GRID: LEFT = IMAGE & LINKEDIN, RIGHT = NAME, ROLE, CONTENT) */}
            <section className="py-14 sm:py-20 lg:py-28 relative z-10 border-b"
                style={{ borderColor: "var(--t-border)" }}>
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }}
                        className="mb-12 sm:mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-md border text-xs font-semibold tracking-wider uppercase"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                            Meet Our Leadership
                        </div>
                        <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
                            style={{ color: "var(--t-text)" }}>
                            Senior Ownership. <span className="italic" style={{ color: "var(--t-accent)" }}>Every Step.</span>
                        </h2>
                    </motion.div>

                    <div className="flex flex-col gap-16 sm:gap-24 lg:gap-32">
                        {leaders.map((leader) => (
                            <div
                                key={leader.name}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start border-t first:border-t-0 pt-12 sm:pt-16 first:pt-0"
                                style={{ borderColor: "var(--t-border)" }}
                            >
                                {/* LEFT SIDE: Headshot Image & LinkedIn */}
                                <motion.div
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.6 }}
                                    className="lg:col-span-4 lg:sticky lg:top-32"
                                >
                                    {/* Image container */}
                                    <div
                                        className="aspect-[4/5] max-w-[320px] sm:max-w-[360px] lg:max-w-none mx-auto lg:mx-0 rounded-2xl sm:rounded-3xl overflow-hidden relative border shadow-lg group transition-all duration-300"
                                        style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}
                                    >
                                        <Image
                                            src={leader.image}
                                            alt={leader.name}
                                            fill
                                            sizes="(max-width: 640px) 320px, (max-width: 1024px) 360px, 400px"
                                            loading="lazy"
                                            className="object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                        {/* LinkedIn Icon only - Top Right inside image */}
                                        <a
                                            href={leader.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center backdrop-blur-md shadow-md border transition-all duration-300 hover:scale-110 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] group/in"
                                            style={{
                                                backgroundColor: "var(--t-glass-bg)",
                                                borderColor: "var(--t-glass-border)",
                                                color: "#0A66C2"
                                            }}
                                            aria-label={leader.linkedinLabel}
                                        >
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover/in:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </motion.div>

                                {/* RIGHT SIDE: Name, Role, Content */}
                                <motion.div
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.6, delay: 0.15 }}
                                    className="lg:col-span-8"
                                >
                                    {/* Name */}
                                    <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-2.5"
                                        style={{ color: "var(--t-text)" }}>
                                        {leader.name}
                                    </h2>

                                    {/* Role Badge */}
                                    <div className="inline-block px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wide border mb-6"
                                        style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                        {leader.role}
                                    </div>

                                    {/* Content: Optional Tagline Banner */}
                                    {leader.tagline && (
                                        <div className="mb-6 p-5 sm:p-6 rounded-2xl border relative overflow-hidden"
                                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>
                                            <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: "var(--t-accent)" }} />
                                            <p className="font-display text-base sm:text-lg lg:text-xl font-bold leading-snug pl-2"
                                                style={{ color: "var(--t-accent)" }}>
                                                &ldquo;{leader.tagline}&rdquo;
                                            </p>
                                        </div>
                                    )}

                                    {/* Content: Bio Paragraphs */}
                                    <div className="space-y-5 sm:space-y-6">
                                        {leader.bio.map((para, i) => (
                                            <p
                                                key={i}
                                                className={`leading-relaxed ${i === 0
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

            {/* 3. TWO PERSPECTIVES. ONE DIRECTION. (REDESIGNED & ELEVATED ARCHITECTURAL LAYOUT) */}
            <section className="py-16 sm:py-24 lg:py-32 relative overflow-clip border-b"
                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
                {/* Background Ambient Radial Accent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] lg:w-[1000px] h-[400px] rounded-full blur-[220px] pointer-events-none"
                    style={{ backgroundColor: "var(--t-accent)", opacity: "calc(var(--t-orb-opacity) * 0.7)" }} />

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                    {/* Header */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3.5 rounded-md border text-xs font-semibold tracking-wider uppercase"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                            Two Perspectives. One Direction.
                        </div>
                        <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4"
                            style={{ color: "var(--t-text)" }}>
                            Technology needs{" "}
                            <span className="italic" style={{ color: "var(--t-accent)" }}>context.</span>
                        </h2>
                    </motion.div>

                    {/* Dual Comparative Engines */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-10 sm:mb-14">
                        {/* Dinesh Perspective Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.6 }}
                            className="p-8 sm:p-10 rounded-2xl sm:rounded-3xl border transition-all duration-300 hover:shadow-2xl hover:border-[var(--t-accent)] flex flex-col justify-between group relative overflow-hidden"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}
                        >
                            {/* Subtle Accent Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-500"
                                style={{ backgroundColor: "var(--t-accent)" }} />

                            <div>
                                <div className="flex items-center justify-between mb-6 pb-4 border-b"
                                    style={{ borderColor: "var(--t-border)" }}>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl font-mono text-xs font-bold flex items-center justify-center border shadow-xs"
                                            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                            DN
                                        </div>
                                        <div>
                                            <span className="text-xs font-mono font-bold uppercase tracking-wider block" style={{ color: "var(--t-text)" }}>
                                                Dinesh Natarajan
                                            </span>
                                            <span className="text-[11px] font-mono text-xs opacity-70" style={{ color: "var(--t-text-muted)" }}>
                                                Founder
                                            </span>
                                        </div>
                                    </div>
                                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border"
                                        style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                        Engineering & Ops
                                    </span>
                                </div>

                                <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 group-hover:text-[var(--t-accent)] transition-colors duration-200"
                                    style={{ color: "var(--t-text)" }}>
                                    Inside the Technology
                                </h3>

                                <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6" style={{ color: "var(--t-text-muted)" }}>
                                    Dinesh brings years of experience working inside technology - understanding infrastructure, applications, support, delivery, and the realities of keeping systems running.
                                </p>
                            </div>

                            <div className="pt-5 border-t flex flex-wrap gap-2"
                                style={{ borderColor: "var(--t-border)" }}>
                                <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md border"
                                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-text)" }}>
                                    ✓ Infrastructure & Cloud
                                </span>
                                <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md border"
                                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-text)" }}>
                                    ✓ 24/7 Service Support
                                </span>
                                <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md border"
                                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-text)" }}>
                                    ✓ Post-Implementation Ownership
                                </span>
                            </div>
                        </motion.div>

                        {/* Sai Perspective Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="p-8 sm:p-10 rounded-2xl sm:rounded-3xl border transition-all duration-300 hover:shadow-2xl hover:border-[var(--t-accent)] flex flex-col justify-between group relative overflow-hidden"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}
                        >
                            {/* Subtle Accent Glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-500"
                                style={{ backgroundColor: "var(--t-accent)" }} />

                            <div>
                                <div className="flex items-center justify-between mb-6 pb-4 border-b"
                                    style={{ borderColor: "var(--t-border)" }}>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl font-mono text-xs font-bold flex items-center justify-center border shadow-xs"
                                            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                            SR
                                        </div>
                                        <div>
                                            <span className="text-xs font-mono font-bold uppercase tracking-wider block" style={{ color: "var(--t-text)" }}>
                                                Sai Ramamurthy
                                            </span>
                                            <span className="text-[11px] font-mono text-xs opacity-70" style={{ color: "var(--t-text-muted)" }}>
                                                CEO
                                            </span>
                                        </div>
                                    </div>
                                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border"
                                        style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                        Transformation & Strategy
                                    </span>
                                </div>

                                <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 group-hover:text-[var(--t-accent)] transition-colors duration-200"
                                    style={{ color: "var(--t-text)" }}>
                                    Inside the Organization
                                </h3>

                                <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6" style={{ color: "var(--t-text-muted)" }}>
                                    Sai brings a business-first perspective - understanding how organizations make decisions, where dependency and friction build up, and what needs to change for a business to grow.
                                </p>
                            </div>

                            <div className="pt-5 border-t flex flex-wrap gap-2"
                                style={{ borderColor: "var(--t-border)" }}>
                                <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md border"
                                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-text)" }}>
                                    ✓ Root Diagnostic Questions
                                </span>
                                <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md border"
                                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-text)" }}>
                                    ✓ Founder-Dependency Removal
                                </span>
                                <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md border"
                                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-text)" }}>
                                    ✓ Business Architecture
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* REDESIGNED SYNTHESIS FLOW: Together, those perspectives shape how SVaaN approaches client work */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="p-8 sm:p-12 lg:p-14 rounded-2xl sm:rounded-3xl border shadow-xl relative overflow-hidden"
                        style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}
                    >
                        {/* Title Header */}
                        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                            <span className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-md border inline-block mb-3"
                                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                The SVaaN Synthesis
                            </span>
                            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
                                style={{ color: "var(--t-text)" }}>
                                Together, those perspectives shape how SVaaN approaches client work.
                            </h3>
                        </div>

                        {/* Three Connected Horizontal Steps */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
                            {/* Step 1 */}
                            <div className="p-6 sm:p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300 hover:border-[var(--t-accent)] hover:shadow-md group relative"
                                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
                                <div>
                                    <div className="flex items-center justify-between mb-5">
                                        <span className="w-10 h-10 rounded-xl font-mono text-sm font-bold flex items-center justify-center border transition-colors duration-300 group-hover:bg-[var(--t-accent)] group-hover:text-white"
                                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                            01
                                        </span>
                                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider opacity-60">
                                            Step 01
                                        </span>
                                    </div>
                                    <h4 className="font-display text-lg sm:text-xl font-bold mb-2 group-hover:text-[var(--t-accent)] transition-colors duration-200"
                                        style={{ color: "var(--t-text)" }}>
                                        Understand the business.
                                    </h4>
                                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                                        Identify the recurring problems, organizational dependencies, and what actually moves commercial growth before selecting tools.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="p-6 sm:p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300 hover:border-[var(--t-accent)] hover:shadow-md group relative"
                                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
                                <div>
                                    <div className="flex items-center justify-between mb-5">
                                        <span className="w-10 h-10 rounded-xl font-mono text-sm font-bold flex items-center justify-center border transition-colors duration-300 group-hover:bg-[var(--t-accent)] group-hover:text-white"
                                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                            02
                                        </span>
                                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider opacity-60">
                                            Step 02
                                        </span>
                                    </div>
                                    <h4 className="font-display text-lg sm:text-xl font-bold mb-2 group-hover:text-[var(--t-accent)] transition-colors duration-200"
                                        style={{ color: "var(--t-text)" }}>
                                        Understand the technology.
                                    </h4>
                                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                                        Evaluate systems, integration realities, data architecture, security, and the ongoing support structures needed over time.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="p-6 sm:p-8 rounded-2xl border flex flex-col justify-between transition-all duration-300 hover:border-[var(--t-accent)] hover:shadow-md group relative"
                                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
                                <div>
                                    <div className="flex items-center justify-between mb-5">
                                        <span className="w-10 h-10 rounded-xl font-mono text-sm font-bold flex items-center justify-center border transition-colors duration-300 group-hover:bg-[var(--t-accent)] group-hover:text-white"
                                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                            03
                                        </span>
                                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider opacity-60">
                                            Outcome
                                        </span>
                                    </div>
                                    <h4 className="font-display text-lg sm:text-xl font-bold mb-2 group-hover:text-[var(--t-accent)] transition-colors duration-200"
                                        style={{ color: "var(--t-accent)" }}>
                                        Then build what actually needs to exist.
                                    </h4>
                                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                                        Deliver lean, resilient software with hands-on post-launch ownership, ensuring technology and business remain permanently aligned.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 4. LEADERSHIP AT SVAAN (FINAL CTA SECTION) */}
            <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
                {/* Ambient Glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[200px] pointer-events-none"
                    style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }} />

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-md border text-xs font-semibold tracking-wider uppercase"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                            Leadership at SVaaN
                        </div>

                        <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6"
                            style={{ color: "var(--t-text)" }}>
                            Technology is only useful when it makes the{" "}
                            <span className="italic" style={{ color: "var(--t-accent)" }}>business better.</span>
                        </h2>

                        <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-6"
                            style={{ color: "var(--t-text-muted)" }}>
                            Our leadership team brings together technical depth and business understanding to help organizations make better technology decisions - and follow through on them.
                        </p>

                        <p className="text-sm sm:text-base font-medium mb-8"
                            style={{ color: "var(--t-text)" }}>
                            Have a technology or business challenge you&apos;re working through?
                        </p>

                        <Link
                            href="/contact"
                            className="group inline-flex items-center gap-3 h-14 px-10 rounded-[var(--t-radius-btn)] font-semibold text-base transition-all duration-200 shadow-md hover:bg-[var(--t-btn-hover)] hover:shadow-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2 cursor-pointer"
                            style={{ backgroundColor: "var(--t-btn-bg)", color: "var(--t-btn-text)" }}
                        >
                            <span>Let&apos;s talk</span>
                            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
