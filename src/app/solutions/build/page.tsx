"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icons3D } from "@/components/ui/Icons3D";
import { TechStack } from "@/components/TechStack";

import { FAQAccordion } from "@/components/FAQAccordion";

/* ────────────────────────────────────────────────────────────
   HERO SECTION
   ──────────────────────────────────────────────────────────── */
function BuildHero() {
    return (
        <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden py-24 border-b" style={{ borderColor: "var(--t-border)" }}>
            {/* Animated Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
                 style={{ 
                     backgroundImage: 'linear-gradient(to right, var(--t-border) 1px, transparent 1px), linear-gradient(to bottom, var(--t-border) 1px, transparent 1px)',
                     backgroundSize: '4rem 4rem',
                     maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 10%, transparent 100%)'
                 }} 
            />
            
            {/* Floating Glows */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[120px] opacity-20 animate-pulse" style={{ backgroundColor: "var(--t-accent)" }} />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10" style={{ backgroundColor: "var(--t-text)" }} />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10 w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
                
                {/* Left Content */}
                <div className="relative">
                    {/* Decorative line */}
                    <div className="hidden lg:block absolute -left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--t-accent)] to-transparent opacity-30" />
                    
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border" 
                            style={{ backgroundColor: "var(--t-bg-card)", color: "var(--t-accent)", borderColor: "var(--t-border)" }}>
                            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "var(--t-accent)" }} />
                            Solution Focus
                        </span>
                    </motion.div>
                    
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                        className="type-display mb-8" style={{ color: "var(--t-text)" }}>
                        Build software around a real <span className="italic relative whitespace-nowrap">
                            <span className="relative z-10" style={{ color: "var(--t-accent)" }}>business need.</span>
                            <svg className="absolute w-full h-3 -bottom-1 left-0 z-0 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="var(--t-accent)" strokeWidth="4" fill="none" strokeLinecap="round"/></svg>
                        </span>
                    </motion.h1>
                    
                    <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                        className="type-body-lg max-w-2xl mb-12" style={{ color: "var(--t-text-muted)" }}>
                        SVaaN designs and builds new software, from a first proof of concept to enterprise systems and AI-enabled products. We start with the problem the business needs solved, then choose the technology.
                    </motion.p>
                    
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap items-center gap-6">
                        <div className="flex items-center gap-3 px-6 py-4 rounded-[var(--t-radius-md)] border backdrop-blur-sm" style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>
                            <svg className="w-6 h-6" style={{ color: "var(--t-accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            <span className="font-semibold text-sm tracking-wide uppercase" style={{ color: "var(--t-text)" }}>Enterprise Scale</span>
                        </div>
                        <div className="flex items-center gap-3 px-6 py-4 rounded-[var(--t-radius-md)] border backdrop-blur-sm" style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>
                            <svg className="w-6 h-6" style={{ color: "var(--t-accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            <span className="font-semibold text-sm tracking-wide uppercase" style={{ color: "var(--t-text)" }}>AI-Enabled</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Content: Floating Icon in Glass Box */}
                <motion.div initial={{ opacity: 0, scale: 0.8, rotateY: -15 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ duration: 1, delay: 0.3 }}
                    className="relative flex justify-center lg:justify-end">
                    
                    <div className="relative w-full max-w-[450px] aspect-square rounded-[3rem] p-10 flex items-center justify-center transform-gpu">
                        
                        {/* Rotating ring behind icon */}
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-8 rounded-full border border-dashed opacity-30 pointer-events-none"
                            style={{ borderColor: "var(--t-accent)" }} />
                            
                        <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                            <Icons3D.ProcessBuild className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] relative z-10 filter drop-shadow-2xl" />
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   THE PROBLEM
   ──────────────────────────────────────────────────────────── */
function TheProblem() {
    return (
        <section className="py-16 relative">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    className="p-8 md:p-10 rounded-[var(--t-radius-md)] flex flex-col md:flex-row items-center md:items-center gap-8 border relative overflow-hidden backdrop-blur-md"
                    style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
                    
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--t-accent)] to-transparent opacity-80" />
                    
                    <div className="flex-shrink-0 md:w-1/3">
                        <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--t-accent)" }}>The Problem</div>
                        <h2 className="type-h2" style={{ color: "var(--t-text)" }}>
                            Software must solve a real need.
                        </h2>
                    </div>
                    <div className="md:w-2/3 border-l border-[var(--t-border)] pl-0 md:pl-8 pt-4 md:pt-0">
                        <p className="type-body-lg" style={{ color: "var(--t-text-muted)" }}>
                            Many projects start with a long feature list and no clear first release. The result is software that takes too long, costs too much and misses the real need. New software is only worth building if it solves something specific.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   WHAT WE DO (Bento Grid layout)
   ──────────────────────────────────────────────────────────── */
const services = [
    { title: "Custom software", desc: "Software shaped around how your business works, not a generic package.", icon: <Icons3D.Software /> },
    { title: "Product engineering", desc: "Taking a product from idea to a working, maintainable release.", icon: <Icons3D.ProcessShape /> },
    { title: "MVP development", desc: "A first version real users can try, so you learn before you invest more.", icon: <Icons3D.ProcessPrototype /> },
    { title: "POC development", desc: "Test whether an idea works before you commit to a full build.", icon: <Icons3D.Strategy /> },
    { title: "Enterprise software", desc: "Systems for complex operations with many users, roles and integrations.", icon: <Icons3D.ProcessBuild /> },
    { title: "Web and mobile apps", desc: "Applications your customers and teams use every day.", icon: <Icons3D.Cloud /> },
    { title: "AI software", desc: "AI features that solve a defined business problem, such as workflow automation or decision support.", icon: <Icons3D.AI /> },
    { title: "Systems integration", desc: "Connect new software to the systems you already use.", icon: <Icons3D.Support /> }
];

function WhatWeDo() {
    return (
        <section className="py-32">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="mb-16">
                    <h2 className="type-display mb-6" style={{ color: "var(--t-text)" }}>What we do</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((s, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                            className="p-8 rounded-[var(--t-radius-md)] transition-all hover:-translate-y-1"
                            style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}>
                            <div className="w-12 h-12 mb-6" style={{ color: "var(--t-accent)" }}>{s.icon}</div>
                            <h3 className="type-h3 mb-3" style={{ color: "var(--t-text)" }}>{s.title}</h3>
                            <p className="type-body-sm" style={{ color: "var(--t-text-muted)" }}>{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   WHEN YOU NEED IT
   ──────────────────────────────────────────────────────────── */
const signs = [
    "You have an idea and want to test it before a large investment.",
    "Spreadsheets and manual processes are holding the business back.",
    "The tools you can buy do not fit the way you work.",
    "You want to add AI to a product and have a clear use case."
];

function WhenYouNeedIt() {
    return (
        <section className="py-32 relative overflow-hidden" style={{ backgroundColor: "var(--t-bg-surface)", borderTop: "1px solid var(--t-border)" }}>
            <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
                <div className="text-center mb-24">
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="type-display mb-6" style={{ color: "var(--t-text)" }}>When you need it</motion.h2>
                    <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                </div>
                
                <div className="relative">
                    {/* Center Line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -ml-px" 
                         style={{ background: "linear-gradient(180deg, transparent 0%, var(--t-accent) 20%, var(--t-accent) 80%, transparent 100%)", opacity: 0.3 }} />
                         
                    <div className="space-y-6 md:space-y-0">
                        {signs.map((sign, i) => {
                            const isEven = i % 2 === 0;
                            return (
                                <div key={i} className={`relative flex flex-col md:flex-row items-center md:min-h-[200px] ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    
                                    {/* Mobile only line */}
                                    <div className="md:hidden absolute left-8 top-0 bottom-0 w-px" style={{ background: "linear-gradient(180deg, transparent 0%, var(--t-accent) 20%, var(--t-accent) 80%, transparent 100%)", opacity: 0.3 }} />

                                    {/* Node */}
                                    <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                                        className="absolute left-[24px] md:left-1/2 w-4 h-4 rounded-full md:-ml-[8px] mt-8 md:mt-0 shadow-[0_0_15px_var(--t-accent)] z-10" 
                                        style={{ backgroundColor: "var(--t-accent)" }} />
                                         
                                    {/* Content Card */}
                                    <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} mt-8 md:mt-0`}>
                                        <motion.div initial={{ opacity: 0, x: isEven ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                                            className="p-8 md:p-10 rounded-[var(--t-radius-md)] relative overflow-hidden group transition-all duration-300 hover:scale-[1.02]"
                                            style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)", boxShadow: "0 10px 40px -10px rgba(0,0,0,0.05)" }}>
                                            
                                            <div className={`absolute top-0 w-32 h-32 rounded-full blur-[50px] opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-40 ${isEven ? 'right-0' : 'left-0'}`} style={{ backgroundColor: "var(--t-accent)" }} />
                                            
                                            <span className="font-display text-6xl font-bold opacity-10 absolute -top-4 -left-2" style={{ color: "var(--t-accent)" }}>0{i+1}</span>
                                            <p className="type-h3 relative z-10" style={{ color: "var(--t-text)" }}>
                                                {sign}
                                            </p>
                                        </motion.div>
                                    </div>
                                    
                                    {/* Empty Space for alignment */}
                                    <div className="hidden md:block w-1/2" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            
            {/* Background Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none scale-[2]">
                <Icons3D.ProcessBuild className="w-[500px] h-[500px]" />
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   FAQ
   ──────────────────────────────────────────────────────────── */
const faqs = [
    { q: "How do we start?", a: "With a conversation about the problem. We then agree the scope of a first release before any build begins." },
    { q: "Can we start small?", a: "Yes. A proof of concept or MVP is often the right first step because it tests the idea before the larger investment." },
    { q: "Who owns the software?", a: "You do. We build custom software as work-for-hire, so the intellectual property belongs to your business." },
    { q: "Will you support it after launch?", a: "Yes, if you want us to. Our Operate service covers application, production and infrastructure support." }
];

function FAQ() {
    return (
        <section className="py-32 bg-opacity-50" style={{ backgroundColor: "var(--t-bg-surface)" }}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="text-center mb-16">
                    <h2 className="type-display mb-4" style={{ color: "var(--t-text)" }}>Frequently Asked Questions</h2>
                    <p className="type-body-lg" style={{ color: "var(--t-text-muted)" }}>Everything you need to know about our Build process.</p>
                </div>
                <FAQAccordion faqs={faqs} />
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   CTA
   ──────────────────────────────────────────────────────────── */
function CTA() {
    return (
        <section className="py-32 relative overflow-hidden text-center" style={{ borderTop: "1px solid var(--t-border)" }}>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[200px] opacity-20 pointer-events-none" style={{ backgroundColor: "var(--t-accent)" }} />
            <div className="max-w-[800px] mx-auto px-6 relative z-10">
                <h2 className="type-display mb-6" style={{ color: "var(--t-text)" }}>Tell us what you want to build.</h2>
                <Link href="/contact" className="inline-flex items-center gap-3 h-14 px-8 rounded-[var(--t-radius-md)] font-bold transition-all hover:scale-105"
                    style={{ backgroundColor: "var(--t-btn-bg)", color: "var(--t-btn-text)" }}>
                    Discuss your build
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
            </div>
        </section>
    );
}

export default function BuildPage() {
    return (
        <main className="w-full">
            <BuildHero />
            <TheProblem />
            <WhatWeDo />
            <WhenYouNeedIt />
            <TechStack />
            <FAQ />
            <CTA />
        </main>
    );
}
