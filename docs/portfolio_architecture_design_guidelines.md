# Portfolio Architecture & Design Guidelines

## 1. Project Overview & Theme
**Theme Name:** Cyber-Minimalist / Terminal Brutalism  
**Vibe:** Modern IDE, CLI terminal, highly technical, structured, and dark.  
**Core Directive:** The site must feel cinematic and weighty on a desktop environment while degrading gracefully to a fast, native-feeling, touch-optimized experience on mobile.

## 2. Tech Stack Requirements
*   **Framework:** Next.js 15 (App Router) & React 19.
*   **Styling:** Tailwind CSS v4 (CSS-first configuration via `@theme` in `globals.css`).
*   **Animations:** Framer Motion (viewport reveals, floating dropdown popovers).
*   **Smooth Scrolling:** Lenis (`lenis` / `@studio-freight/react-lenis`).
*   **3D Elements:** Three.js with `@react-three/fiber` and `@react-three/drei`.
*   **Testing:** Vitest & React Testing Library.

## 3. Typography & Color Palette
**Colors:**
*   **Background:** True Black (`#000000` or `bg-black`).
*   **Surface/Cards:** Dark Neutral (`#171717` to `#0a0a0a` or `bg-neutral-900`/`bg-neutral-950`).
*   **Borders:** Ultra-thin translucent white (`border-white/10` or `border-white/5`).
*   **Accent:** Terminal Green (`#00ff00`) used *sparingly* (e.g., active status dots, cursor highlights).
*   **Text:** Pure White (`text-white`) for headings, Muted Gray (`text-neutral-400`) for paragraphs.

**Typography Strategy:**
*   **Display Font (Headers Only):** `Monument Extended`. Restricted to primary hero name and major section titles (`text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter`).
*   **Primary Sans (Subheadings & UI):** `Clash Display`. Used for project cards, body copy, and UI controls.
*   **Monospace Font:** `JetBrains Mono`. Used for the macOS terminal, skill pills, typewriter effects, section index tags (`01.`, `02.`, etc.), and metadata.

## 4. Layout & Responsive Strategy (Mobile-First)
All Tailwind classes must be written mobile-first. Scale up layout complexity using `md:` and `lg:` breakpoints.

*   **Mobile (Default):** 
    *   1-column layouts (`grid-cols-1`).
    *   Native touch scrolling (no hijacking).
    *   No horizontal overflow (`overflow-x: hidden` root container).
    *   Compact popover menu centered under navigation pill with click-outside dismiss.
*   **Desktop (`md:`, `lg:`):** 
    *   Bento Grid layouts (2 or 3 columns).
    *   Interactive 3D particle background responding to mouse coordinates.
    *   Subtle hover glows and card scale transitions.

## 5. Animation & Scroll Rules (CRITICAL)
To avoid the "jumpy trackpad" issue and mobile frame drops, enforce these strict rules:

### A. Lenis Smooth Scroll Configuration
Wrap the application in Lenis to normalize scroll wheel and trackpad inertia.
*   `lerp: 0.1` (Controls the "weight" of the scroll).
*   `smoothTouch: false` (Leaves native mobile touch scrolling entirely alone).
*   **No CSS Snapping:** Do NOT use `scroll-snap-type` anywhere in the CSS.

### B. Conditional Mobile Animations
Do not run heavy DOM mutations or layout shifts on mobile.
*   **Desktop (`@media (hover: hover) and (pointer: fine)`):** Enable 3D canvas interaction, card glow gradients, and hover transitions.
*   **Mobile (`@media (hover: none)`):** Elements use lightweight Framer Motion reveals (`whileInView={{ opacity: 1, y: 0 }}`).

## 6. Component Specifications

### The Navigation Bar
*   **Pill Container:** Centered floating pill (`fixed top-6 left-1/2 -translate-x-1/2 z-50`) with blur backdrop and section intersection tracking.
*   **Mobile Popover Dropdown:** Toggled via hamburger button (morphing into `X`). Rendered as a sleek, rounded dark dropdown with Framer Motion scale/fade animation, outside-click backdrop detection, and a direct Resume download link.

### The Hero Section
*   **Background:** Fixed `<Canvas>` running R3F with mouse-tracking particle drift (desktop only).
*   **Content:** Display title with initials wrap protection (`whitespace-nowrap` on "B S") ensuring clean line breaking. Typewriter role rotator below.

### The About Section (Terminal Window)
*   **Visuals:** Card styled as a macOS terminal window with window controls and bash header.
*   **Body:** Monospace text displaying `$ whoami`, Name, and engineering focus areas with active status checks.

### Projects & Skills (Bento Grid)
*   **Layout:** Responsive Bento Grid (`grid-cols-1` to `md:grid-cols-3`).
*   **Links:** Live GitHub repository links for all active projects (`nitinbs24/Obsidian`, `nitinbs24/warehouse_3D`, `nitinbs24/log-parser`, `nitinbs24/Shorts-Generator`).
*   **Tags:** Tech stack pills using monospace font.

### Contact & Footer
*   **Indicator & CTA:** Centered "04." indicator and centered "Say Hello" button.
*   **Cards:** Interactive cards for Email, LinkedIn, and GitHub with hover glow effects.
*   **Kinetic Strikethrough:** Responsive, viewport-clamped typography ("Design Code" / "Deploy" with line-through) flowing into "INNOVATE".

## 7. Quality Assurance Checklist
1.  [x] No horizontal scrolling occurs on a 375px viewport.
2.  [x] Touch scrolling on mobile feels native and responsive.
3.  [x] Trackpad scrolling on desktop is smooth via Lenis.
4.  [x] Mobile popover dropdown closes on outside tap and navigation clicks.
5.  [x] Vercel deployment builds cleanly with `.npmrc` peer dependencies configuration.