import Link from "next/link";
import Image from "next/image";

const placeholderInsights = [
    {
        id: 1,
        title: "Why understand business before building software?",
        category: "Strategy",
        date: "Sep 2026",
        link: "/insights/understand-before-build",
    },
    {
        id: 2,
        title: "The intersection of AI automation and legacy systems",
        category: "AI & Automation",
        date: "Aug 2026",
        link: "/insights/ai-automation-legacy",
    },
    {
        id: 3,
        title: "Navigating complexity in digital transformation",
        category: "Digital Products",
        date: "Jul 2026",
        link: "/insights/navigating-complexity",
    },
];

export function InsightsGrid() {
    return (
        <section className="w-full bg-canvas py-[60px] md:py-[60px]">
            <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-20 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-10">
                <div className="max-w-2xl">
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-slate mb-6">
                        Practical thinking for a changing digital world.
                    </h2>
                    <p className="text-xl text-slate/70 leading-relaxed max-w-xl">
                        Explore perspectives on strategy, digital transformation, product,
                        technology, AI, engineering, and technology management.
                    </p>
                </div>
                <Link
                    href="/insights"
                    className="group inline-flex items-center justify-center rounded-full bg-white text-slate border border-slate/10 px-8 h-14 font-medium transition-all hover:bg-slate/5"
                >
                    Explore insights
                </Link>
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {placeholderInsights.map((insight) => (
                        <Link
                            key={insight.id}
                            href={insight.link}
                            className="group flex flex-col cursor-pointer"
                        >
                            <div className="relative w-full aspect-[4/3] bg-slate/5 rounded-2xl mb-6 overflow-hidden">
                                {/* Simulated Image Zoom Effect */}
                                <div className="absolute inset-0 bg-slate/10 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" />
                                <div className="absolute inset-0 flex items-center justify-center text-slate/20 font-display font-medium text-lg">
                                    Insight Visual
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-sm font-semibold text-svaan-blue mb-3">
                                <span className="uppercase tracking-widest">{insight.category}</span>
                                <span className="w-1 h-1 rounded-full bg-slate/20" />
                                <span className="text-slate/40">{insight.date}</span>
                            </div>
                            <h3 className="font-display text-2xl font-bold text-slate leading-snug group-hover:text-svaan-blue transition-colors">
                                {insight.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
