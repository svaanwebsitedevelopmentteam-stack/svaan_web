/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function ProcessSteps({ steps, heading, note }: { steps: any[], heading: string, note?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"]
    });
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="py-16 lg:py-24 bg-[var(--t-bg)] max-w-[1400px] mx-auto px-6 lg:px-10" ref={ref}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                <div className="lg:col-span-4 relative">
                    <div className="sticky top-32">
                        <div className="type-caption text-[var(--t-accent)] mb-4 flex items-center">
                            Process
                            <span className="w-6 h-[1px] bg-[var(--t-accent)] ml-4" />
                        </div>
                        <h2 className="type-h2 text-[var(--t-text)] mb-6">{heading}</h2>
                        {note && (
                            <div className="p-6 bg-[var(--t-bg-surface)] border-l-[4px] border-[var(--t-accent)] rounded-r-[8px]">
                                <p className="type-body-sm text-[var(--t-text-secondary)]">{note}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="lg:col-span-8 relative">
                    {/* Vertical line background */}
                    <div className="absolute left-6 top-6 bottom-6 w-[1px] bg-[var(--t-border)] hidden sm:block" />
                    {/* Vertical line fill */}
                    <motion.div 
                        className="absolute left-6 top-6 w-[1px] bg-[var(--t-accent)] hidden sm:block origin-top"
                        style={{ height: lineHeight }}
                    />

                    <div className="space-y-12 sm:space-y-16">
                        {steps.map((step, i) => {
                            const isOptional = step.optional;
                            return (
                                <div key={i} className="relative flex items-start group">
                                    <div className="hidden sm:flex w-12 h-12 rounded-full bg-[var(--t-bg)] border-2 border-[var(--t-border)] items-center justify-center z-10 shrink-0 mt-0 group-hover:border-[var(--t-accent)] transition-colors duration-300">
                                        <span className="type-caption text-[var(--t-text-muted)] group-hover:text-[var(--t-accent)]">0{i + 1}</span>
                                    </div>
                                    <div className="sm:ml-8 flex-1 bg-[var(--t-bg-card)] border border-[var(--t-border)] rounded-[8px] p-6 sm:p-8 group-hover:border-[var(--t-accent)] transition-colors duration-300">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                            <h3 className="type-h3 text-[var(--t-text)]">
                                                {isOptional && step.href ? (
                                                    <Link href={step.href} className="hover:text-[var(--t-accent)] transition-colors">
                                                        {step.title} <span className="text-[var(--t-text-muted)] font-normal text-sm ml-2">(Optional)</span>
                                                    </Link>
                                                ) : (
                                                    <>{step.title}</>
                                                )}
                                            </h3>
                                            <span className={`inline-block type-caption px-3 py-1 rounded-[4px] ${isOptional ? 'border border-[var(--t-border)] text-[var(--t-text-secondary)]' : 'bg-[var(--t-bg-surface)] text-[var(--t-accent)]'}`}>
                                                {step.outcome}
                                            </span>
                                        </div>
                                        <p className="type-body text-[var(--t-text-secondary)]">{step.text}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
