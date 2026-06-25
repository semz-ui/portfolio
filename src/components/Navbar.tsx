import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "../data";
import { Github } from "./BrandIcons";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-3xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 ${
          scrolled ? "glass shadow-lg shadow-black/30" : "border border-transparent"
        }`}
      >
        <a
          href="#top"
          className="group flex items-center gap-2 px-2 font-display text-sm font-semibold tracking-tight text-white"
        >
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-accent to-teal text-xs font-bold text-ink-950 transition-transform duration-300 group-hover:rotate-12">
            AR
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-lg px-3 py-1.5 text-sm text-slate-400 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={profile.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source on GitHub"
            className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 text-slate-400 transition-colors hover:text-white"
          >
            <Github size={16} />
          </a>
          <a
            href="#contact"
            className="rounded-xl bg-white px-4 py-1.5 text-sm font-medium text-ink-950 transition-transform hover:scale-105 active:scale-95"
          >
            Let's talk
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-lg text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass absolute top-20 w-[calc(100%-2rem)] max-w-3xl rounded-2xl p-3 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
