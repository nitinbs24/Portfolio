"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <nav className="flex items-center gap-2 p-1.5 md:p-2 rounded-full border border-white/10 bg-[#151515]/70 backdrop-blur-md shadow-2xl">
          
          {/* Logo */}
          <a 
            href="#top" 
            onClick={(e) => handleNavClick(e, "body")} 
            className="flex items-center justify-center pl-3 pr-2"
            aria-label="Home"
          >
            <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-90">
              <path d="M14 28V12M26 28V12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 12L26 28" stroke="url(#paint0_linear)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="paint0_linear" x1="14" y1="12" x2="26" y2="28" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6366f1" />
                  <stop offset="1" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300",
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

          {/* Desktop Divider */}
          <div className="hidden md:block w-[1px] h-4 bg-white/10 mx-2"></div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex pr-1 items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className={cn(
                "text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 border",
                activeSection === "#contact"
                  ? "bg-[#333] text-white border-white/20 shadow-sm"
                  : "bg-[#222] border-white/5 text-neutral-300 hover:bg-[#2a2a2a] hover:text-white"
              )}
            >
              Connect
            </a>

            <a
              href="/docs/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#222] border border-white/5 text-neutral-300 hover:bg-[#2a2a2a] hover:text-white transition-all duration-300"
              aria-label="Download Resume"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden pr-2 flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white"
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>
      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-48 bg-[#151515] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:hidden z-40"
          >
            {[...NAV_LINKS, { label: "Contact", href: "#contact" }].map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "px-6 py-4 text-sm font-medium transition-colors border-b border-white/5 last:border-b-0",
                    isActive 
                      ? "text-white bg-white/5" 
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      </header>
    </>
  );
}

