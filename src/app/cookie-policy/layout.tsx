import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | SVaaN Global Tech",
  description:
    "SVaaN Global Tech uses cookies and similar technologies to help operate, improve, and understand how visitors use our website. This Cookie Policy explains what cookies are, why they may be used, and the choices available to you.",
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
