/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "@/lib/motion";
import { ArrowRight } from "lucide-react";

export function RelatedSolutions({ related }: { related: any[] }) {
    if (!related || related.length === 0) return null;

    return (
        <section className="py-16 lg:py-24">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <h2 className="type-h2 text-[var(--t-text)] mb-12">Related solutions</h2>
                <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                {related.map((item, i) => (
                    <motion.div key={i} variants={fadeUpVariants}>
                        <Link href={item.href} className="group block bg-[var(--t-bg-surface)] border border-[var(--t-border)] hover:border-[var(--t-accent)] rounded-[8px] p-8 transition-colors duration-200">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="type-h3 text-[var(--t-text)]">{item.title}</h3>
                                <ArrowRight className="w-6 h-6 text-[var(--t-text-muted)] group-hover:text-[var(--t-accent)] group-hover:translate-x-1 transition-all duration-200" />
                            </div>
                            <p className="type-body-sm text-[var(--t-text-secondary)]">{item.text}</p>
                        </Link>
                    </motion.div>
                ))}
                </motion.div>
            </div>
        </section>
    );
}
