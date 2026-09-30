"use client";

import { motion } from "framer-motion";

const capabilities = [
    {
        icon: (
            <motion.svg className="w-7 h-7 drop-shadow-md" viewBox="0 0 24 24" fill="none"
                animate={{ rotate: [0, -3, 3, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                <defs>
                    <linearGradient id="c-strat" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#818cf8" />
                        <stop offset="100%" stopColor="#c084fc" />
                    </linearGradient>
                </defs>
                <path stroke="url(#c-strat)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
            </motion.svg>
        ),
        title: "Strategy & Advisory",
        desc: "We define direction by connecting business objectives, market context, and technology opportunities into a clear, practical path forward.",
    },
    {
        icon: (
            <motion.svg className="w-7 h-7 drop-shadow-md" viewBox="0 0 24 24" fill="none"
                animate={{ y: [0, 2, -2, 0], scale: [1, 1.03, 1] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}>
                <defs>
                    <linearGradient id="c-prod" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#34d399" />
                        <stop offset="100%" stopColor="#2dd4bf" />
                    </linearGradient>
                </defs>
                <path stroke="url(#c-prod)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
            </motion.svg>
        ),
        title: "Product & Design",
        desc: "We shape digital products and experiences around real user needs, creating interfaces that are intuitive, accessible, and visually compelling.",
    },
    {
        icon: (
            <motion.svg className="w-7 h-7 drop-shadow-md" viewBox="0 0 24 24" fill="none"
                animate={{ y: [0, -3, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                <defs>
                    <linearGradient id="c-sw" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fff" />
                        <stop offset="100%" stopColor="var(--t-accent)" />
                    </linearGradient>
                </defs>
                <path stroke="url(#c-sw)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </motion.svg>
        ),
        title: "Software Engineering",
        desc: "We build production-grade applications through disciplined engineering, modern architectures, and continuous delivery practices.",
    },
    {
        icon: (
            <motion.svg className="w-7 h-7 drop-shadow-md" viewBox="0 0 24 24" fill="none"
                animate={{ scale: [1, 0.95, 1], rotate: [0, 3, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                <defs>
                    <linearGradient id="c-ai" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#34d399" />
                        <stop offset="100%" stopColor="#fbbf24" />
                    </linearGradient>
                </defs>
                <path stroke="url(#c-ai)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
            </motion.svg>
        ),
        title: "AI & Automation",
        desc: "We integrate AI where it creates clear business value — from intelligent workflows and decision support to automated operations.",
    },
    {
        icon: (
            <motion.svg className="w-7 h-7 drop-shadow-md" viewBox="0 0 24 24" fill="none"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                <defs>
                    <linearGradient id="c-cloud" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#818cf8" />
                        <stop offset="100%" stopColor="var(--t-accent)" />
                    </linearGradient>
                </defs>
                <path stroke="url(#c-cloud)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
            </motion.svg>
        ),
        title: "Cloud & DevOps",
        desc: "We architect, migrate, and manage cloud infrastructure across AWS, Azure, and GCP with CI/CD pipelines and container orchestration.",
    },
    {
        icon: (
            <motion.svg className="w-7 h-7 drop-shadow-md" viewBox="0 0 24 24" fill="none"
                animate={{ scale: [1, 1.08, 1], rotate: [0, 0, -2, 2, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}>
                <defs>
                    <linearGradient id="c-manage" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fb7185" />
                        <stop offset="100%" stopColor="#fda4af" />
                    </linearGradient>
                </defs>
                <path stroke="url(#c-manage)" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </motion.svg>
        ),
        title: "Managed Support",
        desc: "We provide continuous technology support — helpdesk, application, infrastructure, and production support to keep systems running.",
    },
];

export function CapabilitiesGrid() {
    const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } };
    const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

    return (
        <section className="py-[60px]">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }} className="text-center mb-20">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--t-text)" }}>Our capabilities</h2>
                    <p className="text-lg max-w-lg mx-auto" style={{ color: "var(--t-text-muted)" }}>
                        The services we offer are tailored specifically to your unique needs, challenges, and business objectives.
                    </p>
                </motion.div>

                <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {capabilities.map((cap) => (
                        <motion.div key={cap.title} variants={item}
                            className="group rounded-2xl p-8 transition-all duration-500 cursor-default relative overflow-hidden"
                            style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--t-accent)"; }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--t-border)"; }}
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: "linear-gradient(135deg, var(--t-gradient-from), transparent)" }} />
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                                    style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-accent)" }}>
                                    {cap.icon}
                                </div>
                                <h3 className="font-display text-xl font-bold mb-3 group-hover:text-[var(--t-accent)] transition-colors" style={{ color: "var(--t-text)" }}>{cap.title}</h3>
                                <p className="text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{cap.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
