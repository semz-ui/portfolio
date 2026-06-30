import { motion } from "framer-motion";

/** Opaque full-screen intro overlay. Sits on top of the live, mounted app so
 *  the hero animation can finish behind it; fades out when dismissed. */
export default function IntroLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-ink-950"
    >
      <div className="relative h-14 w-14">
        <span className="absolute inset-0 animate-ping rounded-full bg-accent/30" />
        <span className="absolute inset-2 rounded-full bg-accent/60" />
      </div>
      <div className="space-y-2 text-center">
        <div className="mx-auto h-3 w-32 animate-pulse rounded-full bg-white/10" />
        <div className="mx-auto h-2 w-20 animate-pulse rounded-full bg-white/5" />
      </div>
    </motion.div>
  );
}
