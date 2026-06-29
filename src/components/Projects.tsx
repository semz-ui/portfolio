import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data";
import { projects } from "../data";
import Reveal from "./Reveal";

function StoreButtons({ storeLinks }: { storeLinks: NonNullable<Project["storeLinks"]> }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {storeLinks.playStore && (
        <a
          href={storeLinks.playStore}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1.5 rounded-xl border border-white/15 bg-black/30 px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-sm transition-colors hover:border-white/30 hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
            <path d="M3.18 23.76a1.52 1.52 0 0 0 1.59-.17l.1-.08 8.37-8.37-2.3-2.3-7.76 8.92zM20.2 10.56l-2.72-1.56-2.62 2.62 2.62 2.61 2.74-1.57a1.55 1.55 0 0 0 0-2.1zM4.77.41a1.52 1.52 0 0 0-1.59-.16v23.5a1.52 1.52 0 0 0 1.59-.17l.1-.08 9.37-11.75L4.87.49z" />
          </svg>
          Play Store
        </a>
      )}
      {storeLinks.appStore && (
        <a
          href={storeLinks.appStore}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-1.5 rounded-xl border border-white/15 bg-black/30 px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-sm transition-colors hover:border-white/30 hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          App Store
        </a>
      )}
    </div>
  );
}

function TiltCard({ project, index }: { project: Project; index: number }) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 18 });
  const sry = useSpring(ry, { stiffness: 200, damping: 18 });

  // Glare position
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const glare = useMotionTemplate`radial-gradient(20rem 20rem at ${gx}% ${gy}%, rgba(255,255,255,0.10), transparent 60%)`;

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 12);
    rx.set((0.5 - py) * 12);
    gx.set(px * 100);
    gy.set(py * 100);
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  const hasStoreLinks = !!project.storeLinks;
  const isLinked = project.link !== "#";
  const Wrapper = isLinked ? motion.a : motion.div;
  const wrapperProps = isLinked ? { href: project.link } : {};

  return (
    <Reveal as="article" delay={(index % 2) * 0.08}>
      <Wrapper
        {...(wrapperProps as React.ComponentProps<typeof motion.a>)}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX: srx, rotateY: sry, transformPerspective: 1000 }}
        className="group relative block h-full overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60 p-px"
        data-cursor="hover"
      >
        <div className="relative h-full rounded-[calc(1.5rem-1px)] p-7 sm:p-9">
          {/* gradient wash */}
          <div
            className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${project.accent} opacity-60 transition-opacity duration-500 group-hover:opacity-100`}
          />
          {/* glare */}
          <motion.div
            style={{ background: glare }}
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />

          <div className="flex items-start justify-between">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              {project.category}
            </span>
            <span className="font-mono text-xs text-slate-500">
              {project.year}
            </span>
          </div>

          <div className="mt-16 flex items-end justify-between gap-4 sm:mt-24">
            <div>
              <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-3 max-w-md text-slate-300/90">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300 backdrop-blur-sm"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              {project.storeLinks && <StoreButtons storeLinks={project.storeLinks} />}
            </div>
            {isLinked && (
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-ink-950">
                <ArrowUpRight size={20} />
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div className="container-x">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <Reveal>
              <span className="eyebrow">Selected work</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="section-title mt-6">
                Things I've <span className="gradient-text">shipped</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <span className="hidden font-mono text-sm text-slate-500 sm:block">
              ({String(projects.length).padStart(2, "0")})
            </span>
          </Reveal>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((p, i) => (
            <TiltCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
