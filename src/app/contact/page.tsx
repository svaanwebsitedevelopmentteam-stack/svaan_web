"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface FormErrors {
    name?: string;
    email?: string;
    company?: string;
    challenge?: string;
    consent?: string;
    general?: string;
}

const ROLES = [
    "Founder",
    "CEO",
    "CTO",
    "COO",
    "Product",
    "IT",
    "Other"
];

const TIMELINES = [
    "Immediate",
    "1–3 months",
    "3–6 months",
    "6+ months"
];

const BUDGET_RANGES = [
    "< $25k",
    "$25k – $50k",
    "$50k – $100k",
    "$100k+",
    "Flexible / To be determined"
];

export default function ContactPage() {
    const router = useRouter();

    // Form field states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");
    const [challenge, setChallenge] = useState("");
    const [timeline, setTimeline] = useState("");
    const [budget, setBudget] = useState("");
    const [phone, setPhone] = useState("");
    const [consent, setConsent] = useState(false);

    // Spam honeypot trap and render timestamp
    const [honeypot, setHoneypot] = useState("");
    const [renderedAt, setRenderedAt] = useState<number>(0);

    // Submission states
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});

    useEffect(() => {
        setRenderedAt(Date.now());
    }, []);

    // Client-side validation
    const validateClientSide = (): boolean => {
        const nextErrors: FormErrors = {};

        if (!name.trim()) {
            nextErrors.name = "Full name is required.";
        } else if (name.trim().length < 2) {
            nextErrors.name = "Name must be at least 2 characters.";
        }

        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
        if (!email.trim()) {
            nextErrors.email = "Work email is required.";
        } else if (!emailRegex.test(email.trim())) {
            nextErrors.email = "Please enter a valid email address.";
        }

        if (!company.trim()) {
            nextErrors.company = "Company name is required.";
        }

        if (!challenge.trim()) {
            nextErrors.challenge = "Please describe your current challenge.";
        } else if (challenge.trim().length < 5) {
            nextErrors.challenge = "Please provide a bit more detail (at least 5 characters).";
        }

        if (!consent) {
            nextErrors.consent = "You must agree to the privacy and communication terms.";
        }

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Prevent duplicate submissions
        if (isSubmitting || isSubmitted) return;

        // Perform client-side validation
        if (!validateClientSide()) {
            return;
        }

        setIsSubmitting(true);
        setErrors({});

        try {
            const payload = {
                name: name.trim(),
                email: email.trim(),
                company: company.trim(),
                role: role || undefined,
                challenge: challenge.trim(),
                timeline: timeline || undefined,
                budget: budget || undefined,
                phone: phone.trim() || undefined,
                consent,
                _hp_trap: honeypot,
                _renderedAt: renderedAt
            };

            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setIsSubmitted(true);

                // Track successful submission as an analytics event without exposing private PII
                if (typeof window !== "undefined") {
                    try {
                        const win = window as unknown as {
                            gtag?: (...args: unknown[]) => void;
                            dataLayer?: Array<Record<string, unknown>>;
                        };

                        if (typeof win.gtag === "function") {
                            win.gtag("event", "contact_form_submission", {
                                event_category: "Engagement",
                                event_label: "Contact Inquiry",
                                role_specified: Boolean(role),
                                timeline_specified: Boolean(timeline),
                                budget_specified: Boolean(budget)
                            });
                            win.gtag("event", "generate_lead");
                        }

                        if (Array.isArray(win.dataLayer)) {
                            win.dataLayer.push({
                                event: "contact_form_submitted",
                                submission_time: new Date().toISOString()
                            });
                        }

                        window.dispatchEvent(
                            new CustomEvent("svaan:contact_submitted", {
                                detail: { timestamp: Date.now() }
                            })
                        );
                    } catch {
                        // Silent analytics catch
                    }
                }

                // Redirect to the dedicated Thank You page
                router.push("/thank-you");
            } else {
                setIsSubmitting(false);
                if (result.errors) {
                    setErrors(result.errors);
                } else {
                    setErrors({
                        general: result.error || "Unable to send your message. Please try again or email hello@svaan.in."
                    });
                }
            }
        } catch {
            setIsSubmitting(false);
            setErrors({
                general: "A network error occurred. Please check your connection or email hello@svaan.in directly."
            });
        }
    };

    return (
        <main className="min-h-screen pt-[130px] sm:pt-[140px] pb-[60px] relative overflow-hidden overflow-x-clip" style={{ backgroundColor: "var(--t-bg)" }}>
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

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
                {/* 1. Contact Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center w-full md:w-[85%] lg:w-[75%] mx-auto mb-16 sm:mb-20 lg:mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-md border text-xs font-semibold tracking-wider uppercase"
                        style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}>
                        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: "var(--t-accent)" }} />
                        Get In Touch
                    </div>

                    <h1
                        className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-4 sm:mb-6"
                        style={{ color: "var(--t-text)" }}
                    >
                        Have a challenge{" "}
                        <span className="italic" style={{ color: "var(--t-accent)" }}>worth solving?</span>
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                        Tell us what you are working through. Share the context, the challenge, and what you are trying to achieve.
                    </p>
                </motion.div>

                {/* 2. Info Grid (3 Columns) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 sm:mb-16">
                    {[
                        {
                            id: "email",
                            title: "Email Us",
                            value: "hello@svaan.in",
                            href: "mailto:hello@svaan.in",
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
                            href: "tel:+919677522812",
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
                            href: "https://maps.google.com/maps?q=295%2C%2013th%20St%2C%20S.%20Kolathur%2C%20S.Kolathur%2C%20Viduthalai%20Nagar%2C%20Kovilambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600129",
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
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.15 + (i * 0.1) }}
                            className="group p-6 sm:p-8 rounded-[var(--t-radius-card)] transition-all duration-300 overflow-hidden relative hover:border-[var(--t-accent)]"
                            style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: "linear-gradient(135deg, var(--t-gradient-from), transparent)" }} />
                            <div className="relative z-10 flex flex-col items-start text-left">
                                <div
                                    className="w-12 h-12 rounded-[var(--t-radius-md)] flex items-center justify-center mb-6 transition-all duration-300"
                                    style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-accent)" }}
                                >
                                    {item.icon}
                                </div>
                                <h3 className="text-sm font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--t-accent)" }}>{item.title}</h3>
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        target={item.id === "location" ? "_blank" : undefined}
                                        rel={item.id === "location" ? "noopener noreferrer" : undefined}
                                        className="font-display font-bold text-lg sm:text-xl mb-2 hover:text-[var(--t-accent)] transition-colors inline-block"
                                        style={{ color: "var(--t-text)" }}
                                    >
                                        {item.value}
                                    </a>
                                ) : (
                                    <p className="font-display font-bold text-lg sm:text-xl mb-2" style={{ color: "var(--t-text)" }}>{item.value}</p>
                                )}
                                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>{item.sub}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 3. Interactive Map & Form Section (Exact 2-Column Grid Maintained) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch">

                    {/* Left Column: Embedded Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="rounded-[var(--t-radius-card)] overflow-hidden relative min-h-[380px] lg:min-h-full"
                        style={{ border: "1px solid var(--t-border)" }}
                    >
                        <iframe
                            title="SVaaN HQ Map"
                            src="https://maps.google.com/maps?q=295%2C%2013th%20St%2C%20S.%20Kolathur%2C%20S.Kolathur%2C%20Viduthalai%20Nagar%2C%20Kovilambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600129&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(1) contrast(1.15) opacity(0.85)" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, var(--t-bg), transparent)" }} />
                        <div
                            className="absolute bottom-6 left-6 right-6 p-5 sm:p-6 rounded-[var(--t-radius-card)] backdrop-blur-xl z-10 transition-all duration-300"
                            style={{ backgroundColor: "var(--t-glass-bg)", border: "1px solid var(--t-glass-border)" }}
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                <div>
                                    <h4 className="font-display font-bold text-base sm:text-lg mb-1" style={{ color: "var(--t-text)" }}>Global Headquarters</h4>
                                    <p className="text-xs sm:text-sm" style={{ color: "var(--t-text-muted)" }}>Chennai, Tamil Nadu, India</p>
                                </div>
                                <a
                                    href="https://maps.google.com/maps?q=295%2C%2013th%20St%2C%20S.%20Kolathur%2C%20S.Kolathur%2C%20Viduthalai%20Nagar%2C%20Kovilambakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600129"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all duration-300 hover:border-[var(--t-accent)] hover:shadow-md shrink-0 self-start sm:self-auto group/maplink"
                                    style={{ backgroundColor: "var(--t-bg-card)", borderColor: "var(--t-border)", color: "var(--t-accent)" }}
                                    aria-label="Open SVaaN Global Headquarters in Google Maps"
                                >
                                    <span>View on Google Maps</span>
                                    <svg className="w-3.5 h-3.5 transition-transform group-hover/maplink:translate-x-0.5 group-hover/maplink:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form Area */}
                    <motion.div
                        initial={{ opacity: 0, x: 25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="rounded-[var(--t-radius-card)] p-6 sm:p-8 lg:p-12 relative overflow-hidden"
                        style={{ backgroundColor: "var(--t-bg-card)", border: "1px solid var(--t-border)" }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.form
                                key="contact-form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="space-y-5 sm:space-y-6"
                                onSubmit={handleSubmit}
                                noValidate
                            >
                                <div>
                                    <h2 className="font-display font-bold text-2xl sm:text-3xl mb-1.5" style={{ color: "var(--t-text)" }}>Drop us a line</h2>
                                    {/* <p className="text-xs sm:text-sm" style={{ color: "var(--t-text-muted)" }}>
                                        Fields marked with an asterisk (<span className="text-red-500">*</span>) are required.
                                    </p> */}
                                </div>

                                {/* General Error Banner */}
                                {errors.general && (
                                    <div className="p-3.5 rounded-lg border text-xs sm:text-sm flex items-start gap-2.5 bg-red-500/10 border-red-500/30 text-red-600 dark:text-red-400">
                                        <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span>{errors.general}</span>
                                    </div>
                                )}

                                {/* Row 1: Name (Yes, Full name) & Work email (Yes, Business email preferred) */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-xs sm:text-sm font-semibold mb-1" style={{ color: "var(--t-text)" }}>
                                            Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={name}
                                            onChange={(e) => {
                                                setName(e.target.value);
                                                if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                                            }}
                                            placeholder="Full name"
                                            className={`w-full px-4 py-3 sm:py-3.5 rounded-[var(--t-radius-btn)] text-xs sm:text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[var(--t-accent)] ${errors.name ? "border-red-500" : ""
                                                }`}
                                            style={{ backgroundColor: "var(--t-bg-surface)", border: errors.name ? "1px solid #ef4444" : "1px solid var(--t-border)", color: "var(--t-text)" }}
                                            disabled={isSubmitting || isSubmitted}
                                            required
                                        />
                                        {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-xs sm:text-sm font-semibold mb-1" style={{ color: "var(--t-text)" }}>
                                            Work email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                                            }}
                                            placeholder="Business email preferred"
                                            className={`w-full px-4 py-3 sm:py-3.5 rounded-[var(--t-radius-btn)] text-xs sm:text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[var(--t-accent)] ${errors.email ? "border-red-500" : ""
                                                }`}
                                            style={{ backgroundColor: "var(--t-bg-surface)", border: errors.email ? "1px solid #ef4444" : "1px solid var(--t-border)", color: "var(--t-text)" }}
                                            disabled={isSubmitting || isSubmitted}
                                            required
                                        />
                                        {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                                    </div>
                                </div>

                                {/* Row 2: Company (Yes, Company name) & Role (Recommended) */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <label htmlFor="company" className="block text-xs sm:text-sm font-semibold mb-1" style={{ color: "var(--t-text)" }}>
                                            Company <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={company}
                                            onChange={(e) => {
                                                setCompany(e.target.value);
                                                if (errors.company) setErrors(prev => ({ ...prev, company: undefined }));
                                            }}
                                            placeholder="Company name"
                                            className={`w-full px-4 py-3 sm:py-3.5 rounded-[var(--t-radius-btn)] text-xs sm:text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[var(--t-accent)] ${errors.company ? "border-red-500" : ""
                                                }`}
                                            style={{ backgroundColor: "var(--t-bg-surface)", border: errors.company ? "1px solid #ef4444" : "1px solid var(--t-border)", color: "var(--t-text)" }}
                                            disabled={isSubmitting || isSubmitted}
                                            required
                                        />
                                        {errors.company && <p className="text-[11px] text-red-500 mt-1">{errors.company}</p>}
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between mb-1">
                                            <label htmlFor="role" className="block text-xs sm:text-sm font-semibold" style={{ color: "var(--t-text)" }}>
                                                Role
                                            </label>
                                            <span className="text-[11px] font-medium" style={{ color: "var(--t-accent)" }}>Recommended</span>
                                        </div>
                                        <select
                                            id="role"
                                            name="role"
                                            value={role}
                                            onChange={(e) => setRole(e.target.value)}
                                            className="w-full px-4 py-3 sm:py-3.5 rounded-[var(--t-radius-btn)] text-xs sm:text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[var(--t-accent)] cursor-pointer"
                                            style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-text)" }}
                                            disabled={isSubmitting || isSubmitted}
                                        >
                                            <option value="">Select your role...</option>
                                            {ROLES.map((r) => (
                                                <option key={r} value={r}>{r}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Row 3: Timeline (Recommended) & Approx. budget (Optional) */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    <div>
                                        <div className="flex items-center justify-between mb-1">
                                            <label htmlFor="timeline" className="block text-xs sm:text-sm font-semibold" style={{ color: "var(--t-text)" }}>
                                                Timeline
                                            </label>
                                            <span className="text-[11px] font-medium" style={{ color: "var(--t-accent)" }}>Recommended</span>
                                        </div>
                                        <select
                                            id="timeline"
                                            name="timeline"
                                            value={timeline}
                                            onChange={(e) => setTimeline(e.target.value)}
                                            className="w-full px-4 py-3 sm:py-3.5 rounded-[var(--t-radius-btn)] text-xs sm:text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[var(--t-accent)] cursor-pointer"
                                            style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-text)" }}
                                            disabled={isSubmitting || isSubmitted}
                                        >
                                            <option value="">Select expected timeline...</option>
                                            {TIMELINES.map((t) => (
                                                <option key={t} value={t}>{t}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between mb-1">
                                            <label htmlFor="budget" className="block text-xs sm:text-sm font-semibold" style={{ color: "var(--t-text)" }}>
                                                Approx. budget
                                            </label>
                                            <span className="text-[11px]" style={{ color: "var(--t-text-muted)" }}>Optional</span>
                                        </div>
                                        <select
                                            id="budget"
                                            name="budget"
                                            value={budget}
                                            onChange={(e) => setBudget(e.target.value)}
                                            className="w-full px-4 py-3 sm:py-3.5 rounded-[var(--t-radius-btn)] text-xs sm:text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[var(--t-accent)] cursor-pointer"
                                            style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-text)" }}
                                            disabled={isSubmitting || isSubmitted}
                                        >
                                            <option value="">Select budget range...</option>
                                            {BUDGET_RANGES.map((b) => (
                                                <option key={b} value={b}>{b}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Row 4: Phone (Optional, Include country code) */}
                                <div>
                                    <div className="flex items-center justify-between mb-1">
                                        <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold" style={{ color: "var(--t-text)" }}>
                                            Phone
                                        </label>
                                        <span className="text-[11px]" style={{ color: "var(--t-text-muted)" }}>Optional (include country code)</span>
                                    </div>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="+1 (555) 000-0000 or +91 98765 43210"
                                        className="w-full px-4 py-3 sm:py-3.5 rounded-[var(--t-radius-btn)] text-xs sm:text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-[var(--t-accent)]"
                                        style={{ backgroundColor: "var(--t-bg-surface)", border: "1px solid var(--t-border)", color: "var(--t-text)" }}
                                        disabled={isSubmitting || isSubmitted}
                                    />
                                </div>

                                {/* Row 5: Current challenge (Yes, Free text) */}
                                <div>
                                    <label htmlFor="challenge" className="block text-xs sm:text-sm font-semibold mb-1" style={{ color: "var(--t-text)" }}>
                                        Current challenge <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="challenge"
                                        name="challenge"
                                        rows={4}
                                        value={challenge}
                                        onChange={(e) => {
                                            setChallenge(e.target.value);
                                            if (errors.challenge) setErrors(prev => ({ ...prev, challenge: undefined }));
                                        }}
                                        placeholder="Tell us about the challenge you are solving, systems involved, or key goals..."
                                        className={`w-full px-4 py-3.5 rounded-[var(--t-radius-btn)] text-xs sm:text-sm outline-none transition-all duration-200 resize-none focus:ring-2 focus:ring-[var(--t-accent)] ${errors.challenge ? "border-red-500" : ""
                                            }`}
                                        style={{ backgroundColor: "var(--t-bg-surface)", border: errors.challenge ? "1px solid #ef4444" : "1px solid var(--t-border)", color: "var(--t-text)" }}
                                        disabled={isSubmitting || isSubmitted}
                                        required
                                    />
                                    {errors.challenge && <p className="text-[11px] text-red-500 mt-1">{errors.challenge}</p>}
                                </div>

                                {/* Anti-Spam Honeypot (Invisible to humans, catches automated form scrapers) */}
                                <div className="sr-only" aria-hidden="true" style={{ display: "none" }}>
                                    <label htmlFor="_hp_trap">Leave this empty</label>
                                    <input
                                        type="text"
                                        id="_hp_trap"
                                        name="_hp_trap"
                                        value={honeypot}
                                        onChange={(e) => setHoneypot(e.target.value)}
                                        tabIndex={-1}
                                        autoComplete="off"
                                    />
                                </div>

                                {/* Row 6: Consent Checkbox (As legally required) */}
                                <div>
                                    <label className="flex items-start gap-3 cursor-pointer group text-left select-none">
                                        <input
                                            type="checkbox"
                                            name="consent"
                                            id="consent"
                                            checked={consent}
                                            onChange={(e) => {
                                                setConsent(e.target.checked);
                                                if (errors.consent) setErrors(prev => ({ ...prev, consent: undefined }));
                                            }}
                                            className="mt-1 w-4 h-4 rounded border accent-[var(--t-accent)] cursor-pointer"
                                            disabled={isSubmitting || isSubmitted}
                                            required
                                        />
                                        <span className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                                            I agree to the processing of my details according to SVaaN&apos;s{" "}
                                            <Link href="/privacy" className="underline hover:text-[var(--t-accent)]" target="_blank">
                                                Privacy Policy
                                            </Link>{" "}
                                            and consent to receive communications regarding my enquiry.{" "}
                                            <span className="text-red-500">*</span>
                                        </span>
                                    </label>
                                    {errors.consent && <p className="text-[11px] text-red-500 mt-1 pl-7">{errors.consent}</p>}
                                </div>

                                {/* Row 7: Submit Button */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || isSubmitted}
                                        className="w-full group inline-flex items-center justify-center gap-3 h-12 sm:h-14 rounded-[var(--t-radius-btn)] font-semibold text-sm sm:text-base transition-all duration-200 shadow-md hover:bg-[var(--t-btn-hover)] hover:shadow-lg active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--t-accent)] focus-visible:ring-offset-2"
                                        style={{ backgroundColor: "var(--t-btn-bg)", color: "var(--t-btn-text)" }}
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-3">
                                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Submitting Enquiry...
                                            </span>
                                        ) : isSubmitted ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Enquiry Sent
                                            </span>
                                        ) : (
                                            <>
                                                Send Message
                                                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </motion.form>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
