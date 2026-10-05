"use client";

import { motion } from "framer-motion";
import { Icons3D } from "@/components/ui/Icons3D";

export function TechStack() {
    const technologies = [
        {
            category: "Frontend & Mobile",
            desc: "Next.js, React, React Native, Vue",
            icon: <Icons3D.Mobile className="w-10 h-10" />,
            bg: "bg-blue-500/10"
        },
        {
            category: "Backend & Systems",
            desc: "Node.js, Python, Java, Go",
            icon: <Icons3D.Backend className="w-10 h-10" />,
            bg: "bg-blue-600/10"
        },
        {
            category: "Cloud Infrastructure",
            desc: "AWS, Google Cloud, Azure",
            icon: <Icons3D.CloudInfra className="w-10 h-10" />,
            bg: "bg-sky-500/10"
        },
        {
            category: "Data & ML",
            desc: "PostgreSQL, MongoDB, TensorFlow",
            icon: <Icons3D.DataTree className="w-10 h-10" />,
            bg: "bg-slate-500/10"
        },
        {
            category: "DevOps & Security",
            desc: "Kubernetes, Docker, CI/CD",
            icon: <Icons3D.DevOps className="w-10 h-10" />,
            bg: "bg-emerald-500/10"
        },
        {
            category: "Architecture",
            desc: "Microservices, Serverless, APIs",
            icon: <Icons3D.Microservices className="w-10 h-10" />,
            bg: "bg-blue-700/10"
        }
    ];

    return (
        <section className="relative w-full py-[100px] overflow-hidden">
            <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(var(--t-border) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-[var(--t-radius-sm)] border text-sm font-semibold"
                        style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)", color: "var(--t-text-muted)" }}
                    >
                        Technologies We Use
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="type-h2 mb-6"
                        style={{ color: "var(--t-text)" }}
                    >
                        The right tool for <span className="italic" style={{ color: "var(--t-accent)" }}>the right problem.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="type-body-lg"
                        style={{ color: "var(--t-text-muted)" }}
                    >
                        We operate across the modern technology stack, ensuring your architecture is built for performance, scalability, and long-term maintainability.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technologies.map((tech, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
                            whileHover={{ y: -5 }}
                            className="group relative p-8 rounded-[var(--t-radius-card)] shadow-sm hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300"
                            style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity transform scale-150 z-0 pointer-events-none grayscale">
                                {tech.icon}
                            </div>

                            <div className={`w-16 h-16 rounded-[var(--t-radius-md)] flex items-center justify-center mb-6 shadow-sm border ${tech.bg} relative z-10 transition-transform duration-500 group-hover:scale-110`} style={{ borderColor: 'var(--t-border)' }}>
                                {tech.icon}
                            </div>
                            <h3 className="type-h3 mb-3 relative z-10" style={{ color: "var(--t-text)" }}>{tech.category}</h3>
                            <p className="type-body relative z-10" style={{ color: "var(--t-text-muted)" }}>{tech.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
