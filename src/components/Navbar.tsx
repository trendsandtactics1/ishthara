import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/isthara-logo.svg";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
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

          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden sm:block">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                Contact Us
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`px-4 py-3 text-lg font-medium transition-all duration-300 rounded-lg ${
                        isActive(link.path)
                          ? "text-primary bg-secondary shadow-sm"
                          : "text-foreground hover:text-primary hover:bg-secondary/50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-4">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full py-3 text-base shadow-md">
                      Contact Us
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
