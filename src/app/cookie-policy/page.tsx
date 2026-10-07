"use client";

import { motion } from "framer-motion";

export default function CookiesPage() {
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
                        Cookie Policy
                    </motion.h1>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed space-y-4"
                        style={{ color: "var(--t-text-muted)" }}>
                        <p>
                            This Cookie Policy explains how SVaaN Global Tech Pvt. Ltd. ("SVaaN", "we", "us", or "our") may use cookies and similar technologies on the SVaaN website.
                        </p>
                        <p>
                            Cookies are small files or pieces of information stored on or accessed from your device when you visit a website. The actual cookies used by the Website depend on the technologies and services currently enabled in the production environment.
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
                                    1. Why We Use Cookies
                                </h2>
                                <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                                    Depending on the Website configuration, cookies or similar technologies may be used to:
                                </p>
                                <ul className="list-disc pl-5 text-sm sm:text-base space-y-2 mb-4" style={{ color: "var(--t-text-muted)" }}>
                                    <li>Make the Website function properly</li>
                                    <li>Maintain necessary website functionality</li>
                                    <li>Remember certain preferences</li>
                                    <li>Understand how visitors use the Website</li>
                                    <li>Improve website performance and usability</li>
                                    <li>Support analytics where enabled</li>
                                </ul>
                                <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                                    We aim to use cookies only for appropriate website or business purposes.
                                </p>
                            </div>

                            {/* Section 2 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    2. Types of Cookies
                                </h2>
                                <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: "var(--t-text-muted)" }}>
                                    Cookies can generally be grouped according to their purpose.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-5 rounded-xl border" style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
                                        <h3 className="font-semibold mb-2 text-lg" style={{ color: "var(--t-text)" }}>Essential Cookies</h3>
                                        <p className="text-sm space-y-2" style={{ color: "var(--t-text-muted)" }}>
                                            <span>These cookies may be necessary for the Website to operate or for requested functionality to work.</span><br/><br/>
                                            <span>Where a cookie is strictly necessary for the requested website functionality, it may not require consent depending on applicable law.</span>
                                        </p>
                                    </div>
                                    <div className="p-5 rounded-xl border" style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
                                        <h3 className="font-semibold mb-2 text-lg" style={{ color: "var(--t-text)" }}>Preference Cookies</h3>
                                        <p className="text-sm space-y-2" style={{ color: "var(--t-text-muted)" }}>
                                            <span>These cookies may remember choices or preferences made during website use.</span><br/><br/>
                                            <span>Examples can include settings that allow the Website to provide a more consistent experience.</span>
                                        </p>
                                    </div>
                                    <div className="p-5 rounded-xl border" style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
                                        <h3 className="font-semibold mb-2 text-lg" style={{ color: "var(--t-text)" }}>Analytics Cookies</h3>
                                        <p className="text-sm space-y-2" style={{ color: "var(--t-text-muted)" }}>
                                            <span>Analytics technologies may help us understand how visitors use the Website, such as which pages are visited and how the Website is performing.</span><br/><br/>
                                            <span>Analytics will only be described here once the actual production analytics implementation has been verified.</span>
                                        </p>
                                    </div>
                                    <div className="p-5 rounded-xl border" style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
                                        <h3 className="font-semibold mb-2 text-lg" style={{ color: "var(--t-text)" }}>Marketing Cookies</h3>
                                        <p className="text-sm space-y-2" style={{ color: "var(--t-text-muted)" }}>
                                            <span>The Website should only describe marketing or advertising cookies if such technologies are actually deployed.</span><br/><br/>
                                            <span>If no marketing or advertising cookies are used, this category should not be presented as an active website practice.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 3 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    3. Third-Party Technologies
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>Some website functionality may rely on third-party services.</p>
                                    <p>Where a third-party service places or accesses cookies or similar technologies, that service may have its own privacy and cookie practices.</p>
                                    <p>The actual third-party technologies used by the production Website should be identified through a technical scan before this policy is finalized.</p>
                                </div>
                            </div>

                            {/* Section 4 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    4. Managing Cookies
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>Depending on the Website's implementation, you may be able to manage cookie preferences through the Website's cookie controls.</p>
                                    <p>You can also manage or delete cookies through your browser settings.</p>
                                    <p>Disabling certain cookies may affect some Website functionality.</p>
                                </div>
                            </div>

                            {/* Section 5 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    5. Cookie Consent
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>Where applicable law requires consent for particular cookies or similar technologies, the Website's consent mechanism should provide the appropriate choices before those technologies are activated.</p>
                                    <p>The actual consent behaviour should match the technologies deployed on the production Website.</p>
                                </div>
                            </div>

                            {/* Section 6 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    6. Changes to This Cookie Policy
                                </h2>
                                <p className="text-sm sm:text-base leading-relaxed mb-4" style={{ color: "var(--t-text-muted)" }}>
                                    We may update this Cookie Policy when:
                                </p>
                                <ul className="list-disc pl-5 text-sm sm:text-base space-y-2 mb-4" style={{ color: "var(--t-text-muted)" }}>
                                    <li>The Website changes</li>
                                    <li>New technologies are introduced</li>
                                    <li>Existing technologies are removed</li>
                                    <li>Legal or regulatory requirements change</li>
                                </ul>
                                <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                                    The updated policy will be published on this page with a revised "Last Updated" date.
                                </p>
                            </div>

                            {/* Section 7 */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    7. Contact Us
                                </h2>
                                <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: "var(--t-text-muted)" }}>
                                    If you have questions about this Cookie Policy or the use of cookies on the Website, contact:
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
