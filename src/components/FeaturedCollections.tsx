import { Link } from "react-router-dom";
import poster1 from "@/assets/poster-1.jpg";
import poster2 from "@/assets/poster-2.jpg";
import poster3 from "@/assets/poster-3.jpg";

const collections = [
  {
    title: "Minimal",
    description: "Clean lines, bold statements",
    image: poster1,
    color: "blue",
  },
  {
    title: "Anime",
    description: "Urban aesthetic meets anime",
    image: poster2,
    color: "red",
  },
  {
    title: "Abstract",
    description: "Geometric art redefined",
    image: poster3,
    color: "orange",
  },
];

const FeaturedCollections = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Collections
          </h2>
          <p className="text-muted-foreground text-lg">
            Curated styles for every wall
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Link
              key={index}
              to="/shop"
              className="group relative overflow-hidden rounded-sm aspect-[3/4] animate-fade-in hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                <p className="text-sm text-white/80">{collection.description}</p>
                <div 
                  className={`mt-4 w-12 h-1 bg-accent-${collection.color}`}
                ></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
