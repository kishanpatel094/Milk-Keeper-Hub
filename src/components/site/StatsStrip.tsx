const stats = [
  { value: "10K+", label: "Dairy Suppliers" },
  { value: "5L+", label: "Orders Managed" },
  { value: "50K+", label: "Customers" },
  { value: "99%", label: "Uptime" },
];

export function StatsStrip() {
  return (
    <section className="border-y border-border bg-card">
      <div className="container-page grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-bold text-primary sm:text-4xl">{s.value}</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
