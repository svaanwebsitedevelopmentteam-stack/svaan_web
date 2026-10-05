import Link from "next/link";

export function FinalCTA() {
    return (
        <section className="w-full bg-white py-[60px] md:py-48">
            <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
                <h2 className="type-display text-slate tracking-tight mb-8">
                    Have a challenge worth solving?
                </h2>
                <p className="type-body-lg text-slate-600 leading-relaxed max-w-2xl mb-12">
                    Tell us what you are working through. We can start with the challenge,
                    understand the context, and identify the right path forward.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center justify-center h-14 px-10 rounded-[var(--t-radius-btn)] bg-svaan-blue hover:bg-[#005FA3] text-white font-medium text-lg shadow-md transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-svaan-blue focus-visible:ring-offset-2"
                >
                    Discuss the challenge
                </Link>
            </div>
        </section>
    );
}
