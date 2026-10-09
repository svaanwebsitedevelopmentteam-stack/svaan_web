import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import type { LegalNavSection } from "@/components/legal/LegalTableOfContents";

const privacySections: LegalNavSection[] = [
    { id: "information-we-collect", title: "1. Information We Collect" },
    { id: "how-we-use-information", title: "2. How We Use Your Information" },
    { id: "sharing-disclosure", title: "3. Sharing and Disclosure of Information" },
    { id: "data-security", title: "4. Data Security" },
    { id: "data-retention", title: "5. Data Retention" },
    { id: "your-rights", title: "6. Your Rights" },
    { id: "third-party-websites", title: "7. Third-Party Websites" },
    { id: "childrens-privacy", title: "8. Children's Privacy" },
    { id: "changes-to-policy", title: "9. Changes to This Privacy Policy" },
    { id: "contact-us", title: "10. Contact Us" },
];

export default function PrivacyPolicyPage() {
    return (
        <LegalPageLayout
            category="LEGAL"
            title="Privacy Policy"
            sections={privacySections}
            description={
                <p>
                    At SVaaN Global Tech, accessible from{" "}
                    <a
                        href="https://svaantech.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium underline underline-offset-4 transition-colors"
                        style={{ color: "var(--t-accent)" }}
                    >
                        https://svaantech.com/
                    </a>
                    , we are committed to protecting the privacy and security of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
            }
        >
            {/* Section 1 */}
            <LegalSection id="information-we-collect" title="1. Information We Collect">
                <p className="mb-4">
                    We may collect and process the following types of information:
                </p>

                <div className="space-y-6">
                    <div>
                        <h3 className="font-bold text-base sm:text-lg mb-2" style={{ color: "var(--t-text)" }}>
                            Personal Information
                        </h3>
                        <p className="mb-2">
                            When you contact us, request information, submit forms, subscribe to our communications, or engage with our services, we may collect personal information such as:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Company name</li>
                            <li>Job title</li>
                            <li>Any other information voluntarily provided by you</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-base sm:text-lg mb-2" style={{ color: "var(--t-text)" }}>
                            Usage Information
                        </h3>
                        <p className="mb-2">
                            We may automatically collect certain information about your interaction with our website, including:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>IP address</li>
                            <li>Browser type and version</li>
                            <li>Device information</li>
                            <li>Operating system</li>
                            <li>Pages viewed</li>
                            <li>Referral source</li>
                            <li>Date and time of visits</li>
                            <li>Website usage patterns</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-base sm:text-lg mb-2" style={{ color: "var(--t-text)" }}>
                            Cookies and Tracking Technologies
                        </h3>
                        <p>
                            We use cookies, analytics tools, and similar technologies to improve website performance, personalize user experiences, and analyze website traffic. You can manage cookie preferences through your browser settings.
                        </p>
                    </div>
                </div>
            </LegalSection>

            {/* Section 2 */}
            <LegalSection id="how-we-use-information" title="2. How We Use Your Information">
                <p className="mb-2">
                    We may use the information we collect to:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Provide, operate, and improve our services</li>
                    <li>Respond to inquiries and support requests</li>
                    <li>Communicate important updates and service information</li>
                    <li>Send marketing communications where permitted by law</li>
                    <li>Analyze website performance and user behavior</li>
                    <li>Improve website functionality and user experience</li>
                    <li>Prevent fraud, misuse, or security threats</li>
                    <li>Comply with legal and regulatory obligations</li>
                </ul>
            </LegalSection>

            {/* Section 3 */}
            <LegalSection id="sharing-disclosure" title="3. Sharing and Disclosure of Information">
                <p className="font-medium" style={{ color: "var(--t-text)" }}>
                    We do not sell, rent, or trade your personal information.
                </p>
                <p>We may share information in the following circumstances:</p>

                <div className="space-y-4 pl-1">
                    <div>
                        <h3 className="font-bold text-base mb-1" style={{ color: "var(--t-text)" }}>
                            Service Providers
                        </h3>
                        <p className="mb-2">We may share information with trusted third-party vendors and service providers who assist us with:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Website hosting</li>
                            <li>Analytics services</li>
                            <li>CRM and marketing platforms</li>
                            <li>Customer support tools</li>
                            <li>IT and security services</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-base mb-1" style={{ color: "var(--t-text)" }}>
                            Legal Requirements
                        </h3>
                        <p>
                            We may disclose information if required by law, court order, government authority, or to protect our legal rights and interests.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-base mb-1" style={{ color: "var(--t-text)" }}>
                            Business Transfers
                        </h3>
                        <p>
                            In the event of a merger, acquisition, restructuring, sale of assets, or other business transaction, your information may be transferred as part of that transaction.
                        </p>
                    </div>
                </div>
            </LegalSection>

            {/* Section 4 */}
            <LegalSection id="data-security" title="4. Data Security">
                <p>
                    SVaaN Global Tech implements appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction.
                </p>
                <p>
                    While we strive to use commercially acceptable means to safeguard your data, no method of electronic transmission or storage can be guaranteed to be completely secure.
                </p>
            </LegalSection>

            {/* Section 5 */}
            <LegalSection id="data-retention" title="5. Data Retention">
                <p>
                    We retain personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
                </p>
            </LegalSection>

            {/* Section 6 */}
            <LegalSection id="your-rights" title="6. Your Rights">
                <p>Depending on applicable laws and your location, you may have the right to:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Access your personal information</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of personal data</li>
                    <li>Restrict or object to processing</li>
                    <li>Withdraw consent where applicable</li>
                    <li>Opt out of marketing communications</li>
                </ul>
                <p className="pt-2">To exercise these rights, please contact us using the details provided below.</p>
            </LegalSection>

            {/* Section 7 */}
            <LegalSection id="third-party-websites" title="7. Third-Party Websites">
                <p>
                    Our website may contain links to external websites. This Privacy Policy applies only to SVaaN Global Tech and does not cover third-party websites. We are not responsible for the privacy practices or content of external sites.
                </p>
            </LegalSection>

            {/* Section 8 */}
            <LegalSection id="childrens-privacy" title="8. Children's Privacy">
                <p>
                    Our website and services are not directed toward individuals under the age of 18. We do not knowingly collect personal information from children.
                </p>
            </LegalSection>

            {/* Section 9 */}
            <LegalSection id="changes-to-policy" title="9. Changes to This Privacy Policy">
                <p>
                    We may update this Privacy Policy from time to time to reflect changes in our business practices, legal requirements, or service offerings.
                </p>
                <p>
                    Any updates will be posted on this page with the revised effective date. Continued use of our website following changes constitutes acceptance of the updated Privacy Policy.
                </p>
            </LegalSection>

            {/* Section 10 */}
            <LegalSection id="contact-us" title="10. Contact Us">
                <p className="mb-6">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us:
                </p>

                <div className="p-6 rounded-xl border max-w-xl mb-6" style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
                    <h3 className="font-bold text-lg mb-3" style={{ color: "var(--t-text)" }}>SVaaN Global Tech</h3>
                    <div className="space-y-2.5 text-sm sm:text-base" style={{ color: "var(--t-text-muted)" }}>
                        <p>
                            <strong style={{ color: "var(--t-text)" }}>Email:</strong>{" "}
                            <a href="mailto:hello@svaan.in" className="hover:underline transition-colors font-medium" style={{ color: "var(--t-accent)" }}>
                                hello@svaan.in
                            </a>
                        </p>
                        <p>
                            <strong style={{ color: "var(--t-text)" }}>Phone (USA):</strong>{" "}
                            <a href="tel:+13322447372" className="hover:underline transition-colors">
                                +1 (332) 244-7372
                            </a>
                        </p>
                        <p>
                            <strong style={{ color: "var(--t-text)" }}>Phone (India):</strong>{" "}
                            <a href="tel:+919677522812" className="hover:underline transition-colors">
                                +91 96775 22812
                            </a>
                        </p>
                        <p>
                            <strong style={{ color: "var(--t-text)" }}>Website:</strong>{" "}
                            <a href="https://svaantech.com/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors font-medium" style={{ color: "var(--t-accent)" }}>
                                https://svaantech.com/
                            </a>
                        </p>
                    </div>
                </div>

                <p className="italic" style={{ color: "var(--t-text-muted)" }}>
                    By using our website, you agree to this Privacy Policy. Thank you for trusting SVaaN Global Tech with your personal information.
                </p>
            </LegalSection>
        </LegalPageLayout>
    );
}
