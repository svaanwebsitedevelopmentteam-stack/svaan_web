/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUpVariants } from "@/lib/motion";
import { 
    Code2, Terminal, Database, Cloud, 
    Monitor, Server, Cpu, Layers, Box, Layout, Shield
} from "lucide-react";

const iconMap: Record<string, any> = {
    "Next.js": Layout,
    "React": Code2,
    "React Native": Monitor,
    "Vue": Layers,
    "Node.js": Server,
    "Python": Terminal,
    "Java": Box,
    "Go": Cpu,
    "PostgreSQL": Database,
    "MongoDB": Database,
    "AWS": Cloud,
    "Google Cloud": Cloud,
    "Azure": Cloud,
    "Docker": Box,
    "Kubernetes": Layers,
    "CI/CD pipelines": Terminal,
    "APIs": Code2,
    "microservices": Box,
    "serverless": Cloud,
    "TensorFlow": Cpu
};

export function TechGroups({ groups }: { groups: any[] }) {
    const [activeTab, setActiveTab] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    if (!groups || groups.length === 0) return null;

    const activeGroup = groups[activeTab];

    const scroll = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const scrollAmount = 300;
            carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-16 lg:py-24 max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="type-caption text-[var(--t-accent)] mb-4 flex items-center">
                Typical choices
                <span className="w-6 h-[1px] bg-[var(--t-accent)] ml-4" />
            </div>
            <h2 className="type-h2 text-[var(--t-text)] mb-12">Technologies</h2>

            <div className="flex flex-col gap-8">
                {/* Tabs */}
                <div className="flex flex-wrap gap-2 border-b border-[var(--t-border)] pb-4">
                    {groups.map((group, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveTab(i)}
                            className={`px-5 py-2.5 type-body-sm rounded-t-[8px] transition-colors -mb-[17px] border-b-2 ${activeTab === i ? 'border-[var(--t-accent)] text-[var(--t-text)] font-medium' : 'border-transparent text-[var(--t-text-secondary)] hover:text-[var(--t-text)] hover:border-[var(--t-border)]'}`}
                        >
                            {group.title}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="relative"
                    >
                        {activeGroup.note ? (
                            <p className="type-body text-[var(--t-text-secondary)] py-8">{activeGroup.note}</p>
                        ) : (
                            <div className="relative group/carousel">
                                <div 
                                    ref={carouselRef}
                                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 -mx-6 px-6 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden"
                                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                                >
                                    {activeGroup.items?.map((item: string, j: number) => {
                                        const Icon = iconMap[item] || Box;
                                        return (
                                            <div 
                                                key={j} 
                                                className="snap-start shrink-0 w-[240px] bg-[var(--t-bg-surface)] border border-[var(--t-border)] hover:border-[var(--t-accent)] rounded-[8px] p-8 transition-colors group flex flex-col items-center justify-center text-center gap-4"
                                            >
                                                <div className="w-12 h-12 rounded-full bg-[var(--t-bg-card)] border border-[var(--t-border)] flex items-center justify-center text-[var(--t-text-secondary)] group-hover:text-[var(--t-accent)] group-hover:border-[var(--t-accent)] transition-colors">
                                                    <Icon strokeWidth={1.5} size={24} />
                                                </div>
                                                <span className="type-body font-medium text-[var(--t-text)]">{item}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                                
                                {/* Controls */}
                                {activeGroup.items?.length > 3 && (
                                    <>
                                        <button 
                                            onClick={() => scroll('left')}
                                            className="absolute left-0 lg:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-[var(--t-bg-card)] border border-[var(--t-border)] rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover/carousel:opacity-100 transition-opacity disabled:opacity-0 hidden lg:flex hover:text-[var(--t-accent)] hover:border-[var(--t-accent)]"
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                                        </button>
                                        <button 
                                            onClick={() => scroll('right')}
                                            className="absolute right-0 lg:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-[var(--t-bg-card)] border border-[var(--t-border)] rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover/carousel:opacity-100 transition-opacity disabled:opacity-0 hidden lg:flex hover:text-[var(--t-accent)] hover:border-[var(--t-accent)]"
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                                        </button>
                                    </>
                                )}
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
