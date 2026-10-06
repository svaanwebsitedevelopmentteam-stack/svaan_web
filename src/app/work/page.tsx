"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Illustrations } from "@/components/ui/Illustrations";
import { CTASection } from "@/components/CTASection";

const allProjects = [
    {
        title: "AI-Powered FinTech Platform",
        client: "Global Financial Services",
        tags: ["AI Development", "Strategy"],
        href: "/work/fintech-platform",
        Illustration: Illustrations.FinTech,
        gradient: "from-blue-700/60 to-slate-900/60"
    },
    {
        title: "Healthcare Digital Transformation",
        client: "Enterprise Health Network",
        tags: ["Enterprise Software", "UX Design"],
        href: "/work/healthcare",
        Illustration: Illustrations.Healthcare,
        gradient: "from-emerald-500/60 to-teal-800/60"
    },
    {
        title: "PropTech Management Suite",
        client: "Global Real Estate",
        tags: ["Product Development", "Cloud"],
        href: "/work/proptech",
        Illustration: Illustrations.PropTech,
        gradient: "from-orange-500/60 to-amber-800/60"
    },
    {
        title: "E-Commerce Infrastructure",
        client: "Retail Enterprise",
        tags: ["Architecture", "DevOps"],
        href: "/work/ecommerce",
        Illustration: Illustrations.Ecommerce,
        gradient: "from-blue-600/60 to-slate-800/60"
    },
    {
        title: "Autonomous Logistics Tracker",
        client: "National Freight Co.",
        tags: ["Machine Learning", "IoT"],
        href: "/work/logistics-tracker",
        Illustration: Illustrations.PropTech,
        gradient: "from-blue-800/60 to-slate-900/60"
    },
    {
        title: "Zero-Trust Identity Portal",
        client: "Government Agency",
        tags: ["Cybersecurity", "Architecture"],
        href: "/work/identity-portal",
        Illustration: Illustrations.FinTech,
        gradient: "from-cyan-500/60 to-sky-800/60"
    }
];

export default function WorkPage() {
    return (
        <main className="w-full overflow-x-clip min-h-screen" style={{ backgroundColor: "var(--t-bg)" }}>
            {/* 1. HERO SECTION */}
            <section className="relative min-h-[55vh] lg:min-h-[60vh] flex flex-col justify-center overflow-clip pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 border-b"
                style={{ borderColor: "var(--t-border)" }}>
                {/* Ambient Glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[300px] sm:h-[400px] rounded-full blur-[180px] pointer-events-none"
                    style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }} />

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-4 sm:mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border text-xs font-semibold tracking-wider uppercase"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--t-accent)" }} />
                            Portfolio & Case Studies
                        </div>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-4 sm:mb-6 max-w-4xl"
                        style={{ color: "var(--t-text)" }}>
                        Turning challenges into{" "}
                        <span className="italic" style={{ color: "var(--t-accent)" }}>practical outcomes.</span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed"
                        style={{ color: "var(--t-text-muted)" }}>
                        Explore approved work that demonstrates how SVaaN engineers enterprise systems, modernizes legacy stacks, and scales AI platforms.
                    </motion.p>
                </div>
            </section>

            {/* 2. PROJECTS GRID */}
            <section className="py-14 sm:py-20 lg:py-28 relative overflow-clip border-b"
                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                        {allProjects.map((project, i) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                            >
                                <Link
                                    href={project.href}
                                    className="group flex flex-col justify-between h-full rounded-2xl sm:rounded-3xl border overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)]"
                                    style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}
                                >
                                    {/* Image Container with SVG illustration */}
                                    <div className="relative w-full aspect-[16/10] overflow-hidden border-b"
                                        style={{ borderColor: "var(--t-border)" }}>
                                        <div className="absolute inset-0 w-full h-full pointer-events-none group-hover:scale-105 transition-transform duration-700 ease-out">
                                            <project.Illustration className="w-full h-full object-cover" />
                                        </div>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-overlay opacity-60 group-hover:opacity-20 transition-opacity duration-500`} />

                                        {/* Hover arrow badge */}
                                        <div className="absolute top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md border"
                                            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Content & Metadata */}
                                    <div className="p-5 sm:p-7 flex flex-col justify-between flex-1">
                                        <div>
                                            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                                <span className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: "var(--t-accent)" }}>
                                                    {project.client}
                                                </span>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {project.tags.map(tag => (
                                                        <span key={tag} className="text-[11px] font-semibold px-2 py-0.5 rounded-full border"
                                                            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-text-muted)" }}>
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <h2 className="font-display text-lg sm:text-xl font-bold leading-snug group-hover:text-[var(--t-accent)] transition-colors duration-200"
                                                style={{ color: "var(--t-text)" }}>
                                                {project.title}
                                            </h2>
                                        </div>

                                        <div className="pt-5 mt-5 border-t flex items-center justify-between"
                                            style={{ borderColor: "var(--t-border)" }}>
                                            <span className="text-xs font-bold uppercase tracking-wider group-hover:text-[var(--t-accent)] transition-colors duration-200"
                                                style={{ color: "var(--t-text)" }}>
                                                View Case Study
                                            </span>
                                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
                                                style={{ color: "var(--t-accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CTA SECTION */}
            <CTASection />
        </main>
    );
}
