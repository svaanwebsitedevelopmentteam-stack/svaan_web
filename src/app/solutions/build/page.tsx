import { Metadata } from "next";
import { buildContent } from "@/data/solutions/build";
import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";

export const metadata: Metadata = {
    title: buildContent.meta.title,
    description: buildContent.meta.description
};

export default function BuildPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": buildContent.faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.q,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.a
                            }
                        }))
                    })
                }}
            />
            <SolutionPageTemplate content={buildContent} />
        </>
    );
}
