import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with Video Background */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.coverr.co/videos/coverr-cooking-in-a-restaurant-kitchen-5281/1080p.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/95" />
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="italic text-primary-foreground/90">Leading in</span>
            <br />
            <span className="text-primary-foreground">Transformational</span>
            <br />
            <span className="text-accent drop-shadow-lg">FOOD EXPERIENCES</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-primary-foreground/95 leading-relaxed">
            We create unforgettable food experiences through innovation, quality,
            and exceptional service
          </p>
          <Link to="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center max-w-6xl mx-auto">
            <div className="p-6 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 hover:scale-105">
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-2 animate-fade-in">14</h3>
              <p className="text-sm sm:text-base text-muted-foreground font-medium">Years in Business</p>
            </div>
            <div className="p-6 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 hover:scale-105">
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-2 animate-fade-in">29</h3>
              <p className="text-sm sm:text-base text-muted-foreground font-medium">Cities Covered</p>
            </div>
            <div className="p-6 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 hover:scale-105">
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-2 animate-fade-in">4</h3>
              <p className="text-sm sm:text-base text-muted-foreground font-medium">Countries</p>
            </div>
            <div className="p-6 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 hover:scale-105">
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-2 animate-fade-in">400+</h3>
              <p className="text-sm sm:text-base text-muted-foreground font-medium">Clients Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            We <span className="text-accent italic">meticulously</span> craft
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16">
            <span className="italic">unforgettable</span> food experiences
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 max-w-7xl mx-auto">
            <Link to="/corporate" className="group">
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-56 sm:h-64 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=500" 
                    alt="Corporate" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 sm:p-8">
                  <h4 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-accent transition-colors">Corporate</h4>
                  <p className="text-muted-foreground leading-relaxed">Elevating workplace dining with premium cafeteria services</p>
                </div>
              </div>
            </Link>

            <Link to="/university" className="group">
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-56 sm:h-64 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500" 
                    alt="University" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 sm:p-8">
                  <h4 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-accent transition-colors">University</h4>
                  <p className="text-muted-foreground leading-relaxed">Nourishing student life with delicious campus dining</p>
                </div>
              </div>
            </Link>

            <Link to="/live-events" className="group sm:col-span-2 lg:col-span-1">
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-56 sm:h-64 overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500" 
                    alt="Events" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 sm:p-8">
                  <h4 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-accent transition-colors">Live Events</h4>
                  <p className="text-muted-foreground leading-relaxed">Creating memorable event experiences, one bite at a time</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
            Are you a <span className="text-accent italic">food person</span>
            <br className="hidden sm:block" />
            who wants to work with us?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed">
            Join our team of passionate food enthusiasts and help us create
            exceptional dining experiences
          </p>
          <Link to="/careers">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Explore Careers <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
