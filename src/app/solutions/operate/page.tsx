import { Metadata } from "next";
import { operateContent } from "@/data/solutions/operate";
import { SolutionPageTemplate } from "@/components/solutions/SolutionPageTemplate";

export const metadata: Metadata = {
    title: operateContent.meta.title,
    description: operateContent.meta.description
};

export default function OperatePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": operateContent.faqs.map(faq => ({
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
            <SolutionPageTemplate content={operateContent} />
        </>
    );
}
