import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { profile, stats } from "../data";
import { Github, Linkedin } from "./BrandIcons";
import { charChild, charContainer } from "../lib/motion";
import MagneticButton from "./MagneticButton";

function AnimatedHeadline({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <motion.span
      variants={charContainer}
      initial="hidden"
      animate="show"
      className={`inline-block ${className}`}
      aria-label={text}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={charChild}
          className="inline-block"
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const yOrb = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);

  // Pointer-tracked spotlight
  const mx = useMotionValue(50);
  const my = useMotionValue(30);
  const spotlight = useMotionTemplate`radial-gradient(30rem 30rem at ${mx}% ${my}%, rgba(124,92,255,0.18), transparent 70%)`;

  return (
    <section
      id="top"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width) * 100);
        my.set(((e.clientY - r.top) / r.height) * 100);
      }}
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Animated background orbs */}
      <motion.div
        style={{ y: yOrb }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="animate-float absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />
        <div className="absolute right-[10%] top-[30%] h-80 w-80 rounded-full bg-teal/10 blur-[120px]" />
        <div className="absolute bottom-[8%] left-[38%] h-64 w-64 rounded-full bg-fuchsia-500/10 blur-[100px]" />
      </motion.div>

      {/* Spotlight follows cursor */}
      <motion.div
        style={{ background: spotlight }}
        className="pointer-events-none absolute inset-0 -z-10"
      />

      {/* Grid lines */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(50rem 40rem at 50% 30%, black, transparent 80%)",
        }}
      />

      <motion.div style={{ opacity }} className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="eyebrow">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            Available for work
          </span>
          <span className="hidden text-sm text-slate-500 sm:inline">
            {profile.location}
          </span>
        </motion.div>

        <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
          <AnimatedHeadline text="Frontend" />
          <br />
          <AnimatedHeadline text="Engineer." className="gradient-text" />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-slate-400 sm:text-xl"
        >
          {profile.blurb}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            href="#work"
            className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-accent to-accent-glow px-7 py-3.5 font-medium text-white shadow-lg shadow-accent/25"
          >
            <Sparkles size={18} />
            View my work
          </MagneticButton>

          <MagneticButton
            href={`${import.meta.env.BASE_URL}${profile.resumeUrl}`}
            download="Michael_Olotu_Resume.pdf"
            className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.02] px-7 py-3.5 font-medium text-white"
          >
            Download CV
          </MagneticButton>

          <div className="ml-1 flex items-center gap-2">
            {[
              { icon: Github, href: profile.socials.github },
              { icon: Linkedin, href: profile.socials.linkedin },
            ].map(({ icon: Icon, href }, i) => (
              <MagneticButton
                key={i}
                href={href}
                className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.02] text-slate-300 transition-colors hover:text-white"
              >
                <Icon size={18} />
              </MagneticButton>
            ))}
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.dl
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mt-16 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-950/40 p-5 text-center">
              <dt className="font-display text-3xl font-semibold text-white">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                {s.label}
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        style={{ opacity }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 transition-colors hover:text-white"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </motion.a>
    </section>
  );
}
