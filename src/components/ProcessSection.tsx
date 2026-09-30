"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
    { num: "01", title: "Problem Framing", desc: "We explore business context, market dynamics, and user needs to clearly define the real problem before building anything." },
    { num: "02", title: "Shaping the Direction", desc: "We refine initial ideas into clear strategies by aligning business goals with technical feasibility and user expectations." },
    { num: "03", title: "Design & Prototype", desc: "We bring concepts to life through prototyping and real-world testing, validating usability and refining the experience." },
    { num: "04", title: "Build & Deliver", desc: "We engineer production-grade solutions through disciplined development, continuous integration, and rigorous quality assurance." },
];

export function ProcessSection() {
    return (
        <section className="py-32 relative overflow-clip">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none"
                style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }} />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    <div className="lg:sticky lg:top-32 lg:h-max">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
                            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: "var(--t-text)" }}>
                                High-quality work with{" "}
                                <span className="italic" style={{ color: "var(--t-accent)" }}>real value</span>{" "}
                                considered.
                            </h2>
                            <p className="text-lg leading-relaxed mb-10 max-w-lg" style={{ color: "var(--t-text-muted)" }}>
                                Our working process revolves around maximizing clarity and impact.
                                It begins with thorough research and planning, where we gather
                                relevant information and outline key objectives aligned with your business.
                            </p>
                            <Link href="/approach"
                                className="group inline-flex items-center gap-3 h-13 px-8 rounded-full font-medium transition-all duration-300"
                                style={{ border: "1px solid var(--t-border)", backgroundColor: "var(--t-bg-surface)", color: "var(--t-text)" }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--t-accent)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--t-border)"; }}
                            >
                                Learn More
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </motion.div>
                    </div>

                    <div className="flex flex-col gap-6">
                        {steps.map((step, i) => (
                            <motion.div key={step.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group rounded-2xl p-8 transition-all duration-500 cursor-default"
                                style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}
                                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--t-accent)"; }}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--t-border)"; }}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="font-display text-xl md:text-2xl font-bold group-hover:text-[var(--t-accent)] transition-colors" style={{ color: "var(--t-text)" }}>{step.title}</h3>
                                    <span className="text-sm font-mono" style={{ color: "var(--t-text-muted)" }}>({step.num})</span>
                                </div>
                                <p className="leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
