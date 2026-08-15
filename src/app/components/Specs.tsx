import { Reveal } from "./Reveal";

const stats = [
  { value: "40", unit: "frames", label: "stacked per NightSense capture" },
  { value: "10-bit", unit: "", label: "Log color depth, over 1B colors" },
  { value: "4 min", unit: "", label: "maximum computed exposure" },
  { value: "200ms", unit: "", label: "RAW + JPEG write speed" },
];

const requirements = [
  ["Platform", "Android 12 and above"],
  ["Size", "84 MB"],
  ["Sensors", "Works with any main + ultrawide"],
  ["Formats", "RAW / DNG · HEIF · H.265 Log"],
  ["Price", "Free · Pro from $4.99/mo"],
  ["Languages", "18 including EN, ES, JP, DE"],
];

export function Specs() {
  return (
    <section id="specs" className="mx-auto max-w-[1200px] px-6 py-28">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.07}>
            <div className="h-full rounded-2xl border border-white/10 bg-card p-6">
              <div className="flex items-baseline gap-1">
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2.2rem,4vw,3rem)" }} className="text-primary leading-none">
                  {s.value}
                </span>
                {s.unit && <span className="text-sm text-muted-foreground">{s.unit}</span>}
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-card">
          <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
            {requirements.map(([k, v]) => (
              <div key={k} className="flex items-center justify-between gap-4 p-5">
                <span className="text-sm text-muted-foreground">{k}</span>
                <span className="text-right text-sm" style={{ fontFamily: "var(--font-mono)" }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
