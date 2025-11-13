import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="animate-fade-in text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Born in the City
            </h1>
            <p className="text-xl text-muted-foreground">
              Blending ink, fire, and imagination
            </p>
          </div>

          <div className="space-y-12 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <section>
              <h2 className="text-2xl font-bold mb-4">The Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                InkBlazze was born from the streets, where art meets expression and walls become canvases. 
                Founded by creators Yurei Savage and Terror Scar, we're more than a poster brand — we're a 
                movement for those who refuse to blend in.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every design we create carries the energy of urban culture, the precision of minimalism, 
                and the soul of street art. From anime aesthetics to abstract geometry, our posters are 
                crafted for art lovers, dreamers, and rebels who want their walls to speak.
              </p>
            </section>

            <section className="border-l-4 border-accent-red pl-6">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To transform blank walls into visual statements. We believe your space should reflect 
                your personality, your passion, your story. InkBlazze delivers high-quality, collectible 
                art that's accessible, bold, and timeless.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Creators</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-muted/50 p-6 rounded-sm">
                  <h3 className="text-xl font-bold mb-2">Yurei Savage</h3>
                  <p className="text-sm text-muted-foreground">
                    Master of minimal aesthetics and urban narratives. Specializes in clean lines 
                    and bold contrasts that command attention.
                  </p>
                </div>
                <div className="bg-muted/50 p-6 rounded-sm">
                  <h3 className="text-xl font-bold mb-2">Terror Scar</h3>
                  <p className="text-sm text-muted-foreground">
                    Expert in anime-inspired designs and abstract compositions. Brings vibrant energy 
                    and street-art sensibility to every piece.
                  </p>
                </div>
              </div>
            </section>

            <section className="text-center py-12 bg-primary text-primary-foreground rounded-sm">
              <h2 className="text-3xl font-bold mb-4">Ink the walls. Blaze your world.</h2>
              <p className="text-primary-foreground/80">
                Join thousands of art lovers transforming their spaces
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
