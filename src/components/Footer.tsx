import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          <div>
            <h3 className="font-bold text-lg mb-4">ADDRESS</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              Isthara Technologies Pvt Ltd<br />
              Opp: BDA Head Office, 1st Floor, Future Group<br />
              Building, VK Kalyani Commercial Complex,<br />
              Sankey Rd, Bengaluru, Karnataka 560061<br />
              CIN No: - U72800KA2018PTC080475
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-accent transition-colors">Products</Link></li>
              <li><Link to="/blogs" className="hover:text-accent transition-colors">Blogs</Link></li>
              <li><Link to="/careers" className="hover:text-accent transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">CUSTOMER SERVICE</h3>
            <p className="text-sm opacity-90">
              Call us on 1800-570-0212<br />
              Email: support@isthara.com
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">SUBSCRIBE TO EMAILS</h3>
            <div className="flex flex-col sm:flex-row gap-2 mb-6">
              <Input 
                placeholder="Enter your email here*" 
                className="bg-background text-foreground flex-1"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 shadow-lg hover:shadow-xl transition-all duration-300">
                Join
              </Button>
            </div>
            <h4 className="font-semibold mb-4">FOLLOW US ON</h4>
            <div className="flex gap-3 flex-wrap">
              <a href="#" className="w-10 h-10 rounded-full bg-muted/20 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted/20 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted/20 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted/20 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted/20 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted/20 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-80">
          <p>Copyright © 2025 Isthara Technologies Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
