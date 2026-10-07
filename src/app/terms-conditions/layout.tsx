import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | SVaaN Global Tech",
  description:
    "These Terms & Conditions govern your use of the SVaaN Global Tech Pvt. Ltd. website. By accessing or using the Website, you agree to these Terms.",
};

export default function TermsConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
