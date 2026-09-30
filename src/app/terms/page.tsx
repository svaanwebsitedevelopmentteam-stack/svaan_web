"use client";

import { motion } from "framer-motion";
import { CTASection } from "@/components/CTASection";

export default function TermsPage() {
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
                        Terms & Conditions
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed max-w-3xl" style={{ color: "var(--t-text-muted)" }}>
                        These Terms & Conditions govern the use of the SVaaN Global Tech website, including all content, resources, and services available through the platform.
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
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>1. Website Use</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            By accessing or using our website, you signify your acceptance of these Terms and Conditions. If you do not agree to these terms, please do not use our Site. We reserve the right to modify these terms at any time without prior notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>2. Intellectual Property</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, is the property of SVaaN Global Tech or its content suppliers and protected by international copyright laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>3. Limitation of Liability</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            Under no circumstances, including, but not limited to, negligence, shall SVaaN Global Tech be liable for any direct, indirect, special, incidental or consequential damages that result from the use of, or the inability to use, the materials on this site.
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
