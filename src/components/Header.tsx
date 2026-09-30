"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = [
        { label: "Approach", href: "/approach" },
        { label: "Services", href: "/services" },
        { label: "Work", href: "/work" },
        // { label: "Insights", href: "/insights" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <>
            <header
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
                style={{
                    backgroundColor: isScrolled ? "var(--t-glass-bg)" : "transparent",
                    borderBottom: isScrolled ? "1px solid var(--t-border)" : "1px solid transparent",
                    backdropFilter: isScrolled ? "blur(24px)" : "none",
                    WebkitBackdropFilter: isScrolled ? "blur(24px)" : "none",
                }}
            >
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group relative w-32 h-10">
                        <Image
                            src="/svaan_logo.webp"
                            alt="SVaaN"
                            fill
                            className="object-contain object-left transition-opacity group-hover:opacity-80"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300"
                                style={{ color: "var(--t-text-muted)" }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "var(--t-text)";
                                    e.currentTarget.style.backgroundColor = "var(--t-bg-surface)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "var(--t-text-muted)";
                                    e.currentTarget.style.backgroundColor = "transparent";
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right side */}
                    <div className="hidden lg:flex items-center gap-3">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
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

                    {/* Mobile: theme toggle + hamburger */}
                    <div className="lg:hidden flex items-center gap-2">
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
                            className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block w-6 h-[2px] origin-center" style={{ backgroundColor: "var(--t-text)" }} />
                            <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-[2px]" style={{ backgroundColor: "var(--t-text)" }} />
                            <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block w-6 h-[2px] origin-center" style={{ backgroundColor: "var(--t-text)" }} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
                        style={{ backgroundColor: "var(--t-glass-bg)" }}
                    >
                        {links.map((link, i) => (
                            <motion.div key={link.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                                <Link href={link.href} onClick={() => setMobileOpen(false)} className="text-3xl font-display font-bold transition-colors" style={{ color: "var(--t-text)" }}>
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
