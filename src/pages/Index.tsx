import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedCollections />
      
      {/* Newsletter Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay in the Loop
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Get early access to new drops, exclusive collections, and creator insights.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-sm bg-primary-foreground text-foreground focus:outline-none focus:ring-2 focus:ring-accent-red"
            />
            <button className="px-6 py-3 bg-accent-red hover:bg-accent-red/90 text-white font-semibold rounded-sm transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
