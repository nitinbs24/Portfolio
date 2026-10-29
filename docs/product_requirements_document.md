# Product Requirements Document (PRD)
**Project Name:** Developer Portfolio Website
**Theme:** Cyber-Minimalist / Terminal Brutalism
**Document Version:** 1.0

## 1. Product Overview
**1.1 Purpose:** 
To build a highly interactive, visually striking personal portfolio website that showcases software engineering skills, projects, and contact information. 

**1.2 Target Audience:** 
Recruiters, engineering managers, potential freelance clients, and open-source collaborators.

**1.3 Value Proposition:** 
The site must immediately communicate technical competence through its aesthetic (IDE/Terminal vibe) and flawless execution of complex modern web mechanics (3D WebGL, custom smooth scrolling, and scroll-triggered animations) without sacrificing mobile usability.

## 2. Functional Requirements
The application will consist of a single-page layout (SPA) divided into the following sections:

**2.1 Hero Section**
* **3D Background:** Interactive particle field rendering behind content via React Three Fiber & Drei (`ParticleBackground.tsx`) with cursor mouse-tracking.
* **Content:** Prominent name display using Monument Extended with smart line-wrap protection keeping initials ("B S") intact on mobile.
* **Interaction:** Typewriter effect cycling through backend engineering roles.
* **Navigation:** Sticky floating pill-shaped navbar with active intersection observers; on mobile, toggles an animated Framer Motion popover dropdown with outside-click dismissal and direct resume download.

**2.2 "About Me" (Terminal Interface)**
* **Component:** A mock macOS terminal window with window controls and bash header.
* **Content:** Command-line prompt (`$ whoami`), personal details, and curated engineering focus areas (Distributed Pipelines, System Architecture, Production Deployments, Open Source).
* **Interaction:** Monospace status indicator with pulsing CLI cursor.

**2.3 Featured Projects (Bento Grid)**
* **Layout:** Asymmetrical responsive grid (1-column on mobile, 2/3-column on desktop).
* **Card Data:** Project Title, architecture description, tech stack tags, and direct repository links (`Obsidian`, `warehouse_3D`, `log-parser`, `Shorts-Generator`).
* **Interaction:** Hover glow effects and card scale transformations on fine-pointer devices.

**2.4 Skills & Tools**
* **Layout:** Categorized grid ("Languages", "Frameworks", "Databases & Search", "DevOps & Tools").
* **Content:** Tag pills displaying technical proficiencies.

**2.5 Footer / Contact**
* **Content:** Centered "04." indicator, "Say Hello" CTA button, and interactive contact cards for Email (`nitinskatte@gmail.com`), LinkedIn (`nitinbs`), and GitHub (`nitinbs24`).
* **Kinetic Typography:** Responsive, viewport-clamped strikethrough layout ("Design Code" / "Deploy") leading to highlighted "INNOVATE".
* **Visual:** Minimalist layout maintaining the cyber-minimalist true black aesthetic.

## 3. Non-Functional Requirements

**3.1 Device Responsiveness & Input Handling**
* **Mobile-First:** All UI components designed for 375px widths first and scaled up via Tailwind CSS breakpoints. No horizontal overflow permitted.
* **Conditional Animation:** Complex pointer effects restricted to fine-pointer devices; touch devices receive streamlined Framer Motion reveals.
* **Scroll Management:** Native touch scrolling preserved on mobile; smooth inertia via Lenis on desktop without CSS snap hijacking.

**3.2 Performance Metrics**
* **Lighthouse Score:** Target 90+ across Performance, Accessibility, Best Practices, and SEO.
* **Frame Rate:** 3D canvas and scroll animations maintain 60 FPS on standard desktop hardware.
* **Favicon & Metadata:** Configured via App Router file-based metadata (`app/icon.png`) and comprehensive OpenGraph tags.

## 4. Technical Stack
* **Framework:** Next.js 15 (App Router) & React 19
* **Language:** TypeScript
* **Styling:** Tailwind CSS v4 (CSS-first `@theme` configuration)
* **Animations:** Framer Motion
* **3D Graphics:** Three.js, React Three Fiber (R3F), Drei
* **Scroll Management:** Lenis (`lenis` / `@studio-freight/react-lenis`)
* **Testing:** Vitest & React Testing Library (jsdom)
* **Deployment Target:** Vercel (with `.npmrc` legacy peer deps support) & Static VPS Export (`output: export`)

## 5. Recommended Folder Structure
For Next.js App Router (TypeScript), Antigravity should build out the following directory tree:

```text
src/
├── app/
│   ├── layout.tsx        # Root layout (Lenis Provider, Meta tags, global fonts)
│   ├── page.tsx          # Main page assembling all sections
│   └── globals.css       # Tailwind directives, True Black background setup
├── components/
│   ├── ui/               # Base reusable components (Buttons, Typography, Tags)
│   ├── 3d/               # React Three Fiber components (ParticleBackground.tsx)
│   ├── layout/           # Navbar.tsx, Footer.tsx
│   └── sections/         # Hero.tsx, AboutTerminal.tsx, ProjectsBento.tsx
├── hooks/
│   ├── useMediaQuery.ts  # Critical for separating mobile/desktop animation logic
│   └── useMousePos.ts    # For glowing border/cursor effects
├── lib/
│   ├── constants.ts      # Project data, skills arrays, links (separates data from UI)
│   └── utils.ts          # Tailwind merge (clsx, twMerge) utilities
└── public/
    └── assets/           # Fonts, external static images
```

## 6. Future Scope (V2)
* **CMS Integration:** Migrate project and skills data to Sanity.io or Contentful to allow updating without code deployments.
* **Blog Section:** Add a `/blog` route using MDX for rendering markdown articles about homelab setups and coding tutorials.
* **Analytics:** Integrate Vercel Web Analytics or PostHog to track visitor interactions and CTA click rates.