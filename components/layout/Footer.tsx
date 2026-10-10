import { socialLinks } from "@/lib/constants";
import { motion } from "framer-motion";

const Mail = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Github = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5 0-1.4-.5-2.5-1.5-3.4.1-.3.6-1.6-.1-3.4 0 0-1.2-.4-3.9 1.4a12.3 12.3 0 0 0-7 0C4.7 1.2 3.5 1.6 3.5 1.6a4.8 4.8 0 0 0-.1 3.4C2.5 5.9 2 7 2 8.4c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/></svg>
);

export function Footer() {
  const getIcon = (iconStr: string) => {
    switch (iconStr) {
      case "email": return <Mail className="w-5 h-5 text-neutral-400" />;
      case "linkedin": return <Linkedin className="w-5 h-5 text-neutral-400" />;
      case "github": return <Github className="w-5 h-5 text-neutral-400" />;
      default: return null;
    }
  };

  const getDisplayText = (link: typeof socialLinks[0]) => {
    return link.href.replace("mailto:", "").replace("https://", "");
  };

  return (
    <footer className="min-h-screen flex flex-col items-center justify-center py-32 px-4 relative z-10" id="contact">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Section Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-8 h-[1px] bg-white/20"></div>
          <span className="font-mono text-neutral-500 text-sm tracking-wider">04.</span>
          <div className="w-8 h-[1px] bg-white/20"></div>
        </motion.div>

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-[7rem] font-bold tracking-tighter mb-8 text-center uppercase text-neutral-200"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Let's Connect
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-neutral-400 text-center max-w-xl mx-auto mb-16 text-lg"
        >
          Have a project in mind? Want to collaborate? Or just say hi? My inbox is always open.
        </motion.p>

        {/* Say Hello Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:syedabdulmalik1208@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-neutral-200 transition-colors"
          >
            Say Hello 
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </motion.a>
        </motion.div>

        {/* Social Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.icon !== "email" ? "_blank" : undefined}
              rel={link.icon !== "email" ? "noopener noreferrer" : undefined}
              className="bg-[#16161e]/80 border border-white/5 hover:border-white/20 transition-colors rounded-2xl p-6 flex flex-col items-start gap-12 group relative overflow-hidden"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
                {getIcon(link.icon)}
              </div>
              
              {/* Text Info */}
              <div className="space-y-1 relative z-10 w-full">
                <p className="font-mono text-xs tracking-widest uppercase text-neutral-500">{link.label}</p>
                <p className="text-neutral-300 text-sm font-medium truncate w-full">{getDisplayText(link)}</p>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.a>
          ))}
        </motion.div>
        
      </div>
    </footer>
  );
}
