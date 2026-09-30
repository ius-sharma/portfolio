import type { Project, ProjectSlug } from "./types";

// Source and verification details: docs/phase-1-content-audit.md.
export const projects: Project[] = [
  {
    "slug": "boringtools",
    "title": "BoringTools – 101 Micro-Utilities",
    "badge": "Solo Project | 100-Day Challenge",
    "role": "Solo developer",
    "status": "released",
    "summary": "Built 101 browser-based utilities in 100 days. Core tools process data in the browser using WebAssembly and browser APIs; selected AI features use Groq API. Integrated LibreOffice WASM with scoped COOP/COEP headers for DOC-to-PDF conversion.",
    "stack": [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "WebAssembly (WASM)",
      "Groq API"
    ],
    "links": {
      "live": "https://boringtoolsai.com",
      "code": "https://github.com/ius-sharma/boring-tools",
      "internal": "/projects/boringtools"
    },
    "screenshots": [],
    "sources": [
      "resume-v3",
      "https://github.com/ius-sharma/boring-tools"
    ]
  },
  {
    "slug": "vakiogiri",
    "title": "Vakiogiri – AI Video Clipping",
    "badge": "Tech Lead | In Development",
    "role": "Tech lead",
    "status": "in-development",
    "summary": "Developing a video clipping platform to identify useful segments in long-form content. The planned workflow combines FastAPI processing, a Next.js preview interface, and Groq-powered transcription and keyword detection.",
    "stack": [
      "Python",
      "FastAPI",
      "Next.js",
      "Groq API",
      "Supabase"
    ],
    "links": {
      "live": null,
      "code": null,
      "internal": null
    },
    "screenshots": [],
    "sources": [
      "resume-v3"
    ]
  },
  {
    "slug": "bhaichara",
    "title": "Bhaichara – Student Support Platform",
    "badge": "Full Stack Developer",
    "role": "Full-stack developer",
    "status": "built",
    "summary": "Built a conversational AI platform for student questions about campus life, studies, and wellbeing. Implemented Express REST APIs, JWT authentication, and Groq-powered contextual conversations.",
    "stack": [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Groq API"
    ],
    "links": {
      "live": null,
      "code": "https://github.com/ius-sharma/bhaichara-client",
      "backend": "https://github.com/ius-sharma/bhaichara-backend",
      "internal": null
    },
    "screenshots": [],
    "sources": [
      "resume-v3",
      "https://github.com/ius-sharma"
    ]
  },
  {
    "slug": "ai-resume-analyzer",
    "title": "AI Resume Analyzer",
    "badge": "Full Stack AI App",
    "role": "Full-stack developer",
    "status": "released",
    "summary": "Built a resume analysis application with PDF parsing, AI-generated scores, missing-skill detection, and improvement suggestions using Groq and REST APIs.",
    "stack": [
      "React",
      "Node.js",
      "Express",
      "Groq API",
      "pdf-parse",
      "Tailwind CSS"
    ],
    "links": {
      "live": "https://ai-resume-analyzer-orcin-rho.vercel.app/",
      "code": "https://github.com/ius-sharma/ai-resume-analyzer",
      "internal": "/projects/ai-resume-analyzer"
    },
    "screenshots": [
      {
        "src": "/projects/ai-resume-analyzer/cover+home.png",
        "alt": "AI Resume Analyzer home screen"
      },
      {
        "src": "/projects/ai-resume-analyzer/upload.png",
        "alt": "PDF resume upload interface"
      },
      {
        "src": "/projects/ai-resume-analyzer/result.png",
        "alt": "AI-generated resume analysis results"
      }
    ],
    "sources": [
      "project-content/ai-resume-analyzer.md",
      "app/projects/ai-resume-analyzer/page.tsx"
    ]
  },
  {
    "slug": "ai-code-reviewer",
    "title": "AI Code Reviewer",
    "badge": "Developer Productivity Tool",
    "role": "Full-stack developer",
    "status": "built",
    "summary": "Built a code review assistant with Monaco Editor, AI-generated quality feedback, plain-English explanations, and suggested code changes through Groq.",
    "stack": [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "Groq SDK",
      "Monaco Editor"
    ],
    "links": {
      "live": null,
      "code": "https://github.com/ius-sharma/ai-code-reviewer",
      "internal": "/projects/ai-code-reviewer"
    },
    "screenshots": [],
    "sources": [
      "project-content/ai-code-reviewer.md",
      "https://github.com/ius-sharma"
    ]
  },
  {
    "slug": "oddsocean",
    "title": "ODDSOCEAN – eSports Community",
    "badge": "Founder & Lead Developer (Since 2022)",
    "role": "Founder and lead developer",
    "status": "community",
    "summary": "Founded an eSports organisation and led a three-person core team. Organised four tournaments, managing registration, brackets, live streaming, and community workflows.",
    "stack": [
      "Community Management",
      "Tournament Workflows",
      "Full Stack"
    ],
    "links": {
      "live": null,
      "code": null,
      "internal": null
    },
    "screenshots": [],
    "sources": [
      "resume-v3",
      "https://github.com/ius-sharma"
    ]
  }
];

export function getProject(slug: ProjectSlug): Project {
  const project = projects.find((item) => item.slug === slug);
  if (!project) throw new Error(`Missing project content: ${slug}`);
  return project;
}
