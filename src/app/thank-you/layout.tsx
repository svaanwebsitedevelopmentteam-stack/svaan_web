import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You — Message Received",
  description:
    "Thank you for contacting SVaaN Global Tech. Our team will review your inquiry and follow up promptly.",
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
