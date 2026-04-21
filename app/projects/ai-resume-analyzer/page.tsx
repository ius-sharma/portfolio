import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Resume Analyzer Project",
  description:
    "Case study of AI Resume Analyzer: PDF parsing, resume scoring, skill-gap analysis, and AI-powered improvement suggestions.",
  alternates: {
    canonical: "/projects/ai-resume-analyzer",
  },
};

export default function AiResumeAnalyzerPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 pb-20 pt-14 md:px-8">
      <Link className="text-sm text-[#facc15] hover:underline" href="/">
        Back to Home
      </Link>

      <section className="mt-5 rounded-3xl border border-white/20 bg-[#111111]/85 p-7 md:p-9">
        <p className="text-xs uppercase tracking-[0.2em] text-[#facc15]">
          Case Study
        </p>
        <h1 className="mt-3 font-title text-4xl md:text-5xl">
          AI Resume Analyzer
        </h1>
        <p className="mt-4 max-w-3xl text-[#f5f5f5]">
          An AI-powered web application that analyzes uploaded resumes and
          returns structured, actionable feedback in seconds. The app scores
          resumes, detects missing skills, and suggests improvements so users
          can optimize their profile faster.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            className="rounded-full bg-[#facc15] px-5 py-2 text-sm font-semibold text-[#000000]"
            href="https://github.com/ius-sharma/ai-resume-analyzer"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub Repo
          </a>
          <a
            className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold"
            href="https://ai-resume-analyzer-orcin-rho.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Open Live Project
          </a>
          <a
            className="rounded-full border border-[#facc15]/60 px-5 py-2 text-sm font-semibold text-[#facc15]"
            href="/contact?subject=Project%20Discussion%20-%20AI%20Resume%20Analyzer"
          >
            Discuss This Project
          </a>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
          <h2 className="font-title text-2xl">Problem</h2>
          <p className="mt-3 text-sm text-[#f5f5f5]">
            Many job seekers struggle to understand why their resume is not
            shortlisted. Manual feedback is slow and often generic.
          </p>
        </article>

        <article className="rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
          <h2 className="font-title text-2xl">Solution</h2>
          <p className="mt-3 text-sm text-[#f5f5f5]">
            Built a full-stack resume analyzer that accepts PDF uploads,
            processes content, and uses LLM APIs to generate resume score,
            missing skills, and practical suggestions instantly.
          </p>
        </article>
      </section>

      <section className="mt-10 rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
        <h2 className="font-title text-2xl">Core Features</h2>
        <ul className="mt-4 grid gap-3 text-sm text-[#f5f5f5] md:grid-cols-2">
          <li>PDF resume upload and parsing</li>
          <li>AI-powered resume analysis</li>
          <li>Resume score out of 100</li>
          <li>Missing skills detection</li>
          <li>Improvement suggestions</li>
          <li>Responsive modern UI</li>
        </ul>
      </section>

      <section className="mt-10 rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
        <h2 className="font-title text-2xl">Tech Stack</h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          {[
            "React",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "Groq LLaMA 3",
            "pdf-parse",
            "Vercel",
            "Render",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#facc15]/40 bg-[#1a1a1a]/80 px-4 py-2"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="font-title text-2xl">Screenshots</h2>
        <div className="grid gap-5 md:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-white/20 bg-[#111111]/80">
            <Image
              src="/projects/ai-resume-analyzer/cover+home.png"
              alt="AI Resume Analyzer home screen"
              width={1400}
              height={900}
              className="h-auto w-full"
            />
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-white/20 bg-[#111111]/80">
            <Image
              src="/projects/ai-resume-analyzer/upload.png"
              alt="AI Resume Analyzer upload flow"
              width={1400}
              height={900}
              className="h-auto w-full"
            />
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-white/20 bg-[#111111]/80 md:col-span-2">
            <Image
              src="/projects/ai-resume-analyzer/result.png"
              alt="AI Resume Analyzer output and result view"
              width={1600}
              height={900}
              className="h-auto w-full"
            />
          </figure>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
        <h2 className="font-title text-2xl">Future Improvements</h2>
        <ul className="mt-4 space-y-2 text-sm text-[#f5f5f5]">
          <li>User authentication and profile dashboard</li>
          <li>Resume history with version comparison</li>
          <li>More explainable and granular AI scoring</li>
          <li>Enhanced drag-and-drop upload experience</li>
        </ul>
      </section>
    </main>
  );
}
