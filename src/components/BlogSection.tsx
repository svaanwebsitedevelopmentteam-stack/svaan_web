"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
    { title: "Why understanding business context matters before writing any code.", excerpt: "Useful takeaways for product and technology leaders navigating complex build decisions.", date: "Sep 2026", tag: "Strategy", href: "/insights/business-context-before-code", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" },
    { title: "Small technology decisions that quietly change the entire outcome.", excerpt: "A curated set of engineering patterns we return to often for clarity, consistency, and flow.", date: "Aug 2026", tag: "Engineering", href: "/insights/small-tech-decisions", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800" },
    { title: "The intersection of AI automation and legacy modernization.", excerpt: "Practical perspectives on integrating intelligence into systems that already exist.", date: "Jul 2026", tag: "AI", href: "/insights/ai-legacy-modernization", image: "https://images.unsplash.com/photo-1620912189865-1e8a33da4c5e?auto=format&fit=crop&q=80&w=800" },
];

export function BlogSection() {
    return (
        <section className="py-[60px]">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
                    <div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--t-text)" }}>From the blog</h2>
                        <p className="text-lg max-w-lg" style={{ color: "var(--t-text-muted)" }}>
                            We share practical insights on strategy, technology, AI, and digital transformation for business leaders.
                        </p>
                    </div>
                    <Link href="/insights"
                        className="group inline-flex items-center gap-3 h-12 px-8 rounded-full font-medium transition-all duration-300 flex-shrink-0"
                        style={{ border: "1px solid var(--t-border)", color: "var(--t-text)" }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--t-bg-surface)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
                    >
                        See All Posts
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {posts.map((post, i) => (
                        <motion.div key={post.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                            <Link href={post.href}
                                className="group block rounded-2xl overflow-hidden transition-all duration-500"
                                style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--t-accent)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--t-border)"; }}
                            >
                                <div className="relative h-48 overflow-hidden group/image" style={{ backgroundColor: "var(--t-bg-surface)" }}>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 opacity-80 mix-blend-overlay group-hover:opacity-40 transition-opacity duration-700"
                                        style={{ background: "linear-gradient(135deg, var(--t-gradient-from), var(--t-gradient-to))" }} />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold"
                                            style={{ backgroundColor: "var(--t-tag-bg)", border: "1px solid var(--t-tag-border)", color: "var(--t-tag-text)" }}>
                                            {post.tag}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="text-xs mb-3" style={{ color: "var(--t-text-muted)" }}>{post.date}</div>
                                    <h3 className="font-display text-lg font-bold mb-3 leading-snug group-hover:text-[var(--t-accent)] transition-colors" style={{ color: "var(--t-text)" }}>{post.title}</h3>
                                    <p className="text-sm leading-relaxed line-clamp-2" style={{ color: "var(--t-text-muted)" }}>{post.excerpt}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
