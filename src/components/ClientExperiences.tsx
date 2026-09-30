"use client";

import { useState } from "react";
import Link from "next/link";

const testimonials = [
    {
        id: 1,
        quote:
            "SVaaN helped us clarify our strategic direction before a single line of code was written. Their ability to connect business objectives with practical technology architecture drastically reduced our time to market.",
        author: "Chief Technology Officer",
        company: "Global FinTech SaaS",
    },
    {
        id: 2,
        quote:
            "The modernization of our core platforms was handled with incredible discipline. They didn't just rebuild our software—they ensured the digital experience made sense for both our users and our operations team.",
        author: "VP of Digital Transformation",
        company: "Enterprise Healthcare Network",
    },
    {
        id: 3,
        quote:
            "What separates SVaaN is their commitment beyond the initial build. Their managed technology support has allowed our internal teams to focus on growth while they seamlessly handle infrastructure evolution.",
        author: "Director of Operations",
        company: "National Logistics Provider",
    },
];

export function ClientExperiences() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    return (
        <section className="w-full bg-white py-24 md:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-10 text-slate">
                <div className="max-w-2xl">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Experiences from organizations we work with.
                    </h2>
                    <p className="text-xl text-slate/70 leading-relaxed max-w-xl">
                        Read approved client feedback and experiences from engagements across
                        software delivery, digital products, and technology support.
                    </p>
                </div>
                <Link
                    href="/work"
                    className="group inline-flex items-center justify-center rounded-full bg-slate text-white px-8 h-14 font-medium transition-all hover:bg-slate/90"
                >
                    View client experiences
                </Link>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative">
                <div className="relative min-h-[400px] flex items-center">
                    {testimonials.map((testimonial, index) => {
                        const isActive = index === currentIndex;
                        return (
                            <div
                                key={testimonial.id}
                                className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${isActive
                                        ? "opacity-100 translate-x-0 cursor-default"
                                        : "opacity-0 translate-x-12 pointer-events-none"
                                    }`}
                            >
                                <div className="flex flex-col lg:flex-row gap-10 md:gap-16 lg:items-center">
                                    <div className="flex-1">
                                        <svg
                                            className="w-12 h-12 md:w-16 md:h-16 text-svaan-blue/20 mb-8"
                                            fill="currentColor"
                                            viewBox="0 0 32 32"
                                        >
                                            <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
                                        </svg>
                                        <blockquote className="font-display text-2xl md:text-4xl text-slate font-medium leading-normal md:leading-snug mb-10">
                                            "{testimonial.quote}"
                                        </blockquote>
                                        <div>
                                            <div className="font-bold text-lg md:text-xl text-slate">
                                                {testimonial.author}
                                            </div>
                                            <div className="text-svaan-blue font-medium mt-1">
                                                {testimonial.company}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Navigation Controls */}
                <div className="flex items-center gap-4 mt-12 lg:absolute lg:right-6 lg:bottom-0 lg:mt-0 z-10">
                    <button
                        onClick={handlePrev}
                        className="w-14 h-14 rounded-full border border-slate/10 flex items-center justify-center text-slate hover:bg-canvas transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-14 h-14 rounded-full border border-slate/10 flex items-center justify-center text-slate hover:bg-canvas transition-colors"
                        aria-label="Next testimonial"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
