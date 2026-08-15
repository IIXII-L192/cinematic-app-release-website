import { Moon, Aperture, Film, Layers, Zap, Palette } from "lucide-react";
import { Reveal } from "./Reveal";
import { PhoneMockup } from "./PhoneMockup";
import { shots } from "./media";

const features = [
  { icon: Moon, title: "NightSense™ engine", body: "Stacks up to 40 frames in real time to pull clean detail out of near-total darkness — no tripod required." },
  { icon: Film, title: "10-bit Log capture", body: "Record flat, gradeable footage with over a billion colors. Bring it straight into your editor." },
  { icon: Palette, title: "Cinematic LUTs", body: "24 hand-built color profiles from working colorists. Preview them live before you shoot." },
  { icon: Aperture, title: "Manual glass", body: "Full control over ISO, shutter, focus and white balance with tactile on-screen dials." },
  { icon: Layers, title: "Long-exposure stacks", body: "Paint light trails and silky water with computed exposures from 1s to 4 minutes." },
  { icon: Zap, title: "Instant RAW", body: "48MP RAW + JPEG written in under 200ms, so you never miss the moment." },
];

export function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-[1200px] px-6 py-28">
      <Reveal>
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary" style={{ fontFamily: "var(--font-mono)" }}>
          Built for the dark
        </p>
        <h2 className="max-w-2xl leading-tight tracking-tight" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(2rem,4vw,3.2rem)" }}>
          A full camera department, running on silicon.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal className="order-2 lg:order-1">
          <div className="mx-auto w-[15rem] sm:w-[17rem]">
            <PhoneMockup src={shots.carsRoad} alt="Long exposure light trails captured with Lumen" />
          </div>
        </Reveal>

        <div className="order-1 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:order-2">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <div className="group">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl border border-white/12 bg-white/[0.04] text-primary transition group-hover:border-primary/50 group-hover:bg-primary/10">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
