"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";

const whySvaan = [
    {
        title: "Meaningful problems",
        desc: "Work on practical business and technology challenges."
    },
    {
        title: "Cross-disciplinary learning",
        desc: "Learn across strategy, design, engineering, and delivery."
    },
    {
        title: "Continuous evolution",
        desc: "Keep developing the way we work and the technology we use."
    },
    {
        title: "Purposeful work",
        desc: "Focus on outcomes that matter to the people and organizations we work with."
    }
];

const hiringProcess = [
    "Explore", "Apply", "Review", "Interview", "Assessment (if required)", "Decision"
];

const dummyJobs = [
    { id: "frontend-engineer", title: "Frontend Engineer", location: "Remote / India", type: "Full-Time", dept: "Engineering & Delivery" },
    { id: "product-manager", title: "Product Manager", location: "Remote", type: "Full-Time", dept: "Product & Experience" },
    { id: "engineering-manager", title: "Engineering Manager", location: "India", type: "Full-Time", dept: "Engineering & Delivery" },
];

export default function CareersPage() {
    return (
        <main className="min-h-screen pt-32 pb-0 relative bg-[var(--t-bg)]">
            {/* Background Orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 max-h-[80vh]">
                <motion.div
                    animate={{ x: [0, -50, 0], y: [0, -20, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[10%] left-[10%] w-[600px] h-[600px] rounded-full blur-[200px]"
                    style={{ backgroundColor: "var(--t-accent)", opacity: "calc(var(--t-orb-opacity) * 0.7)" }}
                />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">

                {/* Careers Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="pb-24 lg:pb-32 pt-8 w-full md:w-[80%]"
                >
                    <div className="inline-flex items-center gap-4 mb-8">
                        <div className="h-[1px] w-12" style={{ backgroundColor: "var(--t-accent)" }} />
                        <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--t-text-muted)" }}>Careers</span>
                    </div>
                    <h1
                        className="font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-tight mb-8"
                        style={{ color: "var(--t-text)" }}
                    >
                        Build meaningful technology with people who <span className="italic" style={{ color: "var(--t-accent)" }}>care about the problem.</span>
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed max-w-3xl mb-12" style={{ color: "var(--t-text-muted)" }}>
                        Good technology starts with good thinking. We look for people who want to understand the problem, work with others, and keep improving how technology creates value.
                    </p>

                    <button
                        onClick={() => document.getElementById("open-roles")?.scrollIntoView({ behavior: 'smooth' })}
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all duration-300 group"
                        style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)", color: "var(--t-text)" }}
                    >
                        View Opportunities
                        <svg className="w-5 h-5 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                    </button>
                </motion.div>

                {/* Why SVaaN Grid */}
                <div className="mb-40">
                    <h2 className="font-display text-3xl font-bold mb-10" style={{ color: "var(--t-text)" }}>Why SVaaN</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {whySvaan.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="rounded-3xl p-10"
                                style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}
                            >
                                <h3 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>{item.title}</h3>
                                <p className="leading-relaxed text-lg" style={{ color: "var(--t-text-muted)" }}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* How We Work Callout */}
                <div className="mb-40 max-w-4xl border-l-[4px] pl-8 md:pl-12 py-4" style={{ borderColor: "var(--t-accent)" }}>
                    <h2 className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: "var(--t-text-muted)" }}>How We Work</h2>
                    <p className="font-display text-3xl md:text-4xl font-semibold leading-snug" style={{ color: "var(--t-text)" }}>
                        We value people who are curious about the problem, communicate clearly, collaborate across disciplines, and keep learning.
                    </p>
                </div>

                {/* Hiring Process */}
                <div className="mb-40">
                    <h2 className="font-display text-3xl font-bold mb-10" style={{ color: "var(--t-text)" }}>The Hiring Process</h2>
                    <div className="flex flex-col md:flex-row flex-wrap items-center gap-4">
                        {hiringProcess.map((step, idx) => (
                            <div key={idx} className="flex items-center gap-4 w-full md:w-auto">
                                <div
                                    className="px-6 py-3 rounded-full font-semibold whitespace-nowrap w-full md:w-auto text-center"
                                    style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-text)" }}
                                >
                                    {step}
                                </div>
                                {idx < hiringProcess.length - 1 && (
                                    <div className="hidden md:block">
                                        <svg className="w-5 h-5 opacity-40" style={{ color: "var(--t-text)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Open Roles */}
                <div id="open-roles" className="mb-32 scroll-mt-32">
                    <div className="mb-12">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--t-text)" }}>Explore current opportunities.</h2>
                        <p className="text-xl leading-relaxed max-w-2xl" style={{ color: "var(--t-text-muted)" }}>
                            Browse open positions and find an opportunity that matches your experience, interests, and career direction.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 border-t" style={{ borderColor: "var(--t-border)" }}>
                        {dummyJobs.map((job) => (
                            <Link href="#" key={job.id} className="group block border-b py-8 hover:px-6 transition-all duration-300" style={{ borderColor: "var(--t-border)" }}>
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div>
                                        <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-[var(--t-accent)] transition-colors" style={{ color: "var(--t-text)" }}>{job.title}</h3>
                                        <div className="flex items-center gap-4 text-sm font-semibold" style={{ color: "var(--t-text-muted)" }}>
                                            <span>{job.location}</span>
                                            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "var(--t-border)" }} />
                                            <span>{job.type}</span>
                                            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "var(--t-border)" }} />
                                            <span>{job.dept}</span>
                                        </div>
                                    </div>
                                    <div className="rounded-full w-12 h-12 flex items-center justify-center shrink-0 transition-colors group-hover:bg-[var(--t-accent)]" style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)" }}>
                                        <svg className="w-5 h-5 transition-transform group-hover:text-white" style={{ color: "var(--t-text)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>

            <CTASection />

        </main>
    );
}
