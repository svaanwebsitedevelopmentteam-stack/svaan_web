import { SolutionContent } from "./types";

export const operateContent: SolutionContent = {
    slug: "operate",
    meta: {
        title: "Application Support & Managed Technology Services | SVaaN",
        description: "Application, production, infrastructure and helpdesk support for live business-critical technology."
    },
    hero: {
        h1: "Keep critical technology running.",
        intro: "Launch is the start, not the finish. SVaaN supports live applications, infrastructure and users, so the technology your business depends on stays stable and useful.",
        introNote: {
            text: "Support is where SVaaN began, in 2021, with a single US application-support engagement. It is still a core part of what we do.",
            verified: false,
            fallback: "Support is a core part of what SVaaN does."
        },
        primaryCta: {
            label: "Discuss your support needs",
            href: "/contact"
        },
        secondaryLink: {
            label: "See how we support you",
            href: "#how-we-work"
        },
        pathNodes: [
            { title: "Applications", text: "Keep business-critical applications stable and useful." },
            { title: "Infrastructure", text: "Keep the technology foundation dependable." },
            { title: "Users", text: "Keep people productive when technology gets in the way." }
        ]
    },
    problem: {
        h2: "When live technology breaks, people stop working.",
        body: "When live technology breaks, people stop working. If nobody clearly owns it, issues bounce between teams and the same problems keep coming back.",
        often: "Issues bounce between teams and the same problems return.",
        approach: "One team owns the service from start to finish."
    },
    serviceGroups: [
        {
            label: "Applications and users",
            items: [
                { title: "Application support", desc: "Keep business-critical applications stable and useful.", icon: "ProcessBuild" },
                { title: "Production support", desc: "Protect the reliability of live environments.", icon: "Support" },
                { title: "Helpdesk and end-user support", desc: "Keep people productive when technology gets in the way.", icon: "Strategy" }
            ]
        },
        {
            label: "Infrastructure and cloud",
            items: [
                { title: "Infrastructure support", desc: "Keep the technology foundation dependable.", icon: "Database" },
                { title: "Cloud managed services", desc: "Manage cloud environments for performance and growth.", icon: "Cloud" },
                { title: "DevOps support", desc: "Make software delivery more consistent and efficient.", icon: "ProcessPrototype" }
            ]
        },
        {
            label: "Watch and maintain",
            items: [
                { title: "Monitoring and incident response", desc: "Spot problems early and resolve them.", icon: "ProcessShape" },
                { title: "Continuous maintenance", desc: "Routine updates, fixes and performance reviews.", icon: "Software" }
            ]
        }
    ],
    situations: [
        { text: "Your team built or bought an application and cannot support it fully.", startWith: "Application support" },
        { text: "A vendor has left and nobody owns the system.", startWith: "Production support" },
        { text: "Users report problems and there is no clear place to send them.", startWith: "Monitoring and incident response" },
        { text: "You want a helpdesk for staff or customers.", startWith: "Helpdesk and end-user support" },
        { text: "Your cloud environment needs someone to manage it.", startWith: "Cloud managed services" },
        { text: "Releases are manual and risky.", startWith: "DevOps support" }
    ],
    stepsHeading: "How we support you",
    steps: [
        { title: "Understand", text: "We learn the system and agree what we are responsible for.", outcome: "Agreed responsibilities" },
        { title: "Decide", text: "We agree how issues are reported and handled.", outcome: "A clear reporting path" },
        { title: "Run", text: "We take it over and keep it running: monitoring, fixing incidents and applying updates.", outcome: "A stable, monitored service" },
        { title: "Improve", text: "We review performance and make enhancements.", outcome: "Regular performance reviews" }
    ],
    stepsNote: "One team owns the service from start to finish.",
    extras: {
        deliverables: ["Uptime reports", "Resolved incidents", "Routine updates", "Performance monitoring"],
        engagement: [
            { title: "Ongoing managed service", text: "An ongoing service for the systems you name." },
            { title: "Dedicated team", text: "A dedicated team working on your systems." }
        ],
        serviceLevels: {
            statement: "We agree support hours, contact channels and response targets in writing before we take over. They depend on the system and on how critical it is to your business."
        }
    },
    techGroups: [
        { title: "Cloud", items: ["AWS", "Azure", "Google Cloud"] },
        { title: "DevOps & CI/CD", items: ["Docker", "Kubernetes", "CI/CD pipelines"] },
        { title: "Monitoring", items: ["Datadog", "New Relic", "Prometheus"] },
        { title: "Support", items: ["Jira", "ServiceNow", "Zendesk"] }
    ],
    story: null,
    related: [
        { href: "/solutions/evolve", title: "Evolve", text: "Turn support into steady improvement." },
        { href: "/solutions/modernize", title: "Modernize", text: "Fix the systems that keep causing incidents." }
    ],
    faqs: [
        { q: "What can you support?", a: "Applications, production environments, infrastructure, cloud environments and end users. We agree the scope in writing before we start." },
        { q: "Can you support a system you did not build?", a: "Yes. We start by learning how it works and documenting what we find." },
        { q: "What are your support hours and response times?", a: "We agree support hours, contact channels and response targets in writing before we take over, because they depend on the system and how critical it is. Tell us what you need covered and we will propose terms." },
        { q: "How do we report an issue?", a: "We agree the channels and the way issues are handled before we take over, so everyone knows where to send a problem." },
        { q: "Who is responsible when something breaks?", a: "We agree this in writing before we start. One team owns the service from start to finish, so issues do not bounce between teams." },
        { q: "Can support grow into improvement work?", a: "Yes. Many support engagements lead to fixes and enhancements. That is the Evolve service." }
    ],
    cta: {
        h2: "Tell us what needs looking after.",
        text: "Describe the system, who relies on it and where it lets people down today.",
        label: "Discuss your support needs"
    }
};
