import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

        // 5. Send notification to designated SVaaN business inbox via direct cPanel SMTP
        const smtpPass = process.env.SMTP_PASSWORD;
        if (smtpPass) {
            try {
                const transporter = nodemailer.createTransport({
                    host: process.env.SMTP_HOST || "s13842.bom1.stableserver.net",
                    port: Number(process.env.SMTP_PORT) || 465,
                    secure: (process.env.SMTP_PORT || "465") === "465",
                    auth: {
                        user: process.env.SMTP_USER || "hello@svaan.in",
                        pass: smtpPass,
                    },
                    tls: {
                        rejectUnauthorized: false
                    }
                });

                await transporter.sendMail({
                    from: `"SVaaN Enquiry" <${process.env.SMTP_USER || "hello@svaan.in"}>`,
                    to: process.env.CONTACT_RECEIVER_EMAIL || "hello@svaan.in",
                    replyTo: `"${name}" <${email}>`,
                    subject: `New SVaaN Business Enquiry from ${company} (${name})`,
                    text: `New SVaaN Business Enquiry\n\nName: ${name.trim()}\nEmail: ${email.trim()}\nCompany: ${company.trim()}\nRole: ${role?.trim() || "Not specified"}\nTimeline: ${timeline?.trim() || "Not specified"}\nBudget: ${budget?.trim() || "Not specified"}\nPhone: ${phone?.trim() || "Not provided"}\n\nCurrent Challenge:\n${challenge.trim()}`,
                    html: `
                        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; line-height: 1.6; color: #111;">
                            <h2 style="color: #0A66C2; border-bottom: 2px solid #eee; padding-bottom: 8px; margin-bottom: 16px;">New SVaaN Business Enquiry</h2>
                            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                                <tr><td style="padding: 8px 12px; font-weight: bold; width: 140px; background: #f8fafc; border: 1px solid #e2e8f0;">Full Name</td><td style="padding: 8px 12px; border: 1px solid #e2e8f0;">${name.trim()}</td></tr>
                                <tr><td style="padding: 8px 12px; font-weight: bold; background: #f8fafc; border: 1px solid #e2e8f0;">Work Email</td><td style="padding: 8px 12px; border: 1px solid #e2e8f0;"><a href="mailto:${email.trim()}">${email.trim()}</a></td></tr>
                                <tr><td style="padding: 8px 12px; font-weight: bold; background: #f8fafc; border: 1px solid #e2e8f0;">Company</td><td style="padding: 8px 12px; border: 1px solid #e2e8f0;">${company.trim()}</td></tr>
                                <tr><td style="padding: 8px 12px; font-weight: bold; background: #f8fafc; border: 1px solid #e2e8f0;">Role</td><td style="padding: 8px 12px; border: 1px solid #e2e8f0;">${role?.trim() || "Not specified"}</td></tr>
                                <tr><td style="padding: 8px 12px; font-weight: bold; background: #f8fafc; border: 1px solid #e2e8f0;">Timeline</td><td style="padding: 8px 12px; border: 1px solid #e2e8f0;">${timeline?.trim() || "Not specified"}</td></tr>
                                <tr><td style="padding: 8px 12px; font-weight: bold; background: #f8fafc; border: 1px solid #e2e8f0;">Approx. Budget</td><td style="padding: 8px 12px; border: 1px solid #e2e8f0;">${budget?.trim() || "Not specified"}</td></tr>
                                <tr><td style="padding: 8px 12px; font-weight: bold; background: #f8fafc; border: 1px solid #e2e8f0;">Phone</td><td style="padding: 8px 12px; border: 1px solid #e2e8f0;">${phone?.trim() || "Not provided"}</td></tr>
                            </table>
                            <div style="padding: 16px; background: #f8fafc; border-left: 4px solid #0A66C2; border-radius: 4px; margin-top: 16px;">
                                <h4 style="margin: 0 0 8px 0; color: #1e293b;">Current Challenge:</h4>
                                <p style="margin: 0; white-space: pre-wrap; color: #334155;">${challenge.trim()}</p>
                            </div>
                        </div>
                    `,
                });
                console.info("[SVaaN Contact Enquiry] Sent successfully via SMTP to hello@svaan.in");
            } catch (smtpError) {
                console.error("[SVaaN SMTP Error]", smtpError);
                return NextResponse.json(
                    { success: false, error: "Failed to send email. Please check server logs or email hello@svaan.in directly." },
                    { status: 500 }
                );
            }
        } else {
            console.warn("[SVaaN SMTP Warning] SMTP_PASSWORD is not set in environment variables.");
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
