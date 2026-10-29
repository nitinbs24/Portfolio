import { motion } from "framer-motion";

export function About() {
  return (
    <section
      className="min-h-screen flex items-center justify-center py-32 px-4 relative z-10"
      id="about"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col items-start">
        
        {/* Section Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-4 w-full"
        >
          <span className="font-mono text-neutral-500 text-sm tracking-wider">01.</span>
          <div className="w-32 h-[1px] bg-white/20"></div>
        </motion.div>

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-16 uppercase w-full"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="text-white">About </span>
          <span className="text-neutral-500">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-neutral-400 text-base md:text-lg leading-relaxed"
          >
            <p>
              I&apos;m a passionate technologist at the intersection of <strong className="text-neutral-200 font-semibold">Backend Engineering, Distributed Systems</strong>, and <strong className="text-neutral-200 font-semibold">Cloud Infrastructure</strong>.
            </p>
            <p>
              I build robust systems that handle complex data pipelines — from developing search engines for object storage with Kubernetes and Kafka to building a 3D warehouse visualization and vacancy-optimization add-on for Odoo.
            </p>
            <p>
              When I&apos;m not writing APIs, I&apos;m exploring system architecture, automating workflows, or contributing to open source. I believe backend infrastructure should be scalable, resilient, and elegant.
            </p>
          </motion.div>

          {/* Right Column: Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full"
          >
            <div className="bg-[#111] rounded-xl border border-white/5 shadow-2xl overflow-hidden font-mono text-sm">
              {/* macOS Window Header */}
              <div className="flex items-center px-4 py-3 bg-[#1a1a1a] border-b border-white/5">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
                  <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
                  <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
                </div>
                <div className="flex-1 text-center text-xs text-neutral-500 font-medium select-none">
                  terminal - bash
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 md:p-8 space-y-4 text-neutral-300 leading-relaxed">
                <div>
                  <span className="text-neutral-500">$ </span>
                  <span className="text-neutral-300">whoami</span>
                </div>
                
                <div className="pt-2 pb-2">
                  <span className="text-neutral-300">Name: Nitin B S</span>
                </div>

                <div>
                  <span className="text-neutral-300">Interests:</span>
                </div>
                
                <ul className="space-y-1 pb-2">
                  <li className="flex items-start gap-2"><span className="text-neutral-500">-</span> Backend Engineering</li>
                  <li className="flex items-start gap-2"><span className="text-neutral-500">-</span> Distributed Pipelines</li>
                  <li className="flex items-start gap-2"><span className="text-neutral-500">-</span> System Architecture</li>
                  <li className="flex items-start gap-2"><span className="text-neutral-500">-</span> Applied AI / LLMs</li>
                  <li className="flex items-start gap-2"><span className="text-neutral-500">-</span> Open Source Contributor</li>
                </ul>

                <div>
                  <span className="text-neutral-300">Status:</span>
                </div>
                
                <div className="pb-2 flex items-center gap-2">
                  <span>Building robust backends...</span>
                  <span className="text-neutral-100">✓</span>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <span className="text-neutral-500">$ </span>
                  <span className="w-2.5 h-5 bg-neutral-400 animate-pulse inline-block"></span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
