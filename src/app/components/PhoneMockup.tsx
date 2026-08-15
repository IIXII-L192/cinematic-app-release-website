import { ImageWithFallback } from "./figma/ImageWithFallback";

interface PhoneMockupProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

/** A cinematic Android-style handset frame wrapping a screenshot. */
export function PhoneMockup({ src, alt, caption, className = "" }: PhoneMockupProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative rounded-[2.4rem] border border-white/12 bg-[#0a0b0f] p-2.5 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)]">
        
        <div className="relative overflow-hidden rounded-[1.9rem] bg-black aspect-[9/19.5]">
          <ImageWithFallback
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
          />
          
          <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-4">
            <div className="flex items-center justify-between text-[0.65rem] tracking-wide text-white/90 font-[var(--font-mono)]">
              <span>9:41</span>
              <span className="flex gap-1 items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                LUMEN
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-xl border border-white/15 bg-black/40 px-3 py-2 backdrop-blur-md">
                <span className="text-[0.7rem] uppercase tracking-[0.2em] text-white/70">Night</span>
                <span className="text-[0.7rem] text-primary">ISO 6400 · f/1.4</span>
              </div>
              <div className="flex items-center justify-center gap-8">
                <div className="h-9 w-9 rounded-full border border-white/25" />
                <div className="h-16 w-16 rounded-full border-4 border-white/90 bg-white/10" />
                <div className="h-9 w-9 rounded-full border border-white/25" />
              </div>
            </div>
          </div>
          
          <div className="absolute left-1/2 top-3 h-2 w-2 -translate-x-1/2 rounded-full bg-black ring-1 ring-white/20" />
        </div>
      </div>
      {caption && (
        <p className="mt-4 text-center text-sm text-muted-foreground">{caption}</p>
      )}
    </div>
  );
}
