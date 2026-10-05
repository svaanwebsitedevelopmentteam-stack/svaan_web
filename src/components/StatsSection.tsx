"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CounterProps { end: number; suffix?: string; label: string; }

function Counter({ end, suffix = "", label }: CounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const duration = 2000;
                    const startTime = Date.now();
                    const tick = () => {
                        const elapsed = Date.now() - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * end));
                        if (progress < 1) requestAnimationFrame(tick);
                    };
                    requestAnimationFrame(tick);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end]);

    return (
        <div ref={ref} className="text-center">
            <div className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-3" style={{ color: "var(--t-text)" }}>
                {count}<span style={{ color: "var(--t-accent)" }}>{suffix}</span>
            </div>
            <div className="text-sm md:text-base" style={{ color: "var(--t-text-muted)" }}>{label}</div>
        </div>
    );
}

export function StatsSection() {
    return (
        <section className="py-[60px]" style={{ borderTop: "1px solid var(--t-border)", borderBottom: "1px solid var(--t-border)" }}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="text-center mb-20">
                    <h2 className="type-h2 mb-4" style={{ color: "var(--t-text)" }}>Our numbers say it all</h2>
                    <p className="type-body-lg max-w-lg mx-auto" style={{ color: "var(--t-text-muted)" }}>
                        These numbers reflect the experience, consistency, and measurable impact behind the work we&apos;ve delivered.
                    </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
                    <Counter end={98} suffix="%" label="Satisfied happy clients" />
                    <Counter end={8} suffix="+" label="Years of experience" />
                    <Counter end={120} suffix="+" label="Projects delivered" />
                    <Counter end={9} suffix="" label="Industries served" />
                </motion.div>

                {/* <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-24 overflow-hidden">
                    <div className="flex animate-marquee whitespace-nowrap">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <span key={i} className="mx-10 text-lg md:text-xl font-semibold flex items-center gap-4" style={{ color: "var(--t-accent)", opacity: 0.5 }}>
                                — WE ARE AVAILABLE — FOR NEW PROJECTS
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                            </span>
                        ))}
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
}
