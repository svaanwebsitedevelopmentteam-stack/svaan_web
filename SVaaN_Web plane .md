**SVaaN Global Tech: Comprehensive Website Revamp Architecture**

This document unifies the visual design constraints, the SVaaN Brand Book directives, and the finalized website revamp content into a single, cohesive UI/UX blueprint.

## **I. Executive Design Strategy & Brand Alignment**

The overarching architecture is governed by the SVaaN 60-30-10 color proportion rule: 60% Pure White (\#FFFFFF) canvas, 30% Neutral Slate (\#0F172A) and Canvas Gray (\#F8FAFC) for structural elements, and a highly restrained 10% SVaaN Blue (\#0076CC) reserved exclusively for primary actions and brand recognition. The typography pairs the geometric, confident Sora font for display headings with the highly legible Inter font for body copy, ensuring an effortless reading experience across all viewports. The design will avoid generic templates in favor of modern container-based layouts, relying on precise 1px grid lines and vast whitespace.

## **II. Homepage UX/UI Section Mapping**

The homepage acts as the primary funnel, moving users from the business challenge to the commercial offer.

| Section | Selected UI Pattern (Reference) | Strategic Rationale & Content Alignment | Animation & Interaction |
| :---- | :---- | :---- | :---- |
| **Hero** | Text-only vast whitespace (Ref 3: Stratwell) | Eliminates visual noise to focus entirely on the H1: "Strategy gives technology direction. Technology turns strategy into progress."  | Smooth, staggered slide-up text reveal. |
| **Business Challenges** | Vertical sticky scroll with overlapping cards (Ref 4: Meeko) | The four challenges (Unclear direction, Disconnected strategy, etc.) must be digested sequentially.  | Previous cards scale down and dim as new cards overlap. |
| **What We Do & How We Work** | Asymmetrical bento grid on a Canvas Gray (\#F8FAFC) background  | The five stages (Understand, Strategize, Design, Build, Evolve) require distinct compartmentalization.  | Staggered fade-in; subtle hover state lifting the card. |
| **Capabilities** | Horizontal accordion or interactive list (Ref 2: Agentlyy) | Presents the six core capabilities (Strategy & Advisory through Managed Technology) without overwhelming the page with text.  | Smooth accordion expansion revealing minimal vector diagrams.  |
| **Services (The 13 Core)** | Clean, soft-bordered card grid  | Introduces the 13 specific services (e.g., AI Software Development, POC Development).  | Fade-in entrance; hover reveals a 2px SVaaN Blue keyline marker.  |
| **Industries** | Minimal typography list | Highlights the 9 supported industries (FinTech, Healthcare, etc.) cleanly.  | Subtle text-color shift on hover. |
| **Client Experiences** | Editorial quote layout | Displays approved client feedback and experiences using authentic typography.  | Gentle horizontal scroll or fade transition. |
| **Insights** | 3-column grid with canvas foundation | Separates thought-leadership content from core services.  | Image zoom (subtle) on hover. |
| **Technology Stack** | Clean logo grid / categorized lists | Categorizes the stack (Frontend, Backend, AI, Cloud, DevOps, Databases).  | Sequential fade-in on scroll. |
| **FAQ** | Precision list with 1px borders  | Answers common questions cleanly without cluttering the main flow.  | Expand/collapse smooth drawer. |
| **Contact / Final CTA** | Minimal, full-width pure white canvas (Ref 1: Fuse) | Provides a definitive, uncluttered conversion point: "Discuss the challenge".  | Subtle focus-state animations on the primary SVaaN Blue CTA button.  |

## **III. Primary Navigation & Core Pages**

* **Global Header & Footer:** The navigation utilizes a sticky, translucent glassmorphism header featuring the left-aligned primary SVaaN logo and a solid SVaaN Blue "Start a conversation" button. The comprehensive footer organizes links by Explore, Company, Capabilities, Services, Journey, and Legal, ending with a stark, centered CTA.  
*   
* **Approach Page:** Utilizing a split-screen desktop layout, the H1 sits on the left with supporting copy on the right. The five stages (Understand through Evolve) connect via a vertical timeline track; as each stage reaches the viewport center, its node illuminates in SVaaN Blue (\#0076CC).  
* 

## **IV. Capabilities & Service Deep Dives**

The architecture strictly enforces the "Content Relationship Model" where the six capabilities serve as the primary organizing layer, and the 13 specific services sit within them.

* **Capability Index & Detail Pages:** Each capability page opens with a centralized layout featuring the capability name inside a small, uppercase pill label. The core focus areas are mapped into a bento grid.  
*   
* **Service Pages (7.1 to 7.13):** The 13 individual service pages (e.g., MVP Development, DevOps Support) follow a strict editorial pattern: an Eyebrow Capability label, the H1, the business problem, how SVaaN helps, typical deliverables, and the relevant journey stage. These pages will utilize a sticky left sidebar for context and a scrolling right column for the detailed deliverables and related work.  
* 

## **V. Engagement, Insights & Company Pages**

* **Work (Case Studies):** The index features a high-contrast grid of approved client projects. The individual case study detail page utilizes an editorial reading layout spanning 8 grid columns to detail the Understand, Strategize, Design, Build, and Evolve stages.  
*   
* **Insights:** Article pages restrict the main body container to a maximum width of 860px to prevent eye fatigue. Long paragraphs will be strictly left-aligned, followed by related capabilities, services, and work at the bottom of the page.  
*   
* **Company & Leadership:** The "What We Believe" section operates as an interactive list revealing clean vector diagrams on hover. Leadership profiles (Sai Ramamurthy and Dinesh Natarajan) utilize authentic, natural lighting photography on pure white backgrounds.  
*   
* **Careers & Application:** The "Why SVaaN" section uses a bento grid, while the hiring process is visualized as a horizontal timeline. The job application form uses a stark, focused layout with 2px solid \#0076CC focus outlines on active inputs.  
* 

## **VI. Utility & Compliance**

* **Search & 404:** A global search page categorizes results by Capabilities, Services, Work, Insights, and Company, featuring a clean empty state offering alternative browsing paths.  
*   
* **Legal & Accessibility:** Privacy Policy, Terms & Conditions, and Cookie Policy pages utilize a standardized, highly readable document template. The Accessibility page explicitly outlines the site's commitment to keyboard accessibility, clear focus states, semantic structure, and appropriate color contrast.  
* 

## **VII. UX Journey & Interactivity**

The digital experience is designed to guide a visitor seamlessly through the designated user flow:

1. **Challenge:** Identifying the problem (e.g., "Need to launch a new digital product").

2. **Capability:** Routing to the broader discipline (Product & Experience).

3. **Service:** Drilling down into the specific solution (MVP Development).  
     
4. **Proof:** Validating expertise through a relevant Case Study or Insight.  
     
5. **Conversation:** Culminating in the final, unified CTA language ("Discuss the challenge").

