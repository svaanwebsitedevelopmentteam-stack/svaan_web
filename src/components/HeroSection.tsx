"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
            {/* Animated gradient orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[10%] right-[20%] w-[500px] h-[500px] rounded-full blur-[150px]"
                    style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }}
                />
                <motion.div
                    animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] rounded-full blur-[120px]"
                    style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }}
                />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-32 pb-20 relative z-10 text-center">
                {/* Eyebrow */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center gap-3 mb-10"
                >
                    <span
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                        style={{
                            backgroundColor: "var(--t-bg-surface)",
                            border: "1px solid var(--t-border)",
                            color: "var(--t-text-muted)",
                        }}
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Available for new projects
                    </span>
                </motion.div>

                {/* Main heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="font-display text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.05] tracking-tight mx-auto max-w-5xl mb-8"
                    style={{ color: "var(--t-text)" }}
                >
                    We build technology
                    <br />
                    that moves{" "}
                    <span className="italic" style={{ color: "var(--t-accent)" }}>business</span>
                    <br />
                    forward.
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="text-lg md:text-xl max-w-xl leading-relaxed mb-12 mx-auto"
                    style={{ color: "var(--t-text-muted)" }}
                >
                    SVaaN Global Tech connects strategy, design, and engineering to help
                    organizations solve complex challenges and build practical digital
                    solutions.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <Link
                        href="/contact"
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
                        Start a project
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                    </Link>
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-2 h-14 px-8 rounded-full font-medium text-base transition-all duration-300"
                        style={{
                            border: "1px solid var(--t-border)",
                            color: "var(--t-text)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "var(--t-bg-surface)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "transparent";
                        }}
                    >
                        View our work
                    </Link>
                </motion.div>
            </div>

            {/* Bento nav cards */}
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-20 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    {[
                        { title: "Our Work", desc: "Explore selected projects and our approach to delivery.", href: "/work" },
                        { title: "About Us", desc: "A closer look at our mission, values, and the team behind SVaaN.", href: "/about" },
                        { title: "Contact Us", desc: "Let's work together to bring your vision to life.", href: "/contact" },
                    ].map((card) => (
                        <Link
                            key={card.title}
                            href={card.href}
                            className="group relative rounded-2xl p-8 transition-all duration-500 overflow-hidden"
                            style={{
                                backgroundColor: "var(--t-bg-card)",
                                border: "1px solid var(--t-border)",
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--t-accent)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--t-border)"; }}
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: "linear-gradient(135deg, var(--t-gradient-from), transparent)" }}
                            />
                            <div className="relative z-10">
                                <h3 className="font-display font-bold text-xl mb-3 group-hover:text-[var(--t-accent)] transition-colors" style={{ color: "var(--t-text)" }}>
                                    {card.title}
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{card.desc}</p>
                            </div>
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                                <svg className="w-5 h-5" style={{ color: "var(--t-accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
