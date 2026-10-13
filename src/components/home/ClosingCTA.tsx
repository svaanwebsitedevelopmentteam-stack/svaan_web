import React from "react";
import { Button } from "@/components/ui/Button";

export function ClosingCTA() {
    return (
        <section className="py-16 sm:py-24 lg:py-28 relative overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-[var(--t-radius-md)] blur-[200px] pointer-events-none"
                style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }} />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                <div className="text-center">
                    <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4 sm:mb-6" style={{ color: "var(--t-text)" }}>
                        Have a technology problem{" "}
                        <span className="italic" style={{ color: "var(--t-accent)" }}>worth solving?</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                        Tell us what is happening, what you want to achieve, and where you need help.
                    </p>
                    <Button href="/contact" size="lg" className="w-full sm:w-auto justify-center group">
                        Discuss your challenge
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                    </Button>
                </div>
            </div>
        </section>
    );
}
