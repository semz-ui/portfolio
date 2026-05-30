import { motion } from "framer-motion";
import { profile } from "../data";
import { fadeUp, stagger } from "../lib/motion";
import Reveal from "./Reveal";

const principles = [
  {
    n: "01",
    title: "Performance is a feature",
    body: "I treat bundle size and Core Web Vitals as product requirements, not afterthoughts.",
  },
  {
    n: "02",
    title: "Accessible by default",
    body: "Semantic markup, keyboard paths, and reduced-motion support ship with every component.",
  },
  {
    n: "03",
    title: "Motion with meaning",
    body: "Animation should guide attention and explain change — never distract from the task.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <Reveal>
            <span className="eyebrow">About me</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title mt-6 max-w-md">
              Turning ideas into{" "}
              <span className="gradient-text">interfaces people love</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-400">
              For the past three years I've helped startups and studios ship
              polished web apps. I bridge design and engineering — comfortable in
              Figma, fluent in React, and happiest when a hard interaction finally
              feels effortless.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href={`mailto:${profile.email}`}
              className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-accent-soft underline-offset-4 hover:underline"
            >
              {profile.email}
            </a>
          </Reveal>
        </div>

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-4"
        >
          {principles.map((p) => (
            <motion.li
              key={p.n}
              variants={fadeUp}
              className="group glass relative overflow-hidden rounded-2xl p-6 transition-colors hover:bg-white/[0.05]"
            >
              <div className="absolute -right-4 -top-6 font-display text-7xl font-bold text-white/[0.04] transition-colors group-hover:text-accent/10">
                {p.n}
              </div>
              <h3 className="font-display text-xl font-semibold text-white">
                {p.title}
              </h3>
              <p className="mt-2 max-w-md text-slate-400">{p.body}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
