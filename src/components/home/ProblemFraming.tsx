"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const problems = [
    {
        label: "Build",
        badge: "New Product Development",
        title: "You have a product to build.",
        desc: "You know what the business needs. You need a team that can turn it into working software - from MVP to enterprise-grade product.",
        icon: "/Build.svg",
        accent: "#6366f1",
        href: "/solutions/build"
    },
    {
        label: "Modernize",
        badge: "Legacy & Cloud Migration",
        title: "You have a system that is hard to change.",
        desc: "It is slow, costly to run or risky to touch. Legacy architecture is holding the business back from moving quickly.",
        icon: "/Modernize.svg",
        accent: "#06b6d4",
        href: "/solutions/modernize"
    },
    {
        label: "Operate",
        badge: "Live Applications & Support",
        title: "You have live applications that need looking after.",
        desc: "Someone has to own the fixes, the updates, and the users who depend on them - day after day.",
        icon: "/Operation.svg",
        accent: "#f59e0b",
        href: "/solutions/operate"
    },
    {
        label: "Evolve",
        badge: "Automation & Continuous AI",
        title: "You have work that should be automated.",
        desc: "Your people repeat manual steps that technology could handle - costing time, money and focus.",
        icon: "/Evolve.svg",
        accent: "#ec4899",
        href: "/solutions/evolve"
    }
];

export function ProblemFraming() {
    const [active, setActive] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % problems.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [isPaused]);

    const selectTab = (i: number) => {
        setActive(i);
    };

    return (
        <section className="py-14 sm:py-20 lg:py-24 relative overflow-hidden" style={{ backgroundColor: "var(--t-bg-surface)", borderTop: "1px solid var(--t-border)", borderBottom: "1px solid var(--t-border)" }}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

                {/* Section Header */}
                <div className="mb-6 sm:mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-2.5 sm:mb-3 rounded-md border text-xs font-semibold tracking-wider uppercase"
                        style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                        The Reality
                    </div>
                    <h2 className="font-display w-full lg:max-w-[80%] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug" style={{ color: "var(--t-text)" }}>
                        Technology should help the business{" "}
                        <span className="italic" style={{ color: "var(--t-accent)" }}>move faster.</span>
                    </h2>
                </div>

                {/* 2-Column Side-by-Side: Tabs Left (30%), Content Right (70%) */}
                <div className="grid grid-cols-1 lg:grid-cols-[3fr_7fr] gap-4 sm:gap-6 lg:gap-8 items-stretch">
                    {/* Left Column: Vertical Tabs (30%) */}
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-3">
                        {problems.map((p, i) => {
                            const isSelected = active === i;
                            return (
                                <button key={i} onClick={() => selectTab(i)}
                                    className="relative text-left p-2.5 sm:p-4 rounded-xl transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col justify-between"
                                    style={{
                                        backgroundColor: isSelected ? "var(--t-bg-card)" : "transparent",
                                        border: `1px solid ${isSelected ? p.accent + "50" : "var(--t-border)"}`,
                                        boxShadow: isSelected ? "0 4px 20px -4px rgba(0,0,0,0.08)" : "none"
                                    }}>
                                    {/* Bottom Accent progress loader when selected via CSS keyframes */}
                                    {isSelected && (
                                        <div className="absolute bottom-0 left-0 right-0 h-[3px] overflow-hidden"
                                            style={{ backgroundColor: "var(--t-border)" }}>
                                            <div
                                                key={active}
                                                className="h-full rounded-t"
                                                style={{
                                                    backgroundColor: p.accent,
                                                    animation: isPaused ? "none" : "progressFill 6s linear forwards",
                                                    width: isPaused ? "100%" : undefined
                                                }}
                                            />
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                                            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg text-[11px] sm:text-xs font-mono font-bold flex items-center justify-center transition-colors duration-300 shrink-0"
                                                style={{
                                                    backgroundColor: isSelected ? p.accent : "var(--t-bg-surface)",
                                                    color: isSelected ? "#fff" : "var(--t-text-secondary)",
                                                    border: "1px solid var(--t-border)"
                                                }}>
                                                0{i + 1}
                                            </span>
                                            <div className="min-w-0">
                                                <div className="font-bold text-xs sm:text-base transition-colors duration-300 truncate" style={{ color: isSelected ? "var(--t-text)" : "var(--t-text-secondary)" }}>
                                                    {p.label}
                                                </div>
                                                <div className="text-[10px] sm:text-[11px] font-medium opacity-70 hidden sm:block truncate" style={{ color: "var(--t-text-muted)" }}>
                                                    {p.badge}
                                                </div>
                                            </div>
                                        </div>

                                        <svg className={`hidden lg:block w-4 h-4 transition-all duration-300 shrink-0 ${isSelected ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-40"}`}
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: p.accent }}>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Column: Active Content Card (70%) */}
                    <div
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        className="relative rounded-2xl overflow-hidden min-h-[240px] sm:min-h-[280px] flex transition-colors"
                        style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}>

                        <div
                            key={active}
                            className="w-full p-4 sm:p-7 md:p-9 flex flex-col justify-between relative animate-in fade-in duration-300"
                        >
                                {/* Ambient subtle glow */}
                                <div className="absolute -top-24 -right-24 w-[320px] h-[320px] rounded-full blur-[110px] opacity-15 pointer-events-none transition-colors duration-700"
                                    style={{ backgroundColor: problems[active].accent }} />

                                {/* Top Row: Badge & 3D Icon */}
                                <div className="flex items-start justify-between gap-3 sm:gap-4 mb-4 sm:mb-6 relative z-10">
                                    <div className="min-w-0 flex-1">
                                        <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full inline-block mb-2 sm:mb-3"
                                            style={{ backgroundColor: problems[active].accent + "15", color: problems[active].accent, border: `1px solid ${problems[active].accent}30` }}>
                                            {problems[active].badge}
                                        </span>
                                        <h3 className="font-display text-base sm:text-2xl md:text-3xl font-bold tracking-tight leading-snug" style={{ color: "var(--t-text)" }}>
                                            {problems[active].title}
                                        </h3>
                                    </div>

                                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center relative shrink-0 shadow-sm"
                                        style={{ backgroundColor: problems[active].accent + "12", border: `1px solid ${problems[active].accent}30` }}>
                                        <div className="scale-75 sm:scale-100 flex items-center justify-center">
                                            {typeof problems[active].icon === "string" ? (
                                                <Image
                                                    src={problems[active].icon}
                                                    alt={problems[active].label}
                                                    width={48}
                                                    height={48}
                                                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                                                />
                                            ) : (
                                                problems[active].icon
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-xs sm:text-sm md:text-base leading-relaxed opacity-80 max-w-xl mb-4 sm:mb-6 relative z-10" style={{ color: "var(--t-text)" }}>
                                    {problems[active].desc}
                                </p>

                                {/* Bottom Row: Action link + Step indicator */}
                                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t relative z-10"
                                    style={{ borderColor: "var(--t-border)" }}>
                                    <Link href={problems[active].href}
                                        className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider group transition-all px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg"
                                        style={{ backgroundColor: problems[active].accent + "15", color: problems[active].accent, border: `1px solid ${problems[active].accent}30` }}>
                                        <span>How SVaaN solves this</span>
                                        <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>

                                    <div className="flex items-center gap-2">
                                        {isPaused && (
                                            <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded border"
                                                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: problems[active].accent }}>
                                                Paused
                                            </span>
                                        )}
                                        <span className="text-xs font-mono font-medium" style={{ color: "var(--t-text-secondary)" }}>
                                            0{active + 1} / 04
                                        </span>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
