import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "../data";
import { Github, Linkedin, Twitter } from "./BrandIcons";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";

const channels = [
  { icon: Github, label: "GitHub", href: profile.socials.github },
  { icon: Linkedin, label: "LinkedIn", href: profile.socials.linkedin },
  { icon: Twitter, label: "Twitter", href: profile.socials.twitter },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="container-x">
        <div className="glass relative overflow-hidden rounded-[2rem] px-8 py-16 text-center sm:px-16 sm:py-24">
          {/* animated glow */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/30 blur-[100px]"
          />

          <Reveal>
            <span className="eyebrow">Let's build something</span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="mx-auto mt-8 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
              Have a project in mind?{" "}
              <span className="gradient-text">Let's make it move.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400">
              I'm currently open to frontend roles and select freelance work.
              Drop me a line and I'll get back within a day.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex justify-center">
              <MagneticButton
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-medium text-ink-950"
              >
                <Mail size={20} />
                {profile.email}
                <ArrowUpRight
                  size={20}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex items-center justify-center gap-3">
              {channels.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.02] text-slate-300 transition-all hover:scale-110 hover:border-accent/40 hover:text-white"
                  data-cursor="hover"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
