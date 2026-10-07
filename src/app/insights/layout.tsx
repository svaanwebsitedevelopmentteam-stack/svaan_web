import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights, Engineering & Strategic Perspectives",
  description:
    "Articles, technical frameworks, and leadership insights on enterprise software engineering, AI adoption, cloud migration, and modern architectural patterns.",
  openGraph: {
    title: "Insights, Engineering & Strategic Perspectives | SVaaN Global Tech",
    description:
      "Perspectives from SVaaN's engineering leads on digital transformation, technology strategy, and building resilient software.",
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
