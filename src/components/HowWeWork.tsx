"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HowWeWork() {
    const stages = [
        {
            id: "01",
            title: "Understand",
            description:
                "We begin with the problem, the people, the business context, and the constraints.",
            span: "md:col-span-4",
        },
        {
            id: "02",
            title: "Strategize",
            description:
                "We define priorities, opportunities, and a practical direction.",
            span: "md:col-span-2",
        },
        {
            id: "03",
            title: "Design",
            description:
                "We shape experiences, products, and solutions around real needs.",
            span: "md:col-span-2",
        },
        {
            id: "04",
            title: "Build",
            description:
                "We turn the direction into working technology through disciplined engineering and delivery.",
            span: "md:col-span-2",
        },
        {
            id: "05",
            title: "Evolve",
            description:
                "We learn from what is delivered and improve it as business needs change.",
            span: "md:col-span-2",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 200, damping: 20 } },
    };

    return (
        <section className="w-full bg-canvas py-[60px] md:py-40 relative overflow-hidden">

            {/* Decorative SVG Orbit */}
            <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                className="absolute -top-40 -right-40 w-[800px] h-[800px] text-slate/[0.02] pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" strokeDasharray="4 4" />
                <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" fill="none" />
            </motion.svg>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Intro Section - What SVaaN Does */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col md:flex-row md:justify-between items-start md:items-end gap-10 mb-20"
                >
                    <div className="max-w-2xl">
                        <div className="uppercase tracking-widest text-sm font-semibold text-svaan-blue mb-4">
                            What SVaaN Does
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-slate leading-tight font-display mb-6">
                            From business challenge to meaningful progress.
                        </h2>
                        <p className="text-xl text-slate/70 leading-relaxed max-w-xl">
                            SVaaN connects strategy, design, and technology so organizations
                            can move from uncertainty to a clearer direction and from
                            direction to practical execution. We can help at the beginning of
                            a challenge, during delivery, or after a solution is already live.
                        </p>
                    </div>
                    <Link
                        href="/approach"
                        className="group inline-flex items-center justify-center rounded-full bg-slate text-white px-8 h-14 font-medium transition-all hover:bg-slate/90 hover:-translate-y-1 shadow-xl hover:shadow-2xl"
                    >
                        See how we work
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>

                {/* Bento Grid - How We Work */}
                <div className="mb-10">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="font-display text-2xl md:text-3xl font-bold text-slate mb-8"
                    >
                        Understand. Strategize. Design. Build. Evolve.
                    </motion.h2>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[250px]"
                    >
                        {stages.map((stage) => (
                            <motion.div
                                variants={itemVariants}
                                key={stage.id}
                                className={`group bg-white rounded-3xl p-8 md:p-10 border border-slate/5 shadow-sm hover:shadow-2xl hover:shadow-svaan-blue/10 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden relative ${stage.span}`}
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-4 -translate-y-4 group-hover:scale-150 group-hover:rotate-12 transition-all duration-700 pointer-events-none">
                                    <span className="font-display font-bold text-9xl">{stage.id}</span>
                                </div>
                                <div className="text-svaan-blue font-bold font-display text-lg mb-4 relative z-10">
                                    {stage.id}
                                </div>
                                <div className="relative z-10">
                                    <h3 className="font-display text-2xl md:text-3xl font-bold text-slate mb-3 group-hover:text-svaan-blue transition-colors">
                                        {stage.title}
                                    </h3>
                                    <p className="text-slate/70 text-lg leading-relaxed max-w-md">
                                        {stage.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-12"
                >
                    <Link
                        href="/approach"
                        className="group inline-flex items-center text-svaan-blue font-semibold text-lg hover:underline underline-offset-4"
                    >
                        Explore our continuous approach
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
