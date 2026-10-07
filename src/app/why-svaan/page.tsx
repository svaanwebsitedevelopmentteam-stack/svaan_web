import type { Metadata } from "next";
import WhySvaanContent from "./WhySvaanContent";

export const metadata: Metadata = {
    title: "Why SVaaN - A Technology Partner That Stays After Go-Live",
    description: "SVaaN stays accountable after launch. One partner to build, modernize, operate and improve your technology.",
};

export default function WhySvaanPage() {
    return <WhySvaanContent />;
}
