import { ShoppingCart, UserPlus, Users, Package, BarChart3, Receipt, CalendarDays, MessageCircle, Menu, Globe } from "lucide-react";

const quickActions = [
  { icon: ShoppingCart, label: "Add Product", tint: "bg-violet-100 text-violet-600" },
  { icon: UserPlus, label: "Add Deliveryboy", tint: "bg-emerald-100 text-emerald-600" },
  { icon: Users, label: "Add Customer", tint: "bg-blue-100 text-blue-600" },
  { icon: Package, label: "Orders", tint: "bg-amber-100 text-amber-600" },
  { icon: BarChart3, label: "Reports", tint: "bg-pink-100 text-pink-600" },
  { icon: Receipt, label: "Receipt", tint: "bg-orange-100 text-orange-600" },
  { icon: CalendarDays, label: "Holiday", tint: "bg-slate-100 text-slate-600" },
  { icon: MessageCircle, label: "Help", tint: "bg-emerald-100 text-emerald-600" },
];

export function DashboardPreview() {
  return (
    <section id="dashboard" className="bg-cream py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-primary">Dashboard Preview</div>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Your entire dairy business — at a glance
          </h2>
          <p className="mt-4 text-muted-foreground">
            One clean dashboard shows today's orders, pending deliveries, monthly
            payments and sales. No more flipping through notebooks or chasing numbers.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Today's Orders, Delivered & Pending counts",
              "Monthly Order Summary with growth %",
              "Monthly Payment & Sell Summary",
              "Quick Actions for everyday tasks",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Phone mockup */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -rotate-2 rounded-[3rem] bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border-8 border-foreground/90 bg-background shadow-soft">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-border bg-background p-4">
              <Menu className="h-5 w-5 text-muted-foreground" />
              <div className="font-semibold">Dudh Supply</div>
              <Globe className="h-5 w-5 text-muted-foreground" />
            </div>

            <div className="space-y-4 p-4">
              <div>
                <h3 className="text-lg font-bold">Welcome Back!</h3>
                <p className="text-xs text-muted-foreground">Manage your dairy business efficiently</p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">Quick Actions</span>
                <span className="text-xs text-primary">View All</span>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {quickActions.map((a) => (
                  <div key={a.label} className="flex flex-col items-center gap-1 rounded-xl border border-border bg-card p-2">
                    <div className={`grid h-9 w-9 place-items-center rounded-lg ${a.tint}`}>
                      <a.icon className="h-4 w-4" />
                    </div>
                    <span className="text-[9px] text-center leading-tight text-foreground">{a.label}</span>
                  </div>
                ))}
              </div>

              <div>
                <div className="mb-2 text-sm font-semibold">Today Summary</div>
                <div className="grid grid-cols-3 gap-2 rounded-xl border border-border bg-card p-3 text-center">
                  {[
                    { l: "Orders", v: "42" },
                    { l: "Delivered", v: "38" },
                    { l: "Pending", v: "4" },
                  ].map((s) => (
                    <div key={s.l}>
                      <div className="text-[10px] text-muted-foreground">{s.l}</div>
                      <div className="text-lg font-bold">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-2 text-sm font-semibold">Monthly Summary</div>
                <div className="grid grid-cols-3 gap-2 rounded-xl border border-border bg-card p-3 text-center">
                  {[
                    { l: "Sales", v: "₹1.2L" },
                    { l: "Milk", v: "8.4K L" },
                    { l: "Due", v: "₹18K" },
                  ].map((s) => (
                    <div key={s.l}>
                      <div className="text-[10px] text-muted-foreground">{s.l}</div>
                      <div className="text-base font-bold text-primary">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
