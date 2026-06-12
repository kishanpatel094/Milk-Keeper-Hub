import { Clock, Leaf, Activity, Languages } from "lucide-react";

const items = [
  { icon: Clock, title: "Save 2+ hours daily", desc: "Skip notebooks and calculators. Auto-billing handles month-end in minutes." },
  { icon: Leaf, title: "Zero paper", desc: "Everything stored safely in the cloud. Never lose a record again." },
  { icon: Activity, title: "Real-time tracking", desc: "Know every delivery's status and every customer's dues, instantly." },
  { icon: Languages, title: "Hindi + English", desc: "Built for Bharat — use the app in the language you're comfortable with." },
];

export function WhyChoose() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">Why choose us</div>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Why dairy owners choose Dudh Supply</h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-border bg-card p-6 text-center shadow-card">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
