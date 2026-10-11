# Statement of Intent: Portfolio Website V1

**Confirmed:** 2026-10-10
**Status:** Approved

## Confirmed Intent

- **Outcome:** A Cyber-Minimalist / Terminal Brutalism portfolio website — 3D particle hero, terminal-style about, bento grid projects, skills grid, contact links — that feels cinematic on desktop and native on mobile
- **User:** Recruiters, engineering managers, freelance clients, open-source collaborators
- **Why now:** Establishing a professional web presence to showcase software engineering skills
- **Success:** Visually clean and polished on both desktop and mobile — not just "responsive" but intentionally designed for each form factor. Lighthouse 90+ across all categories, 60fps animations on desktop, smooth native scroll on mobile, no horizontal overflow at 375px
- **Constraint:** Dual deployment support (Vercel with `.npmrc` peer dependencies resolution, plus static `output: 'export'` for VPS/Nginx), self-hosted web fonts (Monument Extended, Clash Display, JetBrains Mono), direct repository links in `constants.ts`
- **Tech:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, React Three Fiber + Drei, Lenis smooth scroll
- **Out of scope:** CMS integration, blog section, analytics, contact form, any backend/API routes — all deferred to V2

## Key Decisions Made During Iteration

| Decision | Rationale |
|---|---|
| Dual Deployment (Vercel & VPS Static Export) | Enables zero-friction hosting on Vercel while preserving standalone static HTML builds for custom VPS/Nginx servers. |
| React 19 + `.npmrc` `legacy-peer-deps=true` | Resolves peer dependency conflicts with `@studio-freight/hamo` during cloud build pipelines without blocking latest React features. |
| Monument Extended (Display) + Clash Display (Sans) + JetBrains Mono | Curated typography hierarchy: heavyweight brutalist titles, elegant sans-serif body, and authentic monospace CLI text. |
| Production project links in `constants.ts` | Direct links to GitHub repositories (`Obsidian`, `WMS`, `Shorts-Generator`) and direct professional contact channels. |
| Outbound contact links only (no form) | Direct mailto, GitHub, and LinkedIn links. Eliminates backend form overhead and third-party dependency vulnerabilities. |
| Intentional mobile design (not just responsive) | Animated floating popover dropdown, outside-tap dismiss, dynamic typography scaling, and initials line-wrap protection. |
