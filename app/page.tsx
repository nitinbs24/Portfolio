"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useState, useEffect } from "react";

const ParticleBackground = dynamic(() => import("@/components/3d/ParticleBackground"), {
  ssr: false,
});

export default function Page() {
  const isTouchDevice = useMediaQuery("(hover: none)");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white selection:bg-accent/30 selection:text-white">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        {mounted && !isTouchDevice && <ParticleBackground />}
      </div>

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Phase 3: Navbar */}
        <Navbar />

        {/* Phase 5A: Hero */}
        <Hero />

        {/* Phase 5B: About */}
        <About />

        {/* Phase 5C: Projects */}
        <Projects />

        {/* Phase 5D: Skills */}
        <Skills />

        {/* Phase 3: Footer */}
        <Footer />
      </div>
    </main>
  );
}
