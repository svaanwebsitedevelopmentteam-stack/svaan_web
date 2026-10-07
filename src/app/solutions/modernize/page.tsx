import { Metadata } from "next";
import { modernizeContent } from "@/data/solutions/modernize";
import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";

export const metadata: Metadata = {
    title: modernizeContent.meta.title,
    description: modernizeContent.meta.description
};

export default function ModernizePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": modernizeContent.faqs.map(faq => ({
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
            <SolutionPageTemplate content={modernizeContent} />
        </>
    );
}
