import { socialLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="h-64 flex flex-col items-center justify-center p-8 bg-black border-t border-white/10" id="contact">
      <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "var(--font-display)" }}>
        Let's Connect
      </h2>
      <div className="flex gap-6">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.icon !== "email" ? "_blank" : undefined}
            rel={link.icon !== "email" ? "noopener noreferrer" : undefined}
            className="text-neutral-400 hover:text-white transition-colors font-mono text-sm"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
