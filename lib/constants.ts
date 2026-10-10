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
  name: "Nitin B S",
  roles: [
    "Backend Engineer",
    "Computer Science Student",
    "System Architecture Enthusiast",
  ],
  bio: `Final Year Computer Science Engineering student From VVCE, Mysuru, with interest in backend engineering — distributed pipelines, APIs, and production ready deployments.`,
} as const;

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: "hpe-cpp",
    title: "Search Engine for Object Storage System",
    description:
      "Production-grade RAG pipeline over MinIO object storage, combining dense vector (kNN) and BM25 keyword retrieval via OpenSearch, with Redis caching and Kafka-driven event ingestion — deployed on Docker and Kubernetes.",
    tags: ["Kubernetes", "Kafka", "OpenSearch", "Redis", "NLP"],
    href: "#",
    repo: "https://github.com/nitinbs24/Obsidian",
    featured: true,
  },
  {
    id: "3d-warehouse",
    title: "3D Warehouse Slotting Engine",
    description:
      "Full-stack slotting engine (FastAPI + async Postgres + Redis/arq) that turns Odoo-shaped inventory data into optimized rack-slot assignments with a React Three Fiber 3D digital twin.",
    tags: ["FastAPI", "PostgreSQL", "Redis", "React Three Fiber"],
    href: "#",
    repo: "https://github.com/nitinbs24/WMS",
    featured: true,
  },
  {
    id: "ai-shorts",
    title: "AI YouTube Automation",
    description:
      "Autonomous Python monorepo that orchestrates scriptwriting, voiceovers, and video assembly to publish content across a YouTube channel using LLM-in-the-loop validation.",
    tags: ["Python", "Edge-TTS", "MoviePy", "GitHub Actions"],
    href: "#",
    repo: "https://github.com/nitinbs24/Shorts-Generator",
  }
];

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skills: SkillCategory[] = [
  {
    label: "LANGUAGES",
    items: ["C++", "C", "Python", "TypeScript", "JavaScript", "Go"],
  },
  {
    label: "FRAMEWORKS",
    items: ["LangChain", "FastAPI", "React Three Fiber", "Streamlit", "gRPC"],
  },
  {
    label: "DATABASES & SEARCH",
    items: ["PostgreSQL", "Redis", "OpenSearch", "MinIO"],
  },
  {
    label: "DEVOPS & TOOLS",
    items: ["Docker", "Kubernetes", "Kafka", "Git", "GitHub Actions", "Linux"],
  }
];

// ─── Social Links ─────────────────────────────────────────────────────────────

export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:nitinskatte@gmail.com",
    icon: "email",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/nitinbs",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/nitinbs24",
    icon: "github",
  },
];
