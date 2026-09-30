import type { Metadata } from "next";
import { Geist_Mono, Manrope, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
    default: "Ayush Sharma | Full Stack Developer & AI Builder",
    template: "%s | Ayush Sharma",
  },
  description:
    "Portfolio of Ayush Sharma: Full Stack Developer & AI Builder. Creator of BoringTools (101 web utilities). Skilled in Next.js, React, TypeScript, Python, FastAPI, Node.js, and WebAssembly.",
  applicationName: siteName,
  keywords: [
    "Ayush Sharma",
    "Full Stack Developer",
    "Software Engineer",
    "SDE Intern",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "FastAPI",
    "Node.js",
    "WebAssembly",
    "Groq API",
    "BoringTools",
    "Marwadi University",
    "AI Integration",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title: "Ayush Sharma | Full Stack Developer & AI Builder",
    description:
      "Explore Ayush Sharma's portfolio featuring BoringTools, AI systems, full stack web apps, case studies, and engineering projects.",
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
    title: "Ayush Sharma | Full Stack Developer & AI Builder",
    description:
      "Explore Ayush Sharma's portfolio featuring BoringTools, AI systems, full stack web apps, and case studies.",
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
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
