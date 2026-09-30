"use client";

import { motion } from "framer-motion";

export function Testimonial() {
    return (
        <section className="py-[60px] relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <div className="mb-10">
                        <svg className="w-16 h-16 mx-auto" style={{ color: "var(--t-accent)", opacity: 0.3 }} fill="currentColor" viewBox="0 0 32 32">
                            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
                        </svg>
                    </div>
                    <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-medium leading-snug mb-12" style={{ color: "var(--t-text)" }}>
                        &ldquo;From the very beginning the collaboration felt effortless.
                        Every challenge was carefully broken down, and the technology
                        solutions delivered were exactly what our business needed to move
                        forward with confidence.&rdquo;
                    </blockquote>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold"
                            style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-accent)" }}>
                            NB
                        </div>
                        <div className="text-left">
                            <div className="font-semibold" style={{ color: "var(--t-text)" }}>VP of Digital Transformation</div>
                            <div className="text-sm" style={{ color: "var(--t-text-muted)" }}>Enterprise Healthcare Network</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
