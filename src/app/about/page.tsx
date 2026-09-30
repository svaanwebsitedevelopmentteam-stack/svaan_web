"use client";

import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";

const beliefs = [
    {
        title: "Think beyond the requirement.",
        desc: "The stated requirement is often only the starting point. We look for the business problem behind it."
    },
    {
        title: "Connect business and technology.",
        desc: "Technology decisions should support business direction, customer needs, and operational realities."
    },
    {
        title: "Make complexity easier to navigate.",
        desc: "Good collaboration starts with making complex situations easier to understand."
    },
    {
        title: "Design for long-term value",
        desc: "Solutions should be useful beyond launch and able to evolve with the organization."
    },
    {
        title: "Keep evolving",
        desc: "Technology, markets, and business needs change. Our way of working should evolve with them."
    }
];

const leaders = [
    {
        name: "Sai Ramamurthy",
        title: "Chief Executive Officer",
        bio: [
            "Sai Ramamurthy leads SVaaN Global Tech with a focus on business transformation, organizational design, and building systems that allow businesses to evolve beyond founder dependency. His approach begins with understanding the patterns, misalignments, and dependencies within a business before deciding what should be systemized, automated, or made autonomous.",
            "Before joining SVaaN as CEO, Sai built experience across business development, market analysis, financial planning, partner management, and organizational growth. He also founded NO TOXIC®, where he continues to focus on building systems around a clear set of principles.",
            "At SVaaN, Sai brings a business-first perspective to how strategy, technology, and organizational design come together."
        ],
        linkedin: "https://www.linkedin.com/in/sairamamurthy"
    },
    {
        name: "Dinesh Natarajan",
        title: "Founder",
        bio: [
            "Dinesh Natarajan founded SVaaN Global Tech with a focus on building a technology partner that remains accountable beyond go-live. With 17+ years of experience across network engineering, systems, IT service management, project management, technical support, and DevOps, he has worked across the technology lifecycle from infrastructure and operations to software delivery and support.",
            "SVaaN began with a single US application-support engagement in 2021 and has grown to a 60+ person team serving clients across the US, UAE, UK, and Canada. Dinesh's experience has shaped SVaaN's emphasis on application and helpdesk support, custom software development, AI integration, POC and MVP development, DevOps, and cloud-managed services.",
            "His approach is grounded in a simple principle: technology should not stop being owned when it goes live. SVaaN's role is to support, optimize, and scale the systems businesses depend on."
        ],
        linkedin: "https://www.linkedin.com/in/dineshnatarajan-"
    }
];

export default function CompanyPage() {
    return (
        <main className="min-h-screen pt-[140px] pb-0 relative bg-[var(--t-bg)] border-t border-[var(--t-border)]">
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
                                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 transition-colors duration-300 group-hover:text-[var(--t-accent)]" style={{ color: "var(--t-text)" }}>
                                        {belief.title}
                                    </h3>
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

                {/* Leadership */}
                <div className="mb-32">
                    <div className="mb-16 md:mb-24">
                        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--t-text)" }}>Leadership</h2>
                        <p className="text-xl leading-relaxed max-w-2xl" style={{ color: "var(--t-text-muted)" }}>
                            Meet the people responsible for shaping SVaaN&apos;s direction and the way we work.
                        </p>
                    </div>

                    <div className="flex flex-col gap-12 md:gap-20">
                        {leaders.map((leader, index) => (
                            <div key={leader.name} className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
                                {/* Profile Photo Placeholder (Using gradient + glass) */}
                                <div className="lg:col-span-4 aspect-square rounded-[2rem] overflow-hidden relative" style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}>
                                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/20 to-blue-600/30 blur-sm" />
                                    {/* Monogram Fallback */}
                                    <div className="absolute inset-0 flex items-center justify-center font-display text-7xl font-bold" style={{ color: "var(--t-text)", opacity: 0.2 }}>
                                        {leader.name.split(" ").map(n => n.charAt(0)).join("")}
                                    </div>
                                </div>

                                {/* Bio Content */}
                                <div className="lg:col-span-8">
                                    <h3 className="font-display text-3xl font-bold mb-2" style={{ color: "var(--t-text)" }}>{leader.name}</h3>
                                    <p className="text-lg font-bold uppercase tracking-widest mb-10" style={{ color: "var(--t-accent)" }}>{leader.title}</p>

                                    <div className="space-y-6 mb-10">
                                        {leader.bio.map((paragraph, i) => (
                                            <p key={i} className="text-lg leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{paragraph}</p>
                                        ))}
                                    </div>

                                    <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 font-semibold hover:opacity-75 transition-opacity" style={{ color: "var(--t-text)" }}>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                        LinkedIn Profile
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <CTASection />

        </main>
    );
}
