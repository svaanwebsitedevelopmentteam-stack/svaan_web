import { SolutionContent } from "./types";

export const evolveContent: SolutionContent = {
    slug: "evolve",
    meta: {
        title: "AI, Automation & Continuous Technology Improvement | SVaaN",
        description: "Automation, AI and optimization that keep your technology improving after launch."
    },
    hero: {
        h1: "Keep improving after launch.",
        intro: "Business needs change. SVaaN helps you automate work, use AI where it has a clear purpose, and keep improving the technology you already run.",
        primaryCta: {
            label: "Discuss your challenge",
            href: "/contact"
        },
        secondaryLink: {
            label: "See how we work",
            href: "#how-we-work"
        },
        pathNodes: [
            { title: "Automate", text: "Replace repeated manual steps with automated ones." },
            { title: "Use AI", text: "Apply AI to defined business tasks." },
            { title: "Keep improving", text: "A steady cycle of review, change and measurement." }
        ]
    },
    problem: {
        h2: "Many systems are left alone after launch.",
        body: "Many systems are left alone after launch. Manual steps stay. Data goes unused. The roadmap is a list nobody owns.",
        often: "Manual steps stay and the roadmap is a list nobody owns.",
        approach: "Start with the work, build a small version and measure it before we expand."
    },
    serviceGroups: [
        {
            label: "Automate the work",
            items: [
                { title: "AI and automation", desc: "Apply AI to defined business tasks, from document handling to decision support.", icon: "AI" },
                { title: "Workflow automation", desc: "Replace repeated manual steps with automated ones.", icon: "ProcessPrototype" },
                { title: "Operational optimization", desc: "Find and remove waste in how technology supports operations.", icon: "Strategy" }
            ]
        },
        {
            label: "Improve the product",
            items: [
                { title: "Product enhancement", desc: "Add features and fix friction in products already live.", icon: "Software" },
                { title: "Performance optimization", desc: "Make systems faster and cheaper to run.", icon: "Cloud" },
                { title: "Continuous improvement", desc: "A steady cycle of review, change and measurement.", icon: "ProcessShape" }
            ]
        },
        {
            label: "Decide with data",
            items: [
                { title: "Analytics and decision support", desc: "Turn your data into reports people can act on.", icon: "Database" },
                { title: "Technology roadmaps", desc: "A clear plan for what to improve next and why.", icon: "ProcessBuild" }
            ]
        }
    ],
    situations: [
        { text: "Your staff repeat the same manual tasks every day.", startWith: "Workflow automation" },
        { text: "Reports are assembled by hand.", startWith: "Analytics and decision support" },
        { text: "You want to use AI but do not know where it fits.", startWith: "AI and automation" },
        { text: "Your product needs steady improvement, not one-off releases.", startWith: "Continuous improvement" },
        { text: "You need a roadmap you can agree on.", startWith: "Technology roadmaps" }
    ],
    stepsHeading: "How we work",
    steps: [
        { title: "Understand", text: "We find where time or accuracy is lost.", outcome: "The work to improve, named" },
        { title: "Decide", text: "We decide whether automation or AI is the right answer.", outcome: "A clear answer on the approach" },
        { title: "Build", text: "We build a small version first.", outcome: "A small working version" },
        { title: "Measure", text: "We measure the result before we expand.", outcome: "A measured result" }
    ],
    stepsNote: "We start with the work, not the tool. If AI is not the right answer, we say so.",
    techGroups: [
        { title: "AI and machine learning", items: ["Python", "TensorFlow"] },
        { title: "Data", items: ["PostgreSQL", "MongoDB"] },
        { title: "Platform", note: "Plus the cloud and DevOps tools used across our other services." }
    ],
    story: null,
    related: [
        { href: "/solutions/build", title: "Build", text: "Need new software for what you found." },
        { href: "/solutions/operate", title: "Operate", text: "Keep the improved system stable." }
    ],
    faqs: [
        { q: "Where should we start with AI?", a: "With one process where you can name the time or errors involved. We test small before we expand." },
        { q: "Do you need our data?", a: "Often yes. We first review what data exists, where it sits and who can access it." },
        { q: "How do you measure results?", a: "We agree the measure before work starts, such as hours saved or errors reduced." },
        { q: "What if AI is not the right answer?", a: "We tell you. Many problems are better solved with simpler automation or a change to the process." },
        { q: "Who owns what you build?", a: "You do. When the agreed payment is made, the software we build for you is assigned to your business in writing. Tools and components we reuse across projects stay with SVaaN, and you receive a licence to use them as part of your software. Open-source parts keep their own licences. We set this out in the contract before work starts." },
        { q: "Can you improve a system you did not build?", a: "Yes, after a current-state review." }
    ],
    cta: {
        h2: "Tell us where your team loses time.",
        text: "Describe the task, how often it happens and what it costs you in time or errors.",
        label: "Discuss your challenge"
    }
};
