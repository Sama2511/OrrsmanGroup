import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";
import localFont from "next/font/local";
import StructuredData from "@/components/StructuredData";
import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
} from "@/lib/structuredData";

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
    default: "Orrsman Express Logistic | International Logistics & Freight Solutions",
    template: "%s | Orrsman Express Logistic",
  },
  description:
    "Orrsman Express Logistic delivers comprehensive freight forwarding, customs clearance, and logistics solutions connecting Australian businesses to global markets. Modern, efficient, and tailored international trade expertise.",
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
  authors: [{ name: "Orrsman Express Logistic" }],
  creator: "Orrsman Express Logistic",
  publisher: "Orrsman Express Logistic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: baseUrl,
    siteName: "Orrsman Express Logistic",
    title:
      "Orrsman Express Logistic | International Logistics & Freight Solutions",
    description:
      "Australian logistics provider connecting businesses to global markets. Expert freight forwarding, customs clearance, and international trade solutions tailored to your needs.",
    images: [
      {
        url: "/FullLogo.png",
        width: 1200,
        height: 630,
        alt: "Orrsman Express Logistic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Orrsman Express Logistic | International Logistics & Freight Solutions",
    description:
      "Australian logistics provider connecting businesses to global markets. Expert freight forwarding, customs clearance, and international trade solutions tailored to your needs.",
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
        <StructuredData data={organizationSchema} />
        <StructuredData data={localBusinessSchema} />
        <StructuredData data={websiteSchema} />
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
