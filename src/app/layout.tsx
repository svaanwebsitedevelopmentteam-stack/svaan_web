import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { FooterV2 } from "@/components/FooterV2";
import { GlobalFloatActions } from "@/components/GlobalFloatActions";
import { CustomCursor } from "@/components/CustomCursor";
import { sharedOpenGraphImage } from "./shared-metadata";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
  adjustFontFallback: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: {
    default: "SVaaN Global Tech - Technology & Strategy Partner",
    template: "%s | SVaaN Global Tech",
  },
  description:
    "SVaaN Global Tech connects strategy, design, and technology to help organizations solve complex challenges and build practical digital solutions.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://svaantech.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SVaaN Global Tech - Technology & Strategy Partner",
    description: "SVaaN Global Tech connects strategy, design, and technology to help organizations solve complex challenges and build practical digital solutions.",
    url: "https://svaantech.com",
    siteName: "SVaaN Global Tech",
    locale: "en_US",
    type: "website",
    ...sharedOpenGraphImage,
  },
  twitter: {
    card: "summary_large_image",
    title: "SVaaN Global Tech - Technology & Strategy Partner",
    description: "SVaaN Global Tech connects strategy, design, and technology to help organizations solve complex challenges and build practical digital solutions.",
    images: ["/Primary_logo.svg"],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <head>
        <link rel="preload" as="image" href="/hero-mobile.avif" type="image/avif" media="(max-width: 640px)" fetchPriority="high" />
        <link rel="preload" as="image" href="/hero-section.webp" type="image/webp" media="(min-width: 641px)" fetchPriority="high" />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider>
          <CustomCursor />
          <Header />
          {children}
          <FooterV2 />
          <GlobalFloatActions />
        </ThemeProvider>
      </body>
    </html>
  );
}
