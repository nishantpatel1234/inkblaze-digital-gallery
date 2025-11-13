import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, title, price, image, category }: ProductCardProps) => {
  return (
    <div className="group relative animate-fade-in">
      <Link to={`/product/${id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Quick Add Button */}
          <Button
            size="sm"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-accent-red hover:bg-accent-red/90 text-white"
            onClick={(e) => {
              e.preventDefault();
              // Add to cart functionality will be added with Shopify
            }}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </Link>

      <div className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              {category}
            </p>
            <h3 className="font-semibold text-sm group-hover:text-accent-red transition-colors">
              {title}
            </h3>
          </div>
          <p className="font-bold text-sm">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
