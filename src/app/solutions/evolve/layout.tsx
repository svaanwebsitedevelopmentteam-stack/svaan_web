import type { Metadata } from "next";
import { sharedOpenGraphImage } from "../../shared-metadata";

export const metadata: Metadata = {
  title: "Evolve Workflows, Automation & Strategic AI",
  description:
    "Systematically improve and automate processes post-launch. SVaaN delivers workflow automation, purposeful AI integration, and continuous software evolution.",
  alternates: {
    canonical: "/solutions/evolve",
  },
  openGraph: {
    title: "Evolve Workflows, Automation & Strategic AI | SVaaN Global Tech",
    description:
      "Keep improving after launch. SVaaN helps organizations automate work, leverage targeted AI, and continuously advance operational technology.",
    ...sharedOpenGraphImage,
  },
};

export default function EvolveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
