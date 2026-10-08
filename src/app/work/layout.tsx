import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Case Studies & Featured Client Work",
    template: "%s | SVaaN Global Tech",
  },
  description:
    "Explore how SVaaN partners with global businesses across FinTech, Healthcare, PropTech, and Logistics to engineer modern software and drive measurable outcomes.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Case Studies & Featured Client Work | SVaaN Global Tech",
    description:
      "Explore SVaaN's work delivering scalable enterprise platforms, custom applications, and cloud transformations worldwide.",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
