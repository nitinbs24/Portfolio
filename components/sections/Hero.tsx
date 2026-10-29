"use client";

import { personalInfo } from "@/lib/constants";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    let typingSpeed = isDeleting ? 30 : 100;

    if (!isDeleting && displayText === currentRole) {
      typingSpeed = 2000; // Pause at end of word
      const pause = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      className="min-h-screen flex items-center justify-center relative px-6"
      id="hero"
    >
      <div className="flex flex-col items-center justify-center text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-bold tracking-tight mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {personalInfo.name.split(" ")[0]}{" "}
          <span className="whitespace-nowrap">
            {personalInfo.name.split(" ").slice(1).join(" ")}
          </span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center text-lg md:text-2xl font-mono text-neutral-400 h-8"
        >
          <span className="text-accent mr-3">{">"}</span>
          <span aria-label={personalInfo.roles[roleIndex]}>{displayText}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            className="w-3 h-6 md:h-8 bg-accent ml-1"
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  );
}
