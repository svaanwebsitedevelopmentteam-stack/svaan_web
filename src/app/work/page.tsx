"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CTASection } from "@/components/CTASection";
import { allProjectsList } from "@/data/projectsData";

const categories = ["All", "Touring", "Home Care", "Healthcare", "Real Estate"] as const;
type CategoryFilter = typeof categories[number];

export default function WorkPage() {
    const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");

    const filteredProjects = selectedCategory === "All"
        ? allProjectsList
        : allProjectsList.filter(p => p.category === selectedCategory);

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
                        Turning complex challenges into{" "}
                        <span className="italic" style={{ color: "var(--t-accent)" }}>practical software.</span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed"
                        style={{ color: "var(--t-text-muted)" }}>
                        Explore client platforms engineered across web and mobile applications — purpose-built for touring, home care, healthcare, and real estate.
                    </motion.p>
                </div>
            </section>

            {/* 2. FILTER & PROJECTS GRID */}
            <section className="py-14 sm:py-20 lg:py-28 relative overflow-clip border-b"
                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 pb-6 border-b"
                        style={{ borderColor: "var(--t-border)" }}>
                        <span className="text-xs font-mono font-bold uppercase tracking-wider mr-2" style={{ color: "var(--t-text-muted)" }}>
                            Filter by Category:
                        </span>
                        {categories.map((cat) => {
                            const isSelected = selectedCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer border"
                                    style={{
                                        backgroundColor: isSelected ? "var(--t-accent)" : "var(--t-bg-card)",
                                        color: isSelected ? "#fff" : "var(--t-text)",
                                        borderColor: isSelected ? "var(--t-accent)" : "var(--t-border)",
                                        boxShadow: isSelected ? "0 4px 12px -2px var(--t-shadow)" : undefined
                                    }}
                                >
                                    {cat}
                                    {cat === "All" && (
                                        <span className="ml-2 opacity-80 text-[11px] font-mono">
                                            ({allProjectsList.length})
                                        </span>
                                    )}
                                    {cat !== "All" && (
                                        <span className="ml-2 opacity-80 text-[11px] font-mono">
                                            ({allProjectsList.filter(p => p.category === cat).length})
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, i) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    className="h-full"
                                >
                                    <Link
                                        href={project.href}
                                        aria-label={`${project.title} - Explore Solutions`}
                                        className="group flex flex-col justify-between h-full rounded-2xl sm:rounded-3xl border overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[var(--t-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] block cursor-pointer"
                                        style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}
                                    >
                                        {/* Image Container with SVG illustration */}
                                        <div className="relative w-full aspect-[16/10] overflow-hidden border-b"
                                            style={{ borderColor: "var(--t-border)" }}>
                                            <div className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-500 group-hover:scale-105">
                                                <project.Illustration className="w-full h-full object-cover" />
                                            </div>
                                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-overlay opacity-50`} />

                                            {/* Scope pill badge on top left */}
                                            <div className="absolute top-4 left-4 z-10">
                                                <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase backdrop-blur-md border shadow-sm"
                                                    style={{
                                                        backgroundColor: "rgba(0, 0, 0, 0.65)",
                                                        borderColor: "rgba(255, 255, 255, 0.2)",
                                                        color: "#fff"
                                                    }}>
                                                    {project.scope}
                                                </span>
                                            </div>

                                            {/* Category pill badge on top right */}
                                            <div className="absolute top-4 right-4 z-10">
                                                <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide backdrop-blur-md border shadow-sm"
                                                    style={{
                                                        backgroundColor: "var(--t-bg-card)",
                                                        borderColor: "var(--t-border)",
                                                        color: "var(--t-accent)"
                                                    }}>
                                                    {project.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content & Metadata */}
                                        <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                                            <div>
                                                <div className="mb-2">
                                                    <span className="text-xs font-mono font-bold uppercase tracking-wider" style={{ color: "var(--t-accent)" }}>
                                                        {project.client}
                                                    </span>
                                                </div>

                                                <h2 className="font-display text-xl sm:text-2xl font-bold leading-snug mb-3 group-hover:text-[var(--t-accent)] transition-colors duration-200"
                                                    style={{ color: "var(--t-text)" }}>
                                                    {project.title}
                                                </h2>

                                                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--t-text-muted)" }}>
                                                    {project.summary}
                                                </p>

                                                {/* Key Metric / Highlights Pills */}
                                                <div className="flex flex-wrap gap-1.5 mb-5">
                                                    {project.metrics.map((metric) => (
                                                        <span key={metric} className="text-[11px] font-medium px-2.5 py-1 rounded-md border"
                                                            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-text)" }}>
                                                            ✓ {metric}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Footer with tech stack tags and subtle action arrow */}
                                            <div className="pt-4 border-t flex items-center justify-between gap-3"
                                                style={{ borderColor: "var(--t-border)" }}>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {project.techStack.slice(0, 3).map((tech) => (
                                                        <span key={tech} className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded border"
                                                            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-text-muted)" }}>
                                                            {tech}
                                                        </span>
                                                    ))}
                                                    {project.techStack.length > 3 && (
                                                        <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded border"
                                                            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-text-muted)" }}>
                                                            +{project.techStack.length - 3}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Interactive arrow icon */}
                                                <div className="w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-[var(--t-accent)] group-hover:text-white group-hover:border-[var(--t-accent)]"
                                                    style={{ borderColor: "var(--t-border)", color: "var(--t-text-muted)" }}
                                                    aria-hidden="true"
                                                >
                                                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* 3. CTA SECTION */}
            <CTASection />
        </main>
    );
}
