import { useState } from "react";
import { ShoppingCart, UserPlus, Users, Package, BarChart3, Receipt, CalendarDays, MessageCircle } from "lucide-react";
import productImg from "@/assets/app-product.png";
import deliveryImg from "@/assets/app-delivery.png";
import customerImg from "@/assets/app-customer.png";
import ordersImg from "@/assets/app-order.png";
import reportsImg from "@/assets/app-report.png";
import receiptImg from "@/assets/app-receipt.png";
import holidayImg from "@/assets/app-holiday.png";
import whatsappImg from "@/assets/app-whatapp.png";

const features = [
  { icon: ShoppingCart, title: "Add Product", desc: "Milk, ghee, paneer, curd — full inventory in one place.", tint: "bg-violet-100 text-violet-600", img: productImg},
  { icon: UserPlus, title: "Add Delivery Boy", desc: "Assign and track delivery staff with daily routes.", tint: "bg-emerald-100 text-emerald-600", img: deliveryImg },
  { icon: Users, title: "Add Customer", desc: "Full customer khata with rate, address & contact.", tint: "bg-blue-100 text-blue-600", img: customerImg},
  { icon: Package, title: "Orders Management", desc: "Daily order tracking — delivered, pending, cancelled.", tint: "bg-amber-100 text-amber-600", img: ordersImg },
  { icon: BarChart3, title: "Reports", desc: "Daily, monthly & yearly business reports (PDF / Excel).", tint: "bg-pink-100 text-pink-600", img: reportsImg },
  { icon: Receipt, title: "Receipts & Billing", desc: "Auto-generate bills, receipts and monthly invoices.", tint: "bg-orange-100 text-orange-600", img: receiptImg },
  { icon: CalendarDays, title: "Holiday Management", desc: "Mark off-days — no billing on customer holidays.", tint: "bg-slate-100 text-slate-600", img: holidayImg },
  { icon: MessageCircle, title: "WhatsApp Help", desc: "Instant support & one-tap bill sharing on WhatsApp.", tint: "bg-emerald-100 text-emerald-600", img: whatsappImg },
];

export function Features() {
  const [active, setActive] = useState(0);
  const current = features[active];

  return (
    <section id="features" className="py-20 md:py-28 bg-cream">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">Features</div>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Everything your dairy business needs
          </h2>
          <p className="mt-4 text-muted-foreground">
            Click any feature to preview it in the app.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-center">
          {/* Feature grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {features.map((f, i) => {
              const isActive = i === active;
              return (
                <button
                  key={f.title}
                  onClick={() => setActive(i)}
                  className={`group relative rounded-2xl border p-5 text-left transition hover:-translate-y-0.5 ${
                    isActive
                      ? "border-primary bg-card shadow-soft ring-2 ring-primary/30"
                      : "border-border bg-card hover:shadow-card"
                  }`}
                >
                  <div className={`mb-3 inline-grid h-11 w-11 place-items-center rounded-xl ${f.tint}`}>
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                  {isActive && (
                    <span className="absolute right-3 top-3 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-primary-foreground">
                      Viewing
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Phone preview */}
          <div className="relative mx-auto w-full max-w-[300px] lg:sticky lg:top-24">
            <div className="absolute inset-0 -rotate-3 rounded-[3rem] bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border-[10px] border-foreground/90 bg-background shadow-2xl aspect-[9/19]">
              <img
                key={current.img}
                src={current.img}
                alt={current.title}
                className="absolute inset-0 h-full w-full object-cover animate-fade-in"
              />
            </div>
            <div className="mt-4 text-center">
              <div className="text-sm font-semibold">{current.title}</div>
              <div className="text-xs text-muted-foreground">{current.desc}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
