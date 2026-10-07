/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/lib/motion";

export function ProblemSplit({ problem }: { problem: any }) {
    return (
        <section className="py-16 lg:py-24 pt-48 lg:pt-64">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={{
                        hidden: { scaleY: 0, transformOrigin: "top" },
                        visible: { scaleY: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
                    }}
                    className="lg:col-span-4 bg-[var(--t-bg-surface)] p-8 border-l-[4px] border-[var(--t-accent)] rounded-r-[8px] -mt-8"
                >
                    <div className="type-caption text-[var(--t-accent)] mb-6 flex items-center">
                        The problem
                        <span className="w-6 h-[1px] bg-[var(--t-accent)] ml-4" />
                    </div>
                    <motion.div variants={fadeUpVariants} className="space-y-6">
                        <div>
                            <div className="type-caption text-[var(--t-text-muted)] uppercase tracking-wider mb-2">Often</div>
                            <div className="type-body text-[var(--t-text)]">{problem.often}</div>
                        </div>
                        <div>
                            <div className="type-caption text-[var(--t-text-muted)] uppercase tracking-wider mb-2">Our approach</div>
                            <div className="type-body text-[var(--t-text)] font-medium">{problem.approach}</div>
                        </div>
                    </motion.div>
                </motion.div>
                <div className="lg:col-span-8">
                    <motion.h2 
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}
                        className="type-h2 text-[var(--t-text)] mb-6"
                    >
                        {problem.h2}
                    </motion.h2>
                    <motion.p 
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}
                        className="type-body-lg text-[var(--t-text-secondary)] max-w-[860px]"
                    >
                        {problem.body}
                    </motion.p>
                </div>
                </div>
            </div>
        </section>
    );
}
