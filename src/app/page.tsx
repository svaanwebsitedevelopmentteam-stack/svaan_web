import React from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";
import { HeroStats } from "@/components/home/HeroStats";
import { WhySvaaNSection } from "@/components/home/WhySvaaNSection";
import { HowWeWork } from "@/components/home/HowWeWork";
import { TechStackSection } from "@/components/home/TechStackSection";
import { LeadershipPreview } from "@/components/home/LeadershipPreview";
import { ClosingCTA } from "@/components/home/ClosingCTA";

// Only client components with interactive state are dynamically loaded
const ProblemFraming = dynamic(
    () => import("@/components/home/ProblemFraming").then((m) => m.ProblemFraming),
    { ssr: true }
);
const SolutionPillarsSection = dynamic(
    () => import("@/components/home/SolutionPillarsSection").then((m) => m.SolutionPillarsSection),
    { ssr: true }
);

/* ────────────────────────────────────────────────────────────
   SECTION 1 - Hero with Integrated Trust Stats (Server Rendered)
   ──────────────────────────────────────────────────────────── */

function HeroV2() {
    return (
        <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between overflow-hidden">
            {/* Ambient Background - GPU accelerated via CSS keyframes (Zero main-thread blocking) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="absolute top-0 left-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full pointer-events-none"
                    style={{
                        background: "radial-gradient(circle, var(--t-accent) 0%, transparent 70%)",
                        opacity: "calc(var(--t-orb-opacity) + 0.1)",
                        transform: "translate3d(-50%, -50%, 0)",
                        animation: "floatOrb1 14s ease-in-out infinite",
                        willChange: "transform",
                    }} />
                <div className="absolute top-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full pointer-events-none"
                    style={{
                        background: "radial-gradient(circle, var(--t-accent) 0%, transparent 70%)",
                        opacity: "var(--t-orb-opacity)",
                        transform: "translate3d(-30%, -30%, 0)",
                        animation: "floatOrb2 18s ease-in-out infinite",
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
                        <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-[var(--t-radius-md)] text-xs sm:text-sm font-semibold"
                            style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-text-secondary)" }}>
                            <span className="w-2 h-2 rounded-[var(--t-radius-md)] bg-emerald-500 animate-pulse" />
                            Available for new projects
                        </span>
                    </div>

                    <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12] mb-4 sm:mb-6"
                        style={{ color: "var(--t-text)" }}>
                        Build. Modernize.<br />
                        Operate.{" "}
                        <span className="italic" style={{ color: "var(--t-accent)" }}>Evolve.</span>
                    </h1>

                    <p className="text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 max-w-xl leading-relaxed opacity-90"
                        style={{ color: "var(--t-text-secondary)" }}>
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

                {/* Right Image - LCP Element: Optimized native responsive picture with sync decoding & zero-lag static CDN delivery */}
                <div className="relative w-full h-[240px] sm:h-[380px] md:h-[460px] lg:h-[540px] mt-2 sm:mt-6 lg:mt-0 flex items-center justify-center lg:justify-end">
                    <picture className="w-full h-full flex items-center justify-center lg:justify-end">
                        <source media="(max-width: 640px)" type="image/avif" srcSet="/hero-mobile.avif" />
                        <source media="(max-width: 640px)" type="image/webp" srcSet="/hero-mobile.webp" />
                        <img
                            src="/hero-section.webp"
                            alt="SVaaN Hero"
                            width={1100}
                            height={1000}
                            fetchPriority="high"
                            decoding="async"
                            loading="eager"
                            style={{ aspectRatio: "11 / 10" }}
                            className="w-auto h-full max-h-full object-contain object-center lg:object-right"
                        />
                    </picture>
                </div>
            </div>

            {/* Merged Trust Stats Strip at Bottom of Hero */}
            <HeroStats />
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
