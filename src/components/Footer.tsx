import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">InkBlazze</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Born in the city by creators Yurei Savage & Terror Scar — blending ink, fire, and imagination.
              Art for those who dare to express.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent-red flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-accent-blue flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-primary-foreground/80 hover:text-accent-red transition-colors">
                  All Posters
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-primary-foreground/80 hover:text-accent-red transition-colors">
                  Anime Collection
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-primary-foreground/80 hover:text-accent-red transition-colors">
                  Minimal Series
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-primary-foreground/80 hover:text-accent-red transition-colors">
                  Abstract Art
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-bold mb-4">Info</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent-blue transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent-blue transition-colors">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent-blue transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2024 InkBlazze. Created by Yurei Savage & Terror Scar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
