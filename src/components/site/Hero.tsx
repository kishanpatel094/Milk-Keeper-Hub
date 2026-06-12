import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles, Play } from "lucide-react";
import { YOUTUBE_DEMO_URL } from "@/lib/links";
import productImg from "@/assets/app-product.png";
import deliveryImg from "@/assets/app-delivery.png";
import customerImg from "@/assets/app-customer.png";
import ordersImg from "@/assets/app-order.png";
import reportsImg from "@/assets/app-report.png";
import receiptImg from "@/assets/app-receipt.png";
import holidayImg from "@/assets/app-holiday.png";

const slides = [
  { src: productImg, label: "Add Product" },
  { src: ordersImg, label: "Orders" },
  { src: customerImg, label: "Customers" },
  { src: deliveryImg, label: "Delivery Boys" },
  { src: receiptImg, label: "Receipts" },
  { src: reportsImg, label: "Reports" },
  { src: holidayImg, label: "Holiday" },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground">
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="container-page relative grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:items-center lg:py-32">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Trusted by 10,000+ dairy businesses across India</span>
          </div>

          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Manage your dairy <br />
            business <span className="text-white drop-shadow">efficiently.</span>
          </h1>

          <p className="max-w-xl text-lg text-white/85">
            Complete business dashboard for dairy suppliers & Dudh supplier — track
            orders, customers, deliveries, payments & inventory, all in one app.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" variant="secondary" className="h-12 px-6 text-base">
              <a href=" https://www.youtube.com/watch?v=fGosQaaMqzA&t=0s" target="_blank" rel="noopener noreferrer">
                <Play className="mr-1.5 h-4 w-4" />
                Watch Demo
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
            {["Free to start", "Hindi + English", ].map((b) => (
              <div key={b} className="flex items-center gap-2 text-sm text-white/90">
                <CheckCircle2 className="h-4 w-4" />
                {b}
              </div>
            ))}
          </div>
        </div>

        {/* Phone slideshow */}
        <div className="relative mx-auto w-full max-w-[300px]">
          <div className="absolute inset-0 -rotate-3 rounded-[3rem] bg-white/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border-[10px] border-foreground/90 bg-background shadow-2xl aspect-[9/19]">
            {slides.map((s, i) => (
              <img
                key={s.src}
                src={s.src}
                alt={s.label}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-white" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
