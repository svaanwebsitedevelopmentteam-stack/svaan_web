export interface SolutionContent {
    slug: string;
    meta: {
        title: string;
        description: string;
    };
    hero: {
        h1: string;
        intro: string;
        introNote?: {
            text: string;
            verified: boolean;
            fallback?: string;
        };
        primaryCta: {
            label: string;
            href: string;
        };
        secondaryLink?: {
            label: string;
            href: string;
        };
        pathNodes: {
            title: string;
            text: string;
        }[];
    };
    problem: {
        h2: string;
        body: string;
        often: string;
        approach: string;
    };
    serviceGroups: {
        label: string;
        items: {
            title: string;
            desc: string;
            icon: string;
        }[];
    }[];
    situations: {
        text: string;
        startWith: string;
    }[];
    stepsHeading: string;
    steps: {
        title: string;
        text: string;
        outcome: string;
        optional?: boolean;
        href?: string;
    }[];
    stepsNote?: string;
    techGroups?: {
        title: string;
        items?: string[];
        note?: string;
    }[];
    extras?: {
        deliverables?: string[];
        engagement?: {
            title: string;
            text: string;
        }[];
        serviceLevels?: {
            statement: string;
            rows?: string[][];
        };
    };
    story: {
        client: string;
        industry: string;
        challenge: string;
        firstRelease: string;
        outcome: string;
        metrics: string[];
        quote?: string;
        permissionConfirmed: boolean;
    } | null;
    related: {
        href: string;
        title: string;
        text: string;
    }[];
    faqs: {
        q: string;
        a: string;
    }[];
    cta: {
        h2: string;
        text: string;
        label: string;
    };
}
