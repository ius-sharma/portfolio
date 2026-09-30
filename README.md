# Ayush Sharma - Portfolio

Full Stack Developer & AI Builder. Creator of **BoringTools** (101 browser-based micro-utilities in 100 days).

## 🌐 Live Portfolio & Projects

- **BoringTools product**: https://boringtoolsai.com
- **Portfolio domain**: pending confirmation; configure `NEXT_PUBLIC_SITE_URL` before launch.
- **LinkedIn**: https://www.linkedin.com/in/ayush-sharma-833163320/
- **GitHub**: https://github.com/ius-sharma
- **Email**: sharmaeditzayush@gmail.com
- **Phone**: +91 6205882057

## 📋 What's Inside

- **About**: Computer Engineering undergraduate at Marwadi University (2024-2028).
- **Skills**: Next.js 14, React 18, TypeScript, Python, FastAPI, Node.js, WebAssembly (WASM), Groq API, MongoDB, Supabase, PostgreSQL.
- **Projects**: 
  - **BoringTools**: 101 privacy-first web utilities in 100 days (295+ commits, 100+ MAU, LibreOffice WASM, Groq API).
  - **Vakiogiri**: AI-powered video clipping platform (FastAPI, Groq LLM).
  - **Bhaichara**: AI-powered student support platform (MERN, Groq API).
  - **AI Resume Analyzer**: PDF parsing, 0-100 scoring, skill-gap analysis.
  - **AI Code Reviewer**: Monaco Editor, instant code review and optimization.
  - **ODDSOCEAN**: eSports community platform (1,100+ active players).
- **Achievements**: 8th Rank at WebX Challenge 2026 Hackathon, SIH 2026 Participant, 100-Day Building Challenge.
- **Education**: B.Tech in Computer Engineering at Marwadi University (Current CGPA: 6.97/10).

## 🛠 Built With

- Next.js 16 (React 19)
- TypeScript
- Tailwind CSS
- Nodemailer (contact backend)

## 📱 Features

- Fully responsive design
- Dark theme with yellow/amber accents and glassmorphism
- Fast & optimized (Next.js App Router)
- SEO metadata, sitemap, and Open Graph support (scores require a fresh audit)
- Direct contact form with anti-spam protection



## Content organisation (Phase 1)

- `lib/content/profile.ts`: identity, contact links, education summary, and resume V3 path.
- `lib/content/projects.ts`: six project records with roles, status, stacks, URLs, screenshot inventory, and source references.
- `lib/content/skills.ts`, `achievements.ts`, `education.ts`: homepage content.
- `lib/content/services.ts`: existing service descriptions and route lookup.
- `lib/content/boringtools.ts`: historical sample utilities.
- `project-content/`: supporting project notes; see each file's verification status.
- `docs/phase-1-content-audit.md`: provenance, corrections, missing assets, and follow-up checks.

The homepage consumes the shared content. Existing case-study pages share project links/assets, while their long-form descriptions remain in the page components until the case-study phase.

Resume downloads use `public/Ayush_Sharma_Resume_V3.pdf`, copied unchanged from the supplied document. The old PDF remains available for existing links.

Current runtime versions are defined by `package.json`; project-specific technology descriptions do not imply every project runs that same version.
