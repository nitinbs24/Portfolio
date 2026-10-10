"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
        isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      )}
    >
      <nav className="flex items-center gap-4 md:gap-6 px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/10 bg-[#16161e]/80 backdrop-blur-md shadow-lg">
        {/* Navigation Links */}
        <div className="flex items-center gap-4 md:gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={cn(
                "text-xs md:text-sm font-mono transition-colors",
                activeSection === link.href ? "text-white" : "text-neutral-500 hover:text-white"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-[1px] h-4 bg-white/20 mx-1 md:mx-2"></div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 md:gap-4">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className={cn(
              "text-xs md:text-sm font-mono px-3 py-1.5 md:px-4 md:py-2 rounded-full border transition-colors",
              activeSection === "#contact"
                ? "bg-white text-black border-white"
                : "border-white/20 text-neutral-300 hover:border-white hover:text-white"
            )}
          >
            Connect
          </a>
          
          <span className="text-white/20 font-mono text-sm hidden md:inline">|</span>

          <a
            href="/docs/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm font-mono text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5"
          >
            Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}
