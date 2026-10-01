"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";

const categories = [
    "Strategy",
    "Digital Transformation",
    "Product & Experience",
    "Software & Technology",
    "AI & Automation",
    "Engineering & Delivery",
    "Managed Technology",
    "Industry Perspectives"
];

// Placeholder insights since content document didn't list specific articles
const insights = [
    {
        id: "ai-implementation-risks",
        category: "AI & Automation",
        title: "Navigating the Hidden Complexity of Enterprise AI Adoption",
        summary: "A practical guide to the operational, technical, and strategic risks organizations face when transitioning from AI proof-of-concepts to production.",
        author: "Sai Ramamurthy",
        date: "November 12, 2026",
        gradient: "from-blue-600/20 to-purple-600/20"
    },
    {
        id: "product-strategy",
        category: "Product & Experience",
        title: "Why Most MVPs Fail to Validate the Business Model",
        summary: "Exploring common pitfalls in MVP development and how to ensure your first release actually tests your core hypothesis rather than just deploying code.",
        author: "Dinesh Natarajan",
        date: "October 18, 2026",
        gradient: "from-emerald-500/20 to-teal-600/20"
    },
    {
        id: "legacy-modernization",
        category: "Digital Transformation",
        title: "The Case for Incremental Legacy Modernization",
        summary: "Large-scale 'rip and replace' programs often fail. We examine a systematic, phased approach to breaking down monoliths while maintaining business continuity.",
        author: "Sai Ramamurthy",
        date: "September 02, 2026",
        gradient: "from-orange-500/20 to-amber-600/20"
    },
    {
        id: "devops-culture",
        category: "Engineering & Delivery",
        title: "DevOps is a Culture, Not Just a CI/CD Pipeline",
        summary: "Tools alone don't solve delivery bottlenecks. How to build an engineering culture that genuinely values continuous integration and shared operational responsibility.",
        author: "Dinesh Natarajan",
        date: "August 15, 2026",
        gradient: "from-cyan-500/20 to-sky-600/20"
    }
];

export default function InsightsPage() {
    return (
        <main className="min-h-screen pt-[140px] pb-0 relative bg-[var(--t-bg)] overflow-x-clip">
            {/* Background Orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 max-h-[80vh]">
                <motion.div
                    animate={{ x: [0, 40, 0], y: [0, -60, 0] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[15%] left-[20%] w-[500px] h-[500px] rounded-full blur-[250px]"
                    style={{ backgroundColor: "var(--t-accent)", opacity: "calc(var(--t-orb-opacity) * 0.8)" }}
                />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">

                {/* Insights Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="pb-16 lg:pb-[60px] pt-8 border-b w-full md:w-[80%]"
                    style={{ borderColor: "var(--t-border)" }}
                >
                    <div className="inline-flex items-center gap-4 mb-8">
                        <div className="h-[1px] w-12" style={{ backgroundColor: "var(--t-accent)" }} />
                        <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--t-text-muted)" }}>Perspectives</span>
                    </div>
                    <h1
                        className="font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-tight mb-8"
                        style={{ color: "var(--t-text)" }}
                    >
                        Ideas, perspectives and practical thinking for a changing <span className="italic" style={{ color: "var(--t-accent)" }}>digital world.</span>
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed max-w-3xl" style={{ color: "var(--t-text-muted)" }}>
                        Explore practical perspectives on strategy, digital transformation, products, technology, AI, engineering and technology management.
                    </p>
                </motion.div>

                {/* Categories Bar */}
                <div className="py-8 mb-16 overflow-x-auto no-scrollbar scroll-smooth">
                    <div className="flex flex-nowrap items-center gap-3">
                        <button
                            className="px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors"
                            style={{ backgroundColor: "var(--t-text)", color: "var(--t-bg)" }}
                        >
                            All Perspectives
                        </button>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className="px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors hover:opacity-80"
                                style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-text)" }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Article Grid (2x2 Style) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-12 gap-y-20 pb-40">
                    {insights.map((article, i) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                        >
                            <Link href="#" className="group block focus:outline-none">

                                <div className="w-full aspect-[16/9] mb-8 rounded-[2rem] overflow-hidden relative" style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${article.gradient} transition-transform duration-1000 group-hover:scale-105`} />
                                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                                </div>

                                <div className="px-2">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--t-accent)" }}>{article.category}</span>
                                        <span className="text-sm" style={{ color: "var(--t-text-muted)" }}>{article.date}</span>
                                    </div>

                                    <h2 className="font-display text-3xl font-bold mb-4 group-hover:text-[var(--t-accent)] transition-colors leading-snug lg:h-[4.5rem] line-clamp-2" style={{ color: "var(--t-text)" }}>
                                        {article.title}
                                    </h2>

                                    <p className="text-lg leading-relaxed mb-6 line-clamp-3" style={{ color: "var(--t-text-muted)" }}>
                                        {article.summary}
                                    </p>

                                    <div className="flex items-center gap-3">
                                        {/* Tiny avatar block */}
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs" style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-text)" }}>
                                            {article.author.charAt(0)}
                                        </div>
                                        <span className="text-sm font-semibold" style={{ color: "var(--t-text)" }}>{article.author}</span>
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
