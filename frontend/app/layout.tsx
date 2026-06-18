import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apnahaina.com"),
  title: {
    default:
      "ApnaHaiNa | AI Development Company, Cyber Security Company & Web Development Agency in Gurgaon, India",
    template: "%s | ApnaHaiNa",
  },
  description:
    "ApnaHaiNa is a premium AI Development Company, Cyber Security Company and Web Development Agency in Gurgaon, India delivering secure digital products, AI-powered solutions and modern business platforms.",
  keywords: [
    "AI Development Company",
    "Cyber Security Company",
    "Web Development Agency",
    "Gurgaon",
    "India",
    "AI Powered Solutions",
    "Secure Development",
    "Next.js Agency",
  ],
  openGraph: {
    title:
      "ApnaHaiNa | AI Development Company, Cyber Security Company & Web Development Agency in Gurgaon, India",
    description:
      "Secure digital products, AI-powered solutions and premium web experiences for modern businesses in Gurgaon and across India.",
    url: "https://apnahaina.com",
    siteName: "ApnaHaiNa",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/portfolio/academic-tracker-live.png",
        width: 1440,
        height: 1024,
        alt: "ApnaHaiNa project preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ApnaHaiNa | AI Development Company, Cyber Security Company & Web Development Agency in Gurgaon, India",
    description:
      "Premium AI, cyber security and web development services for modern businesses.",
    images: ["/images/portfolio/academic-tracker-live.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
