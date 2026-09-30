type ServiceSlug = "ai-chatbots" | "lead-automation" | "ai-content-workflows";

type ServicePageData = {
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  deliverables: string[];
  process: string[];
};

export const serviceData: Record<ServiceSlug, ServicePageData> = {
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

export function getServiceData(slug: string) {
  return serviceData[slug as ServiceSlug] || null;
}

