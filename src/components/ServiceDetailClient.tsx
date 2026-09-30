"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { ServiceData } from "@/data/servicesData";

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
        <main className="min-h-screen pt-[140px] pb-0 relative">

            {/* Background Orbs (Matching Work page exact styles) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 max-h-screen">
                <motion.div
                    animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[15%] right-[15%] w-[500px] h-[500px] rounded-full blur-[180px]"
                    style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }}
                />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">

                {/* 1. HERO SECTION (Editorial, Left-aligned, unboxed) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="pb-[60px] lg:pb-[60px] pt-8 w-full md:w-[85%]"
                >
                    <div className="inline-flex items-center gap-4 mb-8">
                        <div className="h-[1px] w-12" style={{ backgroundColor: "var(--t-accent)" }} />
                        <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--t-text-muted)" }}>
                            {service.capability}
                        </span>
                    </div>

                    <h1 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-tight mb-10" style={{ color: "var(--t-text)" }}>
                        {service.title}
                    </h1>

                    <div className="text-lg md:text-xl leading-relaxed max-w-3xl space-y-6" style={{ color: "var(--t-text-muted)" }}>
                        {paragraphs.map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                        ))}
                    </div>
                </motion.div>

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
                                <h3 className="text-3xl md:text-4xl font-display font-bold leading-tight sticky top-32" style={{ color: "var(--t-text)" }}>
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

                {/* 3. CAPABILITIES / CORE FOCUS (Editorial Clean Typography Grid) */}
                <div className="py-[60px] border-t" style={{ borderColor: "var(--t-border)" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="mb-16"
                    >
                        <h2 className="font-display text-4xl lg:text-5xl font-bold" style={{ color: "var(--t-text)" }}>Core Focus Areas</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        {service.helpsWith.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group flex flex-col items-start cursor-default"
                            >
                                <div className="text-sm font-bold tracking-widest mb-4 opacity-50" style={{ color: "var(--t-text-muted)" }}>
                                    {(i + 1).toString().padStart(2, '0')}
                                </div>
                                <span className="font-display font-medium text-2xl md:text-3xl leading-tight transition-colors duration-300 group-hover:text-[var(--t-accent)]" style={{ color: "var(--t-text)" }}>
                                    {item}
                                </span>
                                <div className="w-12 h-[2px] mt-8 transition-all duration-300 group-hover:w-full group-hover:bg-[var(--t-accent)]" style={{ backgroundColor: "var(--t-border)" }} />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 4. DELIVERABLES & JOURNEY (Unboxed Split) */}
                <div className="py-[60px] border-t mb-20" style={{ borderColor: "var(--t-border)" }}>
                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 lg:gap-24">

                        {/* Deliverables */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className="xl:col-span-5"
                        >
                            <h2 className="font-display text-3xl font-bold mb-10" style={{ color: "var(--t-text)" }}>Typical Deliverables</h2>
                            <ul className="flex flex-col gap-6">
                                {service.deliverables.map((item, i) => (
                                    <li key={i} className="flex items-center gap-5 text-xl font-light" style={{ color: "var(--t-text-muted)" }}>
                                        <svg className="w-5 h-5 flex-shrink-0" style={{ color: "var(--t-accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Journey & CTA */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className="xl:col-span-7 flex flex-col gap-16"
                        >
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-widest mb-10 opacity-50" style={{ color: "var(--t-text)" }}>Project Journey</h3>

                                <div className="flex flex-wrap items-center gap-4 md:gap-6">
                                    {journeySteps.map((step, index) => (
                                        <div key={index} className="flex items-center gap-4 md:gap-6">
                                            <div className="font-display text-2xl lg:text-3xl font-bold" style={{ color: "var(--t-text)" }}>
                                                {step}
                                            </div>
                                            {index < journeySteps.length - 1 && (
                                                <svg className="w-6 h-6 opacity-30" style={{ color: "var(--t-text)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Link href="/contact" className="inline-flex max-w-max items-center gap-3 justify-center px-10 py-5 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl" style={{ backgroundColor: "var(--t-btn-bg)", color: "var(--t-btn-text)" }}>
                                {service.cta}
                            </Link>

                        </motion.div>
                    </div>
                </div>

            </div>

            {/* Global CTA */}
            <CTASection />

        </main>
    );
}
