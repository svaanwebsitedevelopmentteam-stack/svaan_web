/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

interface Props {
    problem: {
        h2: string;
        body: string;
        compare: {
            often: string;
            ourApproach: string;
        };
    };
}

export function ProblemBand({ problem }: Props) {
    return (
        <section className="py-16 md:py-24 relative" style={{ backgroundColor: "var(--t-bg-card)" }}>
            {/* 4px accent keyline on the left edge */}
            <motion.div 
                className="absolute left-0 top-0 bottom-0 w-1" 
                style={{ backgroundColor: "var(--t-accent)", transformOrigin: "top" }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
            />
            
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <motion.div {...fadeUp}>
                    <span className="type-caption mb-4 inline-block" style={{ color: "var(--t-accent)" }}>The Problem</span>
                    <h2 className="type-h2 mb-6" style={{ color: "var(--t-text)" }}>{problem.h2}</h2>
                    <p className="type-body-lg" style={{ color: "var(--t-text-muted)", maxWidth: "860px" }}>{problem.body}</p>
                </motion.div>
                
                <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.25 }} className="flex flex-col gap-6">
                    <motion.div variants={staggerItem} className="p-6 rounded-[var(--t-radius-md)]" style={{ backgroundColor: "var(--t-bg)", border: "1px solid var(--t-border)" }}>
                        <h3 className="type-caption mb-2" style={{ color: "var(--t-text-muted)" }}>Often</h3>
                        <p className="type-body font-medium" style={{ color: "var(--t-text)" }}>{problem.compare.often}</p>
                    </motion.div>
                    
                    <motion.div variants={staggerItem} className="p-6 rounded-[var(--t-radius-md)] relative overflow-hidden" style={{ backgroundColor: "var(--t-bg)", border: "1px solid var(--t-accent)" }}>
                        <div className="absolute top-0 left-0 bottom-0 w-1" style={{ backgroundColor: "var(--t-accent)" }} />
                        <h3 className="type-caption mb-2" style={{ color: "var(--t-accent)" }}>Our Approach</h3>
                        <p className="type-body font-medium" style={{ color: "var(--t-text)" }}>{problem.compare.ourApproach}</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
