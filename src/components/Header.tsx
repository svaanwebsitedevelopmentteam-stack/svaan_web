"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const menuItems = [
    {
        label: "Solutions",
        href: "/solutions/build", // Fallback to first item or a general page
        subMenu: [
            { label: "Build", href: "/solutions/build" },
            { label: "Modernize", href: "/solutions/modernize" },
            { label: "Operate", href: "/solutions/operate" },
            { label: "Evolve", href: "/solutions/evolve" },
        ],
    },
    { label: "Client Stories", href: "/work" },
    { label: "Why SVaaN", href: "/why-svaan" },
    { label: "Approach", href: "/approach" },
    {
        label: "Company",
        href: "/about",
        subMenu: [
            { label: "About", href: "/about" },
            { label: "Leadership", href: "/leadership" },
            { label: "Insights", href: "/insights" },
        ],
    },
];

export function Header() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
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

    const isItemActive = (link: (typeof menuItems)[number]) => {
        if (!pathname) return false;
        if (pathname === link.href) return true;
        if (link.href !== "/" && pathname.startsWith(`${link.href}/`)) return true;
        if (link.label === "Solutions" && pathname.startsWith("/solutions")) return true;
        if (link.subMenu) {
            return link.subMenu.some(
                (sub) => pathname === sub.href || pathname.startsWith(`${sub.href}/`)
            );
        }
        return false;
    };

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
                    <Link
                        href="/"
                        className="flex items-center gap-3 group relative w-[180px] h-[45px] flex-shrink-0 rounded-[var(--t-radius-sm)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--t-bg)]"
                        onClick={() => setMobileOpen(false)}
                        data-cursor-solid="true"
                    >
                        <Image
                            src="/Primary_logo.svg"
                            alt="SVaaN"
                            fill
                            className="object-contain object-left transition-opacity group-hover:opacity-80"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1.5 h-full">
                        {menuItems.map((link) => {
                            const isActive = isItemActive(link);

                            return (
                                <div
                                    key={link.label}
                                    className="h-full flex items-center relative"
                                    onMouseEnter={() => setHoveredMenu(link.label)}
                                >
                                    <Link
                                        href={link.href}
                                        className="relative px-4 py-2 text-sm font-medium rounded-[var(--t-radius-md)] transition-all duration-200 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--t-bg)]"
                                        onClick={() => setHoveredMenu(null)}
                                        style={{
                                            color:
                                                isActive || hoveredMenu === link.label
                                                    ? "var(--t-text)"
                                                    : "var(--t-text-muted)",
                                            backgroundColor:
                                                hoveredMenu === link.label
                                                    ? "var(--t-bg-surface)"
                                                    : "transparent",
                                        }}
                                    >
                                        {link.label}
                                        {link.subMenu && (
                                            <svg
                                                className={`w-3.5 h-3.5 transition-transform duration-300 ${
                                                    hoveredMenu === link.label ? "rotate-180" : ""
                                                }`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        )}
                                        {isActive && (
                                            <span className="absolute bottom-1 left-3 right-3 h-[2px] rounded-full bg-[var(--t-accent)] pointer-events-none" />
                                        )}
                                    </Link>

                                    {/* Submenu Dropdown */}
                                    <AnimatePresence>
                                        {hoveredMenu === link.label && link.subMenu && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{
                                                    opacity: 0,
                                                    y: 10,
                                                    transition: { duration: 0.1 },
                                                }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-[72px] left-1/2 -translate-x-1/2 min-w-[240px] rounded-[var(--t-radius-md)] shadow-xl p-2 border"
                                                style={{
                                                    backgroundColor: "var(--t-bg-card)",
                                                    borderColor: "var(--t-border)",
                                                }}
                                            >
                                                {link.subMenu.map((sub) => {
                                                    const isSubActive =
                                                        pathname === sub.href ||
                                                        (sub.href !== "/" && pathname.startsWith(`${sub.href}/`));
                                                    return (
                                                        <Link
                                                            key={sub.label}
                                                            href={sub.href}
                                                            onClick={() => setHoveredMenu(null)}
                                                            className={`block px-4 py-2.5 text-sm font-medium rounded-[var(--t-radius-md)] hover:bg-[var(--t-bg-surface)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2 ${
                                                                isSubActive
                                                                    ? "text-[var(--t-accent)] font-semibold bg-[var(--t-bg-surface)]"
                                                                    : "text-[var(--t-text)]"
                                                            }`}
                                                        >
                                                            {sub.label}
                                                        </Link>
                                                    );
                                                })}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </nav>

                    {/* Right side interactions */}
                    <div className="hidden lg:flex items-center gap-3">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="w-11 h-11 rounded-[var(--t-radius-md)] flex items-center justify-center transition-all duration-200 hover:bg-[var(--t-bg-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--t-bg)]"
                            style={{
                                border: "1px solid var(--t-border)",
                                backgroundColor: "var(--t-bg-card)",
                                color: "var(--t-text)",
                            }}
                            aria-label="Toggle theme"
                        >
                            {theme === "light" ? (
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                            )}
                        </button>

                        {/* CTA - Primary Standard Button */}
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 h-11 px-6 rounded-[var(--t-radius-btn)] text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow-md hover:bg-[var(--t-btn-hover)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--t-bg)]"
                            style={{
                                backgroundColor: "var(--t-btn-bg)",
                                color: "var(--t-btn-text)",
                            }}
                        >
                            Let&apos;s Talk
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 17L17 7M17 7H7M17 7v10"
                                />
                            </svg>
                        </Link>
                    </div>

                    {/* Mobile Controls */}
                    <div className="lg:hidden flex items-center gap-2 relative z-50">
                        <button
                            onClick={toggleTheme}
                            className="w-10 h-10 rounded-[var(--t-radius-md)] flex items-center justify-center transition-colors hover:bg-[var(--t-bg-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2"
                            style={{
                                border: "1px solid var(--t-border)",
                                backgroundColor: "var(--t-bg-card)",
                                color: "var(--t-text)",
                            }}
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
                            className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-[var(--t-radius-md)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2"
                            style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)" }}
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="block w-4 h-[2px] origin-center" style={{ backgroundColor: "var(--t-text)" }} />
                            <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-4 h-[2px]" style={{ backgroundColor: "var(--t-text)" }} />
                            <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block w-4 h-[2px] origin-center" style={{ backgroundColor: "var(--t-text)" }} />
                        </button>
                    </div>
                </div>
            </header>

            {/* Fullscreen Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 flex flex-col pt-24 px-6 pb-6 overflow-y-auto backdrop-blur-2xl"
                        style={{ backgroundColor: "color-mix(in srgb, var(--t-bg) 95%, transparent)" }}
                    >
                        <div className="flex flex-col w-full max-w-lg mx-auto mt-4">
                            {menuItems.map((link, i) => {
                                const isActive = isItemActive(link);
                                return (
                                    <motion.div key={link.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05, duration: 0.3 }}>

                                        {link.subMenu ? (
                                            // Parent item with toggle
                                            <div className="border-b" style={{ borderColor: "var(--t-border)" }}>
                                                <button
                                                    className="w-full flex items-center justify-between text-3xl font-display font-medium py-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2 rounded-[var(--t-radius-md)]"
                                                    style={{ color: isActive ? "var(--t-accent)" : "var(--t-text)" }}
                                                    onClick={() => setExpandedMobile(expandedMobile === link.label ? null : link.label)}
                                                >
                                                    <span>{link.label}</span>
                                                    <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 ${expandedMobile === link.label ? 'rotate-180 bg-[var(--t-bg-surface)]' : 'border border-[var(--t-border)] opacity-60'}`}>
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </div>
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
                                                            <div className="flex flex-col gap-4 pt-2 pb-6 px-1">
                                                                <div className="flex flex-col gap-2">
                                                                    {link.subMenu.map((sub) => {
                                                                        const isSubActive =
                                                                            pathname === sub.href ||
                                                                            (sub.href !== "/" && pathname.startsWith(`${sub.href}/`));
                                                                        return (
                                                                            <Link
                                                                                key={sub.label}
                                                                                href={sub.href}
                                                                                onClick={() => setMobileOpen(false)}
                                                                                className={`text-xl font-medium px-4 py-3 rounded-[var(--t-radius-md)] transition-colors hover:bg-[var(--t-bg-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2 ${
                                                                                    isSubActive
                                                                                        ? "text-[var(--t-accent)] bg-[var(--t-bg-surface)]"
                                                                                        : "text-[var(--t-text)]"
                                                                                }`}
                                                                            >
                                                                                {sub.label}
                                                                            </Link>
                                                                        );
                                                                    })}
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            // Standard Link
                                            <div className="border-b" style={{ borderColor: "var(--t-border)" }}>
                                                <Link
                                                    href={link.href}
                                                    onClick={() => setMobileOpen(false)}
                                                    className="flex items-center justify-between text-3xl font-display font-medium py-5 w-full transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2 rounded-[var(--t-radius-md)]"
                                                    style={{ color: isActive ? "var(--t-accent)" : "var(--t-text)" }}
                                                >
                                                    {link.label}
                                                </Link>
                                            </div>
                                        )}

                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Mobile Footer / CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="w-full max-w-lg mx-auto mt-auto pt-12 flex flex-col gap-4"
                        >
                            <Link
                                href="/contact"
                                onClick={() => setMobileOpen(false)}
                                className="w-full h-12 rounded-[var(--t-radius-btn)] flex items-center justify-center text-base font-semibold transition-all duration-200 shadow-sm active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--t-bg)]"
                                style={{ backgroundColor: "var(--t-btn-bg)", color: "var(--t-btn-text)" }}
                            >
                                Let&apos;s Talk
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
