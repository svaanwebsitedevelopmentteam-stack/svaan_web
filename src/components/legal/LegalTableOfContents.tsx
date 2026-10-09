"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronDown, List } from "lucide-react";

export interface LegalNavSection {
    id: string;
    title: string;
}

interface LegalTableOfContentsProps {
    sections: LegalNavSection[];
    className?: string;
}

export function LegalTableOfContents({ sections, className = "" }: LegalTableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>(() => sections[0]?.id || "");
    const [mobileOpen, setMobileOpen] = useState(false);
    const isManualScrollRef = useRef(false);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Track active section via IntersectionObserver & hash change
    useEffect(() => {
        if (typeof window === "undefined" || sections.length === 0) return;

        // Sync hash change
        const handleHashChange = () => {
            const hashId = window.location.hash.replace("#", "");
            if (sections.some((s) => s.id === hashId)) {
                setActiveId(hashId);
            }
        };

        window.addEventListener("hashchange", handleHashChange);

        const handleIntersect: IntersectionObserverCallback = (entries) => {
            if (isManualScrollRef.current) return;

            const visible = entries.filter((e) => e.isIntersecting);
            if (visible.length > 0) {
                // Find top-most visible element in the observer zone
                visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                setActiveId(visible[0].target.id);
            }
        };

        const observer = new IntersectionObserver(handleIntersect, {
            rootMargin: "-90px 0px -65% 0px",
            threshold: 0,
        });

        sections.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
            observer.disconnect();
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        };
    }, [sections]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (!element) return;

        isManualScrollRef.current = true;
        setActiveId(id);
        setMobileOpen(false);

        const prefersReducedMotion =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        element.scrollIntoView({
            behavior: prefersReducedMotion ? "auto" : "smooth",
            block: "start",
        });

        if (typeof window !== "undefined" && window.history.pushState) {
            window.history.pushState(null, "", `#${id}`);
        }

        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
            isManualScrollRef.current = false;
        }, 800);
    };

    const activeSection = sections.find((s) => s.id === activeId) || sections[0];

    return (
        <>
            {/* MOBILE / TABLET COMPACT ACCORDION (Below lg) */}
            <div
                className="block lg:hidden mb-8 sticky top-20 z-30 -mx-4 px-4 py-2.5 backdrop-blur-md border-b transition-colors"
                style={{
                    backgroundColor: "var(--t-glass-bg)",
                    borderColor: "var(--t-border)",
                    transform: "none",
                }}
            >
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-expanded={mobileOpen}
                        aria-controls="mobile-legal-toc"
                        className="w-full flex items-center justify-between gap-3 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)]"
                        style={{
                            backgroundColor: "var(--t-bg-card)",
                            borderColor: "var(--t-border)",
                            color: "var(--t-text)",
                        }}
                    >
                        <div className="flex items-center gap-2.5 min-w-0">
                            <List className="w-4 h-4 flex-shrink-0" style={{ color: "var(--t-accent)" }} />
                            <span className="text-xs uppercase tracking-wider font-semibold" style={{ color: "var(--t-text-muted)" }}>
                                On this page:
                            </span>
                            <span className="truncate text-xs sm:text-sm font-medium" style={{ color: "var(--t-text)" }}>
                                {activeSection?.title || "Select section"}
                            </span>
                        </div>
                        <ChevronDown
                            className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${mobileOpen ? "rotate-180" : ""}`}
                            style={{ color: "var(--t-text-muted)" }}
                        />
                    </button>

                    {mobileOpen && (
                        <nav
                            id="mobile-legal-toc"
                            aria-label="Table of contents"
                            className="mt-2 p-2 rounded-lg border max-h-[60vh] overflow-y-auto shadow-lg space-y-1"
                            style={{
                                backgroundColor: "var(--t-bg-card)",
                                borderColor: "var(--t-border)",
                                transform: "none",
                            }}
                        >
                            {sections.map((section) => {
                                const isActive = activeId === section.id;
                                return (
                                    <button
                                        key={section.id}
                                        type="button"
                                        onClick={() => scrollToSection(section.id)}
                                        className={`w-full text-left px-3 py-2 rounded-md text-xs sm:text-sm transition-colors flex items-center justify-between ${
                                            isActive
                                                ? "font-semibold"
                                                : "hover:bg-[var(--t-bg-surface)]"
                                        }`}
                                        style={{
                                            backgroundColor: isActive ? "var(--t-bg-surface)" : "transparent",
                                            color: isActive ? "var(--t-accent)" : "var(--t-text-muted)",
                                        }}
                                    >
                                        <span className="truncate">{section.title}</span>
                                        {isActive && (
                                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 ml-2" style={{ backgroundColor: "var(--t-accent)" }} />
                                        )}
                                    </button>
                                );
                            })}
                        </nav>
                    )}
                </div>
            </div>

            {/* DESKTOP STICKY SIDEBAR (lg and above) */}
            <aside
                className={`hidden lg:block w-64 xl:w-72 flex-shrink-0 ${className}`}
                style={{
                    position: "sticky",
                    top: "6.5rem",
                    alignSelf: "flex-start",
                    zIndex: 20,
                    transform: "none",
                }}
            >
                <div
                    className="max-h-[calc(100vh-8.5rem)] overflow-y-auto pr-6 border-r"
                    style={{
                        borderColor: "var(--t-border)",
                        transform: "none",
                    }}
                >
                    <div className="mb-4">
                        <p className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--t-text-muted)" }}>
                            Contents
                        </p>
                    </div>

                    <nav
                        aria-label="Table of contents"
                        className="relative border-l"
                        style={{
                            borderColor: "var(--t-border)",
                            transform: "none",
                        }}
                    >
                        <ul className="space-y-1">
                            {sections.map((section) => {
                                const isActive = activeId === section.id;
                                return (
                                    <li key={section.id}>
                                        <a
                                            href={`#${section.id}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                scrollToSection(section.id);
                                            }}
                                            className={`block text-xs xl:text-sm py-2 pl-4 -ml-[1px] border-l-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] rounded-r-md ${
                                                isActive
                                                    ? "font-semibold"
                                                    : "border-transparent hover:border-[var(--t-border)] hover:text-[var(--t-text)]"
                                            }`}
                                            style={{
                                                borderColor: isActive ? "var(--t-accent)" : undefined,
                                                color: isActive ? "var(--t-text)" : "var(--t-text-muted)",
                                                backgroundColor: isActive ? "var(--t-bg-surface)" : "transparent",
                                            }}
                                            aria-current={isActive ? "true" : undefined}
                                        >
                                            {section.title}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    );
}
