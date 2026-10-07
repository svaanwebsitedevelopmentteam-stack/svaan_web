/* eslint-disable @typescript-eslint/no-explicit-any */
import { SolutionContent } from "@/data/solutions/types";
import { SolutionHero } from "./SolutionHero";
import { ProblemSplit } from "./ProblemSplit";
import { ServiceGroups } from "./ServiceGroups";
import { SituationsGrid } from "./SituationsGrid";
import { ProcessSteps } from "./ProcessSteps";
import { ExtraBlocks } from "./ExtraBlocks";
import { TechGroups } from "./TechGroups";
import { ClientStory } from "./ClientStory";
import { RelatedSolutions } from "./RelatedSolutions";
import { SolutionFAQ } from "./SolutionFAQ";
import { SolutionCTA } from "./SolutionCTA";
import { MotionConfig } from "framer-motion";

export function SolutionPageTemplate({ content }: { content: SolutionContent }) {
    return (
        <MotionConfig reducedMotion="user">
            <div className="flex flex-col min-h-screen">
                <SolutionHero hero={content.hero} meta={content.meta} />
                <ProblemSplit problem={content.problem} />
                <ServiceGroups groups={content.serviceGroups} />
                <SituationsGrid situations={content.situations} />
                <ProcessSteps steps={content.steps} heading={content.stepsHeading} note={content.stepsNote} />
                {content.extras && <ExtraBlocks extras={content.extras} />}
                {content.techGroups && <TechGroups groups={content.techGroups} />}
                <ClientStory story={content.story} />
                <RelatedSolutions related={content.related} />
                <SolutionFAQ faqs={content.faqs} />
                <SolutionCTA cta={content.cta} />
            </div>
        </MotionConfig>
    );
}
