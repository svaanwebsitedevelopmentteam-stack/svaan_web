import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { FooterV2 } from "@/components/FooterV2";
import { CustomCursor } from "@/components/CustomCursor";
import { GlobalFloatActions } from "@/components/GlobalFloatActions";

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
    images: [
      {
        url: "/herosection.webp",
        width: 1200,
        height: 630,
        alt: "SVaaN Global Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SVaaN Global Tech - Technology & Strategy Partner",
    description: "SVaaN Global Tech connects strategy, design, and technology to help organizations solve complex challenges and build practical digital solutions.",
    images: ["/herosection.webp"],
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
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preload" as="image" href="/herosection.webp" type="image/webp" fetchPriority="high" />
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
