// ─── Types ───────────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  repo: string;
  featured?: boolean; // spans 2 columns in bento grid
}

export interface SkillCategory {
  label: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email";
}

// ─── Personal Info ────────────────────────────────────────────────────────────

export const personalInfo = {
  name: "Nitin",
  roles: [
    "Full Stack Developer",
    "DevOps Engineer",
    "AI Enthusiast",
    "Open Source Contributor",
  ],
  bio: `Software engineer focused on building fast, accessible,
and well-crafted web applications. Passionate about
developer tooling, infrastructure, and making complex
systems simple.`,
} as const;

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "homelab",
    title: "Homelab Infrastructure",
    description:
      "Self-hosted Kubernetes cluster running 20+ services with GitOps-driven deployments via ArgoCD and Terraform.",
    tags: ["Kubernetes", "Terraform", "ArgoCD", "Prometheus"],
    href: "#",
    repo: "https://github.com/nitin",
    featured: true,
  },
  {
    id: "devboard",
    title: "DevBoard",
    description:
      "Real-time developer dashboard aggregating GitHub, CI/CD pipelines, and incident alerts in one view.",
    tags: ["Next.js", "TypeScript", "WebSockets", "PostgreSQL"],
    href: "#",
    repo: "https://github.com/nitin",
  },
  {
    id: "ai-cli",
    title: "AI CLI Toolkit",
    description:
      "Terminal utility that wraps Gemini API for code review, commit message generation, and PR summaries.",
    tags: ["Python", "Gemini API", "Click", "Rich"],
    href: "#",
    repo: "https://github.com/nitin",
    featured: true,
  },
  {
    id: "dns-guard",
    title: "DNS Guard",
    description:
      "Lightweight Pi-hole alternative written in Go with a web UI, custom blocklists, and per-device rules.",
    tags: ["Go", "SQLite", "Docker", "React"],
    href: "#",
    repo: "https://github.com/nitin",
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skills: SkillCategory[] = [
  {
    label: "Languages",
    items: ["TypeScript", "Python", "Go", "Rust", "SQL", "Bash"],
  },
  {
    label: "Frameworks",
    items: ["Next.js", "React", "FastAPI", "Express", "Prisma", "Tailwind CSS"],
  },
  {
    label: "DevOps",
    items: ["Docker", "Kubernetes", "Terraform", "ArgoCD", "GitHub Actions", "Prometheus"],
  },
  {
    label: "Distros & Tools",
    items: ["NixOS", "Arch Linux", "Neovim", "tmux", "PostgreSQL", "Redis"],
  },
];

// ─── Social Links ─────────────────────────────────────────────────────────────

export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:syedabdulmalik1208@gmail.com",
    icon: "email",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/abdulmaliksy3d",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/s8my0",
    icon: "github",
  },
];
