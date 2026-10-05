"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
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
                        className="type-display mb-8"
                        style={{ color: "var(--t-text)" }}
                    >
                        Terms & Conditions
                    </h1>
                    <p className="type-body-lg max-w-3xl" style={{ color: "var(--t-text-muted)" }}>
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
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>1. Website use</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            By accessing or using our website, you signify your acceptance of these Terms and Conditions. If you do not agree to these terms, please do not use our Site. We reserve the right to modify these terms at any time without prior notice.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>2. Intellectual property</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, is the property of SVaaN Global Tech or its content suppliers and protected by international copyright laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>3. Content accuracy</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            While SVaaN ensures digital architecture and strategic literature reflects our operations, slight variances in real-time execution parameters may exist. Material herein is strictly for informational discovery and professional interaction.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>4. Third-party links</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            Inbound or outbound domains mapping beyond the core SVaaN Global Tech architecture are subject to independent corporate terms. SVaaN neither maintains jurisdiction nor verifies security compliance of external third-party environments.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>5. User submissions</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            Enquiries, technical challenges, schemas, logic, or media provided through contact vectors undergo secure enterprise clearance. However, non-proprietary input conceptually overlapping with SVaaN roadmap developments does not constitute a legal partnership unless formally scoped.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>6. Limitation of liability</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            Under no circumstances, including, but not limited to, negligence, shall SVaaN Global Tech be liable for any direct, indirect, special, incidental or consequential damages that result from the use of, or the inability to use, the materials on this site.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>7. Applicable law</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            Corporate engagement via this portal strictly defers to standard jurisdictional laws governing our formally registered regional enterprise offices and legal mandates.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>8. Contact information</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            If conflicts or concerns arise regarding these parameters, refer directly to our corporate contact teams for formal resolution procedures.
                        </p>
                    </section>

                    <section>
                        <p className="text-base italic" style={{ color: "var(--t-text-muted)" }}>
                            Note: This Terms & Conditions outline follows the approved structure. Final legal text must be formally reviewed and approved by the appropriate legal/business owner before binding implications take effect.
                        </p>
                    </section>

                </motion.div>

            </div>
        </main>
    );
}
