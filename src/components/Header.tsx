"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const menuItems = [
    { label: "Approach", href: "/approach" },
    {
        label: "Capabilities",
        href: "/services",
        megaMenu: [
            {
                category: "Strategy & Advisory",
                items: [{ label: "POC Development", href: "/services/poc-development" }]
            },
            {
                category: "Product & Experience",
                items: [
                    { label: "UI/UX Design", href: "/services/ui-ux-design" },
                    { label: "MVP Development", href: "/services/mvp-development" }
                ]
            },
            {
                category: "Software & Technology",
                items: [
                    { label: "Software Product", href: "/services/software-product-development" },
                    { label: "Enterprise Software", href: "/services/enterprise-software-development" }
                ]
            },
            {
                category: "AI & Automation",
                items: [{ label: "AI Development", href: "/services/ai-software-development" }]
            },
            {
                category: "Engineering Group",
                items: [{ label: "Quality Assurance", href: "/services/quality-assurance" }]
            },
            {
                category: "Managed Tech",
                items: [
                    { label: "Helpdesk Support", href: "/services/helpdesk-support" },
                    { label: "App Support", href: "/services/application-support" },
                    { label: "Infra Support", href: "/services/infrastructure-support" },
                    { label: "Production Support", href: "/services/production-support" },
                    { label: "DevOps Support", href: "/services/devops-support" },
                    { label: "Cloud Services", href: "/services/cloud-managed-services" },
                ]
            }
        ]
    },
    { label: "Work", href: "/work" },
    {
        label: "Company",
        href: "/about",
        subMenu: [
            { label: "About Us", href: "/about" },
            { label: "Leadership", href: "/leadership" }
        ]
    },
    { label: "Contact", href: "/contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
    const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50);
        onScroll(); // Initialize state on mount
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [mobileOpen]);

    return (
        <>
            <header
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
                style={{
                    backgroundColor: isScrolled || hoveredMenu ? "var(--t-glass-bg)" : "transparent",
                    borderBottom: isScrolled || hoveredMenu ? "1px solid var(--t-border)" : "1px solid transparent",
                    backdropFilter: isScrolled || hoveredMenu ? "blur(24px)" : "none",
                    WebkitBackdropFilter: isScrolled || hoveredMenu ? "blur(24px)" : "none",
                }}
                onMouseLeave={() => setHoveredMenu(null)}
            >
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between relative z-50">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group relative w-[180px] h-[45px] flex-shrink-0" onClick={() => setMobileOpen(false)}>
                        <Image
                            src="/Primary_logo.svg"
                            alt="SVaaN"
                            fill
                            className="object-contain object-left transition-opacity group-hover:opacity-80"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-2 h-full">
                        {menuItems.map((link) => (
                            <div
                                key={link.label}
                                className="h-full flex items-center relative"
                                onMouseEnter={() => setHoveredMenu(link.label)}
                            >
                                <Link
                                    href={link.href}
                                    className="px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-1.5"
                                    onClick={() => setHoveredMenu(null)}
                                    style={{
                                        color: hoveredMenu === link.label ? "var(--t-text)" : "var(--t-text-muted)",
                                        backgroundColor: hoveredMenu === link.label ? "var(--t-bg-surface)" : "transparent"
                                    }}
                                >
                                    {link.label}
                                    {(link.megaMenu || link.subMenu) && (
                                        <svg className={`w-3.5 h-3.5 transition-transform duration-300 ${hoveredMenu === link.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </Link>

                                {/* Cascading Submenus */}
                                <AnimatePresence>
                                    {hoveredMenu === link.label && (link.subMenu || link.megaMenu) && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10, transition: { duration: 0.1 } }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-[72px] left-1/2 -translate-x-1/2 min-w-[240px] rounded-[1.5rem] shadow-2xl p-2 border"
                                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}
                                            onMouseLeave={() => setHoveredCategory(null)}
                                        >
                                            {/* Simple SubMenu mode (Company) */}
                                            {link.subMenu && link.subMenu.map(sub => (
                                                <Link
                                                    key={sub.label}
                                                    href={sub.href}
                                                    onClick={() => setHoveredMenu(null)}
                                                    className="block px-4 py-3 text-[15px] font-medium rounded-xl hover:bg-[var(--t-bg-surface)] transition-all duration-300"
                                                    style={{ color: "var(--t-text)" }}
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}

                                            {/* Cascading MegaMenu mode (Capabilities) */}
                                            {link.megaMenu && link.megaMenu.map(category => (
                                                <div
                                                    key={category.category}
                                                    className="relative"
                                                    onMouseEnter={() => setHoveredCategory(category.category)}
                                                >
                                                    <div className="flex items-center justify-between px-4 py-3 text-[15px] font-medium rounded-xl transition-colors hover:bg-[var(--t-bg-surface)] cursor-default" style={{ color: "var(--t-text)" }}>
                                                        <span>{category.category}</span>
                                                        <svg className={`w-4 h-4 transition-transform ${hoveredCategory === category.category ? 'translate-x-1 text-[var(--t-accent)]' : 'text-[var(--t-text-muted)]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </div>

                                                    {/* Side Flyout level 3 */}
                                                    <AnimatePresence>
                                                        {hoveredCategory === category.category && (
                                                            <motion.div
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                exit={{ opacity: 0, x: -10, transition: { duration: 0.1 } }}
                                                                transition={{ duration: 0.2 }}
                                                                className="absolute top-0 left-[calc(100%+8px)] min-w-[240px] rounded-[1.5rem] shadow-2xl p-2 border"
                                                                style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}
                                                            >
                                                                {category.items.map(item => (
                                                                    <Link
                                                                        key={item.label}
                                                                        href={item.href}
                                                                        onClick={() => {
                                                                            setHoveredMenu(null);
                                                                            setHoveredCategory(null);
                                                                        }}
                                                                        className="block px-4 py-3 text-[15px] font-medium rounded-xl hover:bg-[var(--t-bg-surface)] transition-all duration-300"
                                                                        style={{ color: "var(--t-text)" }}
                                                                    >
                                                                        {item.label}
                                                                    </Link>
                                                                ))}
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </nav>

                    {/* Right side interactions */}
                    <div className="hidden lg:flex items-center gap-3">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                            style={{
                                border: "1px solid var(--t-border)",
                                backgroundColor: "var(--t-bg-surface)",
                                color: "var(--t-text)",
                            }}
                            aria-label="Toggle theme"
                        >
                            {theme === "light" ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            )}
                        </button>

                        {/* CTA */}
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 h-11 px-7 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg"
                            style={{
                                backgroundColor: "var(--t-btn-bg)",
                                color: "var(--t-btn-text)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "var(--t-accent)";
                                e.currentTarget.style.color = "#fff";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "var(--t-btn-bg)";
                                e.currentTarget.style.color = "var(--t-btn-text)";
                            }}
                        >
                            Let&apos;s Talk
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                        </Link>
                    </div>

                    {/* Mobile Controls */}
                    <div className="lg:hidden flex items-center gap-2 relative z-50">
                        <button
                            onClick={toggleTheme}
                            className="w-10 h-10 rounded-full flex items-center justify-center"
                            style={{ border: "1px solid var(--t-border)", color: "var(--t-text)" }}
                            aria-label="Toggle theme"
                        >
                            {theme === "light" ? (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            ) : (
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            )}
                        </button>
                        <button
                            className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full"
                            style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)" }}
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block w-4 h-[2px] origin-center" style={{ backgroundColor: "var(--t-text)" }} />
                            <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-4 h-[2px]" style={{ backgroundColor: "var(--t-text)" }} />
                            <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block w-4 h-[2px] origin-center" style={{ backgroundColor: "var(--t-text)" }} />
                        </button>
                    </div>
                </div>
                {/* Global Mega Menu Block entirely removed in favor of side-floating dropdown system above! */}
            </header>

            {/* Fullscreen Mobile Menu Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 flex flex-col pt-28 px-6 pb-12 overflow-y-auto"
                        style={{ backgroundColor: "var(--t-bg)" }}
                    >
                        <div className="flex flex-col gap-6 w-full max-w-lg mx-auto">
                            {menuItems.map((link, i) => (
                                <motion.div key={link.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>

                                    {(link.megaMenu || link.subMenu) ? (
                                        // Parent item with toggle
                                        <div>
                                            <button
                                                className="w-full flex items-center justify-between text-2xl font-display font-bold py-2 transition-colors"
                                                style={{ color: "var(--t-text)" }}
                                                onClick={() => setExpandedMobile(expandedMobile === link.label ? null : link.label)}
                                            >
                                                {link.label}
                                                <svg className={`w-6 h-6 transition-transform duration-300 ${expandedMobile === link.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>

                                            {/* Mobile Expanded List */}
                                            <AnimatePresence>
                                                {expandedMobile === link.label && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="flex flex-col gap-6 pl-4 py-6 border-l-2 ml-2" style={{ borderColor: "var(--t-border)" }}>
                                                            {link.megaMenu && link.megaMenu.map(category => (
                                                                <div key={category.category}>
                                                                    <div className="text-xs font-bold uppercase tracking-widest mb-3 opacity-50" style={{ color: "var(--t-text)" }}>{category.category}</div>
                                                                    <div className="flex flex-col gap-4">
                                                                        {category.items.map(item => (
                                                                            <Link
                                                                                key={item.label}
                                                                                href={item.href}
                                                                                onClick={() => setMobileOpen(false)}
                                                                                className="text-lg font-medium hover:text-[var(--t-accent)] transition-colors"
                                                                                style={{ color: "var(--t-text-muted)" }}
                                                                            >
                                                                                {item.label}
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            ))}

                                                            {link.subMenu && link.subMenu.map(sub => (
                                                                <Link
                                                                    key={sub.label}
                                                                    href={sub.href}
                                                                    onClick={() => setMobileOpen(false)}
                                                                    className="text-xl font-medium hover:text-[var(--t-accent)] transition-colors"
                                                                    style={{ color: "var(--t-text-muted)" }}
                                                                >
                                                                    {sub.label}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        // Standard Link
                                        <Link
                                            href={link.href}
                                            onClick={() => setMobileOpen(false)}
                                            className="text-2xl font-display font-bold py-2 block transition-colors"
                                            style={{ color: "var(--t-text)" }}
                                        >
                                            {link.label}
                                        </Link>
                                    )}

                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
