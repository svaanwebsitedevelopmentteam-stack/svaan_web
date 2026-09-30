import Link from "next/link";

const industries = [
    "FinTech & Banking",
    "Healthcare & HealthTech",
    "Real Estate & PropTech",
    "B2B SaaS",
    "Logistics & Supply Chain",
    "Telecoms",
    "E-commerce & Retail",
    "Education & EdTech",
    "Travel & Hospitality",
];

export function Industries() {
    return (
        <section className="w-full bg-slate text-white py-[60px] md:py-[60px]">
            <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-10">
                <div className="max-w-2xl">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                        Technology shaped around your business context.
                    </h2>
                    <p className="text-xl text-white/70 leading-relaxed max-w-xl">
                        Different industries face different constraints, customers, operating
                        models, and technology needs. Our capabilities can be adapted to the
                        context in which your organization operates.
                    </p>
                </div>
                <Link
                    href="/industries"
                    className="group inline-flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white px-8 h-14 font-medium transition-all hover:bg-white hover:text-slate"
                >
                    Explore industries
                </Link>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                {/* Minimal typography list spread across a CSS grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {industries.map((industry) => (
                        <div key={industry} className="group relative border-b border-white/10 pb-6">
                            <Link
                                href={`/industries/${industry.toLowerCase().replace(/\s*&\s*/g, "-").replace(/[^a-z0-9-]/g, "")}`}
                                className="flex items-center justify-between"
                            >
                                <span className="font-display text-2xl md:text-3xl text-white/50 font-medium transition-colors duration-300 group-hover:text-white">
                                    {industry}
                                </span>
                                <span className="text-svaan-blue opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
