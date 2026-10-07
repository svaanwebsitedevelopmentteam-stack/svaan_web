import { Illustrations } from "@/components/ui/Illustrations";

export interface ProjectData {
    id: string;
    title: string;
    client: string;
    category: "Touring" | "Home Care" | "Healthcare" | "Real Estate";
    scope: string; // e.g. "Web App & Mobile App"
    tags: string[];
    summary: string;
    metrics: string[];
    challenge: string;
    solution: string;
    features: {
        web: string[];
        mobile: string[];
    };
    techStack: string[];
    href: string;
    gradient: string;
    Illustration: React.ComponentType<{ className?: string }>;
}

export const projectsData: Record<string, ProjectData> = {
    "biblical-touring": {
        id: "biblical-touring",
        title: "Touring",
        client: "Biblical",
        category: "Touring",
        scope: "Web App & Mobile App",
        tags: ["Web App", "Mobile App", "Touring", "Travel Tech"],
        summary:
            "A dual-platform touring ecosystem comprising a centralized web operations portal for travel planners and an offline-capable mobile guide app for tourists navigating historical and pilgrimage destinations.",
        metrics: ["100% Offline Guide Access", "Multi-Group GPS Sync", "Instant Tour Booking Engine"],
        challenge:
            "Managing large pilgrimage tour groups across overseas historic sites presented severe communication friction, itinerary delays, and unreliable cell connectivity in remote geographic corridors.",
        solution:
            "SVaaN engineered a multi-tenant web application for tour operators to organize routes, assign guides, and handle bookings, paired with native iOS and Android apps featuring cached audio guides, offline GPS navigation, and automated group messaging.",
        features: {
            web: [
                "Tour itinerary planner & departure scheduling",
                "Booking management & multi-currency payment checkout",
                "Tour guide roster & group allocation portal",
                "Real-time traveler attendance & dispatch dashboards",
            ],
            mobile: [
                "Offline-first interactive maps & GPS waypoints",
                "Multi-language synchronized audio narration",
                "Daily itinerary alerts & live group chat",
                "Digital emergency assistance beacon",
            ],
        },
        techStack: ["Next.js", "React Native", "TypeScript", "Node.js", "PostgreSQL", "Mapbox SDK", "AWS S3"],
        href: "/#solutions",
        gradient: "from-amber-600/60 to-slate-900/60",
        Illustration: Illustrations.Touring,
    },
    forida: {
        id: "forida",
        title: "Home Care",
        client: "Forida",
        category: "Home Care",
        scope: "Web App & Mobile App",
        tags: ["Web App", "Mobile App", "Home Care", "Caregiver Management"],
        summary:
            "Comprehensive home health and caregiving orchestration platform uniting agency dispatchers, field care workers, and patient families through real-time mobile shift verification and clinical care logs.",
        metrics: ["HIPAA & EVV Compliant", "40% Faster Shift Dispatch", "Real-Time Family Care Feed"],
        challenge:
            "Home assistance providers struggled with paper timesheets, missed caregiver check-ins, manual visit verification, and disjointed communication between distant family members and on-duty nursing staff.",
        solution:
            "Built a robust cloud web application for agency coordinators to schedule shifts and verify electronic visits (EVV), connected to a mobile app for caregivers to log vitals, record care milestones, and deliver instant transparent updates to family members.",
        features: {
            web: [
                "Intelligent caregiver shift scheduling & auto-dispatch",
                "Electronic Visit Verification (EVV) compliance reporting",
                "Patient medical profiles & customized care plans",
                "Agency billing, payroll, and insurance claims integration",
            ],
            mobile: [
                "Geofenced shift check-in & electronic signature capture",
                "Real-time task checklist (medication, meals, vitals)",
                "HIPAA-compliant family photo & status care feed",
                "One-touch nurse escalation & emergency panic button",
            ],
        },
        techStack: ["Next.js", "React Native", "TypeScript", "PostgreSQL", "Tailwind CSS", "Twilio", "AWS"],
        href: "/#solutions",
        gradient: "from-emerald-600/60 to-teal-900/60",
        Illustration: Illustrations.HomeCare,
    },
    silom: {
        id: "silom",
        title: "Healthcare",
        client: "Silom",
        category: "Healthcare",
        scope: "Web App & Mobile App",
        tags: ["Web App", "Mobile App", "Healthcare", "Telemedicine"],
        summary:
            "End-to-end digital health and telemedicine suite featuring browser-based clinician portals, electronic health records (EHR) integration, and patient mobile applications for remote consultations and prescription delivery.",
        metrics: ["Encrypted HD Video Visits", "99.98% Platform Uptime", "Automated Digital Prescriptions"],
        challenge:
            "Outpatient clinics faced crowded waiting rooms, cumbersome record management, and lack of virtual follow-up infrastructure, while patients demanded convenient mobile scheduling and instant telemedicine access.",
        solution:
            "Architected an enterprise web portal allowing doctors to conduct HD video appointments, review diagnostic lab charts, and issue electronic prescriptions, coupled with a cross-platform patient mobile app for seamless telehealth visits and vital tracking.",
        features: {
            web: [
                "Integrated clinical EHR & patient history viewer",
                "Multi-party secure WebRTC video consultation suite",
                "E-prescriptions & pharmacy network transmission",
                "Clinic capacity management & doctor scheduling queue",
            ],
            mobile: [
                "On-demand virtual doctor appointments & calendar booking",
                "Encrypted health records, test results, and discharge notes",
                "Prescription refills & medication dosage push reminders",
                "Wearable device vital telemetry (blood pressure, glucose)",
            ],
        },
        techStack: ["Next.js", "Flutter", "WebRTC", "Python / FastAPI", "PostgreSQL", "Redis", "Docker"],
        href: "/#solutions",
        gradient: "from-teal-600/60 to-cyan-950/60",
        Illustration: Illustrations.Healthcare,
    },
    havendeeds: {
        id: "havendeeds",
        title: "Real Estate PropTech",
        client: "Haven Deeds",
        category: "Real Estate",
        scope: "Web App & Mobile App",
        tags: ["Web App", "Mobile App", "Real Estate", "PropTech"],
        summary:
            "PropTech marketplace and digital closing platform providing verified title deed registries, interactive spatial property browsing, secure earnest escrow handling, and collaborative mobile buying experiences.",
        metrics: ["Verified Title Registry", "Digital Escrow Closing", "Interactive Map Search"],
        challenge:
            "Property discovery and transactions suffered from slow paper-based title searches, fragmented broker messaging, and opaque buyer closing timelines that created legal vulnerabilities and escrow delays.",
        solution:
            "Engineered an authoritative web transaction platform that digitizes title deed checks and closing milestones, linked to a mobile application allowing prospective buyers and realtors to tour properties, place offers, and track escrow progression.",
        features: {
            web: [
                "Verified property deed ledger & title search repository",
                "Digital escrow milestone tracker & secure deposit handling",
                "Broker listing management & virtual 3D tour hosting",
                "Legal contract generation with electronic signature audit trail",
            ],
            mobile: [
                "Augmented spatial property discovery & neighborhood insights",
                "Instant private messaging between buyers and licensed agents",
                "Saved listings, price drop alerts & inspection booking",
                "Mobile closing checklist with verified document upload",
            ],
        },
        techStack: ["Next.js", "React Native", "TypeScript", "Node.js", "PostgreSQL", "Stripe Connect", "AWS"],
        href: "/#solutions",
        gradient: "from-orange-600/60 to-amber-950/60",
        Illustration: Illustrations.PropTech,
    },
    mmu: {
        id: "mmu",
        title: "Real Estate Asset Management",
        client: "MMU",
        category: "Real Estate",
        scope: "Web App & Mobile App",
        tags: ["Web App", "Mobile App", "Real Estate", "Asset Management"],
        summary:
            "Enterprise real estate asset management suite and mobile tenant portal managing residential and commercial property portfolios, automated lease collections, and facility service request operations.",
        metrics: ["Multi-Asset Financial Analytics", "Automated Rent Collection", "Smart Maintenance Dispatch"],
        challenge:
            "Managing large real estate holdings across commercial complexes and residential developments required unifying fragmented maintenance requests, vendor contracts, tenant rent reconciliations, and portfolio yield reporting.",
        solution:
            "Developed an enterprise management web application delivering portfolio analytics, occupancy tracking, and vendor oversight, complemented by a mobile app for tenants and maintenance technicians to handle rent payments, lease renewals, and repair requests.",
        features: {
            web: [
                "Commercial & residential property portfolio oversight",
                "Automated rent billing, ledger reconciliation & accounting export",
                "Facility maintenance work order queue & contractor assignment",
                "Lease expiration forecasting & asset yield analytics",
            ],
            mobile: [
                "One-click mobile rent payments & payment history receipts",
                "Photo/video maintenance ticket submission with real-time status",
                "Community amenity booking (meeting rooms, gym, parking)",
                "Technician dispatch mode for work order completion",
            ],
        },
        techStack: ["Next.js", "React Native", "TypeScript", "Python", "PostgreSQL", "Redis", "Docker"],
        href: "/#solutions",
        gradient: "from-indigo-600/60 to-slate-950/60",
        Illustration: Illustrations.PropTech,
    },
};

export const allProjectsList = Object.values(projectsData);
