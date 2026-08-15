const cols = [
  { title: "Product", items: ["Features", "Showcase", "Pro plan", "Release notes"] },
  { title: "Company", items: ["About", "Careers", "Press kit", "Contact"] },
  { title: "Support", items: ["Help center", "Community", "Privacy", "Terms"] },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">◐</span>
            <span className="text-lg" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>Lumen</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Cinematic low-light photography for Android. Made by night owls, for night owls.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="text-sm" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>{c.title}</h4>
            <ul className="mt-4 space-y-2.5">
              {c.items.map((i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-muted-foreground transition hover:text-foreground">{i}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row" style={{ fontFamily: "var(--font-mono)" }}>
          <span>© 2026 IIXII™ & Aakarsh Singhal (This is just a template, not a real service)</span>
          <span>Android is a trademark of its respective owner.</span>
        </div>
      </div>
    </footer>
  );
}
