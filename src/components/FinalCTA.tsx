import Link from "next/link";

export function FinalCTA() {
    return (
        <section className="w-full bg-white py-32 md:py-48">
            <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
                <h2 className="font-display text-5xl md:text-7xl font-bold text-slate tracking-tight mb-8">
                    Have a challenge worth solving?
                </h2>
                <p className="text-xl md:text-2xl text-slate/60 leading-relaxed max-w-2xl mb-12">
                    Tell us what you are working through. We can start with the challenge,
                    understand the context, and identify the right path forward.
                </p>
                <Link
                    href="/contact"
                    className="inline-flex items-center justify-center h-16 px-10 rounded-full bg-svaan-blue text-white font-medium text-xl shadow-xl shadow-svaan-blue/20 transition-transform hover:scale-105 hover:shadow-2xl hover:shadow-svaan-blue/30"
                >
                    Discuss the challenge
                </Link>
            </div>
        </section>
    );
}
