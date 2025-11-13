import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ChevronLeft } from "lucide-react";
import poster1 from "@/assets/poster-1.jpg";
import poster2 from "@/assets/poster-2.jpg";
import poster3 from "@/assets/poster-3.jpg";

const productData: Record<string, any> = {
  "1": { title: "Minimal Statement", price: 49, image: poster1, category: "Minimal" },
  "2": { title: "Urban Anime", price: 59, image: poster2, category: "Anime" },
  "3": { title: "Geometric Harmony", price: 49, image: poster3, category: "Abstract" },
};

const sizes = ["A3 (12×16\")", "A2 (16×20\")", "A1 (20×24\")"];

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData[id || "1"] || productData["1"];
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link
            to="/shop"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Shop
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Image */}
            <div className="animate-fade-in">
              <div className="aspect-[3/4] rounded-sm overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 cursor-zoom-in"
                />
              </div>
            </div>

            {/* Details */}
            <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
              <p className="text-3xl font-bold mb-8">${product.price}</p>

              <div className="space-y-6 mb-8">
                <div>
                  <label className="block text-sm font-semibold mb-3">
                    Size
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? "default" : "outline"}
                        onClick={() => setSelectedSize(size)}
                        className={
                          selectedSize === size
                            ? "bg-primary text-primary-foreground"
                            : ""
                        }
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-accent-red hover:bg-accent-red/90 text-white"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground border-t border-border pt-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Details</h3>
                  <ul className="space-y-1">
                    <li>• Premium museum-quality paper</li>
                    <li>• Vibrant, fade-resistant inks</li>
                    <li>• Sustainably sourced materials</li>
                    <li>• Frame not included</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Shipping</h3>
                  <p>Free shipping on orders over $75. Processing time: 2-3 business days.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
