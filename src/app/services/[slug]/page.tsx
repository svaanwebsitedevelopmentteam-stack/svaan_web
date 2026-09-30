import { notFound } from "next/navigation";
import { servicesData } from "@/data/servicesData";
import { Metadata } from "next";
import { ServiceDetailClient } from "@/components/ServiceDetailClient";

export function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = servicesData[slug];
    if (!service) return { title: "Service Not Found" };
    return {
        title: `${service.capability}: ${service.id.replace(/-/g, " ")} | SVaaN Global Tech`,
        description: service.intro.substring(0, 150) + "...",
    };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData[slug];

    if (!service) {
        notFound();
    }

    return <ServiceDetailClient service={service} />;
}
