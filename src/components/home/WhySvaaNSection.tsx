import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const reasons = [
    { num: "01", title: "We stay accountable beyond go-live.", desc: "We keep supporting and improving what we build.", icon: "/We stay accountable beyond go-live.svg" },
    { num: "02", title: "We work from the business problem.", desc: "We ask why before we decide what to build.", icon: "/We work from the business problem..svg" },
    { num: "03", title: "One partner from build to operation.", desc: "You do not need a new vendor at every stage.", icon: "/One partner from build to operation..svg" },
    { num: "04", title: "Long-term relationships matter.", desc: "We measure ourselves by how the technology performs a year later.", icon: "/Long-term relationships matter..svg" },
    { num: "05", title: "Engineering depth, business-first view.", desc: "Our leadership looks at the whole business, not only the code.", icon: "/Engineering depth, business-first view..svg" },
];

export function WhySvaaNSection() {
    return (
        <section className="py-14 sm:py-20 lg:py-24 relative overflow-clip">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-[var(--t-radius-md)] blur-[200px] pointer-events-none"
                style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }} />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-24 items-start">
                    <div className="lg:sticky lg:top-32 lg:h-max">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-md border text-xs font-semibold tracking-wider uppercase"
                                style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                                Why SVaaN
                            </div>
                            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4 sm:mb-6" style={{ color: "var(--t-text)" }}>
                                Why businesses choose{" "}
                                <span className="italic" style={{ color: "var(--t-accent)" }}>SVaaN.</span>
                            </h2>
                            <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-10 leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                                We don&apos;t just deliver a project and walk away. We stay involved, because software that works today needs to keep working tomorrow.
                            </p>
                            <Button href="/why-svaan" variant="outline" className="group">
                                Why SVaaN
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3.5 sm:gap-5">
                        {reasons.map((r) => (
                            <div key={r.num}
                                className="group rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 cursor-default hover:shadow-lg hover:-translate-y-1"
                                style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}>
                                <div className="flex">
                                    {/* Left accent strip with number */}
                                    <div className="w-11 sm:w-16 md:w-[72px] shrink-0 flex flex-col items-center justify-center transition-colors duration-300"
                                        style={{ backgroundColor: "var(--t-bg-surface)" }}>
                                        <span className="text-base sm:text-xl md:text-2xl font-black tracking-tight opacity-30 group-hover:opacity-100 transition-opacity duration-300" style={{ color: "var(--t-accent)" }}>
                                            {r.num}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-3.5 sm:p-5 md:p-7 flex items-center gap-3 sm:gap-5 min-w-0">
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-display text-sm sm:text-lg md:text-xl font-bold mb-1 group-hover:text-[var(--t-accent)] transition-colors duration-300 leading-snug" style={{ color: "var(--t-text)" }}>
                                                {r.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm leading-relaxed opacity-70" style={{ color: "var(--t-text-muted)" }}>{r.desc}</p>
                                        </div>
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
                                            style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-accent)" }}>
                                            {typeof r.icon === "string" ? (
                                                <Image
                                                    src={r.icon}
                                                    alt={r.title}
                                                    width={40}
                                                    height={40}
                                                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain"
                                                />
                                            ) : (
                                                r.icon
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

