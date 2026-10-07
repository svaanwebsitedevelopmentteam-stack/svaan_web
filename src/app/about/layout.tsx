import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — How We Started and What We Believe",
  description: "SVaaN started in 2021 supporting one application for a US client. We're now 60+ people in Chennai, working with clients in the US, UAE, UK and Canada.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
