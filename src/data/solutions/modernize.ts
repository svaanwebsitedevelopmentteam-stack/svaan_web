import { SolutionContent } from "./types";

export const modernizeContent: SolutionContent = {
    slug: "modernize",
    meta: {
        title: "Legacy & Application Modernization | SVaaN",
        description: "Improve legacy systems, architecture, integrations and cloud foundations that are slowing your business down."
    },
    hero: {
        h1: "Modernize the technology that is holding the business back.",
        intro: "Some systems are hard to change, expensive to run or risky to leave alone. SVaaN improves, reshapes or replaces them in stages, so the business keeps running while the technology gets better.",
        primaryCta: {
            label: "Discuss your system",
            href: "/contact"
        },
        secondaryLink: {
            label: "See how we work",
            href: "#how-we-work"
        },
        pathNodes: [
            { title: "Improve", text: "Find and fix what makes the system slow." },
            { title: "Reshape", text: "Change how a system is built so it is easier to change." },
            { title: "Replace", text: "Replace old applications without losing the rules they contain." }
        ]
    },
    problem: {
        h2: "Older systems hold rules nobody wrote down.",
        body: "Older applications often hold years of business rules that nobody has written down. Every change is slow. Every fix risks breaking something else. Staff work around the system instead of with it.",
        often: "Slow changes, risky fixes and staff working around the system.",
        approach: "Improve in stages, so the business keeps running while the technology gets better."
    },
    serviceGroups: [
        {
            label: "Update the application",
            items: [
                { title: "Legacy application modernization", desc: "Update or replace old applications without losing the rules they contain.", icon: "ProcessBuild" },
                { title: "Architecture modernization", desc: "Reshape how a system is built so it is easier to change.", icon: "ProcessShape" },
                { title: "Performance improvement", desc: "Find and fix what makes the system slow.", icon: "Strategy" }
            ]
        },
        {
            label: "Move and connect",
            items: [
                { title: "Cloud migration", desc: "Move systems to the cloud in planned stages.", icon: "Cloud" },
                { title: "Database modernization", desc: "Move data to platforms that are faster and easier to maintain.", icon: "Database" },
                { title: "API and integration", desc: "Connect systems that do not talk to each other.", icon: "ProcessPrototype" }
            ]
        },
        {
            label: "Strengthen",
            items: [
                { title: "AI integration", desc: "Add AI to existing systems where there is a clear use.", icon: "AI" },
                { title: "Security and reliability improvements", desc: "Close gaps and reduce the chance of outages.", icon: "Support" }
            ]
        }
    ],
    situations: [
        { text: "Releases are slow and every change feels risky.", startWith: "Architecture modernization" },
        { text: "Hosting costs are rising or the infrastructure is ageing.", startWith: "Cloud migration" },
        { text: "Your systems do not share data.", startWith: "API and integration" },
        { text: "One person holds the knowledge of how it all works.", startWith: "Legacy application modernization" },
        { text: "The system struggles as the business grows.", startWith: "Performance improvement" }
    ],
    stepsHeading: "How we work",
    steps: [
        { title: "Understand", text: "We review the application, the data, the hosting and the people who use it.", outcome: "A current-state review" },
        { title: "Decide", text: "We set out the options with their trade-offs: keep, improve, rebuild or replace.", outcome: "Options with trade-offs" },
        { title: "Build", text: "We make the change in stages.", outcome: "Staged changes" },
        { title: "Run", text: "We run the system through the change so the business is not left unsupported.", outcome: "Continuity through the change" }
    ],
    stepsNote: "We prefer improving in steps over replacing everything at once, unless replacement is the right answer. We will say which one it is.",
    techGroups: [
        { title: "Cloud", items: ["AWS", "Azure", "Google Cloud"] },
        { title: "Delivery", items: ["Docker", "Kubernetes", "CI/CD pipelines"] },
        { title: "Patterns", items: ["APIs", "microservices", "serverless"] }
    ],
    story: null,
    related: [
        { href: "/solutions/build", title: "Build", text: "Need a replacement built around a clear first release." },
        { href: "/solutions/operate", title: "Operate", text: "Keep the system supported through the change." }
    ],
    faqs: [
        { q: "Do we have to replace the whole system?", a: "Often not. Many systems can be improved in parts. We review the current state and give you the options." },
        { q: "Will the business stop during a migration?", a: "We plan migrations to limit disruption. What is possible depends on the system, and we tell you up front." },
        { q: "How do you choose between modernizing and rebuilding?", a: "We look at the cost and risk of changing what you have, and what the business needs next." },
        { q: "Can you work on a system someone else built?", a: "Yes. We start with a current-state review and tell you what we find." },
        { q: "How long does a modernization take?", a: "It depends on the size and condition of the system. After the current-state review we give you a staged plan with time estimates." },
        { q: "What happens to our data?", a: "We plan how data moves as part of the options we set out, and we tell you the risks up front." }
    ],
    cta: {
        h2: "Tell us which system is holding you back.",
        text: "Describe the system, what it does for the business and what makes it hard to live with.",
        label: "Discuss your system"
    }
};
