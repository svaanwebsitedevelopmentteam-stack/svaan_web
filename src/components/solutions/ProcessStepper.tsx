/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { fadeUp } from "@/lib/motion";

interface Props {
    steps: {
        title: string;
        text: string;
        outcome: string;
        optional?: boolean;
        href?: string;
    }[];
}

export function ProcessStepper({ steps }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="how-we-work" className="py-16 md:py-32" ref={containerRef}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <motion.div {...fadeUp} className="mb-24">
                    <h2 className="type-display" style={{ color: "var(--t-text)" }}>How we work</h2>
                </motion.div>

                <div className="relative">
                    {/* Desktop Horizontal Line Base */}
                    <div className="hidden lg:block absolute top-4 left-0 right-0 h-1 rounded-full opacity-20" style={{ backgroundColor: "var(--t-border)" }} />
                    {/* Desktop Horizontal Line Active */}
                    <motion.div className="hidden lg:block absolute top-4 left-0 right-0 h-1 rounded-full origin-left" style={{ backgroundColor: "var(--t-accent)", scaleX }} />

                    {/* Mobile Vertical Line Base */}
                    <div className="lg:hidden absolute top-0 bottom-0 left-4 w-1 rounded-full opacity-20" style={{ backgroundColor: "var(--t-border)" }} />
                    {/* Mobile Vertical Line Active */}
                    <motion.div className="lg:hidden absolute top-0 bottom-0 left-4 w-1 rounded-full origin-top" style={{ backgroundColor: "var(--t-accent)", scaleY }} />

                    <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-6 relative z-10">
                        {steps.map((step, idx) => (
                            <div key={idx} className="flex-1 flex lg:flex-col items-start lg:items-center relative pl-12 lg:pl-0">
                                {/* Mobile node */}
                                <div className="lg:hidden absolute left-[12px] top-1 w-4 h-4 rounded-full border-2 transform -translate-x-1/2 bg-[var(--t-bg)]" style={{ borderColor: step.optional ? "var(--t-border)" : "var(--t-accent)" }} />
                                {/* Desktop node */}
                                <div className="hidden lg:block w-4 h-4 rounded-full border-2 mb-6 bg-[var(--t-bg)] mt-2" style={{ borderColor: step.optional ? "var(--t-border)" : "var(--t-accent)" }} />
                                
                                <div className="lg:text-center w-full">
                                    <div className="flex items-center lg:justify-center gap-2 mb-2">
                                        <h3 className="type-h3" style={{ color: "var(--t-text)" }}>{step.title}</h3>
                                        {step.optional && (
                                            <span className="type-caption px-2 py-0.5 rounded-full border" style={{ color: "var(--t-text-muted)", borderColor: "var(--t-border)" }}>Optional</span>
                                        )}
                                    </div>
                                    <p className="type-body mb-4" style={{ color: "var(--t-text-muted)" }}>{step.text}</p>
                                    
                                    <div className="p-3 rounded-[var(--t-radius-md)] inline-block w-full lg:w-auto" style={{ backgroundColor: "var(--t-bg-card)", border: step.optional ? "1px dashed var(--t-border)" : "1px solid var(--t-border)" }}>
                                        <p className="type-caption font-bold" style={{ color: "var(--t-text)" }}>
                                            &rarr; {step.outcome}
                                        </p>
                                    </div>

                                    {step.href && (
                                        <div className="mt-4">
                                            <Link href={step.href} className="type-body-sm font-semibold hover:underline" style={{ color: "var(--t-accent)" }}>
                                                See service &rarr;
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
