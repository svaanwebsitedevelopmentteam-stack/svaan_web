import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="py-[60px]" style={{ borderTop: "1px solid var(--t-border)" }}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block relative w-[180px] h-[45px] mb-6 group">
                            <Image
                                src="/Primary_logo.svg"
                                alt="SVaaN"
                                fill
                                className="object-contain object-left transition-opacity group-hover:opacity-80"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--t-text-muted)" }}>
                            Connecting strategy, design, and technology to help organizations solve complex challenges and build practical digital solutions.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "var(--t-text-muted)" }}>Navigate</h4>
                        <ul className="space-y-3">
                            {[
                                { label: "Approach", href: "/approach" },
                                { label: "Capabilities", href: "/services" },
                                { label: "Work", href: "/work" },
                                { label: "Contact", href: "/contact" }
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm transition-colors hover:text-[var(--t-accent)]" style={{ color: "var(--t-text-secondary)" }}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "var(--t-text-muted)" }}>Company</h4>
                        <ul className="space-y-3">
                            {[
                                { label: "About Us", href: "/about" },
                                { label: "Leadership", href: "/leadership" }, // Leadership is part of the About page content natively
                                { label: "Privacy Policy", href: "/privacy" },
                                { label: "Terms", href: "/terms" }
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm transition-colors hover:text-[var(--t-accent)]" style={{ color: "var(--t-text-secondary)" }}>{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "var(--t-text-muted)" }}>Get in Touch</h4>
                        <ul className="space-y-3 text-sm" style={{ color: "var(--t-text-muted)" }}>
                            <li>hello@svaantech.com</li>
                            <li>96775 22812</li>
                            <li className="pt-2">
                                <span className="text-xs" style={{ color: "var(--t-text-muted)" }}>Headquarters</span>
                                <br />
                                <span style={{ color: "var(--t-text)" }}>295, 13th St, S. Kolathur,<br /> Chennai, Tamil Nadu 600129</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* <div className="py-6 mb-8 overflow-hidden" style={{ borderTop: "1px solid var(--t-border)" }}>
                    <div className="flex animate-marquee whitespace-nowrap">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <span key={i} className="mx-8 text-sm font-semibold flex items-center gap-4" style={{ color: "var(--t-accent)", opacity: 0.5 }}>
                                — WE ARE AVAILABLE — FOR NEW PROJECTS
                                <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "var(--t-accent)", opacity: 0.5 }} />
                            </span>
                        ))}
                    </div>
                </div> */}

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs" style={{ color: "var(--t-text-muted)" }}>
                    <p>&copy; {new Date().getFullYear()} SVaaN Global Tech Pvt. Ltd. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="hover:text-[var(--t-accent)] transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-[var(--t-accent)] transition-colors">Terms</Link>
                        <Link href="/cookies" className="hover:text-[var(--t-accent)] transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
