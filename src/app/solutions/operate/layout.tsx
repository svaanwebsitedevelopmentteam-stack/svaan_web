import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operate, Support & Maintain Live Software",
  description:
    "SVaaN provides dedicated 24/7 technical support, infrastructure maintenance, SLA-backed incident management, and DevOps operations for mission-critical systems.",
  openGraph: {
    title: "Operate, Support & Maintain Live Software | SVaaN Global Tech",
    description:
      "Keep critical technology running. SVaaN supports live applications, cloud infrastructure, and users with proactive monitoring and dedicated SLAs.",
  },
};

export default function OperateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
