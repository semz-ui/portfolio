import {
  Code2,
  Layers,
  Gauge,
  Sparkles,
  Boxes,
  Palette,
} from "lucide-react";

export const profile = {
  name: "Olotu Michael",
  role: "Frontend Engineer",
  tagline: "I build fast, accessible, delightfully animated interfaces.",
  blurb:
    "Frontend engineer with 3+ years crafting production React apps. I obsess over performance budgets, design systems, and the small motion details that make a product feel alive.",
  location: "Remote · Lisbon, PT",
  email: "michaeltimilehin36@gmail.com",
  resumeUrl: "#",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
};

export const stats = [
  { value: "3+", label: "Years shipping" },
  { value: "40+", label: "Projects delivered" },
  { value: "98", label: "Avg. Lighthouse" },
  { value: "12", label: "Design systems" },
];

export const marqueeWords = [
  "React",
  "TypeScript",
  "Next.js",
  "Framer Motion",
  "Tailwind",
  "Design Systems",
  "WebGL",
  "Accessibility",
  "Performance",
  "Node.js",
];

export const skills = [
  {
    icon: Code2,
    title: "Frameworks",
    items: ["React 19", "Next.js", "Remix", "Astro", "Vite"],
  },
  {
    icon: Palette,
    title: "Styling & Motion",
    items: ["Tailwind CSS", "Framer Motion", "CSS-in-JS", "GSAP", "Radix UI"],
  },
  {
    icon: Layers,
    title: "Languages",
    items: ["TypeScript", "JavaScript (ES2024)", "HTML5", "GraphQL", "SQL"],
  },
  {
    icon: Gauge,
    title: "Performance",
    items: ["Core Web Vitals", "Code-splitting", "Lighthouse", "Profiling"],
  },
  {
    icon: Boxes,
    title: "Tooling",
    items: ["Storybook", "Vitest", "Playwright", "Turborepo", "Figma"],
  },
  {
    icon: Sparkles,
    title: "Craft",
    items: ["Design systems", "A11y (WCAG)", "Micro-interactions", "DX"],
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  accent: string;
  year: string;
  link: string;
};

export const projects: Project[] = [
  {
    title: "Aurora Analytics",
    category: "Product · Data Viz",
    description:
      "A real-time analytics dashboard with streaming charts, virtualized tables, and buttery 60fps transitions. Cut initial bundle by 38%.",
    tags: ["Next.js", "TypeScript", "WebSocket", "D3"],
    accent: "from-violet-500/30 to-fuchsia-500/10",
    year: "2025",
    link: "#",
  },
  {
    title: "Nimbus Design System",
    category: "Design System",
    description:
      "Headless, themeable component library powering 6 internal apps. 120+ components, full a11y coverage, documented in Storybook.",
    tags: ["React", "Radix", "Tailwind", "Storybook"],
    accent: "from-teal-400/30 to-cyan-500/10",
    year: "2024",
    link: "#",
  },
  {
    title: "Drift Commerce",
    category: "E-commerce",
    description:
      "Headless storefront with optimistic cart, scroll-linked product reveals, and a 99 Lighthouse score across the funnel.",
    tags: ["Remix", "Framer Motion", "Shopify", "Edge"],
    accent: "from-amber-400/30 to-orange-500/10",
    year: "2024",
    link: "#",
  },
  {
    title: "Lumen Studio",
    category: "Creative · WebGL",
    description:
      "An interactive portfolio builder with a custom shader background and physics-based drag interactions. Featured on Awwwards.",
    tags: ["React Three Fiber", "GLSL", "Zustand"],
    accent: "from-sky-400/30 to-indigo-500/10",
    year: "2023",
    link: "#",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Northwind Labs",
    role: "Senior Frontend Engineer",
    period: "2024 — Present",
    description:
      "Lead frontend for the flagship analytics product. Drove a design-system migration adopted by 4 teams and mentored 3 engineers.",
    stack: ["Next.js", "TypeScript", "Turborepo"],
  },
  {
    company: "Pixel & Co.",
    role: "Frontend Engineer",
    period: "2022 — 2024",
    description:
      "Shipped award-winning marketing sites and a headless commerce platform. Owned motion guidelines and the component library.",
    stack: ["React", "Framer Motion", "Tailwind"],
  },
  {
    company: "Freelance",
    role: "UI Developer",
    period: "2021 — 2022",
    description:
      "Partnered with startups and studios to translate Figma into pixel-perfect, accessible, animated interfaces.",
    stack: ["React", "GSAP", "Figma"],
  },
];
