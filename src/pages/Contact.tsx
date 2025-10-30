import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-background py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 text-primary">
            Get in touch with us!
          </h1>

          <form className="space-y-5 sm:space-y-6 bg-card p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl border-2 border-border">
            <div>
              <Label htmlFor="name" className="text-primary font-semibold">Name</Label>
              <Input id="name" placeholder="Full Name" className="mt-2" />
            </div>

            <div>
              <Label htmlFor="email" className="text-primary font-semibold">Contact Email address</Label>
              <Input id="email" type="email" placeholder="Email" className="mt-2" />
            </div>

            <div>
              <Label htmlFor="phone" className="text-primary font-semibold">Contact Number</Label>
              <Input id="phone" type="tel" placeholder="Phone" className="mt-2" />
            </div>

            <div>
              <Label className="text-primary font-semibold mb-3 block">
                Select an option which describes you best <span className="text-destructive">*</span>
              </Label>
              <RadioGroup defaultValue="corporate">
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="corporate" id="corporate" />
                  <Label htmlFor="corporate" className="font-normal cursor-pointer">
                    Corporate Company/ Client Interest
                  </Label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="partner" id="partner" />
                  <Label htmlFor="partner" className="font-normal cursor-pointer">
                    Partner Interest (Kitchen/ Service partners)
                  </Label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="university" id="university" />
                  <Label htmlFor="university" className="font-normal cursor-pointer">
                    University/ College
                  </Label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="events" id="events" />
                  <Label htmlFor="events" className="font-normal cursor-pointer">
                    Live Events
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other" className="font-normal cursor-pointer">
                    Other
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="company" className="text-primary font-semibold">Company/Organization name</Label>
              <Input id="company" placeholder="Company Name" className="mt-2" />
            </div>

            <div>
              <Label htmlFor="location" className="text-primary font-semibold">
                Location (City, Area) <span className="text-destructive">*</span>
              </Label>
              <Input id="location" placeholder="Location (City, Area)" className="mt-2" />
            </div>

            <div>
              <Label htmlFor="message" className="text-primary font-semibold">Describe your request here</Label>
              <Textarea 
                id="message" 
                placeholder="Explain your interest in brief" 
                className="mt-2 min-h-32"
              />
            </div>

            <div className="text-center pt-6 sm:pt-8">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 sm:px-16 py-6 sm:py-7 rounded-full text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                SUBMIT
              </Button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
