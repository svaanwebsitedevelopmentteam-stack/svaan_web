import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Approach - Engineering Methodology & Delivery Lifecycle",
  description:
    "How SVaaN works: Understand, Strategize, Design, Build, and Run. A disciplined, transparent delivery framework designed for long-term reliability and business value.",
  openGraph: {
    title: "Our Approach - Engineering Methodology & Delivery Lifecycle | SVaaN Global Tech",
    description:
      "Understand before deciding. Build with discipline. Stay accountable after go-live. Explore SVaaN's engineering delivery process.",
  },
};

export default function ApproachLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
