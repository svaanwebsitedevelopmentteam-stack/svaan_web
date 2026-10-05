"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Icons3D } from "@/components/ui/Icons3D";

const steps = [
    {
        num: "01",
        title: "Problem Framing",
        desc: "We explore business context, market dynamics, and user needs to clearly define the real problem before building anything.",
        icon: <Icons3D.ProcessDiscover className="w-10 h-10" />
    },
    {
        num: "02",
        title: "Shaping the Direction",
        desc: "We refine initial ideas into clear strategies by aligning business goals with technical feasibility and user expectations.",
        icon: <Icons3D.ProcessShape className="w-10 h-10" />
    },
    {
        num: "03",
        title: "Design & Prototype",
        desc: "We bring concepts to life through prototyping and real-world testing, validating usability and refining the experience.",
        icon: <Icons3D.ProcessPrototype className="w-10 h-10" />
    },
    {
        num: "04",
        title: "Build & Deliver",
        desc: "We engineer production-grade solutions through disciplined development, continuous integration, and rigorous quality assurance.",
        icon: <Icons3D.ProcessBuild className="w-10 h-10" />
    },
];

export function ProcessSection() {
    return (
        <section className="py-[60px] relative overflow-clip">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none"
                style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }} />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    <div className="lg:sticky lg:top-32 lg:h-max">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
                            <h2 className="type-h2 mb-6" style={{ color: "var(--t-text)" }}>
                                High-quality work with{" "}
                                <span className="italic" style={{ color: "var(--t-accent)" }}>real value</span>{" "}
                                considered.
                            </h2>
                            <p className="type-body-lg mb-10 max-w-lg" style={{ color: "var(--t-text-muted)" }}>
                                Our working process revolves around maximizing clarity and impact.
                                It begins with thorough research and planning, where we gather
                                relevant information and outline key objectives aligned with your business.
                            </p>
                            <Link href="/approach"
                                className="group inline-flex items-center gap-3 h-12 px-7 rounded-[var(--t-radius-btn)] font-semibold text-base transition-all duration-200 border hover:bg-[var(--t-bg-surface)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2"
                                style={{ borderColor: "var(--t-border)", backgroundColor: "var(--t-bg-surface)", color: "var(--t-text)" }}
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
                                className="group rounded-[var(--t-radius-card)] p-8 transition-all duration-300 border hover:border-[var(--t-accent)] hover:shadow-md cursor-default"
                                style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <h3 className="type-h3 group-hover:text-[var(--t-accent)] transition-colors" style={{ color: "var(--t-text)" }}>{step.title}</h3>
                                    <div className="flex items-center justify-center w-12 h-12 rounded-[var(--t-radius-md)] transition-colors duration-300" style={{ backgroundColor: "var(--t-bg-surface)", color: "var(--t-accent)" }}>
                                        {step.icon}
                                    </div>
                                </div>
                                <p className="type-body-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
