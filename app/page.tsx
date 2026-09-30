import Link from "next/link";
import type { Metadata } from "next";
import { skillCategories } from "@/lib/content/skills";
import { projects } from "@/lib/content/projects";
import { achievements } from "@/lib/content/achievements";
import { coursework } from "@/lib/content/education";
import { profile, contactOptions } from "@/lib/content/profile";

export const metadata: Metadata = {
  title: "Ayush Sharma | Full Stack Developer & AI Builder",
  description:
    "Discover Ayush Sharma's portfolio: Full Stack Developer, creator of BoringTools (101 micro-tools), AI integration builder, and B.Tech CSE student at Marwadi University.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="relative">
      <header className="sticky top-0 z-20 border-b border-white/20 bg-[#0a0a0a]/70 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-8">
          <div>
            <Link href="/" className="text-lg font-semibold tracking-wide hover:text-[#facc15] transition">
              Ayush Sharma
            </Link>
            <p className="mt-1 hidden text-xs text-[#f5f5f5]/75 md:block">
              Full Stack Developer & AI Builder | Creator of BoringTools
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
            <a className="hover:text-[#facc15] transition" href="#achievements">
              Achievements
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
        {/* HERO SECTION */}
        <section className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-7 animate-rise">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#facc15]/30 bg-[#facc15]/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[#facc15]">
              <span className="h-2 w-2 rounded-full bg-[#facc15] animate-pulse"></span>
              Full Stack Developer & AI Builder
            </div>
            <h1 className="font-title text-4xl leading-tight md:text-5xl lg:text-6xl">
              Building Web Apps & AI Tools
            </h1>
            <p className="max-w-xl text-lg text-[#f5f5f5]">
              Hi, I&apos;m Ayush Sharma from Bihar, India. Computer Engineering student at Marwadi University. I specialize in Next.js, React, TypeScript, Python, FastAPI, and browser-based tools with WebAssembly and API-powered AI integrations with Groq.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-[#000000] transition hover:-translate-y-0.5 hover:bg-[#fde047]"
                href="#projects"
              >
                Explore Projects
              </a>
              <a
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold transition hover:border-[#facc15] hover:text-[#facc15]"
                href="/contact?subject=SDE%20Internship%20/%20Project%20Inquiry"
              >
                Get In Touch
              </a>
              <a
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold transition hover:border-[#facc15] hover:text-[#facc15]"
                href={profile.resume.href}
                download={profile.resume.filename}
              >
                Download Resume
              </a>
              <a
                className="rounded-full border border-[#facc15]/60 px-6 py-3 text-sm font-semibold text-[#facc15] transition hover:bg-[#facc15]/10"
                href="https://boringtoolsai.com"
                target="_blank"
                rel="noreferrer"
              >
                BoringTools (101 Tools) ↗
              </a>
            </div>
          </div>

          <div className="animate-rise-delayed rounded-3xl border border-white/20 bg-white/8 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#facc15]">
              Quick Snapshot
            </p>
            <ul className="space-y-3.5 text-[#ffffff] text-sm">
              <li>
                <span className="text-[#facc15] font-semibold">Role:</span> Full Stack Developer & AI Solutions Builder
              </li>
              <li>
                <span className="text-[#facc15] font-semibold">Education:</span> B.Tech in Computer Engineering, Marwadi University (2024–2028)
              </li>
              <li>
                <span className="text-[#facc15] font-semibold">Flagship Work:</span> BoringTools (101 browser tools built in 100 days)
              </li>
              <li>
                <span className="text-[#facc15] font-semibold">Core Stack:</span> Next.js, React, TypeScript, Python, FastAPI, Node.js, WASM
              </li>
              <li>
                <span className="text-[#facc15] font-semibold">Availability:</span> {profile.availability}
              </li>
            </ul>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="space-y-7">
          <h2 className="font-title text-3xl">About</h2>
          <div className="max-w-3xl space-y-4 text-[#f5f5f5] text-base leading-relaxed">
            <p>
              I&apos;m Ayush, a Computer Engineering undergraduate at Marwadi University (Current CGPA: 6.97/10) with a strong foundation in core computer science fundamentals including Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, and Computer Networks.
            </p>
            <p>
              I have a passion for building practical, privacy-first software and high-utility developer tools. In a recent 100-Day Challenge, I independently shipped <strong>101 browser-based utilities</strong> (BoringTools) with 295+ GitHub commits, combining browser-based processing for core utilities with API-powered AI features.
            </p>
            <p>
              My development expertise spans modern full-stack architectures (Next.js, React, FastAPI, Node.js, Express, MongoDB, Supabase) along with browser-based AI using ONNX Runtime, Web Workers, and WebAssembly (WASM), and API-powered features using Groq.
            </p>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="space-y-8">
          <div className="space-y-2">
            <h2 className="font-title text-3xl">Technical Skills</h2>
            <p className="max-w-2xl text-[#f5f5f5] text-sm">
              Technologies, languages, frameworks, and tools I use to build scalable products.
            </p>
          </div>
          <div className="space-y-6">
            {skillCategories.map((group) => (
              <div key={group.category} className="space-y-3">
                <h3 className="text-xs uppercase tracking-[0.2em] text-[#facc15]">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#facc15]/40 bg-[#1a1a1a]/80 px-4 py-2 text-sm text-[#ffffff] transition hover:border-[#facc15] hover:bg-[#222222]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-7">
          <div className="space-y-2">
            <h2 className="font-title text-3xl">Featured Projects</h2>
            <p className="max-w-2xl text-[#f5f5f5] text-sm">
              Real-world full-stack web applications, micro-tools, and AI systems I&apos;ve built.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group relative rounded-2xl border border-white/20 bg-[#111111]/80 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-[#facc15]/50 hover:bg-[#151515] flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-title text-2xl">{project.title}</h3>
                    {project.badge && (
                      <span className="rounded-full bg-[#facc15]/15 border border-[#facc15]/40 px-3 py-1 text-xs text-[#facc15]">
                        {project.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-[#f5f5f5] leading-relaxed">
                    {project.summary}
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[#facc15]">
                    {project.stack.join(", ")}
                  </p>
                </div>

                <div className="relative z-10 mt-6 flex flex-wrap items-center gap-4 text-sm font-semibold pt-2 border-t border-white/10">
                  {project.links.internal && (
                    <Link
                      className="text-white hover:text-[#facc15] transition"
                      href={project.links.internal}
                    >
                      Case Study →
                    </Link>
                  )}
                  {project.links.live && (
                    <a
                      className="text-[#facc15] hover:underline"
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  )}
                  {project.links.code && (
                    <a
                      className="text-[#facc15] hover:underline"
                      href={project.links.code}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.links.backend ? "Frontend Repo" : "GitHub Repo"}
                    </a>
                  )}
                  {project.links.backend && (
                    <a className="text-[#facc15] hover:underline" href={project.links.backend} target="_blank" rel="noreferrer">
                      Backend Repo
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS & LEADERSHIP SECTION */}
        <section id="achievements" className="space-y-7">
          <div className="space-y-2">
            <h2 className="font-title text-3xl">Achievements & Leadership</h2>
            <p className="max-w-2xl text-[#f5f5f5] text-sm">
              Hackathons, building milestones, and community leadership experience.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {achievements.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/20 bg-[#111111]/80 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-[#facc15]/60 hover:bg-[#151515]"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-[#facc15]/15 border border-[#facc15]/30 px-3 py-1 text-xs text-[#facc15]">
                    {item.badge}
                  </span>
                </div>
                <h3 className="mt-3 font-title text-xl">{item.title}</h3>
                <p className="mt-1 text-xs text-[#facc15]">{item.subtitle}</p>
                <p className="mt-3 text-sm text-[#f5f5f5] leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS SECTION */}
        <section id="education" className="space-y-7">
          <h2 className="font-title text-3xl">Education & Training</h2>
          <div className="space-y-6">
            <article className="rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm uppercase tracking-[0.16em] text-[#facc15]">
                  2024 – 2028 (Expected)
                </p>
                <span className="text-xs rounded-full bg-white/10 px-3 py-1 text-[#f5f5f5]">
                  Current CGPA: {profile.education.cgpa}
                </span>
              </div>
              <h3 className="mt-2 font-title text-2xl">
                {profile.education.degree}
              </h3>
              <p className="mt-1 text-[#f5f5f5] font-medium">Marwadi University, Rajkot, Gujarat</p>
              <div className="mt-4">
                <p className="text-xs uppercase tracking-[0.18em] text-[#facc15] mb-2">
                  Relevant Coursework:
                </p>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-md border border-white/15 bg-black/40 px-2.5 py-1 text-xs text-[#f5f5f5]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-[#facc15]">
                  2024
                </p>
                <h3 className="mt-2 font-title text-lg">
                  Class XII, CBSE Board (58%)
                </h3>
                <p className="mt-1 text-sm text-[#f5f5f5]">
                  {profile.education.classXII}
                </p>
              </article>

              <article className="rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-[#facc15]">
                  2022
                </p>
                <h3 className="mt-2 font-title text-lg">
                  Class X, CBSE Board (71%)
                </h3>
                <p className="mt-1 text-sm text-[#f5f5f5]">
                  Santoba International School
                </p>
              </article>
            </div>

            <article className="rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
              <h3 className="font-title text-xl mb-3">Certifications & Training</h3>
              <ul className="space-y-3 text-sm text-[#f5f5f5]">
                <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-white/10 pb-2">
                  <span><strong>Problem Solving for Success</strong> – Wingspan (Analytical & algorithmic thinking)</span>
                  <span className="text-xs text-[#facc15]">March 2026</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-1">
                  <span><strong>Design Thinking: Unlock Innovation and User-Centricity</strong> (Human-centered design)</span>
                  <span className="text-xs text-[#facc15]">2026</span>
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* ADDITIONAL INFO & AVAILABILITY */}
        <section className="rounded-3xl border border-white/20 bg-[#111111]/80 p-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#facc15]">
                Availability
              </p>
              <h3 className="mt-2 font-title text-xl">Seeking SDE Internships</h3>
              <p className="mt-2 text-sm text-[#f5f5f5]">
                Actively seeking Software Engineering internship opportunities for Summer 2027.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#facc15]">
                Languages
              </p>
              <h3 className="mt-2 font-title text-xl">Multilingual</h3>
              <p className="mt-2 text-sm text-[#f5f5f5]">
                Hindi (Native), English (Professional Proficiency), Spanish (Beginner).
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#facc15]">
                Interests
              </p>
              <h3 className="mt-2 font-title text-xl">Passions & Activities</h3>
              <p className="mt-2 text-sm text-[#f5f5f5]">
                Competitive eSports, Building Developer Tools, Football, Open Source Contributions.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 pt-4 border-t border-white/15">
            <a
              className="rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-[#000000] transition hover:-translate-y-0.5 hover:bg-[#fde047]"
              href="/contact?subject=Summer%202027%20SDE%20Internship%20Opportunity"
            >
              Discuss Opportunities
            </a>
            <a
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold transition hover:border-[#facc15] hover:text-[#facc15]"
              href="mailto:sharmaeditzayush@gmail.com"
            >
              sharmaeditzayush@gmail.com
            </a>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="space-y-6 rounded-3xl border border-white/20 bg-[#0f0f0f]/85 p-8">
          <h2 className="font-title text-3xl">Let&apos;s Connect & Work Together</h2>
          <p className="max-w-2xl text-[#f5f5f5]">
            Based in Bihar, India. Whether you have an internship opportunity, full stack project, or want to collaborate on developer tools, feel free to reach out.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="text-[#facc15] font-medium">📍 Bihar, India</span>
            <span className="text-white/40">•</span>
            <span className="text-[#facc15] font-medium">📞 +91 6205882057</span>
            <span className="text-white/40">•</span>
            <span className="text-[#facc15] font-medium">⚡ Fast response time</span>
          </div>
          <div className="flex flex-wrap gap-4 text-sm pt-2">
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
            <Link
              href="/contact"
              className="rounded-full bg-[#facc15] px-5 py-2 font-semibold text-black transition hover:bg-[#fde047]"
            >
              Direct Message Form →
            </Link>
          </div>
        </section>

        <footer className="pb-2 pt-6 text-center text-xs text-[#f5f5f5]/70">
          © {new Date().getFullYear()} Ayush Sharma • Built with Next.js & Tailwind CSS
        </footer>
      </main>
    </div>
  );
}
