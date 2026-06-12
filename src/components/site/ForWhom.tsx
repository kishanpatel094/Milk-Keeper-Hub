import { Tractor, Truck, Building2 } from "lucide-react";

const items = [
  { icon: Tractor, title: "Dairy Farm Owners", desc: "Manage cattle output, daily collection and supply contracts in one dashboard." },
  { icon: Truck, title: "Milk Suppliers", desc: "Route management, delivery boy tracking and customer-wise daily entries." },
  { icon: Building2, title: "Distributors", desc: "Multi-product inventory, wholesale billing and city-wide order management." },
];

export function ForWhom() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">Made for you</div>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Who is Dudh Supply for?</h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
