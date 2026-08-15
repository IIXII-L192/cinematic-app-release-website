import { motion } from "motion/react";
import { PhoneMockup } from "./PhoneMockup";
import { PlayBadge } from "./PlayBadge";
import { shots } from "./media";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24">
      
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-[#00d0ff]/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent,#06070a_75%)]" />

      <div className="mx-auto grid max-w-[1200px] items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Now on Android · v2.0
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.05 }}
            className="max-w-2xl leading-[0.95] tracking-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)" }}
          >
            Shoot the night
            <br />
            like a <span className="text-primary">film set.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="mt-7 max-w-lg text-lg text-muted-foreground"
          >
            Lumen turns your phone into a cinema-grade low-light camera.
            Computational long exposure, cinematic color science, and real 10-bit
            Log — all in your pocket.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <PlayBadge />
            <a
              href="#showcase"
              className="inline-flex items-center gap-2 text-sm text-foreground/90 transition hover:text-primary"
            >
              Watch the reel
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/15">▶</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex items-center gap-6 text-sm text-muted-foreground"
          >
            <span>★★★★★ 4.9 · 128k reviews</span>
            <span className="h-4 w-px bg-border" />
            <span>2.4M+ downloads</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 4 }}
          animate={{ opacity: 1, y: 0, rotate: 3 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="relative mx-auto w-[16rem] sm:w-[18rem]"
        >
          <PhoneMockup src={shots.cityNight} alt="Lumen night mode capturing a neon city street" />
        </motion.div>
      </div>
    </section>
  );
}
