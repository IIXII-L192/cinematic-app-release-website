import { Reveal } from "./Reveal";
import { PlayBadge } from "./PlayBadge";

export function DownloadCTA() {
  return (
    <section id="download" className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[150px]" />
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary" style={{ fontFamily: "var(--font-mono)" }}>
            Available now
          </p>
          <h2 className="leading-[1.02] tracking-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2.4rem,6vw,4.5rem)" }}>
            The night is
            <br />
            <span className="text-primary">yours to direct.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-lg text-muted-foreground">
            Download Lumen free and shoot your first cinematic frame in under a minute.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <PlayBadge />
            <button className="rounded-xl border border-white/15 px-5 py-3 text-sm text-foreground transition hover:border-primary/60">
              Scan QR to install
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
