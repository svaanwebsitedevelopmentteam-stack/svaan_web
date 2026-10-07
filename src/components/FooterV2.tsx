import Link from "next/link";
import Image from "next/image";

export function FooterV2() {
    return (
        <footer
            className="w-full relative text-slate-200 border-t border-slate-800/80 overflow-hidden z-10 shadow-2xl bg-[#060D1A]"
            style={{
                backgroundImage: "url('/footer-bg.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Dark overlay to ensure contrast and readability while showcasing the tech background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#060D1A]/90 via-[#060D1A]/85 to-[#030712]/95 backdrop-blur-[1px] pointer-events-none z-0" />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 pt-10 pb-12 lg:pt-10 lg:pb-8">

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-10 lg:gap-y-12 mb-8">

                    {/* Column 1: Solutions + Site Logo (col-reverse on mobile) */}
                    <div className="lg:col-span-3 flex flex-col-reverse md:flex-col justify-between gap-8">
                        <div>
                            <h4 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-white mb-5">
                                Solutions
                            </h4>
                            <ul className="flex flex-col gap-3.5 text-sm text-slate-300">
                                <li>
                                    <Link href="/solutions/build" className="hover:text-[#38BDF8] hover:translate-x-0.5 inline-block transition-all">
                                        Build
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/solutions/modernize" className="hover:text-[#38BDF8] hover:translate-x-0.5 inline-block transition-all">
                                        Modernize
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/solutions/operate" className="hover:text-[#38BDF8] hover:translate-x-0.5 inline-block transition-all">
                                        Operate
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/solutions/evolve" className="hover:text-[#38BDF8] hover:translate-x-0.5 inline-block transition-all">
                                        Evolve
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Site Logo with separate light background and border radius */}
                        <div>
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-white shadow-md border border-slate-200/60 hover:bg-slate-50 transition-all group focus:outline-none"
                            >
                                <div className="relative w-[160px] h-[40px]">
                                    <Image
                                        src="/Primary_logo.svg"
                                        alt="SVaaN Global Tech"
                                        fill
                                        className="object-contain object-left transition-opacity group-hover:opacity-90"
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Company & Work */}
                    <div className="lg:col-span-3 flex flex-col gap-9">
                        <div>
                            <h4 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-white mb-5">
                                Company
                            </h4>
                            <ul className="flex flex-col gap-3.5 text-sm text-slate-300">
                                <li>
                                    <Link href="/about" className="hover:text-[#38BDF8] hover:translate-x-0.5 inline-block transition-all">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/leadership" className="hover:text-[#38BDF8] hover:translate-x-0.5 inline-block transition-all">
                                        Leadership
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/why-svaan" className="hover:text-[#38BDF8] hover:translate-x-0.5 inline-block transition-all">
                                        Why SVaaN
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/careers" className="hover:text-[#38BDF8] hover:translate-x-0.5 inline-block transition-all">
                                        Careers
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-white mb-4">
                                Work
                            </h4>
                            <ul className="flex flex-col gap-3.5 text-sm text-slate-300">
                                <li>
                                    <Link href="/work" className="hover:text-[#38BDF8] hover:translate-x-0.5 inline-block transition-all">
                                        Client Stories
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 3: Resources & Legal */}
                    <div className="lg:col-span-3 flex flex-col gap-9">
                        <div>
                            <h4 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-white mb-5">
                                Resources
                            </h4>
                            <ul className="flex flex-col gap-3.5 text-sm text-slate-300">
                                <li>
                                    <Link href="#!" className="hover:text-[#38BDF8] hover:translate-x-0.5 inline-block transition-all">
                                        Insights
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/security-trust" className="hover:text-[#38BDF8] hover:translate-x-0.5 inline-block transition-all">
                                        Security & Trust
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-white mb-4">
                                Legal
                            </h4>
                            <ul className="flex flex-col gap-3.5 text-sm text-slate-300">
                                <li>
                                    <Link href="/privacy-policy" className="hover:text-[#38BDF8] hover:translate-x-0.5 inline-block transition-all">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms-conditions" className="hover:text-[#38BDF8] hover:translate-x-0.5 inline-block transition-all">
                                        Terms & Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/cookie-policy" className="hover:text-[#38BDF8] hover:translate-x-0.5 inline-block transition-all">
                                        Cookie Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 4: Contact & Office Info */}
                    <div className="lg:col-span-3 flex flex-col gap-5">
                        <h4 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-white">
                            Contact
                        </h4>

                        <div className="space-y-6 text-sm text-slate-300">
                            <div>
                                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Email</span>
                                <a href="mailto:hello@svaan.in" className="font-medium text-slate-200 hover:text-[#38BDF8] transition-colors">
                                    hello@svaan.in
                                </a>
                            </div>

                            <div>
                                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Telephone</span>
                                <div className="flex flex-col gap-1">
                                    <a href="tel:+919677522812" className="text-slate-200 hover:text-[#38BDF8] transition-colors">
                                        India: +91 96775 22812
                                    </a>
                                    <a href="tel:+13322447372" className="text-slate-200 hover:text-[#38BDF8] transition-colors">
                                        USA: +1 (332) 244-7372
                                    </a>
                                </div>
                            </div>

                            <div>
                                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Headquarters</span>
                                <a
                                    href="https://maps.app.goo.gl/XxuGxdB5bkzpNDop8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-300 hover:text-[#38BDF8] leading-relaxed text-sm transition-colors inline-block"
                                >
                                    295, 13th St, S. Kolathur, Viduthalai Nagar, Kovilambakkam, Chennai 600129, India
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Divider, Copyright & Socials */}
                <div className="pt-6 border-t border-slate-800/80 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="flex flex-col gap-1.5">
                        <p className="text-xs sm:text-sm font-medium text-slate-400">
                            © {new Date().getFullYear()} SVaaN Global Tech. All rights reserved.
                        </p>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex items-center gap-2.5">
                        <a
                            href="https://www.linkedin.com/company/2021-svaan-tech/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="w-9 h-9 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-300 hover:text-white hover:border-[#38BDF8] hover:bg-slate-800 shadow-sm transition-all flex items-center justify-center"
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.instagram.com/svaanglobaltech"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="w-9 h-9 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-300 hover:text-white hover:border-[#38BDF8] hover:bg-slate-800 shadow-sm transition-all flex items-center justify-center"
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.facebook.com/people/SVaaN-Global-Tech-PVT-LTD/61557652132908/?mibextid=ZbWKwL"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="w-9 h-9 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-300 hover:text-white hover:border-[#38BDF8] hover:bg-slate-800 shadow-sm transition-all flex items-center justify-center"
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                            </svg>
                        </a>
                        <a
                            href="https://maps.app.goo.gl/XxuGxdB5bkzpNDop8"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Google Maps"
                            className="w-9 h-9 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-300 hover:text-white hover:border-[#38BDF8] hover:bg-slate-800 shadow-sm transition-all flex items-center justify-center"
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
