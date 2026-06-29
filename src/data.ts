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
  resumeUrl: "Michael_Olotu_Resume.pdf",
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
  storeLinks?: { playStore?: string; appStore?: string };
};

export const projects: Project[] = [
  {
    title: "Prompt (Grade Up)",
    category: "EdTech · Cross-Platform",
    description:
      "Architected and led a cross-platform EdTech app (iOS, Android, Web) on React Native + Expo, owning full technical direction end-to-end. Overhauled CI/CD off Bitrise to a self-managed Jenkins + DigitalOcean + Fastlane stack — eliminating $200+/month in vendor cost. Engineered an offline-first data layer with WatermelonDB + GraphQL sync reconciliation for low-connectivity regions.",
    tags: ["React Native", "Expo", "TypeScript", "WatermelonDB", "GraphQL", "Jenkins", "Fastlane"],
    accent: "from-violet-500/30 to-fuchsia-500/10",
    year: "2025",
    link: "#",
    storeLinks: {
      playStore: "https://play.google.com/store/apps/details?id=com.promoprep.gradeup&pcampaignid=web_share",
      appStore: "https://apps.apple.com/us/app/gradeup-study-smarter/id6762120966",
    },
  },
  {
    title: "TPay (Taxtech)",
    category: "Fintech · Web + Mobile",
    description:
      "Owned and shipped a production fintech platform serving 10,000+ users — full payroll, payslip, and pension remittance flows, seven statutory tax types (PAYE, VAT, WHT, CIT, NHF, ECSL, TET), wallet, invoicing, payment links, and third-party API integrations.",
    tags: ["React", "TypeScript", "Tailwind", "Redux Toolkit"],
    accent: "from-teal-400/30 to-cyan-500/10",
    year: "2024",
    link: "https://tpay.com.ng/",
    storeLinks: {
      playStore: "https://play.google.com/store/apps/details?id=ng.com.taxtech.tpay&pcampaignid=web_share",
      appStore: "https://apps.apple.com/us/app/tpay-payments-bills/id1535069197",
    },
  },
  {
    title: "Foodash",
    category: "Food Delivery · Mobile",
    description:
      "Built and launched a full food delivery app solo while still in university — owned architecture, implementation, and App Store / Play Store deployment end-to-end. Integrated Paystack payment gateway including webhook reconciliation to eliminate failed and stuck transactions.",
    tags: ["React Native", "Expo", "Paystack", "Offline Caching"],
    accent: "from-amber-400/30 to-orange-500/10",
    year: "2022",
    link: "#",
    storeLinks: {
      playStore: "https://play.google.com/store/apps/details?id=com.foodash.client",
      appStore: "https://apps.apple.com/ng/app/foodash/id6538722491",
    },
  },
  {
    title: "Chess in Slums Africa",
    category: "Non-profit · Volunteer",
    description:
      "Built and maintained the public-facing site and internal admin dashboard supporting fundraising and program operations. Designed a donation tracking system, CMS modules, and volunteer management tooling — replacing manual workflows with self-serve admin capabilities.",
    tags: ["React", "TypeScript", "Tailwind"],
    accent: "from-sky-400/30 to-indigo-500/10",
    year: "2023",
    link: "https://chessinslumsafrica.com/",
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
    role: "Mobile Engineer (Contract, Remote)",
    period: "Dec 2025 — Jun 2026",
    description:
      "Architected and led a cross-platform EdTech app (iOS, Android, Web) on React Native + Expo, owning full technical direction end-to-end. Overhauled CI/CD off Bitrise to a self-managed Jenkins + DigitalOcean + Fastlane stack — eliminating $200+/month in vendor cost while delivering faster builds. Engineered an offline-first data layer with WatermelonDB + GraphQL sync reconciliation for low-connectivity regions. Established the quality bar via Detox E2E, Jest, and enforced lint/commit pipelines. Integrated Sentry, Amplitude, and AppsFlyer for crash triage and product analytics. Mentored an intern engineer through onboarding and code review.",
    stack: ["React Native", "Expo", "TypeScript", "WatermelonDB", "GraphQL", "Jenkins", "Fastlane", "Detox", "Sentry"],
  },
  {
    company: "Taxtech",
    role: "Frontend Engineer",
    period: "Jul 2024 — Present",
    description:
      "Shipped six production products across fintech, GovTech, and HR SaaS. TPay — a platform serving 10,000+ users with full payroll, payslip, pension, seven statutory tax types, wallet, invoicing, and payment links. TMonee — consumer PWA for bills, levies, and loan management. TMonee Admin + 247 — back-office and loan-underwriting dashboards. THr — end-to-end HR SaaS covering employee records, leave, attendance, and payroll-linked workflows. Oredo Revenue — government tax-revenue system for Oredo LGA with OredoPay public portal and two field enumeration platforms. TBook — a React Native mobile fintech app covering payroll, wallet, loans, and investments.",
    stack: ["React", "React Native", "TypeScript", "Tailwind", "Redux Toolkit"],
  },
  {
    company: "Foodash",
    role: "React Native Developer",
    period: "Mar 2022 — Jun 2023",
    description:
      "Built and launched a full food delivery app solo while still in university — owned the entire product from architecture through App Store and Play Store deployment. Integrated Paystack payment gateway end-to-end, including webhook reconciliation to eliminate failed and stuck transactions.",
    stack: ["React Native", "Expo", "Paystack", "REST APIs"],
  },
  {
    company: "Side Hustle",
    role: "Frontend Developer (Intern)",
    period: "Apr 2021 — Feb 2022",
    description:
      "Contributed production features to a MERN-stack application as part of a small, fast-moving team. Built reusable UI components and integrated backend APIs.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
  },
];
