/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/lib/motion";

export function ClientStory({ story }: { story: any }) {
    if (!story || !story.permissionConfirmed) return null;

    return (
        <section className="py-16 lg:py-24 bg-[var(--t-bg-surface)] border-y border-[var(--t-border)]">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    <div className="lg:col-span-4">
                        <div className="type-caption text-[var(--t-accent)] mb-4 flex items-center">
                            Client story
                            <span className="w-6 h-[1px] bg-[var(--t-accent)] ml-4" />
                        </div>
                        <h2 className="type-h2 text-[var(--t-text)] mb-4">{story.client}</h2>
                        <p className="type-body text-[var(--t-text-secondary)]">{story.industry}</p>
                    </div>
                    <motion.div 
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}
                        className="lg:col-span-8 bg-[var(--t-bg-card)] border border-[var(--t-border)] rounded-[8px] p-8 lg:p-12"
                    >
                        <div className="space-y-8">
                            <div>
                                <h4 className="type-body font-medium text-[var(--t-text)] mb-2">The challenge</h4>
                                <p className="type-body-sm text-[var(--t-text-secondary)]">{story.challenge}</p>
                            </div>
                            <div>
                                <h4 className="type-body font-medium text-[var(--t-text)] mb-2">First release</h4>
                                <p className="type-body-sm text-[var(--t-text-secondary)]">{story.firstRelease}</p>
                            </div>
                            <div>
                                <h4 className="type-body font-medium text-[var(--t-text)] mb-4">Outcome</h4>
                                <p className="type-body-sm text-[var(--t-text-secondary)] mb-6">{story.outcome}</p>
                                <div className="grid grid-cols-2 gap-4">
                                    {story.metrics.map((metric: string, i: number) => (
                                        <div key={i} className="bg-[var(--t-bg-surface)] p-4 rounded-[4px] border border-[var(--t-border)]">
                                            <p className="type-body font-medium text-[var(--t-text)]">{metric}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {story.quote && (
                                <blockquote className="pl-6 border-l-[4px] border-[var(--t-accent)] mt-8">
                                    <p className="type-body italic text-[var(--t-text-secondary)]">&quot;{story.quote}&quot;</p>
                                </blockquote>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
