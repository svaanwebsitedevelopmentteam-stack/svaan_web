import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modernize Legacy Systems & Cloud Infrastructure",
  description:
    "Refactor legacy monolithic software, resolve architectural technical debt, decouple services, and migrate to modern cloud platforms with zero business downtime.",
  openGraph: {
    title: "Modernize Legacy Systems & Cloud Infrastructure | SVaaN Global Tech",
    description:
      "Eliminate technical debt and migrate legacy systems safely with parallel-run validation and zero service interruption.",
  },
};

export default function ModernizeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
