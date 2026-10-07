import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "The people shaping how SVaaN thinks, builds, and grows. Meet Dinesh Natarajan (Founder) and Sai Ramamurthy (CEO).",
  openGraph: {
    title: "Leadership | SVaaN Global Tech",
    description:
      "The people shaping how SVaaN thinks, builds, and grows. Dinesh Natarajan (Founder) and Sai Ramamurthy (CEO) bring deep technology and a business-first approach to transformation and growth.",
  },
};

export default function LeadershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
