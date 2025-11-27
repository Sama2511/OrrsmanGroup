import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import localFont from "next/font/local";

const outfit = localFont({
  src: [
    {
      path: "./fonts/OTF/Outfit-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/OTF/Outfit-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/OTF/Outfit-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/OTF/Outfit-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-outfit",
  display: "swap",
});

const switzer = localFont({
  src: [
    {
      path: "./fonts/OTF/Switzer-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/OTF/Switzer-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-switzer",
  display: "swap",
});

const baseUrl = process.env.BASE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Orrsman Group | International Logistics & Freight Solutions",
    template: "%s | Orrsman Express Group",
  },
  description:
    "Orrsman Group International Logistics provides comprehensive freight forwarding, customs clearance, and logistics solutions connecting Australian businesses to global markets. Over 15 years of experience in international trade.",
  keywords: [
    "international logistics",
    "freight forwarding",
    "customs clearance",
    "air freight",
    "sea freight",
    "import export",
    "logistics Australia",
    "Sydney logistics",
    "global shipping",
    "supply chain management",
  ],
  authors: [{ name: "Orrsman Express Group" }],
  creator: "Orrsman Express Group",
  publisher: "Orrsman Express Group",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: baseUrl,
    siteName: "Orrsman Express Group",
    title:
      "Orrsman Express Group | International Logistics & Freight Solutions",
    description:
      "Leading Australian logistics provider connecting businesses to global markets. Expert freight forwarding, customs clearance, and international trade solutions.",
    images: [
      {
        url: "/FullLogo.png",
        width: 1200,
        height: 630,
        alt: "Orrsman Express Group Logistics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Orrsman Express Group | International Logistics & Freight Solutions",
    description:
      "Leading Australian logistics provider connecting businesses to global markets. Expert freight forwarding, customs clearance, and international trade solutions.",
    images: ["/FullLogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${switzer.variable} ${outfit.variable}`}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
