import Link from "next/link";
import type { Metadata } from "next";
import { getProject } from "@/lib/content/projects";
import { boringToolsSamples } from "@/lib/content/boringtools";

const project = getProject("boringtools");

export const metadata: Metadata = {
  title: "BoringTools – 101 Browser Micro-Utilities",
  description:
    "Case study of BoringTools: 101 browser-based web tools shipped in 100 days using Next.js, TypeScript, Tailwind CSS, WebAssembly, and Groq API.",
  alternates: {
    canonical: "/projects/boringtools",
  },
};

export default function BoringToolsPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 pb-20 pt-14 md:px-8">
      <Link className="text-sm text-[#facc15] hover:underline" href="/">
        Back to Home
      </Link>

      <section className="mt-5 rounded-3xl border border-white/20 bg-[#111111]/85 p-7 md:p-9">
        <p className="text-xs uppercase tracking-[0.2em] text-[#facc15]">
          Case Study • Solo Project
        </p>
        <h1 className="mt-3 font-title text-4xl md:text-5xl">BoringTools</h1>
        <p className="mt-4 max-w-3xl text-[#f5f5f5] leading-relaxed">
          {project.summary}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            className="rounded-full bg-[#facc15] px-5 py-2 text-sm font-semibold text-[#000000] hover:bg-[#fde047] transition"
            href={project.links.live!}
            target="_blank"
            rel="noreferrer"
          >
            Open Live App (boringtoolsai.com) ↗
          </a>
          <a
            className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold hover:border-[#facc15] hover:text-[#facc15] transition"
            href={project.links.code!}
            target="_blank"
            rel="noreferrer"
          >
            GitHub Repository
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
          <h2 className="font-title text-2xl">Key Highlights & Architecture</h2>
          <ul className="mt-3 space-y-2 text-sm text-[#f5f5f5]">
            <li>• <strong>101 Privacy-First Tools:</strong> Core utilities process data locally; selected AI features use external APIs.</li>
            <li>• <strong>WebAssembly Integration:</strong> LibreOffice WASM for in-browser DOC-to-PDF conversion with custom COOP/COEP headers.</li>
            <li>• <strong>AI-Powered Tools:</strong> Integrated Groq API for real-time prompt generation & Playlist IQ.</li>
            <li>• <strong>Performance & SEO:</strong> Dynamic imports, route-based code splitting, and search metadata.</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
          <h2 className="font-title text-2xl">The 100-Day Challenge</h2>
          <p className="mt-3 text-sm text-[#f5f5f5] leading-relaxed">
            Shipped 101 functional utilities in 100 consecutive days with 295+ GitHub commits, establishing a unified design system and keyboard accessibility.
          </p>
        </article>
      </section>

      <section className="mt-10 rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
        <h2 className="font-title text-2xl">Tech Stack</h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          {project.stack.map((item) => (
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
        <h2 className="font-title text-2xl">Sample Built Utilities</h2>
        <div className="mt-5 space-y-4">
          {boringToolsSamples.slice(0, 8).map((tool) => (
            <article
              key={tool.day}
              className="rounded-2xl border border-white/15 bg-black/30 p-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-title text-xl">
                  {tool.day}: {tool.title}
                </h3>
                <span className="text-sm text-[#facc15]">100% Client-Side</span>
              </div>
              <ul className="mt-3 grid gap-2 text-sm text-[#f5f5f5] md:grid-cols-2">
                {tool.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
          <h2 className="font-title text-2xl">UI/UX & Accessibility</h2>
          <ul className="mt-4 space-y-2 text-sm text-[#f5f5f5]">
            <li>• Unified responsive design system across all 101 tools</li>
            <li>• Keyboard navigation across the tool interface</li>
            <li>• Dark/light theme support</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-white/20 bg-[#111111]/80 p-6">
          <h2 className="font-title text-2xl">Product Philosophy</h2>
          <p className="mt-3 text-sm text-[#f5f5f5]">
            &quot;Boring problems. Ultra-fast, privacy-first solutions.&quot;
          </p>
          <p className="mt-4 text-sm text-[#f5f5f5]">
            Browser-based utilities for everyday tasks, with API-powered features where AI processing is needed.
          </p>
        </article>
      </section>
    </main>
  );
}