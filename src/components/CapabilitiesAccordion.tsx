"use client";

import { useState } from "react";
import Link from "next/link";

const capabilities = [
    {
        id: "01",
        title: "Strategy & Advisory",
        description:
            "Clarify priorities, shape direction, and connect business decisions with technology.",
    },
    {
        id: "02",
        title: "Product & Experience",
        description:
            "Design digital products and experiences around customer needs and business goals.",
    },
    {
        id: "03",
        title: "Software & Technology",
        description:
            "Turn business direction into practical software, platforms, and technology solutions.",
    },
    {
        id: "04",
        title: "AI & Automation",
        description:
            "Identify and implement appropriate AI and automation opportunities that create meaningful value.",
    },
    {
        id: "05",
        title: "Engineering & Delivery",
        description:
            "Build, integrate, test, and deliver technology with a focus on reliability and practical outcomes.",
    },
    {
        id: "06",
        title: "Managed Technology",
        description:
            "Support technology beyond launch so platforms can remain useful, secure, and ready to evolve.",
    },
];

export function CapabilitiesAccordion() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="w-full bg-white py-[60px] md:py-[60px] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <h2 className="type-h2 text-slate max-w-3xl">
                    Capabilities connected around your challenge.
                </h2>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Accordion Container */}
                <div className="flex flex-col md:flex-row h-[700px] md:h-[500px] gap-2 md:gap-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                    {capabilities.map((cap, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <div
                                key={cap.id}
                                role="button"
                                tabIndex={0}
                                aria-expanded={isActive}
                                onClick={() => setActiveIndex(index)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        setActiveIndex(index);
                                    }
                                }}
                                className={`group relative overflow-hidden rounded-[var(--t-radius-card)] cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-svaan-blue ${isActive
                                        ? "flex-[4] bg-slate text-white shadow-2xl"
                                        : "flex-[1] bg-canvas text-slate hover:bg-slate/5"
                                    } flex flex-col`}
                            >
                                {/* Horizontal configuration layout */}
                                <div className="flex h-full p-6 md:p-8">
                                    {/* Left Column (Index & Sideways Title if contracted) */}
                                    <div className="flex flex-col justify-between h-full min-w-[30px] md:min-w-[40px]">
                                        <span
                                            className={`font-display font-bold text-lg ${isActive ? "text-svaan-blue" : "text-slate/40"
                                                }`}
                                        >
                                            {cap.id}
                                        </span>

                                        {!isActive && (
                                            <div className="hidden md:flex flex-1 items-end pb-8">
                                                <span className="whitespace-nowrap -rotate-90 origin-bottom-left font-display font-bold text-xl opacity-60 tracking-wider">
                                                    {cap.title}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Expanded Content */}
                                    <div
                                        className={`flex flex-col justify-between h-full pl-6 md:pl-10 transition-all duration-700 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12 hidden md:flex"
                                            }`}
                                    >
                                        <div className="mt-8 md:mt-12">
                                            <h3 className="type-h3 mb-6 whitespace-normal text-white">
                                                {cap.title}
                                            </h3>
                                            <p className="type-body text-white/80 max-w-lg leading-relaxed">
                                                {cap.description}
                                            </p>
                                        </div>

                                        <div className="mb-4">
                                            {/* Placeholder for vector diagram - minimal lines representing tech */}
                                            <svg
                                                className="w-16 h-16 text-svaan-blue/80 mb-6"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1}
                                                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                                />
                                            </svg>

                                            <Link
                                                href={`/capabilities/${cap.title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                                                onClick={(e) => e.stopPropagation()}
                                                className="inline-flex items-center justify-center rounded-[var(--t-radius-btn)] bg-svaan-blue hover:bg-[#005FA3] text-white px-6 h-11 font-medium transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-svaan-blue focus-visible:ring-offset-2"
                                            >
                                                Explore Capability
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="flex justify-center mt-16">
                    <Link
                        href="/capabilities"
                        className="inline-flex items-center text-slate font-semibold text-lg hover:text-svaan-blue hover:underline underline-offset-4 transition-colors"
                    >
                        Explore all 6 capabilities
                        <svg
                            className="w-5 h-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
