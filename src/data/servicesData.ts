export interface ServiceData {
    id: string;
    capability: string;
    title: string;
    intro: string;
    helpsWith: string[];
    deliverables: string[];
    journey: string;
    cta: string;
}

export const servicesData: Record<string, ServiceData> = {
    "poc-development": {
        id: "poc-development",
        capability: "Strategy & Advisory",
        title: "Validate the idea before making the larger investment.",
        intro: "A proof of concept helps organizations test whether an idea, technology, or approach is viable before committing to full-scale development.\n\nWhen it helps:\n* You have an idea but need evidence before investing.\n* Technical feasibility is uncertain.\n* Stakeholders need something tangible to evaluate.\n* You need to test a proposed workflow or technology.\n* You want to reduce uncertainty before an MVP or larger build.",
        helpsWith: ["Translate the core question into a proof of concept", "Identify what needs to be tested", "Build relevant working components", "Inform the next decision"],
        deliverables: ["Problem and hypothesis definition", "Technical feasibility assessment", "POC scope", "Prototype or working proof", "Technical findings", "Recommendation for next steps"],
        journey: "Understand → Strategize → Design → Build",
        cta: "Discuss your idea"
    },
    "ui-ux-design": {
        id: "ui-ux-design",
        capability: "Product & Experience",
        title: "Design digital experiences around real people and real needs.",
        intro: "Good digital products need to be understandable, useful, and aligned with the goals of the business. We design experiences that connect user needs with product requirements.",
        helpsWith: ["User flows", "Information architecture", "Wireframes", "Prototypes", "UI design", "Responsive experiences", "Usability considerations", "Design systems"],
        deliverables: ["User journeys", "Wireframes", "Interactive prototypes", "Interface designs", "Design specifications", "Reusable UI components"],
        journey: "Understand → Strategize → Design",
        cta: "Design the experience"
    },
    "mvp-development": {
        id: "mvp-development",
        capability: "Product & Experience",
        title: "Turn a product idea into something real enough to learn from.",
        intro: "An MVP focuses on the essential experience needed to put a product in front of users, learn from real usage, and make informed decisions about what comes next.",
        helpsWith: ["MVP scope definition", "Feature prioritization", "Product design", "Application development", "Testing", "Launch preparation", "Iterative improvement"],
        deliverables: ["MVP roadmap", "Prioritized feature set", "UX/UI", "Working product", "Testing", "Deployment", "Initial improvement backlog"],
        journey: "Strategize → Design → Build",
        cta: "Shape your MVP"
    },
    "software-product-development": {
        id: "software-product-development",
        capability: "Software & Technology",
        title: "Build software around the way your business needs to work.",
        intro: "We develop custom software around business requirements, workflows, users, and long-term product goals.",
        helpsWith: ["Product architecture", "Web applications", "Business applications", "APIs and integrations", "User management", "Workflow systems", "Product enhancement"],
        deliverables: ["Product requirements", "Technical architecture", "UX/UI", "Frontend and backend development", "APIs", "Testing", "Deployment", "Documentation"],
        journey: "Design → Build → Evolve",
        cta: "Discuss your product"
    },
    "enterprise-software-development": {
        id: "enterprise-software-development",
        capability: "Software & Technology",
        title: "Build technology that supports complex business operations.",
        intro: "Enterprise software needs to work across teams, workflows, users, and systems. We build and improve software with scalability, maintainability, and operational needs in mind.",
        helpsWith: ["Enterprise applications", "Workflow systems", "System integrations", "Legacy modernization", "Business process automation", "Scalable application architecture"],
        deliverables: ["Enterprise solution architecture", "Application development", "Integration layer", "Workflow implementation", "Quality assurance", "Deployment and support"],
        journey: "Strategize → Design → Build → Evolve",
        cta: "Discuss your enterprise challenge"
    },
    "ai-software-development": {
        id: "ai-software-development",
        capability: "AI & Automation",
        title: "Apply AI to real business problems.",
        intro: "AI is most useful when it is connected to a clear business outcome. We help identify appropriate opportunities and develop AI-enabled software and workflows around the problem being solved.",
        helpsWith: ["AI opportunity discovery", "AI-enabled applications", "Intelligent workflows", "Automation", "Conversational experiences", "AI integration", "Data-informed decision support"],
        deliverables: ["AI use-case definition", "Solution architecture", "AI workflow", "Application integration", "Testing and evaluation", "Deployment support"],
        journey: "Understand → Strategize → Build",
        cta: "Explore an AI opportunity"
    },
    "quality-assurance": {
        id: "quality-assurance",
        capability: "Engineering & Delivery",
        title: "Build confidence into every release.",
        intro: "Quality assurance helps ensure that software behaves as expected, performs reliably, and provides a consistent experience across supported environments.",
        helpsWith: ["Functional testing", "Regression testing", "Test automation", "Performance testing", "Security testing", "Usability checks", "Release validation"],
        deliverables: ["Test strategy", "Test cases", "Automated tests where appropriate", "Defect reports", "Regression coverage", "Test summary", "Release-readiness feedback"],
        journey: "Build → Evolve",
        cta: "Strengthen your quality process"
    },
    "helpdesk-support": {
        id: "helpdesk",
        capability: "Managed Technology Services",
        title: "Keep people productive when technology gets in the way.",
        intro: "End-user support helps employees and customers resolve technical issues quickly so teams can stay focused on their work.",
        helpsWith: ["User support", "Issue triage", "Incident handling", "Troubleshooting", "Escalation", "Knowledge-base support", "Support coordination"],
        deliverables: ["Resolved tickets", "Support metrics", "Knowledge-base articles"],
        journey: "Evolve",
        cta: "Discuss your support needs"
    },
    "application-support": {
        id: "application-support",
        capability: "Managed Technology Services",
        title: "Keep business-critical applications stable and useful.",
        intro: "Application support combines monitoring, troubleshooting, maintenance, and ongoing improvements to help applications remain available and aligned with business needs.",
        helpsWith: ["Application monitoring", "Incident resolution", "Bug fixes", "Maintenance", "Updates", "Performance review", "Technical troubleshooting"],
        deliverables: ["Uptime reports", "Resolved incidents", "Routine updates", "Performance monitoring"],
        journey: "Build → Evolve",
        cta: "Support your application"
    },
    "infrastructure-support": {
        id: "infrastructure-support",
        capability: "Managed Technology Services",
        title: "Keep the technology foundation dependable.",
        intro: "Infrastructure support helps organizations maintain the systems and environments their applications and teams depend on.",
        helpsWith: ["Server support", "Network support", "Infrastructure monitoring", "Environment management", "Security-related maintenance", "Infrastructure troubleshooting", "Cloud environment support"],
        deliverables: ["Environment stability", "Security updates", "Monitoring alerts"],
        journey: "Evolve",
        cta: "Discuss your infrastructure"
    },
    "production-support": {
        id: "production-support",
        capability: "Managed Technology Services",
        title: "Protect the reliability of live environments.",
        intro: "Production support focuses on keeping live applications and services stable, available, and responsive through monitoring, incident management, and continuous improvement.",
        helpsWith: ["Production monitoring", "Incident response", "Troubleshooting", "Root-cause analysis", "Performance optimization", "Release support", "Stability improvements"],
        deliverables: ["Root-cause analysis reports", "Performance fixes", "Release coordination"],
        journey: "Evolve",
        cta: "Strengthen production support"
    },
    "devops-support": {
        id: "devops-support",
        capability: "Managed Technology Services",
        title: "Make software delivery more consistent and efficient.",
        intro: "DevOps support connects development and operations through better deployment processes, automation, monitoring, and infrastructure practices.",
        helpsWith: ["CI/CD pipelines", "Deployment automation", "Infrastructure management", "Monitoring", "Environment management", "Release processes", "Operational improvements"],
        deliverables: ["Automated pipelines", "Deployment logs", "Infrastructure as code definitions"],
        journey: "Build → Evolve",
        cta: "Improve your delivery pipeline"
    },
    "cloud-managed-services": {
        id: "cloud-managed-services",
        capability: "Managed Technology Services",
        title: "Manage cloud environments for performance, security and growth.",
        intro: "Cloud environments need ongoing attention as workloads, users, costs, and business requirements change. We help organizations manage and improve their cloud environments.",
        helpsWith: ["Cloud environment management", "Monitoring", "Performance improvement", "Security-related controls", "Resource optimization", "Scaling support", "Cloud migration and operational support"],
        deliverables: ["Cloud architecture review", "Cost optimization reports", "Security assessments", "Scaling strategies"],
        journey: "Strategize → Evolve",
        cta: "Discuss your cloud environment"
    }
};
