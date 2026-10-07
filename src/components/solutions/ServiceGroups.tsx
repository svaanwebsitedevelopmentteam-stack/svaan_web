/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "@/lib/motion";
import { ArrowRight } from "lucide-react";
import { IconRegistry } from "./IconRegistry";

export function ServiceGroups({ groups }: { groups: any[] }) {
    return (
        <section className="py-16 lg:py-24 bg-[var(--t-bg-surface)] border-y border-[var(--t-border)]">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="type-caption text-[var(--t-accent)] mb-4 flex items-center">
                    What we do
                    <span className="w-6 h-[1px] bg-[var(--t-accent)] ml-4" />
                </div>
                <h2 className="type-h2 text-[var(--t-text)] mb-12">Services</h2>
                
                <div className="space-y-16">
                    {groups.map((group, i) => (
                        <div key={i}>
                            <h3 className="type-h3 text-[var(--t-text)] mb-6">{group.label}</h3>
                            <motion.div 
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                className={`grid grid-cols-1 md:grid-cols-2 ${group.items.length === 3 ? 'lg:grid-cols-3' : ''} gap-6`}
                            >
                                {group.items.map((item: any, j: number) => {
                                    const Icon = IconRegistry[item.icon] || IconRegistry['Strategy'];
                                    return (
                                        <motion.div 
                                            key={j}
                                            variants={fadeUpVariants}
                                            className="group bg-[var(--t-bg-card)] border border-[var(--t-border)] hover:border-[var(--t-accent)] rounded-[8px] p-8 transition-all duration-200 hover:-translate-y-1"
                                        >
                                            <div className="mb-6 text-[var(--t-accent)]">
                                                <Icon className="w-8 h-8" />
                                            </div>
                                            <h4 className="type-body font-medium text-[var(--t-text)] mb-3">{item.title}</h4>
                                            <p className="type-body-sm text-[var(--t-text-secondary)] mb-6">{item.desc}</p>
                                            <div className="mt-auto">
                                                <ArrowRight className="w-5 h-5 text-[var(--t-text-muted)] group-hover:text-[var(--t-accent)] group-hover:translate-x-1 transition-all duration-200" />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
