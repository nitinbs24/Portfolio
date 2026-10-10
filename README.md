# Cyber-Minimalist Portfolio

A modern, highly interactive developer portfolio featuring a "Cyber-Minimalist / Terminal Brutalism" aesthetic. The site integrates cinematic 3D effects on desktop with highly optimized, intentional layouts on mobile. It is designed to be fully static, performant, and completely free of backend dependencies.

## Features

- **3D Particle Background**: Immersive React Three Fiber canvas that responds to cursor movement (desktop only).
- **Terminal UI**: Authentic macOS terminal window interface for the "About" section with blinking cursor and CLI aesthetics.
- **Bento Grid Layout**: Sleek, modern card grid for showcasing projects and tools.
- **Smooth Scrolling**: Lenis integration for butter-smooth scrolling without native scroll-hijacking.
- **Scroll Animations**: Staggered viewport reveals using Framer Motion.
- **Fully Responsive**: Mobile-first design that scales beautifully up to ultra-wide displays.
- **Static Export**: Configured to export static HTML/CSS/JS for simple VPS/Nginx hosting.

## Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 15 (App Router)](https://nextjs.org/) | Core React framework, routing, and static export (`output: export`). |
| **Styling** | [Tailwind CSS v3](https://tailwindcss.com/) | Utility-first styling for rapid, responsive UI development. |
| **3D Rendering** | [React Three Fiber](https://r3f.docs.pmnd.rs/) & [Drei](https://github.com/pmndrs/drei) | Declarative Three.js for rendering the interactive particle background. |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) | Complex, physics-based viewport scroll reveals and interaction states. |
| **Scrolling** | [Lenis](https://lenis.darkroom.engineering/) | Smooth scroll library tailored for performant, native-feeling experiences. |
| **Icons** | Custom Inline SVGs | Zero-dependency icons derived from Lucide to prevent version conflicts. |
| **Testing** | [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/) | Unit testing for components and custom hooks (using `jsdom`). |
| **Typography** | [Clash Display](https://www.fontshare.com/fonts/clash-display) & JetBrains Mono | Custom self-hosted fonts for headings and monospace blocks. |

## Running Locally

To run this project on your local machine:

1. **Clone the repository** (or download the source):
   ```bash
   git clone <your-repo-url>
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

## Production Deployment (Static Export)

This project is configured for **Static HTML Export**. It generates an `out/` folder that can be served via Nginx, Apache, GitHub Pages, or Vercel.

1. **Build the static site**:
   ```bash
   npm run build
   ```
2. The compiled assets will be placed in the `out/` directory.

### Nginx Deployment Example
An example Nginx configuration file (`nginx.conf.example`) is provided in the repository. Simply map your Nginx `root` directive to the `out/` directory and configure the `try_files` rule for routing:

```nginx
root /path/to/your/Portfolio/out;
index index.html;

location / {
    try_files $uri $uri.html $uri/ /index.html;
}
```
