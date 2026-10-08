import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { capabilitiesData } from "@/data/capabilitiesData";
import { projectsData } from "@/data/projectsData";

// Revalidate sitemap periodically (hourly) so content updates are automatically picked up
export const revalidate = 3600;

// In-memory cache for file modification dates during execution
const dateCache = new Map<string, Date>();

/**
 * Resolves the genuine last modification date of each page based on:
 * 1. Git commit timestamp of the source file (most accurate representation of content/code changes)
 * 2. File system mtime (fallback when git metadata is missing)
 * 3. Verified ISO date constant (safe fallback if file cannot be read)
 */
function getLastModified(relativeFilePath: string, fallbackIsoString: string): Date {
    if (dateCache.has(relativeFilePath)) {
        return dateCache.get(relativeFilePath)!;
    }

    try {
        const fullPath = path.join(process.cwd(), relativeFilePath);
        if (fs.existsSync(fullPath)) {
            try {
                const gitDate = execSync(`git log -1 --format=%cI -- "${fullPath}"`, {
                    encoding: "utf8",
                    stdio: ["pipe", "pipe", "ignore"],
                }).trim();
                if (gitDate) {
                    const parsed = new Date(gitDate);
                    if (!isNaN(parsed.getTime())) {
                        dateCache.set(relativeFilePath, parsed);
                        return parsed;
                    }
                }
            } catch {
                const stats = fs.statSync(fullPath);
                if (stats.mtime && !isNaN(stats.mtime.getTime())) {
                    dateCache.set(relativeFilePath, stats.mtime);
                    return stats.mtime;
                }
            }
        }
    } catch {
        // Fallback to verified constant below
    }

    const fallback = new Date(fallbackIsoString);
    dateCache.set(relativeFilePath, fallback);
    return fallback;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://svaantech.com";

    // 1. Primary Public Pages with individual authentic lastmod dates
    const primaryPages: MetadataRoute.Sitemap = [
        // Home
        {
            url: `${baseUrl}`,
            lastModified: getLastModified("src/app/page.tsx", "2026-10-07T15:52:19+05:30"),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        // Solutions Pillars
        {
            url: `${baseUrl}/solutions/build`,
            lastModified: getLastModified("src/app/solutions/build/page.tsx", "2026-10-07T13:05:33+05:30"),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/solutions/modernize`,
            lastModified: getLastModified("src/app/solutions/modernize/page.tsx", "2026-10-07T13:05:33+05:30"),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/solutions/operate`,
            lastModified: getLastModified("src/app/solutions/operate/page.tsx", "2026-10-07T13:05:33+05:30"),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/solutions/evolve`,
            lastModified: getLastModified("src/app/solutions/evolve/page.tsx", "2026-10-07T13:05:33+05:30"),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        // Work / Client Stories Overview
        {
            url: `${baseUrl}/work`,
            lastModified: getLastModified("src/app/work/page.tsx", "2026-10-07T15:00:06+05:30"),
            changeFrequency: "weekly",
            priority: 0.85,
        },
        // Capabilities Overview
        {
            url: `${baseUrl}/capabilities`,
            lastModified: getLastModified("src/app/capabilities/page.tsx", "2026-10-01T15:33:35+05:30"),
            changeFrequency: "monthly",
            priority: 0.85,
        },
        // Company & Approach
        {
            url: `${baseUrl}/why-svaan`,
            lastModified: getLastModified("src/app/why-svaan/page.tsx", "2026-10-07T15:00:06+05:30"),
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${baseUrl}/approach`,
            lastModified: getLastModified("src/app/approach/page.tsx", "2026-10-07T15:52:19+05:30"),
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: getLastModified("src/app/about/page.tsx", "2026-10-07T16:09:52+05:30"),
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${baseUrl}/leadership`,
            lastModified: getLastModified("src/app/leadership/page.tsx", "2026-10-07T15:52:19+05:30"),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: getLastModified("src/app/contact/page.tsx", "2026-10-07T17:06:46+05:30"),
            changeFrequency: "monthly",
            priority: 0.85,
        },
        // Careers
        {
            url: `${baseUrl}/careers`,
            lastModified: getLastModified("src/app/careers/page.tsx", "2026-10-05T17:28:04+05:30"),
            changeFrequency: "monthly",
            priority: 0.75,
        },
        // Legal & Compliance
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: getLastModified("src/app/privacy-policy/page.tsx", "2026-10-07T17:00:14+05:30"),
            changeFrequency: "yearly",
            priority: 0.4,
        },
        {
            url: `${baseUrl}/terms-conditions`,
            lastModified: getLastModified("src/app/terms-conditions/page.tsx", "2026-10-07T17:00:14+05:30"),
            changeFrequency: "yearly",
            priority: 0.4,
        },
        {
            url: `${baseUrl}/cookie-policy`,
            lastModified: getLastModified("src/app/cookie-policy/page.tsx", "2026-10-07T17:00:14+05:30"),
            changeFrequency: "yearly",
            priority: 0.4,
        },
        {
            url: `${baseUrl}/security-trust`,
            lastModified: getLastModified("src/app/security-trust/page.tsx", "2026-10-07T17:00:14+05:30"),
            changeFrequency: "yearly",
            priority: 0.4,
        },
    ];

    // 2. Dynamic Client Stories (/work/[slug]) - driven by projectsData source
    const clientStoriesDate = getLastModified("src/data/projectsData.ts", "2026-10-07T15:00:06+05:30");
    const clientStoryRoutes: MetadataRoute.Sitemap = Object.keys(projectsData).map((slug) => ({
        url: `${baseUrl}/work/${slug}`,
        lastModified: clientStoriesDate,
        changeFrequency: "monthly",
        priority: 0.75,
    }));

    // 3. Dynamic Service Capabilities (/capabilities/[slug]) - driven by capabilitiesData source
    const capabilitiesDate = getLastModified("src/data/capabilitiesData.ts", "2026-10-01T15:33:35+05:30");
    const capabilityRoutes: MetadataRoute.Sitemap = Object.keys(capabilitiesData).map((slug) => ({
        url: `${baseUrl}/capabilities/${slug}`,
        lastModified: capabilitiesDate,
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    return [
        ...primaryPages,
        ...clientStoryRoutes,
        ...capabilityRoutes,
    ];
}


