"use client";

import { motion } from "framer-motion";

export function Marquee() {
    const items = [
        "Strategy & Advisory",
        "AI Software Development",
        "Product & Experience",
        "Enterprise Solutions",
        "Cloud Managed Services",
        "DevOps Support",
        "Quality Assurance",
        "UI/UX Design",
    ];

    return (
        <section className="py-12 overflow-hidden" style={{ borderTop: "1px solid var(--t-border)", borderBottom: "1px solid var(--t-border)" }}>
            <div className="flex animate-marquee whitespace-nowrap">
                {[...items, ...items].map((item, i) => (
                    <span
                        key={i}
                        className="mx-8 text-2xl md:text-3xl lg:text-4xl font-display font-bold cursor-default flex items-center gap-8 transition-colors duration-300 hover:text-[var(--t-accent)]"
                        style={{ color: "var(--t-marquee)" }}
                    >
                        {item}
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--t-accent)", opacity: 0.4 }} />
                    </span>
                ))}
            </div>
        </section>
    );
}
