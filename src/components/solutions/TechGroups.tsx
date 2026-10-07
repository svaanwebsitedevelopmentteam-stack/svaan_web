/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "@/lib/motion";

export function TechGroups({ groups }: { groups: any[] }) {
    if (!groups || groups.length === 0) return null;

    return (
        <section className="py-16 lg:py-24 max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="type-caption text-[var(--t-accent)] mb-4 flex items-center">
                Typical choices
                <span className="w-6 h-[1px] bg-[var(--t-accent)] ml-4" />
            </div>
            <h2 className="type-h2 text-[var(--t-text)] mb-12">Technologies</h2>

            <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
                {groups.map((group, i) => (
                    <motion.div key={i} variants={fadeUpVariants} className="space-y-4">
                        <h3 className="type-body font-medium text-[var(--t-text)] pb-2 border-b border-[var(--t-border)]">{group.title}</h3>
                        {group.note ? (
                            <p className="type-body-sm text-[var(--t-text-secondary)]">{group.note}</p>
                        ) : (
                            <ul className="space-y-2">
                                {group.items?.map((item: string, j: number) => (
                                    <li key={j} className="type-body-sm text-[var(--t-text-secondary)] flex items-center">
                                        <span className="w-1 h-1 bg-[var(--t-border)] rounded-full mr-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
