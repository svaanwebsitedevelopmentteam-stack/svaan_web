import React from "react";

export interface LegalSectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
}

export function LegalSection({ id, title, children, className = "" }: LegalSectionProps) {
    return (
        <section
            id={id}
            className={`scroll-mt-28 lg:scroll-mt-32 pt-10 first:pt-0 border-t first:border-t-0 ${className}`}
            style={{ borderColor: "var(--t-border)" }}
        >
            <h2
                className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4"
                style={{ color: "var(--t-text)" }}
            >
                {title}
            </h2>
            <div className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                {children}
            </div>
        </section>
    );
}
