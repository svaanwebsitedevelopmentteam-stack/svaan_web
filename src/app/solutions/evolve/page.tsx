import { Metadata } from "next";
import { evolveContent } from "@/data/solutions/evolve";
import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";

export const metadata: Metadata = {
    title: evolveContent.meta.title,
    description: evolveContent.meta.description
};

export default function EvolvePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": evolveContent.faqs.map(faq => ({
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
            <SolutionPageTemplate content={evolveContent} />
        </>
    );
}
