import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Instagram, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="animate-fade-in text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Questions? Custom orders? Let's talk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-sm border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent-red"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-sm border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent-red"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-sm border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent-red resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent-red hover:bg-accent-red/90 text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in space-y-8" style={{ animationDelay: "100ms" }}>
              <div>
                <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
                <div className="space-y-4">
                  <a
                    href="mailto:hello@inkblazze.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent-red transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent-red/10 flex items-center justify-center group-hover:bg-accent-red/20 transition-colors">
                      <Mail className="h-5 w-5 text-accent-red" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-sm">hello@inkblazze.com</p>
                    </div>
                  </a>

                  <a
                    href="https://instagram.com/inkblazze"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent-blue transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors">
                      <Instagram className="h-5 w-5 text-accent-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Instagram</p>
                      <p className="text-sm">@inkblazze</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-sm">
                <h3 className="font-bold mb-2">Custom Orders</h3>
                <p className="text-sm text-muted-foreground">
                  Looking for something unique? We offer custom poster designs tailored 
                  to your vision. Reach out to discuss your project.
                </p>
              </div>

              <div className="bg-muted/50 p-6 rounded-sm">
                <h3 className="font-bold mb-2">Wholesale Inquiries</h3>
                <p className="text-sm text-muted-foreground">
                  Interested in stocking InkBlazze in your store? Contact us for 
                  wholesale pricing and partnership opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
