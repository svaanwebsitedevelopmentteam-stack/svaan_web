"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
    {
        title: "AI-Powered FinTech Platform",
        tags: "AI Software Development, Strategy",
        desc: "Built around intelligent automation and data-driven decision support, this platform redefines how financial services operate at scale with precision and speed.",
        href: "/work/fintech-platform",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        gradient: "from-blue-600/60 to-purple-800/60",
    },
    {
        title: "Healthcare Digital Transformation",
        tags: "Enterprise Software, UX Design",
        desc: "A comprehensive digital overhaul connecting patient experience, clinical operations, and administrative workflows into a unified, modern platform.",
        href: "/work/healthcare-transformation",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
        gradient: "from-emerald-500/60 to-teal-800/60",
    },
    {
        title: "PropTech Management Suite",
        tags: "Product Development, Cloud",
        desc: "End-to-end property management digitization with real-time analytics, tenant portals, and automated compliance reporting across geographies.",
        href: "/work/proptech-suite",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
        gradient: "from-orange-500/60 to-amber-800/60",
    },
    {
        title: "E-Commerce Infrastructure",
        tags: "MVP Development, DevOps",
        desc: "Scalable commerce infrastructure handling millions of transactions with intelligent inventory management and personalized customer experiences.",
        href: "/work/ecommerce-infra",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1200",
        gradient: "from-pink-500/60 to-rose-800/60",
    }
];

export function WorkShowcase() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const container = e.currentTarget;
        let closestIndex = 0;
        let minDistance = Infinity;

        Array.from(container.children).forEach((child, index) => {
            if (index >= projects.length) return;
            const childNode = child as HTMLElement;
            const distance = Math.abs(childNode.offsetLeft - container.scrollLeft - container.offsetLeft);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index;
            }
        });

        if (closestIndex !== activeIndex) {
            setActiveIndex(closestIndex);
        }
    };

    const scrollTo = (index: number) => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        const childNode = container.children[index] as HTMLElement;
        if (childNode) {
            container.scrollTo({ left: childNode.offsetLeft - container.offsetLeft, behavior: "smooth" });
        }
    };

    return (
        <section className="py-[60px] relative">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16"
                >
                    <div>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4" style={{ color: "var(--t-text)" }}>
                            Our selected works
                        </h2>
                        <p className="text-lg max-w-lg leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                            With deep expertise across strategy, design, and engineering, we
                            craft solutions that create real, measurable business impact.
                        </p>
                    </div>
                    {/* Arrow Pagination (Desktop Top Right) */}
                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
                            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--t-bg-surface)]"
                            style={{ border: "1px solid var(--t-border)", color: "var(--t-text)" }}
                            disabled={activeIndex === 0}
                            aria-label="Previous project"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button
                            onClick={() => scrollTo(Math.min(projects.length - 1, activeIndex + 1))}
                            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[var(--t-bg-surface)]"
                            style={{ border: "1px solid var(--t-border)", color: "var(--t-text)" }}
                            disabled={activeIndex === projects.length - 1 || (projects.length > 3 && activeIndex >= projects.length - 2)}
                            aria-label="Next project"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </motion.div>

                {/* Carousel Container */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto gap-6 snap-x snap-mandatory pb-8 pt-4 -mt-4 scroll-smooth [&::-webkit-scrollbar]:hidden"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="flex-none w-[90%] md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] snap-start"
                        >
                            <Link
                                href={project.href}
                                className="group block relative rounded-3xl overflow-hidden transition-all duration-500 h-full flex flex-col"
                                style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--t-accent)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--t-border)"; }}
                            >
                                <div className="relative h-56 md:h-64 flex-shrink-0 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-overlay opacity-80 group-hover:opacity-40 transition-opacity duration-700`} />
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent)]" />
                                </div>
                                <div className="p-8 flex-grow flex flex-col justify-between">
                                    <div>
                                        <div className="mb-4 flex flex-wrap gap-2">
                                            {project.tags.split(',').map((tag) => (
                                                <span key={tag} className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full" style={{ backgroundColor: "var(--t-bg-surface)", color: "var(--t-text-muted)", border: "1px solid var(--t-border)" }}>
                                                    {tag.trim()}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 group-hover:text-[var(--t-accent)] transition-colors duration-300" style={{ color: "var(--t-text)" }}>
                                            {project.title}
                                        </h3>
                                        <p className="text-base leading-relaxed mb-6" style={{ color: "var(--t-text-muted)" }}>{project.desc}</p>
                                    </div>
                                    <div className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-300" style={{ color: "var(--t-accent)" }}>
                                        View Project
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between mt-12 gap-8">
                    {/* Arrow Pagination (Mobile Bottom Left) */}
                    <div className="flex md:hidden items-center gap-3">
                        <button
                            onClick={() => scrollTo(Math.max(0, activeIndex - 1))}
                            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                            style={{ border: "1px solid var(--t-border)", color: "var(--t-text)" }}
                            disabled={activeIndex === 0}
                            aria-label="Previous project"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button
                            onClick={() => scrollTo(Math.min(projects.length - 1, activeIndex + 1))}
                            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                            style={{ border: "1px solid var(--t-border)", color: "var(--t-text)" }}
                            disabled={activeIndex === projects.length - 1}
                            aria-label="Next project"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>

                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <Link
                            href="/work"
                            className="group inline-flex items-center gap-3 h-14 px-10 rounded-full font-semibold transition-all duration-300 w-full sm:w-auto justify-center"
                            style={{ border: "1px solid var(--t-border)", color: "var(--t-text)" }}
                            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--t-bg-surface)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
                        >
                            See All Works
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
