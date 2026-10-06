"use client";

import React from "react";
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
        <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden pb-24 pt-12 border-b" style={{ borderColor: "var(--t-border)" }}>
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
                            About SVaaN
                        </span>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-display text-[45px] lg:text-[55px] font-bold leading-tight mb-8" style={{ color: "var(--t-text)" }}>
                        We started with one<span className="italic relative whitespace-nowrap">
                            <span className="relative z-10" style={{ color: "var(--t-accent)" }}> application.</span>
                            <svg className="absolute w-full h-3 -bottom-1 left-0 z-0 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="var(--t-accent)" strokeWidth="4" fill="none" strokeLinecap="round" /></svg>
                        </span>
                    </motion.h1>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-xl leading-relaxed max-w-2xl mb-12 space-y-6" style={{ color: "var(--t-text-muted)" }}>
                        <p>SVaaN Global Tech is a team of 60+ in Chennai. We build software, fix old systems and look after live applications for clients in the US, UAE, UK and Canada. If something in your technology is broken, missing or ownerless, we take it on.</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-wrap items-center gap-6">
                        <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border backdrop-blur-sm" style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>
                            <svg className="w-6 h-6" style={{ color: "var(--t-accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                            <span className="font-semibold text-sm tracking-wide uppercase" style={{ color: "var(--t-text)" }}>Global Reach</span>
                        </div>
                        <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border backdrop-blur-sm" style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>
                            <svg className="w-6 h-6" style={{ color: "var(--t-accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className="font-semibold text-sm tracking-wide uppercase" style={{ color: "var(--t-text)" }}>Long-Term Focus</span>
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

                        <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="w-full h-full relative z-10 flex items-center justify-center filter drop-shadow-2xl">
                            <div className="w-[300px] h-[300px] rounded-3xl overflow-hidden" style={{ border: "1px solid var(--t-border)", boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)" }}>
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
        <section className="py-[120px] relative overflow-hidden" style={{ borderBottom: "1px solid var(--t-border)" }}>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] blur-[150px] opacity-10 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-center">

                    <div className="relative">
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                            className="relative w-full h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                            style={{ border: "1px solid var(--t-border)" }}>
                            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                                alt="SVaaN Origin" className="absolute inset-0 w-full h-full object-cover filter grayscale-[20%]" />
                            <div className="absolute inset-0 mix-blend-overlay opacity-60" style={{ background: "linear-gradient(135deg, var(--t-gradient-from), transparent, var(--t-gradient-to))" }} />

                            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-8 left-8 p-6 rounded-2xl backdrop-blur-md max-w-[250px]"
                                style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                                <div className="text-3xl font-display font-bold mb-2 text-white">2021</div>
                                <div className="text-white/80 text-sm">Began with one application-support engagement.</div>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8" style={{ color: "var(--t-text)" }}>
                                How SVaaN started.
                            </h2>
                            <p className="text-xl leading-relaxed mb-6" style={{ color: "var(--t-text-muted)" }}>
                                SVaaN began in 2021, when a US client needed one application supported. We took the job.
                            </p>
                            <p className="text-xl leading-relaxed mb-6" style={{ color: "var(--t-text-muted)" }}>
                                The client kept us on, then gave us more to do: first fixes, then new features, and eventually whole products. A few of our later clients found us through people we'd already worked for.
                            </p>
                            <div className="h-px w-full max-w-md my-8 opacity-50" style={{ background: "linear-gradient(90deg, var(--t-accent), transparent)" }} />
                            <p className="text-lg font-medium leading-relaxed" style={{ color: "var(--t-text)" }}>
                                There wasn't a big plan behind any of this. We did one job, and people kept asking us back.
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
        <section className="py-[120px] relative">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="text-center mb-20">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                            What long-term clients have <span className="italic" style={{ color: "var(--t-accent)" }}>taught us.</span>
                        </h2>
                        <p className="text-xl" style={{ color: "var(--t-text-muted)" }}>After a few years of running other people's live systems, some things have become obvious.</p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {lessons.map((b, i) => (
                        <motion.div key={b.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={b.colSpan}>
                            <Card hoverEffect className="group relative p-8 md:p-10 rounded-3xl h-full flex flex-col justify-between overflow-hidden">
                                <div className="absolute -bottom-8 -right-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none transform group-hover:scale-110">
                                    {b.icon}
                                </div>

                                <div className="relative z-10 mb-8">
                                    <span className="text-5xl font-display font-bold opacity-20" style={{ color: "var(--t-accent)" }}>{b.num}</span>
                                </div>

                                <div className="relative z-10">
                                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--t-text)" }}>{b.title}</h3>
                                    <p className="text-lg leading-relaxed opacity-90" style={{ color: "var(--t-text-muted)" }}>{b.desc}</p>
                                </div>
                            </Card>
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
        <section className="py-[160px] relative overflow-hidden" style={{ backgroundColor: "var(--t-bg-surface)", borderTop: "1px solid var(--t-border)" }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--t-accent)] rounded-full blur-[250px] opacity-10 pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
                <div className="text-center mb-20">
                    <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="w-16 h-1 rounded-full mx-auto mb-8" style={{ backgroundColor: "var(--t-accent)" }} />
                    <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="uppercase tracking-widest text-sm font-bold mb-4 block" style={{ color: "var(--t-accent)" }}>
                        The Long Game
                    </motion.span>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-display text-5xl md:text-7xl font-bold leading-tight" style={{ color: "var(--t-text)" }}>
                        Ownership after go-live.
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 relative">
                    
                    {/* Box 1 - Main Philosophy (7 cols) */}
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="md:col-span-7">
                        <Card hoverEffect className="h-full p-10 md:p-14 rounded-3xl relative overflow-hidden group flex flex-col justify-between">
                            {/* Animated background element */}
                            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[var(--t-accent)] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-700" />
                            
                            <div className="mb-16 relative z-10">
                                <Icons3D.Strategy className="w-24 h-24 filter drop-shadow-lg group-hover:scale-110 transition-transform duration-500 origin-top-left" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="font-display text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--t-text)" }}>
                                    We don't hand a system over at launch and disappear.
                                </h3>
                                <p className="text-xl leading-relaxed opacity-80" style={{ color: "var(--t-text-muted)" }}>
                                    The team that builds it stays responsible for it. We believe the true test of software isn't day one, it's year three.
                                </p>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Box 2 - Day to Day (5 cols) */}
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="md:col-span-5 flex flex-col gap-6">
                        <Card hoverEffect className="flex-1 p-10 rounded-3xl relative overflow-hidden group flex flex-col justify-center">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[var(--t-bg-surface)] border border-[var(--t-border)]">
                                    <svg className="w-6 h-6 text-[var(--t-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                </div>
                                <span className="font-bold text-lg tracking-wide uppercase" style={{ color: "var(--t-text)" }}>Continuity</span>
                            </div>
                            <p className="text-xl leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                                If you want us to run it, we do. If a user reports a bug in month six, it goes to someone who has seen the code.
                            </p>
                        </Card>
                        <Card hoverEffect className="flex-1 p-10 rounded-3xl relative overflow-hidden group flex flex-col justify-center">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[var(--t-bg-surface)] border border-[var(--t-border)]">
                                    <svg className="w-6 h-6 text-[var(--t-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                </div>
                                <span className="font-bold text-lg tracking-wide uppercase" style={{ color: "var(--t-text)" }}>Adaptability</span>
                            </div>
                            <p className="text-xl leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                                If the business changes direction, the same people adjust the software.
                            </p>
                        </Card>
                    </motion.div>

                    {/* Box 3 - The Result (12 cols) */}
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="md:col-span-12">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 group"
                            style={{ backgroundColor: "var(--t-accent)", color: "#fff" }}>
                            
                            {/* Animated wave background */}
                            <svg className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0,50 Q25,30 50,50 T100,50 L100,100 L0,100 Z" fill="rgba(255,255,255,0.1)" />
                                <path d="M0,70 Q25,50 50,70 T100,70 L100,100 L0,100 Z" fill="rgba(255,255,255,0.05)" />
                            </svg>

                            <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white/20 flex items-center justify-center shrink-0 shadow-lg">
                                <svg className="w-12 h-12 md:w-16 md:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <div className="absolute inset-0 rounded-full border-4 border-white border-t-transparent animate-spin opacity-50" style={{ animationDuration: '3s' }} />
                            </div>

                            <div className="relative z-10 text-center md:text-left">
                                <h3 className="font-display text-3xl md:text-5xl font-bold mb-6">The Result</h3>
                                <p className="text-xl md:text-2xl leading-relaxed font-medium opacity-90 max-w-4xl">
                                    That's more work for us than finishing a project and moving on. We still think it's the only way the thing is working properly in year three.
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
        <section className="py-[120px] relative" style={{ borderTop: "1px solid var(--t-border)" }}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Left Sticky Headers */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-32">
                            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-5xl md:text-6xl font-bold tracking-tight mb-6" style={{ color: "var(--t-text)" }}>
                                The four pillars
                            </motion.h2>
                            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-xl mb-8" style={{ color: "var(--t-text-muted)" }}>
                                We group our work into four areas, which roughly follow the life of a piece of software.
                            </motion.p>
                            <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="w-16 h-1 rounded-full mb-8" style={{ backgroundColor: "var(--t-accent)" }} />

                            {/* <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-lg font-medium" style={{ color: "var(--t-text)" }}>
                                Plenty of clients begin with one area and end up using another. You'd still be dealing with the same team.
                            </motion.p> */}
                        </div>
                    </div>

                    {/* Right Scrolling Cards */}
                    <div className="lg:w-2/3 flex flex-col gap-8">
                        {pillars.map((pillar, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
                                <Link href={pillar.href} className="block outline-none">
                                    <Card variant="interactive" hoverEffect className="group p-10 md:p-12 rounded-3xl relative overflow-hidden transition-all duration-300 hover:-translate-y-1">

                                    {/* Hover gradient overlay */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.02))" }} />

                                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div>
                                            <h3 className="font-display text-3xl font-bold mb-3 group-hover:text-[var(--t-accent)] transition-colors" style={{ color: "var(--t-text)" }}>{pillar.title}</h3>
                                            <p className="text-xl font-medium mb-3" style={{ color: "var(--t-text)" }}>{pillar.desc}</p>
                                            <p className="text-lg opacity-80" style={{ color: "var(--t-text-muted)" }}>{pillar.detail}</p>
                                        </div>
                                        <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full border border-dashed transition-all group-hover:rotate-45"
                                            style={{ borderColor: "var(--t-accent)", color: "var(--t-accent)" }}>
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </div>
                                    </div>
                                    </Card>
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
    const locations = [
        { name: "Canada", top: "25%", left: "26%", isHQ: false, labelPos: "top" },
        { name: "United States", top: "29%", left: "25.5%", isHQ: false, labelPos: "bottom" },
        { name: "United Kingdom", top: "21%", left: "46%", isHQ: false, labelPos: "left" },
        { name: "UAE", top: "33%", left: "58.5%", isHQ: false, labelPos: "left" },
        { name: "Chennai (HQ)", top: "44.5%", left: "61.5%", isHQ: true, labelPos: "bottom" }
    ];

    return (
        <section className="py-[160px] relative overflow-hidden" style={{ borderTop: "1px solid var(--t-border)", backgroundColor: "var(--t-bg-surface)" }}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-8" style={{ color: "var(--t-text)" }}>
                        Global reach.<br/>
                        <span className="italic" style={{ color: "var(--t-accent)" }}>Local focus.</span>
                    </h2>
                    <p className="text-xl leading-relaxed mb-4 max-w-2xl mx-auto" style={{ color: "var(--t-text-muted)" }}>
                        Our office is at 295, 13th St, S. Kolathur, Chennai, Tamil Nadu 600129.
                    </p>
                    <p className="text-lg font-medium leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--t-text)" }}>
                        We work with clients over calls and shared tools, and we set our hours around when they need us.
                    </p>
                </div>

                {/* Map Container */}
                <div className="relative w-full aspect-[2/1] max-w-[1200px] mx-auto mt-16 lg:mt-24">
                    {/* SVG Map Background Mask */}
                    <div className="absolute inset-0 bg-[var(--t-text)] pointer-events-none transition-colors duration-300" 
                        style={{
                            WebkitMaskImage: 'url("/svaan-map.svg")',
                            WebkitMaskSize: 'contain',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                            maskImage: 'url("/svaan-map.svg")',
                            maskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            opacity: 0.15
                        }}
                    />

                    {/* Markers */}
                    {locations.map((loc, i) => (
                        <motion.div key={loc.name} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                            className="absolute z-20"
                            style={{ top: loc.top, left: loc.left, transform: 'translate(-50%, -50%)' }}>
                            
                            {/* Marker Dot */}
                            <div className="relative flex items-center justify-center z-10">
                                {loc.isHQ ? (
                                    <div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: "#0066ff" }} />
                                ) : (
                                    <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center shadow-[0_0_12px_rgba(0,102,255,0.5)]">
                                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#0066ff" }} />
                                    </div>
                                )}
                            </div>

                            {/* Text Label */}
                            <div className={`absolute whitespace-nowrap font-medium text-[15px] pointer-events-none ${
                                loc.labelPos === 'top' ? 'bottom-full left-1/2 -translate-x-1/2 mb-1.5' :
                                loc.labelPos === 'bottom' ? 'top-full left-1/2 -translate-x-1/2 mt-1.5' :
                                loc.labelPos === 'left' ? 'right-full top-1/2 -translate-y-1/2 mr-2' :
                                'left-full top-1/2 -translate-y-1/2 ml-2'
                            }`} style={{ color: "var(--t-text)" }}>
                                {loc.name}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   SECTION 7 — CTA
   ──────────────────────────────────────────────────────────── */
function ClosingCTA() {
    return (
        <section className="py-[120px] relative overflow-hidden" style={{ borderTop: "1px solid var(--t-border)" }}>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[200px] pointer-events-none"
                style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }} />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="text-center">
                    <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8" style={{ color: "var(--t-text)" }}>
                        Talk to us.
                    </h2>
                    <p className="text-lg md:text-xl max-w-lg mx-auto mb-12" style={{ color: "var(--t-text-muted)" }}>
                        Want to meet the people you'd be working with? Or just tell us what you need. If we're not the right fit, we'll say so.
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <Button href="/leadership" variant="primary" size="lg">
                            Meet the leadership
                        </Button>
                        <Button href="/contact" variant="outline" size="lg">
                            Discuss your challenge
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
export default function AboutV2() {
    return (
        <main className="w-full pt-[80px]">
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
