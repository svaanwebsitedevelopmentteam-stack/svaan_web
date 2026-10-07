"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        quote: "SVaaN helped us clarify our strategic direction before a single line of code was written. Their ability to connect business objectives with practical technology architecture drastically reduced our time to market.",
        author: "Sarah Jenkins",
        title: "Chief Technology Officer",
        company: "Global FinTech SaaS",
    },
    {
        quote: "The modernization of our core platforms was handled with incredible discipline. They didn't just rebuild our software - they ensured the digital experience made sense for both our users and our operations.",
        author: "Marcus Chen",
        title: "VP of Digital Transformation",
        company: "Enterprise Healthcare",
    },
    {
        quote: "What separates SVaaN is their commitment beyond the initial build. Their managed technology support has allowed our internal teams to focus on growth while they seamlessly handle infrastructure evolution.",
        author: "Elena Rodriguez",
        title: "Director of Operations",
        company: "National Logistics Provider",
    },
    {
        quote: "An absolute game-changer. The architectural overhaul they provided allowed our platform to handle 10x the traffic without breaking a sweat. Truly top-tier engineering talent.",
        author: "David Alston",
        title: "Director of Engineering",
        company: "RetailTech Inc.",
    }
];

export function ClientExperiences() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="relative w-full py-[120px] overflow-hidden flex items-center" style={{ backgroundColor: "var(--t-bg)", borderTop: "1px solid var(--t-border)", minHeight: "80vh" }}>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10 w-full">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Context, Controls & Animated Pagination */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-[var(--t-radius-sm)] border text-sm font-semibold max-w-max uppercase tracking-widest"
                            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-text-muted)" }}
                        >
                            Client Experiences
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="type-h2 mb-8 leading-[1.1]"
                            style={{ color: "var(--t-text)" }}
                        >
                            Impact that <br />
                            <span className="italic" style={{ color: "var(--t-accent)" }}>speaks.</span>
                        </motion.h2>

                        {/* Controls & Pagination Area */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-10 mt-4"
                        >
                            {/* Navigation Arrows */}
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={handlePrev}
                                    aria-label="Previous testimonial"
                                    className="w-12 h-12 flex items-center justify-center rounded-full border transition-all hover:-translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2"
                                    style={{ borderColor: "var(--t-border)", color: "var(--t-text)" }}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button
                                    onClick={handleNext}
                                    aria-label="Next testimonial"
                                    className="w-12 h-12 flex items-center justify-center rounded-full border transition-all hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2"
                                    style={{ borderColor: "var(--t-border)", color: "var(--t-text)", backgroundColor: "var(--t-bg-surface)" }}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Animated Pagination Line */}
                            <div className="flex items-center gap-2">
                                {testimonials.map((_, i) => (
                                    <button
                                        onClick={() => setCurrentIndex(i)}
                                        key={i}
                                        aria-label={`Go to slide ${i + 1}`}
                                        className="py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] rounded-[var(--t-radius-sm)]"
                                    >
                                        <motion.div
                                            animate={{
                                                width: i === currentIndex ? 48 : 12,
                                                opacity: i === currentIndex ? 1 : 0.3
                                            }}
                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                            className="h-[3px] rounded-full"
                                            style={{ backgroundColor: "var(--t-accent)" }}
                                        />
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Premium Active Testimonial Window */}
                    <div className="lg:col-span-7 relative h-[450px] md:h-[350px] w-full flex flex-col justify-center">
                        <svg className="absolute -top-10 -left-6 w-24 h-24 pointer-events-none" style={{ color: "var(--t-accent)", opacity: 0.05 }} fill="currentColor" viewBox="0 0 32 32">
                            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
                        </svg>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 40, filter: "blur(4px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, x: -40, filter: "blur(4px)" }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="absolute inset-0 flex flex-col justify-center"
                            >
                                <p className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight font-medium mb-10" style={{ color: "var(--t-text)" }}>
                                    &ldquo;{testimonials[currentIndex].quote}&rdquo;
                                </p>

                                <div className="flex items-center gap-5 pt-6 mt-auto">
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full font-bold uppercase shadow-sm" style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-accent)", color: "var(--t-accent)" }}>
                                        {testimonials[currentIndex].author.split(' ').map(name => name[0]).join('')}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg" style={{ color: "var(--t-text)" }}>
                                            {testimonials[currentIndex].author}
                                        </h4>
                                        <p className="text-sm font-medium" style={{ color: "var(--t-text-muted)" }}>
                                            {testimonials[currentIndex].title}, <span className="opacity-70">{testimonials[currentIndex].company}</span>
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
