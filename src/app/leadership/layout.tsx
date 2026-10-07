import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership & Principals",
  description:
    "Meet the founders and leadership team guiding SVaaN Global Tech with senior engineering rigor, operational accountability, and client partnership.",
  openGraph: {
    title: "Leadership & Principals | SVaaN Global Tech",
    description:
      "Leadership at SVaaN Global Tech: Dinesh Natarajan (Founder) and Sai Ramamurthy (CEO) bring decades of engineering, operations, and business transformation expertise.",
  },
};

export default function LeadershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
