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
function OperateHero() {
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
                        className="font-display text-[50px] font-bold leading-tight mb-8" style={{ color: "var(--t-text)" }}>
                        Keep critical technology <span className="italic relative whitespace-nowrap">
                            <span className="relative z-10" style={{ color: "var(--t-accent)" }}>running.</span>
                            <svg className="absolute w-full h-3 -bottom-1 left-0 z-0 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="var(--t-accent)" strokeWidth="4" fill="none" strokeLinecap="round"/></svg>
                        </span>
                    </motion.h1>
                    
                    <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-xl leading-relaxed max-w-2xl mb-12" style={{ color: "var(--t-text-muted)" }}>
                        Launch is the start, not the finish. SVaaN supports live applications, infrastructure and users, so the technology your business depends on stays stable and useful.
                    </motion.p>
                    
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap items-center gap-6">
                        <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border backdrop-blur-sm" style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>
                            <svg className="w-6 h-6" style={{ color: "var(--t-accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            <span className="font-semibold text-sm tracking-wide uppercase" style={{ color: "var(--t-text)" }}>24/7 Reliability</span>
                        </div>
                        <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border backdrop-blur-sm" style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>
                            <svg className="w-6 h-6" style={{ color: "var(--t-accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            <span className="font-semibold text-sm tracking-wide uppercase" style={{ color: "var(--t-text)" }}>Proactive Support</span>
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
                            <Icons3D.Support className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] relative z-10 filter drop-shadow-2xl" />
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
                    className="p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-center md:items-center gap-8 border relative overflow-hidden backdrop-blur-md"
                    style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
                    
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--t-accent)] to-transparent opacity-80" />
                    
                    <div className="flex-shrink-0 md:w-1/3">
                        <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--t-accent)" }}>The Problem</div>
                        <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight" style={{ color: "var(--t-text)" }}>
                            When live technology breaks, people stop working.
                        </h2>
                    </div>
                    <div className="md:w-2/3 border-l border-[var(--t-border)] pl-0 md:pl-8 pt-4 md:pt-0">
                        <p className="text-lg leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                            If nobody clearly owns it, issues bounce between teams and the same problems keep coming back.
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
    { title: "Application support", desc: "Keep business-critical applications stable and useful.", icon: <Icons3D.Software /> },
    { title: "Production support", desc: "Protect the reliability of live environments.", icon: <Icons3D.ProcessShape /> },
    { title: "Helpdesk & end-user", desc: "Keep people productive when technology gets in the way.", icon: <Icons3D.Support /> },
    { title: "Infrastructure support", desc: "Keep the technology foundation dependable.", icon: <Icons3D.ProcessBuild /> },
    { title: "Cloud managed services", desc: "Manage cloud environments for performance and growth.", icon: <Icons3D.Cloud /> },
    { title: "DevOps support", desc: "Make software delivery more consistent and efficient.", icon: <Icons3D.Strategy /> },
    { title: "Monitoring & incident response", desc: "Spot problems early and resolve them.", icon: <Icons3D.ProcessDiscover /> },
    { title: "Continuous maintenance", desc: "Routine updates, fixes and performance reviews.", icon: <Icons3D.ProcessPrototype /> }
];

function WhatWeDo() {
    return (
        <section className="py-32">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--t-text)" }}>What we do</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((s, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                            className="p-8 rounded-3xl transition-all hover:-translate-y-1"
                            style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}>
                            <div className="w-12 h-12 mb-6" style={{ color: "var(--t-accent)" }}>{s.icon}</div>
                            <h3 className="font-display text-xl font-bold mb-3" style={{ color: "var(--t-text)" }}>{s.title}</h3>
                            <p className="text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{s.desc}</p>
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
    "Your team built or bought an application and cannot support it fully.",
    "A vendor has left and nobody owns the system.",
    "Users report problems and there is no clear place to send them.",
    "You want a helpdesk for staff or customers.",
    "Your cloud environment needs someone to manage it.",
    "Releases are manual and risky."
];

function WhenYouNeedIt() {
    return (
        <section className="py-32 relative overflow-hidden" style={{ backgroundColor: "var(--t-bg-surface)", borderTop: "1px solid var(--t-border)" }}>
            <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative z-10">
                <div className="text-center mb-24">
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--t-text)" }}>When you need it</motion.h2>
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
                                            className="p-8 md:p-10 rounded-3xl relative overflow-hidden group transition-all duration-300 hover:scale-[1.02]"
                                            style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)", boxShadow: "0 10px 40px -10px rgba(0,0,0,0.05)" }}>
                                            
                                            <div className={`absolute top-0 w-32 h-32 rounded-full blur-[50px] opacity-20 pointer-events-none transition-opacity duration-500 group-hover:opacity-40 ${isEven ? 'right-0' : 'left-0'}`} style={{ backgroundColor: "var(--t-accent)" }} />
                                            
                                            <span className="font-display text-6xl font-bold opacity-10 absolute -top-4 -left-2" style={{ color: "var(--t-accent)" }}>0{i+1}</span>
                                            <p className="text-xl md:text-2xl font-medium leading-relaxed relative z-10" style={{ color: "var(--t-text)" }}>
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
                <Icons3D.Support className="w-[500px] h-[500px]" />
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   FAQ
   ──────────────────────────────────────────────────────────── */
const faqs = [
    { q: "What can you support?", a: "Applications, production environments, infrastructure, cloud environments and end users. We agree the scope in writing before we start." },
    { q: "Can you support a system you did not build?", a: "Yes. We start by learning how it works and documenting what we find." },
    { q: "What are your support hours and response times?", a: "We define these based on your specific operational needs and agree on SLAs before the engagement starts." },
    { q: "Can support grow into improvement work?", a: "Yes. Many support engagements lead to fixes and enhancements. That is the Evolve service." }
];

function FAQ() {
    return (
        <section className="py-32 bg-opacity-50" style={{ backgroundColor: "var(--t-bg-surface)" }}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="text-center mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--t-text)" }}>Frequently Asked Questions</h2>
                    <p className="text-lg" style={{ color: "var(--t-text-muted)" }}>Everything you need to know about our Operate service.</p>
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
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--t-text)" }}>Tell us what needs looking after.</h2>
                <Link href="/contact" className="inline-flex items-center gap-3 h-14 px-8 rounded-full font-bold transition-all hover:scale-105"
                    style={{ backgroundColor: "var(--t-accent)", color: "#fff" }}>
                    Discuss your support needs
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
            </div>
        </section>
    );
}

export default function OperatePage() {
    return (
        <main className="w-full">
            <OperateHero />
            <TheProblem />
            <WhatWeDo />
            <WhenYouNeedIt />
            <FAQ />
            <CTA />
        </main>
    );
}
