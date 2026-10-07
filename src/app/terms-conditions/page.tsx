"use client";

import { motion } from "framer-motion";

export default function TermsConditionsPage() {
    return (
        <main className="w-full overflow-x-clip min-h-screen" style={{ backgroundColor: "var(--t-bg)" }}>
            {/* HERO SECTION */}
            <section className="relative min-h-[40vh] lg:min-h-[45vh] flex flex-col justify-center overflow-clip pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 border-b"
                style={{ borderColor: "var(--t-border)" }}>
                {/* Ambient Glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[300px] sm:h-[400px] rounded-full blur-[180px] pointer-events-none"
                    style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }} />

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-4 sm:mb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border text-xs font-semibold tracking-wider uppercase"
                            style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--t-accent)" }} />
                            Legal
                        </div>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-4 sm:mb-6 max-w-4xl"
                        style={{ color: "var(--t-text)" }}>
                        Terms & Conditions
                    </motion.h1>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed space-y-4"
                        style={{ color: "var(--t-text-muted)" }}>
                        <p>
                            These Terms & Conditions ("Terms") govern your use of the SVaaN Global Tech Pvt. Ltd. website ("Website").
                        </p>
                        <p>
                            By accessing or using the Website, you agree to these Terms. If you do not agree with these Terms, please do not use the Website.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <section className="py-12 sm:py-16 lg:py-20 relative overflow-clip border-b"
                style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6 }}
                        className="p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl border relative overflow-hidden shadow-md"
                        style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)" }}>

                        <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[var(--t-accent)] to-transparent" />
                        
                        <div className="pl-2 md:pl-6 space-y-12">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--t-accent)" }}>
                                    Last Updated: 04-07-2026
                                </p>
                            </div>

                            {/* Section 1 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    1. About SVaaN
                                </h2>
                                <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                                    The Website is operated by:
                                </p>
                                <div className="p-5 rounded-xl border bg-[var(--t-bg-surface)]" style={{ borderColor: "var(--t-border)" }}>
                                    <h3 className="font-bold text-lg mb-2" style={{ color: "var(--t-text)" }}>SVaaN Global Tech Pvt. Ltd.</h3>
                                    <div className="space-y-1 text-sm sm:text-base" style={{ color: "var(--t-text-muted)" }}>
                                        <p>295, 13th St, S. Kolathur, Viduthalai Nagar, Kovilambakkam, Chennai 600129, India</p>
                                        <p className="mt-2"><strong style={{ color: "var(--t-text)" }}>Email:</strong> <a href="mailto:hello@svaan.in" className="hover:underline transition-colors" style={{ color: "var(--t-accent)" }}>hello@svaan.in</a></p>
                                        <p><strong style={{ color: "var(--t-text)" }}>India:</strong> +91 96775 22812</p>
                                        <p><strong style={{ color: "var(--t-text)" }}>USA:</strong> +1 (332) 244-7372</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 2 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    2. Use of the Website
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>You may use the Website for lawful purposes and in accordance with these Terms.</p>
                                    <p>You agree not to use the Website:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>For any unlawful purpose</li>
                                        <li>To violate applicable laws or regulations</li>
                                        <li>To interfere with the operation or security of the Website</li>
                                        <li>To attempt unauthorised access to systems or information</li>
                                        <li>To introduce malicious code or harmful material</li>
                                        <li>To impersonate another person or organisation</li>
                                        <li>To misuse forms, contact mechanisms, or other website functionality</li>
                                    </ul>
                                    <p>We reserve the right to restrict or suspend access where necessary to protect the Website, our users, or our business.</p>
                                </div>
                            </div>

                            {/* Section 3 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    3. Website Content
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>The information published on the Website is provided for general informational and business purposes.</p>
                                    <p>We make reasonable efforts to keep website information useful and current. However, we do not guarantee that all content will always be complete, accurate, current, or available.</p>
                                    <p>Information on the Website should not be treated as professional, legal, financial, security, or other specialist advice unless expressly stated otherwise.</p>
                                </div>
                            </div>

                            {/* Section 4 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    4. Services
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>Information about SVaaN's services on the Website is intended to describe our capabilities and areas of work.</p>
                                    <p>A description of a service on the Website does not constitute a binding offer or guarantee that a particular service, technology, feature, timeline, deliverable, or outcome will be provided.</p>
                                    <p>Actual services are governed by the applicable proposal, statement of work, agreement, or other contractual arrangement between SVaaN and the relevant client.</p>
                                </div>
                            </div>

                            {/* Section 5 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    5. Intellectual Property
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>Unless otherwise stated, content on the Website is owned by or licensed to SVaaN Global Tech Pvt. Ltd. This may include: Text, Graphics, Logos, Images, Illustrations, Website design, Page layouts, Software and code, and Other original materials.</p>
                                    <p>You may view the Website and use its content for legitimate personal or business reference purposes.</p>
                                    <p>You may not reproduce, modify, distribute, publish, commercially exploit, or create derivative works from Website content without appropriate permission, except where permitted by applicable law.</p>
                                    <p>SVaaN and its logos, names, and associated brand elements may not be used in a way that implies endorsement or affiliation without permission.</p>
                                </div>
                            </div>

                            {/* Section 6 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    6. Third-Party Content and Links
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>The Website may contain links to third-party websites or services. These links may be provided for convenience or additional information.</p>
                                    <p>SVaaN does not control third-party websites and is not responsible for their content, availability, security, privacy practices, or terms.</p>
                                    <p>Your use of third-party websites is subject to the terms and policies of those websites.</p>
                                </div>
                            </div>

                            {/* Section 7 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    7. User Submissions
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>If the Website allows you to submit information, enquiries, comments, or other content, you remain responsible for the information you provide.</p>
                                    <p>You should not submit:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Unlawful material</li>
                                        <li>Malicious code</li>
                                        <li>Confidential information that you are not authorised to disclose</li>
                                        <li>Personal information belonging to another person without appropriate authority</li>
                                        <li>Material that infringes another person's rights</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 8 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    8. Website Availability
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>We aim to keep the Website available and functional, but we do not guarantee uninterrupted or error-free availability.</p>
                                    <p>The Website may occasionally be unavailable because of: Maintenance, Updates, Technical problems, Hosting or infrastructure issues, Security measures, or Circumstances outside our reasonable control.</p>
                                    <p>We may modify, suspend, or discontinue parts of the Website where reasonably necessary.</p>
                                </div>
                            </div>

                            {/* Section 9 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    9. Accuracy and Reliance
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>Website content may change over time. Information published on the Website should be evaluated in the context in which it is provided.</p>
                                    <p>Where a business decision depends on specific technical, commercial, legal, security, or operational information, that information should be confirmed directly with SVaaN or established through the applicable contractual documentation.</p>
                                </div>
                            </div>

                            {/* Section 10 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    10. Disclaimer
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>To the extent permitted by applicable law, the Website and its content are provided on an "as available" basis.</p>
                                    <p>SVaaN does not make warranties that the Website will always be: Available, Error-free, Complete, Secure, or Free from harmful components.</p>
                                    <p>This does not exclude or limit any rights or obligations that cannot lawfully be excluded or limited.</p>
                                </div>
                            </div>

                            {/* Section 11 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    11. Limitation of Liability
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>To the extent permitted by applicable law, SVaaN will not be responsible for losses arising solely from your use of, or reliance on, general information published on the Website.</p>
                                    <p>Nothing in these Terms is intended to exclude or limit liability that cannot legally be excluded or limited.</p>
                                </div>
                            </div>
                            
                            {/* Section 12 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    12. Indemnification
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>If an indemnification provision is required, it should be reviewed and approved by the appropriate legal/business owner before publication.</p>
                                </div>
                            </div>

                            {/* Section 13 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    13. Privacy
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>Your use of the Website is also subject to our Privacy Policy. The Privacy Policy explains how personal information may be collected and handled through the Website.</p>
                                    <p><a href="/privacy-policy" className="hover:underline font-semibold" style={{ color: "var(--t-accent)" }}>Privacy Policy &rarr;</a></p>
                                </div>
                            </div>

                            {/* Section 14 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    14. Cookies
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>The Website may use cookies or similar technologies as described in our Cookie Policy.</p>
                                    <p><a href="/cookie-policy" className="hover:underline font-semibold" style={{ color: "var(--t-accent)" }}>Cookie Policy &rarr;</a></p>
                                </div>
                            </div>

                            {/* Section 15 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    15. Governing Law and Jurisdiction
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>These Terms are intended to be governed by the laws applicable in India.</p>
                                </div>
                            </div>

                            {/* Section 16 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    16. Changes to These Terms
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>We may update these Terms when the Website, our business practices, or applicable requirements change.</p>
                                    <p>Updated Terms will be published on this page with a revised "Last Updated" date.</p>
                                    <p>Your continued use of the Website after an update may be subject to the revised Terms, to the extent permitted by applicable law.</p>
                                </div>
                            </div>

                            {/* Section 17 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    17. Contact Us
                                </h2>
                                <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: "var(--t-text-muted)" }}>
                                    For questions regarding these Terms, contact:
                                </p>
                                
                                <div className="p-6 rounded-xl border bg-[var(--t-bg-surface)]" style={{ borderColor: "var(--t-border)" }}>
                                    <h3 className="font-bold text-lg mb-2" style={{ color: "var(--t-text)" }}>SVaaN Global Tech Pvt. Ltd.</h3>
                                    <div className="space-y-2 text-sm" style={{ color: "var(--t-text-muted)" }}>
                                        <p><strong style={{ color: "var(--t-text)" }}>Email:</strong> <a href="mailto:hello@svaan.in" className="hover:underline transition-colors" style={{ color: "var(--t-accent)" }}>hello@svaan.in</a></p>
                                        <p><strong style={{ color: "var(--t-text)" }}>India:</strong> +91 96775 22812</p>
                                        <p><strong style={{ color: "var(--t-text)" }}>USA:</strong> +1 (332) 244-7372</p>
                                        <p className="mt-4"><strong style={{ color: "var(--t-text)" }}>Address:</strong><br/>
                                            <span className="inline-block mt-1">
                                                295, 13th St, S. Kolathur,<br/>
                                                Viduthalai Nagar, Kovilambakkam,<br/>
                                                Chennai 600129, India
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
