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
      className="min-h-screen py-24 px-4 md:px-8 flex flex-col items-center justify-center relative z-10"
      id="skills"
    >
      <div className="w-full max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center" 
          style={{ fontFamily: "var(--font-display)" }}
        >
          Skills & Tools
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {skills.map((category, idx) => (
            <motion.div 
              key={category.label} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-accent font-mono border-b border-white/10 pb-2">
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
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm md:text-base text-neutral-300 font-medium hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
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
