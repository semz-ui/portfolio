import { motion } from "framer-motion";
import { experience } from "../data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36">
      <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <span className="eyebrow">Career</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title mt-6 max-w-sm">
              Where I've <span className="gradient-text">grown</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-sm text-slate-400">
              Three years across studios, startups, and freelance — always closer
              to the craft.
            </p>
          </Reveal>
        </div>

        <ol className="relative border-l border-white/10 pl-8">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.company} delay={i * 0.08} className="relative pb-12 last:pb-0">
              {/* Node */}
              <span className="absolute -left-[2.6rem] top-1.5 grid h-4 w-4 place-items-center">
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, delay: i * 0.08 + 0.2 }}
                  className="h-3 w-3 rounded-full bg-gradient-to-br from-accent to-teal ring-4 ring-ink-950"
                />
              </span>

              <div className="group glass rounded-2xl p-6 transition-colors hover:bg-white/[0.05]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {job.role}
                  </h3>
                  <span className="font-mono text-xs text-accent-soft">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-slate-300">
                  {job.company}
                </p>
                <p className="mt-3 text-slate-400">{job.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-lg border border-white/5 bg-white/[0.03] px-2.5 py-1 text-xs text-slate-400"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
