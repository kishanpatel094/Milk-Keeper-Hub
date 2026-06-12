import { Star } from "lucide-react";

const items = [
  {
    name: "Ramesh Yadav",
    role: "Dairy farm owner, Lucknow",
    text: "Pehle copy mein hisaab rakhta tha. Ab 200+ customers ka data, delivery aur payment sab ek app mein. Bahut time bachta hai.",
  },
  {
    name: "Sunita Devi",
    role: "Milk supplier, Patna",
    text: "Delivery boys ka tracking aur WhatsApp pe bill bhejna sabse achha feature hai. Hindi mein hai, isliye easy lagta hai.",
  },
  {
    name: "Manoj Kumar",
    role: "Dairy distributor, Jaipur",
    text: "Reports dekh ke pata chal jaata hai kaun customer late karta hai payment. Business grow ho raha hai clearly.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</div>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Loved by 10,000+ dairy businesses</h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex gap-0.5 text-saffron">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/10 font-bold text-primary">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}