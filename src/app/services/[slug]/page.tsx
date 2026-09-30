import { notFound } from "next/navigation";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";

// Unified Service Content Data
const serviceData = {
    "strategy-advisory": {
        title: "Strategy & Advisory",
        subtitle: "Navigating complexity with clear, actionable direction.",
        heroDesc: "We partner with leadership teams to align business objectives with emerging technologies, ensuring your digital investments translate into measurable market advantages.",
        whyUs: "Our advisory blends deep technical expertise with commercial acumen. We don't just recommend technologies; we develop roadmaps that prioritize quick wins while building long-term scalable foundations.",
        subServices: [
            { name: "Digital Transformation Roadmap", desc: "A phased, prioritized blueprint mapping out how to modernize your operations and technology landscape." },
            { name: "Technology Modernization", desc: "Evaluating legacy systems and charting the most efficient path to reliable, cloud-native architectures." },
            { name: "Product Strategy", desc: "Defining product vision, market fit, and go-to-market strategies that resonate with your target audience." },
            { name: "Technical Due Diligence", desc: "Comprehensive audits of software architecture, code quality, and technical debt for investors or enterprise planning." }
        ]
    },
    "product-design": {
        title: "Product & Design",
        subtitle: "Interfaces built for humans. Experiences designed for impact.",
        heroDesc: "A great product sits at the intersection of user needs and business viability. We design intuitive, accessible, and breathtaking digital experiences.",
        whyUs: "We believe in design as a function, not just a facade. Our design process is rooted in deep user research, continuous prototyping, and a seamless handoff to engineering.",
        subServices: [
            { name: "UX/UI Design", desc: "Crafting beautiful, high-fidelity interfaces backed by proven user experience principles and accessibility standards." },
            { name: "Design Systems", desc: "Creating scalable, reusable component libraries that ensure visual consistency and speed up development across all platforms." },
            { name: "Interactive Prototyping", desc: "Building clickable models of your application to validate concepts and flows before writing a single line of code." },
            { name: "User Research & Testing", desc: "Uncovering actionable insights through interviews, analytics, and usability testing to drive product decisions." }
        ]
    },
    "software-engineering": {
        title: "Software Engineering",
        subtitle: "Architecting resilience. Building for scale.",
        heroDesc: "We don't just write code; we engineer production-grade platforms. Our development teams build secure, scalable applications utilizing modern architectures and rigorous testing.",
        whyUs: "Discipline is at our core. From microservices to monolithic redesigns, we maintain strict CI/CD practices, comprehensive test coverage, and clean codebase standards to ensure long-term stability.",
        subServices: [
            { name: "Custom Web Applications", desc: "Developing complex, high-performance web platforms using Next.js, React, and modern enterprise frameworks." },
            { name: "Mobile App Development", desc: "Building native and cross-platform mobile experiences that feel seamless, fast, and highly responsive." },
            { name: "Enterprise Architecture", desc: "Designing robust backend systems, databases, and microservices capable of handling millions of transactions." },
            { name: "API Integration", desc: "Seamlessly connecting disparate third-party services and legacy platforms into a unified data ecosystem." }
        ]
    },
    "ai-automation": {
        title: "AI & Automation",
        subtitle: "Intelligence applied. Operations optimized.",
        heroDesc: "We move beyond the hype to integrate practical Artificial Intelligence and automation into your business processes, driving extreme efficiency and new capabilities.",
        whyUs: "We focus on applied AI. Instead of experimenting with generic tools, we build custom Large Language Model pipelines, predictive engines, and intelligent agents tailored to your proprietary data.",
        subServices: [
            { name: "Large Language Models (LLMs)", desc: "Fine-tuning and deploying custom AI models to understand context, generate content, and interact intelligently with your data." },
            { name: "Predictive Analytics", desc: "Utilizing machine learning to forecast trends, anticipate customer needs, and optimize supply chains." },
            { name: "Process Automation", desc: "Identifying manual bottlenecks and replacing them with highly reliable, automated digital workflows." },
            { name: "Custom Machine Learning", desc: "Developing bespoke models for image recognition, natural language processing, and anomaly detection." }
        ]
    },
    "cloud-devops": {
        title: "Cloud & DevOps",
        subtitle: "Infrastructure that scales effortlessly and deploys securely.",
        heroDesc: "We architect, migrate, and manage robust cloud environments. Our DevOps practices ensure your development teams can ship code faster, safer, and with zero downtime.",
        whyUs: "Reliability is non-negotiable. We implement Infrastructure as Code (IaC) and full-cycle observability so your platform remains secure, cost-optimized, and resilient under any load.",
        subServices: [
            { name: "Cloud Migration", desc: "Safely transitioning legacy on-premise infrastructure into AWS, Azure, or Google Cloud environments." },
            { name: "Kubernetes & Containers", desc: "Containerizing applications and orchestrating them for maximum portability, scalability, and resource efficiency." },
            { name: "CI/CD Deployment", desc: "Automating the delivery pipeline so new features reach production instantly with automated testing gates." },
            { name: "Infrastructure as Code", desc: "Managing servers and architecture through version-controlled code streams (Terraform/CloudFormation) for ultimate consistency." }
        ]
    }
};

export function generateStaticParams() {
    return Object.keys(serviceData).map((slug) => ({
        slug,
    }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = serviceData[slug as keyof typeof serviceData];

    if (!data) return notFound();

    return (
        <main className="min-h-screen relative pt-32 pb-0">
            {/* Background Orbs */}
            <div className="absolute top-0 left-0 right-0 h-screen pointer-events-none overflow-hidden z-0">
                <div
                    className="absolute top-[10%] right-[10%] w-[600px] h-[600px] rounded-full blur-[200px] animate-pulse"
                    style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }}
                />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">

                {/* Breadcrumb & Hero */}
                <div className="w-full md:w-[80%] mb-24">
                    <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold mb-10 hover:opacity-70 transition-opacity" style={{ color: "var(--t-text-muted)" }}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        All Services
                    </Link>

                    <h1 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-tight tracking-tight mb-6" style={{ color: "var(--t-text)" }}>
                        {data.title}
                    </h1>
                    <h2 className="text-xl lg:text-2xl font-medium mb-8" style={{ color: "var(--t-accent)" }}>
                        {data.subtitle}
                    </h2>
                    <p className="text-lg leading-relaxed max-w-3xl" style={{ color: "var(--t-text-muted)" }}>
                        {data.heroDesc}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-32">
                    {/* Left Structure */}
                    <div className="lg:col-span-4 lg:sticky top-32 h-fit">
                        <h3 className="font-display font-bold text-3xl mb-6" style={{ color: "var(--t-text)" }}>Why SVaaN?</h3>
                        <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--t-text-muted)" }}>{data.whyUs}</p>
                        <a href="#cta"
                            className="inline-flex items-center gap-2 h-12 px-8 rounded-full font-semibold transition-all duration-300"
                            style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-text)" }}
                        >
                            Discuss a Project
                        </a>
                    </div>

                    {/* Right Detailed Grid */}
                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {data.subServices.map((sub, i) => (
                                <div key={sub.name}
                                    className="rounded-3xl p-8 transition-all duration-500 overflow-hidden relative group"
                                    style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}
                                >
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                        style={{ background: "linear-gradient(135deg, var(--t-gradient-from), transparent)" }} />
                                    <div className="relative z-10">
                                        <span className="font-mono text-sm mb-4 block" style={{ color: "var(--t-text-muted)" }}>0{i + 1}</span>
                                        <h4 className="font-display font-bold text-xl mb-4" style={{ color: "var(--t-text)" }}>{sub.name}</h4>
                                        <p className="leading-relaxed text-sm" style={{ color: "var(--t-text-muted)" }}>{sub.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <div id="cta">
                <CTASection />
            </div>
        </main>
    );
}
