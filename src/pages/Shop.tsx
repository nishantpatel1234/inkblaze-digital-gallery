import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import poster1 from "@/assets/poster-1.jpg";
import poster2 from "@/assets/poster-2.jpg";
import poster3 from "@/assets/poster-3.jpg";
import poster4 from "@/assets/poster-4.jpg";
import poster5 from "@/assets/poster-5.jpg";
import poster6 from "@/assets/poster-6.jpg";

const products = [
  { id: "1", title: "Minimal Statement", price: 49, image: poster1, category: "Minimal" },
  { id: "2", title: "Urban Anime", price: 59, image: poster2, category: "Anime" },
  { id: "3", title: "Geometric Harmony", price: 49, image: poster3, category: "Abstract" },
  { id: "4", title: "City Sunset", price: 55, image: poster4, category: "Cinematic" },
  { id: "5", title: "Wave Motion", price: 49, image: poster5, category: "Abstract" },
  { id: "6", title: "Retro Vibe", price: 59, image: poster6, category: "Anime" },
];

const categories = ["All", "Minimal", "Anime", "Abstract", "Cinematic"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12 text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop All Posters</h1>
            <p className="text-muted-foreground text-lg">
              Curated art for walls that speak
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12 animate-fade-in">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : ""
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
