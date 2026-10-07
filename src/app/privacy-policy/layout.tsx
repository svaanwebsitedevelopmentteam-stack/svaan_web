import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SVaaN Global Tech",
  description:
    "This Privacy Policy explains how SVaaN Global Tech Pvt. Ltd. collects, uses, and handles personal information when you visit our website or interact with us.",
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
