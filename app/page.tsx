import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ayush Sharma",
  description:
    "Discover Ayush Sharma's portfolio with AI automation services, business workflows, projects, skills, and collaboration opportunities.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const services = [
    {
      slug: "ai-chatbots",
      title: "AI Chatbots",
      description:
        "Custom AI chatbots for WhatsApp and websites that automatically handle customer enquiries, FAQs, and support requests.",
    },
    {
      slug: "lead-automation",
      title: "Lead Automation",
      description:
        "Automated lead collection and follow-up systems that help businesses respond faster and convert more customers.",
    },
    {
      slug: "ai-content-workflows",
      title: "AI Content Workflows",
      description:
        "AI-assisted content generation systems for creating social media posts, captions, ideas, and business content workflows.",
    },
  ];

  const skills = [
    "JavaScript",
    "Python",
    "React.js",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
    "Postman",
  ];

  const projects = [
    {
      slug: "boringtools",
      title: "BoringTools",
      summary:
        "A 100-day collection of simple micro-tools for everyday productivity, including text cleanup, JSON formatting, word counts, generators, converters, and utility workflows.",
      stack: "Next.js, Tailwind CSS, Vercel",
      links: {
        live: "https://boring-tools-nine.vercel.app/",
        code: null,
      },
    },
    {
      slug: "ai-resume-analyzer",
      title: "AI Resume Analyzer",
      summary:
        "Built and deployed an AI-powered resume analysis platform with PDF parsing, resume scoring, skill-gap analysis, and improvement suggestions.",
      stack: "React, Node.js, Tailwind CSS, REST APIs, LLM APIs",
      links: {
        live: "https://ai-resume-analyzer-orcin-rho.vercel.app/",
        code: "https://github.com/ius-sharma/ai-resume-analyzer",
      },
    },
    {
      slug: "ai-code-reviewer",
      title: "AI Code Reviewer",
      summary:
        "Developed a code review tool that analyzes code quality, finds bugs, and suggests logic improvements through real-time LLM feedback.",
      stack: "Node.js, JavaScript, LLM APIs",
      links: {
        live: null,
        code: "https://github.com/ius-sharma/ai-code-reviewer",
      },
    },
  ];

  const clientResults = [
    {
      title: "Coaching Institute Enquiry Automation",
      description:
        "Built an AI-powered enquiry assistant for a coaching institute that automatically answered admission-related questions and collected student lead information.",
      result:
        "Reduced repetitive enquiry handling and improved response speed for students.",
    },
    {
      title: "Furniture Store Lead Assistant",
      description:
        "Created a smart enquiry and follow-up system for a furniture business to help manage customer product questions and lead tracking.",
      result:
        "Improved customer communication and simplified lead management.",
    },
    {
      title: "Instagram DM Automation Workflow",
      description:
        "Designed an automated workflow system for handling Instagram customer enquiries and basic responses using AI.",
      result:
        "Helped reduce manual replying time and improved customer engagement.",
    },
  ];

  const contactOptions = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ayush-sharma-833163320/",
    },
    {
      label: "Email",
      href: "mailto:sharmaeditzayush@gmail.com?subject=Portfolio%20Inquiry",
    },
    {
      label: "WhatsApp",
      href: "/contact?subject=WhatsApp%20Inquiry",
    },
    {
      label: "GitHub",
      href: "https://github.com/ius-sharma",
    },
  ];

  return (
    <div className="relative">
      <header className="sticky top-0 z-20 border-b border-white/20 bg-[#0a0a0a]/70 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-8">
          <div>
            <p className="text-lg font-semibold tracking-wide">Ayush Sharma</p>
            <p className="mt-1 hidden text-xs text-[#f5f5f5]/75 md:block">
              Building AI systems, automations, and modern web experiences.
            </p>
          </div>
          <div className="hidden gap-6 text-sm md:flex">
            <a className="hover:text-[#facc15] transition" href="#about">
              About
            </a>
            <a className="hover:text-[#facc15] transition" href="#skills">
              Skills
            </a>
            <a className="hover:text-[#facc15] transition" href="#projects">
              Projects
            </a>
            <a className="hover:text-[#facc15] transition" href="#education">
              Education
            </a>
            <a className="hover:text-[#facc15] transition" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-20 pt-16 md:px-8">
        <section className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-7 animate-rise">
            <p className="text-sm uppercase tracking-[0.28em] text-[#facc15]">
              AI Automation Developer
            </p>
            <h1 className="font-title text-5xl leading-tight md:text-6xl">
              I Build AI Automations for Small Businesses
            </h1>
            <p className="max-w-xl text-lg text-[#f5f5f5]">
              I help businesses automate customer support, lead follow-ups, and
              repetitive workflows using AI-powered systems, chatbots, and
              custom automation tools.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-[#000000] transition hover:-translate-y-0.5 hover:bg-[#fde047]"
                href="/contact?subject=Book%20a%20Free%20Demo"
              >
                Book a Free Demo
              </a>
              <a
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold transition hover:border-[#facc15] hover:text-[#facc15]"
                href="#projects"
              >
                View My Work
              </a>
            </div>
          </div>

          <div className="animate-rise-delayed rounded-3xl border border-white/20 bg-white/8 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#facc15]">
              Quick Snapshot
            </p>
            <ul className="space-y-3 text-[#ffffff]">
              <li>Role: AI Automation Developer</li>
              <li>Focus: Chatbots, lead workflows, and AI systems</li>
              <li>Flagship Work: Business automation demos</li>
              <li>Open to: Business, internship, and full-time opportunities</li>
            </ul>
          </div>
        </section>

        <section id="about" className="space-y-7">
          <h2 className="font-title text-3xl">About</h2>
          <div className="max-w-3xl space-y-4 text-[#f5f5f5]">
            <p>
              I'm Ayush, a developer focused on building practical AI systems
              and automation tools for businesses.
            </p>
            <p>
              I create AI-powered chatbots, lead management workflows,
              automation systems, and productivity tools that help businesses
              save time, improve response speed, and reduce repetitive manual
              work.
            </p>
            <p>
              Alongside AI automation, I also build full-stack web applications
              using modern technologies like Next.js, MERN, and AI APIs.
            </p>
          </div>
        </section>

        <section id="services" className="space-y-7">
          <div className="space-y-2">
            <h2 className="font-title text-3xl">AI Automation Services</h2>
            <p className="max-w-2xl text-[#f5f5f5]">
              Solutions I build for businesses using AI and automation.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href={`/services/${service.slug}`}
                className="group rounded-2xl border border-white/20 bg-[#111111]/80 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-[#facc15]/60 hover:bg-[#151515]"
              >
                <h3 className="font-title text-2xl">{service.title}</h3>
                <p className="mt-3 text-sm text-[#f5f5f5]">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section id="skills" className="space-y-7">
          <h2 className="font-title text-3xl">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#facc15]/40 bg-[#1a1a1a]/80 px-4 py-2 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-7">
          <h2 className="font-title text-3xl">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group relative rounded-2xl border border-white/20 bg-[#111111]/80 p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-[#facc15]/50 hover:bg-[#151515]"
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="absolute inset-0 rounded-2xl"
                  aria-label={`Open details for ${project.title}`}
                />
                <h3 className="font-title text-2xl">{project.title}</h3>
                <p className="mt-3 text-sm text-[#f5f5f5]">{project.summary}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#facc15]">
                  {project.stack}
                </p>
                <div className="relative z-10 mt-5 flex gap-4 text-sm font-semibold">
                  <Link
                    className="text-white hover:underline"
                    href={`/projects/${project.slug}`}
                  >
                    Details
                  </Link>
                  {project.links.live && (
                    <a
                      className="text-[#facc15] hover:underline"
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Link
                    </a>
                  )}
                  {project.links.code && (
                    <a
                      className="text-[#facc15] hover:underline"
                      href={project.links.code}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="client-results" className="space-y-7">
          <div className="space-y-2">
            <h2 className="font-title text-3xl">Client Results</h2>
            <p className="max-w-2xl text-[#f5f5f5]">
              Examples of automation solutions built for business use cases.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {clientResults.map((caseStudy) => (
              <article
                key={caseStudy.title}
                className="rounded-2xl border border-white/20 bg-[#111111]/80 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-[#facc15]/60 hover:bg-[#151515]"
              >
                <h3 className="font-title text-2xl">{caseStudy.title}</h3>
                <p className="mt-3 text-sm text-[#f5f5f5]">
                  {caseStudy.description}
                </p>
                <p className="mt-4 text-sm text-[#facc15]">
                  {caseStudy.result}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="space-y-7">
          <h2 className="font-title text-3xl">Education</h2>
          <article className="rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
            <p className="text-sm uppercase tracking-[0.16em] text-[#facc15]">
              2024 - Present
            </p>
            <h3 className="mt-2 font-title text-2xl">
              B.Tech in Computer Engineering
            </h3>
            <p className="mt-2 text-[#f5f5f5]">Marwadi University</p>
          </article>
        </section>

        <section className="rounded-3xl border border-white/20 bg-[#111111]/80 p-8">
          <h2 className="font-title text-3xl">Want to automate your business using AI?</h2>
          <p className="mt-4 max-w-2xl text-[#f5f5f5]">
            I can create a free mini-demo tailored to your business workflow
            within 24 hours.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              className="rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-[#000000] transition hover:-translate-y-0.5 hover:bg-[#fde047]"
              href="/contact?subject=Book%20a%20Free%20Demo"
            >
              Get Free Demo
            </a>
          </div>
        </section>

        <section id="contact" className="space-y-6 rounded-3xl border border-white/20 bg-[#0f0f0f]/85 p-8">
          <h2 className="font-title text-3xl">Let us work together</h2>
          <p className="max-w-2xl text-[#f5f5f5]">
            If you have a project, internship, or full-time opportunity, reach
            out and I will get back to you quickly.
          </p>
          <p className="text-sm text-[#facc15]">Usually responds within a few hours.</p>
          <div className="flex flex-wrap gap-4 text-sm">
            {contactOptions.map((option) => (
              <a
                key={option.label}
                className="rounded-full border border-white/30 px-5 py-2 font-semibold transition hover:border-[#facc15] hover:text-[#facc15]"
                href={option.href}
                target={option.href.startsWith("http") ? "_blank" : undefined}
                rel={option.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {option.label}
              </a>
            ))}
          </div>
        </section>

        <footer className="pb-2 pt-6 text-center text-xs text-[#f5f5f5]/70">
          Building AI systems, automations, and modern web experiences.
        </footer>
      </main>
    </div>
  );
}
