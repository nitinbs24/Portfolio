import { personalInfo } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function About() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20 relative z-10"
      id="about"
    >
      <div className="w-full max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#1a1b26]/80 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl overflow-hidden font-mono text-sm md:text-base"
        >
          {/* macOS Window Header */}
          <div className="flex items-center px-4 py-3 bg-[#16161e] border-b border-white/10">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#f7768e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#e0af68]"></div>
              <div className="w-3 h-3 rounded-full bg-[#9ece6a]"></div>
            </div>
            <div className="flex-1 text-center text-xs md:text-sm text-neutral-400 font-medium select-none">
              Terminal - nitin@portfolio
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 md:p-8 space-y-6 text-neutral-300">
            {/* Command Input */}
            <div className="flex items-center gap-2">
              <span className="text-accent">nitin@portfolio</span>
              <span className="text-neutral-500">~ %</span>
              <span className="text-white">cat about.txt</span>
            </div>

            {/* About text paragraphs */}
            <div className="space-y-4 leading-relaxed whitespace-pre-line">
              <p>{personalInfo.bio}</p>
            </div>

            {/* Prompt with blinking cursor */}
            <div className="flex items-center gap-2 pt-2">
              <span className="text-accent">nitin@portfolio</span>
              <span className="text-neutral-500">~ %</span>
              <span className="w-2.5 h-5 bg-neutral-400 animate-pulse inline-block"></span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
