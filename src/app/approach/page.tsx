"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icons3D } from "@/components/ui/Icons3D";
import { CTASection } from "@/components/CTASection";

const methodologies = [
    {
        num: "01",
        title: "Understand",
        subtitle: "Understand before deciding.",
        desc: "We clarify the business challenge, users, context, constraints, and desired progress.",
        deliverables: ["Discovery", "Stakeholder discussions", "Problem framing", "Current-state review", "Requirement analysis", "Opportunity identification"],
        icon: Icons3D.ProcessDiscover
    },
    {
        num: "02",
        title: "Strategize",
        subtitle: "Turn complexity into direction.",
        desc: "We identify priorities, opportunities, and the direction that makes sense for the situation.",
        deliverables: ["Prioritization", "Product and technology direction", "Transformation planning", "Solution options", "Roadmap definition"],
        icon: Icons3D.ProcessShape
    },
    {
        num: "03",
        title: "Design",
        subtitle: "Make the solution useful before making it real.",
        desc: "We translate direction into experiences, products, workflows, and solution concepts.",
        deliverables: ["User experience design", "Product definition", "Prototyping", "Interface design", "Solution design"],
        icon: Icons3D.ProcessPrototype
    },
    {
        num: "04",
        title: "Build",
        subtitle: "Turn direction into working technology.",
        desc: "We engineer and deliver the solution with appropriate technology, quality practices, and collaboration.",
        deliverables: ["Application development", "Integration", "Quality assurance", "Deployment", "Delivery management"],
        icon: Icons3D.ProcessBuild
    },
    {
        num: "05",
        title: "Evolve",
        subtitle: "Improve as the business changes.",
        desc: "We support, monitor, learn from, and improve technology after launch.",
        deliverables: ["Application support", "Infrastructure support", "Production support", "Cloud management", "Performance improvement", "Continuous enhancement"],
        icon: Icons3D.Support
    }
];

const principles = [
    { title: "Start with the problem", desc: "Understand the challenge before defining the solution." },
    { title: "Connect strategy and execution", desc: "Keep direction connected to what can actually be delivered." },
    { title: "Design for people and business", desc: "Balance user needs with business objectives." },
    { title: "Build for continuous change", desc: "Create solutions that can evolve as requirements change." },
    { title: "Keep the outcome visible", desc: "Measure progress against the business and user outcomes that matter." }
];

const engagementModels = [
    { step: "01", title: "Strategic Clarity", desc: "Understanding the market and outlining the roadmap." },
    { step: "02", title: "Product Validation", desc: "Shaping and verifying the product through MVPs." },
    { step: "03", title: "Software Build", desc: "Heavy engineering for new platforms and systems." },
    { step: "04", title: "Ongoing Support", desc: "Improving and maintaining existing live systems." }
];

export default function ApproachPage() {
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
                            Our Approach
                        </div>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-4 sm:mb-6 max-w-4xl"
                        style={{ color: "var(--t-text)" }}>
                        Understand the challenge. Shape the direction.{" "}
                        <span className="italic" style={{ color: "var(--t-accent)" }}>Build what matters.</span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed"
                        style={{ color: "var(--t-text-muted)" }}>
                        We do not begin with technology. We begin with understanding. Then we connect strategy, design, and engineering to create practical, measurable progress.
                    </motion.p>
                </div>
            </section>

            {/* 2. CORE STATEMENT (THE PHILOSOPHY) */}
            <section className="py-12 sm:py-16 lg:py-20 relative overflow-clip border-b"
                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }}
                        className="p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-10 border relative overflow-hidden shadow-md"
                        style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>

                        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[var(--t-accent)] to-transparent" />

                        <div className="shrink-0 md:w-5/12">
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-md border text-xs font-semibold tracking-wider uppercase"
                                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                                The Philosophy
                            </div>
                            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug" style={{ color: "var(--t-text)" }}>
                                Start with the problem,<br className="hidden sm:block" /> not the solution.
                            </h2>
                        </div>

                        <div className="md:w-7/12 border-t md:border-t-0 md:border-l pt-5 md:pt-0 md:pl-10 text-sm sm:text-base lg:text-lg leading-relaxed"
                            style={{ borderColor: "var(--t-border)", color: "var(--t-text-muted)" }}>
                            <p>
                                The right technology decision depends entirely on the problem it is meant to solve. Our approach creates space to understand the business context, clarify priorities, and build with purpose.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 3. CORE PRINCIPLES */}
            <section className="py-14 sm:py-20 lg:py-28 relative overflow-clip border-b"
                style={{ backgroundColor: "var(--t-bg)", borderColor: "var(--t-border)" }}>
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-md border text-xs font-semibold tracking-wider uppercase"
                                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                                Core Principles
                            </div>
                            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-3 sm:mb-4" style={{ color: "var(--t-text)" }}>
                                How we think and <span className="italic" style={{ color: "var(--t-accent)" }}>deliver.</span>
                            </h2>
                            <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                                The guiding engineering rules that govern every client engagement at SVaaN.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {principles.map((principle, i) => (
                            <motion.div
                                key={principle.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[var(--t-accent)] flex flex-col justify-between group"
                                style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-5">
                                        <span className="w-9 h-9 rounded-xl font-mono text-xs font-bold flex items-center justify-center border transition-colors duration-300 group-hover:bg-[var(--t-accent)] group-hover:text-white"
                                            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                            0{i + 1}
                                        </span>
                                        <span className="text-[11px] font-mono uppercase tracking-widest opacity-40">
                                            Principle // 0{i + 1}
                                        </span>
                                    </div>
                                    <h3 className="font-display text-lg sm:text-xl font-bold mb-2.5 group-hover:text-[var(--t-accent)] transition-colors duration-200"
                                        style={{ color: "var(--t-text)" }}>
                                        {principle.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                                        {principle.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. THE SVAAN FRAMEWORK (Five Stages) */}
            <section className="py-14 sm:py-20 lg:py-28 relative overflow-clip border-b"
                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                    <div className="flex flex-col lg:flex-row items-start gap-10 sm:gap-14 lg:gap-16">
                        {/* Sticky Left Sidebar (Desktop sticky, mobile static) */}
                        <div className="lg:w-4/12 lg:sticky lg:top-32 relative">
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-md border text-xs font-semibold tracking-wider uppercase"
                                style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                                The Framework
                            </div>
                            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4" style={{ color: "var(--t-text)" }}>
                                Five Stages of <span className="italic" style={{ color: "var(--t-accent)" }}>Execution.</span>
                            </h2>
                            <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                                A systematic methodology ensuring deep alignment before technical execution, leading to stable, long-lasting outcomes.
                            </p>
                        </div>

                        {/* Right Stacked Stage Cards */}
                        <div className="lg:w-8/12 flex flex-col gap-6 sm:gap-8 w-full">
                            {methodologies.map((step, i) => (
                                <motion.div
                                    key={step.num}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.5, delay: i * 0.05 }}
                                    className="rounded-2xl sm:rounded-3xl p-6 sm:p-9 lg:p-10 border transition-all duration-300 hover:shadow-xl hover:border-[var(--t-accent)] group"
                                    style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 border shadow-sm group-hover:scale-105 transition-transform duration-300"
                                                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                                <step.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                                            </div>
                                            <div>
                                                <span className="text-[11px] font-mono font-bold uppercase tracking-wider block opacity-75" style={{ color: "var(--t-accent)" }}>
                                                    Stage {step.num}
                                                </span>
                                                <h3 className="font-display text-xl sm:text-2xl font-bold" style={{ color: "var(--t-text)" }}>
                                                    {step.title}
                                                </h3>
                                            </div>
                                        </div>
                                        <span className="font-display text-4xl sm:text-5xl font-black opacity-10 self-end sm:self-auto" style={{ color: "var(--t-text)" }}>
                                            {step.num}
                                        </span>
                                    </div>

                                    <h4 className="text-base sm:text-lg font-bold mb-2.5" style={{ color: "var(--t-accent)" }}>
                                        {step.subtitle}
                                    </h4>
                                    <p className="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 pb-6 sm:pb-8 border-b"
                                        style={{ color: "var(--t-text-muted)", borderColor: "var(--t-border)" }}>
                                        {step.desc}
                                    </p>

                                    <div>
                                        <h5 className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "var(--t-text)" }}>
                                            Typical Activities & Deliverables
                                        </h5>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                                            {step.deliverables.map(item => (
                                                <li key={item} className="flex items-start gap-2.5">
                                                    <div className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border"
                                                        style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-xs sm:text-sm font-medium" style={{ color: "var(--t-text-muted)" }}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. ENGAGEMENT MODELS */}
            <section className="py-14 sm:py-20 lg:py-28 relative overflow-clip border-b"
                style={{ backgroundColor: "var(--t-bg)", borderColor: "var(--t-border)" }}>
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-md border text-xs font-semibold tracking-wider uppercase"
                                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                                Flexible Delivery
                            </div>
                            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-3 sm:mb-4" style={{ color: "var(--t-text)" }}>
                                The shape of the engagement follows the <span className="italic" style={{ color: "var(--t-accent)" }}>problem.</span>
                            </h2>
                            <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                                Not every challenge needs the same starting point. We assemble the exact combination of strategy, engineering, and support you need.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {engagementModels.map((m, i) => (
                            <motion.div
                                key={m.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="p-6 sm:p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-[var(--t-accent)] flex flex-col justify-between group"
                                style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}
                            >
                                <div>
                                    <span className="w-8 h-8 rounded-lg font-mono text-xs font-bold flex items-center justify-center mb-6 border transition-colors duration-300 group-hover:bg-[var(--t-accent)] group-hover:text-white"
                                        style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                        {m.step}
                                    </span>
                                    <h3 className="font-display text-lg sm:text-xl font-bold mb-2.5 group-hover:text-[var(--t-accent)] transition-colors duration-200"
                                        style={{ color: "var(--t-text)" }}>
                                        {m.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                                        {m.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. CTA SECTION */}
            <CTASection />
        </main>
    );
}
