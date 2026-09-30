"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";

const allProjects = [
    {
        title: "AI-Powered FinTech Platform",
        client: "Global Financial Services",
        tags: ["AI Development", "Strategy"],
        href: "/work/fintech-platform",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        gradient: "from-blue-600/60 to-purple-800/60"
    },
    {
        title: "Healthcare Digital Transformation",
        client: "Enterprise Health Network",
        tags: ["Enterprise Software", "UX Design"],
        href: "/work/healthcare",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
        gradient: "from-emerald-500/60 to-teal-800/60"
    },
    {
        title: "PropTech Management Suite",
        client: "Global Real Estate",
        tags: ["Product Development", "Cloud"],
        href: "/work/proptech",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
        gradient: "from-orange-500/60 to-amber-800/60"
    },
    {
        title: "E-Commerce Infrastructure",
        client: "Retail Enterprise",
        tags: ["Architecture", "DevOps"],
        href: "/work/ecommerce",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=1200",
        gradient: "from-pink-500/60 to-rose-800/60"
    },
    {
        title: "Autonomous Logistics Tracker",
        client: "National Freight Co.",
        tags: ["Machine Learning", "IoT"],
        href: "/work/logistics-tracker",
        image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?auto=format&fit=crop&q=80&w=1200",
        gradient: "from-indigo-500/60 to-fuchsia-800/60"
    },
    {
        title: "Zero-Trust Identity Portal",
        client: "Government Agency",
        tags: ["Cybersecurity", "Architecture"],
        href: "/work/identity-portal",
        image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&q=80&w=1200",
        gradient: "from-cyan-500/60 to-sky-800/60"
    }
];

export default function WorkPage() {
    return (
        <main className="min-h-screen pt-[140px] pb-0 relative">
            {/* Background Orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 max-h-screen">
                <motion.div
                    animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[15%] right-[15%] w-[500px] h-[500px] rounded-full blur-[180px]"
                    style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }}
                />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">

                {/* Structured Grid Hero matching section 8 */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="pb-[60px] lg:pb-28 pt-8 w-full md:w-[80%]"
                >
                    <div className="inline-flex items-center gap-4 mb-8">
                        <div className="h-[1px] w-12" style={{ backgroundColor: "var(--t-accent)" }} />
                        <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--t-text-muted)" }}>Our Work</span>
                    </div>
                    <h1
                        className="font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-tight mb-8"
                        style={{ color: "var(--t-text)" }}
                    >
                        Turning challenges into <span className="italic" style={{ color: "var(--t-accent)" }}>practical outcomes.</span>
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed max-w-3xl" style={{ color: "var(--t-text-muted)" }}>
                        Explore approved work that shows how SVaaN has approached real business and technology challenges.
                    </p>
                </motion.div>

                {/* Structured 2-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 pb-40">
                    {allProjects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                        >
                            <Link href={project.href} className="group block w-full outline-none">

                                {/* Massive Image Container */}
                                <div
                                    className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden mb-8 group"
                                    style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover grayscale-[30%] transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
                                    />
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-overlay transition-opacity duration-[1.2s] ease-out opacity-80 group-hover:opacity-40`}
                                    />

                                    {/* Hover Icon Over Image */}
                                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-xl"
                                            style={{ backgroundColor: "var(--t-glass-bg)", border: "1px solid var(--t-glass-border)", color: "var(--t-text)" }}>
                                            <svg className="w-6 h-6 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Clean Meta & Typography Below */}
                                <div className="flex flex-col gap-3 px-2">
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--t-text-muted)" }}>
                                            {project.client}
                                        </span>
                                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                                        <div className="flex gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-sm font-medium" style={{ color: "var(--t-text-muted)" }}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <h2 className="font-display text-3xl font-bold transition-colors duration-300 group-hover:text-[var(--t-accent)]" style={{ color: "var(--t-text)" }}>
                                            {project.title}
                                        </h2>

                                        <svg className="w-8 h-8 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" style={{ color: "var(--t-accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>

                            </Link>
                        </motion.div>
                    ))}
                </div>

            </div>

            <CTASection />

        </main>
    );
}
