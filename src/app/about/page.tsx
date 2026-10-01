"use client";

import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";

import { Icons3D } from "@/components/ui/Icons3D";

const beliefs = [
    {
        title: "Think beyond the requirement.",
        desc: "The stated requirement is often only the starting point. We look for the business problem behind it.",
        icon: Icons3D.Strategy
    },
    {
        title: "Connect business and technology.",
        desc: "Technology decisions should support business direction, customer needs, and operational realities.",
        icon: Icons3D.Software
    },
    {
        title: "Make complexity easier to navigate.",
        desc: "Good collaboration starts with making complex situations easier to understand.",
        icon: Icons3D.DataTree
    },
    {
        title: "Design for long-term value",
        desc: "Solutions should be useful beyond launch and able to evolve with the organization.",
        icon: Icons3D.Design
    },
    {
        title: "Keep evolving",
        desc: "Technology, markets, and business needs change. Our way of working should evolve with them.",
        icon: Icons3D.DevOps
    }
];



export default function CompanyPage() {
    return (
        <main className="min-h-screen pt-[140px] pb-0 relative bg-[var(--t-bg)] border-t border-[var(--t-border)] overflow-x-clip">
            {/* Abstract Grid background to simulate a highly structured blueprint feel */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">

                {/* Company Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="pb-[60px] lg:pb-[60px] pt-8 w-full md:w-[80%]"
                >
                    <div className="inline-flex items-center gap-4 mb-8">
                        <div className="h-[1px] w-12" style={{ backgroundColor: "var(--t-accent)" }} />
                        <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--t-text-muted)" }}>About SVaaN</span>
                    </div>
                    <h1
                        className="font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-tight mb-8"
                        style={{ color: "var(--t-text)" }}
                    >
                        We connect strategy and technology to create <span className="italic" style={{ color: "var(--t-accent)" }}>meaningful progress.</span>
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed max-w-3xl" style={{ color: "var(--t-text-muted)" }}>
                        SVaaN Global Tech helps organizations understand complex challenges, shape the right direction, and turn that direction into practical technology-driven outcomes.
                    </p>
                </motion.div>

                {/* Foundation: Purpose, Vision, Mission */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-40">
                    {[
                        {
                            title: "Purpose",
                            text: "Turn complexity into clarity, and ideas into meaningful progress through strategy and technology."
                        },
                        {
                            title: "Vision",
                            text: "Help organizations move forward with clarity, confidence, and technology that creates meaningful progress."
                        },
                        {
                            title: "Mission",
                            text: "Help organizations solve meaningful business challenges by connecting strategy, design, and technology into practical solutions that create lasting value."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="p-10 rounded-[2rem] flex flex-col"
                            style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}
                        >
                            <h3 className="font-display text-2xl font-bold mb-6" style={{ color: "var(--t-accent)" }}>{item.title}</h3>
                            <p className="leading-relaxed text-lg flex-grow" style={{ color: "var(--t-text)" }}>{item.text}</p>
                        </motion.div>
                    ))}
                </div>

                {/* What We Believe - Asymmetrical Masonry List */}
                <div className="mb-40 border-t pt-[60px]" style={{ borderColor: "var(--t-border)" }}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        <div className="lg:col-span-4">
                            <h2 className="font-display text-4xl md:text-5xl font-bold sticky top-32" style={{ color: "var(--t-text)" }}>What We Believe</h2>
                        </div>

                        <div className="lg:col-span-8 flex flex-col gap-12">
                            {beliefs.map((belief, i) => (
                                <motion.div
                                    key={belief.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="p-8 md:p-12 rounded-3xl group transition-all duration-300"
                                    style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)" }}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-4">
                                        <div className="w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)", color: "var(--t-accent)" }}>
                                            <belief.icon className="w-10 h-10 drop-shadow-md" />
                                        </div>
                                        <h3 className="font-display text-2xl md:text-3xl font-bold transition-colors duration-300 group-hover:text-[var(--t-accent)]" style={{ color: "var(--t-text)" }}>
                                            {belief.title}
                                        </h3>
                                    </div>
                                    <p className="text-xl leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                                        {belief.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* How We Work Ribbon */}
                <div className="mb-40 py-20 rounded-[3rem] overflow-hidden relative text-center px-6" style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 pointer-events-none" />
                    <h2 className="font-display text-3xl font-bold mb-8 relative z-10" style={{ color: "var(--t-text)" }}>Our work follows a simple principle:</h2>

                    <div className="relative z-10 flex flex-wrap justify-center items-center gap-4 md:gap-8 font-display text-xl md:text-3xl font-bold" style={{ color: "var(--t-accent)" }}>
                        <span>Understand</span>
                        <svg className="w-5 h-5 mx-0 md:mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        <span>Strategize</span>
                        <svg className="w-5 h-5 mx-0 md:mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        <span>Design</span>
                        <svg className="w-5 h-5 mx-0 md:mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        <span>Build</span>
                        <svg className="w-5 h-5 mx-0 md:mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        <span>Evolve</span>
                    </div>
                    <p className="mt-8 text-lg max-w-2xl mx-auto relative z-10" style={{ color: "var(--t-text-muted)" }}>
                        We use this journey to connect strategic thinking with practical technology delivery.
                    </p>
                </div>



            </div>

            <CTASection />

        </main>
    );
}
