import { MetadataRoute } from "next";
import { capabilitiesData } from "@/data/capabilitiesData";
import { projectsData } from "@/data/projectsData";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://svaantech.com";
    const lastModified = new Date();

    // 1. Core Top-Level Pages
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}`,
            lastModified,
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/approach`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/capabilities`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/work`,
            lastModified,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/why-svaan`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${baseUrl}/leadership`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/careers`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/insights`,
            lastModified,
            changeFrequency: "weekly",
            priority: 0.75,
        },
    ];

    // 2. Solutions Pillar Routes
    const solutionRoutes: MetadataRoute.Sitemap = [
        "build",
        "modernize",
        "operate",
        "evolve",
    ].map((pillar) => ({
        url: `${baseUrl}/solutions/${pillar}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.85,
    }));

    // 3. Dynamic Service Capabilities (/capabilities/[slug])
    const capabilityRoutes: MetadataRoute.Sitemap = Object.keys(capabilitiesData).map((slug) => ({
        url: `${baseUrl}/capabilities/${slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    // 4. Dynamic Client Work Case Studies (/work/[slug])
    const workRoutes: MetadataRoute.Sitemap = Object.keys(projectsData).map((slug) => ({
        url: `${baseUrl}/work/${slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    // 5. Legal & Policy Pages
    const legalRoutes: MetadataRoute.Sitemap = [
        "privacy",
        "terms",
        "cookies",
    ].map((page) => ({
        url: `${baseUrl}/${page}`,
        lastModified,
        changeFrequency: "yearly",
        priority: 0.4,
    }));

    return [
        ...staticRoutes,
        ...solutionRoutes,
        ...capabilityRoutes,
        ...workRoutes,
        ...legalRoutes,
    ];
}
