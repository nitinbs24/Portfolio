import { projects, Project } from "@/lib/constants";
import { cn } from "@/lib/utils";
const Github = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5 0-1.4-.5-2.5-1.5-3.4.1-.3.6-1.6-.1-3.4 0 0-1.2-.4-3.9 1.4a12.3 12.3 0 0 0-7 0C4.7 1.2 3.5 1.6 3.5 1.6a4.8 4.8 0 0 0-.1 3.4C2.5 5.9 2 7 2 8.4c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const ExternalLink = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export function Projects() {
  return (
    <section
      className="min-h-screen py-24 px-4 md:px-8 relative z-10"
      id="projects"
    >
      <div className="w-full max-w-6xl mx-auto">
        <h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center" 
          style={{ fontFamily: "var(--font-display)" }}
        >
          Selected Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={cn(
        "group relative flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-accent/50",
        project.featured ? "md:col-span-2" : "col-span-1"
      )}
    >
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h3 
            className="text-2xl font-bold text-white group-hover:text-accent transition-colors"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {project.title}
          </h3>
          <div className="flex gap-3">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="GitHub Repository"
              >
                <Github size={20} />
              </a>
            )}
            {project.href && project.href !== "#" && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-neutral-400 text-sm md:text-base mb-6 flex-1">
          {project.description}
        </p>
        
        <ul className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="px-3 py-1 text-xs font-mono bg-white/5 border border-white/10 rounded-full text-neutral-300"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
