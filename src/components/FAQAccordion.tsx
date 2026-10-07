"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
    q: string;
    a: string;
}

interface FAQAccordionProps {
    faqs: FAQItem[];
    className?: string;
}

export function FAQAccordion({ faqs, className = "" }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className={`max-w-[900px] mx-auto w-full space-y-4 ${className}`.trim()}>
            {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const contentId = `faq-content-${index}`;
                const buttonId = `faq-button-${index}`;
                return (
                    <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="rounded-[var(--t-radius-md)] overflow-hidden transition-all duration-300"
                        style={{ 
                            backgroundColor: "var(--t-bg-card)", 
                            border: `1px solid ${isOpen ? "var(--t-accent)" : "var(--t-border)"}`,
                            boxShadow: isOpen ? "0 10px 30px -10px rgba(0,0,0,0.1)" : "none"
                        }}
                    >
                        <button 
                            id={buttonId}
                            aria-expanded={isOpen}
                            aria-controls={contentId}
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                            className="w-full px-6 py-6 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2 group"
                        >
                            <h4 className="type-body-lg"
                                style={{ color: isOpen ? "var(--t-accent)" : "var(--t-text)" }}>
                                {faq.q}
                            </h4>
                            <div className="flex-shrink-0 ml-4 flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300"
                                style={{ 
                                    backgroundColor: isOpen ? "var(--t-accent)" : "var(--t-bg-surface)", 
                                    color: isOpen ? "#fff" : "var(--t-text)",
                                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" 
                                }}>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>
                        
                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    id={contentId}
                                    role="region"
                                    aria-labelledby={buttonId}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="px-6 pb-6 pt-0">
                                        <p className="type-body-lg" style={{ color: "var(--t-text-muted)" }}>
                                            {faq.a}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                );
            })}
        </div>
    );
}
