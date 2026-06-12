import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Mail } from "lucide-react";
import { COMPANY_WHATSAPP } from "@/lib/links";
// import { COMPANY_EMAIL } from "@/lib/links";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

 const onSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const whatsappMessage = encodeURIComponent(
`🚀 New Dudh Supply Inquiry

👤 Name: ${name}

📧 Email: ${email}

📱 Phone: ${phone || "Not Provided"}

        💬 Message:
       ${message}`
          );

         const whatsappUrl =
        `https://wa.me/${COMPANY_WHATSAPP}?text=${whatsappMessage}`;

         window.open(whatsappUrl, "_blank");
          };

  return (
    <section id="questions" className="py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <Mail className="h-3.5 w-3.5 text-primary" />
              Have a question?
            </div>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Get in <span className="text-primary">touch</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
             Fill the form and send your inquiry directly on WhatsApp.
          </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" required maxLength={100} value={name} onChange={(e) => setName(e.target.value)} placeholder="Ramesh Kumar" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required maxLength={255} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="phone">Phone (optional)</Label>
                <Input id="phone" type="tel" maxLength={20} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 99999 99999" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="message">Your Question</Label>
                <Textarea id="message" required maxLength={1000} rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us how we can help..." />
              </div>
            </div>
            <Button type="submit" size="lg" className="mt-6 h-12 w-full bg-primary text-base hover:bg-primary/90 sm:w-auto sm:px-8">
              <Send className="mr-1.5 h-4 w-4" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
