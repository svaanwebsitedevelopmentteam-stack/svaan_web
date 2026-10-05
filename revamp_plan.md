# SVaaN Global Tech Website Revamp - Implementation Plan

Based on the provided content (`web_content.md`), architectural blueprint (`SVaaN_Web plane .md`), and brand guidelines (`SVaaN Global Tech Brand Book V1.md`), here is the comprehensive step-by-step implementation plan for the SVaaN Global Tech website revamp.

## Phase 1: Project Setup & Global Design System Customization
**Goal:** Establish the foundational architecture, typography, and color tokens defined in the Brand Book and UI/UX blueprint.

1. **Next.js & Tailwind Configuration:**
   - Update `tailwind.config.ts` with the 60-30-10 color rule:
     - Pure White (`#FFFFFF`) - 60%
     - Neutral Slate (`#0F172A`) & Canvas Gray (`#F8FAFC`) - 30%
     - SVaaN Blue (`#0076CC`) - 10%
   - Configure typography using `next/font/google`:
     - **Sora** for display headings.
     - **Inter** for legible body copy.
   - Configure global grid utility classes (1px grid lines, precise container padding).

2. **Global Layout & Navigation:**
   - **Header:** Sticky, translucent glassmorphism header, left-aligned logo, SVaaN Blue CTA button.
   - **Footer:** Organized by Explore, Company, Capabilities, Services, Journey, and Legal. Stark, centered Final CTA.

## Phase 2: Core UI Component Library Development
**Goal:** Build reusable, animated components mapping to the UI patterns defined in the UX Architecture.

1. **Hero Component:** Minimalist text-only hero with staggered slide-up text reveal.
2. **Sticky Scroll Cards:** Vertical scrolling mechanism with overlapping cards for the "Business Challenges".
3. **Bento Grid:** Asymmetrical grid framework on Canvas Gray (`#F8FAFC`) for the "How We Work".
4. **Interactive Accordion:** Horizontal or vertical smooth drawers for capabilities with minimal vector diagrams.
5. **Service Cards:** Clean, soft-bordered cards with fade-in and a 2px SVaaN Blue keyline marker on hover.
6. **Editorial Grid:** 8-column reading layout limited to 860px width for Insights and Case Studies.

## Phase 3: Homepage Assembly
**Goal:** Implement the primary funnel to guide users from Challenge -> Capability -> Service -> Proof -> Conversation.

1. **Hero Section:** "Strategy gives technology direction..." 
2. **Business Challenges:** 4 scrolling, overlapping cards.
3. **What We Do & How We Work:** 5 stages integrated into the Bento Grid.
4. **Capabilities & Services:** Accordion list for the 6 capabilities; Grid for the 13 core services.
5. **Industries & Client Experiences:** Minimal typography list and editorial quote layouts.
6. **Insights, Tech Stack & FAQ:** Grid arrays and expanding drawers.
7. **Final CTA:** Full-width pure white canvas conversion point.

## Phase 4: Primary Pages & Routing
**Goal:** Build out the static architecture scaling the "Content Relationship Model".

1. **Approach Page:** Split-screen desktop layout connecting the 5 stages with a vertical timeline track that illuminates in SVaaN Blue on scroll.
2. **Capabilities Index & Detail (6 Pages):** Pill labels, Bento grid focus areas.
3. **Service Pages (13 Pages):** 
   - Left sticky sidebar structure.
   - Eyebrow -> H1 -> Problem -> How SVaaN helps -> Deliverables.
4. **Work (Case Studies) & Insights:** 
   - Strict 860px max-width reading columns. left-aligned paragraphs.
   - High-contrast index grids.
5. **Company, Leadership, Careers:** 
   - Vectors revealed on hover in "What We Believe".
   - Timeline for hiring process and focused application forms with 2px SVaaN Blue focus rings.

## Phase 5: Legal, Utility, & Compliance
**Goal:** Fulfill supporting pages and SEO basics.

1. **Search & Error Handling:** Global search component and a 404 page featuring alternative browsing paths.
2. **Legal Pages:** Privacy Policy, Terms & Conditions, Cookies (Standardized highly readable document templates).
3. **Accessibility:** Focus state validation, keyboard navigation checks, semantic HTML, and ARIA labels.

## Phase 6: Content Integration & Polishing
**Goal:** Finalize population of content from `web_content.md` and complete micro-animations.

1. **Data Population:** Inject the validated `web_content.md` drafts into the respective pages and CMS (if using Payload CMS as per previous environments).
2. **Micro-Animations:** Validate staggered fade-ins, hover lifts, image zooms, and scroll-triggers as defined in the plan file.
3. **SEO Optimization:** Dynamic metadata rendering and performance tuning.
