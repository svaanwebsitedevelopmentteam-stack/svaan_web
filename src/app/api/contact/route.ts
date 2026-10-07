import { NextResponse } from "next/server";

// Simple in-memory rate limiting map for basic DDoS/spam prevention
const submissionLog = new Map<string, number[]>();

function isRateLimited(ip: string, limit = 5, windowMs = 60000): boolean {
    const now = Date.now();
    const timestamps = (submissionLog.get(ip) || []).filter(t => now - t < windowMs);
    if (timestamps.length >= limit) {
        return true;
    }
    timestamps.push(now);
    submissionLog.set(ip, timestamps);
    return false;
}

// Regex for business / general email validation
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export async function POST(request: Request) {
    try {
        const clientIp = request.headers.get("x-forwarded-for") || "unknown";

        // 1. Rate limiting check
        if (isRateLimited(clientIp)) {
            return NextResponse.json(
                { success: false, error: "Too many requests. Please wait a moment before trying again." },
                { status: 429 }
            );
        }

        const body = await request.json();

        // 2. Anti-spam / Bot detection (Honeypot check)
        // If hidden honeypot trap field is filled, silently ignore and return 200
        if (body._hp_trap || body.website) {
            return NextResponse.json({ success: true, message: "Received" }, { status: 200 });
        }

        // Check submission timing: bots often submit form under 800ms
        if (body._renderedAt && Date.now() - Number(body._renderedAt) < 800) {
            return NextResponse.json({ success: true, message: "Received" }, { status: 200 });
        }

        const {
            name,
            email,
            company,
            role,
            challenge,
            timeline,
            budget,
            phone,
            consent
        } = body;

        // 3. Server-side validation
        const errors: Record<string, string> = {};

        if (!name || typeof name !== "string" || name.trim().length < 2) {
            errors.name = "Full name is required (at least 2 characters).";
        }

        if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
            errors.email = "A valid work email is required.";
        }

        if (!company || typeof company !== "string" || company.trim().length < 1) {
            errors.company = "Company name is required.";
        }

        if (!challenge || typeof challenge !== "string" || challenge.trim().length < 5) {
            errors.challenge = "Please describe your current challenge (at least 5 characters).";
        }

        if (!consent) {
            errors.consent = "Consent to privacy policy and communications is required.";
        }

        if (Object.keys(errors).length > 0) {
            return NextResponse.json(
                { success: false, errors },
                { status: 400 }
            );
        }

        // 4. Secure logging (No sensitive tokens or raw customer passwords)
        console.info("[SVaaN Contact Enquiry Received]", {
            timestamp: new Date().toISOString(),
            company: company.trim(),
            domain: email.split("@")[1] || "unknown",
            role: role || "Not specified",
            timeline: timeline || "Not specified",
            budget: budget || "Not specified",
            hasPhone: Boolean(phone && phone.trim()),
        });

        // 5. Send notification to the designated SVaaN business inbox
        // Primary inbox: hello@svaan.in
        try {
            await fetch("https://formsubmit.co/ajax/hello@svaan.in", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    _subject: `New SVaaN Business Enquiry from ${company} (${name})`,
                    "Full Name": name.trim(),
                    "Work Email": email.trim(),
                    "Company": company.trim(),
                    "Role": role?.trim() || "Not specified",
                    "Timeline": timeline?.trim() || "Not specified",
                    "Approx. Budget": budget?.trim() || "Not specified",
                    "Phone": phone?.trim() || "Not provided",
                    "Current Challenge": challenge.trim(),
                    "Consent": consent ? "Agreed to Privacy Policy" : "Not agreed"
                })
            });
        } catch (forwardError) {
            console.error("[SVaaN Notification Forward Warning]", forwardError);
            // We do not fail user experience if secondary forwarder has a momentary glitch
        }

        return NextResponse.json({
            success: true,
            message: "Your enquiry has been received successfully."
        }, { status: 200 });

    } catch (err) {
        console.error("[SVaaN Contact Submission Error]", err);
        return NextResponse.json(
            { success: false, error: "An unexpected error occurred. Please try again or email hello@svaan.in directly." },
            { status: 500 }
        );
    }
}
