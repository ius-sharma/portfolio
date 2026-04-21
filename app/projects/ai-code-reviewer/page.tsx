import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Code Reviewer Project",
  description:
    "Case study of AI Code Reviewer: real-time LLM-based code quality scoring, bug detection, explanations, and code improvement suggestions.",
  alternates: {
    canonical: "/projects/ai-code-reviewer",
  },
};

export default function AiCodeReviewerPage() {
  const features = [
    "Monaco Editor with syntax highlighting",
    "Language selection for JavaScript, TypeScript, Python, Java, C, and C++",
    "File upload for source code analysis",
    "AI code analysis with structured feedback",
    "Code quality score out of 100",
    "AI suggestions for bugs, performance, and best practices",
    "Plain-English explanation of submitted code",
    "AI suggested fixed code with one-click apply",
    "Collapsible sidebar and dark/light mode",
  ];

  const frontendStack = [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "Monaco Editor",
  ];

  const backendStack = ["Node.js", "Express", "Groq SDK (llama3-70b-8192)"];

  return (
    <main className="mx-auto w-full max-w-5xl px-6 pb-20 pt-14 md:px-8">
      <Link className="text-sm text-[#facc15] hover:underline" href="/">
        Back to Home
      </Link>

      <section className="mt-5 rounded-3xl border border-white/20 bg-[#111111]/85 p-7 md:p-9">
        <p className="text-xs uppercase tracking-[0.2em] text-[#facc15]">
          Case Study
        </p>
        <h1 className="mt-3 font-title text-4xl md:text-5xl">AI Code Reviewer</h1>
        <p className="mt-4 max-w-3xl text-[#f5f5f5]">
          An AI-powered developer assistant that analyzes source code and
          returns quality score, actionable suggestions, easy explanations, and
          improved code fixes using Groq LLM.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            className="rounded-full bg-[#facc15] px-5 py-2 text-sm font-semibold text-[#000000]"
            href="https://github.com/ius-sharma/ai-code-reviewer"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub Repo
          </a>
          <a
            className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold"
            href="https://github.com/ius-sharma"
            target="_blank"
            rel="noreferrer"
          >
            More Projects
          </a>
          <a
            className="rounded-full border border-[#facc15]/60 px-5 py-2 text-sm font-semibold text-[#facc15]"
            href="/contact?subject=Project%20Discussion%20-%20AI%20Code%20Reviewer"
          >
            Discuss This Project
          </a>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
          <h2 className="font-title text-2xl">Problem</h2>
          <p className="mt-3 text-sm text-[#f5f5f5]">
            Developers spend significant time in manual code reviews. Feedback
            can be inconsistent, and beginners often struggle to understand why
            code quality is low.
          </p>
        </article>

        <article className="rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
          <h2 className="font-title text-2xl">Solution</h2>
          <p className="mt-3 text-sm text-[#f5f5f5]">
            This project provides instant AI feedback through a clean coding
            interface. Users can paste or upload code and receive analysis,
            score, explanation, and improved code in one workflow.
          </p>
        </article>
      </section>

      <section className="mt-10 rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
        <h2 className="font-title text-2xl">Key Features</h2>
        <ul className="mt-4 grid gap-3 text-sm text-[#f5f5f5] md:grid-cols-2">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
          <h2 className="font-title text-2xl">Frontend Stack</h2>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            {frontendStack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#facc15]/40 bg-[#1a1a1a]/80 px-4 py-2"
              >
                {item}
              </span>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
          <h2 className="font-title text-2xl">Backend Stack</h2>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            {backendStack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#facc15]/40 bg-[#1a1a1a]/80 px-4 py-2"
              >
                {item}
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-10 rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
        <h2 className="font-title text-2xl">Architecture Flow</h2>
        <ol className="mt-4 space-y-2 text-sm text-[#f5f5f5]">
          <li>User enters or uploads source code in Monaco Editor.</li>
          <li>Frontend sends code and selected language to backend endpoints.</li>
          <li>Backend calls Groq LLM for analysis and explanation generation.</li>
          <li>Response returns score, suggestions, explanation, and fixed code.</li>
          <li>User reviews output and can apply AI-suggested fix instantly.</li>
        </ol>
      </section>

      <section className="mt-10 rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
        <h2 className="font-title text-2xl">API Endpoints</h2>
        <div className="mt-4 space-y-3 text-sm text-[#f5f5f5]">
          <p>
            <span className="font-semibold text-[#facc15]">POST</span>{" "}
            /api/analyze-code: returns score, suggestions, and fixed code.
          </p>
          <p>
            <span className="font-semibold text-[#facc15]">POST</span>{" "}
            /api/explain-code: returns plain-English explanation of code.
          </p>
          <pre className="overflow-x-auto rounded-xl border border-white/20 bg-[#0a0a0a] p-4 text-xs text-[#ffffff]">
{`{
  "code": "function sum(a, b) { return a + b; }",
  "language": "javascript"
}`}
          </pre>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
        <h2 className="font-title text-2xl">Run Locally</h2>
        <div className="mt-4 space-y-4 text-sm text-[#f5f5f5]">
          <p>Backend:</p>
          <pre className="overflow-x-auto rounded-xl border border-white/20 bg-[#0a0a0a] p-4 text-xs text-[#ffffff]">
{`cd backend
npm install
npm run start`}
          </pre>
          <p>Frontend:</p>
          <pre className="overflow-x-auto rounded-xl border border-white/20 bg-[#0a0a0a] p-4 text-xs text-[#ffffff]">
{`cd frontend
npm install
npm run dev`}
          </pre>
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
        <h2 className="font-title text-2xl">Future Improvements</h2>
        <ul className="mt-4 space-y-2 text-sm text-[#f5f5f5]">
          <li>Add authentication and project history</li>
          <li>Save previous analyses and compare results</li>
          <li>Improve model prompts for richer feedback</li>
          <li>Add collaborative review mode for teams</li>
        </ul>
      </section>

      <p className="mt-10 text-sm text-[#facc15]">
        This is one of my practice projects, built to strengthen real-world
        full-stack and AI integration skills.
      </p>
    </main>
  );
}
