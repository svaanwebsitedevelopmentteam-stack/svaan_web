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

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <h1 className="type-display mb-6" style={{ color: "var(--t-text)" }}>
                                Request <br /><span className="italic" style={{ color: "var(--t-accent)" }}>Received.</span>
                            </h1>
                            <p className="type-body-lg mb-10 max-w-lg" style={{ color: "var(--t-text-muted)" }}>
                                Thank you for reaching out to SVaaN Global Tech. We are reviewing your inquiry and will connect with you via email within <span style={{ color: "var(--t-text)" }} className="font-semibold">24-48 business hours.</span>
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/"
                                    className="group inline-flex items-center gap-3 h-12 px-6 rounded-[var(--t-radius-btn)] font-medium text-sm transition-all duration-300 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2 active:scale-[0.98] bg-[var(--t-btn-bg)] hover:bg-[var(--t-btn-hover)] text-[var(--t-btn-text)]"
                                >
                                    Return Home
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                                <Link
                                    href="/work"
                                    className="inline-flex items-center gap-2 h-12 px-6 rounded-[var(--t-radius-btn)] font-medium text-sm transition-all duration-300 hover:bg-[var(--t-bg-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2 active:scale-[0.98]"
                                    style={{
                                        border: "1px solid var(--t-border)",
                                        color: "var(--t-text)",
                                    }}
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
                        className="rounded-[var(--t-radius-card)] p-8 lg:p-12 relative overflow-hidden"
                        style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}
                    >
                        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "linear-gradient(135deg, var(--t-gradient-from), transparent)" }} />

                        <div className="relative z-10">
                            <h2 className="type-h2 mb-10" style={{ color: "var(--t-text)" }}>What happens next?</h2>

                            <div className="flex flex-col gap-8 relative">
                                {/* The vertical connecting line perfectly centered to the 6x6 (24px) round markers */}
                                <div className="absolute left-3 top-2 bottom-2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[var(--t-accent)] via-[var(--t-border)] to-transparent" />

                                {/* Step 01 */}
                                <div className="relative flex items-start group is-active">
                                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 shrink-0 relative z-10 shadow" style={{ backgroundColor: "var(--t-bg)", borderColor: "var(--t-accent)" }}>
                                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--t-accent)" }}></div>
                                    </div>
                                    <div className="ml-8 w-full p-6 rounded-[var(--t-radius-card)] transition-all duration-300 shadow-sm" style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)" }}>
                                        <h3 className="font-display font-semibold text-lg mb-2" style={{ color: "var(--t-text)" }}>01. Internal Review</h3>
                                        <p className="type-body-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>Our strategy team will review your requirements and align them with our engineering capabilities to ensure a perfect fit.</p>
                                    </div>
                                </div>

                                {/* Step 02 */}
                                <div className="relative flex items-start group">
                                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 shrink-0 relative z-10 opacity-50 transition-opacity group-hover:opacity-100" style={{ backgroundColor: "var(--t-bg)", borderColor: "var(--t-border)" }}></div>
                                    <div className="ml-8 w-full p-6 rounded-[var(--t-radius-card)] transition-all duration-300 opacity-60 group-hover:opacity-100" style={{ backgroundColor: "transparent", border: "1px solid var(--t-border)" }}>
                                        <h3 className="font-display font-semibold text-lg mb-2" style={{ color: "var(--t-text)" }}>02. Discovery Call</h3>
                                        <p className="type-body-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>We will schedule a brief introductory call with your stakeholders to dive deeper into the specific context of your challenges.</p>
                                    </div>
                                </div>

                                {/* Step 03 */}
                                <div className="relative flex items-start group">
                                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 shrink-0 relative z-10 opacity-50 transition-opacity group-hover:opacity-100" style={{ backgroundColor: "var(--t-bg)", borderColor: "var(--t-border)" }}></div>
                                    <div className="ml-8 w-full p-6 rounded-[var(--t-radius-card)] transition-all duration-300 opacity-60 group-hover:opacity-100" style={{ backgroundColor: "transparent", border: "1px solid var(--t-border)" }}>
                                        <h3 className="font-display font-semibold text-lg mb-2" style={{ color: "var(--t-text)" }}>03. Proposal</h3>
                                        <p className="type-body-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>Following our discussion, we map out a strategic blueprint, technical timeline, and comprehensive commercial engagement model.</p>
                                    </div>
                                </div>

                                {/* Step 04 */}
                                <div className="relative flex items-start group">
                                    <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 shrink-0 relative z-10 opacity-50 transition-opacity group-hover:opacity-100" style={{ backgroundColor: "var(--t-bg)", borderColor: "var(--t-border)" }}></div>
                                    <div className="ml-8 w-full p-6 rounded-[var(--t-radius-card)] transition-all duration-300 opacity-60 group-hover:opacity-100" style={{ backgroundColor: "transparent", border: "1px solid var(--t-border)" }}>
                                        <h3 className="font-display font-semibold text-lg mb-2" style={{ color: "var(--t-text)" }}>04. Onboarding</h3>
                                        <p className="type-body-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>Upon approval, we deploy your custom dedicated Slack channel and kick off active development cycles immediately.</p>
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
