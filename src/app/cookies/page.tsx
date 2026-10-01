"use client";

import { motion } from "framer-motion";

export default function CookiesPage() {
    return (
        <main className="min-h-screen pt-[140px] pb-0 relative bg-[var(--t-bg)] overflow-x-clip">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">

                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="pb-[60px] lg:pb-28 pt-8 w-full md:w-[80%]"
                >
                    <div className="inline-flex items-center gap-4 mb-8">
                        <div className="h-[1px] w-12" style={{ backgroundColor: "var(--t-accent)" }} />
                        <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--t-text-muted)" }}>Legal</span>
                    </div>
                    <h1
                        className="font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-tight mb-8"
                        style={{ color: "var(--t-text)" }}
                    >
                        Cookie Policy
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed max-w-3xl" style={{ color: "var(--t-text-muted)" }}>
                        This Cookie Policy explains how cookies and similar technologies may be used on the SVaaN Global Tech website to enhance user interactions.
                    </p>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl pb-40 grid grid-cols-1 gap-12"
                >
                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>1. What cookies are</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            Cookies are small configuration files installed passively on your client browser device when you visit standard compliant digital domains. They retain functional footprints to optimize interface loading sequences and ensure safe navigation parameters.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>2. Essential cookies</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            Certain scripts are mechanically required for basic infrastructure mapping. These cookies execute system tasks such as session maintenance, basic authentication rendering, and dynamic form submissions without which the platform fundamentally degrades.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>3. Analytics cookies</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            In order to continually improve navigation paths and information structures, passive analytics tools process standard telemetry mapping regarding popular page clusters, average time on page metrics, and non-identifier localization indices.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>4. Marketing and third-party cookies</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            External architecture mapped to social sharing extensions or specialized media embeds may occasionally store cookies from third-party networks subject to their independent enterprise terms of policy validation.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>5. Cookie controls</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            Users inherently possess complete mechanical autonomy to actively purge, disable, or intercept all incoming browser scripts directly through native standard browser settings (such as clearing caches/site settings). Note that executing hard-blocks on all cookies may prevent critical SVaaN components from running properly.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>6. Consent</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            By navigating successfully through front-facing operations on this site without enforcing global block mechanisms on your agent, you systematically recognize the integration of our essential and diagnostic data clusters.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>7. Policy updates</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            As legal protocols orchestrating digital tracing continue to evolve globally, SVaaN retains the autonomy to upgrade our disclosure parameters synchronously without initiating mandatory prior alerts.
                        </p>
                    </section>

                    <section>
                        <p className="text-base italic" style={{ color: "var(--t-text-muted)" }}>
                            Note: This Cookie Policy utilizes the legally approved layout structure mapping. Final legal text must be reviewed and approved by the appropriate legal/business owner before formally binding implementation limits.
                        </p>
                    </section>

                </motion.div>

            </div>
        </main>
    );
}
