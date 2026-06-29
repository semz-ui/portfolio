import { profile } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {year} {profile.name}. Crafted with React, Tailwind &amp; Framer
          Motion.
        </p>
        <div className="flex items-center gap-5">
          <a
            href={profile.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 transition-colors hover:text-white"
          >
            View Source
          </a>
          <a
            href="#top"
            className="text-sm text-slate-500 transition-colors hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
