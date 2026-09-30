"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");
        // Simulate API call
        setTimeout(() => {
            setFormState("success");
        }, 1500);
    };

    return (
        <main className="min-h-screen pt-[140px] pb-[60px] relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <motion.div
                    animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[10%] right-[5%] w-[600px] h-[600px] rounded-full blur-[180px]"
                    style={{ backgroundColor: "var(--t-accent)", opacity: "var(--t-orb-opacity)" }}
                />
                <motion.div
                    animate={{ x: [0, -40, 0], y: [0, 50, 0] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] rounded-full blur-[150px]"
                    style={{ backgroundColor: "var(--t-accent)", opacity: "calc(var(--t-orb-opacity) * 0.7)" }}
                />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
                {/* Contact Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center w-full md:w-[80%] mx-auto mb-24"
                >
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-[1px] w-8" style={{ backgroundColor: "var(--t-accent)" }} />
                        <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--t-text-muted)" }}>Get In Touch</span>
                        <div className="h-[1px] w-8" style={{ backgroundColor: "var(--t-accent)" }} />
                    </div>
                    <h1
                        className="font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-[1.1] tracking-tight mb-8"
                        style={{ color: "var(--t-text)" }}
                    >
                        Have a challenge <span className="italic" style={{ color: "var(--t-accent)" }}>worth solving?</span>
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto" style={{ color: "var(--t-text-muted)" }}>
                        Tell us what you are working through. Share the context, the challenge, and what you are trying to achieve.
                    </p>
                </motion.div>

                {/* Info Grid (3 Columns) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {[
                        {
                            id: "email",
                            title: "Email Us",
                            value: "hello@svaantech.com",
                            sub: "We generally reply within 24 hours.",
                            icon: (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            )
                        },
                        {
                            id: "phone",
                            title: "Call Us",
                            value: "96775 22812",
                            sub: "Mon-Sat from 9am to 6pm IST.",
                            icon: (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.89-1.46-5.352-3.922-6.812-6.812l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                            )
                        },
                        {
                            id: "location",
                            title: "Visit Us",
                            value: "Viduthalai Nagar, Kovilambakkam",
                            sub: "295, 13th St, S. Kolathur, Chennai, Tamil Nadu 600129",
                            icon: (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            )
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
                            className="group p-8 rounded-3xl transition-all duration-500 overflow-hidden relative"
                            style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--t-accent)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--t-border)"; }}
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: "linear-gradient(135deg, var(--t-gradient-from), transparent)" }} />
                            <div className="relative z-10 flex flex-col items-start text-left">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
                                    style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-accent)" }}
                                >
                                    {item.icon}
                                </div>
                                <h3 className="font-semibold text-lg mb-1" style={{ color: "var(--t-text)" }}>{item.title}</h3>
                                <p className="font-display font-bold text-xl mb-3" style={{ color: "var(--t-text)" }}>{item.value}</p>
                                <p className="text-sm" style={{ color: "var(--t-text-muted)" }}>{item.sub}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Interactive Map & Form Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="rounded-3xl overflow-hidden relative min-h-[400px] lg:min-h-full"
                        style={{ border: "1px solid var(--t-border)" }}
                    >
                        {/* Embedded Google Maps */}
                        <iframe
                            title="SVaaN HQ Map"
                            src="https://maps.google.com/maps?q=295%2C%2013th%20St%2C%20S.%20Kolathur%2C%20S.Kolathur%2C%20Viduthalai%20Nagar%2C%20Kovilambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600129&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(1) contrast(1.2) opacity(0.8)" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Gradient overlay for thematic blend */}
                        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, var(--t-bg), transparent)" }} />
                        <div
                            className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl backdrop-blur-xl pointer-events-none"
                            style={{ backgroundColor: "var(--t-glass-bg)", border: "1px solid var(--t-glass-border)" }}
                        >
                            <h4 className="font-display font-bold text-lg mb-1" style={{ color: "var(--t-text)" }}>Global Headquarters</h4>
                            <p className="text-sm" style={{ color: "var(--t-text-muted)" }}>Chennai, Tamil Nadu</p>
                        </div>
                    </motion.div>

                    {/* Form Area */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="rounded-3xl p-8 lg:p-12 relative overflow-hidden"
                        style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}
                    >
                        <AnimatePresence mode="wait">
                            {formState === "success" ? (
                                /* Success State */
                                <motion.div
                                    key="success-state"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5 }}
                                    className="h-full flex flex-col items-center justify-center text-center py-10"
                                >
                                    <div
                                        className="w-24 h-24 rounded-full flex items-center justify-center mb-8"
                                        style={{ backgroundColor: "var(--t-gradient-from)", color: "var(--t-accent)" }}
                                    >
                                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="font-display font-bold text-3xl mb-4" style={{ color: "var(--t-text)" }}>Message Received!</h3>
                                    <p className="text-lg leading-relaxed max-w-md mx-auto mb-10" style={{ color: "var(--t-text-muted)" }}>
                                        Thank you for reaching out to SVaaN Global Tech. We&apos;re reviewing your inquiry and will connect with you via email within <span style={{ color: "var(--t-text)" }} className="font-semibold">24-48 business hours.</span>
                                    </p>
                                    <button
                                        onClick={() => setFormState("idle")}
                                        className="inline-flex items-center gap-2 h-12 px-8 rounded-full font-semibold transition-all duration-300"
                                        style={{ border: "1px solid var(--t-border)", color: "var(--t-text)", backgroundColor: "var(--t-bg-surface)" }}
                                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--t-accent)"; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--t-border)"; }}
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                /* Form State */
                                <motion.form
                                    key="form-state"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="space-y-6"
                                    onSubmit={handleSubmit}
                                >
                                    <div>
                                        <h2 className="font-display font-bold text-2xl mb-2" style={{ color: "var(--t-text)" }}>Drop us a line</h2>
                                        <p className="text-sm mb-8" style={{ color: "var(--t-text-muted)" }}>Fields marked with an asterisk (*) are required.</p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-semibold mb-1" style={{ color: "var(--t-text)" }}>Name *</label>
                                            <p className="text-xs mb-3" style={{ color: "var(--t-text-muted)" }}>Tell us who we should speak with.</p>
                                            <input required type="text" id="name"
                                                className="w-full px-5 py-4 rounded-xl outline-none transition-all duration-300"
                                                placeholder="John Doe"
                                                style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-text)" }}
                                                onFocus={(e) => { e.currentTarget.style.borderColor = "var(--t-accent)"; }}
                                                onBlur={(e) => { e.currentTarget.style.borderColor = "var(--t-border)"; }}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold mb-1" style={{ color: "var(--t-text)" }}>Work email *</label>
                                            <p className="text-xs mb-3" style={{ color: "var(--t-text-muted)" }}>Use your business email where possible.</p>
                                            <input required type="email" id="email"
                                                className="w-full px-5 py-4 rounded-xl outline-none transition-all duration-300"
                                                placeholder="john@example.com"
                                                style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-text)" }}
                                                onFocus={(e) => { e.currentTarget.style.borderColor = "var(--t-accent)"; }}
                                                onBlur={(e) => { e.currentTarget.style.borderColor = "var(--t-border)"; }}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block text-sm font-semibold mb-1" style={{ color: "var(--t-text)" }}>Company</label>
                                        <p className="text-xs mb-3" style={{ color: "var(--t-text-muted)" }}>Tell us about the organization or team.</p>
                                        <input type="text" id="company"
                                            className="w-full px-5 py-4 rounded-xl outline-none transition-all duration-300"
                                            placeholder="Example Corp"
                                            style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-text)" }}
                                            onFocus={(e) => { e.currentTarget.style.borderColor = "var(--t-accent)"; }}
                                            onBlur={(e) => { e.currentTarget.style.borderColor = "var(--t-border)"; }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="interest" className="block text-sm font-semibold mb-2" style={{ color: "var(--t-text)" }}>How can we help? *</label>
                                        <select required id="interest"
                                            className="w-full px-5 py-4 rounded-xl outline-none transition-all duration-300 appearance-none"
                                            style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-text)" }}
                                            onFocus={(e) => { e.currentTarget.style.borderColor = "var(--t-accent)"; }}
                                            onBlur={(e) => { e.currentTarget.style.borderColor = "var(--t-border)"; }}
                                        >
                                            <option value="" disabled selected>Select an area of interest...</option>
                                            <option value="strategy">Strategy & Advisory</option>
                                            <option value="engineering">Software Engineering</option>
                                            <option value="design">Product & Design</option>
                                            <option value="ai">AI & Automation</option>
                                            <option value="other">Other Inquiry</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: "var(--t-text)" }}>Project Details</label>
                                        <textarea id="message" rows={4}
                                            className="w-full px-5 py-4 rounded-xl outline-none transition-all duration-300 resize-none"
                                            placeholder="Tell us a bit about what you're looking to build or solve..."
                                            style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-text)" }}
                                            onFocus={(e) => { e.currentTarget.style.borderColor = "var(--t-accent)"; }}
                                            onBlur={(e) => { e.currentTarget.style.borderColor = "var(--t-border)"; }}
                                        />
                                    </div>

                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={formState === "submitting"}
                                            className="w-full group inline-flex items-center justify-center gap-3 h-14 rounded-xl font-bold transition-all duration-300 shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                                            style={{ backgroundColor: "var(--t-btn-bg)", color: "var(--t-btn-text)" }}
                                            onMouseEnter={(e) => {
                                                if (formState === "submitting") return;
                                                e.currentTarget.style.backgroundColor = "var(--t-accent)";
                                                e.currentTarget.style.color = "#fff";
                                            }}
                                            onMouseLeave={(e) => {
                                                if (formState === "submitting") return;
                                                e.currentTarget.style.backgroundColor = "var(--t-btn-bg)";
                                                e.currentTarget.style.color = "var(--t-btn-text)";
                                            }}
                                        >
                                            {formState === "submitting" ? (
                                                <span className="flex items-center gap-3">
                                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Processsing...
                                                </span>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                    </svg>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
