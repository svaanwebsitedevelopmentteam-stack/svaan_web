import React from "react";

interface CounterProps { end: number; suffix?: string; label: string; }

function Counter({ end, suffix = "", label }: CounterProps) {
    return (
        <div className="text-center px-1 sm:px-4">
            <div className="font-display text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-1 sm:mb-2" style={{ color: "var(--t-text)" }}>
                {end}<span style={{ color: "var(--t-accent)" }}>{suffix}</span>
            </div>
            <div className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-wide uppercase opacity-85 leading-tight" style={{ color: "var(--t-text-secondary)" }}>
                {label}
            </div>
        </div>
    );
}

export function HeroStats() {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pb-6 sm:pb-8 pt-2 relative z-10">
            <div className="pt-6 sm:pt-8 grid grid-cols-3 gap-2 sm:gap-6 divide-x divide-[var(--t-border)]"
                style={{ borderTop: "1px solid var(--t-border)" }}>
                <div className="first:pl-0">
                    <Counter end={2021} suffix="" label="Founded" />
                </div>
                <div>
                    <Counter end={60} suffix="+" label="Team members" />
                </div>
                <div className="last:pr-0">
                    <Counter end={4} suffix="" label="Countries active" />
                </div>
            </div>
        </div>
    );
}
