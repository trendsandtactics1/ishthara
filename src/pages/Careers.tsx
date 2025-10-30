import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Award, Heart, TrendingUp, Smile } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  const values = [
    { icon: Users, title: "Customer First", desc: "Always putting our customers at the heart of everything we do" },
    { icon: Target, title: "Excellence", desc: "Striving for the highest standards in all our endeavors" },
    { icon: Award, title: "Innovation", desc: "Embracing creativity and new ideas to stay ahead" },
    { icon: Heart, title: "Integrity", desc: "Operating with honesty and strong moral principles" },
    { icon: TrendingUp, title: "Growth", desc: "Continuous learning and development for all team members" },
    { icon: Smile, title: "Fun", desc: "Creating a positive and enjoyable work environment" },
  ];

  const departments = [
    { name: "Technology & IT", openings: 8, color: "bg-blue-100 text-blue-700" },
    { name: "Operations", openings: 12, color: "bg-green-100 text-green-700" },
    { name: "Procurement", openings: 4, color: "bg-purple-100 text-purple-700" },
    { name: "Marketing & Design", openings: 5, color: "bg-pink-100 text-pink-700" },
    { name: "Business Development", openings: 6, color: "bg-orange-100 text-orange-700" },
    { name: "Human Resource", openings: 3, color: "bg-red-100 text-red-700" },
  ];

  const perks = [
    { title: "Health Insurance", desc: "Comprehensive medical coverage for you and your family" },
    { title: "Flexible Hours", desc: "Work-life balance with flexible scheduling options" },
    { title: "Learning & Development", desc: "Continuous training and skill development programs" },
    { title: "Team Events", desc: "Regular team building activities and celebrations" },
    { title: "Career Growth", desc: "Clear career progression paths and opportunities" },
    { title: "Work from Home", desc: "Hybrid work model for eligible positions" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-secondary/40 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
                <span className="italic">Well hey you, buddy!</span>
                <br />
                Join Our <span className="text-accent">Isthara</span> Family
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-10 leading-relaxed">
                We're looking for passionate individuals who want to make a difference
                in the food industry. Join us in creating exceptional experiences
                and building a better future together.
              </p>
              <Link to="#openings">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  View Open Roles <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" 
                alt="Team collaboration" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent font-semibold mb-2 uppercase tracking-wide">A Little About Us</p>
          <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
          <p className="max-w-4xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Isthara is a leading F&B company focused on transforming food experiences through innovation,
            technology, and exceptional service. We're passionate about creating memorable moments for our
            customers while fostering a culture of excellence, creativity, and collaboration within our team.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Core Values of <span className="text-accent">Isthara</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <value.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-accent font-semibold mb-2 uppercase tracking-wide text-center">Ready to Join?</p>
          <h2 className="text-4xl font-bold text-center mb-12">
            Explore Careers with us
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {departments.map((dept, index) => (
              <div key={index} className="bg-card p-6 rounded-lg border-2 border-border hover:border-accent transition-colors">
                <h3 className="text-xl font-bold mb-3">{dept.name}</h3>
                <div className="flex items-center justify-between">
                  <span className={`px-4 py-1 rounded-full text-sm font-semibold ${dept.color}`}>
                    {dept.openings} Openings
                  </span>
                  <Button variant="ghost" size="sm" className="text-accent">
                    Apply <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Perks & Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {perks.map((perk, index) => (
              <div key={index} className="bg-card p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">{perk.title}</h3>
                <p className="text-muted-foreground text-sm">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            You can be the next
            <br />
            <span className="text-accent italic">Istharian!</span>
          </h2>
          <Link to="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8 py-6 text-lg">
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
