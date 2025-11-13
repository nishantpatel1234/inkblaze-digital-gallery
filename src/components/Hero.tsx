import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroPoster1 from "@/assets/hero-poster-1.jpg";
import heroPoster2 from "@/assets/hero-poster-2.jpg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [heroPoster1, heroPoster2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              opacity: currentImage === index ? 1 : 0,
            }}
          >
            <img
              src={img}
              alt="Hero poster"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter">
          Ink the walls.
          <br />
          <span className="text-accent-red">Blaze</span> your world.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          High-quality aesthetic posters crafted by Yurei Savage & Terror Scar.
          <br />
          Art for those who dare to stand out.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-accent-red hover:bg-accent-red/90 text-white group">
            <Link to="/shop">
              Explore Collection
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/about">Learn Our Story</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/20 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
