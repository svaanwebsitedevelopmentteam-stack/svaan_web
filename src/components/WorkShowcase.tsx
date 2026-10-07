"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { allProjectsList } from "@/data/projectsData";

const projects = allProjectsList.map(p => ({
    title: p.title,
    tags: `${p.scope}, ${p.category}`,
    desc: p.summary,
    href: p.href,
    Illustration: p.Illustration,
    gradient: p.gradient,
}));

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
                        <h2 className="type-h2 mb-4" style={{ color: "var(--t-text)" }}>
                            Our selected works
                        </h2>
                        <p className="type-body-lg max-w-lg leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
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
                                aria-label={`${project.title} - Our Solutions`}
                                className="group block relative rounded-[var(--t-radius-card)] overflow-hidden transition-all duration-300 h-full flex flex-col border hover:border-[var(--t-accent)] hover:shadow-md cursor-pointer"
                                style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}
                            >
                                <div className="relative h-56 md:h-64 flex-shrink-0 overflow-hidden bg-[var(--t-bg-card)]">
                                    <project.Illustration className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-overlay opacity-60 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none`} />
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent)] pointer-events-none" />
                                </div>
                                <div className="p-8 flex-grow flex flex-col justify-between">
                                    <div>
                                        <div className="mb-4 flex flex-wrap gap-2">
                                            {project.tags.split(',').map((tag) => (
                                                <span key={tag} className="type-caption px-2.5 py-1 rounded-[var(--t-radius-sm)]" style={{ backgroundColor: "var(--t-bg-surface)", color: "var(--t-text-muted)", border: "1px solid var(--t-border)" }}>
                                                    {tag.trim()}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="type-h3 mb-3 group-hover:text-[var(--t-accent)] transition-colors duration-300 line-clamp-2" style={{ color: "var(--t-text)" }}>
                                            {project.title}
                                        </h3>
                                        <p className="type-body-sm line-clamp-3" style={{ color: "var(--t-text-muted)" }}>{project.desc}</p>
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
                            className="w-12 h-12 rounded-[var(--t-radius-btn)] flex items-center justify-center transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[var(--t-bg-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)]"
                            style={{ border: "1px solid var(--t-border)", color: "var(--t-text)" }}
                            disabled={activeIndex === 0}
                            aria-label="Previous project"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button
                            onClick={() => scrollTo(Math.min(projects.length - 1, activeIndex + 1))}
                            className="w-12 h-12 rounded-[var(--t-radius-btn)] flex items-center justify-center transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[var(--t-bg-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)]"
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
                            className="group inline-flex items-center gap-3 h-12 px-7 rounded-[var(--t-radius-btn)] font-semibold text-base transition-all duration-200 border hover:bg-[var(--t-bg-surface)] active:scale-[0.98] w-full sm:w-auto justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2"
                            style={{ borderColor: "var(--t-border)", color: "var(--t-text)" }}
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
