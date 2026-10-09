import Link from "next/link";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import type { LegalNavSection } from "@/components/legal/LegalTableOfContents";

const securitySections: LegalNavSection[] = [
    { id: "security-understanding", title: "1. Security starts with understanding" },
    { id: "security-lifecycle", title: "2. Security across the technology lifecycle" },
    { id: "what-we-substantiate", title: "3. What We Can Substantiate" },
    { id: "questions-about-security", title: "4. Questions about security?" },
];

export default function SecurityTrustPage() {
    return (
        <LegalPageLayout
            category="SECURITY & TRUST"
            title="Security & Trust"
            sections={securitySections}
            description={
                <>
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
                </>
            }
        >
            {/* Section 1 */}
            <LegalSection id="security-understanding" title="1. Security starts with understanding">
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
            </LegalSection>

            {/* Section 2 */}
            <LegalSection id="security-lifecycle" title="2. Security across the technology lifecycle">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
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
            </LegalSection>

            {/* Section 3 */}
            <LegalSection id="what-we-substantiate" title="3. What We Can Substantiate">
                <div className="space-y-8 pt-2">
                    <div>
                        <h3 className="font-bold text-lg sm:text-xl mb-2" style={{ color: "var(--t-text)" }}>Data Handling & Privacy</h3>
                        <div className="text-sm sm:text-base leading-relaxed space-y-2" style={{ color: "var(--t-text-muted)" }}>
                            <p>SVaaN may receive or process information through website interactions, enquiries, forms, communications, and business engagements.</p>
                            <p>Our Privacy Policy explains how personal information is handled through the website and how individuals can contact us regarding privacy-related matters.</p>
                            <p><Link href="/privacy-policy" className="hover:underline font-semibold" style={{ color: "var(--t-accent)" }}>Read our Privacy Policy &rarr;</Link></p>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg sm:text-xl mb-2" style={{ color: "var(--t-text)" }}>Access Control</h3>
                        <div className="text-sm sm:text-base leading-relaxed space-y-2" style={{ color: "var(--t-text-muted)" }}>
                            <p>Access requirements vary depending on the systems and environments involved.</p>
                            <p>Where SVaaN personnel require access to client systems or environments, access is determined by the requirements and responsibilities of the relevant engagement.</p>
                            <p>We do not make a blanket public claim about a specific access-control framework across every environment.</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg sm:text-xl mb-2" style={{ color: "var(--t-text)" }}>Multi-Factor Authentication</h3>
                        <div className="text-sm sm:text-base leading-relaxed space-y-2" style={{ color: "var(--t-text-muted)" }}>
                            <p>The use of multi-factor authentication depends on the relevant systems, services, and environments.</p>
                            <p>SVaaN does not make a blanket public claim that MFA is enabled across every system or client environment.</p>
                            <p>Where MFA is a requirement for a particular engagement or environment, it should be defined and verified as part of that engagement.</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg sm:text-xl mb-2" style={{ color: "var(--t-text)" }}>Secure Development</h3>
                        <div className="text-sm sm:text-base leading-relaxed space-y-2" style={{ color: "var(--t-text-muted)" }}>
                            <p>Security considerations may form part of architecture, development, testing, deployment, and operational decisions depending on the project.</p>
                            <p>Specific security practices should be defined according to the application&apos;s requirements, technology environment, information handled, and engagement scope.</p>
                            <p>SVaaN does not claim a blanket certification or security framework across all development work.</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg sm:text-xl mb-2" style={{ color: "var(--t-text)" }}>Backup & Recovery</h3>
                        <div className="text-sm sm:text-base leading-relaxed space-y-2" style={{ color: "var(--t-text-muted)" }}>
                            <p>Backup and recovery responsibilities depend on the systems, infrastructure, hosting environment, and services involved.</p>
                            <p>Specific backup frequency, retention, recovery objectives, and disaster-recovery arrangements should be established according to the applicable engagement.</p>
                            <p>SVaaN does not publish a universal backup or recovery commitment that applies to every client environment.</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg sm:text-xl mb-2" style={{ color: "var(--t-text)" }}>Monitoring & Incident Handling</h3>
                        <div className="text-sm sm:text-base leading-relaxed space-y-2" style={{ color: "var(--t-text-muted)" }}>
                            <p>Monitoring and incident-handling responsibilities depend on the services and environments covered by an engagement.</p>
                            <p>Where these responsibilities form part of an engagement, the applicable scope and operational expectations should be defined accordingly.</p>
                            <p>SVaaN does not make a universal claim of 24/7 security monitoring or a single incident-response model across all environments.</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg sm:text-xl mb-2" style={{ color: "var(--t-text)" }}>Business Continuity</h3>
                        <div className="text-sm sm:text-base leading-relaxed space-y-2" style={{ color: "var(--t-text-muted)" }}>
                            <p>Business continuity requirements vary according to the nature of the business, technology environment, and services involved.</p>
                            <p>Where continuity, recovery, availability, or disaster-recovery requirements are relevant, these should be defined for the applicable environment and engagement.</p>
                            <p>We do not publish universal uptime, RTO, RPO, or disaster-recovery guarantees that apply to every client.</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg sm:text-xl mb-2" style={{ color: "var(--t-text)" }}>Compliance & Certifications</h3>
                        <div className="text-sm sm:text-base leading-relaxed space-y-4" style={{ color: "var(--t-text-muted)" }}>
                            <p>We believe trust depends on accurate claims.</p>
                            <p>SVaaN does not describe a certification, compliance status, or security framework as a marketing claim unless it is specific, current, and supportable.</p>
                            <p>Where relevant, compliance or certification status should be understood according to its actual state:</p>
                            <ul className="space-y-2 pl-5">
                                <li><strong style={{ color: "var(--t-text)" }}>Certified</strong> &mdash; formally awarded and currently valid</li>
                                <li><strong style={{ color: "var(--t-text)" }}>Implementing</strong> &mdash; currently being implemented but not yet certified</li>
                                <li><strong style={{ color: "var(--t-text)" }}>Planned</strong> &mdash; identified as a future objective</li>
                                <li><strong style={{ color: "var(--t-text)" }}>Not claimed</strong> &mdash; no certification or compliance claim is being made</li>
                            </ul>
                            <div className="pt-2">
                                <h4 className="font-bold mb-1" style={{ color: "var(--t-text)" }}>ISO 27001</h4>
                                <p>SVaaN does not claim ISO 27001 certification unless and until certification has been formally awarded and verified.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </LegalSection>

            {/* Section 4 */}
            <LegalSection id="questions-about-security" title="4. Questions about security?">
                <p className="mb-6">
                    Security requirements are often specific to the technology environment and business involved.<br />
                    If your organisation has particular security, privacy, continuity, access, or compliance requirements, we can discuss them as part of your technology engagement.
                </p>
                
                <div className="p-6 rounded-xl border max-w-xl" style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
                    <h3 className="font-bold text-lg mb-2" style={{ color: "var(--t-text)" }}>Let&apos;s discuss your requirements.</h3>
                    <div className="space-y-2 text-sm sm:text-base" style={{ color: "var(--t-text-muted)" }}>
                        <p><strong style={{ color: "var(--t-text)" }}>Email:</strong> <a href="mailto:hello@svaan.in" className="hover:underline transition-colors font-medium" style={{ color: "var(--t-accent)" }}>hello@svaan.in</a></p>
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
            </LegalSection>
        </LegalPageLayout>
    );
}
