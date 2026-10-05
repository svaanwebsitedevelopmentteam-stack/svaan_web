"use client";

import { useState } from "react";

const faqs = [
    {
        question: "What is a custom software development company?",
        answer: "A custom software development company designs, builds, and maintains digital solutions around specific business requirements rather than providing only off-the-shelf software.",
    },
    {
        question: "What is your preferred development methodology?",
        answer: "We use an Agile-oriented delivery approach with iterative development, stakeholder feedback, and continuous testing. The exact delivery model can be shaped around the engagement.",
    },
    {
        question: "What industries do you work with?",
        answer: "Our current website identifies FinTech & Banking, Healthcare & HealthTech, Real Estate & PropTech, B2B SaaS, Logistics & Supply Chain, Telecoms, E-commerce & Retail, Education & EdTech, and Travel & Hospitality as areas we serve.",
    },
    {
        question: "Do you offer AI integration?",
        answer: "Yes. AI can be considered for new or existing platforms where it has a clear business purpose, such as workflow automation, decision support, or intelligent user experiences.",
    },
    {
        question: "What technologies do you work with?",
        answer: "Our current technology stack includes modern frontend and backend technologies, AI and automation tools, major cloud platforms, DevOps technologies, and multiple database platforms.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full bg-canvas py-[60px] md:py-[60px]">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="type-h2 mb-12 text-center text-slate">
                    Frequently Asked Questions
                </h2>

                <div className="flex flex-col border-t border-slate/10">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="border-b border-slate/10">
                                <button
                                    onClick={() => toggle(index)}
                                    aria-expanded={isOpen}
                                    className="w-full text-left py-8 flex justify-between items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-svaan-blue focus-visible:ring-offset-2 rounded-[var(--t-radius-sm)]"
                                >
                                    <h3 className={`type-h3 transition-colors ${isOpen ? 'text-svaan-blue' : 'text-slate group-hover:text-svaan-blue'}`}>
                                        {faq.question}
                                    </h3>
                                    <div className={`ml-6 flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${isOpen ? 'border-svaan-blue bg-svaan-blue text-white rotate-180' : 'border-slate/10 text-slate group-hover:border-svaan-blue group-hover:text-svaan-blue'}`}>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <p className="type-body text-slate-600 leading-relaxed max-w-3xl">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
