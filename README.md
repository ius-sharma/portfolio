# Ayush Sharma Portfolio

A modern personal portfolio built with Next.js App Router, focused on clean UI, project case studies, and direct contact flow.

## Highlights

- Responsive portfolio homepage with sections for About, Skills, Projects, Education, and Contact
- Dedicated project detail pages for:
	- AI Resume Analyzer
	- AI Code Reviewer
- Contact form with backend API integration using Nodemailer
- Basic anti-spam controls (honeypot + lock window)
- SEO improvements:
	- Page-wise metadata
	- Open Graph image for social preview
	- robots.txt and sitemap.xml routes
- Black + yellow visual theme with consistent background styling

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Nodemailer

## Project Structure

app/
- layout.tsx (global metadata + layout)
- page.tsx (homepage)
- contact/
	- page.tsx
	- contact-form.tsx
- api/contact/route.ts (contact form backend)
- projects/
	- ai-resume-analyzer/page.tsx
	- ai-code-reviewer/page.tsx
- opengraph-image.tsx (social share image)
- sitemap.ts
- robots.ts

project-content/
- Markdown content support for project pages

## Local Setup

1. Install dependencies

npm install

2. Create local environment file

Copy .env.example to .env.local and fill your own values.

3. Run development server

npm run dev

4. Open in browser

http://localhost:3000

## Environment Variables

Set these in .env.local:

- SMTP_HOST (example: smtp.gmail.com)
- SMTP_PORT (example: 587)
- SMTP_SECURE (true for 465, false for 587)
- SMTP_USER (sender mailbox)
- SMTP_PASS (email app password)
- CONTACT_RECEIVER_EMAIL (inbox where messages should arrive)
- NEXT_PUBLIC_SITE_URL (deployed public URL, used for SEO canonical/OG/sitemap)

Important:
- Use app password for Gmail SMTP.
- Never commit real secrets to Git.

## Available Scripts

- npm run dev: start local development server
- npm run build: create production build
- npm run start: run production server
- npm run lint: run ESLint

## SEO Notes

This portfolio includes:

- Route-based metadata for homepage, contact, and project pages
- Open Graph preview image at /opengraph-image
- robots.txt generated via app/robots.ts
- sitemap.xml generated via app/sitemap.ts

For best SEO output, set NEXT_PUBLIC_SITE_URL in production.

## Deployment

Recommended: Vercel

Before deploy, verify:

1. Environment variables are configured
2. Build passes locally

npm run lint
npm run build

## Contact

- Email: sharmaeditzayush@gmail.com
- LinkedIn: https://www.linkedin.com/in/ayush-sharma-833163320/
- GitHub: https://github.com/ius-sharma
