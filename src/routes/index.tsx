import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { StatsStrip } from "@/components/site/StatsStrip";
import { Features } from "@/components/site/Features";
import { DashboardPreview } from "@/components/site/DashboardPreview";
import { HowItWorks } from "@/components/site/HowItWorks";
import { ForWhom } from "@/components/site/ForWhom";
import { WhyChoose } from "@/components/site/WhyChoose";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { ContactForm } from "@/components/site/ContactForm";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dudh Supply — Business Dashboard for Dairy Suppliers & Farm Owners" },
      {
        name: "description",
        content:
          "Dudh Supply is the all-in-one business dashboard for dairy suppliers and dairy farm owners. Manage products, customers, orders, deliveries, payments and reports — in Hindi & English.",
      },
      { property: "og:title", content: "Dudh Supply — Manage your dairy business efficiently" },
      {
        property: "og:description",
        content: "Orders, customers, delivery boys, payments & reports — all in one dashboard built for dairy businesses.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <Features />
        <DashboardPreview />
        <HowItWorks />
        <ForWhom />
        <WhyChoose />
        <Testimonials />
        <ContactForm />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
