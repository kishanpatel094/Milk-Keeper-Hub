import { Button } from "@/components/ui/button";
import { Smartphone, Apple } from "lucide-react";
import { PLAY_STORE_URL, APP_STORE_URL } from "@/lib/links";

export function CTA() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-primary-foreground shadow-soft sm:px-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-saffron/30 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Start managing your dairy business today
            </h2>
            <p className="mt-4 opacity-90">
              Join 10,000+ dairy suppliers & farm owners running their business smarter.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="h-12 bg-background px-7 text-base text-foreground hover:bg-background/90">
                <a href= "https://play.google.com/store/apps/details?id=com.lemonsoftwaresolution.dudhsupply" target="_blank" rel="noopener noreferrer">
                  <Smartphone className="mr-1.5 h-4 w-4" />
                  Get it on Play Store
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 border-primary-foreground/30 bg-transparent px-7 text-base text-primary-foreground hover:bg-primary-foreground/10">
                <a href="https://apps.apple.com/ug/app/dudh-supply/id6760746232" target="_blank" rel="noopener noreferrer">
                  <Apple className="mr-1.5 h-4 w-4" />
                  Download on App Store
                </a>
              </Button> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
