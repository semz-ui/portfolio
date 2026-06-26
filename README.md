# Olotu Michael — Frontend Engineer Portfolio

Personal portfolio site built with **React 19 + TypeScript + Vite + Tailwind CSS**,
richly animated with **Framer Motion**, and deployed to GitHub Pages.

Live: **https://semz-ui.github.io/portfolio/**

## Highlights

- **Animated hero** — per-character headline reveal (3D rotateX stagger), cursor-tracking spotlight, parallax background orbs, and a masked grid.
- **Magnetic buttons** — CTAs and social icons pull toward the cursor with spring physics (`useSpring`).
- **Custom cursor** — trailing ring that scales up over interactive elements (desktop / fine-pointer only).
- **Scroll progress bar** — gradient bar driven by `useScroll` + `useSpring`.
- **3D tilt project cards** — pointer-driven `rotateX/rotateY` with a moving glare highlight.
- **Scroll-reveal sections** — reusable `<Reveal>` wrapper using `whileInView`.
- **Infinite marquee** of the tech stack.
- **Sticky timeline** for experience, animated nav, mobile menu, and an animated contact CTA.
- **Lazy loading** — Hero and chrome render immediately; all below-fold sections are code-split via `React.lazy` + `Suspense` with a skeleton fallback.
- **Accessible** — semantic markup, `prefers-reduced-motion` support, fine-pointer gating.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Customising

All content lives in **`src/data.ts`** — edit `profile`, `stats`, `skills`, `projects`, and `experience`. Brand colors and fonts are in **`tailwind.config.js`**; global styles in **`src/index.css`**.

## Structure

```
src/
├─ data.ts                 # all editable content
├─ lib/motion.ts           # shared Framer Motion variants
└─ components/
   ├─ Hero, Navbar, Marquee, About, Skills,
   ├─ Projects, Experience, Contact, Footer
   ├─ Reveal, MagneticButton, Cursor, ScrollProgress
   ├─ PageSkeleton          # loading states for lazy sections
   └─ BrandIcons            # inline GitHub/LinkedIn/X glyphs
```

## Deployment

Pushes to `main` automatically build and deploy via GitHub Actions (`.github/workflows/deploy.yml`).
