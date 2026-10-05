"use client";

import { motion } from "framer-motion";

import { Icons3D } from "@/components/ui/Icons3D";

const capabilities = [
    {
        title: "Strategy & Advisory",
        desc: "We define direction by connecting business objectives, market context, and technology opportunities into a clear, practical path forward.",
        icon: <Icons3D.Strategy className="w-16 h-16" />,
        videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-connection-lines-20358-large.mp4"
    },
    {
        title: "Product & Design",
        desc: "We shape digital products and experiences around real user needs, creating interfaces that are intuitive, accessible, and visually compelling.",
        icon: <Icons3D.Design className="w-16 h-16" />,
        videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-ink-swirling-in-water-32074-large.mp4"
    },
    {
        title: "Software Engineering",
        desc: "We build production-grade applications through disciplined engineering, modern architectures, and continuous delivery practices.",
        icon: <Icons3D.Software className="w-16 h-16" />,
        videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-keyboard-of-a-hacker-with-green-lines-of-code-41006-large.mp4"
    },
    {
        title: "AI & Automation",
        desc: "We integrate AI where it creates clear business value — from intelligent workflows and decision support to automated operations.",
        icon: <Icons3D.AI className="w-16 h-16" />,
        videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-sphere-with-lines-and-dots-31139-large.mp4"
    },
    {
        title: "Cloud & DevOps",
        desc: "We architect, migrate, and manage cloud infrastructure across AWS, Azure, and GCP with CI/CD pipelines and container orchestration.",
        icon: <Icons3D.Cloud className="w-16 h-16" />,
        videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-particles-floating-in-the-air-on-a-black-background-32860-large.mp4"
    },
    {
        title: "Managed Support",
        desc: "We provide continuous technology support — helpdesk, application, infrastructure, and production support to keep systems running.",
        icon: <Icons3D.Support className="w-16 h-16" />,
        videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-spinning-radar-screen-animation-32824-large.mp4"
    },
];

export function CapabilitiesGrid() {
    return (
        <section className="py-[120px]" style={{ borderTop: "1px solid var(--t-border)", borderBottom: "1px solid var(--t-border)" }}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
                    <div>
                        <div
                            className="inline-flex items-center justify-center px-3.5 py-1.5 mb-6 rounded-[var(--t-radius-sm)] border text-xs font-semibold tracking-wider uppercase relative z-10"
                            style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-text-muted)" }}
                        >
                            Our Expertise
                        </div>
                        <h2 className="type-h2 mb-4 relative z-10" style={{ color: "var(--t-text)" }}>
                            Capabilities that <br />
                            <span className="italic" style={{ color: "var(--t-accent)" }}>drive change.</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {capabilities.map((cap, idx) => (
                        <motion.div
                            key={cap.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: idx * 0.1 }}
                            className="group rounded-[var(--t-radius-card)] p-8 relative overflow-hidden flex flex-col transition-all duration-300 border hover:border-[var(--t-accent)] hover:shadow-md"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}
                        >

                            {/* Motion Graphics Video - set at very low opacity to act as an ambient texture for the Light/Dark theme card */}
                            <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-[0.15] mix-blend-luminosity pointer-events-none overflow-hidden transition-opacity duration-700">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover scale-[1.05] group-hover:scale-110 transition-transform duration-[3s]"
                                >
                                    <source src={cap.videoSrc} type="video/mp4" />
                                </video>
                            </div>

                            {/* Base Theme Gradient Overlay to soften the video edges */}
                            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                style={{ background: "linear-gradient(135deg, var(--t-gradient-from), transparent)" }} />


                            {/* Content Layer (Using native theme text variables) */}
                            <div className="relative z-20">
                                <motion.div
                                    className="w-16 h-16 rounded-[var(--t-radius-md)] flex items-center justify-center mb-5 transition-all duration-300 group-hover:-translate-y-1 shadow-sm"
                                    style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-accent)" }}
                                >
                                    {cap.icon}
                                </motion.div>
                            </div>

                            <div className="relative z-20 flex flex-col flex-grow">
                                <h3 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>
                                    {cap.title}
                                </h3>
                                <p className="leading-relaxed opacity-90" style={{ color: "var(--t-text-muted)" }}>
                                    {cap.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
