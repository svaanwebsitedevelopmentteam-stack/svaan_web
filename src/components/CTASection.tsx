"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTASection() {
    return (
        <section className="py-[60px] relative overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[200px] pointer-events-none"
                style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }} />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="text-center">
                    <h2 className="type-display mb-8" style={{ color: "var(--t-text)" }}>
                        Let&apos;s talk about
                        your{" "}
                        <span className="italic" style={{ color: "var(--t-accent)" }}>project.</span>
                    </h2>
                    <p className="type-body-lg max-w-lg mx-auto mb-12" style={{ color: "var(--t-text-muted)" }}>
                        Got a challenge worth solving? Let&apos;s create something great. We can transform that idea into a real, working product.
                    </p>
                    <Link href="/contact"
                        className="group inline-flex items-center gap-3 h-14 px-10 rounded-[var(--t-radius-btn)] font-semibold text-base transition-all duration-200 shadow-md hover:bg-[var(--t-btn-hover)] hover:shadow-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2"
                        style={{ backgroundColor: "var(--t-btn-bg)", color: "var(--t-btn-text)" }}
                    >
                        Get in Touch
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                    </Link>
                    {/* <p className="text-sm mt-8 italic" style={{ color: "var(--t-text-muted)" }}>and make it real together</p> */}
                </motion.div>
            </div>
        </section>
    );
}
