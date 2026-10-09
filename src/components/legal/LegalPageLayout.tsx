import React from "react";
import { LegalTableOfContents, LegalNavSection } from "./LegalTableOfContents";

export interface LegalPageLayoutProps {
    category?: string; // "LEGAL" or "SECURITY & TRUST"
    title: string;
    description?: React.ReactNode;
    lastUpdated?: string;
    sections: LegalNavSection[];
    children: React.ReactNode;
}

export function LegalPageLayout({
    category = "LEGAL",
    title,
    description,
    lastUpdated,
    sections,
    children,
}: LegalPageLayoutProps) {
    return (
        <main className="w-full min-h-screen" style={{ backgroundColor: "var(--t-bg)" }}>
            {/* HERO / INTRODUCTORY SECTION */}
            <header
                className="pt-28 pb-10 sm:pt-32 sm:pb-12 lg:pt-36 lg:pb-14 border-b transition-colors"
                style={{
                    backgroundColor: "var(--t-bg-surface)",
                    borderColor: "var(--t-border)",
                }}
            >
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="max-w-4xl space-y-4">
                        {category && (
                            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border text-xs font-semibold tracking-wider uppercase"
                                style={{
                                    backgroundColor: "var(--t-bg-card)",
                                    borderColor: "var(--t-border)",
                                    color: "var(--t-accent)",
                                }}>
                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                                {category}
                            </div>
                        )}

                        <h1
                            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15]"
                            style={{ color: "var(--t-text)" }}
                        >
                            {title}
                        </h1>

                        {description && (
                            <div
                                className="text-base sm:text-lg leading-relaxed space-y-3 pt-1"
                                style={{ color: "var(--t-text-muted)" }}
                            >
                                {description}
                            </div>
                        )}

                        {lastUpdated && (
                            <div className="pt-2">
                                <p className="text-xs sm:text-sm font-medium" style={{ color: "var(--t-text-muted)" }}>
                                    Last Updated: <span style={{ color: "var(--t-text)" }}>{lastUpdated}</span>
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {/* TWO-COLUMN LAYOUT */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-16">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-14 items-start">
                    {/* Left Sticky Navigation (and Mobile TOC) */}
                    <LegalTableOfContents sections={sections} />

                    {/* Right Main Content */}
                    <article className="flex-1 min-w-0 max-w-4xl w-full pb-16">
                        <div className="space-y-12">
                            {children}
                        </div>
                    </article>
                </div>
            </div>
        </main>
    );
}
