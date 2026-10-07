import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — Join Our Engineering & Product Team",
  description:
    "Explore open roles at SVaaN Global Tech. Work on meaningful technology challenges with a team grounded in craftsmanship, continuous learning, and client accountability.",
  openGraph: {
    title: "Careers — Join Our Engineering & Product Team | SVaaN Global Tech",
    description:
      "Join SVaaN in Chennai and globally. Build impactful technology across strategy, design, and full-stack engineering.",
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
