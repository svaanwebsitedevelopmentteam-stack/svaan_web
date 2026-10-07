/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icons3D } from "@/components/ui/Icons3D";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/motion";

interface Props {
    services: {
        title: string;
        desc: string;
        group: "Test the idea" | "Build the product" | "Connect and extend";
        icon: string;
    }[];
}

export function ServiceBento({ services }: Props) {
    const groups = [
        { label: "Test the idea", cols: 2 },
        { label: "Build the product", cols: 3 },
        { label: "Connect and extend", cols: 3 }
    ];

    return (
        <section className="py-16 md:py-24">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <motion.div {...fadeUp} className="mb-16">
                    <h2 className="type-display" style={{ color: "var(--t-text)" }}>What we do</h2>
                </motion.div>
                
                <div className="space-y-16">
                    {groups.map((g) => {
                        const groupServices = services.filter(s => s.group === g.label);
                        if (groupServices.length === 0) return null;
                        
                        return (
                            <motion.div key={g.label} variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.1 }}>
                                <motion.h3 variants={staggerItem} className="type-h3 mb-6" style={{ color: "var(--t-text)" }}>
                                    {g.label}
                                </motion.h3>
                                
                                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${g.cols} gap-6`}>
                                    {groupServices.map((service, idx) => {
                                        const IconComponent = Icons3D[service.icon as keyof typeof Icons3D] || Icons3D.Software;
                                        return (
                                            <motion.div 
                                                key={idx}
                                                variants={staggerItem}
                                                className="group relative p-8 rounded-[var(--t-radius-md)] flex flex-col transition-all duration-200"
                                                style={{ backgroundColor: "var(--t-bg)", border: "1px solid var(--t-border)" }}
                                                whileHover={{ y: -4, borderColor: "var(--t-accent)" }}
                                            >
                                                <div className="w-12 h-12 mb-6 text-[var(--t-accent)]">
                                                    <IconComponent />
                                                </div>
                                                <h4 className="type-h3 mb-3" style={{ color: "var(--t-text)" }}>{service.title}</h4>
                                                <p className="type-body flex-grow" style={{ color: "var(--t-text-muted)" }}>{service.desc}</p>
                                                
                                                <div className="mt-6 flex items-center text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1" style={{ color: "var(--t-accent)" }}>
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
