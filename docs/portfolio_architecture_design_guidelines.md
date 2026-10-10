# Portfolio Architecture & Design Guidelines

## 1. Project Overview & Theme
**Theme Name:** Cyber-Minimalist / Terminal Brutalism  
**Vibe:** Modern IDE, CLI terminal, highly technical, structured, and dark.  
**Core Directive:** The site must feel cinematic and weighty on a desktop environment while degrading gracefully to a fast, native-feeling, touch-optimized experience on mobile.

## 2. Tech Stack Requirements
*   **Framework:** React (Next.js App Router recommended).
*   **Styling:** Tailwind CSS.
*   **Animations:** Framer Motion.
*   **Smooth Scrolling:** `@studio-freight/react-lenis` (Crucial for normalizing trackpad vs. arrow key behavior).
*   **3D Elements:** `@react-three/fiber` and `@react-three/drei`.

## 3. Typography & Color Palette
**Colors:**
*   **Background:** True Black (`#000000` or `bg-black`). Do not use dark blue or purple gradients.
*   **Surface/Cards:** Dark Neutral (`#171717` to `#0a0a0a` or `bg-neutral-900`/`bg-neutral-950`).
*   **Borders:** Ultra-thin translucent white (`border-white/10` or `border-white/5`).
*   **Accent:** Terminal Green (`#00ff00`) used *sparingly* (e.g., terminal cursor, active status dots).
*   **Text:** Pure White (`text-white`) for headings, Muted Gray (`text-neutral-400`) for paragraphs.

**Typography:**
*   **Display Font (Headers):** `Clash Display Expanded`, `Monument Extended`, or a similar wide, heavyweight sans-serif. Used for the massive hero text and section titles.
*   **Body/Tech Font:** `JetBrains Mono`, `Geist Mono`, or `Fira Code`. Used for all terminal windows, skill tags, typewriter effects, and small metadata.

## 4. Layout & Responsive Strategy (Mobile-First)
All Tailwind classes must be written mobile-first. Scale up layout complexity using `md:` and `lg:` breakpoints.

*   **Mobile (Default):** 
    *   1-column layouts (`grid-cols-1`).
    *   Native touch scrolling (no hijacking).
    *   Simplified animations (fade-in only).
*   **Desktop (`md:`, `lg:`):** 
    *   Bento Grid layouts (2 or 3 columns).
    *   Hover states enabled.
    *   Complex Framer Motion scroll reveals.

## 5. Animation & Scroll Rules (CRITICAL)
To avoid the "jumpy trackpad" issue and mobile frame drops, enforce these strict rules:

### A. Lenis Smooth Scroll Configuration
Wrap the application in Lenis to normalize scroll wheel and trackpad inertia.
*   `lerp: 0.1` (Controls the "weight" of the scroll).
*   `smoothTouch: false` (MANDATORY: Leaves native mobile touch scrolling entirely alone).
*   **No CSS Snapping:** Do NOT use `scroll-snap-type` anywhere in the CSS.

### B. Conditional Mobile Animations
Do not run heavy DOM mutations or layout shifts on mobile. Create a custom hook or use CSS media queries to separate logic.
*   **Desktop (`@media (hover: hover) and (pointer: fine)`):** Enable 3D card tilts, magnetic cursors, and parallax scroll effects.
*   **Mobile (`@media (hover: none)`):** Strip complex interactions. Elements should simply `opacity: 0` to `opacity: 1` and `translateY(20px)` to `translateY(0)` as they enter the viewport (`whileInView` in Framer Motion).

## 6. Component Specifications

### The Hero Section
*   **Background:** A fixed, full-screen `<Canvas>` using React Three Fiber. Implement Drei's `<Stars>` or `<Sparkles>` component with a slow rotation to create a drifting space/particle effect. Place this at `z-index: -1`.
*   **Content:** Centered, massive Display font for the name. Below it, a typewriter effect cycling through roles (e.g., `> Software Engineer |`, `> DevOps |`) using the Monospace font.

### The About Section (Terminal Window)
*   **Visuals:** Design a card to look like a macOS terminal.
*   **Header:** Small top bar with three dots (red, yellow, green) on the left, and terminal title centered (`bash - user@portfolio: ~`).
*   **Body:** Monospace text mimicking a CLI interface (e.g., `$ whoami`, returning the about text).

### Projects & Skills (Bento Grid)
*   **Layout:** CSS Grid. Mobile: `grid-cols-1 gap-4`. Desktop: `md:grid-cols-3 gap-6`.
*   **Card Styling:** `bg-neutral-900 border border-white/10 rounded-2xl p-6`.
*   **Hover Effects (Desktop Only):** Subtle scale-up (`hover:scale-[1.02]`) and a slight glow effect (using a radial gradient background that follows the mouse cursor, or a simple `hover:border-white/30`).
*   **Tags:** Tech stack pills inside project cards must use the Monospace font with a slightly lighter background (e.g., `bg-neutral-800 text-xs px-2 py-1 rounded`).

## 7. Quality Assurance Checklist for AI Agent
When running the browser subagent to verify the build, ensure:
1.  [ ] No horizontal scrolling occurs on a 375px viewport.
2.  [ ] Touch scrolling on mobile feels native and responsive (not sluggish or delayed).
3.  [ ] Trackpad scrolling on desktop is smooth and does not snap violently to sections.
4.  [ ] The Three.js canvas resizes correctly without stretching when the browser window is resized.