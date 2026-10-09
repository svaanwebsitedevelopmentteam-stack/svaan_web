import Link from "next/link";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import type { LegalNavSection } from "@/components/legal/LegalTableOfContents";

const termsSections: LegalNavSection[] = [
    { id: "acceptance-of-terms", title: "1. Acceptance of Terms" },
    { id: "modifications-to-terms", title: "2. Modifications to Terms" },
    { id: "use-of-the-website", title: "3. Use of the Website" },
    { id: "intellectual-property", title: "4. Intellectual Property Rights" },
    { id: "limitation-of-liability", title: "5. Limitation of Liability" },
    { id: "third-party-links", title: "6. Third-Party Links" },
    { id: "user-generated-content", title: "7. User-Generated Content" },
    { id: "indemnification", title: "8. Indemnification" },
    { id: "privacy", title: "9. Privacy" },
    { id: "governing-law", title: "10. Governing Law" },
    { id: "contact-information", title: "11. Contact Information" },
];

export default function TermsConditionsPage() {
    return (
        <LegalPageLayout
            category="LEGAL"
            title="Terms & Conditions"
            sections={termsSections}
            description={
                <p>
                    Welcome to SVaaN Global Tech! By accessing or using our website{" "}
                    <a
                        href="https://svaantech.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium underline underline-offset-4 transition-colors"
                        style={{ color: "var(--t-accent)" }}
                    >
                        https://svaantech.com
                    </a>
                    , you agree to comply with and be bound by the following Terms and Conditions. Please review these terms carefully. If you do not agree with these terms, you should not use this website.
                </p>
            }
        >
            {/* Section 1 */}
            <LegalSection id="acceptance-of-terms" title="1. Acceptance of Terms">
                <p>
                    By accessing our website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, as well as our{" "}
                    <Link href="/privacy-policy" className="underline underline-offset-4 font-medium transition-colors" style={{ color: "var(--t-accent)" }}>
                        Privacy Policy
                    </Link>
                    .
                </p>
            </LegalSection>

            {/* Section 2 */}
            <LegalSection id="modifications-to-terms" title="2. Modifications to Terms">
                <p>
                    SVaaN Global Tech reserves the right to change or modify these Terms and Conditions at any time without prior notice. Any modifications will become effective immediately upon posting on the website. Your continued use of the website following any changes constitutes your acceptance of the updated Terms and Conditions.
                </p>
            </LegalSection>

            {/* Section 3 */}
            <LegalSection id="use-of-the-website" title="3. Use of the Website">
                <p>
                    You agree to use this website only for lawful purposes and in a manner that does not infringe upon the rights of, restrict, or inhibit anyone else’s use and enjoyment of the website.
                </p>
                <p>
                    You are prohibited from using the website to send, post, or transmit any material that is unlawful, harmful, defamatory, offensive, fraudulent, or otherwise objectionable.
                </p>
            </LegalSection>

            {/* Section 4 */}
            <LegalSection id="intellectual-property" title="4. Intellectual Property Rights">
                <p>
                    All content available on this website, including but not limited to text, graphics, logos, images, designs, videos, software, and other materials, is the property of SVaaN Global Tech or its licensors and is protected by applicable copyright, trademark, and intellectual property laws.
                </p>
                <p>
                    You may not reproduce, distribute, modify, publish, transmit, display, or otherwise use any content from this website without prior written consent from SVaaN Global Tech.
                </p>
            </LegalSection>

            {/* Section 5 */}
            <LegalSection id="limitation-of-liability" title="5. Limitation of Liability">
                <p>
                    SVaaN Global Tech shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising from or related to your use of, or inability to use, this website, including but not limited to loss of data, business interruption, revenue, or profits.
                </p>
                <p>
                    We do not guarantee the accuracy, completeness, reliability, or availability of any content or information provided on this website.
                </p>
            </LegalSection>

            {/* Section 6 */}
            <LegalSection id="third-party-links" title="6. Third-Party Links">
                <p>
                    This website may contain links to third-party websites for your convenience and reference. SVaaN Global Tech does not endorse, control, or assume responsibility for the content, privacy policies, or practices of any third-party websites.
                </p>
                <p>
                    Accessing third-party websites is entirely at your own risk.
                </p>
            </LegalSection>

            {/* Section 7 */}
            <LegalSection id="user-generated-content" title="7. User-Generated Content">
                <p>
                    Any content, feedback, suggestions, comments, or materials submitted to SVaaN Global Tech through the website may be used by us for business purposes.
                </p>
                <p>
                    By submitting such content, you grant SVaaN Global Tech a non-exclusive, worldwide, royalty-free, perpetual license to use, reproduce, modify, publish, distribute, and display the content.
                </p>
                <p>
                    SVaaN Global Tech reserves the right to review, edit, refuse, or remove any user-submitted content that violates these Terms and Conditions or is deemed inappropriate.
                </p>
            </LegalSection>

            {/* Section 8 */}
            <LegalSection id="indemnification" title="8. Indemnification">
                <p>
                    You agree to indemnify, defend, and hold harmless SVaaN Global Tech, its directors, employees, affiliates, partners, and agents from and against any claims, liabilities, damages, losses, costs, or expenses, including legal fees, arising out of your use of the website or violation of these Terms and Conditions.
                </p>
            </LegalSection>

            {/* Section 9 */}
            <LegalSection id="privacy" title="9. Privacy">
                <p>
                    Your use of this website is also governed by our{" "}
                    <Link href="/privacy-policy" className="underline underline-offset-4 font-medium transition-colors" style={{ color: "var(--t-accent)" }}>
                        Privacy Policy
                    </Link>
                    . We encourage you to review our Privacy Policy to understand how we collect, use, and protect your information.
                </p>
            </LegalSection>

            {/* Section 10 */}
            <LegalSection id="governing-law" title="10. Governing Law">
                <p>
                    These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts located in Chennai, Tamil Nadu, India.
                </p>
            </LegalSection>

            {/* Section 11 */}
            <LegalSection id="contact-information" title="11. Contact Information">
                <p className="mb-6">
                    If you have any questions, concerns, or requests regarding these Terms and Conditions, please contact us:
                </p>
                
                <div className="p-6 rounded-xl border max-w-xl" style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
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
            </LegalSection>
        </LegalPageLayout>
    );
}
