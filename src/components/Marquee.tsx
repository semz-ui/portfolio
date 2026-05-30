import { marqueeWords } from "../data";

/** Infinite-scrolling tech stack ribbon. */
export default function Marquee() {
  const row = [...marqueeWords, ...marqueeWords];
  return (
    <div className="relative flex overflow-hidden border-y border-white/5 bg-white/[0.015] py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-ink-950 to-transparent" />
      <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12">
        {row.map((w, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-display text-2xl font-medium text-slate-600 transition-colors hover:text-white sm:text-3xl"
          >
            {w}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
