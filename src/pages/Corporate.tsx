import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Corporate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1600')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/80" />
        <div className="relative z-10 text-center px-4 container mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-accent drop-shadow-lg">Corporate</span>
            <br />
            <span className="text-primary-foreground">CAFETERIA SERVICES</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-primary-foreground/95 leading-relaxed">
            We bring an exceptional cafeteria experience tailored to elevate workplace
            dining, creating a delightful culinary journey for your employees.
          </p>
        </div>
      </section>

      {/* Flavourful Food */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16">
            <span className="text-accent italic">Flavorful</span> Food
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">WHAT WE DO?</h3>
              <ul className="space-y-4 sm:space-y-5">
                <li className="flex items-start gap-3 sm:gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base sm:text-lg">End-to-end Cafeteria Management</span>
                </li>
                <li className="flex items-start gap-3 sm:gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base sm:text-lg">Diverse menus with regional and international cuisines</span>
                </li>
                <li className="flex items-start gap-3 sm:gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base sm:text-lg">Fresh, high-quality ingredients sourced daily</span>
                </li>
                <li className="flex items-start gap-3 sm:gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base sm:text-lg">Customized meal plans for different dietary needs</span>
                </li>
                <li className="flex items-start gap-3 sm:gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors">
                  <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 text-accent flex-shrink-0 mt-1" />
                  <span className="text-base sm:text-lg">Professional staff and impeccable service</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400" alt="Food" className="rounded-xl h-44 sm:h-52 w-full object-cover hover:scale-105 transition-transform duration-300 shadow-lg" />
              <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" alt="Food" className="rounded-xl h-44 sm:h-52 w-full object-cover hover:scale-105 transition-transform duration-300 shadow-lg" />
              <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400" alt="Food" className="rounded-xl h-44 sm:h-52 w-full object-cover hover:scale-105 transition-transform duration-300 shadow-lg" />
              <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400" alt="Food" className="rounded-xl h-44 sm:h-52 w-full object-cover hover:scale-105 transition-transform duration-300 shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Technology */}
      <section className="py-16 sm:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8">
            <span className="italic">Seamless</span> Technology
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-center text-base sm:text-lg lg:text-xl text-muted-foreground mb-12 sm:mb-16 max-w-3xl mx-auto leading-relaxed">
              We use the latest F&B tech stack primarily built by Isthara,
              including a state-of-the-art Kitchen Management System (KMS)
              to optimize efficiency and service quality.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="bg-card p-6 sm:p-8 rounded-xl border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-lg group">
                <h3 className="font-bold text-lg sm:text-xl mb-3 group-hover:text-accent transition-colors">Smart POS Systems</h3>
                <p className="text-muted-foreground leading-relaxed">Quick ordering and payment processing</p>
              </div>
              <div className="bg-card p-6 sm:p-8 rounded-xl border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-lg group">
                <h3 className="font-bold text-lg sm:text-xl mb-3 group-hover:text-accent transition-colors">Digital Menu Boards</h3>
                <p className="text-muted-foreground leading-relaxed">Real-time menu updates and nutrition info</p>
              </div>
              <div className="bg-card p-6 sm:p-8 rounded-xl border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-lg group">
                <h3 className="font-bold text-lg sm:text-xl mb-3 group-hover:text-accent transition-colors">Kitchen Display System</h3>
                <p className="text-muted-foreground leading-relaxed">Streamlined order management</p>
              </div>
              <div className="bg-card p-6 sm:p-8 rounded-xl border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-lg group">
                <h3 className="font-bold text-lg sm:text-xl mb-3 group-hover:text-accent transition-colors">Analytics Dashboard</h3>
                <p className="text-muted-foreground leading-relaxed">Insights for better decision making</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 leading-tight">
            We are <span className="text-accent italic">game changers</span> for your cafeteria.
          </h2>
          <Link to="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Corporate;
