export type ProjectSlug =
  | "boringtools"
  | "vakiogiri"
  | "bhaichara"
  | "ai-resume-analyzer"
  | "ai-code-reviewer"
  | "oddsocean";

export type Project = {
  slug: ProjectSlug;
  title: string;
  badge: string;
  role: string;
  status: "released" | "in-development" | "built" | "community";
  summary: string;
  stack: string[];
  links: {
    live: string | null;
    code: string | null;
    backend?: string;
    internal: string | null;
  };
  screenshots: { src: string; alt: string }[];
  sources: string[];
};

export type SkillCategory = { category: string; skills: string[] };
export type Achievement = {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
};
