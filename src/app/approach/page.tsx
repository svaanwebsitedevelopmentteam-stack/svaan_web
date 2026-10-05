"use client";

import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";

import { Icons3D } from "@/components/ui/Icons3D";

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

export default function ApproachPage() {
    return (
        <main className="min-h-screen pt-[140px] pb-0 relative bg-[var(--t-bg)] overflow-x-clip">
            {/* Background Orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 max-h-[80vh]">
                <motion.div
                    animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[10%] right-[10%] w-[700px] h-[700px] rounded-full blur-[250px]"
                    style={{ backgroundColor: "var(--t-accent)", opacity: "calc(var(--t-orb-opacity) * 0.8)" }}
                />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">

                {/* Approach Hero (Updated layout width & size per feedback) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="pb-[60px] lg:pb-[60px] pt-8 w-full md:w-[80%]"
                >
                    <div className="inline-flex items-center gap-4 mb-8">
                        <div className="h-[1px] w-12" style={{ backgroundColor: "var(--t-accent)" }} />
                        <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--t-text-muted)" }}>Our Approach</span>
                    </div>
                    <h1
                        className="type-display mb-8"
                        style={{ color: "var(--t-text)" }}
                    >
                        Understand the challenge. Shape the direction. <span className="italic" style={{ color: "var(--t-accent)" }}>Build what matters.</span>
                    </h1>
                    <p className="type-body-lg max-w-3xl" style={{ color: "var(--t-text-muted)" }}>
                        We do not begin with technology. We begin with understanding. Then we connect strategy, design, and technology to create practical progress.
                    </p>
                </motion.div>

                {/* Why this approach - Simplified Minimal Statement */}
                <div className="mb-32">
                    <div className="flex flex-col md:flex-row md:items-end justify-between border-b pb-12" style={{ borderColor: "var(--t-border)" }}>
                        <h2 className="type-h2 md:w-[60%] mb-6 md:mb-0" style={{ color: "var(--t-text)" }}>
                            Start with the problem,<br />not the solution.
                        </h2>
                        <p className="type-body-lg md:w-[35%]" style={{ color: "var(--t-text-muted)" }}>
                            The right technology decision depends on the problem it is meant to solve. Our approach creates space to understand the business context, clarify priorities, and build with purpose.
                        </p>
                    </div>
                </div>

                {/* Core Principles - Elegant Premium List */}
                <div className="mb-40">
                    <div className="mb-12">
                        <h3 className="type-h3" style={{ color: "var(--t-text)" }}>Our Principles</h3>
                    </div>
                    <div className="flex flex-col border-t border-b" style={{ borderColor: "var(--t-border)" }}>
                        {[
                            { title: "Start with the problem", desc: "Understand the challenge before defining the solution." },
                            { title: "Connect strategy and execution", desc: "Keep direction connected to what can actually be delivered." },
                            { title: "Design for people and business", desc: "Balance user needs with business objectives." },
                            { title: "Build for continuous change", desc: "Create solutions that can evolve as requirements change." },
                            { title: "Keep the outcome visible", desc: "Measure progress against the business and user outcomes that matter." }
                        ].map((principle, i) => (
                            <motion.div
                                key={principle.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex flex-col md:flex-row md:items-center justify-between py-10 md:py-12 border-b last:border-b-0 group"
                                style={{ borderColor: "var(--t-border)" }}
                            >
                                <div className="flex items-center gap-8 md:w-[50%] mb-4 md:mb-0">
                                    <span className="font-display text-2xl font-bold opacity-30 group-hover:opacity-100 transition-opacity" style={{ color: "var(--t-accent)" }}>0{i + 1} {"//"}</span>
                                    <h4 className="type-h3" style={{ color: "var(--t-text)" }}>{principle.title}</h4>
                                </div>
                                <div className="md:w-[40%]">
                                    <p className="type-body opacity-70 group-hover:opacity-100 transition-opacity" style={{ color: "var(--t-text-muted)" }}>{principle.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* The SVaaN Framework (Vertical Sticky Scroll Layout) */}
                <div className="mb-40">
                    <div className="flex flex-col md:flex-row items-start gap-16">

                        <div className="md:w-1/3 md:sticky md:top-32 relative">
                            <h2 className="type-h2 mb-6" style={{ color: "var(--t-text)" }}>Five Stages</h2>
                            <p className="type-body-lg" style={{ color: "var(--t-text-muted)" }}>
                                A systematic methodology ensuring deep alignment before technical execution, leading to stable, long-lasting outcomes.
                            </p>
                        </div>

                        <div className="md:w-2/3 flex flex-col gap-12">
                            {methodologies.map((step) => (
                                <motion.div
                                    key={step.num}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className="rounded-[var(--t-radius-card)] p-10 md:p-14"
                                    style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
                                        <div className="flex items-center gap-6">
                                            <div className="w-16 h-16 rounded-[var(--t-radius-md)] flex items-center justify-center" style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-accent)" }}>
                                                <step.icon className="w-10 h-10 drop-shadow-md" />
                                            </div>
                                            <h3 className="type-h3" style={{ color: "var(--t-text)" }}>{step.title}</h3>
                                        </div>
                                        <span className="font-display text-5xl font-bold opacity-10" style={{ color: "var(--t-text)" }}>{step.num}</span>
                                    </div>

                                    <h4 className="text-xl font-bold mb-4" style={{ color: "var(--t-accent)" }}>{step.subtitle}</h4>
                                    <p className="text-lg leading-relaxed mb-10 pb-10 border-b" style={{ color: "var(--t-text-muted)", borderColor: "var(--t-border)" }}>
                                        {step.desc}
                                    </p>

                                    <h5 className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: "var(--t-text)" }}>Typical Activities</h5>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {step.deliverables.map(item => (
                                            <li key={item} className="flex items-start gap-3">
                                                <svg className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "var(--t-accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                                <span className="font-medium text-sm" style={{ color: "var(--t-text-muted)" }}>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Engagement Model - Editorial 4-Column Typography Layout */}
                <div className="mb-40">
                    <div className="mb-20">
                        <h2 className="type-h2 mb-6 lg:max-w-3xl" style={{ color: "var(--t-text)" }}>
                            The shape of the engagement follows the problem.
                        </h2>
                        <p className="type-body-lg max-w-3xl" style={{ color: "var(--t-text-muted)" }}>
                            Not every challenge needs the same starting point or delivery model. We work with clients to identify the right combination of strategy, product, technology, engineering, and ongoing support.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 border-t border-b divide-y md:divide-y-0 md:divide-x" style={{ borderColor: "var(--t-border)" }}>
                        {[
                            { step: "01", title: "Strategic Clarity", desc: "Understanding the market and outlining the roadmap." },
                            { step: "02", title: "Product Validation", desc: "Shaping and verifying the product through MVPs." },
                            { step: "03", title: "Software Build", desc: "Heavy engineering for new platforms and systems." },
                            { step: "04", title: "Ongoing Support", desc: "Improving and maintaining existing live systems." }
                        ].map((m, i) => (
                            <motion.div
                                key={m.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="py-10 md:py-12 md:px-8 first:pt-10 first:md:pl-0 last:pb-10 last:md:pr-0 flex flex-col items-start group"
                                style={{ borderColor: "var(--t-border)" }}
                            >
                                <span className="font-mono text-sm font-semibold tracking-widest mb-12 opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: "var(--t-accent)" }}>
                                    {m.step}
                                </span>
                                <h3 className="type-h3 mb-4" style={{ color: "var(--t-text)" }}>
                                    {m.title}
                                </h3>
                                <p className="type-body-sm" style={{ color: "var(--t-text-muted)" }}>
                                    {m.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>

            <CTASection />

        </main>
    );
}
