import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/dudh-supply-logo.png";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Dudh Supply" className="h-10 w-10 rounded-xl object-cover shadow-soft" />
          <span className="text-lg font-bold tracking-tight">
            Dudh<span className="text-primary"> Supply</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">Features</a>
          <a href="#dashboard" className="text-sm text-muted-foreground hover:text-foreground transition">Dashboard</a>
          <a href="#how" className="text-sm text-muted-foreground hover:text-foreground transition">How it works</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition">Contact</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/919979747563"
            target="_blank"
            rel=" noopener noreferrer"
            className="hidden h-9 w-9 place-items-center rounded-lg border border-border bg-card text-emerald-600 sm:grid"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <Button asChild className="bg-primary hover:bg-primary/90 shadow-soft">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
  