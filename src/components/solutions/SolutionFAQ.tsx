/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";

export function SolutionFAQ({ faqs }: { faqs: any[] }) {
    return (
        <section className="py-16 lg:py-24 bg-[var(--t-bg-surface)] border-y border-[var(--t-border)]">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    <div className="lg:col-span-4 sticky top-32">
                        <div className="type-caption text-[var(--t-accent)] mb-4 flex items-center">
                            FAQ
                            <span className="w-6 h-[1px] bg-[var(--t-accent)] ml-4" />
                        </div>
                        <h2 className="type-h2 text-[var(--t-text)] mb-6">Common questions</h2>
                        <Link href="/contact" className="type-body text-[var(--t-accent)] hover:underline underline-offset-4">
                            Still have a question? Talk to us.
                        </Link>
                    </div>
                    <div className="lg:col-span-8">
                        <FAQAccordion faqs={faqs.map(f => ({ q: f.q, a: f.a }))} className="bg-[var(--t-bg-card)] rounded-[8px] border border-[var(--t-border)] overflow-hidden" />
                    </div>
                </div>
            </div>
        </section>
    );
}
