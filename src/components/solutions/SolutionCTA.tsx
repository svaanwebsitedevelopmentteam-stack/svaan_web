/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUpVariants } from "@/lib/motion";

export function SolutionCTA({ cta }: { cta: any }) {
    return (
        <section className="py-24 bg-[var(--t-accent)] text-[var(--t-btn-text)] text-center px-6">
            <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants}
                className="max-w-[860px] mx-auto flex flex-col items-center"
            >
                <h2 className="type-display mb-6">{cta.h2}</h2>
                <p className="type-body-lg mb-10 opacity-90">{cta.text}</p>
                <Button variant="secondary" href="/contact" className="bg-[var(--t-btn-text)] text-[var(--t-accent)] hover:bg-[var(--t-bg)]">
                    {cta.label}
                </Button>
            </motion.div>
        </section>
    );
}
