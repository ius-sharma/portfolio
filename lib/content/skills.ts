import type { SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++", "Java", "SQL", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Next.js", "React", "Node.js", "Express.js", "FastAPI", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Databases & Tools",
    skills: ["MongoDB", "Supabase", "PostgreSQL", "Git", "GitHub", "Vercel", "Docker", "Postman", "VS Code"],
  },
  {
    category: "Core Concepts & AI",
    skills: [
      "Data Structures & Algorithms",
      "OOPs",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "WebAssembly (WASM)",
      "Groq API (LLMs)",
      "ONNX Runtime",
      "RESTful APIs",
      "CI/CD",
      "Web Workers",
    ],
  },
];
