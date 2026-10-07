import { SolutionContent } from "./types";

export const buildContent: SolutionContent = {
    slug: "build",
    meta: {
        title: "Custom Software Development | SVaaN",
        description: "Custom software, MVPs, POCs and AI-enabled products built around a real business need."
    },
    hero: {
        h1: "Build software around a real business need.",
        intro: "SVaaN designs and builds new software, from a first proof of concept to enterprise systems and AI-enabled products. We start with the problem the business needs solved, then choose the technology.",
        primaryCta: {
            label: "Discuss your build",
            href: "/contact"
        },
        secondaryLink: {
            label: "See how we work",
            href: "#how-we-work"
        },
        pathNodes: [
            { title: "Proof of concept", text: "Test whether an idea works." },
            { title: "MVP", text: "A first version real users can try." },
            { title: "Enterprise system", text: "Systems for complex operations." }
        ]
    },
    problem: {
        h2: "Many projects start with a feature list, not a first release.",
        body: "New software is only worth building if it solves something specific. Many projects start with a long feature list and no clear first release. The result is software that takes too long, costs too much and misses the real need.",
        often: "A long feature list and no clear first release.",
        approach: "One agreed first release that solves a specific problem."
    },
    serviceGroups: [
        {
            label: "Test the idea",
            items: [
                { title: "POC development", desc: "Test whether an idea works before you commit to a full build.", icon: "Strategy" },
                { title: "MVP development", desc: "A first version real users can try, so you learn before you invest more.", icon: "ProcessPrototype" }
            ]
        },
        {
            label: "Build the product",
            items: [
                { title: "Custom software development", desc: "Software shaped around how your business works, not a generic package.", icon: "Software" },
                { title: "Product engineering", desc: "Taking a product from idea to a working, maintainable release.", icon: "ProcessShape" },
                { title: "Web and mobile applications", desc: "Applications your customers and teams use every day.", icon: "Cloud" }
            ]
        },
        {
            label: "Connect and extend",
            items: [
                { title: "Enterprise software", desc: "Systems for complex operations with many users, roles and integrations.", icon: "ProcessBuild" },
                { title: "AI software development", desc: "AI features that solve a defined business problem, such as workflow automation or decision support.", icon: "AI" },
                { title: "Systems integration", desc: "Connect new software to the systems you already use.", icon: "Support" }
            ]
        }
    ],
    situations: [
        { text: "You have an idea and want to test it before a large investment.", startWith: "Proof of concept" },
        { text: "Spreadsheets and manual processes are holding the business back.", startWith: "MVP" },
        { text: "The tools you can buy do not fit the way you work.", startWith: "Custom software" },
        { text: "You want to add AI to a product and have a clear use case.", startWith: "AI software development" }
    ],
    stepsHeading: "How we work",
    steps: [
        { title: "Understand", text: "We learn the problem, the users and how the work happens today.", outcome: "A clear problem statement" },
        { title: "Decide", text: "We agree the scope of a first release before any build begins.", outcome: "An agreed first release" },
        { title: "Build", text: "We build in working steps and test along the way.", outcome: "Tested, working software" },
        { title: "Run", text: "If you want, we run the software after launch.", outcome: "Stable operation", optional: true, href: "/solutions/operate" },
        { title: "Improve", text: "We keep improving it as the business changes.", outcome: "Ongoing improvement", optional: true, href: "/solutions/evolve" }
    ],
    techGroups: [
        { title: "Front end", items: ["Next.js", "React", "React Native", "Vue"] },
        { title: "Back end", items: ["Node.js", "Python", "Java", "Go"] },
        { title: "Data", items: ["PostgreSQL", "MongoDB"] },
        { title: "Hosting", items: ["AWS", "Google Cloud", "Azure"] }
    ],
    story: null,
    related: [
        { href: "/solutions/operate", title: "Operate", text: "Keep it running after launch." },
        { href: "/solutions/evolve", title: "Evolve", text: "Keep improving it as the business changes." }
    ],
    faqs: [
        { q: "How do we start?", a: "With a conversation about the problem. We then agree the scope of a first release before any build begins." },
        { q: "Can we start small?", a: "Yes. A proof of concept or MVP is often the right first step because it tests the idea before the larger investment." },
        { q: "Who owns the software?", a: "You do. When the agreed payment is made, the software we build for you is assigned to your business in writing. Tools and components we reuse across projects stay with SVaaN, and you receive a licence to use them as part of your software. Open-source parts keep their own licences. We set this out in the contract before work starts." },
        { q: "How long does a first release take?", a: "It depends on the scope. Once we agree the first release, we give you a time estimate before the build begins." },
        { q: "How much will it cost?", a: "Cost depends on the scope too. We agree the first release first, then give you an estimate for it, so you know what you are committing to." },
        { q: "Can you work with our existing systems and team?", a: "Yes. Systems integration is part of our work, and we can work alongside your own people." },
        { q: "Will you support it after launch?", a: "Yes, if you want us to. Our Operate service covers application, production and infrastructure support." }
    ],
    cta: {
        h2: "Tell us what you want to build.",
        text: "Describe the problem, who will use the software, and what a good first release looks like.",
        label: "Discuss your build"
    }
};
