"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icons3D } from "@/components/ui/Icons3D";

interface TechItem {
    name: string;
    badge?: string;
}

interface TechDomain {
    id: string;
    category: string;
    focus: string;
    accent: string;
    icon: React.ReactNode;
    items: TechItem[];
}

const techDomains: TechDomain[] = [
    {
        id: "frontend",
        category: "Frontend & Mobile",
        focus: "Ultra-responsive, accessible user interfaces with server-side rendering",
        accent: "#0076CC",
        icon: <Icons3D.Mobile className="w-8 h-8" />,
        items: [
            { name: "Next.js", badge: "SSR" },
            { name: "React", badge: "" },
            { name: "TypeScript", badge: "TypeSafe" },
            { name: "React Native", badge: "Mobile" },
            { name: "Tailwind CSS", badge: "" },
            { name: "Vue.js", badge: "" }
        ]
    },
    {
        id: "backend",
        category: "Backend & Core Systems",
        focus: "Distributed, type-safe APIs & high-concurrency microservices",
        accent: "#6366f1",
        icon: <Icons3D.Backend className="w-8 h-8" />,
        items: [
            { name: "Node.js", badge: "" },
            { name: "Go", badge: "High-Perf" },
            { name: "Python", badge: "" },
            { name: "Java / Spring", badge: "" },
            { name: "GraphQL", badge: "" },
            { name: "gRPC", badge: "" },
            { name: "REST APIs", badge: "" }
        ]
    },
    {
        id: "cloud",
        category: "Cloud Infrastructure",
        focus: "Elastic multi-cloud architectures, edge computing & serverless",
        accent: "#0ea5e9",
        icon: <Icons3D.CloudInfra className="w-8 h-8" />,
        items: [
            { name: "AWS", badge: "" },
            { name: "Google Cloud", badge: "" },
            { name: "Microsoft Azure", badge: "" },
            { name: "Terraform", badge: "IaC" },
            { name: "Cloudflare", badge: "Edge" },
            { name: "Vercel", badge: "" }
        ]
    },
    {
        id: "data",
        category: "Data & AI / ML",
        focus: "High-throughput data storage, vector databases & generative AI",
        accent: "#8b5cf6",
        icon: <Icons3D.DataTree className="w-8 h-8" />,
        items: [
            { name: "PostgreSQL", badge: "SQL" },
            { name: "MongoDB", badge: "NoSQL" },
            { name: "Redis", badge: "Cache" },
            { name: "Vector DBs", badge: "Pinecone" },
            { name: "OpenAI / LLMs", badge: "GenAI" },
            { name: "TensorFlow", badge: "" }
        ]
    },
    {
        id: "devops",
        category: "DevOps & Security",
        focus: "Automated delivery pipelines, security hardening & zero-downtime",
        accent: "#10b981",
        icon: <Icons3D.DevOps className="w-8 h-8" />,
        items: [
            { name: "Kubernetes", badge: "K8s" },
            { name: "Docker", badge: "" },
            { name: "GitHub Actions", badge: "CI/CD" },
            { name: "Prometheus", badge: "" },
            { name: "Grafana", badge: "" },
            { name: "ArgoCD", badge: "" }
        ]
    },
    {
        id: "architecture",
        category: "Architecture & Scale",
        focus: "Decoupled domain-driven designs, websockets & zero trust security",
        accent: "#f59e0b",
        icon: <Icons3D.Microservices className="w-8 h-8" />,
        items: [
            { name: "Microservices", badge: "" },
            { name: "Serverless", badge: "" },
            { name: "Event-Driven", badge: "Kafka" },
            { name: "Domain-Driven", badge: "DDD" },
            { name: "WebSockets", badge: "" },
            { name: "Zero Trust", badge: "" }
        ]
    }
];

const officialLogos = [
    {
        name: "Next.js",
        logo: (
            <svg viewBox="0 0 180 180" className="w-5 h-5 fill-current">
                <mask height="180" id="mask-next" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: "alpha" }}>
                    <circle cx="90" cy="90" fill="black" r="90" />
                </mask>
                <g mask="url(#mask-next)">
                    <circle cx="90" cy="90" fill="black" r="90" stroke="white" strokeWidth="6" />
                    <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.16 149.508 157.52Z" fill="url(#paint0_linear_next)" />
                    <rect fill="url(#paint1_linear_next)" height="72" width="12" x="115" y="54" />
                </g>
                <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_next" x1="109" x2="144.5" y1="116.5" y2="160.5">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_next" x1="121" x2="120.799" y1="54" y2="106.875">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>
        )
    },
    {
        name: "React",
        logo: (
            <svg viewBox="-11.5 -10.232 23 20.463" className="w-5 h-5">
                <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
                <g stroke="#61DAFB" strokeWidth="1.1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
            </svg>
        )
    },
    {
        name: "TypeScript",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5">
                <rect width="24" height="24" rx="4" fill="#3178C6" />
                <path fill="#FFF" d="M3 13.5h3.5v7.5H8v-7.5h3.5V12H3v1.5zm11.5 5.5c.8.5 1.7.8 2.6.8 1.4 0 2.3-.7 2.3-1.8 0-1.1-.9-1.6-2.4-2.2-1.8-.7-3-1.6-3-3.2 0-1.9 1.5-3.3 3.8-3.3 1.1 0 2.1.3 2.9.8l-.6 1.4c-.7-.4-1.5-.7-2.3-.7-1.3 0-2.1.7-2.1 1.7 0 1 .8 1.5 2.3 2.1 2 .8 3.1 1.7 3.1 3.4 0 2.1-1.6 3.4-4 3.4-1.3 0-2.5-.4-3.3-.9l.7-1.6z" />
            </svg>
        )
    },
    {
        name: "Node.js",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="#539E43" d="M11.998 1.5l10.392 6v12l-10.392 6-10.392-6v-12l10.392-6z" />
                <path fill="#FFF" d="M12 4.6l7.8 4.5v9L12 22.6l-7.8-4.5v-9L12 4.6zm4.1 11.2c-.7.7-1.7 1.1-2.9 1.1-2.1 0-3.6-1.3-3.6-3.8s1.5-3.8 3.6-3.8c1.2 0 2.2.4 2.9 1.1l-1.1 1.1c-.5-.5-1.1-.7-1.8-.7-1.2 0-2.1.9-2.1 2.3s.9 2.3 2.1 2.3c.7 0 1.3-.2 1.8-.7l1.1 1.1z" />
            </svg>
        )
    },
    {
        name: "Python",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="#3776AB" d="M11.9 1.5c-3.1 0-5 1.4-5 3.3v2.2h5.1v.8H4.6C2.6 7.8 1 9.4 1 11.5c0 2 1.5 3.6 3.6 3.6h1.5v-2.1c0-2.1 1.8-3.9 3.9-3.9h5.1V6.9c0-3.1-4-5.4-3.2-5.4zM9.4 3.2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" />
                <path fill="#FFD43B" d="M12.1 22.5c3.1 0 5-1.4 5-3.3v-2.2H12v-.8h7.4c2 0 3.6-1.6 3.6-3.7 0-2-1.5-3.6-3.6-3.6h-1.5v2.1c0 2.1-1.8 3.9-3.9 3.9H8.9v2.2c0 3.1 4 5.4 3.2 5.4zm2.5-1.7c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
            </svg>
        )
    },
    {
        name: "Go",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="#00ADD8" d="M1.8 10.5c.3-1.6 1.4-3.5 3-4.4 2.2-1.2 5.1-1 7.2.3l-1.4 2c-1.4-.9-3.3-1.1-4.7-.3-1.1.6-1.9 1.9-2 3.2-.2 1.6.4 3.4 1.7 4.3 1.3.9 3.2 1 4.6.1l1.4 2c-2.1 1.4-5.1 1.4-7.3.2-1.8-1-2.9-2.9-3.1-4.9l.6-2.5zm11.6 2.2h5.5v2h-3.4c-.2 1.4-.9 2.7-2.1 3.5-1.5 1-3.6 1.1-5.1.2l1.2-2c.9.5 2.1.5 3-.1.6-.4.9-1.1 1-1.8h-4.3l4.2-1.8z" />
            </svg>
        )
    },
    {
        name: "AWS",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="#FF9900" d="M18.8 17.5c-2.4 1.8-5.8 2.7-8.8 2.7-4.2 0-8-1.5-10.9-4.1-.2-.2-.2-.5 0-.7.3-.2.6-.2.8 0 2.6 2.3 6.1 3.8 10.1 3.8 2.7 0 5.7-.8 7.9-2.3.3-.2.7 0 .9.3.2.3 0 .7-.1.7z" />
                <path fill="#FF9900" d="M19.7 16c-.3-.4-2-.2-3-.1-.3 0-.4-.3-.2-.5 1.5-1.1 3.9-.8 4.2-.4.3.4-.1 2.8-1.5 4-.2.2-.4.1-.3-.2.4-.9.9-2.4.8-2.8z" />
                <path fill="#FF9900" d="M7.7 12.8c-.8.8-2 1.3-3.2 1.3-1.8 0-3-1.1-3-2.9 0-2.3 1.9-3.3 4.2-3.3h2v-.7c0-1.2-.7-1.8-2-1.8-.9 0-1.8.4-2.3.9-.1.1-.3.1-.4 0l-.8-.8c-.1-.1-.1-.3 0-.4.8-.8 2.2-1.4 3.7-1.4 2.5 0 4 1.3 4 3.7v4.6c0 .5.1.9.2 1.2 0 .1 0 .3-.1.4l-1.3.8c-.2.1-.4 0-.4-.2l-.1-.7c-.7.6-1.7 1.1-2.7 1.1zm-.1-2.3v-1h-1.8c-1.3 0-2.3.5-2.3 1.7 0 .9.6 1.4 1.6 1.4 1.2 0 2.5-.9 2.5-2.1z" />
            </svg>
        )
    },
    {
        name: "Google Cloud",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="#EA4335" d="M19.3 10.5c-.3-3.2-3-5.7-6.3-5.7-2.6 0-4.8 1.5-5.8 3.7C5.9 8.7 4.5 10 4.1 11.7c-2 .5-3.1 2.4-3.1 4.3 0 2.5 2 4.5 4.5 4.5h13.8c2.6 0 4.7-2.1 4.7-4.7 0-2.4-1.8-4.4-4.2-4.7-.2-.2-.3-.4-.5-.6z" />
                <path fill="#4285F4" d="M13 4.8c3.3 0 6 2.5 6.3 5.7h-6.3V4.8z" />
                <path fill="#FBBC05" d="M4.1 11.7c.4-1.7 1.8-3 3.1-3.2L10 13H4.1z" />
                <path fill="#34A853" d="M19.3 20.5H5.5c-2.5 0-4.5-2-4.5-4.5 0-1.9 1.1-3.8 3.1-4.3L13 13v7.5z" />
            </svg>
        )
    },
    {
        name: "Azure",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path fill="#0078D4" d="M13.2 2.5L5.7 15.6l5.4 3.4 5.3-9.5-3.2-7z" />
                <path fill="#008AD7" d="M13.2 2.5L2.5 18.5h6.1l4.6-16z" />
                <path fill="#005BA1" d="M16.4 9.5L11.1 19h10.4l-5.1-9.5z" />
            </svg>
        )
    },
    {
        name: "Docker",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#2496ED">
                <path d="M13 6.8h2.3V9H13zm-2.8 0h2.3V9h-2.3zm-2.8 0h2.3V9H7.4zm-2.8 2.7h2.3v2.2H4.6zm2.8 0h2.3v2.2H7.4zm2.8 0h2.3v2.2h-2.3zm2.8 0h2.3v2.2H13zm2.8 0h2.3v2.2h-2.3zm-8.4 2.7h2.3v2.2H7.4zm2.8 0h2.3v2.2h-2.3zm2.8 0h2.3v2.2H13zm8.9-.6c-.5-.4-1.5-.4-2.2-.1-.2-.8-.7-1.4-1.5-1.9l-.6-.4-.4.6c-.4.7-.6 1.5-.4 2.4-.8.4-2.1.4-2.4.4H2.4c-.4 1.9.1 4 1.4 5.5 1.5 1.8 3.8 2.8 6.2 2.8 7.3 0 11.8-4.7 11.8-10.4 0-.4 0-.7-.1-.9h.2c.7 0 1.3-.2 1.8-.7l.4-.4-.5-.3z" />
            </svg>
        )
    },
    {
        name: "Kubernetes",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#326CE5">
                <path d="M11.6 1.1l-8 4.6c-.4.2-.6.7-.6 1.1v9.2c0 .5.2.9.6 1.1l8 4.6c.4.2.9.2 1.3 0l8-4.6c.4-.2.6-.7.6-1.1V6.8c0-.5-.2-.9-.6-1.1l-8-4.6c-.4-.2-.9-.2-1.3 0zm.4 2.4l6.4 3.7-2.3 2.5-3.3-1.1-.8-5.1zm-1.6.4l-.8 5-3.3 1.1-2.3-2.5 6.4-3.6zm-5.4 6.7l2.8 1.8v3.5l-2.8 1.8v-7.1zm14 0v7.1l-2.8-1.8v-3.5l2.8-1.8zm-7 1.8l2.2 1.3-1.4 2.4-2.5-.8-.3-2.9 2-0zm-1.8 1.3l.3 2.9-2.5.8-1.4-2.4 2.2-1.3zm.5 4.3l2.6.8.8 2.6-2.5 1.4-.9-4.8zm3.6.8l2.6-.8-.9 4.8-2.5-1.4.8-2.6z" />
            </svg>
        )
    },
    {
        name: "PostgreSQL",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#4169E1">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3.8 6.8c.8.6 1.3 1.5 1.3 2.6 0 1.9-1.5 3.5-3.4 3.5H11v2.5H9.4V8.8h4.3c.8 0 1.6.3 2.1.8zm-4.4 4.6h2.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-2.4v3.6z" />
            </svg>
        )
    },
    {
        name: "Redis",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#DC382D">
                <path d="M12 2.5L2.8 7.3v9.4L12 21.5l9.2-4.8V7.3L12 2.5zm0 2.2l6.8 3.6-6.8 3.5L5.2 8.3 12 4.7zm-7.2 4.6l6.2 3.2v6.6l-6.2-3.3V9.3zm8.2 9.8v-6.6l6.2-3.2v6.5l-6.2 3.3z" />
            </svg>
        )
    },
    {
        name: "OpenAI",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#10A37F">
                <path d="M22.3 10.1a5.6 5.6 0 00-.5-4.4 5.7 5.7 0 00-5.3-2.8 5.6 5.6 0 00-3.8-1.5 5.7 5.7 0 00-5.4 3.8 5.7 5.7 0 00-4 2 5.6 5.6 0 00-.7 4.7 5.7 5.7 0 00.5 4.4 5.7 5.7 0 005.3 2.8c.3.5.7 1 1.2 1.4a5.7 5.7 0 008-2.3 5.7 5.7 0 004-2 5.6 5.6 0 00.7-4.7zm-9.6 11.2a3.7 3.7 0 01-2.7-1.2l.1-.8 4.6-2.7a.8.8 0 00.4-.7v-5.4l1.6.9v5.2a3.7 3.7 0 01-4 4.7zm-7.6-3.8a3.7 3.7 0 01-.4-2.9l.7.4 4.6 2.7c.3.2.6.2.8 0l4.7-2.7v1.8l-4.5 2.6a3.7 3.7 0 01-5.9-1.9zm-1.8-8.1a3.7 3.7 0 012.3-1.7l.6.6v5.3c0 .3.2.6.4.7l4.7 2.7-1.6.9-4.5-2.6a3.7 3.7 0 01-1.9-5.9zm13.1 3.1l-4.7-2.7 1.6-.9 4.5 2.6a3.7 3.7 0 011.9 5.9 3.7 3.7 0 01-2.3 1.7l-.6-.6v-5.3a.8.8 0 00-.4-.7zm2.4-2.8a3.7 3.7 0 01.4 2.9l-.7-.4-4.6-2.7a.8.8 0 00-.8 0l-4.7 2.7v-1.8l4.5-2.6a3.7 3.7 0 015.9 1.9zm-8.8-1.9a3.7 3.7 0 012.7 1.2l-.1.8-4.6 2.7a.8.8 0 00-.4.7v5.4l-1.6-.9v-5.2a3.7 3.7 0 014-4.7zm1.1 5.4l2.1 1.2v2.4l-2.1 1.2-2.1-1.2v-2.4l2.1-1.2z" />
            </svg>
        )
    },
    {
        name: "Terraform",
        logo: (
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#844FBA">
                <path d="M14.7 8.2v7.1l6.1-3.5V4.7l-6.1 3.5zm-5.4-3.1v7.1l6.1-3.5V1.6L9.3 5.1zm0 8.2v7.1l6.1-3.5V9.8L9.3 13.3zM3.2 8.7v7.1l6.1-3.5V5.2L3.2 8.7z" />
            </svg>
        )
    }
];

export function TechStack() {
    return (
        <section
            className="py-14 sm:py-20 lg:py-28 relative overflow-hidden border-b"
            style={{ backgroundColor: "var(--t-bg)", borderColor: "var(--t-border)" }}
        >
            {/* Background Ambient Glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full blur-[200px] pointer-events-none opacity-20"
                style={{ backgroundColor: "var(--t-accent)" }}
            />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <div
                            className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-md border text-xs font-semibold tracking-wider uppercase"
                            style={{
                                backgroundColor: "var(--t-bg-card)",
                                borderColor: "var(--t-border)",
                                color: "var(--t-accent)",
                            }}
                        >
                            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--t-accent)" }} />
                            Technologies We Use
                        </div>
                        <h2
                            className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-3 sm:mb-4"
                            style={{ color: "var(--t-text)" }}
                        >
                            The right tool for{" "}
                            <span className="italic" style={{ color: "var(--t-accent)" }}>
                                the right problem.
                            </span>
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                            We operate across the modern technology ecosystem - building high-performance architectures engineered for scalability, security, and long-term maintainability.
                        </p>
                    </motion.div>
                </div>

                {/* All Technology Domain Cards in 3 Columns Grid (No Tab View) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 w-full">
                    {techDomains.map((domain, idx) => (
                            <motion.div
                                layout
                                key={domain.category}
                                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                className="group relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[var(--t-accent)] border overflow-hidden"
                                style={{
                                    backgroundColor: "var(--t-bg-card)",
                                    borderColor: "var(--t-border)",
                                }}
                            >
                                {/* Top Accent Radial Glow on hover */}
                                <div
                                    className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-[70px] opacity-0 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none"
                                    style={{ backgroundColor: domain.accent }}
                                />

                                <div>
                                    {/* Icon & Category Header */}
                                    <div className="flex items-center justify-between mb-5">
                                        <div
                                            className="w-12 h-12 rounded-xl border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs"
                                            style={{
                                                backgroundColor: "var(--t-bg-surface)",
                                                borderColor: "var(--t-border)",
                                                color: domain.accent,
                                            }}
                                        >
                                            {domain.icon}
                                        </div>

                                        <span
                                            className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border"
                                            style={{
                                                backgroundColor: "var(--t-bg-surface)",
                                                borderColor: "var(--t-border)",
                                                color: domain.accent,
                                            }}
                                        >
                                            {domain.items.length} Techs
                                        </span>
                                    </div>

                                    {/* Title & Focus Subtitle */}
                                    <h3
                                        className="font-display text-lg sm:text-xl font-bold mb-1.5 transition-colors group-hover:text-[var(--t-accent)]"
                                        style={{ color: "var(--t-text)" }}
                                    >
                                        {domain.category}
                                    </h3>
                                    <p
                                        className="text-xs sm:text-sm leading-relaxed mb-6"
                                        style={{ color: "var(--t-text-muted)" }}
                                    >
                                        {domain.focus}
                                    </p>

                                    {/* Interactive Technology Chip Badges */}
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                        {domain.items.map((tech) => (
                                            <span
                                                key={tech.name}
                                                className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 rounded-lg text-xs font-medium transition-all duration-200 hover:border-[var(--t-accent)] hover:scale-105 select-none"
                                                style={{
                                                    backgroundColor: "var(--t-bg-surface)",
                                                    border: "1px solid var(--t-border)",
                                                    color: "var(--t-text)",
                                                }}
                                            >
                                                <span>{tech.name}</span>
                                                {tech.badge && (
                                                    <span
                                                        className="text-[9px] px-1 py-0.2 rounded font-mono font-semibold"
                                                        style={{
                                                            backgroundColor: domain.accent + "20",
                                                            color: domain.accent,
                                                        }}
                                                    >
                                                        {tech.badge}
                                                    </span>
                                                )}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                {/* Bottom Animated Infinite Logo Ribbon */}
                <div
                    className="mt-10 sm:mt-14 relative overflow-hidden rounded-2xl py-4 sm:py-5 px-3 sm:px-4 border"
                    style={{ backgroundColor: "var(--t-bg-surface)", borderColor: "var(--t-border)" }}
                >
                    {/* Fade Masks on Left & Right */}
                    <div
                        className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 pointer-events-none z-10"
                        style={{ background: "linear-gradient(90deg, var(--t-bg-surface), transparent)" }}
                    />
                    <div
                        className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 pointer-events-none z-10"
                        style={{ background: "linear-gradient(-90deg, var(--t-bg-surface), transparent)" }}
                    />

                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 32, ease: "linear" }}
                        className="flex items-center gap-4 sm:gap-6 whitespace-nowrap w-max"
                    >
                        {[...officialLogos, ...officialLogos].map((item, idx) => (
                            <div
                                key={idx}
                                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs font-semibold border shadow-xs select-none transition-all duration-200 hover:border-[var(--t-accent)]"
                                style={{
                                    backgroundColor: "var(--t-bg-card)",
                                    borderColor: "var(--t-border)",
                                    color: "var(--t-text)",
                                }}
                            >
                                <span className="shrink-0">{item.logo}</span>
                                <span className="font-display">{item.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
