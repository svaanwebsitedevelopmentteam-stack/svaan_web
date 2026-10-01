"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";

import { Icons3D } from "@/components/ui/Icons3D";

const categories = [
    {
        num: "01",
        title: "Strategy & Advisory",
        desc: "We define direction by connecting business objectives, market context, and technology opportunities into a clear, practical path forward.",
        services: [
            { label: "POC Development", slug: "poc-development", desc: "Validate the idea before making the larger investment." }
        ],
        icon: <Icons3D.Strategy className="w-16 h-16 drop-shadow-xl" />
    },
    {
        num: "02",
        title: "Product & Experience",
        desc: "We shape digital products and experiences around real user needs, creating interfaces that are intuitive, accessible, and visually compelling.",
        services: [
            { label: "UI/UX Design", slug: "ui-ux-design", desc: "Design connecting user needs with product requirements." },
            { label: "MVP Development", slug: "mvp-development", desc: "Turn a product idea into something real enough to learn from." }
        ],
        icon: <Icons3D.Design className="w-16 h-16 drop-shadow-xl" />
    },
    {
        num: "03",
        title: "Software & Technology",
        desc: "We build production-grade applications through disciplined engineering, modern architectures, and continuous delivery practices.",
        services: [
            { label: "Software Product Development", slug: "software-product-development", desc: "Build software around the way your business needs to work." },
            { label: "Enterprise Software Development", slug: "enterprise-software-development", desc: "Build technology that supports complex business operations." }
        ],
        icon: <Icons3D.Software className="w-16 h-16 drop-shadow-xl" />
    },
    {
        num: "04",
        title: "AI & Automation",
        desc: "We integrate AI where it creates clear business value — from intelligent workflows and decision support to automated operations.",
        services: [
            { label: "AI Software Development", slug: "ai-software-development", desc: "Apply AI to real business problems securely and efficiently." }
        ],
        icon: <Icons3D.AI className="w-16 h-16 drop-shadow-xl" />
    },
    {
        num: "05",
        title: "Engineering & Delivery",
        desc: "We build confidence into every release through disciplined assurance practices and reliable delivery pipelines.",
        services: [
            { label: "Quality Assurance", slug: "quality-assurance", desc: "Build confidence into every release ensuring software behaves as expected." }
        ],
        icon: <Icons3D.ProcessBuild className="w-16 h-16 drop-shadow-xl" />
    },
    {
        num: "06",
        title: "Managed Technology Services",
        desc: "We architect, migrate, and actively manage your infrastructure. From end-user support to complex cloud orchestration.",
        services: [
            { label: "Helpdesk / Support", slug: "helpdesk-support", desc: "Keep people productive when technology gets in the way." },
            { label: "Application Support", slug: "application-support", desc: "Keep business-critical applications stable and useful." },
            { label: "Infrastructure Support", slug: "infrastructure-support", desc: "Keep the technology foundation dependable." },
            { label: "Production Support", slug: "production-support", desc: "Protect the reliability of live environments." },
            { label: "DevOps Support", slug: "devops-support", desc: "Make software delivery more consistent and efficient." },
            { label: "Cloud Managed Services", slug: "cloud-managed-services", desc: "Manage environments for performance and growth." }
        ],
        icon: <Icons3D.CloudInfra className="w-16 h-16 drop-shadow-xl" />
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen pt-[140px] pb-0 relative overflow-x-clip">
            {/* Background Orbs */}
            <div className="absolute top-0 left-0 right-0 h-screen pointer-events-none overflow-hidden z-0">
                <motion.div
                    animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full blur-[180px]"
                    style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }}
                />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">

                {/* Services Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="pb-[60px] lg:pb-[60px] pt-8 w-full md:w-[80%]"
                >
                    <div className="inline-flex items-center gap-4 mb-8">
                        <div className="h-[1px] w-12" style={{ backgroundColor: "var(--t-accent)" }} />
                        <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--t-text-muted)" }}>Our Capabilities</span>
                    </div>
                    <h1
                        className="font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-tight mb-8"
                        style={{ color: "var(--t-text)" }}
                    >
                        End-to-end solutions for <span className="italic" style={{ color: "var(--t-accent)" }}>complex challenges.</span>
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed max-w-3xl" style={{ color: "var(--t-text-muted)" }}>
                        We bring together specialized teams in strategy, design, and engineering to deliver digital products that scale and perform.
                    </p>
                </motion.div>

                {/* Deep Dive Services List (Sticky Scroll Layout) */}
                <div className="flex flex-col gap-32 pb-[60px]">
                    {categories.map((category, i) => (
                        <div key={category.num} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                            {/* Left Column - Sticky Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7 }}
                                className="lg:col-span-5 lg:sticky top-32"
                            >
                                <div className="flex items-center gap-6 mb-8">
                                    <div
                                        className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300"
                                        style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-accent)" }}
                                    >
                                        {category.icon}
                                    </div>
                                    <span className="font-display text-4xl lg:text-5xl font-bold opacity-30" style={{ color: "var(--t-text)" }}>
                                        {category.num}
                                    </span>
                                </div>
                                <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight mb-6" style={{ color: "var(--t-text)" }}>
                                    {category.title}
                                </h2>
                                <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--t-text-muted)" }}>
                                    {category.desc}
                                </p>
                            </motion.div>

                            {/* Right Column - Deep Details & Benefits */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className="lg:col-span-7"
                            >
                                <div
                                    className="rounded-3xl p-8 lg:p-10 relative overflow-hidden h-full flex flex-col gap-4"
                                    style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}
                                >
                                    <div className="absolute inset-0 opacity-100 pointer-events-none"
                                        style={{ background: "linear-gradient(135deg, var(--t-gradient-from), transparent)" }} />

                                    <div className="relative z-10 flex flex-col gap-4">
                                        <h3 className="text-base font-bold uppercase tracking-widest mb-4" style={{ color: "var(--t-text-muted)" }}>Specific Services</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {category.services.map((service) => (
                                                <Link
                                                    key={service.slug}
                                                    href={`/services/${service.slug}`}
                                                    className="group flex flex-col gap-2 p-5 rounded-2xl transition-all duration-300 relative overflow-hidden"
                                                    style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)" }}
                                                >
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-lg font-bold" style={{ color: "var(--t-text)" }}>
                                                            {service.label}
                                                        </span>
                                                        <span className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: "var(--t-bg-card)", color: "var(--t-accent)" }}>
                                                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <span className="text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{service.desc}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Engagement Models */}
                <div className="py-[60px] border-t" style={{ borderColor: "var(--t-border)" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6" style={{ color: "var(--t-text)" }}>How we work with you</h2>
                        <p className="text-lg mx-auto max-w-2xl" style={{ color: "var(--t-text-muted)" }}>
                            We adapt to your organizational structure, providing engagement models that align precisely with your goals and timelines.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "Dedicated Team", desc: "A cross-functional squad fully integrated into your business for long-term continuous delivery." },
                            { title: "Project Based", desc: "End-to-end execution of a specific mandate with a fixed scope, budget, and defined timelines." },
                            { title: "Staff Augmentation", desc: "Specialized engineering or design talent injected directly into your existing internal teams." }
                        ].map((model, i) => (
                            <motion.div
                                key={model.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="rounded-2xl p-8"
                                style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)" }}
                            >
                                <h3 className="font-display font-bold text-xl mb-3" style={{ color: "var(--t-text)" }}>{model.title}</h3>
                                <p className="leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{model.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Reused CTA Section */}
            <CTASection />

        </main>
    );
}
