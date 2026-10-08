/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainer } from "@/lib/motion";

export function SolutionHero({ hero, meta }: { hero: any, meta: any }) {
    return (
        <section className="relative pt-[160px] pb-32 lg:pb-48 bg-[var(--t-bg)] border-b border-[var(--t-border)]">
            <div 
                className="absolute inset-0 opacity-[0.04] pointer-events-none" 
                style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '36px 36px' }} 
            />
            <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10"
            >
                <motion.div variants={fadeUpVariants} className="type-caption text-[var(--t-accent)] mb-4 flex items-center">
                    Solutions / {meta.title.split(' |')[0]}
                    <span className="w-6 h-[1px] bg-[var(--t-accent)] ml-4" />
                </motion.div>
                <motion.h1 variants={fadeUpVariants} className="type-display max-w-[860px] text-[var(--t-text)] mb-6">
                    {hero.h1}
                </motion.h1>
                <motion.p variants={fadeUpVariants} className="type-body-lg text-[var(--t-text-secondary)] max-w-[860px] mb-8">
                    {hero.intro}
                    {hero.introNote && (
                        <span className="block mt-2 text-[var(--t-text-muted)]">
                            {hero.introNote.verified ? hero.introNote.text : (hero.introNote.fallback || "")}
                        </span>
                    )}
                </motion.p>
                <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <Button variant="primary" href={hero.primaryCta.href}>
                        {hero.primaryCta.label}
                    </Button>
                    {hero.secondaryLink && (
                        <Link href={hero.secondaryLink.href} className="type-body font-medium text-[var(--t-text)] hover:text-[var(--t-accent)] transition-colors underline underline-offset-4">
                            {hero.secondaryLink.label}
                        </Link>
                    )}
                </motion.div>

                {/* Path Nodes Overlapping Bottom */}
                <div className="absolute left-6 lg:left-10 right-6 lg:right-10 -bottom-32 lg:-bottom-48 translate-y-1/2">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col lg:flex-row gap-4 lg:gap-6 relative"
                    >
                        {/* Connector Line */}
                        <svg className="absolute hidden lg:block left-0 top-1/2 -translate-y-1/2 w-full h-[1px] z-0" preserveAspectRatio="none">
                            <motion.line 
                                x1="0" y1="0.5" x2="100%" y2="0.5" 
                                stroke="var(--t-border)" strokeWidth="1"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 0.9, delay: 0.8 }}
                            />
                        </svg>
                        
                        {hero.pathNodes.map((node: any, i: number) => (
                            <motion.div 
                                key={i}
                                variants={fadeUpVariants}
                                className="flex-1 bg-[var(--t-bg-card)] border border-[var(--t-border)] rounded-[8px] p-6 relative z-10 shadow-sm"
                            >
                                <h3 className="type-h3 text-[var(--t-text)] mb-2">{node.title}</h3>
                                <p className="type-body-sm text-[var(--t-text-secondary)]">{node.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
