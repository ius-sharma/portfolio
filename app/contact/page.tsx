import ContactForm from "./contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ayush Sharma for internships, projects, and full-time opportunities through the direct contact form.",
  alternates: {
    canonical: "/contact",
  },
};

type ContactPageProps = {
  searchParams: Promise<{ subject?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const initialSubject = params.subject || "Portfolio Inquiry";

  return (
    <ContactForm initialSubject={initialSubject} />
  );
}
