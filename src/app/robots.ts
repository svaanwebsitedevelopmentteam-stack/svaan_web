import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://svaantech.com";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: [
                "/api/",
                "/homeClone",
                "/home-v2",
                "/about-v2",
                "/thank-you",
            ],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
