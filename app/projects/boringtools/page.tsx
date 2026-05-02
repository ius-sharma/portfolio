import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BoringTools Project",
  description:
    "Case study of BoringTools: a growing collection of simple daily micro-tools for text cleanup, formatting, conversion, productivity, and utility workflows.",
  alternates: {
    canonical: "/projects/boringtools",
  },
};

const builtSoFar = [
  {
    day: "Day 1",
    title: "Text Formatter",
    features: [
      "Convert text to uppercase or lowercase",
      "Capitalize each word",
      "Clean extra spaces",
      "Copy formatted output",
    ],
    route: "/text-formatter",
  },
  {
    day: "Day 2",
    title: "JSON Formatter",
    features: [
      "Pretty print JSON",
      "Minify JSON",
      "Detect invalid JSON",
      "Copy formatted output",
    ],
    route: "/json-formatter",
  },
  {
    day: "Day 3",
    title: "Word Counter",
    features: [
      "Word count",
      "Character count",
      "Characters without spaces",
      "Sentence count",
    ],
    route: "/word-counter",
  },
  {
    day: "Day 4",
    title: "Password Generator",
    features: [
      "Adjustable password length",
      "Uppercase, lowercase, numbers, and symbols",
      "Copy generated password",
    ],
    route: "/password-generator",
  },
  {
    day: "Day 5",
    title: "Age Calculator",
    features: [
      "Exact age in years, months, and days",
      "Date picker input",
      "Validation for empty or future dates",
    ],
    route: "/age-calculator",
  },
  {
    day: "Day 6",
    title: "Unit Converter",
    features: [
      "Convert length, weight, and temperature",
      "Swap units quickly",
      "Precision control and copy result",
    ],
    route: "/unit-converter",
  },
  {
    day: "Day 7",
    title: "QR Generator",
    features: [
      "Generate QR code from text or URL",
      "Instant preview",
      "PNG download",
    ],
    route: "/qr-generator",
  },
  {
    day: "Day 8",
    title: "File Name Sanitizer",
    features: [
      "Clean unsafe characters from file names",
      "Support kebab-case and snake_case",
      "Preserve extensions safely",
    ],
    route: "/file-name-sanitizer",
  },
  {
    day: "Day 9",
    title: "Pomodoro Timer",
    features: [
      "25-minute focus and 5-minute break cycles",
      "Browser notifications and session counter",
      "Custom presets, progress ring, and statistics",
    ],
    route: "/pomodoro-timer",
  },
  {
    day: "Day 10",
    title: "Image Compressor / Resizer",
    features: [
      "Resize by max width and height",
      "Adjust output quality",
      "Export as JPEG, WebP, or PNG",
    ],
    route: "/image-compressor",
  },
  {
    day: "Day 11",
    title: "Resume Bullet Rewriter",
    features: [
      "Rewrite rough notes into resume-ready bullets",
      "Tone presets and bullet count control",
      "Copy polished output in one click",
    ],
    route: "/resume-bullet-rewriter",
  },
  {
    day: "Day 12",
    title: "GST Calculator",
    features: [
      "Before-GST and including-GST calculations",
      "Preset or custom GST rates",
      "Clear base, GST, and total amount breakdown",
    ],
    route: "/gst-calculator",
  },
  {
    day: "Day 13",
    title: "To-Do List",
    features: [
      "Add, edit, delete, and complete tasks",
      "Filter by all, active, and completed",
      "LocalStorage persistence",
    ],
    route: "/to-do-list",
  },
];

const upcomingTools = [
  {
    day: "Day 14",
    title: "Truth or Dare Play",
    route: "Coming Soon",
  },
  {
    day: "Day 15",
    title: "Time Zone Converter",
    route: "Coming Soon",
  },
  {
    day: "Day 16",
    title: "Roast My To-Do List",
    route: "Coming Soon",
  },
  {
    day: "Day 17",
    title: "Markdown Previewer",
    route: "Coming Soon",
  },
];

export default function BoringToolsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 pb-20 pt-14 md:px-8">
      <Link className="text-sm text-[#facc15] hover:underline" href="/">
        Back to Home
      </Link>

      <section className="mt-5 rounded-3xl border border-white/20 bg-[#111111]/85 p-7 md:p-9">
        <p className="text-xs uppercase tracking-[0.2em] text-[#facc15]">
          Case Study
        </p>
        <h1 className="mt-3 font-title text-4xl md:text-5xl">BoringTools</h1>
        <p className="mt-4 max-w-3xl text-[#f5f5f5]">
          100 Days. 100 Boring Tools. BoringTools is a collection of simple and
          useful micro-tools built daily to solve everyday problems with a clean
          and consistent UI.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            className="rounded-full bg-[#facc15] px-5 py-2 text-sm font-semibold text-[#000000]"
            href="https://boring-tools-nine.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Open Live Demo
          </a>
          <a
            className="rounded-full border border-[#facc15]/60 px-5 py-2 text-sm font-semibold text-[#facc15]"
            href="/contact?subject=Project%20Discussion%20-%20BoringTools"
          >
            Discuss This Project
          </a>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
          <h2 className="font-title text-2xl">Project Overview</h2>
          <p className="mt-3 text-sm text-[#f5f5f5]">
            The project focuses on building small, focused utilities one at a
            time. Each tool solves a practical workflow problem such as text
            cleanup, JSON formatting, password generation, calculation, or file
            preparation.
          </p>
        </article>

        <article className="rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
          <h2 className="font-title text-2xl">Goal</h2>
          <p className="mt-3 text-sm text-[#f5f5f5]">
            Build 100 small tools in 100 days and turn them into a useful
            ecosystem with a unified UI, simple navigation, and fast discovery.
          </p>
        </article>
      </section>

      <section className="mt-10 rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
        <h2 className="font-title text-2xl">Tech Stack</h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          {["Next.js", "Tailwind CSS", "Vercel"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#facc15]/40 bg-[#1a1a1a]/80 px-4 py-2"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
        <h2 className="font-title text-2xl">Built So Far</h2>
        <div className="mt-5 space-y-4">
          {builtSoFar.map((tool) => (
            <article
              key={tool.day}
              className="rounded-2xl border border-white/15 bg-black/30 p-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-title text-xl">
                  {tool.day}: {tool.title}
                </h3>
                <span className="text-sm text-[#facc15]">{tool.route}</span>
              </div>
              <ul className="mt-3 grid gap-2 text-sm text-[#f5f5f5] md:grid-cols-2">
                {tool.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
        <h2 className="font-title text-2xl">Upcoming Releases</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {upcomingTools.map((tool) => (
            <div
              key={tool.day}
              className="rounded-xl border border-white/15 bg-black/30 p-4 text-sm text-[#f5f5f5]"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-[#facc15]">
                {tool.day}
              </p>
              <p className="mt-2 font-semibold">{tool.title}</p>
              <p className="mt-1">{tool.route}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
          <h2 className="font-title text-2xl">UI/UX Updates</h2>
          <ul className="mt-4 space-y-2 text-sm text-[#f5f5f5]">
            <li>Unified card-based UI across all tools</li>
            <li>Theme switcher with saved preference</li>
            <li>Persistent top controls and home button</li>
            <li>Responsive layout for desktop, tablet, and mobile</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
          <h2 className="font-title text-2xl">Philosophy</h2>
          <p className="mt-3 text-sm text-[#f5f5f5]">
            Boring problems. Simple tools.
          </p>
          <p className="mt-4 text-sm text-[#f5f5f5]">
            The idea is to keep the interface minimal, the workflow direct, and
            the output immediately useful.
          </p>
        </article>
      </section>
    </main>
  );
}