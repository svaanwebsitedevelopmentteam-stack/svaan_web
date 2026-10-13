import React from "react";
import Link from "next/link";
import Image from "next/image";

export function LeadershipPreview() {
    return (
        <section id="leadership" className="py-14 sm:py-20 lg:py-24 relative overflow-hidden">
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] h-[500px] rounded-[var(--t-radius-md)] blur-[200px] pointer-events-none"
                style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }} />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-24 items-center">
                    {/* Left - Image with floating card */}
                    <div className="relative flex flex-col justify-center">
                        <div className="relative w-full h-[260px] sm:h-[360px] lg:h-[440px] rounded-2xl overflow-hidden"
                            style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}>
                            <Image
                                src="/Home_leadership(2).png"
                                alt="SVaaN leadership team"
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                                loading="lazy"
                                className="object-cover filter grayscale-[10%]"
                            />
                            <div className="absolute inset-0 mix-blend-overlay opacity-60" style={{ background: "linear-gradient(135deg, var(--t-gradient-from), transparent, var(--t-gradient-to))" }} />
                        </div>
                        <div
                            className="absolute bottom-3 right-3 sm:-bottom-6 sm:right-6 md:right-8 rounded-xl sm:rounded-2xl px-4 py-2.5 sm:px-6 sm:py-4 shadow-lg"
                            style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}>
                            <div className="font-display font-bold text-xl sm:text-2xl" style={{ color: "var(--t-accent)" }}>Since 2021</div>
                            <div className="text-[11px] sm:text-xs" style={{ color: "var(--t-text-muted)" }}>Building technology that works</div>
                        </div>
                    </div>

                    {/* Right - Text */}
                    <div className="flex flex-col justify-center py-2 sm:py-4 lg:py-8">
                        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 sm:mb-6" style={{ color: "var(--t-text)" }}>
                            The people behind SVaaN.
                        </h2>
                        <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            SVaaN was founded in 2021 by Dinesh Natarajan and Sai Ramamurthy. Both come from engineering and consulting backgrounds with over a decade of delivery experience across sectors.
                        </p>
                        <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: "var(--t-text-muted)" }}>
                            They started SVaaN because they saw too many technology projects that delivered code but missed the point. The company was built around a simple principle: understand the business problem first, then build the right technology.
                        </p>

                        <Link href="/leadership" className="group inline-flex items-center gap-3 text-sm sm:text-base font-semibold hover:gap-4 transition-all duration-300" style={{ color: "var(--t-accent)" }}>
                            Meet the leadership
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
