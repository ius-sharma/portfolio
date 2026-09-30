// Personal facts are transcribed from the user-supplied resume V3.
export const profile = {
  name: "Ayush Sharma",
  role: "Full Stack Developer & AI Builder",
  location: "Bihar, India",
  email: "sharmaeditzayush@gmail.com",
  phone: "+91 6205882057",
  phoneHref: "tel:+916205882057",
  github: "https://github.com/ius-sharma",
  linkedin: "https://www.linkedin.com/in/ayush-sharma-833163320/",
  availability: "Open for Summer 2027 SDE Internships & Projects",
  resume: {
    href: "/Ayush_Sharma_Resume_V3.pdf",
    filename: "Ayush_Sharma_Resume_V3.pdf",
  },
  education: {
    degree: "B.Tech in Computer Engineering",
    university: "Marwadi University",
    period: "2024–2028 (Expected)",
    cgpa: "6.97/10",
    classXII: "Sarvodaya Co-Ed Vidyalaya, New Delhi",
    classX: "Santoba International School",
  },
} as const;

export const contactOptions = [
  { label: "LinkedIn", href: profile.linkedin },
  { label: "GitHub", href: profile.github },
  { label: "Email Me", href: `mailto:${profile.email}?subject=Portfolio%20Inquiry` },
  { label: "Call", href: profile.phoneHref },
  { label: "WhatsApp", href: "https://wa.me/916205882057" },
  { label: "BoringTools (101 Tools)", href: "https://boringtoolsai.com" },
];
