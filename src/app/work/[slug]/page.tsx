import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { projectsData } from "@/data/projectsData";
import { CTASection } from "@/components/CTASection";

export function generateStaticParams() {
    return Object.keys(projectsData).map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const project = projectsData[slug];
    if (!project) return { title: "Case Study Not Found" };
    return {
        title: `${project.title} - ${project.category} Case Study`,
        description: project.summary,
        openGraph: {
            title: `${project.title} - ${project.category} Case Study | SVaaN Global Tech`,
            description: project.summary,
        },
    };
}

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = projectsData[slug];

    if (!project) {
        notFound();
    }

    const ProjectIllustration = project.Illustration;

    return (
        <main className="w-full overflow-x-clip min-h-screen" style={{ backgroundColor: "var(--t-bg)" }}>
            {/* HERO SECTION */}
            <section
                className="relative overflow-clip pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 border-b"
                style={{ borderColor: "var(--t-border)" }}
            >
                {/* Ambient Glow */}
                <div
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[350px] sm:h-[450px] rounded-full blur-[190px] pointer-events-none"
                    style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }}
                />

                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 w-full">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-xs font-semibold mb-6 uppercase tracking-wider">
                        <Link
                            href="/work"
                            className="hover:underline transition-colors"
                            style={{ color: "var(--t-text-muted)" }}
                        >
                            Work
                        </Link>
                        <span style={{ color: "var(--t-border)" }}>/</span>
                        <span style={{ color: "var(--t-accent)" }}>{project.category}</span>
                        <span style={{ color: "var(--t-border)" }}>/</span>
                        <span style={{ color: "var(--t-text)" }}>{project.title}</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 sm:gap-14 lg:gap-16 items-center">
                        <div>
                            {/* Tags row */}
                            <div className="flex flex-wrap items-center gap-2 mb-4">
                                <span
                                    className="px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider border"
                                    style={{
                                        backgroundColor: "var(--t-bg-card)",
                                        borderColor: "var(--t-border)",
                                        color: "var(--t-accent)",
                                    }}
                                >
                                    {project.category}
                                </span>
                                <span
                                    className="px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider border"
                                    style={{
                                        backgroundColor: "var(--t-bg-surface)",
                                        borderColor: "var(--t-border)",
                                        color: "var(--t-text)",
                                    }}
                                >
                                    {project.scope}
                                </span>
                            </div>

                            <h1
                                className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-5"
                                style={{ color: "var(--t-text)" }}
                            >
                                {project.title}
                            </h1>

                            <p
                                className="text-base sm:text-lg lg:text-xl leading-relaxed mb-8"
                                style={{ color: "var(--t-text-muted)" }}
                            >
                                {project.summary}
                            </p>

                            {/* Client & Scope summary block */}
                            <div
                                className="p-4 sm:p-5 rounded-2xl border flex flex-wrap items-center justify-between gap-4"
                                style={{
                                    backgroundColor: "var(--t-bg-card)",
                                    borderColor: "var(--t-border)",
                                }}
                            >
                                <div>
                                    <div
                                        className="text-xs uppercase font-mono tracking-wider font-semibold"
                                        style={{ color: "var(--t-text-muted)" }}
                                    >
                                        Client Partner
                                    </div>
                                    <div className="text-sm sm:text-base font-bold" style={{ color: "var(--t-text)" }}>
                                        {project.client}
                                    </div>
                                </div>
                                <div>
                                    <div
                                        className="text-xs uppercase font-mono tracking-wider font-semibold"
                                        style={{ color: "var(--t-text-muted)" }}
                                    >
                                        Delivered Scope
                                    </div>
                                    <div
                                        className="text-sm sm:text-base font-bold"
                                        style={{ color: "var(--t-accent)" }}
                                    >
                                        {project.scope}
                                    </div>
                                </div>
                                <Link
                                    href="/contact"
                                    className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all hover:shadow-md"
                                    style={{
                                        backgroundColor: "var(--t-btn-bg)",
                                        color: "var(--t-btn-text)",
                                    }}
                                >
                                    Discuss Similar Project
                                </Link>
                            </div>
                        </div>

                        {/* Interactive Illustration Hero Media */}
                        <div
                            className="relative w-full aspect-[16/11] rounded-2xl sm:rounded-3xl border overflow-hidden shadow-2xl"
                            style={{
                                borderColor: "var(--t-border)",
                                backgroundColor: "var(--t-bg-card)",
                            }}
                        >
                            <ProjectIllustration className="w-full h-full object-cover" />
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} mix-blend-overlay opacity-40 pointer-events-none`}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* METRICS STRIP */}
            <section
                className="py-10 sm:py-14 border-b relative"
                style={{
                    backgroundColor: "var(--t-bg-surface)",
                    borderColor: "var(--t-border)",
                }}
            >
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                        {project.metrics.map((metric, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl border text-center transition-all hover:-translate-y-1"
                                style={{
                                    backgroundColor: "var(--t-bg-card)",
                                    borderColor: "var(--t-border)",
                                }}
                            >
                                <span
                                    className="w-8 h-8 mx-auto mb-3 rounded-lg flex items-center justify-center font-mono text-xs font-bold"
                                    style={{
                                        backgroundColor: "var(--t-bg-surface)",
                                        color: "var(--t-accent)",
                                        border: "1px solid var(--t-border)",
                                    }}
                                >
                                    0{idx + 1}
                                </span>
                                <h4
                                    className="font-display text-base sm:text-lg font-bold"
                                    style={{ color: "var(--t-text)" }}
                                >
                                    {metric}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CHALLENGE & SOLUTION SECTION */}
            <section
                className="py-14 sm:py-20 lg:py-24 border-b relative"
                style={{ backgroundColor: "var(--t-bg)", borderColor: "var(--t-border)" }}
            >
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Challenge */}
                        <div
                            className="p-8 sm:p-10 rounded-2xl sm:rounded-3xl border flex flex-col justify-between"
                            style={{
                                backgroundColor: "var(--t-bg-card)",
                                borderColor: "var(--t-border)",
                            }}
                        >
                            <div>
                                <div
                                    className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-md border text-xs font-semibold uppercase tracking-wider"
                                    style={{
                                        backgroundColor: "var(--t-bg-surface)",
                                        borderColor: "var(--t-border)",
                                        color: "#ef4444",
                                    }}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                    The Challenge
                                </div>
                                <h3
                                    className="font-display text-2xl sm:text-3xl font-bold mb-4"
                                    style={{ color: "var(--t-text)" }}
                                >
                                    Operational Bottlenecks & Complexities
                                </h3>
                                <p
                                    className="text-sm sm:text-base leading-relaxed"
                                    style={{ color: "var(--t-text-muted)" }}
                                >
                                    {project.challenge}
                                </p>
                            </div>
                        </div>

                        {/* Solution */}
                        <div
                            className="p-8 sm:p-10 rounded-2xl sm:rounded-3xl border flex flex-col justify-between"
                            style={{
                                backgroundColor: "var(--t-bg-card)",
                                borderColor: "var(--t-border)",
                            }}
                        >
                            <div>
                                <div
                                    className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-md border text-xs font-semibold uppercase tracking-wider"
                                    style={{
                                        backgroundColor: "var(--t-bg-surface)",
                                        borderColor: "var(--t-border)",
                                        color: "var(--t-accent)",
                                    }}
                                >
                                    <span
                                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                                        style={{ backgroundColor: "var(--t-accent)" }}
                                    />
                                    The Engineering Solution
                                </div>
                                <h3
                                    className="font-display text-2xl sm:text-3xl font-bold mb-4"
                                    style={{ color: "var(--t-text)" }}
                                >
                                    Architecture & Purpose-Built Platforms
                                </h3>
                                <p
                                    className="text-sm sm:text-base leading-relaxed"
                                    style={{ color: "var(--t-text-muted)" }}
                                >
                                    {project.solution}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DELIVERED PLATFORMS: WEB APP VS MOBILE APP */}
            <section
                className="py-14 sm:py-20 lg:py-24 border-b relative"
                style={{
                    backgroundColor: "var(--t-bg-surface)",
                    borderColor: "var(--t-border)",
                }}
            >
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                        <div
                            className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-md border text-xs font-semibold uppercase tracking-wider"
                            style={{
                                backgroundColor: "var(--t-bg-card)",
                                borderColor: "var(--t-border)",
                                color: "var(--t-accent)",
                            }}
                        >
                            <span
                                className="w-1.5 h-1.5 rounded-full animate-pulse"
                                style={{ backgroundColor: "var(--t-accent)" }}
                            />
                            Core Capabilities Delivered
                        </div>
                        <h2
                            className="font-display text-2xl sm:text-4xl font-bold tracking-tight mb-3"
                            style={{ color: "var(--t-text)" }}
                        >
                            Engineered for Web & Mobile
                        </h2>
                        <p className="text-sm sm:text-base" style={{ color: "var(--t-text-muted)" }}>
                            A synchronized multi-platform experience designed for desktop operators and on-the-go mobile users.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Web App Card */}
                        <div
                            className="p-8 sm:p-10 rounded-2xl sm:rounded-3xl border flex flex-col justify-between"
                            style={{
                                backgroundColor: "var(--t-bg-card)",
                                borderColor: "var(--t-border)",
                            }}
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center border font-bold"
                                        style={{
                                            backgroundColor: "var(--t-bg-surface)",
                                            borderColor: "var(--t-border)",
                                            color: "var(--t-accent)",
                                        }}
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-xl sm:text-2xl font-bold" style={{ color: "var(--t-text)" }}>
                                            Web Application
                                        </h3>
                                        <span className="text-xs font-mono font-medium" style={{ color: "var(--t-text-muted)" }}>
                                            Administrative Operations & Hub
                                        </span>
                                    </div>
                                </div>

                                <ul className="space-y-4">
                                    {project.features.web.map((feat, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed" style={{ color: "var(--t-text)" }}>
                                            <span
                                                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-white"
                                                style={{ backgroundColor: "var(--t-accent)" }}
                                            >
                                                ✓
                                            </span>
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Mobile App Card */}
                        <div
                            className="p-8 sm:p-10 rounded-2xl sm:rounded-3xl border flex flex-col justify-between"
                            style={{
                                backgroundColor: "var(--t-bg-card)",
                                borderColor: "var(--t-border)",
                            }}
                        >
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center border font-bold"
                                        style={{
                                            backgroundColor: "var(--t-bg-surface)",
                                            borderColor: "var(--t-border)",
                                            color: "var(--t-accent)",
                                        }}
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-display text-xl sm:text-2xl font-bold" style={{ color: "var(--t-text)" }}>
                                            Mobile Application
                                        </h3>
                                        <span className="text-xs font-mono font-medium" style={{ color: "var(--t-text-muted)" }}>
                                            Native iOS & Android Experiences
                                        </span>
                                    </div>
                                </div>

                                <ul className="space-y-4">
                                    {project.features.mobile.map((feat, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed" style={{ color: "var(--t-text)" }}>
                                            <span
                                                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-white"
                                                style={{ backgroundColor: "var(--t-accent)" }}
                                            >
                                                ✓
                                            </span>
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TECH STACK & NAVIGATION */}
            <section
                className="py-12 sm:py-16 border-b relative"
                style={{ backgroundColor: "var(--t-bg)", borderColor: "var(--t-border)" }}
            >
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b" style={{ borderColor: "var(--t-border)" }}>
                        <div>
                            <span className="text-xs font-mono font-bold uppercase tracking-wider block mb-2" style={{ color: "var(--t-text-muted)" }}>
                                Technologies Utilized:
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 rounded-lg text-xs font-semibold border"
                                        style={{
                                            backgroundColor: "var(--t-bg-card)",
                                            borderColor: "var(--t-border)",
                                            color: "var(--t-text)",
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <Link
                            href="/work"
                            className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                            style={{ color: "var(--t-accent)" }}
                        >
                            ← Back to all case studies
                        </Link>
                    </div>
                </div>
            </section>

            {/* CLOSING CTA */}
            <CTASection />
        </main>
    );
}
