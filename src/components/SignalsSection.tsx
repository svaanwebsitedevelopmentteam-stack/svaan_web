"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Icons3D } from "@/components/ui/Icons3D";

export interface SignalItem {
    num?: string;
    tag: string;
    text: string;
    category?: string;
    impact?: "Critical" | "High" | "Strategic" | "Operational" | string;
    diagnosis?: string;
    solution?: string;
    accent?: string;
}

interface SignalsSectionProps {
    badge?: string;
    title?: string;
    highlightTitle?: string;
    subtitle: string;
    signals: SignalItem[];
    ctaText?: string;
    ctaHref?: string;
}

/* ────────────────────────────────────────────────────────────
   DYNAMIC INTELLIGENCE ENRICHMENT HELPER
   Maps each trigger tag to deep contextual diagnostics, solutions,
   accent palettes, and 3D animated icons matching home-v2 theme.
   ──────────────────────────────────────────────────────────── */
interface EnrichedSignal extends SignalItem {
    accentColor: string;
    impactLevel: string;
    diagnosisText: string;
    solutionText: string;
    IconComponent: React.ComponentType<{ className?: string }>;
}

const PALETTE = [
    "#3b82f6", // Sky/Blue
    "#6366f1", // Indigo
    "#8b5cf6", // Purple
    "#0ea5e9", // Ocean
    "#10b981", // Emerald
    "#f59e0b", // Amber
    "#ec4899", // Rose
];

function getEnrichedSignal(item: SignalItem, index: number): EnrichedSignal {
    const tagLower = item.tag.toLowerCase();
    const textLower = item.text.toLowerCase();

    // 1. Validation Phase / Early Stage
    if (tagLower.includes("validation") || textLower.includes("idea") || textLower.includes("poc")) {
        return {
            ...item,
            accentColor: item.accent || "#3b82f6",
            impactLevel: item.impact || "Strategic Priority",
            diagnosisText: item.diagnosis || "Committing full development budget to an unvalidated architecture risks expensive rework, delayed revenue, and overbuilt features.",
            solutionText: item.solution || "We engineer a lean, production-grade MVP in 4–6 weeks to test the core value proposition with real users before committing larger capital.",
            IconComponent: Icons3D.ProcessDiscover,
        };
    }

    // 2. Operational Ceiling / Manual Bottlenecks
    if (tagLower.includes("ceiling") || tagLower.includes("spreadsheet") || textLower.includes("spreadsheet") || textLower.includes("manual")) {
        return {
            ...item,
            accentColor: item.accent || "#f59e0b",
            impactLevel: item.impact || "Operational Ceiling",
            diagnosisText: item.diagnosis || "Spreadsheets and patchwork manual workflows break down under increased volume, causing compounding human errors and delayed delivery.",
            solutionText: item.solution || "We replace fragile manual handoffs with automated, tailored internal systems and streamlined workflow engines built for high throughput.",
            IconComponent: Icons3D.Software,
        };
    }

    // 3. Off-the-Shelf Mismatch / SaaS Limits
    if (tagLower.includes("mismatch") || tagLower.includes("shelf") || textLower.includes("off the shelf") || textLower.includes("fit")) {
        return {
            ...item,
            accentColor: item.accent || "#6366f1",
            impactLevel: item.impact || "Architecture Constraint",
            diagnosisText: item.diagnosis || "Commercial SaaS solutions force your company to conform to generic templates, blunting competitive differentiation and capping efficiency.",
            solutionText: item.solution || "We design bespoke software that adapts to your proprietary operating methodology, giving your business a distinct technological edge.",
            IconComponent: Icons3D.ProcessBuild,
        };
    }

    // 4. AI Integration / Intelligence
    if (tagLower.includes("ai") || textLower.includes("ai") || tagLower.includes("automation deficit") || textLower.includes("automation")) {
        return {
            ...item,
            accentColor: item.accent || "#ec4899",
            impactLevel: item.impact || "Strategic Inflection",
            diagnosisText: item.diagnosis || "Manual decision steps and unstructured data processing slow team velocity while competitors rapidly adopt intelligent automation.",
            solutionText: item.solution || "We embed targeted AI models, agentic workflows, and semantic intelligence directly into your core product where measurable ROI is highest.",
            IconComponent: Icons3D.AI,
        };
    }

    // 5. Deployment Friction / DevOps Pain
    if (tagLower.includes("deployment") || tagLower.includes("release") || textLower.includes("release") || textLower.includes("stressful")) {
        return {
            ...item,
            accentColor: item.accent || "#ef4444",
            impactLevel: item.impact || "Velocity Blocker",
            diagnosisText: item.diagnosis || "Fear of deploying software freezes product velocity. When releases feel dangerous, teams ship less frequently and accumulate technical debt.",
            solutionText: item.solution || "We engineer automated CI/CD pipelines, containerized environments, and blue/green zero-downtime release gates so shipping is fast and safe.",
            IconComponent: Icons3D.DevOps,
        };
    }

    // 6. Cost & Cloud Efficiency
    if (tagLower.includes("cost") || tagLower.includes("efficiency") || textLower.includes("hosting") || textLower.includes("cloud costs")) {
        return {
            ...item,
            accentColor: item.accent || "#0ea5e9",
            impactLevel: item.impact || "Financial Leakage",
            diagnosisText: item.diagnosis || "Unmonitored cloud sprawl and legacy architectures consume disproportionate budget without corresponding gains in performance or reliability.",
            solutionText: item.solution || "We audit cloud footprint, modernize runtime infrastructure, and enforce auto-scaling policies to reduce overhead by 30–50%.",
            IconComponent: Icons3D.Cloud,
        };
    }

    // 7. Integration Silos / Data Fragmentation
    if (tagLower.includes("silo") || tagLower.includes("integration") || tagLower.includes("fragmentation") || textLower.includes("share data") || textLower.includes("disjointed")) {
        return {
            ...item,
            accentColor: item.accent || "#8b5cf6",
            impactLevel: item.impact || "Data Silo Risk",
            diagnosisText: item.diagnosis || "Disconnected tools and isolated databases force staff to manually cross-reference data, slowing down leadership decisions and customer response.",
            solutionText: item.solution || "We build unified API layers, event buses, and real-time data sync bridges that link legacy systems seamlessly with modern tools.",
            IconComponent: Icons3D.Microservices,
        };
    }

    // 8. Key-Person Risk / Knowledge Loss
    if (tagLower.includes("key-person") || tagLower.includes("person") || textLower.includes("tribal knowledge") || textLower.includes("one individual")) {
        return {
            ...item,
            accentColor: item.accent || "#f97316",
            impactLevel: item.impact || "Critical Vulnerability",
            diagnosisText: item.diagnosis || "When system architecture resides only in one engineer's head, the entire organization is vulnerable to catastrophic delays if they become unavailable.",
            solutionText: item.solution || "We conduct comprehensive architectural audits, document code and infrastructure, and implement standardized engineering practices.",
            IconComponent: Icons3D.Backend,
        };
    }

    // 9. Throughput Limit / Scalability
    if (tagLower.includes("throughput") || tagLower.includes("limit") || textLower.includes("concurrency") || textLower.includes("struggles")) {
        return {
            ...item,
            accentColor: item.accent || "#ec4899",
            impactLevel: item.impact || "Scalability Ceiling",
            diagnosisText: item.diagnosis || "Monolithic legacy databases freeze or crash during peak user activity, damaging user trust and capping commercial expansion.",
            solutionText: item.solution || "We decouple high-contention services, introduce smart caching layers, and optimize database queries for limitless horizontal scale.",
            IconComponent: Icons3D.CloudInfra,
        };
    }

    // 10. Support Deficit / Ownership Void
    if (tagLower.includes("support") || tagLower.includes("ownership") || tagLower.includes("helpdesk") || textLower.includes("support") || textLower.includes("vendor has left")) {
        return {
            ...item,
            accentColor: item.accent || "#06b6d4",
            impactLevel: item.impact || "Operational Hazard",
            diagnosisText: item.diagnosis || "Live production applications without dedicated engineering guardianship degrade over time, leaving security vulnerabilities unpatched.",
            solutionText: item.solution || "We assume full operational ownership with guaranteed SLAs, 24/7 proactive monitoring, health patching, and continuous defect resolution.",
            IconComponent: Icons3D.Support,
        };
    }

    // 11. Feedback Bottleneck / SLA Deficit
    if (tagLower.includes("feedback") || tagLower.includes("sla") || textLower.includes("feedback") || textLower.includes("users frequently report")) {
        return {
            ...item,
            accentColor: item.accent || "#eab308",
            impactLevel: item.impact || "Customer Experience Deficit",
            diagnosisText: item.diagnosis || "User feedback and bug reports languish in untracked queues, eroding trust and causing customer churn before issues are investigated.",
            solutionText: item.solution || "We install clear triage pipelines, structured ticket categorization, and dedicated sprint slots for rapid user-facing improvements.",
            IconComponent: Icons3D.DevOps,
        };
    }

    // 12. Downtime Risk / Reliability
    if (tagLower.includes("downtime") || tagLower.includes("interruption") || textLower.includes("downtime") || textLower.includes("outage")) {
        return {
            ...item,
            accentColor: item.accent || "#ef4444",
            impactLevel: item.impact || "Business Interruption",
            diagnosisText: item.diagnosis || "Unscheduled downtime directly impacts revenue and brand reputation, turning routine maintenance into high-risk emergencies.",
            solutionText: item.solution || "We harden infrastructure with automatic failovers, multi-zone redundancy, health checks, and instant rollback automation.",
            IconComponent: Icons3D.CloudInfra,
        };
    }

    // 13. Continuous Velocity / Evolution
    if (tagLower.includes("velocity") || tagLower.includes("continuous") || textLower.includes("velocity") || textLower.includes("roadmap")) {
        return {
            ...item,
            accentColor: item.accent || "#10b981",
            impactLevel: item.impact || "Growth Stagnation",
            diagnosisText: item.diagnosis || "Software that stays static quickly becomes obsolete. Without continuous cadence, backlog items accumulate and technical debt compounds.",
            solutionText: item.solution || "We establish dedicated multi-discipline squads delivering bi-weekly value increments, guided by strategic product roadmaps.",
            IconComponent: Icons3D.Strategy,
        };
    }

    // Fallback default
    const fallbackColor = PALETTE[index % PALETTE.length];
    return {
        ...item,
        accentColor: item.accent || fallbackColor,
        impactLevel: item.impact || "Architecture Friction",
        diagnosisText: item.diagnosis || "Delaying architectural remediation compounds technical debt and increases future refactoring costs exponentially.",
        solutionText: item.solution || "SVaaN engages directly with your team to systematically eliminate bottlenecks and establish resilient software foundations.",
        IconComponent: index % 2 === 0 ? Icons3D.Software : Icons3D.Strategy,
    };
}

/* ────────────────────────────────────────────────────────────
   EQUALIZER FREQUENCY BARS (Animated Audio/Signal Pulse)
   ──────────────────────────────────────────────────────────── */
function SignalEqualizer({ color }: { color: string }) {
    return (
        <div className="flex items-center gap-[3px] h-4">
            {[40, 90, 60, 100, 50, 80, 35].map((height, i) => (
                <motion.span
                    key={i}
                    className="w-[2.5px] rounded-full"
                    style={{ backgroundColor: color }}
                    animate={{
                        height: [`${height * 0.3}%`, `${height}%`, `${height * 0.4}%`],
                        opacity: [0.5, 1, 0.6],
                    }}
                    transition={{
                        duration: 1.2 + (i % 3) * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.12,
                    }}
                />
            ))}
        </div>
    );
}

/* ────────────────────────────────────────────────────────────
   MAIN SIGNALS SECTION COMPONENT (Home-V2 Themed)
   ──────────────────────────────────────────────────────────── */
export function SignalsSection({
    badge = "Signals & Triggers",
    title = "When you",
    highlightTitle = "need it.",
    subtitle,
    signals,
    ctaText = "Discuss these triggers with an engineer",
    ctaHref = "/contact",
}: SignalsSectionProps) {
    const enrichedSignals = signals.map(getEnrichedSignal);

    const [activeIdx, setActiveIdx] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const isPausedRef = useRef(false);
    const progressRef = useRef(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Auto-advance loop (inspired by home-v2 ProblemFraming)
    const startAutoPlay = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        progressRef.current = 0;
        setProgress(0);
        const tick = 50; // ms
        const duration = 6500; // 6.5s per trigger

        intervalRef.current = setInterval(() => {
            if (isPausedRef.current) return;

            progressRef.current += (tick / duration) * 100;
            if (progressRef.current >= 100) {
                progressRef.current = 0;
                setProgress(0);
                setActiveIdx((prev) => (prev + 1) % enrichedSignals.length);
            } else {
                setProgress(progressRef.current);
            }
        }, tick);
    }, [enrichedSignals.length]);

    useEffect(() => {
        startAutoPlay();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [startAutoPlay]);

    const handleSelectSignal = (idx: number) => {
        setActiveIdx(idx);
        progressRef.current = 0;
        setProgress(0);
    };

    const handleMouseEnter = () => {
        isPausedRef.current = true;
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        isPausedRef.current = false;
        setIsPaused(false);
    };

    const activeSignal = enrichedSignals[activeIdx] || enrichedSignals[0];
    const ActiveIcon = activeSignal.IconComponent;

    const renderSpotlightCard = (isMobile = false) => (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative rounded-2xl sm:rounded-3xl border overflow-hidden flex flex-col transition-colors shadow-lg ${isMobile ? "w-full" : ""}`}
            style={{
                backgroundColor: "var(--t-bg-card)",
                borderColor: "var(--t-border)",
            }}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeIdx}
                    initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="w-full p-4 sm:p-7 lg:p-8 flex flex-col relative z-10"
                >
                    {/* Subtle radial accent glow */}
                    <div
                        className="absolute -top-20 -right-20 w-[360px] h-[360px] rounded-full blur-[130px] opacity-20 pointer-events-none transition-colors duration-700"
                        style={{ backgroundColor: activeSignal.accentColor }}
                    />

                    {/* Spotlight Top Bar */}
                    <div>
                        <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6 pb-3 sm:pb-4 border-b" style={{ borderColor: "var(--t-border)" }}>
                            <div className="flex items-center gap-2">
                                <span
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: activeSignal.accentColor }}
                                />
                                <span className="text-[11px] sm:text-xs font-mono font-bold tracking-wider uppercase" style={{ color: "var(--t-text)" }}>
                                    {activeSignal.tag}
                                </span>
                            </div>

                            <span
                                className="px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider border"
                                style={{
                                    backgroundColor: `${activeSignal.accentColor}15`,
                                    borderColor: `${activeSignal.accentColor}35`,
                                    color: activeSignal.accentColor,
                                }}
                            >
                                {activeSignal.impactLevel}
                            </span>
                        </div>

                        {/* Center Display: 3D Icon & Core Trigger Focus */}
                        <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4 sm:gap-6 items-start mb-5 sm:mb-6">
                            {/* Floating 3D Icon Stage */}
                            <div
                                className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center shrink-0 border relative overflow-hidden shadow-sm"
                                style={{
                                    backgroundColor: `${activeSignal.accentColor}12`,
                                    borderColor: `${activeSignal.accentColor}30`,
                                }}
                            >
                                <motion.div
                                    animate={{ y: [-3, 3, -3] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="scale-90 sm:scale-100"
                                >
                                    <ActiveIcon className="w-8 h-8 sm:w-12 sm:h-12" />
                                </motion.div>
                            </div>

                            {/* Headline Statement */}
                            <div className="min-w-0">
                                <div
                                    className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-semibold mb-1"
                                    style={{ color: activeSignal.accentColor }}
                                >
                                    Observed Indicator
                                </div>
                                <h3
                                    className="font-display text-base sm:text-2xl font-bold tracking-tight leading-snug"
                                    style={{ color: "var(--t-text)" }}
                                >
                                    &ldquo;{activeSignal.text}&rdquo;
                                </h3>
                            </div>
                        </div>

                        {/* Dual Analysis Cards: Diagnosis & Resolution */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 my-2">
                            {/* The Structural Risk */}
                            <div
                                className="p-3.5 sm:p-5 rounded-xl border relative"
                                style={{
                                    backgroundColor: "var(--t-bg-surface)",
                                    borderColor: "var(--t-border)",
                                }}
                            >
                                <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                    <span className="text-[10px] sm:text-[11px] font-mono uppercase font-bold tracking-wider" style={{ color: "var(--t-text)" }}>
                                        The Underlying Risk
                                    </span>
                                </div>
                                <p className="text-xs sm:text-[13px] leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                                    {activeSignal.diagnosisText}
                                </p>
                            </div>

                            {/* The Engineering Resolution */}
                            <div
                                className="p-3.5 sm:p-5 rounded-xl border relative"
                                style={{
                                    backgroundColor: `${activeSignal.accentColor}0a`,
                                    borderColor: `${activeSignal.accentColor}30`,
                                }}
                            >
                                <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                                    <div
                                        className="w-1.5 h-1.5 rounded-full"
                                        style={{ backgroundColor: activeSignal.accentColor }}
                                    />
                                    <span
                                        className="text-[10px] sm:text-[11px] font-mono uppercase font-bold tracking-wider"
                                        style={{ color: activeSignal.accentColor }}
                                    >
                                        The SVaaN Approach
                                    </span>
                                </div>
                                <p className="text-xs sm:text-[13px] leading-relaxed" style={{ color: "var(--t-text)" }}>
                                    {activeSignal.solutionText}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Spotlight Footer: CTA + Pagination Navigator */}
                    <div
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 sm:pt-6 mt-3 sm:mt-4 border-t"
                        style={{ borderColor: "var(--t-border)" }}
                    >
                        <Link
                            href={ctaHref}
                            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold group transition-all"
                            style={{ color: activeSignal.accentColor }}
                        >
                            <span>{ctaText}</span>
                            <svg
                                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>

                        {/* Nav Dots & Arrows */}
                        <div className="flex items-center gap-3 self-end sm:self-auto">
                            <div className="flex gap-1.5">
                                {enrichedSignals.map((_, dotIdx) => (
                                    <button
                                        key={dotIdx}
                                        onClick={() => handleSelectSignal(dotIdx)}
                                        className="w-2 h-2 rounded-full transition-all duration-300 cursor-pointer"
                                        style={{
                                            backgroundColor: dotIdx === activeIdx ? activeSignal.accentColor : "var(--t-border)",
                                            transform: dotIdx === activeIdx ? "scale(1.4)" : "scale(1)",
                                        }}
                                        aria-label={`Go to trigger ${dotIdx + 1}`}
                                    />
                                ))}
                            </div>
                            <div className="flex items-center gap-1.5">
                                <button
                                    onClick={() => handleSelectSignal((activeIdx - 1 + enrichedSignals.length) % enrichedSignals.length)}
                                    className="w-7 h-7 rounded-lg border flex items-center justify-center transition-colors hover:bg-[var(--t-bg-surface)] cursor-pointer"
                                    style={{ borderColor: "var(--t-border)", color: "var(--t-text)" }}
                                    aria-label="Previous trigger"
                                >
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => handleSelectSignal((activeIdx + 1) % enrichedSignals.length)}
                                    className="w-7 h-7 rounded-lg border flex items-center justify-center transition-colors hover:bg-[var(--t-bg-surface)] cursor-pointer"
                                    style={{ borderColor: "var(--t-border)", color: "var(--t-text)" }}
                                    aria-label="Next trigger"
                                >
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );

    return (
        <section
            className="py-14 sm:py-20 lg:py-28 relative border-b"
            style={{
                backgroundColor: "var(--t-bg-surface)",
                borderColor: "var(--t-border)",
            }}
        >
            {/* Ambient Background Glows (Home-v2 Style) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[400px] rounded-full blur-[180px] opacity-20 transition-colors duration-1000"
                    style={{ backgroundColor: activeSignal.accentColor }}
                />
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                    }}
                />
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

                {/* Section Header */}
                <div className="max-w-2xl mb-8 sm:mb-14">
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
                            className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-3"
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

                {/* 1. MOBILE VIEW ONLY (block lg:hidden): Loader Box followed immediately by Content Box */}
                <div className="block lg:hidden space-y-3.5">
                    {/* Mobile Quick Trigger Selector Pills (with Visible Styled Scrollbar) */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-2.5 signal-tab-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
                        {enrichedSignals.map((sig, i) => {
                            const isSelected = activeIdx === i;
                            return (
                                <button
                                    key={i}
                                    onClick={() => handleSelectSignal(i)}
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold shrink-0 border transition-all duration-300"
                                    style={{
                                        backgroundColor: isSelected ? `${sig.accentColor}18` : "var(--t-bg-card)",
                                        borderColor: isSelected ? sig.accentColor : "var(--t-border)",
                                        color: isSelected ? sig.accentColor : "var(--t-text-muted)",
                                    }}
                                >
                                    <span className="opacity-70">0{i + 1}</span>
                                    <span className="truncate max-w-[130px]">{sig.tag}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Mobile: Active Loader Box with animated progress bar */}
                    <div
                        className="rounded-xl overflow-hidden transition-all duration-300 border shadow-sm relative"
                        style={{
                            backgroundColor: "var(--t-bg-card)",
                            borderColor: activeSignal.accentColor,
                            boxShadow: `0 8px 24px -6px ${activeSignal.accentColor}25`,
                        }}
                    >
                        <div className="flex items-stretch">
                            {/* Left accent strip with number */}
                            <div
                                className="w-12 shrink-0 flex flex-col items-center justify-center border-r"
                                style={{
                                    backgroundColor: `${activeSignal.accentColor}18`,
                                    borderColor: `${activeSignal.accentColor}40`,
                                }}
                            >
                                <span
                                    className="text-base font-mono font-black"
                                    style={{ color: activeSignal.accentColor }}
                                >
                                    0{activeIdx + 1}
                                </span>
                            </div>

                            {/* Card Content */}
                            <div className="flex-1 p-3.5 flex items-center justify-between gap-3 min-w-0">
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span
                                            className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider truncate border"
                                            style={{
                                                backgroundColor: `${activeSignal.accentColor}18`,
                                                borderColor: `${activeSignal.accentColor}40`,
                                                color: activeSignal.accentColor,
                                            }}
                                        >
                                            {activeSignal.tag}
                                        </span>
                                        <div className="flex items-center gap-1 shrink-0">
                                            <span className="relative flex h-2 w-2">
                                                <span
                                                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                                                    style={{ backgroundColor: activeSignal.accentColor }}
                                                />
                                                <span
                                                    className="relative inline-flex rounded-full h-2 w-2"
                                                    style={{ backgroundColor: activeSignal.accentColor }}
                                                />
                                            </span>
                                            <span className="text-[10px] font-mono uppercase" style={{ color: activeSignal.accentColor }}>
                                                Active
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="font-display text-xs sm:text-sm font-bold leading-snug line-clamp-2" style={{ color: "var(--t-text)" }}>
                                        {activeSignal.text}
                                    </h3>
                                </div>

                                {/* Right mini icon badge */}
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                                    style={{
                                        backgroundColor: `${activeSignal.accentColor}18`,
                                        borderColor: `${activeSignal.accentColor}40`,
                                        color: activeSignal.accentColor,
                                    }}
                                >
                                    <ActiveIcon className="w-5 h-5" />
                                </div>
                            </div>
                        </div>

                        {/* Bottom Animated Progress Line (Loader) */}
                        <div
                            className="h-[3px] w-full overflow-hidden"
                            style={{ backgroundColor: "var(--t-border)" }}
                        >
                            <div
                                className="h-full rounded-t"
                                style={{
                                    width: `${progress}%`,
                                    backgroundColor: activeSignal.accentColor,
                                }}
                            />
                        </div>
                    </div>

                    {/* Mobile Content Box: Appears directly below the loader box */}
                    {renderSpotlightCard(true)}
                </div>

                {/* 2. DESKTOP VIEW ONLY (hidden lg:grid lg:grid-cols-12): Original side-by-side layout */}
                <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left Column: Interactive Trigger Cards (Scrolls naturally with page) */}
                    <div className="lg:col-span-5 flex flex-col gap-3.5 sm:gap-4.5">
                        {enrichedSignals.map((sig, i) => {
                            const isSelected = activeIdx === i;
                            const IconComp = sig.IconComponent;

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-40px" }}
                                    transition={{ duration: 0.5, delay: i * 0.05 }}
                                    onViewportEnter={() => {
                                        handleSelectSignal(i);
                                    }}
                                >
                                    <div
                                        onClick={() => handleSelectSignal(i)}
                                        onMouseEnter={() => handleSelectSignal(i)}
                                        className="group rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer relative border"
                                        style={{
                                            backgroundColor: isSelected ? "var(--t-bg-card)" : "var(--t-bg-surface)",
                                            borderColor: isSelected ? sig.accentColor : "var(--t-border)",
                                            boxShadow: isSelected
                                                ? `0 14px 34px -10px ${sig.accentColor}30, 0 4px 14px -2px rgba(0,0,0,0.06)`
                                                : "none",
                                            transform: isSelected ? "translateY(-2px)" : "none",
                                        }}
                                    >
                                        <div className="flex items-stretch">
                                            {/* Left accent strip with number (Home-v2 Why SVaaN style) */}
                                            <div
                                                className="w-12 sm:w-16 md:w-[68px] shrink-0 flex flex-col items-center justify-center border-r transition-colors duration-300"
                                                style={{
                                                    backgroundColor: isSelected ? `${sig.accentColor}18` : "var(--t-bg-surface)",
                                                    borderColor: isSelected ? `${sig.accentColor}40` : "var(--t-border)",
                                                }}
                                            >
                                                <span
                                                    className="text-base sm:text-xl font-mono font-black tracking-tight transition-all duration-300"
                                                    style={{
                                                        color: isSelected ? sig.accentColor : "var(--t-text-muted)",
                                                        opacity: isSelected ? 1 : 0.45,
                                                    }}
                                                >
                                                    0{i + 1}
                                                </span>
                                            </div>

                                            {/* Card Content */}
                                            <div className="flex-1 p-4 sm:p-5 md:p-6 flex items-center justify-between gap-4 min-w-0">
                                                <div className="flex-1 min-w-0">
                                                    {/* Tag pill & live beacon */}
                                                    <div className="flex items-center gap-2.5 mb-2">
                                                        <span
                                                            className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider truncate border transition-colors duration-300"
                                                            style={{
                                                                backgroundColor: isSelected ? `${sig.accentColor}18` : "var(--t-bg-card)",
                                                                borderColor: isSelected ? `${sig.accentColor}40` : "var(--t-border)",
                                                                color: isSelected ? sig.accentColor : "var(--t-text-muted)",
                                                            }}
                                                        >
                                                            {sig.tag}
                                                        </span>
                                                        <div className="flex items-center gap-1.5 shrink-0">
                                                            <span className="relative flex h-2 w-2">
                                                                <span
                                                                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                                                                    style={{ backgroundColor: isSelected ? sig.accentColor : "#10b981" }}
                                                                />
                                                                <span
                                                                    className="relative inline-flex rounded-full h-2 w-2"
                                                                    style={{ backgroundColor: isSelected ? sig.accentColor : "#10b981" }}
                                                                />
                                                            </span>
                                                            <span
                                                                className="text-[10px] font-mono uppercase tracking-widest hidden sm:inline"
                                                                style={{
                                                                    color: isSelected ? sig.accentColor : "var(--t-text-muted)",
                                                                    opacity: isSelected ? 1 : 0.6,
                                                                }}
                                                            >
                                                                {isSelected ? "Active" : "Detected"}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    {/* Headline statement */}
                                                    <h3
                                                        className="font-display text-sm sm:text-base md:text-lg font-bold mb-1 leading-snug transition-colors duration-300"
                                                        style={{ color: isSelected ? "var(--t-text)" : "var(--t-text-muted)" }}
                                                    >
                                                        {sig.text}
                                                    </h3>
                                                </div>

                                                {/* Right mini icon badge */}
                                                <div
                                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 group-hover:scale-105"
                                                    style={{
                                                        backgroundColor: isSelected ? `${sig.accentColor}18` : "var(--t-bg-card)",
                                                        borderColor: isSelected ? `${sig.accentColor}40` : "var(--t-border)",
                                                        color: isSelected ? sig.accentColor : "var(--t-text-muted)",
                                                    }}
                                                >
                                                    <IconComp className="w-6 h-6 sm:w-7 sm:h-7" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom Animated Progress Line when active */}
                                        {isSelected && (
                                            <div
                                                className="absolute bottom-0 left-0 right-0 h-[2.5px] overflow-hidden"
                                                style={{ backgroundColor: "var(--t-border)" }}
                                            >
                                                <div
                                                    className="h-full transition-none rounded-t"
                                                    style={{
                                                        width: `${progress}%`,
                                                        backgroundColor: sig.accentColor,
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Right Column: Animated Trigger Diagnostic Spotlight (Sticky on Desktop) */}
                    <div className="lg:col-span-7 lg:sticky lg:top-32 lg:self-start w-full">
                        {renderSpotlightCard(false)}
                    </div>
                </div>
            </div>

                {/* Bottom Trust & Architecture Strip (Inspired by HeroV2 Trust Counter pattern) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-12 sm:mt-16 pt-8 border-t"
                    style={{ borderColor: "var(--t-border)" }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        <div className="flex items-start gap-3.5">
                            <div
                                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border"
                                style={{
                                    backgroundColor: "var(--t-bg-card)",
                                    borderColor: "var(--t-border)",
                                    color: "var(--t-accent)",
                                }}
                            >
                                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-display text-sm font-bold mb-1" style={{ color: "var(--t-text)" }}>
                                    Early Intervention Advantage
                                </h4>
                                <p className="text-xs leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                                    Addressing structural signals early prevents compounding technical debt, saving up to 70% in refactoring overhead.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3.5">
                            <div
                                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border"
                                style={{
                                    backgroundColor: "var(--t-bg-card)",
                                    borderColor: "var(--t-border)",
                                    color: "var(--t-accent)",
                                }}
                            >
                                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-display text-sm font-bold mb-1" style={{ color: "var(--t-text)" }}>
                                    Zero Production Interruption
                                </h4>
                                <p className="text-xs leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                                    All modernization and transition initiatives follow phased, parallel-run validation to guarantee 100% business continuity.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3.5">
                            <div
                                className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border"
                                style={{
                                    backgroundColor: "var(--t-bg-card)",
                                    borderColor: "var(--t-border)",
                                    color: "var(--t-accent)",
                                }}
                            >
                                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-display text-sm font-bold mb-1" style={{ color: "var(--t-text)" }}>
                                    10-Day Diagnostic Sprint
                                </h4>
                                <p className="text-xs leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                                    From discovery intake to an executive-ready architectural roadmap with guaranteed budget caps in under two weeks.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
        </section>
    );
}
