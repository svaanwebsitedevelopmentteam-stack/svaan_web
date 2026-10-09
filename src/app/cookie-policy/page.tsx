import Link from "next/link";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { LegalSection } from "@/components/legal/LegalSection";
import type { LegalNavSection } from "@/components/legal/LegalTableOfContents";

const cookieSections: LegalNavSection[] = [
    { id: "what-are-cookies", title: "1. What Are Cookies?" },
    { id: "how-we-use-cookies", title: "2. How We Use Cookies" },
    { id: "types-of-cookies", title: "3. Types of Cookies We May Use" },
    { id: "information-collected", title: "4. Information Collected Through Cookies" },
    { id: "analytics-third-party", title: "5. Analytics and Third-Party Technologies" },
    { id: "google-tag-manager", title: "6. Google Tag Manager" },
    { id: "managing-cookies", title: "7. Managing Cookies" },
    { id: "cookie-consent", title: "8. Cookie Consent" },
    { id: "cookies-personal-info", title: "9. Cookies and Personal Information" },
    { id: "third-party-websites", title: "10. Third-Party Websites" },
    { id: "changes-to-policy", title: "11. Changes to This Cookie Policy" },
    { id: "contact-us", title: "12. Contact Us" },
];

export default function CookiesPage() {
    return (
        <LegalPageLayout
            category="LEGAL"
            title="Cookie Policy"
            sections={cookieSections}
            description={
                <>
                    <p>
                        At SVaaN Global Tech Pvt. Ltd. (&ldquo;SVaaN&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), we use cookies and similar technologies on our website,{" "}
                        <a
                            href="https://svaantech.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium underline underline-offset-4 transition-colors"
                            style={{ color: "var(--t-accent)" }}
                        >
                            https://svaantech.com/
                        </a>
                        , to support website functionality, understand how visitors use our website, improve performance, and provide a better user experience.
                    </p>
                    <p>
                        This Cookie Policy explains what cookies are, how we use them, and the choices available to you.
                    </p>
                </>
            }
        >
            {/* Section 1 */}
            <LegalSection id="what-are-cookies" title="1. What Are Cookies?">
                <p>
                    Cookies are small text files that websites may store on your device when you visit them. They allow a website to recognise your browser or device and can help the website remember information about your visit.
                </p>
                <p>
                    We may also use technologies similar to cookies, including analytics and tracking technologies, for purposes described in this policy.
                </p>
            </LegalSection>

            {/* Section 2 */}
            <LegalSection id="how-we-use-cookies" title="2. How We Use Cookies">
                <p className="mb-4">
                    SVaaN may use cookies and similar technologies to:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Support the operation and functionality of our website.</li>
                    <li>Understand how visitors interact with our website.</li>
                    <li>Analyse website traffic and usage patterns.</li>
                    <li>Improve website performance and functionality.</li>
                    <li>Understand which pages and content are useful to visitors.</li>
                    <li>Improve the overall user experience.</li>
                    <li>Support website security and help identify misuse where applicable.</li>
                </ul>
                <p>
                    The technologies used on the website may change as the website and its functionality evolve.
                </p>
            </LegalSection>

            {/* Section 3 */}
            <LegalSection id="types-of-cookies" title="3. Types of Cookies We May Use">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Essential Cookies */}
                    <div className="p-6 rounded-xl border flex flex-col" style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
                        <h3 className="font-semibold mb-3 text-lg" style={{ color: "var(--t-text)" }}>
                            Essential Cookies
                        </h3>
                        <div className="text-sm leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                            <p>Some cookies may be necessary for the website to function properly.</p>
                            <p>These cookies may support basic functionality, security, navigation, or other features requested by a visitor.</p>
                            <p>Where a cookie is necessary for the operation of the website, disabling it may affect the functionality of certain parts of the website.</p>
                        </div>
                    </div>

                    {/* Functionality or Preference Cookies */}
                    <div className="p-6 rounded-xl border flex flex-col" style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
                        <h3 className="font-semibold mb-3 text-lg" style={{ color: "var(--t-text)" }}>
                            Functionality or Preference Cookies
                        </h3>
                        <div className="text-sm leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                            <p>Where applicable, cookies may be used to remember preferences or support website functionality.</p>
                            <p>These cookies may help provide a more consistent experience when you return to the website.</p>
                        </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="p-6 rounded-xl border flex flex-col" style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
                        <h3 className="font-semibold mb-3 text-lg" style={{ color: "var(--t-text)" }}>
                            Analytics Cookies
                        </h3>
                        <div className="text-sm leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                            <p>SVaaN may use analytics technologies to understand how visitors use our website and how the website performs.</p>
                            <p className="font-medium" style={{ color: "var(--t-text)" }}>Information collected through analytics technologies may include:</p>
                            <ul className="list-disc pl-5 space-y-1.5">
                                <li>Pages viewed</li>
                                <li>Date and time of visits</li>
                                <li>Referral source</li>
                                <li>Browser information</li>
                                <li>Device information</li>
                                <li>Operating system</li>
                                <li>General website usage patterns</li>
                            </ul>
                            <p>Analytics information helps us understand website usage and identify opportunities to improve the website.</p>
                        </div>
                    </div>

                    {/* Marketing or Advertising Cookies */}
                    <div className="p-6 rounded-xl border flex flex-col" style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
                        <h3 className="font-semibold mb-3 text-lg" style={{ color: "var(--t-text)" }}>
                            Marketing or Advertising Cookies
                        </h3>
                        <div className="text-sm leading-relaxed space-y-3" style={{ color: "var(--t-text-muted)" }}>
                            <p>SVaaN does not describe or classify cookies as marketing or advertising cookies unless such technologies are actually deployed on the website.</p>
                            <p>If marketing or advertising technologies are introduced in the future, this Cookie Policy may be updated accordingly.</p>
                        </div>
                    </div>
                </div>
            </LegalSection>

            {/* Section 4 */}
            <LegalSection id="information-collected" title="4. Information Collected Through Cookies">
                <p className="mb-4">
                    Depending on the technologies enabled on the website, cookies and similar technologies may collect technical or usage information such as:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>Operating system</li>
                    <li>Pages viewed</li>
                    <li>Referral source</li>
                    <li>Date and time of visits</li>
                    <li>Website usage patterns</li>
                </ul>
                <div className="space-y-3">
                    <p>
                        This information may be used together with other information described in our{" "}
                        <Link href="/privacy-policy" className="underline underline-offset-4 font-medium transition-colors" style={{ color: "var(--t-accent)" }}>
                            Privacy Policy
                        </Link>
                        .
                    </p>
                    <p>
                        Cookies themselves do not necessarily identify you by name. Personal information may be collected separately when you voluntarily provide information through forms, enquiries, communications, or other interactions with SVaaN.
                    </p>
                </div>
            </LegalSection>

            {/* Section 5 */}
            <LegalSection id="analytics-third-party" title="5. Analytics and Third-Party Technologies">
                <p>
                    The SVaaN website may use third-party technologies to support website analytics, functionality, hosting, security, marketing, or other website-related services.
                </p>
                <p>
                    Our Privacy Policy describes the categories of third-party service providers that may support activities such as:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Website hosting</li>
                    <li>Analytics services</li>
                    <li>CRM and marketing platforms</li>
                    <li>Customer support tools</li>
                    <li>IT and security services</li>
                </ul>
                <div className="space-y-3">
                    <p>
                        Third-party services may use cookies or similar technologies according to their own configurations and policies.
                    </p>
                    <p>
                        Where applicable, we recommend reviewing the privacy and cookie policies of the relevant third-party service providers.
                    </p>
                </div>
            </LegalSection>

            {/* Section 6 */}
            <LegalSection id="google-tag-manager" title="6. Google Tag Manager">
                <p>
                    The SVaaN website uses Google Tag Manager infrastructure to manage website tags and related technologies.
                </p>
                <p>
                    Google Tag Manager itself is a tag-management system and may be used to deploy other website technologies.
                </p>
                <p>
                    The specific cookies or tracking technologies activated through website tags depend on the current production configuration.
                </p>
                <p>
                    We therefore do not treat Google Tag Manager itself as a blanket statement that a particular analytics or advertising service is being used.
                </p>
            </LegalSection>

            {/* Section 7 */}
            <LegalSection id="managing-cookies" title="7. Managing Cookies">
                <p className="mb-4">
                    You can manage or delete cookies through your web browser settings. Most browsers allow you to:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>View cookies stored on your device.</li>
                    <li>Delete existing cookies.</li>
                    <li>Block cookies.</li>
                    <li>Allow cookies from specific websites.</li>
                    <li>Receive notifications before cookies are stored.</li>
                </ul>
                <p>
                    Please note that disabling certain cookies may affect the functionality or performance of some parts of the website.
                </p>
            </LegalSection>

            {/* Section 8 */}
            <LegalSection id="cookie-consent" title="8. Cookie Consent">
                <p>
                    Where applicable law requires consent before certain cookies or similar technologies are used, appropriate consent or preference mechanisms should be provided.
                </p>
                <p>
                    The actual consent behaviour of the website depends on the technologies currently enabled in the production environment.
                </p>
                <p>
                    We aim to ensure that our cookie practices and consent mechanisms remain consistent with the technologies used on the website and applicable requirements.
                </p>
            </LegalSection>

            {/* Section 9 */}
            <LegalSection id="cookies-personal-info" title="9. Cookies and Personal Information">
                <p>
                    Cookies and similar technologies may collect information that relates to your use of the website.
                </p>
                <p>
                    Our Privacy Policy explains how SVaaN collects, uses, discloses, retains, and protects personal information.
                </p>
                <p>
                    Please read this Cookie Policy together with our Privacy Policy.
                </p>
                <div className="pt-2">
                    <Link
                        href="/privacy-policy"
                        className="inline-flex items-center gap-2 font-medium underline underline-offset-4 transition-colors group"
                        style={{ color: "var(--t-accent)" }}
                    >
                        <span>Privacy Policy</span>
                        <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                    </Link>
                </div>
            </LegalSection>

            {/* Section 10 */}
            <LegalSection id="third-party-websites" title="10. Third-Party Websites">
                <p>
                    Our website may contain links to third-party websites.
                </p>
                <p>
                    This Cookie Policy applies only to the SVaaN website and does not govern the cookie practices of third-party websites.
                </p>
                <p>
                    When you visit a third-party website, we recommend reviewing that website&apos;s privacy and cookie policies.
                </p>
            </LegalSection>

            {/* Section 11 */}
            <LegalSection id="changes-to-policy" title="11. Changes to This Cookie Policy">
                <p className="mb-4">
                    We may update this Cookie Policy from time to time to reflect:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Changes to our website.</li>
                    <li>Changes to the technologies we use.</li>
                    <li>Changes to third-party services.</li>
                    <li>Changes to our business practices.</li>
                    <li>Changes to applicable legal or regulatory requirements.</li>
                </ul>
                <p>
                    When this policy is updated, the revised version will be published on this page with an updated Last Updated date.
                </p>
            </LegalSection>

            {/* Section 12 */}
            <LegalSection id="contact-us" title="12. Contact Us">
                <p className="mb-6">
                    If you have questions, concerns, or requests regarding this Cookie Policy or the use of cookies on our website, please contact us:
                </p>

                <div className="p-6 rounded-xl border max-w-xl" style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}>
                    <h3 className="font-bold text-lg mb-3" style={{ color: "var(--t-text)" }}>
                        SVaaN Global Tech Pvt. Ltd.
                    </h3>
                    <div className="space-y-2.5 text-sm sm:text-base" style={{ color: "var(--t-text-muted)" }}>
                        <p>
                            <strong style={{ color: "var(--t-text)" }}>Email:</strong>{" "}
                            <a href="mailto:hello@svaan.in" className="hover:underline transition-colors font-medium" style={{ color: "var(--t-accent)" }}>
                                hello@svaan.in
                            </a>
                        </p>
                        <p>
                            <strong style={{ color: "var(--t-text)" }}>Phone (India):</strong>{" "}
                            <a href="tel:+919677522812" className="hover:underline transition-colors">
                                +91 96775 22812
                            </a>
                        </p>
                        <p>
                            <strong style={{ color: "var(--t-text)" }}>Phone (USA):</strong>{" "}
                            <a href="tel:+13322447372" className="hover:underline transition-colors">
                                +1 (332) 244-7372
                            </a>
                        </p>
                        <div className="pt-1">
                            <strong style={{ color: "var(--t-text)" }}>Address:</strong>
                            <p className="mt-1">
                                295, 13th St, S. Kolathur, Viduthalai Nagar, Kovilambakkam,<br />
                                Chennai 600129, India
                            </p>
                        </div>
                        <p className="pt-1">
                            <strong style={{ color: "var(--t-text)" }}>Website:</strong>{" "}
                            <a
                                href="https://svaantech.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline transition-colors font-medium"
                                style={{ color: "var(--t-accent)" }}
                            >
                                https://svaantech.com/
                            </a>
                        </p>
                    </div>
                </div>
            </LegalSection>
        </LegalPageLayout>
    );
}
