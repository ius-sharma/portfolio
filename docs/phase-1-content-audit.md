# Phase 1: Content audit and organisation

Reviewed: 2026-09-30. Scope: existing content and shared data only. Visual redesign, new pages, GitHub integration, contact-backend changes, and deployment are later phases and have not started.

## Source authority

1. User-supplied `Ayush_Sharma_Resume_V3.pdf`: education, availability, roles, project descriptions, achievements and reported milestones. These are self-reported facts, not independently audited metrics. The PDF has been copied without modification and its SHA-256 verified against the source.
2. Public GitHub profile `https://github.com/ius-sharma`: links to BoringTools, AI Code Reviewer, and both Bhaichara repositories; public project summaries.
3. `https://github.com/ius-sharma/boring-tools`: repository and product URL; reported completion of 101 tools in 100 days; browser APIs/WASM and Groq-based features. README contains conflicting broad privacy claims and performance numbers, so those are not treated as measurements.
4. Existing local `project-content/*.md` and case-study source: Resume Analyzer and Code Reviewer descriptions, assets and URLs. Content retained conservatively; a local document does not prove deployment availability.

GitHub profile and BoringTools repository were inspected during planning in this chat. In Phase 1, several repository pages could not be fetched through web browsing and the unauthenticated GitHub API returned a rate-limit error. Exact links found in prior sources have been used; current remote availability is not claimed as verified.

## Project inventory

| Project | Current source | Existing case study | Available images | Missing / pending |
| --- | --- | --- | --- | --- |
| BoringTools | Resume V3 + public repository | `/projects/boringtools` | None | Screenshots, dated usage/performance evidence |
| AI Resume Analyzer | Local project notes + existing page | `/projects/ai-resume-analyzer` | Home, upload, result | Recheck repository and live app availability |
| AI Code Reviewer | Local notes + GitHub profile | `/projects/ai-code-reviewer` | None | Screenshots, demo URL, current repository configuration |
| Bhaichara | Resume V3 + GitHub profile | None | None | Demo, screenshots, case study; frontend/backend links are recorded |
| Vakiogiri | Resume V3 | None | None | Repository/demo, screenshots, current progress; marked in development |
| ODDSOCEAN | Resume V3 + GitHub profile | None | None | Verify website before enabling live CTA; no known exact code repo |

Unknown URLs are `null`, so a project-specific button never silently opens a generic profile. No new case-study routes are advertised until those pages exist.

## Corrections in this phase

- Extracted typed projects, skills, achievements, coursework, profile/contact data and existing services into `lib/content/`.
- Connected homepage arrays, case-study project links, Resume Analyzer image sources, BoringTools stack/summary and sitemap to shared data.
- Added unchanged resume V3 and its download link; retained the older PDF for compatibility.
- BoringTools now links to its exact repository. Bhaichara has labelled frontend/backend repository links.
- Removed generic-profile "repository" buttons for Vakiogiri and ODDSOCEAN, whose exact code URLs are unknown.
- Clarified browser-local processing versus Groq API processing.
- Replaced WebX "Hackathon Winner" with "8th Rank".
- Corrected Sarvodaya school name from the supplied resume.
- Removed projected CGPA from the current-grade label.
- Rephrased in-development Vakiogiri benefits as intended functionality, rather than demonstrated time savings.
- Removed undated performance scores, zero-downtime and zero-layout-shift claims from the BoringTools page. No fresh performance score is asserted.
- Marked the old BoringTools Markdown progress log as historical and removed unused upcoming-tools data from the rendered page source.
- Generalised skill version labels; existing runtime versions remain in package.json.
- Separated Call and WhatsApp contact links.
- Included existing service routes in the sitemap; no unsupported future routes added.
- Excluded Python virtual environments from ESLint traversal. Initial lint had one unused `upcomingTools` warning.

## Decisions still needed before publication

- Final portfolio domain: SEO configuration still has the pre-existing BoringTools fallback. Do not invent a domain or treat that fallback as the confirmed portfolio URL. Configure `NEXT_PUBLIC_SITE_URL` before release.
- Availability is based on resume V3: Summer 2027 SDE internships and project collaboration. Confirm if priorities change.
- Missing project screenshots/photo, testimonials and pricing need real supplied content. None are fabricated.
- MAU, community size, test-user counts, time-savings and Lighthouse numbers remain source-reported historical claims. Resume itself is unedited. Check dated evidence before using them as live metrics.
- Existing service promises (including free-demo turnaround) remain unchanged; confirm these offers before the services redesign.
- Full long-form case studies and remaining prose are still in existing page components. Shared templates and complete content migration belong to the later case-study phase.

## Verification

- `npm run lint`: passed with no warnings after the cleanup.
- `tsc --noEmit`: passed.
- Content integrity: six unique project slugs; source references; exact repository paths; all linked local case-study routes and screenshot files present.
- Resume V3: source and public copy SHA-256 match (`F39555989DC278C3B1855F6BFAA09719E22F406C1B598CAFAE65E974889AB2E2`).
- Production build: passed, exit code 0, static pages generated. Sandbox initially blocked Google Fonts; the network-enabled build succeeded. The successful build also printed a V8 memory diagnostic from a process before compilation completed; production responses were checked afterward. This is not a clean resource-usage benchmark.
- Fixed Next.js workspace-root discovery by setting `turbopack.root` to the project working directory; it previously selected a parent lockfile and failed directory access.
- Production HTTP smoke checks: homepage, contact, all three existing project pages, all three existing service pages, and sitemap returned 200.
- Rendered homepage contains the V3 download and exact BoringTools/Bhaichara links; misleading winner/privacy text is absent.
- Served resume response is byte-identical to the source.
- `git diff --check`: passed. Git emitted environment warnings about a global ignore file and line-ending conversion, not patch errors.
- No outbound contact message was sent. No deployment performed. Existing unrelated working-tree edits were retained.

## Phase boundary

Phase 1 is complete. Await explicit user instruction before Phase 2 (reference-to-component mapping). Colours, typography, sidebar, animations, and page redesign have not been started.
