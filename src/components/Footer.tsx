import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {2026} {profile.name}. Crafted with React, Tailwind &amp; Framer
          Motion.
        </p>
        <a
          href="#top"
          className="text-sm text-slate-500 transition-colors hover:text-white"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
