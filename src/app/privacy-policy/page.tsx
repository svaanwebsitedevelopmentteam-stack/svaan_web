"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
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
                        Privacy Policy
                    </motion.h1>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed space-y-4"
                        style={{ color: "var(--t-text-muted)" }}>
                        <p>
                            SVaaN Global Tech Pvt. Ltd. ("SVaaN", "we", "us", or "our") respects your privacy.
                        </p>
                        <p>
                            This Privacy Policy explains how we collect, use, and handle personal information when you visit our website, communicate with us, submit an enquiry, or otherwise interact with our website.
                        </p>
                        <p>We aim to explain our practices in clear, practical language.</p>
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
                                    1. Information We May Collect
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>Depending on how you interact with our website, we may collect information such as:</p>
                                    <h3 className="font-bold text-lg pt-2" style={{ color: "var(--t-text)" }}>Information you provide directly</h3>
                                    <p>This may include information you provide when you:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Submit a contact or enquiry form</li>
                                        <li>Request information about our services</li>
                                        <li>Contact us by email or telephone</li>
                                        <li>Communicate with us regarding a business enquiry</li>
                                        <li>Submit information through another website interaction</li>
                                    </ul>
                                    <p className="pt-2">Depending on the interaction, this may include:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Name</li>
                                        <li>Email address</li>
                                        <li>Telephone number</li>
                                        <li>Company or organisation</li>
                                        <li>Information about your requirements</li>
                                        <li>Any other information you choose to provide</li>
                                    </ul>
                                    <p className="pt-2 italic">We only ask for information that is relevant to the purpose of the interaction.</p>
                                </div>
                            </div>

                            {/* Section 2 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    2. Information Collected Through Website Use
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>When you visit our website, certain technical information may be collected automatically depending on the website's configuration. This may include information such as:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Browser type</li>
                                        <li>Device type</li>
                                        <li>Operating system</li>
                                        <li>Pages visited</li>
                                        <li>Referring pages</li>
                                        <li>Approximate usage information</li>
                                        <li>Technical information required for website operation</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Section 3 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    3. How We Use Information
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>We may use information we collect to:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Respond to enquiries and requests</li>
                                        <li>Communicate with you about our services</li>
                                        <li>Understand your requirements</li>
                                        <li>Provide information you request</li>
                                        <li>Manage business communications</li>
                                        <li>Operate and maintain the website</li>
                                        <li>Improve website content and functionality</li>
                                        <li>Protect the website and its users</li>
                                        <li>Meet applicable legal or regulatory obligations</li>
                                    </ul>
                                    <p className="pt-2 font-semibold">We do not use personal information for purposes unrelated to the reason it was collected unless permitted or required by applicable law.</p>
                                </div>
                            </div>

                            {/* Section 4 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    4. Contact and Enquiry Information
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>If you contact SVaaN through the website, email, telephone, or another communication channel, we may use the information you provide to respond to your enquiry and continue the relevant business communication.</p>
                                    <p>Please avoid submitting confidential information through a general website enquiry form unless specifically requested or appropriate for the engagement.</p>
                                </div>
                            </div>

                            {/* Section 5 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    5. Cookies and Similar Technologies
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>Our website may use cookies or similar technologies. Cookies can be used for purposes such as:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Supporting website functionality</li>
                                        <li>Remembering preferences</li>
                                        <li>Understanding website usage</li>
                                        <li>Supporting analytics, where enabled</li>
                                    </ul>
                                    <p className="pt-2">The specific cookies and technologies used by the website depend on the production configuration.</p>
                                    <p><a href="/cookie-policy" className="hover:underline font-semibold" style={{ color: "var(--t-accent)" }}>For more information, see our Cookie Policy &rarr;</a></p>
                                </div>
                            </div>

                            {/* Section 6 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    6. Service Providers and Third Parties
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>SVaaN may use third-party services where necessary to operate the website or support business activities.</p>
                                    <p>The specific third parties that process personal information depend on the services actually configured and used by the website.</p>
                                    <p>We do not list third-party services as processors unless they are actually used in the relevant website or business process.</p>
                                </div>
                            </div>

                            {/* Section 7 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    7. Data Retention
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, to maintain relevant business records, or to meet applicable legal obligations.</p>
                                    <p>The appropriate retention period depends on the type of information and the reason it was collected.</p>
                                </div>
                            </div>

                            {/* Section 8 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    8. Data Security
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>We take reasonable measures appropriate to the information and systems involved to protect personal information against unauthorised access, misuse, loss, alteration, or disclosure.</p>
                                    <p>The specific technical and organisational measures used may vary according to the system, service, and environment involved.</p>
                                    <p>We do not claim a particular security certification or framework unless that claim is formally established and current.</p>
                                </div>
                            </div>

                            {/* Section 9 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    9. International Data Transfers
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>Some service providers or business operations may involve systems or services located outside India.</p>
                                    <p>Where applicable, transfers will be handled in accordance with relevant legal requirements.</p>
                                </div>
                            </div>

                            {/* Section 10 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    10. Your Rights
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>Depending on applicable law and your circumstances, you may have rights relating to your personal information. These may include rights to:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Request access to personal information</li>
                                        <li>Request correction of inaccurate information</li>
                                        <li>Request deletion where applicable</li>
                                        <li>Request restriction of certain processing</li>
                                        <li>Object to certain processing</li>
                                        <li>Withdraw consent where processing is based on consent</li>
                                        <li>Raise a privacy-related concern</li>
                                    </ul>
                                    <p className="pt-2">The availability and scope of these rights depend on applicable law. To make a privacy-related request, contact us using the details below.</p>
                                </div>
                            </div>

                            {/* Section 11 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    11. Third-Party Websites
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>Our website may contain links to third-party websites or services.</p>
                                    <p>Those websites operate independently and have their own privacy practices. We encourage you to review the privacy policies of third-party websites before providing them with personal information.</p>
                                </div>
                            </div>
                            
                            {/* Section 12 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    12. Children's Privacy
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>Our website is intended for business and professional audiences. We do not knowingly seek to collect personal information from children through the website.</p>
                                    <p>If you believe that a child has provided personal information to us through the website, please contact us so that the matter can be reviewed.</p>
                                </div>
                            </div>

                            {/* Section 13 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    13. Changes to This Privacy Policy
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>We may update this Privacy Policy when our website, business practices, or applicable legal requirements change.</p>
                                    <p>When changes are made, the updated version will be published on this page with a revised "Last Updated" date.</p>
                                </div>
                            </div>

                            {/* Section 14 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    14. Contact Us
                                </h2>
                                <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: "var(--t-text-muted)" }}>
                                    If you have a question about this Privacy Policy or how your information is handled, contact:
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
