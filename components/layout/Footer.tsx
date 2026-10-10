import { socialLinks } from "@/lib/constants";
import { motion } from "framer-motion";

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Github = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5 0-1.4-.5-2.5-1.5-3.4.1-.3.6-1.6-.1-3.4 0 0-1.2-.4-3.9 1.4a12.3 12.3 0 0 0-7 0C4.7 1.2 3.5 1.6 3.5 1.6a4.8 4.8 0 0 0-.1 3.4C2.5 5.9 2 7 2 8.4c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/></svg>
);

export function Footer() {
  const getIcon = (iconStr: string) => {
    switch (iconStr) {
      case "linkedin": return <Linkedin className="w-5 h-5" />;
      case "github": return <Github className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <footer className="w-full flex flex-col items-center justify-center py-24 px-4 bg-transparent relative z-10">
      <div className="flex flex-col items-center">
        
        {/* Large crossed out text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative text-[clamp(1.75rem,8vw,6rem)] font-bold tracking-tighter text-neutral-600 uppercase select-none whitespace-nowrap"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="relative inline-block">
            Design Code Deploy
            {/* Strikethrough line */}
            <span className="absolute top-1/2 left-[-5%] right-[-5%] h-[2px] md:h-[4px] bg-neutral-500 -translate-y-1/2"></span>
          </span>
        </motion.div>

        {/* Huge bold word */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-[9rem] leading-none font-bold tracking-tighter text-neutral-200 mt-2 md:mt-4 mb-20 uppercase"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Innovate
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-neutral-500 font-mono text-xs md:text-sm text-center max-w-xl px-4 leading-relaxed mb-8"
        >
          Designed and developed by Nitin B S with React, Three.js, Framer Motion, and all of my blood and sweat.
        </motion.p>

        {/* Icons */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-6"
        >
          {socialLinks.filter(l => l.icon !== "email").map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition-colors"
              aria-label={link.label}
            >
              {getIcon(link.icon)}
            </a>
          ))}
        </motion.div>

      </div>
    </footer>
  );
}
