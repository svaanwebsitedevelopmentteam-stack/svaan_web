"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: "var(--t-bg)" }}>

            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full blur-[120px]"
                    style={{ backgroundColor: "var(--t-accent)", opacity: 0.15 }}
                />
            </div>

            <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span
                        className="font-display font-bold leading-none tracking-tighter"
                        style={{ fontSize: "clamp(8rem, 20vw, 16rem)", color: "var(--t-text)", opacity: 0.05 }}
                    >
                        404
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="-mt-16 sm:-mt-24 mb-6 relative"
                >
                    <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight" style={{ color: "var(--t-text)" }}>
                        Page not found.
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl max-w-lg mx-auto mb-12"
                    style={{ color: "var(--t-text-muted)" }}
                >
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center h-14 px-8 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                        style={{ backgroundColor: "var(--t-btn-bg)", color: "var(--t-btn-text)" }}
                    >
                        Return Home
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center h-14 px-8 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105"
                        style={{ backgroundColor: "transparent", color: "var(--t-text)", border: "1px solid var(--t-border)" }}
                    >
                        Contact Support
                    </Link>
                </motion.div>

            </div>
        </main>
    );
}
