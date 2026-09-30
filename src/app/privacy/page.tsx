"use client";

import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen pt-[140px] pb-0 relative bg-[var(--t-bg)]">
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
                        Privacy Policy
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed max-w-3xl" style={{ color: "var(--t-text-muted)" }}>
                        This Privacy Policy explains how SVaaN Global Tech collects, uses, stores, and protects personal information when you use our website or contact our organization.
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
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>1. Information We Collect</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, fill out a form, subscribe to the newsletter, and in connection with other activities, services, features or resources we make available on our Site.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>2. How We Use Information</h2>
                        <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                            <li>To improve customer service</li>
                            <li>To personalize user experience</li>
                            <li>To process inquiries and applications</li>
                            <li>To send periodic emails</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>3. Cookies and Analytics</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            Our Site may use &quot;cookies&quot; to enhance User experience. User&apos;s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>4. Information Security</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.
                        </p>
                    </section>

                    <section>
                        <p className="text-base italic" style={{ color: "var(--t-text-muted)" }}>
                            Note: This is a draft policy. Final legal text must be reviewed and approved by the appropriate legal/business owner before publication.
                        </p>
                    </section>

                </motion.div>

            </div>

            <CTASection />

        </main>
    );
}
