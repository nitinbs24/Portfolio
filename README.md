# Cyber-Minimalist Portfolio

A modern, highly interactive developer portfolio featuring a "Cyber-Minimalist / Terminal Brutalism" aesthetic. The site integrates cinematic 3D effects on desktop with highly optimized, intentional layouts on mobile. It is designed to be fully static, performant, and completely free of backend dependencies.

## Features

- **3D Particle Background**: Immersive React Three Fiber canvas that responds to cursor movement (desktop only).
- **Floating Pill & Animated Mobile Nav**: Sticky floating navbar with an animated dropdown popover on mobile, complete with outside-tap closing and direct resume download.
- **Terminal UI**: Authentic macOS terminal window interface for the "About" section with blinking cursor and CLI aesthetics.
- **Bento Grid Layout**: Sleek card grid showcasing production projects with direct GitHub repository links.
- **Kinetic Strikethrough Footer**: Responsive typography dynamically scaling across mobile and desktop.
- **Smooth Scrolling**: Lenis integration for butter-smooth scrolling without native scroll-hijacking.
- **Scroll Animations**: Staggered viewport reveals using Framer Motion.
- **Fully Responsive**: Mobile-first design that scales beautifully from 375px screens up to ultra-wide displays.
- **Dual Deployment Options**: Supports both instant Vercel deployment and zero-dependency static HTML exports (`output: export`) for VPS/Nginx hosting.

## Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 15 (App Router)](https://nextjs.org/) & React 19 | Core framework, routing, and static export (`output: export`). |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | CSS-first utility styling and design tokens via `@theme`. |
| **3D Rendering** | [React Three Fiber](https://r3f.docs.pmnd.rs/) & [Drei](https://github.com/pmndrs/drei) | Declarative Three.js for rendering the interactive particle background. |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Physics-based viewport scroll reveals and popover interaction states. |
| **Scrolling** | [Lenis](https://lenis.darkroom.engineering/) | Smooth scroll library tailored for performant, native-feeling experiences. |
| **Icons** | Custom Inline SVGs | Zero-dependency icons derived from Lucide to prevent version conflicts. |
| **Testing** | [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/) | Unit testing for components and custom hooks (using `jsdom`). |
| **Typography** | Monument Extended, [Clash Display](https://www.fontshare.com/fonts/clash-display), JetBrains Mono | Custom self-hosted fonts for display titles, sans text, and monospace blocks. |

## Running Locally

To run this project on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nitinbs24/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   *The site will be available at `http://localhost:3000`.*

4. **Run the test suite** (Optional):
   ```bash
   npm test
   ```

## Production Deployment

### Option A: Vercel (Recommended)
1. Push your repository to GitHub.
2. Import the project into [Vercel](https://vercel.com/).
3. Vercel automatically detects Next.js. The included `.npmrc` file (`legacy-peer-deps=true`) ensures seamless resolution for React 19 dependencies.
4. Click **Deploy**.

### Option B: Static HTML Export (VPS / Nginx)
This project is configured with `output: "export"`. It generates an `out/` folder containing static HTML, CSS, and JS:

1. **Build the static site**:
   ```bash
   npm run build
   ```
2. The compiled assets will be placed in the `out/` directory.

#### Nginx Configuration Example
An example Nginx configuration file (`nginx.conf.example`) is provided in the repository. Map your Nginx `root` directive to the `out/` directory and configure the `try_files` rule:

```nginx
root /path/to/your/Portfolio/out;
index index.html;

location / {
    try_files $uri $uri.html $uri/ /index.html;
}
```
