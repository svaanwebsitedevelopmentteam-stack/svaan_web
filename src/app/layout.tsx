import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { GlobalFloatActions } from "@/components/GlobalFloatActions";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SVaaN Global Tech — Technology & Strategy Partner",
    template: "%s | SVaaN Global Tech",
  },
  description:
    "SVaaN Global Tech connects strategy, design, and technology to help organizations solve complex challenges and build practical digital solutions.",
  metadataBase: new URL("https://svaan-web.vercel.app"),
  openGraph: {
    title: "SVaaN Global Tech — Technology & Strategy Partner",
    description: "SVaaN Global Tech connects strategy, design, and technology to help organizations solve complex challenges and build practical digital solutions.",
    url: "https://svaan-web.vercel.app",
    siteName: "SVaaN Global Tech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/herosection.png",
        width: 1200,
        height: 630,
        alt: "SVaaN Global Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SVaaN Global Tech — Technology & Strategy Partner",
    description: "SVaaN Global Tech connects strategy, design, and technology to help organizations solve complex challenges and build practical digital solutions.",
    images: ["/herosection.png"],
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
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider>
          <CustomCursor />
          <Header />
          {children}
          <Footer />
          <GlobalFloatActions />
        </ThemeProvider>
      </body>
    </html>
  );
}
