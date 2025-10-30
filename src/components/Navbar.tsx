import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/isthara-logo.svg";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { name: "Products", path: "/products" },
    { name: "Corporate", path: "/corporate" },
    { name: "University", path: "/university" },
    { name: "Live Events", path: "/live-events" },
    { name: "Blogs", path: "/blogs" },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/90 border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-105">
            <img src={logo} alt="Isthara" className="h-8 sm:h-10 lg:h-12" />
          </Link>
          
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 xl:px-4 py-2 text-sm xl:text-base font-medium transition-all duration-300 rounded-lg ${
                  isActive(link.path)
                    ? "text-primary bg-secondary shadow-sm"
                    : "text-foreground hover:text-primary hover:bg-secondary/50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link to="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
