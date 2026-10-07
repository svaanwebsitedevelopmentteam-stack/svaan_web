/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "@/lib/motion";

export function SituationsGrid({ situations }: { situations: any[] }) {
    const isOdd = situations.length % 2 !== 0;
    const isSix = situations.length === 6;
    const desktopCols = isSix ? 'lg:grid-cols-3' : 'lg:grid-cols-2';

    return (
        <section className="py-16 lg:py-24">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="type-caption text-[var(--t-accent)] mb-4 flex items-center">
                    When you need it
                    <span className="w-6 h-[1px] bg-[var(--t-accent)] ml-4" />
                </div>
                
                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className={`grid grid-cols-1 md:grid-cols-2 ${desktopCols} gap-6 mt-8`}
                >
                    {situations.map((sit, i) => (
                        <motion.div 
                            key={i}
                            variants={fadeUpVariants}
                            className={`bg-[var(--t-bg-surface)] border border-[var(--t-border)] rounded-[8px] p-8 flex flex-col ${isOdd && i === situations.length - 1 && !isSix ? 'md:col-span-2 lg:col-span-2' : ''}`}
                        >
                            <div className="type-caption text-[var(--t-text-muted)] mb-4">0{i + 1}</div>
                            <p className="type-body text-[var(--t-text)] flex-1 mb-8">{sit.text}</p>
                            <div className="mt-auto">
                                <span className="inline-block bg-[var(--t-bg-card)] border border-[var(--t-border)] text-[var(--t-text-secondary)] type-caption rounded-[4px] px-3 py-1.5">
                                    Start with: {sit.startWith}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
