"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { ServiceData } from "@/data/capabilitiesData";
import { Icons3D } from "@/components/ui/Icons3D";
import { Illustrations } from "@/components/ui/Illustrations";

function getJourneyIcon(stepName: string) {
    const name = stepName.toLowerCase();
    if (name.includes("understand")) return Icons3D.ProcessDiscover;
    if (name.includes("strategize")) return Icons3D.ProcessShape;
    if (name.includes("design")) return Icons3D.ProcessPrototype;
    if (name.includes("build")) return Icons3D.ProcessBuild;
    if (name.includes("evolve")) return Icons3D.Support;
    return Icons3D.Software; // Fallback
}

function getHeroIllustration(capability: string) {
    const cat = capability.toLowerCase();
    if (cat.includes("strategy") || cat.includes("software")) return Illustrations.FinTech;
    if (cat.includes("design") || cat.includes("experience") || cat.includes("product")) return Illustrations.Ecommerce;
    if (cat.includes("ai") || cat.includes("automation")) return Illustrations.Healthcare;
    if (cat.includes("cloud") || cat.includes("devops") || cat.includes("engineering")) return Illustrations.PropTech;
    return Illustrations.FinTech; // Default
}

export function ServiceDetailClient({ service }: { service: ServiceData }) {
    const journeySteps = service.journey.split('→').map(s => s.trim());

    // Smart parser to break markdown-style intos into rich UI block components
    const introLines = service.intro.split('\n').map(l => l.trim()).filter(Boolean);
    const paragraphs: string[] = [];
    let listTitle = "";
    const listItems: string[] = [];

    introLines.forEach(line => {
        if (line.startsWith('* ')) {
            listItems.push(line.replace('* ', ''));
        } else if (line.endsWith(':')) {
            listTitle = line;
        } else {
            paragraphs.push(line);
        }
    });

    return (
        <main className="min-h-screen pt-[70px] pb-0 relative overflow-x-clip">

            {/* 1. HERO SECTION (2-Column split: Content & Illustration Context + Background Orbs) */}
            <div className="relative w-full overflow-hidden">
                {/* Background Orbs (Scoped STRICTLY to Hero section) */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <motion.div
                        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute top-[15%] right-[15%] w-[500px] h-[500px] rounded-full blur-[180px]"
                        style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }}
                    />
                </div>

                <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
                    <div className="pb-[40px] lg:pb-[80px] pt-8 w-full mt-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                            {/* Left Side: Content */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="lg:col-span-6 xl:col-span-7"
                            >
                                <div className="inline-flex items-center gap-4 mb-8">
                                    <div className="h-[1px] w-12" style={{ backgroundColor: "var(--t-accent)" }} />
                                    <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--t-text-muted)" }}>
                                        {service.capability}
                                    </span>
                                </div>

                                <h1 className="type-display mb-8" style={{ color: "var(--t-text)" }}>
                                    {service.title}
                                </h1>

                                <div className="type-body-lg max-w-2xl space-y-6" style={{ color: "var(--t-text-muted)" }}>
                                    {paragraphs.map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Right Side: Animated SVG Illustration relating to the service */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="lg:col-span-6 xl:col-span-5 relative"
                            >
                                <div className="relative w-full aspect-video lg:aspect-[16/11] max-h-[350px] lg:max-h-[400px] rounded-[var(--t-radius-card)] overflow-hidden shadow-2xl group" style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}>
                                    {/* Soft glow behind graphic */}
                                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 blur-3xl transition-opacity duration-700 pointer-events-none" style={{ backgroundColor: "var(--t-accent)" }} />

                                    <div className="absolute inset-0 w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 origin-center bg-black">
                                        {React.createElement(getHeroIllustration(service.capability), { className: "w-full h-full object-cover" })}
                                    </div>

                                    {/* Surface gradient to blend beautifully into the theme radially */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--t-bg)]/80 via-transparent to-transparent pointer-events-none" />
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.02),transparent)] pointer-events-none" />
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
                {/* 2. "WHEN IT HELPS" (Editorial List, Unboxed) */}
                {listItems.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="py-[60px] border-t"
                        style={{ borderColor: "var(--t-border)" }}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                            <div className="lg:col-span-4">
                                <h3 className="type-h2 sticky top-32" style={{ color: "var(--t-text)" }}>
                                    {listTitle ? listTitle.replace(':', '') : "When it helps"}
                                </h3>
                            </div>

                            <div className="lg:col-span-8 flex flex-col gap-10">
                                {listItems.map((item, i) => (
                                    <div key={i} className="flex items-start gap-8 relative group">
                                        <div className="w-[1px] h-full absolute left-[15px] top-8 opacity-20 transition-opacity duration-300 group-hover:opacity-100" style={{ backgroundColor: "var(--t-accent)", display: i === listItems.length - 1 ? 'none' : 'block' }} />
                                        <div className="w-8 h-8 rounded-full flex shrink-0 items-center justify-center mt-1 z-10 transition-colors duration-300" style={{ backgroundColor: "var(--t-bg)", border: "2px solid var(--t-accent)" }}>
                                            <div className="w-2.5 h-2.5 rounded-full transition-transform duration-300 group-hover:scale-125" style={{ backgroundColor: "var(--t-accent)" }} />
                                        </div>
                                        <span className="text-xl md:text-2xl font-light leading-relaxed" style={{ color: "var(--t-text)" }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* 3. CAPABILITIES / CORE FOCUS (Editorial Split Layout) */}
                <div className="py-[80px] border-t" style={{ borderColor: "var(--t-border)" }}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                        {/* Left Side: Sticky Title & Context */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="lg:col-span-5 lg:sticky top-32 h-fit"
                        >
                            <h2 className="type-h2 mb-6" style={{ color: "var(--t-text)" }}>
                                Core Focus Areas
                            </h2>
                            <p className="type-body-lg md:max-w-md" style={{ color: "var(--t-text-muted)" }}>
                                We isolate the critical domains that dictate the success or failure of a technical initiative.
                                By focusing our expertise strictly within these boundaries, we deliver precision where it matters most.
                            </p>
                        </motion.div>

                        {/* Right Side: Stacked Typography List (Borderless with 3D Icons) */}
                        <div className="lg:col-span-7 flex flex-col">
                            {service.helpsWith.map((item, i) => {
                                const coreFocusIcons = [
                                    Icons3D.Strategy,
                                    Icons3D.Software,
                                    Icons3D.Design,
                                    Icons3D.Database,
                                    Icons3D.Cloud,
                                    Icons3D.Backend,
                                    Icons3D.AI,
                                    Icons3D.Support,
                                ];
                                const FocusIcon = coreFocusIcons[i % coreFocusIcons.length];

                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.5, delay: i * 0.05 }}
                                        className="group flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 py-5 transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/5 px-6 -mx-6 rounded-[var(--t-radius-card)] cursor-default"
                                    >
                                        <div className="w-14 h-14 shrink-0 rounded-[var(--t-radius-md)] flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110 shadow-sm relative overflow-hidden" style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}>
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" style={{ backgroundColor: "var(--t-accent)" }} />
                                            <FocusIcon className="w-8 h-8 drop-shadow-md relative z-10" />
                                        </div>
                                        <span className="font-display font-medium text-2xl lg:text-3xl leading-tight transition-colors duration-300 group-hover:text-[var(--t-accent)]" style={{ color: "var(--t-text)" }}>
                                            {item}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* 4. EXECUTION & OUTCOMES (Merged Journey + Deliverables with 3D Icons) */}
                <div className="py-[100px] border-t mb-20" style={{ borderColor: "var(--t-border)" }}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                        {/* Left Side: PROJECT JOURNEY with 3D Icons Timeline */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className="lg:col-span-5 flex flex-col lg:sticky top-32 h-fit"
                        >
                            <h2 className="type-h2 mb-12" style={{ color: "var(--t-text)" }}>
                                How We Execute
                            </h2>
                            <div className="relative flex flex-col gap-10 lg:pl-4">
                                {/* Vertical connection line track */}
                                <div className="absolute left-[36px] lg:left-[52px] top-10 bottom-10 w-[2px] opacity-10" style={{ backgroundColor: "var(--t-text-muted)" }} />

                                {journeySteps.map((step, i) => {
                                    const StepIcon = getJourneyIcon(step);
                                    return (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20, scale: 0.95 }}
                                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ duration: 0.5, delay: i * 0.15 }}
                                            className="relative z-10 flex items-center gap-6 md:gap-8 group"
                                        >
                                            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-[var(--t-radius-md)] flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] relative overflow-hidden"
                                                style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}>
                                                {/* Ambient back-glow on hover */}
                                                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" style={{ backgroundColor: "var(--t-accent)" }} />
                                                <StepIcon className="w-10 h-10 md:w-12 md:h-12 drop-shadow-md relative z-10" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1" style={{ color: "var(--t-accent)" }}>Step 0{i + 1}</span>
                                                <span className="font-display text-2xl md:text-3xl font-bold transition-colors duration-300 group-hover:text-[var(--t-accent)]" style={{ color: "var(--t-text)" }}>
                                                    {step}
                                                </span>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Right Side: TYPICAL DELIVERABLES & CTA (Bento List Layout) */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className="lg:col-span-7 flex flex-col justify-between"
                        >
                            <div>
                                <h2 className="type-h3 mb-10 mt-2 lg:mt-0" style={{ color: "var(--t-text)" }}>
                                    Typical Deliverables
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                    {service.deliverables.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.95, y: 15 }}
                                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                            whileHover={{ scale: 1.03, y: -4 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ duration: 0.4, delay: i * 0.08, type: "spring", stiffness: 100 }}
                                            className="group flex p-6 md:p-8 rounded-[var(--t-radius-card)] items-start gap-4 transition-all duration-300 shadow-sm hover:shadow-xl"
                                            style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", boxShadow: "inset 0 0 40px rgba(255,255,255,0.01)" }}
                                        >
                                            <div className="mt-1 w-6 h-6 rounded-full flex shrink-0 items-center justify-center opacity-30 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" style={{ backgroundColor: "var(--t-accent)" }}>
                                                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="font-medium text-lg leading-snug transition-colors duration-300 group-hover:text-[var(--t-accent)]" style={{ color: "var(--t-text)" }}>
                                                {item}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Integrated Call to Action anchored to the deliverables */}
                            <div className="mt-16 pt-8 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-8 sm:gap-6" style={{ borderColor: "var(--t-border)" }}>
                                <p className="text-sm font-bold uppercase tracking-widest opacity-60" style={{ color: "var(--t-text-muted)" }}>
                                    Ready to shape your journey?
                                </p>
                                <Link href="/contact" className="inline-flex max-w-max items-center gap-3 justify-center px-10 py-4 rounded-[var(--t-radius-btn)] text-base font-semibold transition-all active:scale-[0.98] hover:bg-[var(--t-btn-hover)] shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2" style={{ backgroundColor: "var(--t-btn-bg)", color: "var(--t-btn-text)" }}>
                                    {service.cta}
                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>

            {/* Global CTA */}
            <CTASection />

        </main>
    );
}
