import { Phone, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/dudh-supply-logo.png";
// import { COMPANY_EMAIL } from "@/lib/links";

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Dudh Supply" className="h-10 w-10 rounded-xl object-cover" />
              <span className="text-lg font-bold">
                Dudh<span className="text-primary"> Supply</span>
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Business dashboard built for India's dairy suppliers & farm owners —
              orders, customers, deliveries and reports in one app.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold">Product</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground">Features</a></li>
              <li><a href="#dashboard" className="hover:text-foreground">Dashboard</a></li>
              <li><a href="#how" className="hover:text-foreground">How it works</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5" /> +91 9979747563</li>
              <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> lemonsoftinfo@gmail.com</li>
              <li className="flex items-center gap-2"><MessageCircle className="h-3.5 w-3.5" /> WhatsApp Support</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dudh Supply. Powered by Lemon Software Solution
        </div>
      </div>
    </footer>
  );
}
