"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export interface StepItem {
    num: string;
    title: string;
    tag: string;
    desc: string;
}

export interface HowWeWorkSectionProps {
    badge?: string;
    title?: string;
    italicTitle?: string;
    description?: string;
    steps?: StepItem[];
    ctaText?: string;
    ctaHref?: string;
    className?: string;
}

export const defaultHowWeWorkSteps: StepItem[] = [
    {
        num: "01",
        title: "Understand",
        tag: "Discovery & Context",
        desc: "Clarify the real problem, users, constraints, and current state.",
    },
    {
        num: "02",
        title: "Decide",
        tag: "Strategic Direction",
        desc: "Evaluate solutions and establish clear roadmaps before committing.",
    },
    {
        num: "03",
        title: "Build",
        tag: "Engineering & QA",
        desc: "Engineer production-grade software with velocity and discipline.",
    },
    {
        num: "04",
        title: "Run",
        tag: "Stability & DevOps",
        desc: "Deploy, monitor, and run securely for zero unexpected downtime.",
    },
    {
        num: "05",
        title: "Improve",
        tag: "Continuous Evolution",
        desc: "Iterate and optimize continuously as your business expands.",
    },
];

export function HowWeWorkSection({
    badge = "Our Approach & Methodology",
    title = "One simple way of",
    italicTitle = "working.",
    description = "Every engagement follows these five stages. The depth varies, the discipline doesn't.",
    steps = defaultHowWeWorkSteps,
    ctaText = "See our approach",
    ctaHref = "/approach",
    className = "",
}: HowWeWorkSectionProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section
            className={`py-14 sm:py-20 lg:py-28 relative overflow-clip ${className}`}
            style={{
                borderTop: "1px solid var(--t-border)",
                borderBottom: "1px solid var(--t-border)",
                backgroundColor: "var(--t-bg)",
            }}
        >
            {/* Ambient Background Glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[200px] pointer-events-none"
                style={{
                    backgroundColor: "var(--t-accent)",
                    opacity: "calc(var(--t-orb-opacity) * 0.7)",
                }}
            />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <div
                            className="inline-flex items-center gap-2 px-3 py-1 mb-2.5 sm:mb-3 rounded-md border text-xs font-semibold uppercase tracking-wider"
                            style={{
                                backgroundColor: "var(--t-bg-surface)",
                                border: "1px solid var(--t-border)",
                                color: "var(--t-accent)",
                            }}
                        >
                            <span
                                className="w-1.5 h-1.5 rounded-full animate-pulse"
                                style={{ backgroundColor: "var(--t-accent)" }}
                            />
                            {badge}
                        </div>
                        <h2
                            className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-2 sm:mb-4"
                            style={{ color: "var(--t-text)" }}
                        >
                            {title}{" "}
                            <span className="italic" style={{ color: "var(--t-accent)" }}>
                                {italicTitle}
                            </span>
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg" style={{ color: "var(--t-text-muted)" }}>
                            {description}
                        </p>
                    </motion.div>

                    {ctaText && ctaHref && (
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="flex items-center gap-4 shrink-0"
                        >
                            <Button href={ctaHref} variant="outline" className="group">
                                {ctaText}
                                <svg
                                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </Button>
                        </motion.div>
                    )}
                </div>

                {/* Auto Full-Width Grid: 3 Columns Top Row, 2 Balanced Columns Bottom Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6 w-full">
                    {steps.map((step, i) => {
                        const isHovered = hoveredIndex === i;
                        const colSpanClass =
                            i < 3
                                ? "lg:col-span-2 md:col-span-1"
                                : i === 4
                                ? "lg:col-span-3 md:col-span-2"
                                : "lg:col-span-3 md:col-span-1";

                        return (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={`group relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 cursor-default hover:-translate-y-1 ${colSpanClass}`}
                                style={{
                                    backgroundColor: "var(--t-bg-card)",
                                    border: `1px solid ${isHovered ? "var(--t-accent)" : "var(--t-border)"}`,
                                    boxShadow: isHovered
                                        ? "0 14px 32px -10px rgba(0,0,0,0.12)"
                                        : "0 4px 20px -6px rgba(0,0,0,0.04)",
                                }}
                            >
                                {/* Top Content */}
                                <div>
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="flex items-center gap-2.5">
                                            <span
                                                className="w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-all duration-300"
                                                style={{
                                                    backgroundColor: isHovered
                                                        ? "var(--t-accent)"
                                                        : "var(--t-bg-surface)",
                                                    color: isHovered ? "#fff" : "var(--t-accent)",
                                                    border: "1px solid var(--t-border)",
                                                }}
                                            >
                                                {step.num}
                                            </span>
                                            <span
                                                className="text-[11px] font-semibold uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity"
                                                style={{ color: "var(--t-text-muted)" }}>
                                                Stage {step.num}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Category Sub-badge */}
                                    <div className="mb-2">
                                        <span
                                            className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-md"
                                            style={{
                                                backgroundColor: "var(--t-bg-surface)",
                                                color: "var(--t-accent)",
                                                border: "1px solid var(--t-border)",
                                            }}
                                        >
                                            {step.tag}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="font-display text-xl sm:text-2xl font-bold mb-2.5 transition-colors duration-300"
                                        style={{ color: isHovered ? "var(--t-accent)" : "var(--t-text)" }}
                                    >
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="text-sm leading-relaxed opacity-75"
                                        style={{ color: "var(--t-text-muted)" }}
                                    >
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
