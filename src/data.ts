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
  tagline: "I build production-grade React apps — fast, typed, and ready to scale.",
  blurb:
    "Frontend engineer with 4+ years shipping user-facing products across fintech, edtech, and HR SaaS. I specialise in React + TypeScript, component-driven design systems, and cross-platform React Native when products need mobile.",
  location: "Lagos, Nigeria · open to remote (AEST / EU / US)",
  email: "michaeltimilehin36@gmail.com",
  resumeUrl: "#",
  sourceUrl: "https://github.com/semz-ui/portfolio",
  socials: {
    github: "https://github.com/semz-ui",
    linkedin: "https://linkedin.com/in/michael-olotu-936553221",
    twitter: "https://twitter.com",
  },
};

export const stats = [
  { value: "4+", label: "Years shipping" },
  { value: "10+", label: "Products shipped" },
  { value: "3", label: "Platforms (web, iOS, Android)" },
  { value: "3", label: "Industries served" },
];

export const marqueeWords = [
  "React",
  "TypeScript",
  "Next.js",
  "React Native",
  "Tailwind",
  "Design Systems",
  "GraphQL",
  "Expo",
  "Apollo Client",
  "Zod",
];

export const skills = [
  {
    icon: Code2,
    title: "Frontend Web",
    items: ["React", "TypeScript (strict)", "Next.js", "Tailwind", "Redux Toolkit", "Zustand", "TanStack Query v5"],
  },
  {
    icon: Palette,
    title: "UI & Design Systems",
    items: ["Component-driven architecture", "Design-system layers", "Responsive layout", "A11y", "Modern UI patterns"],
  },
  {
    icon: Layers,
    title: "Data & API",
    items: ["Apollo Client v4", "GraphQL Codegen", "REST", "Zod validation", "Offline-first caching"],
  },
  {
    icon: Gauge,
    title: "Cross-Platform Mobile",
    items: ["React Native", "Expo (SDK 54)", "Expo Router", "NativeWind", "WatermelonDB"],
  },
  {
    icon: Boxes,
    title: "Quality & Release",
    items: ["Jest", "React Testing Library", "Detox", "ESLint + Prettier + Husky", "GitHub Actions", "Sentry", "Amplitude"],
  },
  {
    icon: Sparkles,
    title: "Auth & Infra",
    items: ["OAuth (Google / Apple / Facebook)", "JWT + OTP", "Firebase", "Node.js", "Git"],
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
    title: "Prompt (Grade Up)",
    category: "EdTech · Cross-Platform",
    description:
      "Exam-prep app shipping web, iOS, and Android from one TypeScript codebase. MVVM architecture across 18 feature modules; Apollo Client v4 + GraphQL Codegen with offline-first caching so the UI stays usable on flaky networks.",
    tags: ["React", "React Native", "Expo", "TypeScript", "Apollo Client", "GraphQL"],
    accent: "from-violet-500/30 to-fuchsia-500/10",
    year: "2025",
    link: "#",
  },
  {
    title: "TPay (Taxtech)",
    category: "Fintech · Web",
    description:
      "Loan application, approval, repayment, and salary-disbursement UI. Reduced disbursement errors through stricter client-side validation and cohesive component patterns shared across the product suite.",
    tags: ["React", "TypeScript", "Tailwind", "Redux Toolkit"],
    accent: "from-teal-400/30 to-cyan-500/10",
    year: "2024",
    link: "#",
  },
  {
    title: "Chowopa",
    category: "Food Delivery · Mobile",
    description:
      "Solo-built the React Native app UI: menu browsing, order placement, and real-time delivery tracking integrated with backend restaurant APIs. Offline caching and image/list optimisations kept the app smooth on 2G/3G networks.",
    tags: ["React Native", "Expo", "Offline Caching"],
    accent: "from-amber-400/30 to-orange-500/10",
    year: "2022",
    link: "#",
  },
  {
    title: "Chess in Slums Africa",
    category: "Non-profit · Volunteer",
    description:
      "Built the public website and staff admin dashboard for a Lagos-based non-profit. The dashboard handles donation tracking, content management, and volunteer communications.",
    tags: ["React", "TypeScript", "Tailwind"],
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
    company: "Grade Up",
    role: "Frontend / Cross-Platform Engineer (Contract)",
    period: "Dec 2025 — Present",
    description:
      "Architected Prompt, an EdTech app on React + React Native + Expo shipping web, iOS, and Android from one TypeScript codebase. Designed MVVM architecture across 18 feature modules, built a custom CP* design-system layer, and established full quality gates (Jest, RTL, Detox, ESLint, Husky).",
    stack: ["React", "React Native", "Expo", "TypeScript", "Apollo Client", "GraphQL"],
  },
  {
    company: "Taxtech",
    role: "Frontend Engineer",
    period: "Jul 2024 — Present",
    description:
      "Shipped TPay (fintech), TLearn (e-learning web + mobile), and THr (HR services). Drove frontend performance optimisations and codified reusable component patterns adopted across the entire product suite.",
    stack: ["React", "TypeScript", "React Native", "Tailwind", "Redux Toolkit"],
  },
  {
    company: "Chowopa",
    role: "Frontend / React Native Developer",
    period: "Mar 2022 — Jun 2023",
    description:
      "Solo-built the mobile app UI covering menu browsing, order placement, and real-time delivery tracking. Implemented offline caching and image/list optimisations for 2G/3G target markets.",
    stack: ["React Native", "Expo", "REST APIs"],
  },
  {
    company: "Side Hustle",
    role: "Frontend Developer (Internship)",
    period: "Apr 2021 — Feb 2022",
    description:
      "Shipped production features and reusable UI components for a full-stack MERN application as part of a 5-engineer team.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
  },
];
