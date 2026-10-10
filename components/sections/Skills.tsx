import { skills } from "@/lib/constants";

export function Skills() {
  return (
    <section
      className="min-h-screen py-24 px-4 md:px-8 flex flex-col items-center justify-center relative z-10"
      id="skills"
    >
      <div className="w-full max-w-4xl mx-auto">
        <h2 
          className="text-4xl md:text-5xl font-bold mb-16 text-center" 
          style={{ fontFamily: "var(--font-display)" }}
        >
          Skills & Tools
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {skills.map((category) => (
            <div key={category.label} className="space-y-4">
              <h3 className="text-xl font-bold text-accent font-mono border-b border-white/10 pb-2">
                {category.label}
              </h3>
              <ul className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm md:text-base text-neutral-300 font-medium hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
