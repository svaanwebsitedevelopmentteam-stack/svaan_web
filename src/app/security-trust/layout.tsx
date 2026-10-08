import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security & Trust | SVaaN Global Tech",
  description:
    "Learn about SVaaN Global Tech's approach to security and trust. We build, modernize, operate, and evolve business technology with a practical and contextual focus.",
  alternates: {
    canonical: "/security-trust",
  },
};

export default function SecurityTrustLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
