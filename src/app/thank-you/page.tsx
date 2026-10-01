"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ThankYouPage() {
    return (
        <main className="min-h-screen pt-[140px] pb-[60px] relative overflow-hidden flex flex-col justify-center items-center">
            {/* Background Orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <motion.div
                    animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[10%] left-[50%] w-[600px] h-[600px] rounded-full blur-[180px] -translate-x-1/2"
                    style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }}
                />
            </div>

            <div className="max-w-2xl mx-auto px-6 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="rounded-3xl p-10 md:p-16 relative overflow-hidden text-center flex flex-col items-center shadow-2xl"
                    style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}
                >
                    <div
                        className="w-24 h-24 rounded-full flex items-center justify-center mb-8 shadow-xl"
                        style={{ backgroundColor: "var(--t-gradient-from)", color: "var(--t-accent)" }}
                    >
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    <h1 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-bold leading-[1.1] tracking-tight mb-6" style={{ color: "var(--t-text)" }}>
                        Message Received
                    </h1>

                    <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto" style={{ color: "var(--t-text-muted)" }}>
                        Thank you for reaching out to SVaaN Global Tech. We&apos;re reviewing your inquiry and will connect with you via email within <span style={{ color: "var(--t-text)" }} className="font-semibold">24-48 business hours.</span>
                    </p>

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
                </motion.div>
            </div>
        </main>
    );
}
