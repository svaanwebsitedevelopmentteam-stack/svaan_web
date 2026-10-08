import { MetadataRoute } from "next";
import { capabilitiesData } from "@/data/capabilitiesData";
import { projectsData } from "@/data/projectsData";

// Performance Optimization: Cache sitemap statically for 24 hours (86400s)
export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://svaantech.com";
    const lastModified = new Date();

    // 16 Primary Pages from Site Architecture
    const primaryPages: MetadataRoute.Sitemap = [
        // 1. Home
        {
            url: `${baseUrl}`,
            lastModified,
            changeFrequency: "weekly",
            priority: 1.0,
        },
        // 2. Build
        {
            url: `${baseUrl}/solutions/build`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        // 3. Modernize
        {
            url: `${baseUrl}/solutions/modernize`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        // 4. Operate
        {
            url: `${baseUrl}/solutions/operate`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        // 5. Evolve
        {
            url: `${baseUrl}/solutions/evolve`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.9,
        },
        // 6. Client Story
        {
            url: `${baseUrl}/work`,
            lastModified,
            changeFrequency: "weekly",
            priority: 0.85,
        },
        // 7. Why SVaaN
        {
            url: `${baseUrl}/why-svaan`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        // 8. Approach
        {
            url: `${baseUrl}/approach`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        // 9. About
        {
            url: `${baseUrl}/about`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        // 10. Leadership
        {
            url: `${baseUrl}/leadership`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        // 11. Contact
        {
            url: `${baseUrl}/contact`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        // 12. Privacy Policy
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.4,
        },
        // 13. Terms & Conditions
        {
            url: `${baseUrl}/terms-conditions`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.4,
        },
        // 14. Cookie Policy
        {
            url: `${baseUrl}/cookie-policy`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.4,
        },
        // 15. Security & Trust
        {
            url: `${baseUrl}/security-trust`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.4,
        },
        // 16. Careers
        {
            url: `${baseUrl}/careers`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.75,
        },
    ];

    // Dynamic Client Stories (/work/[slug])
    const clientStoryRoutes: MetadataRoute.Sitemap = Object.keys(projectsData).map((slug) => ({
        url: `${baseUrl}/work/${slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.75,
    }));

    // Dynamic Capabilities (/capabilities/[slug])
    const capabilityRoutes: MetadataRoute.Sitemap = Object.keys(capabilitiesData).map((slug) => ({
        url: `${baseUrl}/capabilities/${slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [
        ...primaryPages,
        ...clientStoryRoutes,
        ...capabilityRoutes,
    ];
}

