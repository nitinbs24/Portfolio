"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll("section[id], footer[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-2 p-1.5 md:p-2 rounded-full border border-white/10 bg-[#151515] shadow-2xl">
        
        {/* Logo */}
        <a 
          href="#top" 
          onClick={(e) => handleNavClick(e, "body")} 
          className="flex items-center justify-center pl-3 pr-2"
          aria-label="Home"
        >
          <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-90">
            <path d="M12 28L20 12L28 28" stroke="url(#paint0_linear)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 12L28 28L36 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="paint0_linear" x1="12" y1="28" x2="20" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6366f1" />
                <stop offset="1" stopColor="#a855f7" />
              </linearGradient>
            </defs>
          </svg>
        </a>

        {/* Navigation Links */}
        <div className="flex items-center">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "text-sm font-medium px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300",
                  isActive 
                    ? "bg-[#2a2a2a] text-white shadow-sm border border-white/10" 
                    : "text-neutral-400 hover:text-white border border-transparent"
                )}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-[1px] h-4 bg-white/10 mx-2"></div>

        {/* Connect Button */}
        <div className="pr-1">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className={cn(
              "text-sm font-medium px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 border",
              activeSection === "#contact"
                ? "bg-[#333] text-white border-white/20 shadow-sm"
                : "bg-[#222] border-white/5 text-neutral-300 hover:bg-[#2a2a2a] hover:text-white"
            )}
          >
            Connect
          </a>
        </div>

      </nav>
    </header>
  );
}
