"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Icons3D } from "@/components/ui/Icons3D";
import { allProjectsList } from "@/data/projectsData";

/* ────────────────────────────────────────────────────────────
   HERO STATS COUNTER
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
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [end]);

    return (
        <div ref={ref} className="text-center px-1 sm:px-4">
            <div className="font-display text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-1 sm:mb-2" style={{ color: "var(--t-text)" }}>
                {count}<span style={{ color: "var(--t-accent)" }}>{suffix}</span>
            </div>
            <div className="text-[10px] sm:text-xs md:text-sm font-medium tracking-wide uppercase opacity-75 leading-tight" style={{ color: "var(--t-text-muted)" }}>
                {label}
            </div>
        </div>
    );
}

/* ────────────────────────────────────────────────────────────
   SECTION 1 - Hero with Integrated Trust Stats
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
        <section onMouseMove={handleMouseMove} className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden">
            {/* Interactive Background - GPU accelerated radial gradients */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <motion.div className="absolute top-0 left-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full pointer-events-none"
                    style={{
                        background: "radial-gradient(circle, var(--t-accent) 0%, transparent 70%)",
                        opacity: "calc(var(--t-orb-opacity) + 0.1)",
                        x: springX,
                        y: springY,
                        translateX: "-50%",
                        translateY: "-50%",
                        transform: "translateZ(0)",
                        willChange: "transform",
                    }} />
                <motion.div className="absolute top-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full pointer-events-none"
                    style={{
                        background: "radial-gradient(circle, var(--t-accent) 0%, transparent 70%)",
                        opacity: "var(--t-orb-opacity)",
                        x: springX2,
                        y: springY2,
                        translateX: "-30%",
                        translateY: "-30%",
                        transform: "translateZ(0)",
                        willChange: "transform",
                    }} />
                <div className="absolute top-[-10%] right-[-10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] opacity-20 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, var(--t-accent) 0%, transparent 70%)" }} />
            </div>

            {/* Main Content Grid */}
            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-[90px] sm:pt-[110px] lg:pt-[120px] pb-6 sm:pb-8 relative z-10 grid grid-cols-1 lg:grid-cols-[6fr_4fr] gap-8 sm:gap-10 lg:gap-8 items-center flex-grow">
                {/* Left Content */}
                <div className="text-left flex flex-col items-start pt-2 sm:pt-4 lg:pt-0">
                    <div className="flex items-center gap-3 mb-5 sm:mb-8">
                        <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-[var(--t-radius-md)] text-xs sm:text-sm font-medium"
                            style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-text-muted)" }}>
                            <span className="w-2 h-2 rounded-[var(--t-radius-md)] bg-emerald-400 animate-pulse" />
                            Available for new projects
                        </span>
                    </div>

                    <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12] mb-4 sm:mb-6"
                        style={{ color: "var(--t-text)" }}>
                        Build. Modernize.<br />
                        Operate.{" "}
                        <span className="italic" style={{ color: "var(--t-accent)" }}>Evolve.</span>
                    </h1>

                    <p className="text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 max-w-xl leading-relaxed"
                        style={{ color: "var(--t-text-muted)" }}>
                        SVaaN helps businesses build new software, modernize existing systems, operate critical technology and continuously improve the way technology supports their business.
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                        <Button href="/contact" size="lg" className="w-full sm:w-auto justify-center group">
                            Discuss your technology challenge
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                        </Button>
                        <Button href="/work" variant="outline" size="lg" className="w-full sm:w-auto justify-center">
                            See client stories
                        </Button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative w-full h-[240px] sm:h-[380px] md:h-[460px] lg:h-[540px] mt-2 sm:mt-6 lg:mt-0">
                    <Image
                        src="/herosection.webp"
                        alt="SVaaN Hero"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                        className="object-contain lg:object-right object-center"
                        priority
                        fetchPriority="high"
                    />
                </div>
            </div>

            {/* Merged Trust Stats Strip at Bottom of Hero */}
            <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-6 sm:pb-8 pt-2 relative z-10">
                <div className="pt-6 sm:pt-8 grid grid-cols-3 gap-2 sm:gap-6 divide-x divide-[var(--t-border)]"
                    style={{ borderTop: "1px solid var(--t-border)" }}>
                    <div className="first:pl-0">
                        <Counter end={2021} suffix="" label="Founded" />
                    </div>
                    <div>
                        <Counter end={60} suffix="+" label="Team members" />
                    </div>
                    <div className="last:pr-0">
                        <Counter end={4} suffix="" label="Countries active" />
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   SECTION 3 - Problem Framing  (cloned from CapabilitiesGrid pattern)
   ──────────────────────────────────────────────────────────── */

const problems = [
    {
        label: "Build",
        badge: "New Product Development",
        title: "You have a product to build.",
        desc: "You know what the business needs. You need a team that can turn it into working software - from MVP to enterprise-grade product.",
        icon: <Icons3D.Software className="w-10 h-10 md:w-12 md:h-12" />,
        accent: "#6366f1",
        href: "/solutions/build"
    },
    {
        label: "Modernize",
        badge: "Legacy & Cloud Migration",
        title: "You have a system that is hard to change.",
        desc: "It is slow, costly to run or risky to touch. Legacy architecture is holding the business back from moving quickly.",
        icon: <Icons3D.Cloud className="w-10 h-10 md:w-12 md:h-12" />,
        accent: "#06b6d4",
        href: "/solutions/modernize"
    },
    {
        label: "Operate",
        badge: "Live Applications & Support",
        title: "You have live applications that need looking after.",
        desc: "Someone has to own the fixes, the updates, and the users who depend on them - day after day.",
        icon: <Icons3D.Support className="w-10 h-10 md:w-12 md:h-12" />,
        accent: "#f59e0b",
        href: "/solutions/operate"
    },
    {
        label: "Evolve",
        badge: "Automation & Continuous AI",
        title: "You have work that should be automated.",
        desc: "Your people repeat manual steps that technology could handle - costing time, money and focus.",
        icon: <Icons3D.AI className="w-10 h-10 md:w-12 md:h-12" />,
        accent: "#ec4899",
        href: "/solutions/evolve"
    }
];

function ProblemFraming() {
    const [active, setActive] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const isPausedRef = useRef(false);
    const progressRef = useRef(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startAutoPlay = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        progressRef.current = 0;
        setProgress(0);
        const tick = 50; // ms
        const duration = 6000; // 6s per slide
        intervalRef.current = setInterval(() => {
            if (isPausedRef.current) return;

            progressRef.current += (tick / duration) * 100;
            if (progressRef.current >= 100) {
                progressRef.current = 0;
                setProgress(0);
                setActive(prev => (prev + 1) % problems.length);
            } else {
                setProgress(progressRef.current);
            }
        }, tick);
    }, []);

    useEffect(() => {
        startAutoPlay();
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, [startAutoPlay]);

    const selectTab = (i: number) => {
        setActive(i);
        startAutoPlay();
    };

    const handleMouseEnterCard = () => {
        isPausedRef.current = true;
        setIsPaused(true);
    };

    const handleMouseLeaveCard = () => {
        isPausedRef.current = false;
        setIsPaused(false);
    };

    return (
        <section className="py-14 sm:py-20 lg:py-24 relative overflow-hidden" style={{ backgroundColor: "var(--t-bg-surface)", borderTop: "1px solid var(--t-border)", borderBottom: "1px solid var(--t-border)" }}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

                {/* Section Header */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6 sm:mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-2.5 sm:mb-3 rounded-md border text-xs font-semibold tracking-wider uppercase"
                        style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                        The Reality
                    </div>
                    <h2 className="font-display w-full lg:max-w-[80%] text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug" style={{ color: "var(--t-text)" }}>
                        Technology should help the business{" "}
                        <span className="italic" style={{ color: "var(--t-accent)" }}>move faster.</span>
                    </h2>
                </motion.div>

                {/* 2-Column Side-by-Side: Tabs Left (30%), Content Right (70%) */}
                <div className="grid grid-cols-1 lg:grid-cols-[3fr_7fr] gap-4 sm:gap-6 lg:gap-8 items-stretch">
                    {/* Left Column: Vertical Tabs (30%) */}
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-3">
                        {problems.map((p, i) => {
                            const isSelected = active === i;
                            return (
                                <button key={i} onClick={() => selectTab(i)}
                                    className="relative text-left p-2.5 sm:p-4 rounded-xl transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col justify-between"
                                    style={{
                                        backgroundColor: isSelected ? "var(--t-bg-card)" : "transparent",
                                        border: `1px solid ${isSelected ? p.accent + "50" : "var(--t-border)"}`,
                                        boxShadow: isSelected ? "0 4px 20px -4px rgba(0,0,0,0.08)" : "none"
                                    }}>
                                    {/* Bottom Accent progress loader when selected */}
                                    {isSelected && (
                                        <div className="absolute bottom-0 left-0 right-0 h-[3px] overflow-hidden"
                                            style={{ backgroundColor: "var(--t-border)" }}>
                                            <div className="h-full transition-none rounded-t"
                                                style={{ width: `${progress}%`, backgroundColor: p.accent }} />
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between w-full">
                                        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                                            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg text-[11px] sm:text-xs font-mono font-bold flex items-center justify-center transition-colors duration-300 shrink-0"
                                                style={{
                                                    backgroundColor: isSelected ? p.accent : "var(--t-bg-surface)",
                                                    color: isSelected ? "#fff" : "var(--t-text-muted)",
                                                    border: "1px solid var(--t-border)"
                                                }}>
                                                0{i + 1}
                                            </span>
                                            <div className="min-w-0">
                                                <div className="font-bold text-xs sm:text-base transition-colors duration-300 truncate" style={{ color: isSelected ? "var(--t-text)" : "var(--t-text-muted)" }}>
                                                    {p.label}
                                                </div>
                                                <div className="text-[10px] sm:text-[11px] font-medium opacity-60 hidden sm:block truncate" style={{ color: "var(--t-text-muted)" }}>
                                                    {p.badge}
                                                </div>
                                            </div>
                                        </div>

                                        <svg className={`hidden lg:block w-4 h-4 transition-all duration-300 shrink-0 ${isSelected ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-40"}`}
                                            fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: p.accent }}>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Column: Active Content Card (70%) */}
                    <div
                        onMouseEnter={handleMouseEnterCard}
                        onMouseLeave={handleMouseLeaveCard}
                        className="relative rounded-2xl overflow-hidden min-h-[240px] sm:min-h-[280px] flex transition-colors"
                        style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.35, ease: "easeOut" }}
                                className="w-full p-4 sm:p-7 md:p-9 flex flex-col justify-between relative"
                            >
                                {/* Ambient subtle glow */}
                                <div className="absolute -top-24 -right-24 w-[320px] h-[320px] rounded-full blur-[110px] opacity-15 pointer-events-none transition-colors duration-700"
                                    style={{ backgroundColor: problems[active].accent }} />

                                {/* Top Row: Badge & 3D Icon */}
                                <div className="flex items-start justify-between gap-3 sm:gap-4 mb-4 sm:mb-6 relative z-10">
                                    <div className="min-w-0 flex-1">
                                        <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full inline-block mb-2 sm:mb-3"
                                            style={{ backgroundColor: problems[active].accent + "15", color: problems[active].accent, border: `1px solid ${problems[active].accent}30` }}>
                                            {problems[active].badge}
                                        </span>
                                        <h3 className="font-display text-base sm:text-2xl md:text-3xl font-bold tracking-tight leading-snug" style={{ color: "var(--t-text)" }}>
                                            {problems[active].title}
                                        </h3>
                                    </div>

                                    <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center relative shrink-0 shadow-sm"
                                        style={{ backgroundColor: problems[active].accent + "12", border: `1px solid ${problems[active].accent}30` }}>
                                        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.35 }} className="scale-75 sm:scale-100">
                                            {problems[active].icon}
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-xs sm:text-sm md:text-base leading-relaxed opacity-75 max-w-xl mb-4 sm:mb-6 relative z-10" style={{ color: "var(--t-text-muted)" }}>
                                    {problems[active].desc}
                                </p>

                                {/* Bottom Row: Action link + Step indicator */}
                                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t relative z-10"
                                    style={{ borderColor: "var(--t-border)" }}>
                                    <Link href={problems[active].href}
                                        className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider group transition-all px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg"
                                        style={{ backgroundColor: problems[active].accent + "15", color: problems[active].accent, border: `1px solid ${problems[active].accent}30` }}>
                                        <span>How SVaaN solves this</span>
                                        <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>

                                    <div className="flex items-center gap-2">
                                        {isPaused && (
                                            <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded border"
                                                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: problems[active].accent }}>
                                                Paused
                                            </span>
                                        )}
                                        <span className="text-xs font-mono opacity-50 font-medium" style={{ color: "var(--t-text-muted)" }}>
                                            0{active + 1} / 04
                                        </span>
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

/* ────────────────────────────────────────────────────────────
   SECTION 4 - Case Studies Carousel ("Our Solutions")
   ──────────────────────────────────────────────────────────── */

function SolutionPillarsSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);

            if (scrollRef.current.children.length > 0) {
                const cardWidth = scrollRef.current.children[0].clientWidth + 24; // width + gap
                const newIndex = Math.round(scrollLeft / cardWidth);
                setActiveIndex(newIndex);
            }
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener("resize", checkScroll);
        return () => window.removeEventListener("resize", checkScroll);
    }, []);

    const scrollBy = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth / 3;
            scrollRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
            setTimeout(checkScroll, 500);
        }
    };

    return (
        <section id="solutions" className="py-14 sm:py-20 lg:py-28 bg-[var(--t-bg-surface)] scroll-mt-24">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 sm:mb-12 gap-4 sm:gap-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center justify-center px-3 sm:px-4 py-1 sm:py-1.5 mb-3 sm:mb-5 rounded-md border text-xs sm:text-sm font-semibold tracking-widest uppercase"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-text-muted)" }}>
                            Our Solutions
                        </div>
                        <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight" style={{ color: "var(--t-text)" }}>
                            Proven solutions built for<br />real{" "}
                            <span className="italic" style={{ color: "var(--t-accent)" }}>business impact.</span>
                        </h2>
                    </motion.div>

                    {/* Arrow Pagination */}
                    <div className="flex items-center gap-3 shrink-0 self-end sm:self-auto">
                        <button onClick={() => scrollBy("left")} disabled={!canScrollLeft} className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[var(--t-accent)] hover:text-white hover:border-[var(--t-accent)]" style={{ borderColor: "var(--t-border)", color: "var(--t-text)" }} aria-label="Previous">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button onClick={() => scrollBy("right")} disabled={!canScrollRight} className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[var(--t-accent)] hover:text-white hover:border-[var(--t-accent)]" style={{ borderColor: "var(--t-border)", color: "var(--t-text)" }} aria-label="Next">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Scrollable cards carousel (3 columns desktop) */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                <div ref={scrollRef} onScroll={checkScroll} className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 sm:pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                    {allProjectsList.map((project, idx) => (
                        <motion.div key={project.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: idx * 0.1 }}
                            className="flex-none w-[84vw] sm:w-[360px] md:w-[45vw] lg:w-[calc(33.333%-16px)] snap-start group relative">
                            <div className="flex flex-col h-full rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border"
                                style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>

                                {/* Illustration Area */}
                                <div className={`relative h-[180px] sm:h-[220px] md:h-[240px] w-full bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                                    <div className="absolute inset-0 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
                                        <project.Illustration className="w-full h-full object-cover" />
                                    </div>
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase backdrop-blur-md border shadow-sm"
                                            style={{
                                                backgroundColor: "rgba(0, 0, 0, 0.65)",
                                                borderColor: "rgba(255, 255, 255, 0.2)",
                                                color: "#fff"
                                            }}>
                                            {project.scope}
                                        </span>
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="p-5 sm:p-7 md:p-8 flex flex-col flex-grow text-left justify-between"
                                    style={{ backgroundColor: "var(--t-bg-card)" }}>
                                    <div>
                                        <div className="flex items-center gap-2.5 mb-2.5 sm:mb-4">
                                            <span className="text-[11px] sm:text-xs font-bold tracking-[0.1em] uppercase"
                                                style={{ color: "var(--t-accent)" }}>
                                                Case Study
                                            </span>
                                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                                        </div>
                                        <h3 className="text-xl sm:text-2xl md:text-[24px] font-bold leading-snug mb-3"
                                            style={{ color: "var(--t-text)" }}>
                                            {project.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3"
                                            style={{ color: "var(--t-text-muted)" }}>
                                            {project.summary}
                                        </p>
                                    </div>

                                    {/* Footer with Key Metrics */}
                                    <div className="pt-4 border-t flex flex-wrap gap-1.5"
                                        style={{ borderColor: "var(--t-border)" }}>
                                        {project.metrics.slice(0, 2).map((m) => (
                                            <span key={m} className="text-[11px] font-medium px-2 py-0.5 rounded-md border"
                                                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-text)" }}>
                                                ✓ {m}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Dot indicators */}
                <div className="flex justify-center gap-2 mt-2 sm:mt-4">
                    {allProjectsList.map((_, i) => (
                        <div key={i} className="w-2 h-2 rounded-full transition-all duration-300"
                            style={{ backgroundColor: i === activeIndex ? "var(--t-accent)" : "var(--t-border)", transform: i === activeIndex ? "scale(1.5)" : "scale(1)" }} />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   SECTION 5 - Why SVaaN (cloned from ProcessSection pattern)
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
        <section className="py-14 sm:py-20 lg:py-24 relative overflow-clip">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-[var(--t-radius-md)] blur-[200px] pointer-events-none"
                style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }} />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-24 items-start">
                    <div className="lg:sticky lg:top-32 lg:h-max">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-md border text-xs font-semibold tracking-wider uppercase"
                                style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                                Why SVaaN
                            </div>
                            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4 sm:mb-6" style={{ color: "var(--t-text)" }}>
                                Why businesses choose{" "}
                                <span className="italic" style={{ color: "var(--t-accent)" }}>SVaaN.</span>
                            </h2>
                            <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-10 leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                                We don&apos;t just deliver a project and walk away. We stay involved, because software that works today needs to keep working tomorrow.
                            </p>
                            <Button href="/why-svaan" variant="outline" className="group">
                                Why SVaaN
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </Button>
                        </motion.div>
                    </div>

                    <div className="flex flex-col gap-3.5 sm:gap-5">
                        {reasons.map((r, i) => (
                            <motion.div key={r.num} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="group rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 cursor-default hover:shadow-lg hover:-translate-y-1"
                                style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}>
                                <div className="flex">
                                    {/* Left accent strip with number */}
                                    <div className="w-11 sm:w-16 md:w-[72px] shrink-0 flex flex-col items-center justify-center transition-colors duration-500"
                                        style={{ backgroundColor: "var(--t-bg-surface)" }}>
                                        <span className="text-base sm:text-xl md:text-2xl font-black tracking-tight opacity-30 group-hover:opacity-100 transition-opacity duration-500" style={{ color: "var(--t-accent)" }}>
                                            {r.num}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-3.5 sm:p-5 md:p-7 flex items-center gap-3 sm:gap-5 min-w-0">
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-display text-sm sm:text-lg md:text-xl font-bold mb-1 group-hover:text-[var(--t-accent)] transition-colors duration-300 leading-snug" style={{ color: "var(--t-text)" }}>
                                                {r.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm leading-relaxed opacity-70" style={{ color: "var(--t-text-muted)" }}>{r.desc}</p>
                                        </div>
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover:scale-110 group-hover:shadow-md [&>svg]:w-6 [&>svg]:h-6 sm:[&>svg]:w-8 sm:[&>svg]:h-8 md:[&>svg]:w-10 md:[&>svg]:h-10"
                                            style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-accent)" }}>
                                            {r.icon}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   SECTION 6 - How We Work (cloned from ProcessSection pattern)
   ──────────────────────────────────────────────────────────── */

const steps = [
    {
        num: "01",
        title: "Understand",
        tag: "Discovery & Context",
        desc: "Clarify the real problem, users, constraints, and current state.",
    },
    {
        num: "02",
        title: "Decide",
        tag: "Strategic Direction",
        desc: "Evaluate solutions and establish clear roadmaps before committing.",
    },
    {
        num: "03",
        title: "Build",
        tag: "Engineering & QA",
        desc: "Engineer production-grade software with velocity and discipline.",
    },
    {
        num: "04",
        title: "Run",
        tag: "Stability & DevOps",
        desc: "Deploy, monitor, and run securely for zero unexpected downtime.",
    },
    {
        num: "05",
        title: "Improve",
        tag: "Continuous Evolution",
        desc: "Iterate and optimize continuously as your business expands.",
    },
];

function HowWeWork() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-14 sm:py-20 lg:py-28 relative overflow-clip" style={{ borderTop: "1px solid var(--t-border)", borderBottom: "1px solid var(--t-border)" }}>
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[200px] pointer-events-none"
                style={{ backgroundColor: "var(--t-accent)", opacity: "calc(var(--t-orb-opacity) * 0.7)" }} />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                {/* Section Header - Full Width with Split CTA */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
                    <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-2.5 sm:mb-3 rounded-md border text-xs font-semibold uppercase tracking-wider"
                            style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-accent)" }}>
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--t-accent)" }} />
                            Our Approach & Methodology
                        </div>
                        <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-2 sm:mb-4" style={{ color: "var(--t-text)" }}>
                            One simple way of{" "}
                            <span className="italic" style={{ color: "var(--t-accent)" }}>working.</span>
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg" style={{ color: "var(--t-text-muted)" }}>
                            Every engagement follows these five stages. The depth varies, the discipline doesn&apos;t.
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.15 }} className="flex items-center gap-4 shrink-0">
                        <Button href="/approach" variant="outline" className="group">
                            See our approach
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Button>
                    </motion.div>
                </div>

                {/* Auto Full-Width Grid: 3 Columns Top Row, 2 Balanced Columns Bottom Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6 w-full">
                    {steps.map((step, i) => {
                        const isHovered = hoveredIndex === i;
                        const colSpanClass = i < 3
                            ? "lg:col-span-2 md:col-span-1"
                            : i === 4
                                ? "lg:col-span-3 md:col-span-2"
                                : "lg:col-span-3 md:col-span-1";

                        return (
                            <motion.div
                                key={step.num}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={`group relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 cursor-default hover:-translate-y-1 ${colSpanClass}`}
                                style={{
                                    backgroundColor: "var(--t-bg-card)",
                                    border: `1px solid ${isHovered ? "var(--t-accent)" : "var(--t-border)"}`,
                                    boxShadow: isHovered ? "0 14px 32px -10px rgba(0,0,0,0.12)" : "0 4px 20px -6px rgba(0,0,0,0.04)"
                                }}>

                                {/* Top Row: Step Pill + Stage Label */}
                                <div>
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="flex items-center gap-2.5">
                                            <span className="w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-all duration-300"
                                                style={{
                                                    backgroundColor: isHovered ? "var(--t-accent)" : "var(--t-bg-surface)",
                                                    color: isHovered ? "#fff" : "var(--t-accent)",
                                                    border: "1px solid var(--t-border)"
                                                }}>
                                                {step.num}
                                            </span>
                                            <span className="text-[11px] font-semibold uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity"
                                                style={{ color: "var(--t-text-muted)" }}>
                                                Stage {step.num}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Category Sub-badge */}
                                    <div className="mb-2">
                                        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-md"
                                            style={{ backgroundColor: "var(--t-bg-surface)", color: "var(--t-accent)", border: "1px solid var(--t-border)" }}>
                                            {step.tag}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-display text-xl sm:text-2xl font-bold mb-2.5 transition-colors duration-300"
                                        style={{ color: isHovered ? "var(--t-accent)" : "var(--t-text)" }}>
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm leading-relaxed opacity-75"
                                        style={{ color: "var(--t-text-muted)" }}>
                                        {step.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   SECTION 7 - Technologies We Use (Redesigned Tech Matrix)
   ──────────────────────────────────────────────────────────── */

const techDomains = [
    {
        id: "frontend",
        category: "Frontend & Mobile",
        focus: "High-performance interfaces, PWAs & responsive multi-platform apps",
        accent: "#3b82f6",
        items: [
            { name: "Next.js", badge: "v15" },
            { name: "React", badge: "" },
            { name: "TypeScript", badge: "" },
            { name: "React Native", badge: "" },
            { name: "Flutter", badge: "" },
            { name: "TailwindCSS", badge: "" },
            { name: "Vue.js", badge: "" }
        ]
    },
    {
        id: "backend",
        category: "Backend & Core Systems",
        focus: "Distributed, type-safe APIs & high-concurrency microservices",
        accent: "#6366f1",
        items: [
            { name: "Node.js", badge: "" },
            { name: "Go", badge: "High-Perf" },
            { name: "Python", badge: "" },
            { name: "Java / Spring", badge: "" },
            { name: "GraphQL", badge: "" },
            { name: "gRPC", badge: "" },
            { name: "REST APIs", badge: "" }
        ]
    },
    {
        id: "cloud",
        category: "Cloud Infrastructure",
        focus: "Elastic multi-cloud architectures, edge computing & serverless",
        accent: "#0ea5e9",
        items: [
            { name: "AWS", badge: "" },
            { name: "Google Cloud", badge: "" },
            { name: "Microsoft Azure", badge: "" },
            { name: "Terraform", badge: "IaC" },
            { name: "Cloudflare", badge: "Edge" },
            { name: "Vercel", badge: "" }
        ]
    },
    {
        id: "data",
        category: "Data & AI / ML",
        focus: "High-throughput data storage, vector databases & generative AI",
        accent: "#8b5cf6",
        items: [
            { name: "PostgreSQL", badge: "" },
            { name: "MongoDB", badge: "" },
            { name: "Redis", badge: "Cache" },
            { name: "Vector DBs", badge: "Pinecone" },
            { name: "OpenAI / LLMs", badge: "GenAI" },
            { name: "TensorFlow", badge: "" }
        ]
    },
    {
        id: "architecture",
        category: "DevOps & Observability",
        focus: "Automated delivery pipelines, security hardening & zero-downtime",
        accent: "#10b981",
        items: [
            { name: "Kubernetes", badge: "K8s" },
            { name: "Docker", badge: "" },
            { name: "GitHub Actions", badge: "CI/CD" },
            { name: "Prometheus", badge: "" },
            { name: "Grafana", badge: "" },
            { name: "ArgoCD", badge: "" }
        ]
    },
    {
        id: "architecture",
        category: "Architecture & Scale",
        focus: "Decoupled domain-driven designs, web-sockets & zero trust security",
        accent: "#f59e0b",
        items: [
            { name: "Microservices", badge: "" },
            { name: "Serverless", badge: "" },
            { name: "Event-Driven", badge: "Kafka" },
            { name: "Domain-Driven", badge: "DDD" },
            { name: "WebSockets", badge: "" },
            { name: "Zero Trust", badge: "" }
        ]
    }
];

const officialLogos = [
    {
        name: "Next.js",
        logo: (
            <svg viewBox="0 0 180 180" className="w-5 h-5 fill-current">
                <mask height="180" id="mask-next" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
                    <circle cx="90" cy="90" fill="black" r="90" />
                </mask>
                <g mask="url(#mask-next)">
                    <circle cx="90" cy="90" fill="black" r="90" stroke="white" strokeWidth="6" />
                    <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.16 149.508 157.52Z" fill="url(#paint0_linear_next)" />
                    <rect fill="url(#paint1_linear_next)" height="72" width="12" x="115" y="54" />
                </g>
                <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_next" x1="109" x2="144.5" y1="116.5" y2="160.5">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_next" x1="121" x2="120.799" y1="54" y2="106.875">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        )
    },
    {
        name: "React",
        logo: (
            <svg viewBox="-11.5 -10.232 23 20.463" className="w-5 h-5">
                <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
                <g stroke="#61DAFB" strokeWidth="1.1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
            </svg>
        )
    },
    {
        name: "TypeScript",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5">
                <rect width="24" height="24" rx="4" fill="#3178C6" />
                <path fill="#FFF" d="M3 13.5h3.5v7.5H8v-7.5h3.5V12H3v1.5zm11.5 5.5c.8.5 1.7.8 2.6.8 1.4 0 2.3-.7 2.3-1.8 0-1.1-.9-1.6-2.4-2.2-1.8-.7-3-1.6-3-3.2 0-1.9 1.5-3.3 3.8-3.3 1.1 0 2.1.3 2.9.8l-.6 1.4c-.7-.4-1.5-.7-2.3-.7-1.3 0-2.1.7-2.1 1.7 0 1 .8 1.5 2.3 2.1 2 .8 3.1 1.7 3.1 3.4 0 2.1-1.6 3.4-4 3.4-1.3 0-2.5-.4-3.3-.9l.7-1.6z" />
            </svg>
        )
    },
    {
        name: "Node.js",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="#539E43" d="M11.998 1.5l10.392 6v12l-10.392 6-10.392-6v-12l10.392-6z" />
                <path fill="#FFF" d="M12 4.6l7.8 4.5v9L12 22.6l-7.8-4.5v-9L12 4.6zm4.1 11.2c-.7.7-1.7 1.1-2.9 1.1-2.1 0-3.6-1.3-3.6-3.8s1.5-3.8 3.6-3.8c1.2 0 2.2.4 2.9 1.1l-1.1 1.1c-.5-.5-1.1-.7-1.8-.7-1.2 0-2.1.9-2.1 2.3s.9 2.3 2.1 2.3c.7 0 1.3-.2 1.8-.7l1.1 1.1z" />
            </svg>
        )
    },
    {
        name: "Python",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="#3776AB" d="M11.9 1.5c-3.1 0-5 1.4-5 3.3v2.2h5.1v.8H4.6C2.6 7.8 1 9.4 1 11.5c0 2 1.5 3.6 3.6 3.6h1.5v-2.1c0-2.1 1.8-3.9 3.9-3.9h5.1V6.9c0-3.1-4-5.4-3.2-5.4zM9.4 3.2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" />
                <path fill="#FFD43B" d="M12.1 22.5c3.1 0 5-1.4 5-3.3v-2.2H12v-.8h7.4c2 0 3.6-1.6 3.6-3.7 0-2-1.5-3.6-3.6-3.6h-1.5v2.1c0 2.1-1.8 3.9-3.9 3.9H8.9v2.2c0 3.1 4 5.4 3.2 5.4zm2.5-1.7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
            </svg>
        )
    },
    {
        name: "Go",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="#00ADD8" d="M1.8 10.5c.3-1.6 1.4-3.5 3-4.4 2.2-1.2 5.1-1 7.2.3l-1.4 2c-1.4-.9-3.3-1.1-4.7-.3-1.1.6-1.9 1.9-2 3.2-.2 1.6.4 3.4 1.7 4.3 1.3.9 3.2 1 4.6.1l1.4 2c-2.1 1.4-5.1 1.4-7.3.2-1.8-1-2.9-2.9-3.1-4.9l.6-2.5zm11.6 2.2h5.5v2h-3.4c-.2 1.4-.9 2.7-2.1 3.5-1.5 1-3.6 1.1-5.1.2l1.2-2c.9.5 2.1.5 3-.1.6-.4.9-1.1 1-1.8h-4.3l4.2-1.8z" />
            </svg>
        )
    },
    {
        name: "AWS",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="#FF9900" d="M18.8 17.5c-2.4 1.8-5.8 2.7-8.8 2.7-4.2 0-8-1.5-10.9-4.1-.2-.2-.2-.5 0-.7.3-.2.6-.2.8 0 2.6 2.3 6.1 3.8 10.1 3.8 2.7 0 5.7-.8 7.9-2.3.3-.2.7 0 .9.3.2.3 0 .7-.1.7z" />
                <path fill="#FF9900" d="M19.7 16c-.3-.4-2-.2-3-.1-.3 0-.4-.3-.2-.5 1.5-1.1 3.9-.8 4.2-.4.3.4-.1 2.8-1.5 4-.2.2-.4.1-.3-.2.4-.9.9-2.4.8-2.8z" />
                <path fill="#FF9900" d="M7.7 12.8c-.8.8-2 1.3-3.2 1.3-1.8 0-3-1.1-3-2.9 0-2.3 1.9-3.3 4.2-3.3h2v-.7c0-1.2-.7-1.8-2-1.8-.9 0-1.8.4-2.3.9-.1.1-.3.1-.4 0l-.8-.8c-.1-.1-.1-.3 0-.4.8-.8 2.2-1.4 3.7-1.4 2.5 0 4 1.3 4 3.7v4.6c0 .5.1.9.2 1.2 0 .1 0 .3-.1.4l-1.3.8c-.2.1-.4 0-.4-.2l-.1-.7c-.7.6-1.7 1.1-2.7 1.1zm-.1-2.3v-1h-1.8c-1.3 0-2.3.5-2.3 1.7 0 .9.6 1.4 1.6 1.4 1.2 0 2.5-.9 2.5-2.1z" />
            </svg>
        )
    },
    {
        name: "Google Cloud",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="#EA4335" d="M19.3 10.5c-.3-3.2-3-5.7-6.3-5.7-2.6 0-4.8 1.5-5.8 3.7C5.9 8.7 4.5 10 4.1 11.7c-2 .5-3.1 2.4-3.1 4.3 0 2.5 2 4.5 4.5 4.5h13.8c2.6 0 4.7-2.1 4.7-4.7 0-2.4-1.8-4.4-4.2-4.7-.2-.2-.3-.4-.5-.6z" />
                <path fill="#4285F4" d="M13 4.8c3.3 0 6 2.5 6.3 5.7h-6.3V4.8z" />
                <path fill="#FBBC05" d="M4.1 11.7c.4-1.7 1.8-3 3.1-3.2L10 13H4.1z" />
                <path fill="#34A853" d="M19.3 20.5H5.5c-2.5 0-4.5-2-4.5-4.5 0-1.9 1.1-3.8 3.1-4.3L13 13v7.5z" />
            </svg>
        )
    },
    {
        name: "Azure",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="#0078D4" d="M13.2 2.5L5.7 15.6l5.4 3.4 5.3-9.5-3.2-7z" />
                <path fill="#008AD7" d="M13.2 2.5L2.5 18.5h6.1l4.6-16z" />
                <path fill="#005BA1" d="M16.4 9.5L11.1 19h10.4l-5.1-9.5z" />
            </svg>
        )
    },
    {
        name: "Docker",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#2496ED">
                <path d="M13 6.8h2.3V9H13zm-2.8 0h2.3V9h-2.3zm-2.8 0h2.3V9H7.4zm-2.8 2.7h2.3v2.2H4.6zm2.8 0h2.3v2.2H7.4zm2.8 0h2.3v2.2h-2.3zm2.8 0h2.3v2.2H13zm2.8 0h2.3v2.2h-2.3zm-8.4 2.7h2.3v2.2H7.4zm2.8 0h2.3v2.2h-2.3zm2.8 0h2.3v2.2H13zm8.9-.6c-.5-.4-1.5-.4-2.2-.1-.2-.8-.7-1.4-1.5-1.9l-.6-.4-.4.6c-.4.7-.6 1.5-.4 2.4-.8.4-2.1.4-2.4.4H2.4c-.4 1.9.1 4 1.4 5.5 1.5 1.8 3.8 2.8 6.2 2.8 7.3 0 11.8-4.7 11.8-10.4 0-.4 0-.7-.1-.9h.2c.7 0 1.3-.2 1.8-.7l.4-.4-.5-.3z" />
            </svg>
        )
    },
    {
        name: "Kubernetes",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#326CE5">
                <path d="M11.6 1.1l-8 4.6c-.4.2-.6.7-.6 1.1v9.2c0 .5.2.9.6 1.1l8 4.6c.4.2.9.2 1.3 0l8-4.6c.4-.2.6-.7.6-1.1V6.8c0-.5-.2-.9-.6-1.1l-8-4.6c-.4-.2-.9-.2-1.3 0zm.4 2.4l6.4 3.7-2.3 2.5-3.3-1.1-.8-5.1zm-1.6.4l-.8 5-3.3 1.1-2.3-2.5 6.4-3.6zm-5.4 6.7l2.8 1.8v3.5l-2.8 1.8v-7.1zm14 0v7.1l-2.8-1.8v-3.5l2.8-1.8zm-7 1.8l2.2 1.3-1.4 2.4-2.5-.8-.3-2.9 2-0zm-1.8 1.3l.3 2.9-2.5.8-1.4-2.4 2.2-1.3zm.5 4.3l2.6.8.8 2.6-2.5 1.4-.9-4.8zm3.6.8l2.6-.8-.9 4.8-2.5-1.4.8-2.6z" />
            </svg>
        )
    },
    {
        name: "PostgreSQL",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#4169E1">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3.8 6.8c.8.6 1.3 1.5 1.3 2.6 0 1.9-1.5 3.5-3.4 3.5H11v2.5H9.4V8.8h4.3c.8 0 1.6.3 2.1.8zm-4.4 4.6h2.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-2.4v3.6z" />
            </svg>
        )
    },
    {
        name: "MongoDB",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#47A248">
                <path d="M12 1.5s-6 6.8-6 12.2c0 4.6 3.4 7.8 6 8.8 2.6-1 6-4.2 6-8.8 0-5.4-6-12.2-6-12.2zm.4 18.2v-7.9c0-.2-.2-.4-.4-.4s-.4.2-.4.4v7.9c-2-1-4-3.5-4-7.5 0-3.9 3.5-8.5 4.4-9.7.9 1.2 4.4 5.8 4.4 9.7 0 4-2 6.5-4 7.5z" />
            </svg>
        )
    },
    {
        name: "Redis",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#DC382D">
                <path d="M12 2.5L2.8 7.3v9.4L12 21.5l9.2-4.8V7.3L12 2.5zm0 2.2l6.8 3.6-6.8 3.5L5.2 8.3 12 4.7zm-7.2 4.6l6.2 3.2v6.6l-6.2-3.3V9.3zm8.2 9.8v-6.6l6.2-3.2v6.5l-6.2 3.3z" />
            </svg>
        )
    },
    {
        name: "GraphQL",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#E10098">
                <path d="M12 2.3l8.4 4.8v9.8L12 21.7 3.6 16.9V7.1L12 2.3zm0 2.3L5.3 8.3l6.7 11.3 6.7-11.3L12 4.6zm-6.4 4.2v6.4l5.5-3.2-5.5-3.2zm12.8 0l-5.5 3.2 5.5 3.2V8.8z" />
            </svg>
        )
    },
    {
        name: "Tailwind CSS",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#06B6D4">
                <path d="M12 6c-3.6 0-5.8 1.8-6.7 5.4 1.3-1.8 2.9-2.5 4.7-2 1 .3 1.8 1.1 2.6 1.9C14 12.7 15.7 14.4 20 14.4c3.6 0 5.8-1.8 6.7-5.4-1.3 1.8-2.9 2.5-4.7 2-1-.3-1.8-1.1-2.6-1.9C18 7.7 16.3 6 12 6zM5.3 14.4C1.7 14.4-.5 16.2-1.4 19.8c1.3-1.8 2.9-2.5 4.7-2 1 .3 1.8 1.1 2.6 1.9 1.4 1.4 3.1 3.1 7.4 3.1 3.6 0 5.8-1.8 6.7-5.4-1.3 1.8-2.9 2.5-4.7 2-1-.3-1.8-1.1-2.6-1.9-1.4-1.4-3.1-3.1-7.4-3.1z" />
            </svg>
        )
    },
    {
        name: "OpenAI",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#10A37F">
                <path d="M22.3 10.1a5.6 5.6 0 00-.5-4.4 5.7 5.7 0 00-5.3-2.8 5.6 5.6 0 00-3.8-1.5 5.7 5.7 0 00-5.4 3.8 5.7 5.7 0 00-4 2 5.6 5.6 0 00-.7 4.7 5.7 5.7 0 00.5 4.4 5.7 5.7 0 005.3 2.8c.3.5.7 1 1.2 1.4a5.7 5.7 0 008-2.3 5.7 5.7 0 004-2 5.6 5.6 0 00.7-4.7zm-9.6 11.2a3.7 3.7 0 01-2.7-1.2l.1-.8 4.6-2.7a.8.8 0 00.4-.7v-5.4l1.6.9v5.2a3.7 3.7 0 01-4 4.7zm-7.6-3.8a3.7 3.7 0 01-.4-2.9l.7.4 4.6 2.7c.3.2.6.2.8 0l4.7-2.7v1.8l-4.5 2.6a3.7 3.7 0 01-5.9-1.9zm-1.8-8.1a3.7 3.7 0 012.3-1.7l.6.6v5.3c0 .3.2.6.4.7l4.7 2.7-1.6.9-4.5-2.6a3.7 3.7 0 01-1.9-5.9zm13.1 3.1l-4.7-2.7 1.6-.9 4.5 2.6a3.7 3.7 0 011.9 5.9 3.7 3.7 0 01-2.3 1.7l-.6-.6v-5.3a.8.8 0 00-.4-.7zm2.4-2.8a3.7 3.7 0 01.4 2.9l-.7-.4-4.6-2.7a.8.8 0 00-.8 0l-4.7 2.7v-1.8l4.5-2.6a3.7 3.7 0 015.9 1.9zm-8.8-1.9a3.7 3.7 0 012.7 1.2l-.1.8-4.6 2.7a.8.8 0 00-.4.7v5.4l-1.6-.9v-5.2a3.7 3.7 0 014-4.7zm1.1 5.4l2.1 1.2v2.4l-2.1 1.2-2.1-1.2v-2.4l2.1-1.2z" />
            </svg>
        )
    },
    {
        name: "Terraform",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#844FBA">
                <path d="M14.7 8.2v7.1l6.1-3.5V4.7l-6.1 3.5zm-5.4-3.1v7.1l6.1-3.5V1.6L9.3 5.1zm0 8.2v7.1l6.1-3.5V9.8L9.3 13.3zM3.2 8.7v7.1l6.1-3.5V5.2L3.2 8.7z" />
            </svg>
        )
    }
];

function TechStackSection() {
    return (
        <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden" style={{ borderTop: "1px solid var(--t-border)", borderBottom: "1px solid var(--t-border)" }}>
            {/* Background Ambient Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[220px] pointer-events-none"
                style={{ backgroundColor: "var(--t-accent)", opacity: "calc(var(--t-orb-opacity) * 0.6)" }} />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 mb-2.5 sm:mb-3 rounded-full border text-xs font-semibold uppercase tracking-wider"
                        style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--t-accent)" }} />
                        Technologies We Use
                    </motion.div>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4" style={{ color: "var(--t-text)" }}>
                        The right tool for{" "}
                        <span className="italic" style={{ color: "var(--t-accent)" }}>the right problem.</span>
                    </motion.h2>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                        className="text-xs sm:text-sm md:text-base opacity-80 leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--t-text-muted)" }}>
                        We operate across the modern technology ecosystem - building high-performance architectures engineered for scalability, security, and long-term maintainability.
                    </motion.p>
                </div>

                {/* Clean Technology Domain Cards in 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full">
                    {techDomains.map((domain, idx) => (
                        <motion.div
                            key={domain.category}
                            initial={{ opacity: 0, y: 20, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            className="group relative rounded-xl sm:rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
                            style={{
                                backgroundColor: "var(--t-bg-card)",
                                border: "1px solid var(--t-border)",
                                boxShadow: "0 4px 20px -6px rgba(0,0,0,0.06)"
                            }}>
                            {/* Top Accent Glow on hover */}
                            <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                                style={{ backgroundColor: domain.accent }} />

                            <div>
                                {/* Title & Focus */}
                                <h3 className="font-display text-lg sm:text-xl font-bold mb-1.5 transition-colors group-hover:text-[var(--t-accent)]"
                                    style={{ color: "var(--t-text)" }}>
                                    {domain.category}
                                </h3>
                                <p className="text-xs sm:text-sm opacity-70 mb-5 leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                                    {domain.focus}
                                </p>

                                {/* Tech Pill Badges */}
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {domain.items.map((tech) => (
                                        <span
                                            key={tech.name}
                                            className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg text-xs font-medium transition-all duration-200 hover:border-[var(--t-accent)]"
                                            style={{
                                                backgroundColor: "var(--t-bg-surface)",
                                                border: "1px solid var(--t-border)",
                                                color: "var(--t-text)"
                                            }}>
                                            {tech.name}
                                            {tech.badge && (
                                                <span className="text-[9px] px-1 py-0.2 rounded font-mono font-semibold"
                                                    style={{ backgroundColor: domain.accent + "20", color: domain.accent }}>
                                                    {tech.badge}
                                                </span>
                                            )}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Interactive Tech Marquee Ribbon with Official Logos */}
                <div className="mt-8 sm:mt-12 relative overflow-hidden rounded-xl sm:rounded-2xl py-4 sm:py-6 px-3 sm:px-4"
                    style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)" }}>
                    {/* Left & Right Fade Gradients */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 pointer-events-none z-10"
                        style={{ background: "linear-gradient(90deg, var(--t-bg-surface), transparent)" }} />
                    <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 pointer-events-none z-10"
                        style={{ background: "linear-gradient(-90deg, var(--t-bg-surface), transparent)" }} />

                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
                        className="flex items-center gap-3 sm:gap-6 whitespace-nowrap w-max">
                        {[...officialLogos, ...officialLogos].map((tech, i) => (
                            <div key={i} className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border transition-all duration-300 hover:border-[var(--t-accent)] hover:scale-105 shrink-0"
                                style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>
                                <div className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center shrink-0">
                                    {tech.logo}
                                </div>
                                <span className="text-xs sm:text-sm font-semibold whitespace-nowrap" style={{ color: "var(--t-text)" }}>
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   SECTION 8 - Leadership  (cloned from AboutSection pattern)
   ──────────────────────────────────────────────────────────── */

function LeadershipPreview() {
    return (
        <section id="leadership" className="py-14 sm:py-20 lg:py-24 relative overflow-hidden">
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] h-[500px] rounded-[var(--t-radius-md)] blur-[200px] pointer-events-none"
                style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }} />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-24 items-center">
                    {/* Left - Image with floating card */}
                    <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="relative flex flex-col justify-center">
                        <div className="relative w-full h-[260px] sm:h-[360px] lg:h-[440px] rounded-2xl overflow-hidden"
                            style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}>
                            <Image
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                                alt="SVaaN leadership team"
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                                loading="lazy"
                                className="object-cover filter grayscale-[10%]"
                            />
                            <div className="absolute inset-0 mix-blend-overlay opacity-60" style={{ background: "linear-gradient(135deg, var(--t-gradient-from), transparent, var(--t-gradient-to))" }} />
                        </div>
                        <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-3 right-3 sm:-bottom-6 sm:right-6 md:right-8 rounded-xl sm:rounded-2xl px-4 py-2.5 sm:px-6 sm:py-4 shadow-lg"
                            style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}>
                            <div className="font-display font-bold text-xl sm:text-2xl" style={{ color: "var(--t-accent)" }}>Since 2021</div>
                            <div className="text-[11px] sm:text-xs" style={{ color: "var(--t-text-muted)" }}>Building technology that works</div>
                        </motion.div>
                    </motion.div>

                    {/* Right - Text */}
                    <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.15 }} className="flex flex-col justify-center py-2 sm:py-4 lg:py-8">
                        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6" style={{ color: "var(--t-text)" }}>
                            The people behind SVaaN.
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            SVaaN was founded in 2021 by Dinesh Natarajan and Sai Ramamurthy. Both come from engineering and consulting backgrounds with over a decade of delivery experience across sectors.
                        </p>
                        <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: "var(--t-text-muted)" }}>
                            They started SVaaN because they saw too many technology projects that delivered code but missed the point. The company was built around a simple principle: understand the business problem first, then build the right technology.
                        </p>

                        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 mb-8 sm:mb-10">
                            {[
                                { name: "Dinesh Natarajan", role: "Founder" },
                                { name: "Sai Ramamurthy", role: "CEO" }
                            ].map((person) => (
                                <div key={person.name} className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium"
                                    style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)", color: "var(--t-text)" }}>
                                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "var(--t-accent)" }} />
                                    <span className="font-semibold">{person.name}</span>
                                    <span className="opacity-50 text-[11px] sm:text-xs font-normal">({person.role})</span>
                                </div>
                            ))}
                        </div> */}

                        <Link href="/leadership" className="group inline-flex items-center gap-3 text-sm sm:text-base font-semibold hover:gap-4 transition-all duration-300" style={{ color: "var(--t-accent)" }}>
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
   SECTION 9 - Final CTA  (cloned from CTASection)
   ──────────────────────────────────────────────────────────── */

function ClosingCTA() {
    return (
        <section className="py-16 sm:py-24 lg:py-28 relative overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-[var(--t-radius-md)] blur-[200px] pointer-events-none"
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
                    <Button href="/contact" size="lg" className="w-full sm:w-auto justify-center group">
                        Discuss your challenge
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}

/* ────────────────────────────────────────────────────────────
   HOME - Full Page Assembly
   ──────────────────────────────────────────────────────────── */

export default function Home() {
    return (
        <main className="w-full overflow-x-clip">
            <HeroV2 />
            <ProblemFraming />
            <SolutionPillarsSection />
            <WhySvaaNSection />
            <HowWeWork />
            <TechStackSection />
            <LeadershipPreview />
            <ClosingCTA />
        </main>
    );
}
