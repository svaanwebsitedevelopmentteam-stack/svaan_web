"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const services = [
    "AI Software Development",
    "POC Development",
    "MVP Development",
    "UI/UX Design",
    "Software Product Development",
    "Enterprise Software Development",
    "Quality Assurance",
    "Helpdesk / End-User Support",
    "Application Support",
    "Infrastructure Support",
    "Production Support",
    "DevOps Support",
    "Cloud Managed Services",
];

export function ServicesGrid() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.05 },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300 } },
    };

    return (
        <section className="w-full bg-canvas py-[60px] md:py-[60px] relative overflow-hidden">

            {/* Background Decorators */}
            <div className="absolute -left-40 top-40 w-96 h-96 bg-svaan-blue/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col md:flex-row md:justify-between items-start md:items-end gap-10"
                >
                    <div className="max-w-2xl">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-slate leading-tight mb-6">
                            Explore the services behind our capabilities.
                        </h2>
                        <p className="text-xl text-slate/70 leading-relaxed max-w-xl">
                            Our services sit within six capabilities. This makes it easier to
                            understand not only what we do, but why a service may be relevant
                            to a particular business challenge.
                        </p>
                    </div>
                    <Link
                        href="/services"
                        className="group hidden sm:inline-flex items-center justify-center rounded-full bg-white text-slate border border-slate/10 px-8 h-14 font-medium shadow-sm transition-all hover:bg-slate hover:text-white hover:border-slate hover:-translate-y-1 hover:shadow-xl"
                    >
                        Explore all services
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
                >
                    {services.map((service) => (
                        <motion.div variants={item} key={service}>
                            <Link
                                href={`/services/${service.toLowerCase().replace(/\s*\/\s*/g, "-").replace(/\s+/g, "-")}`}
                                className="group relative bg-white rounded-2xl p-6 md:p-8 border border-transparent shadow-sm hover:shadow-2xl hover:shadow-slate/10 transition-all duration-300 flex items-center justify-between overflow-hidden block"
                            >
                                {/* 2px SVaaN Blue keyline marker on left edge revealed on hover */}
                                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-svaan-blue transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0" />

                                <h3 className="font-display font-semibold text-lg md:text-xl text-slate pr-8 transition-transform duration-300 group-hover:translate-x-2">
                                    {service}
                                </h3>

                                <div className="absolute right-6 text-slate/20 transition-all duration-300 group-hover:text-svaan-blue group-hover:translate-x-1">
                                    <ChevronRight className="w-6 h-6" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mobile CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 flex justify-center sm:hidden"
                >
                    <Link
                        href="/services"
                        className="group inline-flex w-full items-center justify-center rounded-full bg-slate text-white border border-slate/10 px-8 h-14 font-medium transition-all"
                    >
                        Explore all services
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
