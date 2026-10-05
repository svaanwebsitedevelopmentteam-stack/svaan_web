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
                        className="type-display mb-8"
                        style={{ color: "var(--t-text)" }}
                    >
                        We connect strategy and technology to create <span className="italic" style={{ color: "var(--t-accent)" }}>meaningful progress.</span>
                    </h1>
                    <p className="type-body-lg max-w-3xl" style={{ color: "var(--t-text-muted)" }}>
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
                            className="p-10 rounded-[var(--t-radius-card)] flex flex-col"
                            style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}
                        >
                            <h3 className="type-h3 mb-6" style={{ color: "var(--t-accent)" }}>{item.title}</h3>
                            <p className="type-body flex-grow" style={{ color: "var(--t-text)" }}>{item.text}</p>
                        </motion.div>
                    ))}
                </div>

                {/* What We Believe - Asymmetrical Masonry List */}
                <div className="mb-40 border-t pt-[60px]" style={{ borderColor: "var(--t-border)" }}>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        <div className="lg:col-span-4">
                            <h2 className="type-h2 sticky top-32" style={{ color: "var(--t-text)" }}>What We Believe</h2>
                        </div>

                        <div className="lg:col-span-8 flex flex-col gap-12">
                            {beliefs.map((belief, i) => (
                                <motion.div
                                    key={belief.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="p-8 md:p-12 rounded-[var(--t-radius-card)] group transition-all duration-300"
                                    style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)" }}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-4">
                                        <div className="w-16 h-16 shrink-0 rounded-[var(--t-radius-md)] flex items-center justify-center" style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)", color: "var(--t-accent)" }}>
                                            <belief.icon className="w-10 h-10 drop-shadow-md" />
                                        </div>
                                        <h3 className="type-h3 transition-colors duration-300 group-hover:text-[var(--t-accent)]" style={{ color: "var(--t-text)" }}>
                                            {belief.title}
                                        </h3>
                                    </div>
                                    <p className="type-body" style={{ color: "var(--t-text-muted)" }}>
                                        {belief.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* How We Work Ribbon (Cinematic Pipeline) */}
                <div className="mb-40 py-24 rounded-[var(--t-radius-card)] overflow-hidden relative border" style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent)] pointer-events-none" />

                    <div className="text-center mb-20 relative z-10 px-6">
                        <h2 className="type-h2 mb-6" style={{ color: "var(--t-text)" }}>Our work follows a simple principle</h2>
                        <p className="mt-4 type-body-lg max-w-2xl mx-auto" style={{ color: "var(--t-text-muted)" }}>
                            We use this journey to connect strategic thinking with practical technology delivery.
                        </p>
                    </div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-10 xl:px-20 gap-10 lg:gap-4 font-display">
                        {/* Horizontal Connection Line (Desktop isolated) */}
                        {/* <div className="hidden lg:block absolute top-[30%] left-[30px] right-[30px] h-[2px] -translate-y-1/2 opacity-20" style={{ backgroundColor: "var(--t-accent)" }} /> */}

                        {[
                            { name: "Understand", icon: Icons3D.ProcessDiscover },
                            { name: "Strategize", icon: Icons3D.ProcessShape },
                            { name: "Design", icon: Icons3D.ProcessPrototype },
                            { name: "Build", icon: Icons3D.ProcessBuild },
                            { name: "Evolve", icon: Icons3D.Support },
                        ].map((step, i) => (
                            <motion.div
                                key={step.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="group relative flex flex-col items-center w-full lg:w-48 bg-transparent"
                            >
                                {/* 3D Icon Card */}
                                <div className="w-28 h-28 md:w-32 md:h-32 rounded-[var(--t-radius-md)] flex items-center justify-center mb-8 relative transition-all duration-500 ease-out group-hover:-translate-y-4 shadow-xl group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] backdrop-blur-3xl" style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}>
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500" style={{ backgroundColor: "var(--t-accent)" }} />
                                    <step.icon className="w-14 h-14 md:w-16 md:h-16 relative z-10" />
                                </div>

                                {/* Typography */}
                                <div className="flex flex-col items-center bg-[var(--t-bg-surface)] px-4 py-2 relative z-10">
                                    <span className="text-xs font-bold uppercase tracking-widest opacity-40 mb-2 transition-opacity group-hover:opacity-100" style={{ color: "var(--t-accent)" }}>
                                        Step 0{i + 1}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold transition-colors duration-300 group-hover:text-[var(--t-accent)]" style={{ color: "var(--t-text)" }}>
                                        {step.name}
                                    </h3>
                                </div>

                                {/* Flow Node indicator (anchors to line) */}
                                <div className="hidden lg:block absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-150 z-20" style={{ backgroundColor: "var(--t-bg)", borderColor: "var(--t-accent)" }} />
                            </motion.div>
                        ))}
                    </div>
                </div>



            </div>

            <CTASection />

        </main>
    );
}
