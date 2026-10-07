"use client";

import { motion } from "framer-motion";

export default function SecurityTrustPage() {
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
                            Trust
                        </div>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-4 sm:mb-6 max-w-4xl"
                        style={{ color: "var(--t-text)" }}>
                        Security & Trust
                    </motion.h1>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-base sm:text-lg lg:text-xl max-w-3xl leading-relaxed space-y-4"
                        style={{ color: "var(--t-text-muted)" }}>
                        <p className="font-semibold" style={{ color: "var(--t-text)" }}>
                            Technology you can rely on. Responsibility that continues beyond delivery.
                        </p>
                        <p>
                            At SVaaN, technology is not simply something we build and hand over. We build, modernize, operate, and evolve business technology with a focus on understanding the systems, information, people, and operational requirements involved.
                        </p>
                        <p>
                            Our approach to security is therefore practical and contextual. The controls and responsibilities required for a solution depend on the technology, information, integrations, infrastructure, users, and services involved.
                        </p>
                        <p>
                            We aim to be clear about what is established, what depends on the engagement, and what needs to be defined for a specific environment.
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
                        
                        <div className="pl-2 md:pl-6 space-y-16">

                            {/* Section 1: Security starts with understanding */}
                            <div>
                                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    Security starts with understanding
                                </h2>
                                <div className="text-sm sm:text-base leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                                    <p>Security requirements are different for every business and every technology environment.</p>
                                    <p>Before recommending or implementing a solution, relevant considerations may include:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>What information needs to be protected</li>
                                        <li>Who needs access to systems and data</li>
                                        <li>How systems communicate with each other</li>
                                        <li>Where applications and infrastructure are hosted</li>
                                        <li>What integrations and dependencies exist</li>
                                        <li>What operational responsibilities need to be maintained</li>
                                        <li>What business continuity requirements apply</li>
                                    </ul>
                                    <p className="pt-2 font-semibold" style={{ color: "var(--t-text)" }}>
                                        Security considerations should be part of technology decisions rather than something addressed only after implementation.
                                    </p>
                                </div>
                            </div>

                            {/* Section 2: Security across the technology lifecycle */}
                            <div>
                                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-8" style={{ color: "var(--t-text)" }}>
                                    Security across the technology lifecycle
                                </h2>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-6 rounded-xl border bg-[var(--t-bg-surface)]" style={{ borderColor: "var(--t-border)" }}>
                                        <div className="inline-flex items-center gap-2 mb-3">
                                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                                            <h3 className="font-bold text-lg tracking-wider uppercase" style={{ color: "var(--t-text)" }}>BUILD</h3>
                                        </div>
                                        <div className="space-y-2 text-sm sm:text-base" style={{ color: "var(--t-text-muted)" }}>
                                            <p className="font-semibold" style={{ color: "var(--t-text)" }}>Consider security from the beginning.</p>
                                            <p>When building software, security considerations can form part of requirements, architecture, development, testing, and deployment decisions.</p>
                                            <p>The specific practices and controls depend on the solution, technology stack, data involved, and requirements of the engagement.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="p-6 rounded-xl border bg-[var(--t-bg-surface)]" style={{ borderColor: "var(--t-border)" }}>
                                        <div className="inline-flex items-center gap-2 mb-3">
                                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                                            <h3 className="font-bold text-lg tracking-wider uppercase" style={{ color: "var(--t-text)" }}>MODERNIZE</h3>
                                        </div>
                                        <div className="space-y-2 text-sm sm:text-base" style={{ color: "var(--t-text-muted)" }}>
                                            <p className="font-semibold" style={{ color: "var(--t-text)" }}>Understand the existing environment before changing it.</p>
                                            <p>Modernization can affect applications, infrastructure, integrations, data, permissions, and operational processes.</p>
                                            <p>We consider the existing environment and its dependencies before recommending changes, helping ensure that modernization does not overlook important operational or security considerations.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="p-6 rounded-xl border bg-[var(--t-bg-surface)]" style={{ borderColor: "var(--t-border)" }}>
                                        <div className="inline-flex items-center gap-2 mb-3">
                                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                                            <h3 className="font-bold text-lg tracking-wider uppercase" style={{ color: "var(--t-text)" }}>OPERATE</h3>
                                        </div>
                                        <div className="space-y-2 text-sm sm:text-base" style={{ color: "var(--t-text-muted)" }}>
                                            <p className="font-semibold" style={{ color: "var(--t-text)" }}>Keep operational responsibilities visible.</p>
                                            <p>Where SVaaN is responsible for application support, infrastructure, DevOps, cloud, or other operational services, security and operational responsibilities are considered within the scope of the engagement.</p>
                                            <p>Specific monitoring, incident handling, backup, recovery, and support responsibilities depend on the services and environment involved.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="p-6 rounded-xl border bg-[var(--t-bg-surface)]" style={{ borderColor: "var(--t-border)" }}>
                                        <div className="inline-flex items-center gap-2 mb-3">
                                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--t-accent)" }} />
                                            <h3 className="font-bold text-lg tracking-wider uppercase" style={{ color: "var(--t-text)" }}>EVOLVE</h3>
                                        </div>
                                        <div className="space-y-2 text-sm sm:text-base" style={{ color: "var(--t-text-muted)" }}>
                                            <p className="font-semibold" style={{ color: "var(--t-text)" }}>Revisit security as technology changes.</p>
                                            <p>Technology environments change continuously. New applications, integrations, users, infrastructure, and business requirements can introduce new considerations.</p>
                                            <p>Security therefore needs to remain part of ongoing technology decisions rather than being treated as a one-time activity.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 3: What We Can Substantiate */}
                            <div>
                                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-8" style={{ color: "var(--t-text)" }}>
                                    What We Can Substantiate
                                </h2>
                                
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="font-bold text-xl mb-2" style={{ color: "var(--t-text)" }}>Data Handling & Privacy</h3>
                                        <div className="text-sm sm:text-base leading-relaxed space-y-2" style={{ color: "var(--t-text-muted)" }}>
                                            <p>SVaaN may receive or process information through website interactions, enquiries, forms, communications, and business engagements.</p>
                                            <p>Our Privacy Policy explains how personal information is handled through the website and how individuals can contact us regarding privacy-related matters.</p>
                                            <p><a href="/privacy-policy" className="hover:underline font-semibold" style={{ color: "var(--t-accent)" }}>Read our Privacy Policy &rarr;</a></p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-xl mb-2" style={{ color: "var(--t-text)" }}>Access Control</h3>
                                        <div className="text-sm sm:text-base leading-relaxed space-y-2" style={{ color: "var(--t-text-muted)" }}>
                                            <p>Access requirements vary depending on the systems and environments involved.</p>
                                            <p>Where SVaaN personnel require access to client systems or environments, access is determined by the requirements and responsibilities of the relevant engagement.</p>
                                            <p>We do not make a blanket public claim about a specific access-control framework across every environment.</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-xl mb-2" style={{ color: "var(--t-text)" }}>Multi-Factor Authentication</h3>
                                        <div className="text-sm sm:text-base leading-relaxed space-y-2" style={{ color: "var(--t-text-muted)" }}>
                                            <p>The use of multi-factor authentication depends on the relevant systems, services, and environments.</p>
                                            <p>SVaaN does not make a blanket public claim that MFA is enabled across every system or client environment.</p>
                                            <p>Where MFA is a requirement for a particular engagement or environment, it should be defined and verified as part of that engagement.</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-xl mb-2" style={{ color: "var(--t-text)" }}>Secure Development</h3>
                                        <div className="text-sm sm:text-base leading-relaxed space-y-2" style={{ color: "var(--t-text-muted)" }}>
                                            <p>Security considerations may form part of architecture, development, testing, deployment, and operational decisions depending on the project.</p>
                                            <p>Specific security practices should be defined according to the application's requirements, technology environment, information handled, and engagement scope.</p>
                                            <p>SVaaN does not claim a blanket certification or security framework across all development work.</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-xl mb-2" style={{ color: "var(--t-text)" }}>Backup & Recovery</h3>
                                        <div className="text-sm sm:text-base leading-relaxed space-y-2" style={{ color: "var(--t-text-muted)" }}>
                                            <p>Backup and recovery responsibilities depend on the systems, infrastructure, hosting environment, and services involved.</p>
                                            <p>Specific backup frequency, retention, recovery objectives, and disaster-recovery arrangements should be established according to the applicable engagement.</p>
                                            <p>SVaaN does not publish a universal backup or recovery commitment that applies to every client environment.</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-xl mb-2" style={{ color: "var(--t-text)" }}>Monitoring & Incident Handling</h3>
                                        <div className="text-sm sm:text-base leading-relaxed space-y-2" style={{ color: "var(--t-text-muted)" }}>
                                            <p>Monitoring and incident-handling responsibilities depend on the services and environments covered by an engagement.</p>
                                            <p>Where these responsibilities form part of an engagement, the applicable scope and operational expectations should be defined accordingly.</p>
                                            <p>SVaaN does not make a universal claim of 24/7 security monitoring or a single incident-response model across all environments.</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-xl mb-2" style={{ color: "var(--t-text)" }}>Business Continuity</h3>
                                        <div className="text-sm sm:text-base leading-relaxed space-y-2" style={{ color: "var(--t-text-muted)" }}>
                                            <p>Business continuity requirements vary according to the nature of the business, technology environment, and services involved.</p>
                                            <p>Where continuity, recovery, availability, or disaster-recovery requirements are relevant, these should be defined for the applicable environment and engagement.</p>
                                            <p>We do not publish universal uptime, RTO, RPO, or disaster-recovery guarantees that apply to every client.</p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-xl mb-2" style={{ color: "var(--t-text)" }}>Compliance & Certifications</h3>
                                        <div className="text-sm sm:text-base leading-relaxed space-y-4" style={{ color: "var(--t-text-muted)" }}>
                                            <p>We believe trust depends on accurate claims.</p>
                                            <p>SVaaN does not describe a certification, compliance status, or security framework as a marketing claim unless it is specific, current, and supportable.</p>
                                            <p>Where relevant, compliance or certification status should be understood according to its actual state:</p>
                                            <ul className="space-y-2 pl-5">
                                                <li><strong style={{ color: "var(--t-text)" }}>Certified</strong> — formally awarded and currently valid</li>
                                                <li><strong style={{ color: "var(--t-text)" }}>Implementing</strong> — currently being implemented but not yet certified</li>
                                                <li><strong style={{ color: "var(--t-text)" }}>Planned</strong> — identified as a future objective</li>
                                                <li><strong style={{ color: "var(--t-text)" }}>Not claimed</strong> — no certification or compliance claim is being made</li>
                                            </ul>
                                            <div className="pt-2">
                                                <h4 className="font-bold" style={{ color: "var(--t-text)" }}>ISO 27001</h4>
                                                <p>SVaaN does not claim ISO 27001 certification unless and until certification has been formally awarded and verified.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Section 4: Questions about security? */}
                            <div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4" style={{ color: "var(--t-text)" }}>
                                    Questions about security?
                                </h2>
                                <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: "var(--t-text-muted)" }}>
                                    Security requirements are often specific to the technology environment and business involved.<br/>
                                    If your organisation has particular security, privacy, continuity, access, or compliance requirements, we can discuss them as part of your technology engagement.
                                </p>
                                
                                <div className="p-6 rounded-xl border bg-[var(--t-bg-surface)]" style={{ borderColor: "var(--t-border)" }}>
                                    <h3 className="font-bold text-lg mb-2" style={{ color: "var(--t-text)" }}>Let's discuss your requirements.</h3>
                                    <div className="space-y-2 text-sm" style={{ color: "var(--t-text-muted)" }}>
                                        <p><strong style={{ color: "var(--t-text)" }}>Email:</strong> <a href="mailto:hello@svaan.in" className="hover:underline transition-colors" style={{ color: "var(--t-accent)" }}>hello@svaan.in</a></p>
                                        <p><strong style={{ color: "var(--t-text)" }}>India:</strong> +91 96775 22812</p>
                                        <p><strong style={{ color: "var(--t-text)" }}>USA:</strong> +1 (332) 244-7372</p>
                                        <p className="mt-4"><strong style={{ color: "var(--t-text)" }}>SVaaN Global Tech Pvt. Ltd.</strong><br/>
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
