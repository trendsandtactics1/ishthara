import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=1600')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/80" />
        <div className="relative z-10 text-center px-4 container mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-accent italic drop-shadow-lg">Powering</span> Food Spaces with
            <br className="hidden sm:block" />
            <span className="text-primary-foreground">Technology</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-primary-foreground/95 leading-relaxed">
            Our end-to-end restaurant-café tech stack streamlines operations, enhances customer
            experience, and drives business growth. Built on innovation, delivered with care.
          </p>
        </div>
      </section>

      {/* Digital Suite */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Our Digital Cafeteria Suite
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
            A comprehensive technology ecosystem designed for modern food service operations,
            integrating every touchpoint from ordering to analytics.
          </p>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
            <div className="bg-card p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-32 mx-auto mb-4 bg-accent/20 rounded-lg flex items-center justify-center">
                <span className="text-4xl">📱</span>
              </div>
              <h3 className="font-bold mb-2">Mobile App</h3>
              <p className="text-sm text-muted-foreground">Order & pay seamlessly</p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-32 mx-auto mb-4 bg-accent/20 rounded-lg flex items-center justify-center">
                <span className="text-4xl">💻</span>
              </div>
              <h3 className="font-bold mb-2">Web Portal</h3>
              <p className="text-sm text-muted-foreground">Full-featured web ordering</p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-32 mx-auto mb-4 bg-accent/20 rounded-lg flex items-center justify-center">
                <span className="text-4xl">🖥️</span>
              </div>
              <h3 className="font-bold mb-2">KDS</h3>
              <p className="text-sm text-muted-foreground">Kitchen Display System</p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="w-20 h-32 mx-auto mb-4 bg-accent/20 rounded-lg flex items-center justify-center">
                <span className="text-4xl">📊</span>
              </div>
              <h3 className="font-bold mb-2">Analytics</h3>
              <p className="text-sm text-muted-foreground">Real-time insights dashboard</p>
            </div>
          </div>

          {/* Display Systems */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="text-accent italic">Display</span> Systems
            </h3>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Captivating visual displays to showcase your menu and engage customers.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card p-8 rounded-lg">
                <h4 className="font-bold text-xl mb-4">Digital Signage Displays</h4>
                <p className="text-muted-foreground">
                  Eye-catching digital menu boards with dynamic content, promotional displays,
                  and nutritional information at a glance.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg">
                <h4 className="font-bold text-xl mb-4">Intelligent Menu Display</h4>
                <p className="text-muted-foreground">
                  AI-powered menu boards that adapt based on time of day, inventory levels,
                  and customer preferences.
                </p>
              </div>
            </div>
          </div>

          {/* Cafe Management */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">
              Café <span className="text-accent italic">Management</span> Tools
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card p-8 rounded-lg">
                <h4 className="font-bold text-xl mb-4">Control Desk</h4>
                <p className="text-muted-foreground mb-4">
                  Centralized command center for managing all café operations, from inventory
                  to staff scheduling and sales tracking.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg">
                <h4 className="font-bold text-xl mb-4">Access Dashboard</h4>
                <p className="text-muted-foreground mb-4">
                  Comprehensive analytics and reporting dashboard with real-time data
                  visualization and actionable insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Driven by <span className="text-accent italic">Intelligence</span>. Centered on <span className="text-accent italic">experience</span>.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            AI-leading in cafeteria & event tech means we harness data and intelligence to
            personalize, automate, and optimize every interaction—from predicting customer
            preferences to streamlining kitchen workflows.
          </p>
          <Link to="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8 py-6 text-lg">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Fusing great food with <span className="text-accent italic">great technology</span>
          </h2>
          <Link to="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8 py-6 text-lg">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
