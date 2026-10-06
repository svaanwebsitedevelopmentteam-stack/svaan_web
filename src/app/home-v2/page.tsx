"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Icons3D } from "@/components/ui/Icons3D";
import { TechStack } from "@/components/TechStack";

/* ────────────────────────────────────────────────────────────
   SECTION 1 — Hero  (cloned from HeroSection.tsx, new copy)
   ──────────────────────────────────────────────────────────── */

function HeroV2() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

    const springX2 = useSpring(mouseX, { stiffness: 20, damping: 30 });
    const springY2 = useSpring(mouseY, { stiffness: 20, damping: 30 });

    useEffect(() => {
        mouseX.set(typeof window !== 'undefined' ? window.innerWidth / 2 : 500);
        mouseY.set(typeof window !== 'undefined' ? window.innerHeight / 2 : 500);
    }, [mouseX, mouseY]);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    return (
        <section onMouseMove={handleMouseMove} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
            {/* Interactive Background — identical to current site */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <motion.div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px]"
                    style={{ backgroundColor: "var(--t-accent)", opacity: "calc(var(--t-orb-opacity) + 0.1)", x: springX, y: springY, translateX: "-50%", translateY: "-50%" }} />
                <motion.div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[150px]"
                    style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)", x: springX2, y: springY2, translateX: "-30%", translateY: "-30%" }} />
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] opacity-20 blur-[120px] rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
            </div>

            <div className="w-full px-[40px] pt-[70px] pb-[60px] relative z-10 grid grid-cols-1 lg:grid-cols-[6fr_4fr] gap-12 lg:gap-8 items-center">
                {/* Left Content */}
                <div className="text-left flex flex-col items-start pt-6 lg:pt-0">
                    {/* <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-8">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                            style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-text-muted)" }}>
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            Available for new projects
                        </span>
                    </motion.div> */}

                    <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
                        className="font-display text-[40px] lg:text-[60px] font-bold leading-[1.1] tracking-tight mb-6"
                        style={{ color: "var(--t-text)" }}>
                        Build. Modernize.<br />
                        Operate.{" "}
                        <span className="italic" style={{ color: "var(--t-accent)" }}>Evolve.</span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
                        className="text-lg md:text-xl max-w-lg leading-relaxed mb-12"
                        style={{ color: "var(--t-text-muted)" }}>
                        SVaaN helps businesses build new software, modernize existing systems, operate critical technology and continuously improve the way technology supports their business.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="flex flex-wrap items-center gap-4">
                        <Link href="/contact" className="group inline-flex items-center gap-3 h-14 px-8 rounded-full font-semibold text-base transition-all duration-300 shadow-xl"
                            style={{ backgroundColor: "var(--t-btn-bg)", color: "var(--t-btn-text)" }}
                            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--t-accent)"; e.currentTarget.style.color = "#fff"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--t-btn-bg)"; e.currentTarget.style.color = "var(--t-btn-text)"; }}>
                            Discuss your technology challenge
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                        </Link>
                        <Link href="/work" className="inline-flex items-center gap-2 h-14 px-8 rounded-full font-medium text-base transition-all duration-300"
                            style={{ border: "1px solid var(--t-border)", color: "var(--t-text)" }}
                            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--t-bg-surface)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}>
                            See client stories
                        </Link>
                    </motion.div>
                </div>

                {/* Right Image */}
                <motion.div initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 0.2 }} className="relative w-full h-[350px] md:h-[500px] lg:h-[600px] mt-10 lg:mt-0">
                    <Image src="/herosection.png" alt="SVaaN Hero" fill className="object-contain lg:object-right object-center" priority />
                </motion.div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   SECTION 2 — Trust Strip (cloned from StatsSection pattern)
   ──────────────────────────────────────────────────────────── */

interface CounterProps { end: number; suffix?: string; label: string; }

function Counter({ end, suffix = "", label }: CounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const duration = 2000;
                    const startTime = Date.now();
                    const tick = () => {
                        const elapsed = Date.now() - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * end));
                        if (progress < 1) requestAnimationFrame(tick);
                    };
                    requestAnimationFrame(tick);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end]);

    return (
        <div ref={ref} className="text-center">
            <div className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-3" style={{ color: "var(--t-text)" }}>
                {count}<span style={{ color: "var(--t-accent)" }}>{suffix}</span>
            </div>
            <div className="text-sm md:text-base" style={{ color: "var(--t-text-muted)" }}>{label}</div>
        </div>
    );
}

function TrustStrip() {
    return (
        <section className="py-[60px]" style={{ borderTop: "1px solid var(--t-border)", borderBottom: "1px solid var(--t-border)" }}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    <Counter end={2021} suffix="" label="Founded" />
                    <Counter end={60} suffix="+" label="Team members" />
                    <Counter end={4} suffix="" label="Countries with active clients" />
                </motion.div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   SECTION 3 — Problem Framing  (cloned from CapabilitiesGrid pattern)
   ──────────────────────────────────────────────────────────── */

const problems = [
    {
        title: "You have a product to build.",
        desc: "You know what the business needs. You need a team that can turn it into working software.",
        icon: <Icons3D.Software className="w-16 h-16" />,
        videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-keyboard-of-a-hacker-with-green-lines-of-code-41006-large.mp4"
    },
    {
        title: "You have a system that is hard to change.",
        desc: "It is slow, costly to run or risky to touch. It needs to be improved or replaced.",
        icon: <Icons3D.Cloud className="w-16 h-16" />,
        videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-connection-lines-20358-large.mp4"
    },
    {
        title: "You have live applications that need looking after.",
        desc: "Someone has to own the fixes, the updates and the users who depend on them.",
        icon: <Icons3D.Support className="w-16 h-16" />,
        videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-spinning-radar-screen-animation-32824-large.mp4"
    },
    {
        title: "You have work that should be automated.",
        desc: "Your people repeat manual steps that technology could handle.",
        icon: <Icons3D.AI className="w-16 h-16" />,
        videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-sphere-with-lines-and-dots-31139-large.mp4"
    }
];

function ProblemFraming() {
    return (
        <section className="py-[120px]" style={{ borderTop: "1px solid var(--t-border)", borderBottom: "1px solid var(--t-border)" }}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
                    <div>
                        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border text-sm font-semibold tracking-widest uppercase relative z-10"
                            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-text-muted)" }}>
                            The Reality
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 relative z-10 tracking-tight" style={{ color: "var(--t-text)" }}>
                            Technology should help the business{" "}
                            <span className="italic" style={{ color: "var(--t-accent)" }}>move faster.</span>
                        </h2>
                        <p className="text-lg leading-relaxed max-w-lg" style={{ color: "var(--t-text-muted)" }}>
                            Most of the businesses we talk to are in one of these four situations.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {problems.map((p, idx) => (
                        <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, delay: idx * 0.1 }}
                            className="group rounded-[1.5rem] p-8 relative overflow-hidden flex flex-col transition-all duration-500"
                            style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--t-accent)"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--t-border)"; }}>

                            {/* Ambient video texture */}
                            <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-[0.15] mix-blend-luminosity pointer-events-none overflow-hidden transition-opacity duration-700">
                                <video autoPlay muted loop playsInline className="w-full h-full object-cover scale-[1.05] group-hover:scale-110 transition-transform duration-[3s]">
                                    <source src={p.videoSrc} type="video/mp4" />
                                </video>
                            </div>
                            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                style={{ background: "linear-gradient(135deg, var(--t-gradient-from), transparent)" }} />

                            <div className="relative z-20">
                                <motion.div className="w-[70px] h-[70px] rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:-translate-y-1 shadow-sm"
                                    style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-accent)" }}>
                                    {p.icon}
                                </motion.div>
                            </div>
                            <div className="relative z-20 flex flex-col flex-grow">
                                <h3 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>{p.title}</h3>
                                <p className="leading-relaxed opacity-90" style={{ color: "var(--t-text-muted)" }}>{p.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   SECTION 4 — Four Solution Pillars (cloned from WorkShowcase pattern)
   ──────────────────────────────────────────────────────────── */

import { Illustrations } from "@/components/ui/Illustrations";

const pillars = [
    {
        title: "Build what the business needs next.",
        tags: "Custom Software, MVP, Product Engineering",
        desc: "From proof of concept and MVP to enterprise software and AI-enabled products.",
        href: "/solutions/build",
        btnLabel: "Explore Build",
        Illustration: Illustrations.FinTech,
        gradient: "from-indigo-600/60 to-blue-900/60",
    },
    {
        title: "Modernize what is holding the business back.",
        tags: "Legacy Systems, Cloud Migration, Architecture",
        desc: "Improve legacy systems, architecture, integrations and cloud foundations.",
        href: "/solutions/modernize",
        btnLabel: "Explore Modernize",
        Illustration: Illustrations.Healthcare,
        gradient: "from-emerald-600/60 to-teal-900/60",
    },
    {
        title: "Keep critical technology running.",
        tags: "App Support, Infrastructure, DevOps",
        desc: "Application, production, infrastructure, helpdesk, cloud and DevOps support.",
        href: "/solutions/operate",
        btnLabel: "Explore Operate",
        Illustration: Illustrations.PropTech,
        gradient: "from-orange-500/60 to-amber-800/60",
    },
    {
        title: "Keep improving after launch.",
        tags: "AI, Automation, Optimization",
        desc: "Automation, AI, optimization and steady product improvement.",
        href: "/solutions/evolve",
        btnLabel: "Explore Evolve",
        Illustration: Illustrations.Ecommerce,
        gradient: "from-pink-600/60 to-rose-900/60",
    }
];

function SolutionPillarsSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const container = e.currentTarget;
        let closestIndex = 0;
        let minDistance = Infinity;

        Array.from(container.children).forEach((child, index) => {
            if (index >= pillars.length) return;
            const childNode = child as HTMLElement;
            const distance = Math.abs(childNode.offsetLeft - container.scrollLeft - container.offsetLeft);
            if (distance < minDistance) {
                minDistance = distance;
                closestIndex = index;
            }
        });
        setActiveIndex(closestIndex);
    };

    return (
        <section className="py-[120px]">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border text-sm font-semibold tracking-widest uppercase"
                            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-text-muted)" }}>
                            Our Solutions
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight" style={{ color: "var(--t-text)" }}>
                            Four ways we work with<br />your{" "}
                            <span className="italic" style={{ color: "var(--t-accent)" }}>technology.</span>
                        </h2>
                    </motion.div>
                    <Link href="/solutions" className="group inline-flex items-center gap-3 font-semibold hover:gap-4 transition-all duration-300" style={{ color: "var(--t-accent)" }}>
                        See all solutions
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                </div>
            </div>

            {/* Scrollable cards */}
            <div ref={scrollRef} onScroll={handleScroll} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 lg:px-10 pb-4" style={{ scrollPaddingLeft: "24px" }}>
                {pillars.map((pillar, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: idx * 0.1 }}
                        className="flex-none w-[85vw] md:w-[45vw] lg:w-[31vw] snap-start">
                        <Link href={pillar.href} className="group flex flex-col h-full rounded-[2rem] overflow-hidden transition-all duration-500" style={{ border: "1px solid var(--t-border)" }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--t-accent)"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--t-border)"; }}>
                            {/* Illustration area */}
                            <div className={`relative h-[250px] md:h-[300px] bg-gradient-to-br ${pillar.gradient} overflow-hidden`}>
                                <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
                                    <pillar.Illustration className="w-full h-full" />
                                </div>
                            </div>
                            {/* Content area */}
                            <div className="p-8 md:p-10 flex flex-col flex-grow" style={{ backgroundColor: "var(--t-bg-card)" }}>
                                <div className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--t-accent)" }}>{pillar.tags}</div>
                                <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-[var(--t-accent)] transition-colors" style={{ color: "var(--t-text)" }}>{pillar.title}</h3>
                                <p className="leading-relaxed mb-8 flex-grow" style={{ color: "var(--t-text-muted)" }}>{pillar.desc}</p>
                                <span className="inline-flex items-center gap-2 font-semibold text-sm transition-all group-hover:gap-3" style={{ color: "var(--t-accent)" }}>
                                    {pillar.btnLabel}
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-8">
                {pillars.map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full transition-all duration-300"
                        style={{ backgroundColor: i === activeIndex ? "var(--t-accent)" : "var(--t-border)", transform: i === activeIndex ? "scale(1.5)" : "scale(1)" }} />
                ))}
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   SECTION 5 — Why SVaaN (cloned from ProcessSection pattern)
   ──────────────────────────────────────────────────────────── */

const reasons = [
    { num: "01", title: "We stay accountable beyond go-live.", desc: "We keep supporting and improving what we build.", icon: <Icons3D.ProcessBuild className="w-10 h-10" /> },
    { num: "02", title: "We work from the business problem.", desc: "We ask why before we decide what to build.", icon: <Icons3D.ProcessDiscover className="w-10 h-10" /> },
    { num: "03", title: "One partner from build to operation.", desc: "You do not need a new vendor at every stage.", icon: <Icons3D.ProcessShape className="w-10 h-10" /> },
    { num: "04", title: "Long-term relationships matter.", desc: "We measure ourselves by how the technology performs a year later.", icon: <Icons3D.ProcessPrototype className="w-10 h-10" /> },
    { num: "05", title: "Engineering depth, business-first view.", desc: "Our leadership looks at the whole business, not only the code.", icon: <Icons3D.Strategy className="w-10 h-10" /> },
];

function WhySvaaNSection() {
    return (
        <section className="py-[60px] relative overflow-clip">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none"
                style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }} />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    <div className="lg:sticky lg:top-32 lg:h-max">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
                            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: "var(--t-text)" }}>
                                Why businesses choose{" "}
                                <span className="italic" style={{ color: "var(--t-accent)" }}>SVaaN.</span>
                            </h2>
                            <p className="text-lg leading-relaxed mb-10 max-w-lg" style={{ color: "var(--t-text-muted)" }}>
                                We don&apos;t just deliver a project and walk away. We stay involved, because software that works today needs to keep working tomorrow.
                            </p>
                            <Link href="/why-svaan" className="group inline-flex items-center gap-3 h-13 px-8 rounded-full font-medium transition-all duration-300"
                                style={{ border: "1px solid var(--t-border)", backgroundColor: "var(--t-bg-surface)", color: "var(--t-text)" }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--t-accent)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--t-border)"; }}>
                                Why SVaaN
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </Link>
                        </motion.div>
                    </div>

                    <div className="flex flex-col gap-6">
                        {reasons.map((r, i) => (
                            <motion.div key={r.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group rounded-2xl p-8 transition-all duration-500 cursor-default"
                                style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}
                                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--t-accent)"; }}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--t-border)"; }}>
                                <div className="flex items-start justify-between mb-6">
                                    <h3 className="font-display text-xl md:text-2xl font-bold group-hover:text-[var(--t-accent)] transition-colors" style={{ color: "var(--t-text)" }}>{r.title}</h3>
                                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl transition-colors duration-500" style={{ backgroundColor: "var(--t-bg-surface)", color: "var(--t-accent)" }}>
                                        {r.icon}
                                    </div>
                                </div>
                                <p className="leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{r.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   SECTION 6 — How We Work (cloned from ProcessSection pattern)
   ──────────────────────────────────────────────────────────── */

const steps = [
    { num: "01", title: "Understand", desc: "Understand the problem, the users and the current state.", icon: <Icons3D.ProcessDiscover className="w-10 h-10" /> },
    { num: "02", title: "Decide", desc: "Decide the right direction before committing.", icon: <Icons3D.ProcessShape className="w-10 h-10" /> },
    { num: "03", title: "Build", desc: "Build the solution.", icon: <Icons3D.ProcessPrototype className="w-10 h-10" /> },
    { num: "04", title: "Run", desc: "Run it so it stays stable.", icon: <Icons3D.ProcessBuild className="w-10 h-10" /> },
    { num: "05", title: "Improve", desc: "Improve it as the business changes.", icon: <Icons3D.Strategy className="w-10 h-10" /> },
];

function HowWeWork() {
    return (
        <section className="py-[60px] relative overflow-clip" style={{ borderTop: "1px solid var(--t-border)", borderBottom: "1px solid var(--t-border)" }}>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[200px] pointer-events-none"
                style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }} />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    <div className="lg:sticky lg:top-32 lg:h-max">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
                            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: "var(--t-text)" }}>
                                One simple way of{" "}
                                <span className="italic" style={{ color: "var(--t-accent)" }}>working.</span>
                            </h2>
                            <p className="text-lg leading-relaxed mb-10 max-w-lg" style={{ color: "var(--t-text-muted)" }}>
                                Every engagement follows these five stages. The depth varies, the discipline doesn&apos;t.
                            </p>
                            <Link href="/approach" className="group inline-flex items-center gap-3 h-13 px-8 rounded-full font-medium transition-all duration-300"
                                style={{ border: "1px solid var(--t-border)", backgroundColor: "var(--t-bg-surface)", color: "var(--t-text)" }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--t-accent)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--t-border)"; }}>
                                See our approach
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </Link>
                        </motion.div>
                    </div>

                    <div className="flex flex-col gap-6">
                        {steps.map((step, i) => (
                            <motion.div key={step.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group rounded-2xl p-8 transition-all duration-500 cursor-default"
                                style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}
                                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--t-accent)"; }}
                                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--t-border)"; }}>
                                <div className="flex items-start justify-between mb-6">
                                    <h3 className="font-display text-xl md:text-2xl font-bold group-hover:text-[var(--t-accent)] transition-colors" style={{ color: "var(--t-text)" }}>{step.title}</h3>
                                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl transition-colors duration-500" style={{ backgroundColor: "var(--t-bg-surface)", color: "var(--t-accent)" }}>
                                        {step.icon}
                                    </div>
                                </div>
                                <p className="leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   SECTION 7 — Leadership  (cloned from AboutSection pattern)
   ──────────────────────────────────────────────────────────── */

function LeadershipPreview() {
    return (
        <section id="leadership" className="py-[60px] relative overflow-hidden">
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] h-[500px] rounded-full blur-[200px] pointer-events-none"
                style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }} />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
                    {/* Left — Image with floating card */}
                    <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="relative flex flex-col justify-center">
                        <div className="relative w-full h-full min-h-[350px] lg:min-h-full rounded-3xl overflow-hidden"
                            style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}>
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                                alt="SVaaN leadership team" className="absolute inset-0 w-full h-full object-cover filter grayscale-[10%]" />
                            <div className="absolute inset-0 mix-blend-overlay opacity-60" style={{ background: "linear-gradient(135deg, var(--t-gradient-from), transparent, var(--t-gradient-to))" }} />
                        </div>
                        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -right-4 md:right-8 rounded-2xl px-6 py-4 shadow-2xl"
                            style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}>
                            <div className="font-display font-bold text-2xl" style={{ color: "var(--t-accent)" }}>Since 2021</div>
                            <div className="text-xs" style={{ color: "var(--t-text-muted)" }}>Building technology that works</div>
                        </motion.div>
                    </motion.div>

                    {/* Right — Text */}
                    <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.15 }} className="flex flex-col justify-center py-4 lg:py-8">
                        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8" style={{ color: "var(--t-text)" }}>The people behind SVaaN.</h2>
                        <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--t-text-muted)" }}>
                            SVaaN was founded in 2021 by Dinesh Natarajan and Sai Ramamurthy. Both come from engineering and consulting backgrounds with over a decade of delivery experience across sectors.
                        </p>
                        <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--t-text-muted)" }}>
                            They started SVaaN because they saw too many technology projects that delivered code but missed the point. The company was built around a simple principle: understand the business problem first, then build the right technology.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-10">
                            {["Dinesh Natarajan — Founder", "Sai Ramamurthy — CEO"].map((person) => (
                                <div key={person} className="flex items-center gap-3 text-sm" style={{ color: "var(--t-text-secondary)" }}>
                                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--t-accent)" }} />
                                    {person}
                                </div>
                            ))}
                        </div>

                        <Link href="/leadership" className="group inline-flex items-center gap-3 font-semibold hover:gap-4 transition-all duration-300" style={{ color: "var(--t-accent)" }}>
                            Meet the leadership
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   SECTION 8 — Final CTA  (cloned from CTASection)
   ──────────────────────────────────────────────────────────── */

function ClosingCTA() {
    return (
        <section className="py-[60px] relative overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[200px] pointer-events-none"
                style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }} />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="text-center">
                    <h2 className="font-display text-5xl md:text-6xl lg:text-8xl font-bold leading-tight mb-8" style={{ color: "var(--t-text)" }}>
                        Have a technology problem{" "}
                        <span className="italic" style={{ color: "var(--t-accent)" }}>worth solving?</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-lg mx-auto mb-12" style={{ color: "var(--t-text-muted)" }}>
                        Tell us what is happening, what you want to achieve, and where you need help.
                    </p>
                    <Link href="/contact" className="group inline-flex items-center gap-3 h-16 px-12 rounded-full font-bold text-lg transition-all duration-300 shadow-2xl"
                        style={{ backgroundColor: "var(--t-btn-bg)", color: "var(--t-btn-text)" }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--t-accent)"; e.currentTarget.style.color = "#fff"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--t-btn-bg)"; e.currentTarget.style.color = "var(--t-btn-text)"; }}>
                        Discuss your challenge
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   HOME V2 — Full Page Assembly
   ──────────────────────────────────────────────────────────── */

export default function HomeV2() {
    return (
        <main className="w-full overflow-x-clip">
            <HeroV2 />
            <TrustStrip />
            <ProblemFraming />
            <SolutionPillarsSection />
            <WhySvaaNSection />
            <HowWeWork />
            <TechStack />
            <LeadershipPreview />
            <ClosingCTA />
        </main>
    );
}
