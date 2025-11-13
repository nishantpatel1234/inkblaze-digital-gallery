import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Instagram, Mail } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = (data: ContactFormValues) => {
    // Data is already validated by zod schema
    console.log("Validated form data:", data);
    toast.success("Message sent! We'll get back to you soon.");
    form.reset();
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            className="px-4 py-3 rounded-sm border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent-red"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            className="px-4 py-3 rounded-sm border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent-red"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold">Message</FormLabel>
                        <FormControl>
                          <textarea
                            rows={6}
                            className="w-full px-4 py-3 rounded-sm border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent-red resize-none"
                            placeholder="Tell us what's on your mind..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent-red hover:bg-accent-red/90 text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
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
