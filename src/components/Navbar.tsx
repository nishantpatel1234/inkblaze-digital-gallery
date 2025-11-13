import { Link } from "react-router-dom";
import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <span className="text-2xl font-bold tracking-tighter">InkBlazze</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-red group-hover:w-full transition-all duration-300"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/shop" className="text-sm font-medium hover:text-accent-red transition-colors">
              Shop
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-accent-red transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-accent-red transition-colors">
              Contact
            </Link>
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accent-red text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link
                to="/shop"
                className="text-sm font-medium hover:text-accent-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium hover:text-accent-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium hover:text-accent-red transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
