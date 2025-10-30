import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const University = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/80" />
        <div className="relative z-10 text-center px-4 container mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="italic text-primary-foreground/90">University</span>
            <br />
            <span className="text-accent drop-shadow-lg">CAFÉ & MESS SERVICES</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-primary-foreground/95 leading-relaxed">
            With our support in smooth aggregation and curation by connecting food vendors
            to the campus marketplace, students get to enjoy the variety of food offerings
            with optimal convenience.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 leading-tight">
            Brewing <span className="text-accent italic">best memories</span> for
            <br className="hidden sm:block" />
            Students at Isthara cafeterias.
          </h2>

          <div className="max-w-5xl mx-auto bg-card p-6 sm:p-10 lg:p-12 rounded-2xl shadow-xl mb-12 sm:mb-16 hover:shadow-2xl transition-shadow">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center p-6">
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-center text-muted-foreground leading-relaxed">
                WATCH HOW WE TRANSFORMED A UNIVERSITY CAFETERIA
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <p className="text-accent font-semibold mb-2 uppercase tracking-wide">How We Do It</p>
            <h3 className="text-3xl font-bold mb-6">
              Memorable Experiences for <span className="text-accent italic">Universities</span>
            </h3>
          </div>

          {/* Seamless Technology */}
          <div className="mb-20">
            <h4 className="text-2xl font-bold mb-8 text-center">
              <span className="text-accent italic">Seamless</span> Technology
            </h4>
            <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              We bring cutting-edge technology to campus dining, making meals easier to order and enjoy.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { num: "1", title: "Seamless Ordering & Pickup", desc: "Quick ordering with minimal wait times" },
                { num: "2", title: "Faster Service, Notified for Pickup", desc: "Real-time notifications when food is ready" },
                { num: "3", title: "On-campus Delivery", desc: "Convenient delivery to dorms and study areas" },
                { num: "4", title: "Drone Delivery Logistics for Universities", desc: "Innovative delivery solutions" },
                { num: "5", title: "App Engagement & Communication", desc: "Stay connected with latest menu updates" }
              ].map((item) => (
                <div key={item.num} className="bg-card p-6 rounded-lg border">
                  <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold mb-4">
                    {item.num}
                  </div>
                  <h5 className="font-bold mb-2">{item.title}</h5>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Delicious Food */}
          <div className="mb-20">
            <h4 className="text-2xl font-bold mb-8 text-center">
              <span className="text-accent italic">Delicious</span> Food at
              <br />
              Mess & Cafeteria
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { num: "1", title: "Handpicked Food Partners", desc: "Curated vendors for quality assurance" },
                { num: "2", title: "Mess Management", desc: "Full-service mess operations" },
                { num: "3", title: "Balanced CFSS Standards for Food", desc: "Meeting nutritional standards" }
              ].map((item) => (
                <div key={item.num} className="bg-card p-6 rounded-lg border">
                  <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold mb-4">
                    {item.num}
                  </div>
                  <h5 className="font-bold mb-2">{item.title}</h5>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Event Experiences */}
          <div>
            <h4 className="text-2xl font-bold mb-8 text-center">
              <span className="text-accent italic">Delightful</span> Event
              <br />
              Experiences
            </h4>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
                { num: "1", title: "Best Spot", desc: "Setting up food stalls at prime campus locations" },
                { num: "2", title: "Vibrant Cafes & Stalls", desc: "Creating vibrant dining experiences" }
              ].map((item) => (
                <div key={item.num} className="bg-card p-6 rounded-lg border">
                  <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold mb-4">
                    {item.num}
                  </div>
                  <h5 className="font-bold mb-2">{item.title}</h5>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            We'd be delighted to <span className="text-accent italic">transform your</span>
            <br />
            university cafeteria through good food, smart
            <br />
            technology, engaging event experiences.
          </h2>
          <Link to="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8 py-6 text-lg">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default University;
