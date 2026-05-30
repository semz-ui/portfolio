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

  return (
    <Reveal as="article" delay={(index % 2) * 0.08}>
      <motion.a
        href={project.link}
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
            </div>
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-ink-950">
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>
      </motion.a>
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
