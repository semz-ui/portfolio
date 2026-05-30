import { motion } from "framer-motion";
import { skills } from "../data";
import { fadeUp, stagger } from "../lib/motion";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="container-x">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <span className="eyebrow">Toolkit</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="section-title mt-6 max-w-lg">
                A stack tuned for <span className="gradient-text">speed</span> &amp;
                craft
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-slate-400">
              The tools I reach for to ship reliable, beautiful frontends — from
              first commit to production.
            </p>
          </Reveal>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((group) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group glass relative overflow-hidden rounded-2xl p-6"
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-accent/0 to-accent/0 opacity-0 transition-opacity duration-500 group-hover:from-accent/10 group-hover:opacity-100" />
                <div className="mb-5 grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-soft transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {group.title}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-white/5 bg-white/[0.03] px-2.5 py-1 text-sm text-slate-400 transition-colors group-hover:text-slate-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
