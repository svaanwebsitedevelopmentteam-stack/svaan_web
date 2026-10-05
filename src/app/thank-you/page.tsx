"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ThankYouPage() {
    return (
        <main className="min-h-screen pt-[180px] pb-[100px] relative text-left">
            {/* Cinematic Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />
                <motion.div
                    animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[0%] right-[10%] w-[500px] h-[500px] rounded-full blur-[150px]"
                    style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }}
                />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10 w-full">

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start relative w-full h-full">

                    {/* Left side: Message Identity (Sticky) */}
                    <div className="flex flex-col items-start lg:sticky lg:top-40">
                        {/* <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20, duration: 0.8 }}
                            className="w-20 h-20 rounded-3xl flex items-center justify-center mb-10 shadow-2xl"
                            style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-accent)" }}
                        >
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </motion.div> */}

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <h1 className="font-display text-[clamp(2.5rem,5.5vw,5rem)] font-bold leading-[1.05] tracking-tight mb-6" style={{ color: "var(--t-text)" }}>
                                Request <br /><span className="italic" style={{ color: "var(--t-accent)" }}>Received.</span>
                            </h1>
                            <p className="text-xl leading-relaxed mb-10 max-w-lg" style={{ color: "var(--t-text-muted)" }}>
                                Thank you for reaching out to SVaaN Global Tech. We are reviewing your inquiry and will connect with you via email within <span style={{ color: "var(--t-text)" }} className="font-semibold">24-48 business hours.</span>
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/"
                                    className="group inline-flex items-center gap-3 h-14 px-8 rounded-full font-semibold text-base transition-all duration-300 shadow-xl"
                                    style={{
                                        backgroundColor: "var(--t-btn-bg)",
                                        color: "var(--t-btn-text)",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = "var(--t-accent)";
                                        e.currentTarget.style.color = "#fff";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = "var(--t-btn-bg)";
                                        e.currentTarget.style.color = "var(--t-btn-text)";
                                    }}
                                >
                                    Return Home
                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/work"
                                    className="inline-flex items-center gap-2 h-14 px-8 rounded-full font-medium text-base transition-all duration-300"
                                    style={{
                                        border: "1px solid var(--t-border)",
                                        color: "var(--t-text)",
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--t-bg-surface)"; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
                                >
                                    View our work
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right side: Next Steps Process */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="rounded-3xl p-8 lg:p-14 relative overflow-hidden"
                        style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}
                    >
                        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "linear-gradient(135deg, var(--t-gradient-from), transparent)" }} />

                        <div className="relative z-10">
                            <h3 className="font-display font-bold text-2xl mb-12" style={{ color: "var(--t-text)" }}>What happens next?</h3>

                            <div className="flex flex-col gap-10 relative">
                                {/* The vertical connecting line perfectly centered to the 6x6 (24px) round markers */}
                                <div className="absolute left-3 top-2 bottom-2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[var(--t-accent)] via-[var(--t-border)] to-transparent" />

                                {/* Step 01 */}
                                <div className="relative flex items-start group is-active">
                                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 shrink-0 relative z-10 shadow" style={{ backgroundColor: "var(--t-bg)", borderColor: "var(--t-accent)" }}>
                                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--t-accent)" }}></div>
                                    </div>
                                    <div className="ml-8 w-full p-6 rounded-2xl transition-all duration-300 shadow-sm" style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)" }}>
                                        <h4 className="font-bold text-lg mb-2" style={{ color: "var(--t-text)" }}>01. Internal Review</h4>
                                        <p className="text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>Our strategy team will review your requirements and align them with our engineering capabilities to ensure a perfect fit.</p>
                                    </div>
                                </div>

                                {/* Step 02 */}
                                <div className="relative flex items-start group">
                                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 shrink-0 relative z-10 opacity-50 transition-opacity group-hover:opacity-100" style={{ backgroundColor: "var(--t-bg)", borderColor: "var(--t-border)" }}></div>
                                    <div className="ml-8 w-full p-6 rounded-2xl transition-all duration-300 opacity-60 group-hover:opacity-100" style={{ backgroundColor: "transparent", border: "1px solid var(--t-border)" }}>
                                        <h4 className="font-bold text-lg mb-2" style={{ color: "var(--t-text)" }}>02. Discovery Call</h4>
                                        <p className="text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>We will schedule a brief introductory call with your stakeholders to dive deeper into the specific context of your challenges.</p>
                                    </div>
                                </div>

                                {/* Step 03 */}
                                <div className="relative flex items-start group">
                                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 shrink-0 relative z-10 opacity-50 transition-opacity group-hover:opacity-100" style={{ backgroundColor: "var(--t-bg)", borderColor: "var(--t-border)" }}></div>
                                    <div className="ml-8 w-full p-6 rounded-2xl transition-all duration-300 opacity-60 group-hover:opacity-100" style={{ backgroundColor: "transparent", border: "1px solid var(--t-border)" }}>
                                        <h4 className="font-bold text-lg mb-2" style={{ color: "var(--t-text)" }}>03. Proposal</h4>
                                        <p className="text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>Following our discussion, we map out a strategic blueprint, technical timeline, and comprehensive commercial engagement model.</p>
                                    </div>
                                </div>

                                {/* Step 04 Just to force scrolling */}
                                <div className="relative flex items-start group">
                                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 shrink-0 relative z-10 opacity-50 transition-opacity group-hover:opacity-100" style={{ backgroundColor: "var(--t-bg)", borderColor: "var(--t-border)" }}></div>
                                    <div className="ml-8 w-full p-6 rounded-2xl transition-all duration-300 opacity-60 group-hover:opacity-100" style={{ backgroundColor: "transparent", border: "1px solid var(--t-border)" }}>
                                        <h4 className="font-bold text-lg mb-2" style={{ color: "var(--t-text)" }}>04. Onboarding</h4>
                                        <p className="text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>Upon approval, we deploy your custom dedicated Slack channel and kick off active development cycles immediately.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </main>
    );
}
