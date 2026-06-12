import { jsx, jsxs } from "react/jsx-runtime";
import { MessageCircle, Sparkles, Play, ArrowRight, CheckCircle2, ShoppingCart, UserPlus, Users, Package, BarChart3, Receipt, CalendarDays, Menu, Globe, Tractor, Truck, Building2, Clock, Leaf, Activity, Languages, Star, Smartphone, Apple, Mail, Send, Phone } from "lucide-react";
import * as React from "react";
import { useState, useEffect } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as LabelPrimitive from "@radix-ui/react-label";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const logo = "/assets/dudh-supply-logo-BzgUxuCc.png";
function Navbar() {
  return /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl", children: /* @__PURE__ */ jsxs("div", { className: "container-page flex h-16 items-center justify-between", children: [
    /* @__PURE__ */ jsxs("a", { href: "#", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("img", { src: logo, alt: "Dudh Supply", className: "h-10 w-10 rounded-xl object-cover shadow-soft" }),
      /* @__PURE__ */ jsxs("span", { className: "text-lg font-bold tracking-tight", children: [
        "Dudh",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: " Supply" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "hidden items-center gap-8 md:flex", children: [
      /* @__PURE__ */ jsx("a", { href: "#features", className: "text-sm text-muted-foreground hover:text-foreground transition", children: "Features" }),
      /* @__PURE__ */ jsx("a", { href: "#dashboard", className: "text-sm text-muted-foreground hover:text-foreground transition", children: "Dashboard" }),
      /* @__PURE__ */ jsx("a", { href: "#how", className: "text-sm text-muted-foreground hover:text-foreground transition", children: "How it works" }),
      /* @__PURE__ */ jsx("a", { href: "#contact", className: "text-sm text-muted-foreground hover:text-foreground transition", children: "Contact" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://wa.me/919979747563",
          target: "_blank",
          rel: " noopener noreferrer",
          className: "hidden h-9 w-9 place-items-center rounded-lg border border-border bg-card text-emerald-600 sm:grid",
          "aria-label": "WhatsApp",
          children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" })
        }
      ),
      /* @__PURE__ */ jsx(Button, { asChild: true, className: "bg-primary hover:bg-primary/90 shadow-soft", children: /* @__PURE__ */ jsx("a", { href: "#contact", children: "Contact Us" }) })
    ] })
  ] }) });
}
const productImg = "/assets/app-product-APrq8OVX.png";
const deliveryImg = "/assets/app-delivery-DRitM8F6.png";
const customerImg = "/assets/app-customer-BB534JnZ.png";
const ordersImg = "/assets/app-order-17ZswsbV.png";
const reportsImg = "/assets/app-report-DCr9yIb5.png";
const receiptImg = "/assets/app-receipt-C3xpG6ho.png";
const holidayImg = "/assets/app-holiday-f3596YfM.png";
const slides = [
  { src: productImg, label: "Add Product" },
  { src: ordersImg, label: "Orders" },
  { src: customerImg, label: "Customers" },
  { src: deliveryImg, label: "Delivery Boys" },
  { src: receiptImg, label: "Receipts" },
  { src: reportsImg, label: "Reports" },
  { src: holidayImg, label: "Holiday" }
];
function Hero() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 2500);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" }),
    /* @__PURE__ */ jsxs("div", { className: "container-page relative grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:items-center lg:py-32", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-7", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5" }),
          /* @__PURE__ */ jsx("span", { children: "Trusted by 10,000+ dairy businesses across India" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl", children: [
          "Manage your dairy ",
          /* @__PURE__ */ jsx("br", {}),
          "business ",
          /* @__PURE__ */ jsx("span", { className: "text-white drop-shadow", children: "efficiently." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "max-w-xl text-lg text-white/85", children: "Complete business dashboard for dairy suppliers & Dudh supplier — track orders, customers, deliveries, payments & inventory, all in one app." }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "secondary", className: "h-12 px-6 text-base", children: /* @__PURE__ */ jsxs("a", { href: " https://www.youtube.com/watch?v=fGosQaaMqzA&t=0s", target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsx(Play, { className: "mr-1.5 h-4 w-4" }),
          "Watch Demo",
          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-x-6 gap-y-2 pt-2", children: ["Free to start", "Hindi + English"].map((b) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-white/90", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }),
          b
        ] }, b)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto w-full max-w-[300px]", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -rotate-3 rounded-[3rem] bg-white/20 blur-2xl" }),
        /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden rounded-[2.5rem] border-[10px] border-foreground/90 bg-background shadow-2xl aspect-[9/19]", children: slides.map((s, i) => /* @__PURE__ */ jsx(
          "img",
          {
            src: s.src,
            alt: s.label,
            className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`
          },
          s.src
        )) }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 flex justify-center gap-1.5", children: slides.map((_, i) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIndex(i),
            "aria-label": `Slide ${i + 1}`,
            className: `h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-white" : "w-1.5 bg-white/50"}`
          },
          i
        )) })
      ] })
    ] })
  ] });
}
const stats = [
  { value: "10K+", label: "Dairy Suppliers" },
  { value: "5L+", label: "Orders Managed" },
  { value: "50K+", label: "Customers" },
  { value: "99%", label: "Uptime" }
];
function StatsStrip() {
  return /* @__PURE__ */ jsx("section", { className: "border-y border-border bg-card", children: /* @__PURE__ */ jsx("div", { className: "container-page grid grid-cols-2 gap-6 py-10 md:grid-cols-4", children: stats.map((s) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-primary sm:text-4xl", children: s.value }),
    /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs uppercase tracking-wider text-muted-foreground", children: s.label })
  ] }, s.label)) }) });
}
const whatsappImg = "/assets/app-whatapp-DQjOCrD5.png";
const features = [
  { icon: ShoppingCart, title: "Add Product", desc: "Milk, ghee, paneer, curd — full inventory in one place.", tint: "bg-violet-100 text-violet-600", img: productImg },
  { icon: UserPlus, title: "Add Delivery Boy", desc: "Assign and track delivery staff with daily routes.", tint: "bg-emerald-100 text-emerald-600", img: deliveryImg },
  { icon: Users, title: "Add Customer", desc: "Full customer khata with rate, address & contact.", tint: "bg-blue-100 text-blue-600", img: customerImg },
  { icon: Package, title: "Orders Management", desc: "Daily order tracking — delivered, pending, cancelled.", tint: "bg-amber-100 text-amber-600", img: ordersImg },
  { icon: BarChart3, title: "Reports", desc: "Daily, monthly & yearly business reports (PDF / Excel).", tint: "bg-pink-100 text-pink-600", img: reportsImg },
  { icon: Receipt, title: "Receipts & Billing", desc: "Auto-generate bills, receipts and monthly invoices.", tint: "bg-orange-100 text-orange-600", img: receiptImg },
  { icon: CalendarDays, title: "Holiday Management", desc: "Mark off-days — no billing on customer holidays.", tint: "bg-slate-100 text-slate-600", img: holidayImg },
  { icon: MessageCircle, title: "WhatsApp Help", desc: "Instant support & one-tap bill sharing on WhatsApp.", tint: "bg-emerald-100 text-emerald-600", img: whatsappImg }
];
function Features() {
  const [active, setActive] = useState(0);
  const current = features[active];
  return /* @__PURE__ */ jsx("section", { id: "features", className: "py-20 md:py-28 bg-cream", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Features" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl font-bold sm:text-4xl", children: "Everything your dairy business needs" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Click any feature to preview it in the app." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-14 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-2", children: features.map((f, i) => {
        const isActive = i === active;
        return /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setActive(i),
            className: `group relative rounded-2xl border p-5 text-left transition hover:-translate-y-0.5 ${isActive ? "border-primary bg-card shadow-soft ring-2 ring-primary/30" : "border-border bg-card hover:shadow-card"}`,
            children: [
              /* @__PURE__ */ jsx("div", { className: `mb-3 inline-grid h-11 w-11 place-items-center rounded-xl ${f.tint}`, children: /* @__PURE__ */ jsx(f.icon, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold", children: f.title }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: f.desc }),
              isActive && /* @__PURE__ */ jsx("span", { className: "absolute right-3 top-3 rounded-full bg-primary px-2 py-0.5 text-[10px] font-semibold text-primary-foreground", children: "Viewing" })
            ]
          },
          f.title
        );
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto w-full max-w-[300px] lg:sticky lg:top-24", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -rotate-3 rounded-[3rem] bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" }),
        /* @__PURE__ */ jsx("div", { className: "relative overflow-hidden rounded-[2.5rem] border-[10px] border-foreground/90 bg-background shadow-2xl aspect-[9/19]", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: current.img,
            alt: current.title,
            className: "absolute inset-0 h-full w-full object-cover animate-fade-in"
          },
          current.img
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold", children: current.title }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: current.desc })
        ] })
      ] })
    ] })
  ] }) });
}
const quickActions = [
  { icon: ShoppingCart, label: "Add Product", tint: "bg-violet-100 text-violet-600" },
  { icon: UserPlus, label: "Add Deliveryboy", tint: "bg-emerald-100 text-emerald-600" },
  { icon: Users, label: "Add Customer", tint: "bg-blue-100 text-blue-600" },
  { icon: Package, label: "Orders", tint: "bg-amber-100 text-amber-600" },
  { icon: BarChart3, label: "Reports", tint: "bg-pink-100 text-pink-600" },
  { icon: Receipt, label: "Receipt", tint: "bg-orange-100 text-orange-600" },
  { icon: CalendarDays, label: "Holiday", tint: "bg-slate-100 text-slate-600" },
  { icon: MessageCircle, label: "Help", tint: "bg-emerald-100 text-emerald-600" }
];
function DashboardPreview() {
  return /* @__PURE__ */ jsx("section", { id: "dashboard", className: "bg-cream py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "container-page grid gap-12 lg:grid-cols-2 lg:items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Dashboard Preview" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl font-bold sm:text-4xl", children: "Your entire dairy business — at a glance" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "One clean dashboard shows today's orders, pending deliveries, monthly payments and sales. No more flipping through notebooks or chasing numbers." }),
      /* @__PURE__ */ jsx("ul", { className: "mt-6 space-y-3 text-sm", children: [
        "Today's Orders, Delivered & Pending counts",
        "Monthly Order Summary with growth %",
        "Monthly Payment & Sell Summary",
        "Quick Actions for everyday tasks"
      ].map((b) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "mt-1 h-1.5 w-1.5 rounded-full bg-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground", children: b })
      ] }, b)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto w-full max-w-sm", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -rotate-2 rounded-[3rem] bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" }),
      /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-[2.5rem] border-8 border-foreground/90 bg-background shadow-soft", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-border bg-background p-4", children: [
          /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5 text-muted-foreground" }),
          /* @__PURE__ */ jsx("div", { className: "font-semibold", children: "Dudh Supply" }),
          /* @__PURE__ */ jsx(Globe, { className: "h-5 w-5 text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 p-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold", children: "Welcome Back!" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Manage your dairy business efficiently" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold", children: "Quick Actions" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-primary", children: "View All" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-2", children: quickActions.map((a) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1 rounded-xl border border-border bg-card p-2", children: [
            /* @__PURE__ */ jsx("div", { className: `grid h-9 w-9 place-items-center rounded-lg ${a.tint}`, children: /* @__PURE__ */ jsx(a.icon, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-[9px] text-center leading-tight text-foreground", children: a.label })
          ] }, a.label)) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "mb-2 text-sm font-semibold", children: "Today Summary" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-2 rounded-xl border border-border bg-card p-3 text-center", children: [
              { l: "Orders", v: "42" },
              { l: "Delivered", v: "38" },
              { l: "Pending", v: "4" }
            ].map((s) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-[10px] text-muted-foreground", children: s.l }),
              /* @__PURE__ */ jsx("div", { className: "text-lg font-bold", children: s.v })
            ] }, s.l)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "mb-2 text-sm font-semibold", children: "Monthly Summary" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-2 rounded-xl border border-border bg-card p-3 text-center", children: [
              { l: "Sales", v: "₹1.2L" },
              { l: "Milk", v: "8.4K L" },
              { l: "Due", v: "₹18K" }
            ].map((s) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-[10px] text-muted-foreground", children: s.l }),
              /* @__PURE__ */ jsx("div", { className: "text-base font-bold text-primary", children: s.v })
            ] }, s.l)) })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
const steps = [
  {
    n: "01",
    title: "Add products & customers",
    desc: "Set up your milk, ghee & paneer catalog and import customers with rates."
  },
  {
    n: "02",
    title: "Assign delivery boys",
    desc: "Add staff, assign daily routes and track every delivery in real-time."
  },
  {
    n: "03",
    title: "Track payments & reports",
    desc: "Auto-bill at month-end, send on WhatsApp, and export Excel/PDF reports."
  }
];
function HowItWorks() {
  return /* @__PURE__ */ jsx("section", { id: "how", className: "py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "How it works" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl font-bold sm:text-4xl", children: "Start in 3 simple steps" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "No training needed. Get your dairy business online in under 10 minutes." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-3", children: steps.map((s, i) => /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl border border-border bg-card p-8 shadow-card", children: [
      /* @__PURE__ */ jsx("div", { className: "text-5xl font-bold text-primary/15", children: s.n }),
      /* @__PURE__ */ jsx("h3", { className: "mt-2 text-xl font-semibold", children: s.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.desc }),
      i < steps.length - 1 && /* @__PURE__ */ jsx("div", { className: "absolute right-4 top-8 hidden text-2xl text-primary/30 md:block", children: "→" })
    ] }, s.n)) })
  ] }) });
}
const items$2 = [
  { icon: Tractor, title: "Dairy Farm Owners", desc: "Manage cattle output, daily collection and supply contracts in one dashboard." },
  { icon: Truck, title: "Milk Suppliers", desc: "Route management, delivery boy tracking and customer-wise daily entries." },
  { icon: Building2, title: "Distributors", desc: "Multi-product inventory, wholesale billing and city-wide order management." }
];
function ForWhom() {
  return /* @__PURE__ */ jsx("section", { className: "bg-cream py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Made for you" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl font-bold sm:text-4xl", children: "Who is Dudh Supply for?" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-5 md:grid-cols-3", children: items$2.map((it) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-7 shadow-card", children: [
      /* @__PURE__ */ jsx("div", { className: "grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsx(it.icon, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg font-semibold", children: it.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: it.desc })
    ] }, it.title)) })
  ] }) });
}
const items$1 = [
  { icon: Clock, title: "Save 2+ hours daily", desc: "Skip notebooks and calculators. Auto-billing handles month-end in minutes." },
  { icon: Leaf, title: "Zero paper", desc: "Everything stored safely in the cloud. Never lose a record again." },
  { icon: Activity, title: "Real-time tracking", desc: "Know every delivery's status and every customer's dues, instantly." },
  { icon: Languages, title: "Hindi + English", desc: "Built for Bharat — use the app in the language you're comfortable with." }
];
function WhyChoose() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Why choose us" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl font-bold sm:text-4xl", children: "Why dairy owners choose Dudh Supply" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: items$1.map((it) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 text-center shadow-card", children: [
      /* @__PURE__ */ jsx("div", { className: "mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsx(it.icon, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsx("h3", { className: "mt-4 text-base font-semibold", children: it.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: it.desc })
    ] }, it.title)) })
  ] }) });
}
const items = [
  {
    name: "Ramesh Yadav",
    role: "Dairy farm owner, Lucknow",
    text: "Pehle copy mein hisaab rakhta tha. Ab 200+ customers ka data, delivery aur payment sab ek app mein. Bahut time bachta hai."
  },
  {
    name: "Sunita Devi",
    role: "Milk supplier, Patna",
    text: "Delivery boys ka tracking aur WhatsApp pe bill bhejna sabse achha feature hai. Hindi mein hai, isliye easy lagta hai."
  },
  {
    name: "Manoj Kumar",
    role: "Dairy distributor, Jaipur",
    text: "Reports dekh ke pata chal jaata hai kaun customer late karta hai payment. Business grow ho raha hai clearly."
  }
];
function Testimonials() {
  return /* @__PURE__ */ jsx("section", { className: "bg-cream py-20 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "container-page", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: "Testimonials" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 text-3xl font-bold sm:text-4xl", children: "Loved by 10,000+ dairy businesses" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid gap-5 md:grid-cols-3", children: items.map((t) => /* @__PURE__ */ jsxs("figure", { className: "rounded-2xl border border-border bg-card p-6 shadow-card", children: [
      /* @__PURE__ */ jsx("div", { className: "flex gap-0.5 text-saffron", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-current" }, i)) }),
      /* @__PURE__ */ jsxs("blockquote", { className: "mt-4 text-sm leading-relaxed text-foreground", children: [
        '"',
        t.text,
        '"'
      ] }),
      /* @__PURE__ */ jsxs("figcaption", { className: "mt-5 flex items-center gap-3 border-t border-border pt-4", children: [
        /* @__PURE__ */ jsx("div", { className: "grid h-10 w-10 place-items-center rounded-full bg-primary/10 font-bold text-primary", children: t.name[0] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold", children: t.name }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: t.role })
        ] })
      ] })
    ] }, t.name)) })
  ] }) });
}
function CTA() {
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "py-20 md:py-28", children: /* @__PURE__ */ jsx("div", { className: "container-page", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-primary-foreground shadow-soft sm:px-16", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -right-20 -top-20 h-72 w-72 rounded-full bg-saffron/30 blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold sm:text-4xl", children: "Start managing your dairy business today" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 opacity-90", children: "Join 10,000+ dairy suppliers & farm owners running their business smarter." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "h-12 bg-background px-7 text-base text-foreground hover:bg-background/90", children: /* @__PURE__ */ jsxs("a", { href: "https://play.google.com/store/apps/details?id=com.lemonsoftwaresolution.dudhsupply", target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsx(Smartphone, { className: "mr-1.5 h-4 w-4" }),
          "Get it on Play Store"
        ] }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "h-12 border-primary-foreground/30 bg-transparent px-7 text-base text-primary-foreground hover:bg-primary-foreground/10", children: /* @__PURE__ */ jsxs("a", { href: "https://apps.apple.com/ug/app/dudh-supply/id6760746232", target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsx(Apple, { className: "mr-1.5 h-4 w-4" }),
          "Download on App Store"
        ] }) })
      ] })
    ] })
  ] }) }) });
}
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(LabelPrimitive.Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = LabelPrimitive.Root.displayName;
const COMPANY_WHATSAPP = "919979747563";
function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(
      `🚀 New Dudh Supply Inquiry

👤 Name: ${name}

📧 Email: ${email}

📱 Phone: ${phone || "Not Provided"}

        💬 Message:
       ${message}`
    );
    const whatsappUrl = `https://wa.me/${COMPANY_WHATSAPP}?text=${whatsappMessage}`;
    window.open(whatsappUrl, "_blank");
  };
  return /* @__PURE__ */ jsx("section", { id: "questions", className: "py-20 md:py-28", children: /* @__PURE__ */ jsx("div", { className: "container-page", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground", children: [
        /* @__PURE__ */ jsx(Mail, { className: "h-3.5 w-3.5 text-primary" }),
        "Have a question?"
      ] }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-4 text-3xl font-bold sm:text-4xl", children: [
        "Get in ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "touch" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-muted-foreground", children: "Fill the form and send your inquiry directly on WhatsApp." })
    ] }),
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit,
        className: "mt-10 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Your Name" }),
              /* @__PURE__ */ jsx(Input, { id: "name", required: true, maxLength: 100, value: name, onChange: (e) => setName(e.target.value), placeholder: "Ramesh Kumar" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
              /* @__PURE__ */ jsx(Input, { id: "email", type: "email", required: true, maxLength: 255, value: email, onChange: (e) => setEmail(e.target.value), placeholder: "you@example.com" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2 sm:col-span-2", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "phone", children: "Phone (optional)" }),
              /* @__PURE__ */ jsx(Input, { id: "phone", type: "tel", maxLength: 20, value: phone, onChange: (e) => setPhone(e.target.value), placeholder: "+91 99999 99999" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2 sm:col-span-2", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "message", children: "Your Question" }),
              /* @__PURE__ */ jsx(Textarea, { id: "message", required: true, maxLength: 1e3, rows: 5, value: message, onChange: (e) => setMessage(e.target.value), placeholder: "Tell us how we can help..." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Button, { type: "submit", size: "lg", className: "mt-6 h-12 w-full bg-primary text-base hover:bg-primary/90 sm:w-auto sm:px-8", children: [
            /* @__PURE__ */ jsx(Send, { className: "mr-1.5 h-4 w-4" }),
            "Send Message"
          ] })
        ]
      }
    )
  ] }) }) });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border bg-cream", children: /* @__PURE__ */ jsxs("div", { className: "container-page py-14", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-10 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("img", { src: logo, alt: "Dudh Supply", className: "h-10 w-10 rounded-xl object-cover" }),
          /* @__PURE__ */ jsxs("span", { className: "text-lg font-bold", children: [
            "Dudh",
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: " Supply" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-sm text-sm text-muted-foreground", children: "Business dashboard built for India's dairy suppliers & farm owners — orders, customers, deliveries and reports in one app." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold", children: "Product" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#features", className: "hover:text-foreground", children: "Features" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#dashboard", className: "hover:text-foreground", children: "Dashboard" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#how", className: "hover:text-foreground", children: "How it works" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold", children: "Contact" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-3.5 w-3.5" }),
            " +91 9979747563"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-3.5 w-3.5" }),
            " lemonsoftinfo@gmail.com"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(MessageCircle, { className: "h-3.5 w-3.5" }),
            " WhatsApp Support"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Dudh Supply. Powered by Lemon Software Solution"
    ] })
  ] }) });
}
function LandingPage() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(StatsStrip, {}),
      /* @__PURE__ */ jsx(Features, {}),
      /* @__PURE__ */ jsx(DashboardPreview, {}),
      /* @__PURE__ */ jsx(HowItWorks, {}),
      /* @__PURE__ */ jsx(ForWhom, {}),
      /* @__PURE__ */ jsx(WhyChoose, {}),
      /* @__PURE__ */ jsx(Testimonials, {}),
      /* @__PURE__ */ jsx(ContactForm, {}),
      /* @__PURE__ */ jsx(CTA, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  LandingPage as component
};
