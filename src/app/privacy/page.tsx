"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
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
                        Privacy Policy
                    </h1>
                    <p className="type-body-lg max-w-3xl" style={{ color: "var(--t-text-muted)" }}>
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
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>1. Information we collect</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            We may collect personal identification information from Users in a variety of ways, including when Users visit our site, fill out a form, and in connection with other activities, services, features or resources we make available on our Site.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>2. How we use information</h2>
                        <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                            <li>To improve our customer service and engagement operations</li>
                            <li>To personalize user experience and better understand insights</li>
                            <li>To process inquiries, challenges, and support applications</li>
                            <li>To communicate securely regarding relevant business services</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>3. Cookies and analytics</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            Our Site may use &quot;cookies&quot; and diagnostic algorithms to enhance User experience. User&apos;s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track aggregate performance anomalies.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>4. Contact and enquiry data</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            When you reach out via our contact channels, we capture routing metadata, specified communication channels, and identity markers necessary to return requests securely and provide adequate business evaluations.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>5. Recruitment and application data</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            If submitting queries for career opportunities, we retain your application content and professional history within localized internal personnel directories in compliance with standard recruitment practices.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>6. Data retention</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            Information is retained only for the cycle of business requirement or mandated legal limits necessary to fulfill standard operational processes and service evaluations.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>7. Data sharing</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            We never exchange, broadcast, or openly transact User identification information. Verified sub-processors and internal teams adhere strictly to encrypted protocols when managing technical requirements.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>8. Security</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            We adopt appropriate, enterprise-grade data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information stored on our platforms.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>9. User rights</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            Users reserve the right to audit, amend, download or explicitly request total system clearance of their personal records currently bound to SVaaN Global Tech registries.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>10. Third-party services</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            Our primary interfaces may occasionally resolve external architecture. SVaaN neither curates nor explicitly manages internal policies of third-party domains connected or referenced within our assets.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>11. Contact information</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            For queries regarding secure processing or privacy audits, connect directly via our contact operations channels.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-display text-2xl font-bold mb-4" style={{ color: "var(--t-text)" }}>12. Policy updates</h2>
                        <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                            SVaaN Global Tech retains the right to evolve this protocol structure to align with active legal paradigms. Updates reflect immediately on this published domain surface.
                        </p>
                    </section>

                    <section>
                        <p className="text-base italic" style={{ color: "var(--t-text-muted)" }}>
                            Note: This Privacy Policy uses the legally approved structure. Final legal text must be reviewed and approved by the appropriate legal/business owner before publication.
                        </p>
                    </section>

                </motion.div>

            </div>
        </main>
    );
}
