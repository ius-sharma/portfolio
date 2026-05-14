import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type ServiceSlug = "ai-chatbots" | "lead-automation" | "ai-content-workflows";

type ServicePageData = {
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  deliverables: string[];
  process: string[];
};

const serviceData: Record<ServiceSlug, ServicePageData> = {
  "ai-chatbots": {
    title: "AI Chatbots",
    subtitle: "Customer support and FAQ automation for websites and WhatsApp.",
    description:
      "Custom AI chatbots that handle customer enquiries, answer FAQs, qualify leads, and reduce repetitive support work for small businesses.",
    outcomes: [
      "Faster customer response time",
      "Less manual support work",
      "Better lead capture from enquiries",
    ],
    deliverables: [
      "Website chatbot integration",
      "WhatsApp-style conversational flow",
      "FAQ and support response logic",
      "Lead capture and handoff setup",
    ],
    process: [
      "Understand your business questions and support flow",
      "Design the chatbot conversation structure",
      "Build the AI automation and connect it to your site",
      "Test, refine, and deploy the final experience",
    ],
  },
  "lead-automation": {
    title: "Lead Automation",
    subtitle: "Automated follow-up systems that help you convert more leads.",
    description:
      "Lead automation workflows that collect enquiries, route them correctly, and send timely follow-ups so businesses can respond faster and close more customers.",
    outcomes: [
      "More consistent follow-up",
      "Cleaner lead tracking",
      "Reduced manual sales workload",
    ],
    deliverables: [
      "Lead capture forms and routing",
      "Automated follow-up sequences",
      "CRM or spreadsheet handoff",
      "Notification and reminder setup",
    ],
    process: [
      "Map the current lead handling process",
      "Identify automation opportunities",
      "Build the workflow and lead routing logic",
      "Validate the system with real enquiry examples",
    ],
  },
  "ai-content-workflows": {
    title: "AI Content Workflows",
    subtitle: "Content generation systems for social media and business marketing.",
    description:
      "AI-assisted content workflows that help create social posts, captions, ideas, and reusable business content faster with less repetitive effort.",
    outcomes: [
      "Faster content production",
      "Less repetitive writing work",
      "More consistent content output",
    ],
    deliverables: [
      "Content idea generation workflow",
      "Caption and post drafting system",
      "Approval and revision flow",
      "Reusable templates for business content",
    ],
    process: [
      "Review your content goals and audience",
      "Set up the content workflow structure",
      "Connect AI prompts and output templates",
      "Test the flow with sample business content",
    ],
  },
};

function getServiceData(slug: string) {
  return serviceData[slug as ServiceSlug] || null;
}

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceData(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceData(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-6 pb-20 pt-14 md:px-8">
      <Link className="text-sm text-[#facc15] hover:underline" href="/">
        Back to Home
      </Link>

      <section className="mt-5 rounded-3xl border border-white/20 bg-[#111111]/85 p-7 md:p-9">
        <p className="text-xs uppercase tracking-[0.2em] text-[#facc15]">
          AI Automation Service
        </p>
        <h1 className="mt-3 font-title text-4xl md:text-5xl">{service.title}</h1>
        <p className="mt-3 max-w-3xl text-lg text-[#facc15]">{service.subtitle}</p>
        <p className="mt-4 max-w-3xl text-[#f5f5f5]">{service.description}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            className="rounded-full bg-[#facc15] px-5 py-2 text-sm font-semibold text-[#000000] transition hover:bg-[#fde047]"
            href="/contact?subject=Free%20Demo%20Request"
          >
            Book a Free Demo
          </a>
          <a
            className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold transition hover:border-[#facc15] hover:text-[#facc15]"
            href="/contact?subject=Service%20Discussion"
          >
            Discuss This Service
          </a>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {service.outcomes.map((item) => (
          <article
            key={item}
            className="rounded-2xl border border-white/20 bg-[#111111]/80 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-[#facc15]/60 hover:bg-[#151515]"
          >
            <p className="text-sm text-[#f5f5f5]">{item}</p>
          </article>
        ))}
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
          <h2 className="font-title text-2xl">What I Can Build</h2>
          <ul className="mt-4 space-y-2 text-sm text-[#f5f5f5]">
            {service.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
          <h2 className="font-title text-2xl">How I Work</h2>
          <ol className="mt-4 space-y-2 text-sm text-[#f5f5f5]">
            {service.process.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </article>
      </section>

      <section className="mt-10 rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
        <h2 className="font-title text-2xl">Best For</h2>
        <p className="mt-3 text-sm text-[#f5f5f5]">
          Small businesses, service providers, coaching institutes, shops, and
          creators who want to automate recurring customer or content workflows.
        </p>
      </section>

      <section className="mt-10 rounded-3xl border border-white/20 bg-[#0f0f0f]/85 p-8">
        <h2 className="font-title text-3xl">Want to automate this workflow?</h2>
        <p className="mt-4 max-w-2xl text-[#f5f5f5]">
          I can create a free mini-demo tailored to your business workflow
          within 24 hours.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            className="rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-[#000000] transition hover:bg-[#fde047]"
            href="/contact?subject=Free%20Demo%20Request"
          >
            Get Free Demo
          </a>
        </div>
      </section>
    </main>
  );
}
