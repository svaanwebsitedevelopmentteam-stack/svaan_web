"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const challenges = [
    {
        id: "01",
        title: "Unclear direction",
        description:
            "When business goals, customer needs, and technology decisions are not aligned, it becomes difficult to know what to prioritize or where to begin.",
        cta: "Clarify the direction",
        href: "/contact",
    },
    {
        id: "02",
        title: "Disconnected strategy and execution",
        description:
            "A strategy only creates value when it can move into design, engineering, and delivery. We connect direction with a practical path forward.",
        cta: "Connect strategy to execution",
        href: "/contact",
    },
    {
        id: "03",
        title: "Digital experiences that need to work harder",
        description:
            "Products and digital platforms need to make sense for the people using them and the business operating them.",
        cta: "Improve the experience",
        href: "/contact",
    },
    {
        id: "04",
        title: "Technology that needs to evolve",
        description:
            "Technology should support change rather than become another source of complexity. We help organizations improve, modernize, and support technology over time.",
        cta: "Evolve your technology",
        href: "/contact",
    },
];

export function BusinessChallenges() {
    return (
        <section className="relative w-full bg-slate text-white py-24 md:py-32 overflow-hidden">

            {/* Dynamic Background Noise/Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-svaan-blue/20 via-slate to-slate pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto px-6 mb-20 md:mb-32 relative z-10"
            >
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl leading-tight">
                    Complex challenges need more than technology.
                </h2>
                <p className="text-xl md:text-2xl text-canvas/70 max-w-2xl leading-relaxed">
                    The right solution starts with understanding the problem. Whether the
                    challenge is strategic, digital, operational, or technical, we bring
                    the right perspectives together before moving into execution.
                </p>
            </motion.div>

            <div className="relative w-full max-w-7xl mx-auto px-6 h-[400vh] z-10">
                {/* We use highly calculated sticky positions for the cards */}
                {challenges.map((challenge, index) => {
                    const topOffset = `calc(15vh + ${index * 40}px)`;
                    return (
                        <div
                            key={challenge.id}
                            className="sticky w-full flex justify-end"
                            style={{ top: topOffset, height: "100vh" }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 100, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ margin: "-20%" }}
                                transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                                className="w-full lg:w-2/3 h-[50vh] md:h-[60vh] bg-white text-slate p-8 md:p-14 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between border border-white/20 origin-top"
                            >
                                <div>
                                    <div className="text-svaan-blue font-bold font-display text-xl mb-6">
                                        {challenge.id}
                                    </div>
                                    <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 max-w-xl">
                                        {challenge.title}
                                    </h3>
                                    <p className="text-lg md:text-xl text-slate/70 max-w-xl leading-relaxed">
                                        {challenge.description}
                                    </p>
                                </div>

                                <div>
                                    <Link
                                        href={challenge.href}
                                        className="group inline-flex items-center text-svaan-blue font-semibold text-lg"
                                    >
                                        <span className="border-b-2 border-transparent group-hover:border-svaan-blue transition-colors">
                                            {challenge.cta}
                                        </span>
                                        <span className="ml-3 w-10 h-10 rounded-full bg-slate/5 flex items-center justify-center transition-all group-hover:bg-svaan-blue group-hover:text-white group-hover:scale-110">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </span>
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
