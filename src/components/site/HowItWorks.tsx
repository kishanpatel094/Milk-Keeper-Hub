const steps = [
  {
    n: "01",
    title: "Add products & customers",
    desc: "Set up your milk, ghee & paneer catalog and import customers with rates.",
  },
  {
    n: "02",
    title: "Assign delivery boys",
    desc: "Add staff, assign daily routes and track every delivery in real-time.",
  },
  {
    n: "03",
    title: "Track payments & reports",
    desc: "Auto-bill at month-end, send on WhatsApp, and export Excel/PDF reports.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">How it works</div>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Start in 3 simple steps</h2>
          <p className="mt-4 text-muted-foreground">
            No training needed. Get your dairy business online in under 10 minutes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.n} className="relative rounded-3xl border border-border bg-card p-8 shadow-card">
              <div className="text-5xl font-bold text-primary/15">{s.n}</div>
              <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="absolute right-4 top-8 hidden text-2xl text-primary/30 md:block">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
