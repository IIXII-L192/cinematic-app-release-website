import { Reveal } from "./Reveal";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { shots } from "./media";

const gallery = [
  { src: shots.neonSign, alt: "Neon signage shot on Lumen", span: "row-span-2", tag: "Kodachrome 64" },
  { src: shots.portraitRed, alt: "Low-light portrait", span: "", tag: "Portrait · f/1.4" },
  { src: shots.streetLamps, alt: "Empty street at night", span: "", tag: "Night · 8s" },
  { src: shots.aerialCity, alt: "Aerial city skyline at night", span: "row-span-2", tag: "Cinemascope" },
  { src: shots.portraitBlack, alt: "Studio portrait in black", span: "", tag: "Mono · Ilford" },
  { src: shots.peopleStreet, alt: "People crossing a lit street", span: "", tag: "Street · Log3" },
];

export function Showcase() {
  return (
    <section id="showcase" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute left-0 top-1/3 h-[24rem] w-[24rem] rounded-full bg-primary/10 blur-[130px]" />
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary" style={{ fontFamily: "var(--font-mono)" }}>
                Shot on Lumen
              </p>
              <h2 className="max-w-xl leading-tight tracking-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2rem,4vw,3.2rem)" }}>
                Straight out of the phone. No edits.
              </h2>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              Every frame below was captured handheld on a stock Android device using Lumen's default cinematic presets.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={i * 0.05} className={g.span}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-muted">
                <ImageWithFallback
                  src={g.src}
                  alt={g.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span
                  className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[0.7rem] text-white/90 backdrop-blur-md"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {g.tag}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
