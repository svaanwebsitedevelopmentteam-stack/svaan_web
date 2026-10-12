import type { Metadata } from "next";
import { sharedOpenGraphImage } from "../shared-metadata";

export const metadata: Metadata = {
  title: {
    default: "Our Capabilities - Strategy, Product & Software Engineering",
    template: "%s | SVaaN Global Tech",
  },
  description:
    "Explore SVaaN's end-to-end technology capabilities across advisory, UI/UX design, MVP engineering, enterprise platforms, cloud architecture, and managed operations.",
  openGraph: {
    title: "Our Capabilities - Strategy, Product & Software Engineering | SVaaN Global Tech",
    description:
      "From POC validation to enterprise cloud platforms and 24/7 managed support - discover how SVaaN powers resilient digital systems.",
    ...sharedOpenGraphImage,
  },
};

export default function CapabilitiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
