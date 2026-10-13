"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { allProjectsList } from "@/data/projectsData";

export function SolutionPillarsSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);

            if (scrollRef.current.children.length > 0) {
                const cardWidth = scrollRef.current.children[0].clientWidth + 24; // width + gap
                const newIndex = Math.round(scrollLeft / cardWidth);
                setActiveIndex(newIndex);
            }
        }
    };

    useEffect(() => {
        const handleResize = () => {
            window.requestAnimationFrame(checkScroll);
        };
        window.addEventListener("resize", handleResize, { passive: true });
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const scrollBy = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth / 3;
            scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
            setTimeout(checkScroll, 500);
        }
    };

    return (
        <section id="solutions" className="py-14 sm:py-20 lg:py-28 bg-[var(--t-bg-surface)] scroll-mt-24">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4 sm:gap-6">
                    <div>
                        <div className="inline-flex items-center justify-center px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-5 rounded-md border text-xs sm:text-sm font-semibold tracking-widest uppercase"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-text-muted)" }}>
                            Our Solutions
                        </div>
                        <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight" style={{ color: "var(--t-text)" }}>
                            Proven solutions built for<br />real{" "}
                            <span className="italic" style={{ color: "var(--t-accent)" }}>business impact.</span>
                        </h2>
                    </div>

                    {/* Arrow Pagination */}
                    <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
                        <button onClick={() => scrollBy("left")} disabled={!canScrollLeft} className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[var(--t-accent)] hover:text-white hover:border-[var(--t-accent)]" style={{ borderColor: "var(--t-border)", color: "var(--t-text)" }} aria-label="Previous">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button onClick={() => scrollBy("right")} disabled={!canScrollRight} className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[var(--t-accent)] hover:text-white hover:border-[var(--t-accent)]" style={{ borderColor: "var(--t-border)", color: "var(--t-text)" }} aria-label="Next">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Scrollable cards carousel (3 columns desktop) */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                <div ref={scrollRef} onScroll={checkScroll} className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 sm:pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                    {allProjectsList.map((project, idx) => (
                        <div key={project.id}
                            className="flex-none w-[84vw] sm:w-[360px] md:w-[45vw] lg:w-[calc(33.333%-16px)] snap-start group relative">
                            <div className="flex flex-col h-full rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border"
                                style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>

                                {/* Illustration Area */}
                                <div className="relative h-[180px] sm:h-[220px] md:h-[240px] w-full bg-slate-950 overflow-hidden">
                                    <div className="absolute inset-0 group-hover:scale-105 transition-all duration-700">
                                        <Image
                                            src={project.poster || project.gif}
                                            alt={project.title}
                                            fill
                                            loading="lazy"
                                            sizes="(max-width: 640px) 360px, (max-width: 1024px) 45vw, 400px"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-overlay opacity-25 pointer-events-none`} />
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase backdrop-blur-md border shadow-sm"
                                            style={{
                                                backgroundColor: "rgba(0, 0, 0, 0.65)",
                                                borderColor: "rgba(255, 255, 255, 0.2)",
                                                color: "#fff"
                                            }}>
                                            {project.scope}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-5 sm:p-7 md:p-8 flex flex-col flex-grow text-left justify-between"
                                    style={{ backgroundColor: "var(--t-bg-card)" }}>
                                    <div>
                                        <div className="flex items-center gap-2.5 mb-2.5 sm:mb-4">
                                            <span className="text-[11px] sm:text-xs font-bold tracking-[0.1em] uppercase"
                                                style={{ color: "var(--t-accent)" }}>
                                                Case Study
                                            </span>
                                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl md:text-[24px] font-bold leading-snug mb-3"
                                            style={{ color: "var(--t-text)" }}>
                                            {project.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3"
                                            style={{ color: "var(--t-text-muted)" }}>
                                            {project.summary}
                                        </p>
                                    </div>

                                    {/* Footer with Key Metrics */}
                                    <div className="pt-4 border-t flex flex-wrap gap-1.5"
                                        style={{ borderColor: "var(--t-border)" }}>
                                        {project.metrics.slice(0, 2).map((m) => (
                                            <span key={m} className="text-[11px] font-medium px-2 py-0.5 rounded-md border"
                                                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-text)" }}>
                                                ✓ {m}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Dot indicators */}
                <div className="flex justify-center gap-2 mt-2 sm:mt-4">
                    {allProjectsList.map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full transition-all duration-300"
                            style={{ backgroundColor: i === activeIndex ? "var(--t-accent)" : "var(--t-border)", transform: i === activeIndex ? "scale(1.5)" : "scale(1)" }} />
                    ))}
                </div>
            </div>
        </section>
    );
}
