"use client";

import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";

const leaders = [
    {
        name: "Sai Ramamurthy",
        role: "Chief Executive Officer",
        bio: [
            "Sai Ramamurthy leads SVaaN Global Tech with a focus on business transformation, organizational design, and building systems that allow businesses to evolve beyond founder dependency. His approach begins with understanding the patterns, misalignments, and dependencies within a business before deciding what should be systemized, automated, or made autonomous.",
            "Before joining SVaaN as CEO, Sai built experience across business development, market analysis, financial planning, partner management, and organizational growth. He also founded NO TOXIC®, where he continues to focus on building systems around a clear set of principles.",
            "At SVaaN, Sai brings a business-first perspective to how strategy, technology, and organizational design come together."
        ],
        linkedin: "https://www.linkedin.com/in/sairamamurthy"
    },
    {
        name: "Dinesh Natarajan",
        role: "Founder",
        bio: [
            "Dinesh Natarajan founded SVaaN Global Tech with a focus on building a technology partner that remains accountable beyond go-live. With 17+ years of experience across network engineering, systems, IT service management, project management, technical support, and DevOps, he has worked across the technology lifecycle from infrastructure and operations to software delivery and support.",
            "SVaaN began with a single US application-support engagement in 2021 and has grown to a 60+ person team serving clients across the US, UAE, UK, and Canada. Dinesh's experience has shaped SVaaN's emphasis on application and helpdesk support, custom software development, AI integration, POC and MVP development, DevOps, and cloud-managed services.",
            "His approach is grounded in a simple principle: technology should not stop being owned when it goes live. SVaaN's role is to support, optimize, and scale the systems businesses depend on."
        ],
        linkedin: "https://www.linkedin.com/in/dineshnatarajan-"
    }
];

export default function LeadershipPage() {
    return (
        <main className="min-h-screen pt-[140px] pb-0 relative">
            {/* Background Orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 max-h-[80vh]">
                <motion.div
                    animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[10%] right-[10%] w-[700px] h-[700px] rounded-full blur-[250px]"
                    style={{ backgroundColor: "var(--t-accent)", opacity: "calc(var(--t-orb-opacity) * 0.8)" }}
                />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">

                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="pb-[60px] lg:pb-[60px] pt-8 w-full md:w-[80%]"
                >
                    <div className="inline-flex items-center gap-4 mb-8">
                        <div className="h-[1px] w-12" style={{ backgroundColor: "var(--t-accent)" }} />
                        <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--t-text-muted)" }}>Leadership</span>
                    </div>
                    <h1
                        className="font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-tight mb-8"
                        style={{ color: "var(--t-text)" }}
                    >
                        Meet the people responsible for shaping SVaaN&apos;s <span className="italic" style={{ color: "var(--t-accent)" }}>direction.</span>
                    </h1>
                </motion.div>

                {/* Leaders Section */}
                <div className="flex flex-col gap-24 pb-40">
                    {leaders.map((leader, index) => (
                        <div key={leader.name} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start border-t pt-16" style={{ borderColor: "var(--t-border)" }}>

                            {/* Left Col - Photo & Name Sticky */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7 }}
                                className="lg:col-span-4 lg:sticky top-32"
                            >
                                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 relative"
                                    style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}>
                                    <img
                                        src={index === 0 ? "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800" : "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"}
                                        alt={leader.name}
                                        className="w-full h-full object-cover filter grayscale-[30%] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                                <h2 className="font-display text-4xl font-bold mb-2" style={{ color: "var(--t-text)" }}>{leader.name}</h2>
                                <h3 className="text-xl font-medium mb-6" style={{ color: "var(--t-accent)" }}>{leader.role}</h3>

                                <a href={leader.linkedin} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
                                    style={{ color: "var(--t-text-muted)" }}>
                                    LinkedIn Profile
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </motion.div>

                            {/* Right Col - Bio */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className="lg:col-span-8"
                            >
                                <div className="space-y-8">
                                    {leader.bio.map((para, i) => (
                                        <p key={i} className="text-lg md:text-xl leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                                            {para}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>

                        </div>
                    ))}
                </div>

            </div>

            <CTASection />

        </main>
    );
}
