import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ayush Sharma",
  description:
    "Discover Ayush Sharma's portfolio with MERN stack and AI-powered projects, skills, education, and collaboration opportunities.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
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

  return (
    <div className="relative">
      <header className="sticky top-0 z-20 border-b border-white/20 bg-[#0a0a0a]/70 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-8">
          <p className="text-lg font-semibold tracking-wide">Ayush Sharma</p>
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
              Aspiring Full Stack Developer
            </p>
            <h1 className="font-title text-5xl leading-tight md:text-6xl">
              I build practical web apps with MERN and AI integrations.
            </h1>
            <p className="max-w-xl text-lg text-[#f5f5f5]">
              I develop scalable, problem-solving applications with modern web
              technologies. My work focuses on turning real-world workflows
              into fast, user-friendly products that create measurable value.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="rounded-full bg-[#facc15] px-6 py-3 text-sm font-semibold text-[#000000] transition hover:-translate-y-0.5 hover:bg-[#fde047]"
                href="#projects"
              >
                View Projects
              </a>
              <a
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold transition hover:border-[#facc15] hover:text-[#facc15]"
                href="/contact?subject=Portfolio%20Inquiry"
              >
                Contact Me
              </a>
              <a
                className="rounded-full border border-[#facc15]/60 px-6 py-3 text-sm font-semibold text-[#facc15] transition hover:bg-[#facc15] hover:text-[#000000]"
                href="/RESUME_V2.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="animate-rise-delayed rounded-3xl border border-white/20 bg-white/8 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#facc15]">
              Quick Snapshot
            </p>
            <ul className="space-y-3 text-[#ffffff]">
              <li>Role: Aspiring Full Stack Developer</li>
              <li>Specialization: MERN stack + AI integration</li>
              <li>Flagship Work: AI Resume Analyzer</li>
              <li>Open to: Internship and full-time opportunities</li>
            </ul>
          </div>
        </section>

        <section id="about" className="space-y-7">
          <h2 className="font-title text-3xl">About</h2>
          <p className="max-w-3xl text-[#f5f5f5]">
            I am a Computer Engineering student at Marwadi University and an
            aspiring full stack developer. I enjoy building AI-enabled web
            products that solve practical problems. I focus on clean user
            experience, responsive design, and APIs that deliver reliable
            real-time results.
          </p>
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
                className="group relative rounded-2xl border border-white/20 bg-[#111111]/80 p-5 shadow-lg transition hover:-translate-y-1"
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
                  <a
                    className="text-[#facc15] hover:underline"
                    href={project.links.code}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
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

        <section id="contact" className="space-y-6 rounded-3xl border border-white/20 bg-[#0f0f0f]/85 p-8">
          <h2 className="font-title text-3xl">Let us work together</h2>
          <p className="max-w-2xl text-[#f5f5f5]">
            If you have a project, internship, or full-time opportunity, reach
            out and I will get back to you quickly.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              className="rounded-full bg-[#facc15] px-5 py-2 font-semibold text-[#000000]"
              href="/contact?subject=Portfolio%20Inquiry"
            >
              sharmaeditzayush@gmail.com
            </a>
            <a
              className="rounded-full border border-white/30 px-5 py-2 font-semibold"
              href="https://www.linkedin.com/in/ayush-sharma-833163320/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="rounded-full border border-white/30 px-5 py-2 font-semibold"
              href="https://github.com/ius-sharma"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="rounded-full border border-white/30 px-5 py-2 font-semibold"
              href="https://leetcode.com/u/iussharma/"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode
            </a>
            <a
              className="rounded-full border border-white/30 px-5 py-2 font-semibold"
              href="https://www.instagram.com/ius.sharma"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              className="rounded-full border border-white/30 px-5 py-2 font-semibold"
              href="/contact?subject=Request%20Phone%20Number"
            >
              Request Phone Number
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
