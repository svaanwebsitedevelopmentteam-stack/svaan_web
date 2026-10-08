import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer
            className="dark py-16 pb-10 relative overflow-hidden z-0"
            style={{
                backgroundColor: "var(--t-bg)",
                borderTop: "1px solid var(--t-border)",
                backgroundImage:
                    "linear-gradient(to bottom, var(--t-bg), color-mix(in srgb, var(--t-accent) 10%, var(--t-bg)))",
            }}
        >
            {/* Ambient Background Glow */}
            <div
                className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full blur-[200px] pointer-events-none z-[-2]"
                style={{
                    backgroundColor: "var(--t-accent)",
                    opacity: "calc(var(--t-orb-opacity) * 0.4)",
                }}
            />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="lg:col-span-1">
                        <Link
                            href="/"
                            className="inline-block relative w-[180px] h-[45px] mb-6 group rounded-[var(--t-radius-sm)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2"
                            data-cursor-solid="true"
                        >
                            <Image
                                src="/Primary_logo.svg"
                                alt="SVaaN"
                                fill
                                sizes="180px"
                                className="object-contain object-left transition-opacity group-hover:opacity-80"
                            />
                        </Link>
                        <p
                            className="text-sm leading-relaxed max-w-xs"
                            style={{ color: "var(--t-text-muted)" }}
                        >
                            Connecting strategy, design, and technology to help organizations solve
                            complex challenges and build practical digital solutions.
                        </p>
                    </div>

                    <div>
                        <h4
                            className="text-xs font-semibold uppercase tracking-widest mb-6"
                            style={{ color: "var(--t-text-muted)" }}
                        >
                            Navigate
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { label: "Approach", href: "/approach" },
                                { label: "Capabilities", href: "/capabilities" },
                                { label: "Work", href: "/work" },
                                { label: "Contact", href: "/contact" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm transition-colors hover:text-[var(--t-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2 rounded-[var(--t-radius-sm)]"
                                        style={{ color: "var(--t-text-secondary)" }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4
                            className="text-xs font-semibold uppercase tracking-widest mb-6"
                            style={{ color: "var(--t-text-muted)" }}
                        >
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { label: "About Us", href: "/about" },
                                { label: "Leadership", href: "/leadership" },
                                { label: "Privacy Policy", href: "/privacy-policy" },
                                { label: "Terms", href: "/terms-conditions" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-sm transition-colors hover:text-[var(--t-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2 rounded-[var(--t-radius-sm)]"
                                        style={{ color: "var(--t-text-secondary)" }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4
                            className="text-xs font-semibold uppercase tracking-widest mb-6"
                            style={{ color: "var(--t-text-muted)" }}
                        >
                            Get in Touch
                        </h4>
                        <ul
                            className="space-y-3 text-sm"
                            style={{ color: "var(--t-text-muted)" }}
                        >
                            <li>
                                <a href="mailto:hello@svaan.in" className="hover:text-[var(--t-accent)] transition-colors">
                                    hello@svaan.in
                                </a>
                            </li>
                            <li className="pt-2">
                                <span
                                    className="text-xs"
                                    style={{ color: "var(--t-text-muted)" }}
                                >
                                    Headquarters
                                </span>
                                <br />
                                <span style={{ color: "var(--t-text)" }}>
                                    295, 13th St, S. Kolathur,
                                    <br /> Chennai, Tamil Nadu 600129
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div
                    className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs"
                    style={{ color: "var(--t-text-muted)" }}
                >
                    <p>
                        &copy; {new Date().getFullYear()} SVaaN Global Tech Pvt. Ltd. All rights
                        reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link
                            href="/privacy-policy"
                            className="hover:text-[var(--t-accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2 rounded-[var(--t-radius-sm)]"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/terms-conditions"
                            className="hover:text-[var(--t-accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2 rounded-[var(--t-radius-sm)]"
                        >
                            Terms
                        </Link>
                        <Link
                            href="/cookie-policy"
                            className="hover:text-[var(--t-accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2 rounded-[var(--t-radius-sm)]"
                        >
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
