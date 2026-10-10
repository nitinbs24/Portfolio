export default function Page() {
  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-accent/30 selection:text-white">
      {/* 3D Background Placeholder */}
      <div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center opacity-20">
        <span className="font-mono text-neutral-600">[ 3D Canvas Slot ]</span>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Phase 3: Navbar */}
        <header className="fixed top-0 left-0 right-0 h-20 border-b border-white/10 flex items-center justify-center backdrop-blur-md z-50">
          <span className="font-mono text-neutral-500 text-sm">Navbar Slot</span>
        </header>

        {/* Phase 5A: Hero */}
        <section className="min-h-screen flex items-center justify-center border-b border-white/10" id="hero">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>HERO SLOT</h1>
            <p className="font-mono text-neutral-400">Terminal Typewriter</p>
          </div>
        </section>

        {/* Phase 5B: About */}
        <section className="min-h-screen flex items-center justify-center border-b border-white/10" id="about">
          <div className="w-full max-w-4xl mx-auto p-8 border border-white/10 rounded-xl bg-black/50 backdrop-blur-sm">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>ABOUT SLOT</h2>
            <p className="font-mono text-neutral-400">macOS Window / CLI Text</p>
          </div>
        </section>

        {/* Phase 5C: Projects */}
        <section className="min-h-screen flex flex-col items-center justify-center border-b border-white/10 p-8" id="projects">
          <h2 className="text-4xl font-bold mb-12" style={{ fontFamily: "var(--font-display)" }}>PROJECTS SLOT</h2>
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-[4/3] border border-white/10 rounded-xl bg-white/5 flex items-center justify-center font-mono text-neutral-500">Project Card</div>
            <div className="aspect-[4/3] border border-white/10 rounded-xl bg-white/5 flex items-center justify-center font-mono text-neutral-500">Project Card</div>
            <div className="aspect-[4/3] border border-white/10 rounded-xl bg-white/5 flex items-center justify-center font-mono text-neutral-500">Project Card</div>
          </div>
        </section>

        {/* Phase 5D: Skills */}
        <section className="min-h-screen flex flex-col items-center justify-center border-b border-white/10 p-8" id="skills">
          <h2 className="text-4xl font-bold mb-12" style={{ fontFamily: "var(--font-display)" }}>SKILLS SLOT</h2>
          <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-6 border border-white/10 rounded-xl bg-white/5 flex items-center justify-center font-mono text-neutral-500">Skill Badge</div>
            <div className="p-6 border border-white/10 rounded-xl bg-white/5 flex items-center justify-center font-mono text-neutral-500">Skill Badge</div>
            <div className="p-6 border border-white/10 rounded-xl bg-white/5 flex items-center justify-center font-mono text-neutral-500">Skill Badge</div>
            <div className="p-6 border border-white/10 rounded-xl bg-white/5 flex items-center justify-center font-mono text-neutral-500">Skill Badge</div>
          </div>
        </section>

        {/* Phase 3: Footer */}
        <footer className="h-64 flex flex-col items-center justify-center p-8 bg-black">
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>FOOTER SLOT</h2>
          <p className="font-mono text-neutral-500 text-sm">Contact Links</p>
        </footer>
      </div>
    </main>
  );
}
