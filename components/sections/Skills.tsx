import { skills } from "@/lib/constants";
import { motion } from "framer-motion";

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      className="min-h-screen py-24 px-4 md:px-8 relative z-10"
      id="skills"
    >
      <div className="w-full max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-4 w-full"
        >
          <span className="font-mono text-neutral-500 text-sm tracking-wider">03.</span>
          <div className="w-32 h-[1px] bg-white/20"></div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-16 w-full" 
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="text-white">Skills </span>
          <span className="text-neutral-500">& Tools</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {skills.map((category, idx) => (
            <motion.div 
              key={category.label} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#111] border border-white/5 rounded-2xl p-8 flex flex-col hover:border-white/10 transition-colors"
            >
              <h3 className="text-xs font-mono tracking-widest text-neutral-500 uppercase mb-6">
                {category.label}
              </h3>
              <motion.ul 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-wrap gap-3"
              >
                {category.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={itemVariants}
                    className="px-5 py-2 bg-transparent border border-white/10 rounded-full text-sm text-neutral-400 font-medium hover:bg-white/5 hover:text-neutral-300 transition-colors cursor-default"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
