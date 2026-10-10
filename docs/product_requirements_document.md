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
* **3D Background:** Interactive particle field rendering behind the content.
* **Content:** Prominent name display using an extended display font.
* **Interaction:** Typewriter effect cycling through professional roles (e.g., `> Full Stack Developer |`, `> AI Enthusiast |`).
* **Navigation:** Sticky floating pill-shaped navbar that appears upon scrolling past the hero section.

**2.2 "About Me" (Terminal Interface)**
* **Component:** A mock macOS terminal window.
* **Content:** Command-line style prompt (`$ whoami`) followed by a brief bio written in a monospaced font.
* **Interaction:** Text can load sequentially as if being typed out when scrolled into view.

**2.3 Featured Projects (Bento Grid)**
* **Layout:** Asymmetrical grid (Bento box style).
* **Card Data:** Project Title, brief description, tech stack tags (pills), and a link to the live site/GitHub repository.
* **Interaction:** Hovering over a card slightly scales it up and applies a subtle border glow.

**2.4 Skills & Tools**
* **Layout:** Categorized grid (e.g., "Languages," "Frameworks," "DevOps," "Distros").
* **Content:** Simple, clear lists or badges displaying proficiencies. 

**2.5 Footer / Contact**
* **Content:** "Let's Connect" call to action, email link, GitHub link, and LinkedIn link.
* **Visual:** Minimalist layout maintaining the true black aesthetic.

## 3. Non-Functional Requirements

**3.1 Device Responsiveness & Input Handling**
* **Mobile-First:** All UI components must be designed for 375px widths first and scaled up via CSS Grid/Flexbox breakpoints.
* **Conditional Animation:** Device input capabilities must dictate animations. Complex scrubbing and 3D card tilts are restricted to fine-pointer devices (mice/trackpads).
* **Scroll Hijacking:** Strictly prohibited on mobile. The site must fall back to native iOS/Android touch scrolling. 

**3.2 Performance Metrics**
* **Lighthouse Score:** Target 90+ across Performance, Accessibility, Best Practices, and SEO.
* **Frame Rate:** 3D canvas and scroll animations must maintain 60 FPS on standard desktop hardware. 
* **Asset Optimization:** Next.js `<Image>` component must be used for any static assets to ensure WebP formatting and lazy loading.

## 4. Technical Stack
* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **3D Graphics:** Three.js, React Three Fiber (R3F), Drei
* **Scroll Management:** `@studio-freight/react-lenis`

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