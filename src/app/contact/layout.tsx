import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Start a Project or Technical Consultation",
  description:
    "Discuss your project, application support needs, or digital transformation goals with SVaaN Global Tech's engineering leadership.",
  openGraph: {
    title: "Contact Us — Start a Project or Technical Consultation | SVaaN Global Tech",
    description:
      "Get in touch with SVaaN. Share your technology challenge and let's explore practical solutions together.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
