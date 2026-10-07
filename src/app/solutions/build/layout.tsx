import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Custom Software & Enterprise Platforms",
  description:
    "SVaaN designs and engineers custom software from validation to enterprise scale and AI integration. Purpose-built technology aligned to measurable business needs.",
  openGraph: {
    title: "Build Custom Software & Enterprise Platforms | SVaaN Global Tech",
    description:
      "From proof of concept to enterprise systems, SVaaN builds custom software around real business problems.",
  },
};

export default function BuildLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
