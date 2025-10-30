import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Blogs = () => {
  const blogs = [
    {
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600",
      category: "Food & Nutrition",
      title: "Fab 10: Writing List to Healthier Food Choices",
      excerpt: "Discover our top 10 recommendations for making healthier food choices in your daily meals...",
      date: "March 15, 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600",
      category: "Kitchen Management",
      title: "5 Ways to Save WORKFLOW: Fast and Effective Kitchen Management",
      excerpt: "Learn efficient kitchen management techniques that can save time and improve productivity...",
      date: "March 10, 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
      category: "Corporate Dining",
      title: "Meet Food, Its Belief: the R&D: Revolutionary Corporate Cuisine Management",
      excerpt: "Exploring innovative approaches to corporate dining and employee satisfaction...",
      date: "March 5, 2025"
    },
    {
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600",
      category: "Events",
      title: "Top Points Made for Managing Cafeteria Vendors at an Event",
      excerpt: "Essential tips for coordinating with multiple vendors at large-scale events...",
      date: "February 28, 2025"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 text-primary">Blogs</h1>
          <p className="text-center text-muted-foreground mb-12 sm:mb-16 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
            Insights, tips, and stories from the world of food and hospitality
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {blogs.map((blog, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 border-border hover:border-accent">
                <div className="h-56 sm:h-64 overflow-hidden relative">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6 sm:p-8">
                  <Badge className="mb-3 sm:mb-4 bg-accent text-accent-foreground hover:bg-accent/90">{blog.category}</Badge>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 group-hover:text-accent transition-colors leading-tight">
                    {blog.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">{blog.excerpt}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">{blog.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blogs;
