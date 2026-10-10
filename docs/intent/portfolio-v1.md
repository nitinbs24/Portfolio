# Statement of Intent: Portfolio Website V1

**Confirmed:** 2026-10-10
**Status:** Approved

## Confirmed Intent

- **Outcome:** A Cyber-Minimalist / Terminal Brutalism portfolio website — 3D particle hero, terminal-style about, bento grid projects, skills grid, contact links — that feels cinematic on desktop and native on mobile
- **User:** Recruiters, engineering managers, freelance clients, open-source collaborators
- **Why now:** Establishing a professional web presence to showcase software engineering skills
- **Success:** Visually clean and polished on both desktop and mobile — not just "responsive" but intentionally designed for each form factor. Lighthouse 90+ across all categories, 60fps animations on desktop, smooth native scroll on mobile, no horizontal overflow at 375px
- **Constraint:** Static export (`output: 'export'`), VPS deployment (Nginx serving static files), free fonts only (Clash Display + JetBrains Mono), placeholder data in `constants.ts` swapped later
- **Tech:** Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, React Three Fiber + Drei, Lenis smooth scroll
- **Out of scope:** CMS integration, blog section, analytics, contact form, any backend/API routes — all deferred to V2

## Key Decisions Made During Interview

| Decision | Rationale |
|---|---|
| Static export over Node.js server | No backend needed for V1 — all content is static. Simpler VPS deployment, no Node process to monitor. |
| VPS over Vercel | User preference. Nginx serves static files. |
| Clash Display (free from Fontshare) + JetBrains Mono | Hits the wide, heavyweight, techy aesthetic legally and at zero cost. |
| Placeholder data in `constants.ts` | Unblocks implementation. User swaps in real content later. |
| Outbound contact links only (no form) | mailto, GitHub, LinkedIn links. No backend or third-party form service needed. |
| Intentional mobile design (not just responsive) | Each form factor gets its own considered layout, not just a reflowed desktop. |
