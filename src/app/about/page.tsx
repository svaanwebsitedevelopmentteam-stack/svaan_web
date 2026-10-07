"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icons3D } from "@/components/ui/Icons3D";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Illustrations } from "@/components/ui/Illustrations";

/* ────────────────────────────────────────────────────────────
   SECTION 1 — HERO (Solutions Style)
   ──────────────────────────────────────────────────────────── */
function AboutHero() {
    return (
        <section className="relative min-h-[85vh] flex flex-col justify-center overflow-clip pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 border-b" style={{ borderColor: "var(--t-border)" }}>
            {/* Animated Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(to right, var(--t-border) 1px, transparent 1px), linear-gradient(to bottom, var(--t-border) 1px, transparent 1px)',
                    backgroundSize: '4rem 4rem',
                    maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 10%, transparent 100%)'
                }}
            />

            {/* Floating Ambient Glows */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none"
                style={{ backgroundColor: "var(--t-accent)", opacity: "calc(var(--t-orb-opacity) * 0.8)" }} />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none"
                style={{ backgroundColor: "var(--t-text)", opacity: "calc(var(--t-orb-opacity) * 0.5)" }} />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 sm:gap-14 lg:gap-16 items-center">

                {/* Left Content */}
                <div className="relative">
                    {/* Decorative line */}
                    <div className="hidden lg:block absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--t-accent)] to-transparent opacity-30" />

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-4 sm:mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border text-xs font-semibold tracking-wider uppercase"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--t-accent)" }} />
                            About SVaaN
                        </div>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6" style={{ color: "var(--t-text)" }}>
                        We started with one{" "}
                        <span className="italic relative whitespace-nowrap">
                            <span className="relative z-10" style={{ color: "var(--t-accent)" }}>application.</span>
                            <svg className="absolute w-full h-3 -bottom-1 left-0 z-0 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="var(--t-accent)" strokeWidth="4" fill="none" strokeLinecap="round" />
                            </svg>
                        </span>
                    </motion.h1>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mb-8 sm:mb-10" style={{ color: "var(--t-text-muted)" }}>
                        <p>SVaaN Global Tech is a team of 60+ in Chennai. We build software, fix old systems and look after live applications for clients in the US, UAE, UK and Canada. If something in your technology is broken, missing or ownerless, we take it on.</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap items-center gap-4 sm:gap-5">
                        <div className="flex items-center gap-3 px-4 sm:px-5 py-3 rounded-xl border transition-all duration-300 hover:border-[var(--t-accent)] hover:shadow-sm"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border"
                                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                            </div>
                            <span className="font-semibold text-xs sm:text-sm tracking-wide uppercase" style={{ color: "var(--t-text)" }}>Global Reach</span>
                        </div>
                        <div className="flex items-center gap-3 px-4 sm:px-5 py-3 rounded-xl border transition-all duration-300 hover:border-[var(--t-accent)] hover:shadow-sm"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border"
                                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <span className="font-semibold text-xs sm:text-sm tracking-wide uppercase" style={{ color: "var(--t-text)" }}>Long-Term Focus</span>
                        </div>
                    </motion.div>
                </div>

                {/* Right Content: Floating Illustration Card */}
                <motion.div initial={{ opacity: 0, scale: 0.9, rotateY: -10 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ duration: 0.9, delay: 0.3 }}
                    className="relative flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[420px] aspect-square rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex items-center justify-center transform-gpu border"
                        style={{
                            backgroundColor: "var(--t-bg-card)",
                            borderColor: "var(--t-border)",
                            boxShadow: "0 20px 40px -15px var(--t-shadow)"
                        }}>
                        {/* Rotating ring behind icon */}
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-6 rounded-full border border-dashed opacity-30 pointer-events-none"
                            style={{ borderColor: "var(--t-accent)" }} />

                        <motion.div animate={{ y: [-8, 8, -8] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="w-full h-full relative z-10 flex items-center justify-center">
                            <div className="w-[260px] h-[260px] sm:w-[280px] sm:h-[280px] rounded-2xl overflow-hidden border shadow-xl"
                                style={{ borderColor: "var(--t-border)", backgroundColor: "var(--t-bg-surface)" }}>
                                <Illustrations.PropTech className="w-full h-full" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   SECTION 2 — STORY (Asymmetric Layout)
   ──────────────────────────────────────────────────────────── */
function StorySection() {
    return (
        <section className="py-14 sm:py-20 lg:py-28 relative overflow-clip border-b" style={{ borderColor: "var(--t-border)" }}>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] blur-[180px] pointer-events-none rounded-full"
                style={{ backgroundColor: "var(--t-accent)", opacity: "calc(var(--t-orb-opacity) * 0.7)" }} />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">

                    <div className="relative">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}
                            className="relative w-full h-[360px] sm:h-[450px] lg:h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden border shadow-xl"
                            style={{ borderColor: "var(--t-border)" }}>
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                                alt="SVaaN Origin" className="absolute inset-0 w-full h-full object-cover filter grayscale-[15%]" />
                            <div className="absolute inset-0 mix-blend-overlay opacity-50"
                                style={{ background: "linear-gradient(135deg, var(--t-gradient-from), transparent, var(--t-gradient-to))" }} />

                            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-6 left-6 p-4 sm:p-5 rounded-xl border backdrop-blur-md max-w-[240px]"
                                style={{ backgroundColor: "rgba(15, 23, 42, 0.75)", borderColor: "rgba(255, 255, 255, 0.15)" }}>
                                <div className="text-2xl sm:text-3xl font-display font-bold mb-1 text-white">2021</div>
                                <div className="text-white/80 text-xs sm:text-sm leading-snug">Began with one application-support engagement.</div>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-md border text-xs font-semibold tracking-wider uppercase"
                                style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                                Our Origin
                            </div>
                            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4 sm:mb-6" style={{ color: "var(--t-text)" }}>
                                How SVaaN{" "}
                                <span className="italic" style={{ color: "var(--t-accent)" }}>started.</span>
                            </h2>
                            <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                                SVaaN began in 2021, when a US client needed one application supported. We took the job.
                            </p>
                            <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6" style={{ color: "var(--t-text-muted)" }}>
                                The client kept us on, then gave us more to do: first fixes, then new features, and eventually whole products. A few of our later clients found us through people we&apos;d already worked for.
                            </p>
                            <div className="h-px w-full max-w-md my-6 opacity-40" style={{ background: "linear-gradient(90deg, var(--t-accent), transparent)" }} />
                            <p className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed" style={{ color: "var(--t-text)" }}>
                                There wasn&apos;t a big plan behind any of this. We did one job, and people kept asking us back.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   SECTION 3 — WHAT WE LEARNED (Bento / Masonry)
   ──────────────────────────────────────────────────────────── */
const lessons = [
    { num: "01", title: "The quiet decay", desc: "An application with no owner doesn't fail on launch day. It gets a little slower every month until users start complaining, and by then only one person really knows how it works.", colSpan: "md:col-span-2", icon: <Icons3D.ProcessBuild className="w-16 h-16" /> },
    { num: "02", title: "Builder's advantage", desc: "If the support team didn't build the system, they spend their first weeks just learning it, while users wait. A team that knows why something was built a certain way fixes it much faster.", colSpan: "md:col-span-1", icon: <Icons3D.ProcessShape className="w-12 h-12" /> },
    { num: "03", title: "Finding the real problem", desc: "The first thing a client asks for usually isn't the real problem. We tend to find the real one a few weeks in, once we've seen how the system is used day to day.", colSpan: "md:col-span-1", icon: <Icons3D.ProcessDiscover className="w-12 h-12" /> },
    { num: "04", title: "The value of quiet", desc: "Long engagements are mostly quiet. Nobody celebrates a year without an outage, but that quiet is what keeps clients with us.", colSpan: "md:col-span-2", icon: <Icons3D.Support className="w-16 h-16" /> },
];

function LessonsSection() {
    return (
        <section className="py-14 sm:py-20 lg:py-28 relative overflow-clip border-b" style={{ borderColor: "var(--t-border)" }}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-md border text-xs font-semibold tracking-wider uppercase"
                            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--t-accent)" }} />
                            Core Lessons
                        </div>
                        <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-3 sm:mb-4" style={{ color: "var(--t-text)" }}>
                            What long-term clients have{" "}
                            <span className="italic" style={{ color: "var(--t-accent)" }}>taught us.</span>
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg" style={{ color: "var(--t-text-muted)" }}>
                            After a few years of running other people&apos;s live systems, some things have become obvious.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                    {lessons.map((b, i) => (
                        <motion.div key={b.num} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.08 }}
                            className={b.colSpan}>
                            <div className="group relative p-6 sm:p-8 rounded-2xl border h-full flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--t-accent)]"
                                style={{
                                    backgroundColor: "var(--t-bg-card)",
                                    borderColor: "var(--t-border)"
                                }}>
                                <div className="absolute -bottom-6 -right-6 opacity-10 group-hover:opacity-20 transition-all duration-500 pointer-events-none transform group-hover:scale-110">
                                    {b.icon}
                                </div>

                                <div className="relative z-10 mb-6 flex items-center justify-between">
                                    <span className="w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-all duration-300"
                                        style={{
                                            backgroundColor: "var(--t-bg-surface)",
                                            color: "var(--t-accent)",
                                            border: "1px solid var(--t-border)"
                                        }}>
                                        {b.num}
                                    </span>
                                    <span className="text-[11px] font-semibold uppercase tracking-wider opacity-60" style={{ color: "var(--t-text-muted)" }}>
                                        Lesson {b.num}
                                    </span>
                                </div>

                                <div className="relative z-10">
                                    <h3 className="font-display text-xl sm:text-2xl font-bold mb-2.5 transition-colors duration-300 group-hover:text-[var(--t-accent)]" style={{ color: "var(--t-text)" }}>
                                        {b.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm lg:text-base leading-relaxed opacity-75" style={{ color: "var(--t-text-muted)" }}>
                                        {b.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   SECTION 4 — OWNERSHIP AFTER GO-LIVE
   ──────────────────────────────────────────────────────────── */
function OwnershipSection() {
    return (
        <section className="py-14 sm:py-20 lg:py-28 relative overflow-clip border-b"
            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[200px] pointer-events-none"
                style={{ backgroundColor: "var(--t-accent)", opacity: "calc(var(--t-orb-opacity) * 0.7)" }} />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-md border text-xs font-semibold tracking-wider uppercase"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                            The Long Game
                        </div>
                        <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-3 sm:mb-4" style={{ color: "var(--t-text)" }}>
                            Ownership after{" "}
                            <span className="italic" style={{ color: "var(--t-accent)" }}>go-live.</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 relative">
                    
                    {/* Box 1 - Main Philosophy (7 cols) */}
                    <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }} className="md:col-span-7">
                        <div className="h-full p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl border relative overflow-hidden group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--t-accent)]"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>
                            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                                style={{ backgroundColor: "var(--t-accent)" }} />
                            
                            <div className="mb-10 sm:mb-14 relative z-10">
                                <Icons3D.Strategy className="w-16 h-16 sm:w-20 sm:h-20 filter drop-shadow-md group-hover:scale-105 transition-transform duration-500 origin-top-left" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 leading-tight" style={{ color: "var(--t-text)" }}>
                                    We don&apos;t hand a system over at launch and disappear.
                                </h3>
                                <p className="text-sm sm:text-base lg:text-lg leading-relaxed opacity-80" style={{ color: "var(--t-text-muted)" }}>
                                    The team that builds it stays responsible for it. We believe the true test of software isn&apos;t day one, it&apos;s year three.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Box 2 - Day to Day (5 cols) */}
                    <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: 0.1 }} className="md:col-span-5 flex flex-col gap-5 sm:gap-6">
                        <div className="flex-1 p-6 sm:p-8 rounded-2xl border relative overflow-hidden group flex flex-col justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--t-accent)]"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center border"
                                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                </div>
                                <span className="font-bold text-sm sm:text-base tracking-wide uppercase" style={{ color: "var(--t-text)" }}>Continuity</span>
                            </div>
                            <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                                If you want us to run it, we do. If a user reports a bug in month six, it goes to someone who has seen the code.
                            </p>
                        </div>
                        <div className="flex-1 p-6 sm:p-8 rounded-2xl border relative overflow-hidden group flex flex-col justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--t-accent)]"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center border"
                                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                </div>
                                <span className="font-bold text-sm sm:text-base tracking-wide uppercase" style={{ color: "var(--t-text)" }}>Adaptability</span>
                            </div>
                            <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                                If the business changes direction, the same people adjust the software.
                            </p>
                        </div>
                    </motion.div>

                    {/* Box 3 - The Result (12 cols) */}
                    <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay: 0.15 }} className="md:col-span-12">
                        <div className="relative rounded-2xl sm:rounded-3xl border overflow-hidden p-6 sm:p-10 lg:p-12 flex flex-col md:flex-row items-center gap-6 sm:gap-10 group shadow-lg"
                            style={{ backgroundColor: "var(--t-accent)", color: "#fff", borderColor: "transparent" }}>
                            
                            <svg className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:scale-105 transition-transform duration-1000 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" fill="rgba(255,255,255,0.1)" />
                                <path d="M0,70 Q25,50 50,70 T100,70 L100,100 L0,100 Z" fill="rgba(255,255,255,0.05)" />
                            </svg>

                            <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-white/25 flex items-center justify-center shrink-0 shadow-md backdrop-blur-sm"
                                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>

                            <div className="relative z-10 text-center md:text-left">
                                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">The Result</h3>
                                <p className="text-sm sm:text-base lg:text-lg leading-relaxed font-medium opacity-95 max-w-4xl">
                                    That&apos;s more work for us than finishing a project and moving on. We still think it&apos;s the only way the thing is working properly in year three.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   SECTION 5 — FOUR PILLARS (Sticky scroll interaction)
   ──────────────────────────────────────────────────────────── */
const pillars = [
    { title: "Build", desc: "Build new software.", href: "/solutions/build", detail: "From a quick prototype up to a full system." },
    { title: "Modernize", desc: "For old systems.", href: "/solutions/modernize", detail: "For old systems that are slow, expensive or risky to change. We improve them in stages so the business keeps running meanwhile." },
    { title: "Operate", desc: "Operate what is live.", href: "/solutions/operate", detail: "Looking after live applications, infrastructure and the people who use them. It's where SVaaN started." },
    { title: "Evolve", desc: "The work after launch.", href: "/solutions/evolve", detail: "Automating manual steps, adding AI where it helps, and improving the product as the business changes." }
];

function PillarsSection() {
    return (
        <section className="py-14 sm:py-20 lg:py-28 relative overflow-clip border-b" style={{ borderColor: "var(--t-border)" }}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                <div className="flex flex-col lg:flex-row gap-10 sm:gap-14 lg:gap-20">

                    {/* Left Sticky Headers */}
                    <div className="lg:w-1/3">
                        <div className="lg:sticky lg:top-32">
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
                                <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-md border text-xs font-semibold tracking-wider uppercase"
                                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--t-accent)" }} />
                                    Service Architecture
                                </div>
                                <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-3 sm:mb-4" style={{ color: "var(--t-text)" }}>
                                    The four{" "}
                                    <span className="italic" style={{ color: "var(--t-accent)" }}>pillars.</span>
                                </h2>
                                <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6" style={{ color: "var(--t-text-muted)" }}>
                                    We group our work into four areas, which roughly follow the life of a piece of software.
                                </p>
                                <Button href="/work" variant="outline" className="group">
                                    Explore all services
                                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Button>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Scrolling Cards */}
                    <div className="lg:w-2/3 flex flex-col gap-4 sm:gap-5">
                        {pillars.map((pillar, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: idx * 0.08 }}>
                                <Link href={pillar.href} className="block outline-none group">
                                    <div className="p-6 sm:p-8 rounded-2xl border relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--t-accent)]"
                                        style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>
                                        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold"
                                                        style={{ backgroundColor: "var(--t-bg-surface)", color: "var(--t-accent)", border: "1px solid var(--t-border)" }}>
                                                        0{idx + 1}
                                                    </span>
                                                    <h3 className="font-display text-xl sm:text-2xl font-bold transition-colors duration-300 group-hover:text-[var(--t-accent)]" style={{ color: "var(--t-text)" }}>
                                                        {pillar.title}
                                                    </h3>
                                                </div>
                                                <p className="text-sm sm:text-base font-medium mb-1.5" style={{ color: "var(--t-text)" }}>{pillar.desc}</p>
                                                <p className="text-xs sm:text-sm opacity-75 leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{pillar.detail}</p>
                                            </div>
                                            <div className="shrink-0 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl border transition-all duration-300 group-hover:scale-105 group-hover:bg-[var(--t-accent)] group-hover:text-white group-hover:border-[var(--t-accent)]"
                                                style={{ borderColor: "var(--t-border)", color: "var(--t-accent)", backgroundColor: "var(--t-bg-surface)" }}>
                                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   SECTION 6 — WHERE WE WORK
   ──────────────────────────────────────────────────────────── */
function WhereWeWork() {
    const [hoveredLoc, setHoveredLoc] = useState<string | null>(null);

    const locations = [
        {
            id: "chennai",
            name: "Chennai (HQ)",
            country: "India",
            flag: "🇮🇳",
            tag: "Global Headquarters",
            team: "60+ In-House Engineers",
            timezone: "IST (UTC+5:30)",
            coverage: "24/7 Operations",
            focus: "Full-stack development, core system architecture, legacy modernisation & round-the-clock live maintenance.",
            isHQ: true,
            top: "49.13%",
            left: "69.09%",
            tooltipPos: "top" as const
        },
        {
            id: "us",
            name: "United States",
            country: "USA",
            flag: "🇺🇸",
            tag: "Client Hub",
            team: "Dedicated Delivery Pods",
            timezone: "EST / CST / PST",
            coverage: "100% Timezone Overlap",
            focus: "Enterprise cloud software, custom platform builds, and dedicated development teams for US businesses.",
            isHQ: false,
            top: "30.73%",
            left: "20.26%",
            tooltipPos: "bottom" as const
        },
        {
            id: "uk",
            name: "United Kingdom",
            country: "UK",
            flag: "🇬🇧",
            tag: "Client Hub",
            team: "Product & Architecture",
            timezone: "GMT / BST",
            coverage: "Daily Synchronized Standups",
            focus: "SaaS engineering, tech stack migrations, and ongoing application monitoring.",
            isHQ: false,
            top: "21.12%",
            left: "46.6%",
            tooltipPos: "top" as const
        },
        {
            id: "canada",
            name: "Canada",
            country: "Canada",
            flag: "🇨🇦",
            tag: "Client Hub",
            team: "Cloud & QA Pods",
            timezone: "EST / PST",
            coverage: "Extended Business Hours",
            focus: "High-reliability web platforms, quality engineering, and active maintenance contracts.",
            isHQ: false,
            top: "20.1%",
            left: "18.07%",
            tooltipPos: "top" as const
        },
        {
            id: "uae",
            name: "UAE",
            country: "United Arab Emirates",
            flag: "🇦🇪",
            tag: "Client Hub",
            team: "Regional Delivery",
            timezone: "GST (UTC+4)",
            coverage: "Direct Regional Overlap",
            focus: "Fintech, digital transformation, and fast-paced agile development.",
            isHQ: false,
            top: "41.02%",
            left: "62.06%",
            tooltipPos: "bottom" as const
        }
    ];

    return (
        <section className="py-20 lg:py-32 relative overflow-hidden" style={{ borderTop: "1px solid var(--t-border)", backgroundColor: "var(--t-bg-surface)" }}>
            {/* Ambient Background Glows */}
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-20"
                style={{ backgroundColor: "var(--t-accent)" }} />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none opacity-15"
                style={{ backgroundColor: "#1f5eff" }} />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
                    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-4">
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border"
                            style={{ backgroundColor: "var(--t-bg-card)", color: "var(--t-accent)", borderColor: "var(--t-border)" }}>
                            <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: "var(--t-accent)" }} />
                            Global Operations
                        </span>
                    </motion.div>

                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6" style={{ color: "var(--t-text)" }}>
                        Global reach.<br/>
                        <span className="italic" style={{ color: "var(--t-accent)" }}>Local focus.</span>
                    </motion.h2>

                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base sm:text-lg lg:text-xl leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                        Headquartered at <span className="font-semibold" style={{ color: "var(--t-text)" }}>295, 13th St, S. Kolathur, Chennai, Tamil Nadu 600129</span>.
                    </motion.p>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25 }}
                        className="text-sm sm:text-base md:text-lg font-medium leading-relaxed" style={{ color: "var(--t-text)" }}>
                        We work with clients over calls and shared tools, and we set our working hours around when they need us.
                    </motion.p>
                </div>

                {/* Map Display Card */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                    className="relative rounded-2xl sm:rounded-3xl border p-3 sm:p-6 lg:p-10 backdrop-blur-md overflow-hidden transition-all duration-300"
                    style={{
                        backgroundColor: "var(--t-bg-card)",
                        borderColor: "var(--t-border)",
                        boxShadow: "0 25px 50px -12px var(--t-shadow)"
                    }}>
                    
                    {/* Subtle grid texture overlay */}
                    <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                        style={{
                            backgroundImage: 'radial-gradient(var(--t-text) 1px, transparent 1px)',
                            backgroundSize: '24px 24px'
                        }}
                    />

                    {/* Interactive World Map Container */}
                    <div className="relative w-full aspect-[4378/2060] max-w-[1260px] mx-auto select-none">
                        {/* Native SVG Map */}
                        <img
                            src="/svaan-map.svg"
                            alt="SVaaN Global Presence World Map"
                            className="w-full h-full object-contain block drop-shadow-sm transition-transform duration-500"
                            loading="eager"
                            draggable={false}
                        />

                        {/* Interactive Hotspot Overlay */}
                        {locations.map((loc) => {
                            const isHovered = hoveredLoc === loc.id;
                            return (
                                <div
                                    key={loc.id}
                                    className="absolute group z-20"
                                    style={{
                                        top: loc.top,
                                        left: loc.left,
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                    onMouseEnter={() => setHoveredLoc(loc.id)}
                                    onMouseLeave={() => setHoveredLoc(null)}
                                    onClick={() => setHoveredLoc(hoveredLoc === loc.id ? null : loc.id)}
                                >
                                    {/* Hit target area */}
                                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center cursor-pointer">
                                        {/* Animated highlight aura when card or pin is hovered */}
                                        {isHovered && (
                                            <span className="absolute w-8 h-8 sm:w-10 sm:h-10 rounded-full animate-ping opacity-60"
                                                style={{ backgroundColor: loc.isHQ ? "var(--t-accent)" : "#1f5eff" }} />
                                        )}
                                        {isHovered && (
                                            <span className="absolute w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white shadow-[0_0_15px_rgba(31,94,255,0.8)]"
                                                style={{ backgroundColor: loc.isHQ ? "var(--t-accent)" : "#1f5eff" }} />
                                        )}
                                    </div>

                                    {/* Rich Tooltip Card */}
                                    {isHovered && (
                                        <div
                                            className={`absolute z-30 whitespace-nowrap rounded-xl p-3 sm:p-4 border shadow-2xl backdrop-blur-md pointer-events-none transition-all duration-200 ${
                                                loc.tooltipPos === 'top'
                                                    ? 'bottom-full left-1/2 -translate-x-1/2 mb-3'
                                                    : 'top-full left-1/2 -translate-x-1/2 mt-3'
                                            }`}
                                            style={{
                                                backgroundColor: "var(--t-bg)",
                                                borderColor: "var(--t-border)",
                                                color: "var(--t-text)"
                                            }}
                                        >
                                            <div className="flex items-center gap-2 mb-1.5">
                                                <span className="text-base sm:text-lg">{loc.flag}</span>
                                                <span className="font-bold text-sm sm:text-base">{loc.name}</span>
                                                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border"
                                                    style={{
                                                        backgroundColor: loc.isHQ ? "var(--t-accent)" : "var(--t-bg-surface)",
                                                        color: loc.isHQ ? "#fff" : "var(--t-accent)",
                                                        borderColor: "var(--t-border)"
                                                    }}>
                                                    {loc.tag}
                                                </span>
                                            </div>
                                            <div className="text-xs space-y-0.5" style={{ color: "var(--t-text-muted)" }}>
                                                <div className="flex items-center gap-1.5 font-medium" style={{ color: "var(--t-text)" }}>
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                                    {loc.timezone} • {loc.coverage}
                                                </div>
                                                <div className="text-[11px] max-w-[220px] whitespace-normal pt-1" style={{ color: "var(--t-text-muted)" }}>
                                                    {loc.focus}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Bottom Operating Model Summary Pill */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-6 rounded-2xl border"
                    style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div>
                            <div className="font-semibold text-sm sm:text-base" style={{ color: "var(--t-text)" }}>
                                Flexible Overlapping Hours
                            </div>
                            <div className="text-xs sm:text-sm" style={{ color: "var(--t-text-muted)" }}>
                                Synchronized delivery pods tailored for EST, CST, PST, GMT, and GST time zones.
                            </div>
                        </div>
                    </div>
                    <Link href="/contact" className="w-full sm:w-auto shrink-0">
                        <Button variant="outline" size="sm" className="w-full sm:w-auto">
                            Schedule a Call
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   SECTION 7 — CTA
   ──────────────────────────────────────────────────────────── */
function ClosingCTA() {
    return (
        <section className="py-16 sm:py-24 lg:py-28 relative overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[200px] pointer-events-none"
                style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }} />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="text-center">
                    <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4 sm:mb-6" style={{ color: "var(--t-text)" }}>
                        Have a technology problem{" "}
                        <span className="italic" style={{ color: "var(--t-accent)" }}>worth solving?</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                        Tell us what is happening, what you want to achieve, and where you need help.
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <Button href="/contact" size="lg" className="w-full sm:w-auto justify-center group">
                            Discuss your challenge
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                        </Button>
                        <Button href="/leadership" variant="outline" size="lg" className="w-full sm:w-auto justify-center group">
                            Meet the leadership
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   MAIN PAGE
   ──────────────────────────────────────────────────────────── */
export default function AboutPage() {
    return (
        <main className="w-full overflow-x-clip">
            <AboutHero />
            <StorySection />
            <LessonsSection />
            <OwnershipSection />
            <PillarsSection />
            <WhereWeWork />
            <ClosingCTA />
        </main>
    );
}
