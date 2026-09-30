import ContactForm from "./contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Ayush Sharma",
  description:
    "Get in touch with Ayush Sharma for Summer 2027 SDE internships, full stack web development, and AI engineering collaborations.",
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
