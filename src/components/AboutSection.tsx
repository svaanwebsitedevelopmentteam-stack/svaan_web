"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function AboutSection() {
    return (
        <section id="about" className="py-[60px] relative overflow-hidden">
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] h-[500px] rounded-full blur-[200px] pointer-events-none"
                style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }} />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
                    <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="relative flex flex-col justify-center">
                        <div className="relative w-full h-full min-h-[350px] lg:min-h-full rounded-[var(--t-radius-card)] overflow-hidden border"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                                alt="Team collaborating"
                                className="absolute inset-0 w-full h-full object-cover filter grayscale-[10%]"
                            />
                            <div className="absolute inset-0 mix-blend-overlay opacity-60" style={{ background: "linear-gradient(135deg, var(--t-gradient-from), transparent, var(--t-gradient-to))" }} />
                        </div>
                        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -right-4 md:right-8 rounded-[var(--t-radius-card)] px-6 py-4 shadow-xl border"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>
                            <div className="font-display font-bold text-2xl" style={{ color: "var(--t-accent)" }}>120+</div>
                            <div className="text-xs" style={{ color: "var(--t-text-muted)" }}>Projects Delivered</div>
                        </motion.div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.15 }} className="flex flex-col justify-center py-4 lg:py-8">
                        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8" style={{ color: "var(--t-text)" }}>Hey! That&apos;s us.</h2>
                        <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--t-text-muted)" }}>
                            SVaaN Global Tech is a multidisciplinary technology and strategy company based in India with a global outlook. We help organizations navigate complexity, define meaningful direction, and build digital solutions that actually work.
                        </p>
                        <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--t-text-muted)" }}>
                            Our journey has been a testament to our unwavering passion for crafting meaningful outcomes - connecting strategy, design, and engineering to move business forward with clarity and purpose.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-10">
                            {["Strategy & Advisory", "Software Engineering", "AI & Automation", "Cloud & DevOps", "Product Design", "Managed Support"].map((cap) => (
                                <div key={cap} className="flex items-center gap-3 text-sm" style={{ color: "var(--t-text-secondary)" }}>
                                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--t-accent)" }} />
                                    {cap}
                                </div>
                            ))}
                        </div>

                        <Link href="/about" className="group inline-flex items-center gap-3 font-semibold hover:gap-4 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2 rounded-[var(--t-radius-sm)]" style={{ color: "var(--t-accent)" }}>
                            More about us
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
