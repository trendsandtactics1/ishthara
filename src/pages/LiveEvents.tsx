import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const LiveEvents = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/80" />
        <div className="relative z-10 text-center px-4 container mx-auto animate-fade-in">
          <p className="text-accent font-semibold mb-3 uppercase tracking-wider text-sm sm:text-base">Crafting</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="text-accent italic drop-shadow-lg">Unforgettable</span> Event Memories,
            <br className="hidden sm:block" />
            One Bite at a Time.
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-primary-foreground/95 leading-relaxed">
            We specialize in crafting memorable event experiences through exceptional F&B
            curation, seamless management, and impeccable hospitality.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center max-w-5xl mx-auto">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">75+</h3>
              <p className="text-muted-foreground text-sm">Mega live events</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">5M+</h3>
              <p className="text-muted-foreground text-sm">Guests served</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">12+</h3>
              <p className="text-muted-foreground text-sm">Cities covered</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">500K+</h3>
              <p className="text-muted-foreground text-sm">Meals served</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">1500+</h3>
              <p className="text-muted-foreground text-sm">Food vendor partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Our Services for <span className="text-accent italic">Live Events</span> Sector
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            F&B MANAGEMENT • CURATION • TECH SERVICES
          </p>

          {/* F&B Management */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold mb-8">F&B Management & Curation</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We specialize in delivering elevated food and beverage experiences tailored to every
                  facet of your event. From thoughtfully curated menus to efficient logistics, our F&B
                  curation ensures that guests relish not just excellent food, but also effortless service
                  and memorable moments that last long beyond the event.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Quintessential F&B Experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Crew Catering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Artist Catering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>F&B Management and Curation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Volunteer & Agency Catering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>F&B & Lounge Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Food Truck Set-up</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden h-96">
                <img 
                  src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800" 
                  alt="Event setup" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Tech Services */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Tech Services</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden h-96 order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800" 
                  alt="Technology" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We bring cutting-edge technology to the heart of event operations, ensuring a seamless
                  experience for organizers and attendees alike. Our tech solutions power smooth
                  transactions, enhance guest engagement, and streamline every aspect of F&B management.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Cloud-based Event Management Platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Online Reporting Terminal (ORT)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Vending Machine</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Self-Ordering Kiosks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>App/Website for Event</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Seamless Network Connectivity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Streamlined Delivery Logistics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    <span>Jewelry Application</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">
            Curating exceptional <span className="text-accent italic">F&B experiences</span> at
            <br />
            live events.
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

export default LiveEvents;
