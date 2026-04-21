import type { Metadata } from "next";
import { Geist_Mono, Manrope, Syne } from "next/font/google";
import { siteName, siteUrl } from "./seo-config";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Ayush Sharma | Full Stack Developer",
    template: "%s | Ayush Sharma",
  },
  description:
    "Portfolio of Ayush Sharma, aspiring full stack developer focused on MERN and AI-powered web applications.",
  applicationName: siteName,
  keywords: [
    "Ayush Sharma",
    "Full Stack Developer",
    "MERN Developer",
    "AI Projects",
    "Portfolio",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title: "Ayush Sharma | Full Stack Developer",
    description:
      "Explore Ayush Sharma's portfolio featuring MERN and AI-integrated web applications, projects, and contact details.",
    siteName,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ayush Sharma portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Sharma | Full Stack Developer",
    description:
      "Explore Ayush Sharma's portfolio featuring MERN and AI-integrated web applications.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "/",
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
      className={`${manrope.variable} ${syne.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
