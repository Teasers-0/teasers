import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const ChocolatesSection = () => {
  const chocolates = [
    {
      name: "Dairy Milk Silk Combo 🍫",
      price: 199,
      image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=400&fit=crop",
      description: "3 assorted Silk bars"
    },
    {
      name: "Ferrero Rocher Box",
      price: 399,
      image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=400&h=400&fit=crop",
      description: "16 pieces golden delight"
    },
    {
      name: "Premium Chocolate Box",
      price: 599,
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop",
      description: "Assorted imported chocolates"
    },
    {
      name: "Luxury Belgian Box 👑",
      price: 999,
      image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&h=400&fit=crop",
      description: "24 handcrafted pieces"
    },
  ];

  const handleOrder = (name: string, price: number) => {
    const message = `Hi! I want to order ${name} (₹${price}) 🍫`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="chocolates" className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Sweet Treats</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Delicious Chocolates 🍫
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Premium chocolates to sweeten your love story
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {chocolates.map((chocolate) => (
            <div key={chocolate.name} className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-border">
              <div className="aspect-square overflow-hidden">
                <img src={chocolate.image} alt={chocolate.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-card-foreground text-sm mb-1">{chocolate.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">{chocolate.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">₹{chocolate.price}</span>
                  <Button size="sm" onClick={() => handleOrder(chocolate.name, chocolate.price)}>
                    <Heart className="w-3 h-3 mr-1" />
                    Order
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChocolatesSection;
