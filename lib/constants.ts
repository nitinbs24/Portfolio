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
    title: "3D Warehouse Visualization & Vacancy Optimization",
    description:
      "Odoo 19 add-on that generates Inventory storage locations from a rack layout and renders a live 3D view of slot occupancy (OWL + Three.js) over Odoo's message bus, with pluggable bin-packing, putaway and picking-route strategies.",
    tags: ["Odoo 19", "OWL", "Three.js", "Python", "PostgreSQL"],
    href: "#",
    repo: "https://github.com/nitinbs24/warehouse_3D",
    featured: true,
  },
  {
    id: "log-parser",
    title: "LLM-Based Log Parser",
    description:
      "Fine-tuning Qwen3-4B with LoRA (Hugging Face PEFT) on a single T4 GPU to turn unstructured system logs into structured event templates and parameters, evaluated on held-out log sources instead of brittle regex rules.",
    tags: ["Hugging Face Transformers", "LoRA / PEFT", "Python", "Qwen3-4B"],
    href: "#",
    repo: "https://github.com/nitinbs24/log-parser",
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
    items: ["LangChain", "Hugging Face Transformers", "LoRA fine-tuning (PEFT)", "Odoo", "OWL", "Three.js", "Streamlit", "gRPC"],
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
