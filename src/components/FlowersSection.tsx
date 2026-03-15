import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const FlowersSection = () => {
  const flowers = [
    {
      name: "Single Red Rose 🌹",
      price: 50,
      image: "/single-red-rose.png",
      description: "Classic romantic gesture"
    },
    {
      name: "Sunflower 🌻",
      price: 399,
      image: "/sunflower-rose.png",
      description: "Perfect for surprises"
    },
    {
      name: "Premium Bouquet (12 stems)",
      price: 59,
      image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=400&fit=crop",
      description: "Make a grand statement"
    },
    {
      name: "Mixed Flower Basket 💐",
      price: 799,
      image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&h=400&fit=crop",
      description: "Roses, lilies & more"
    },
  ];

  const handleOrder = (name: string, price: number) => {
    const message = `Hi! I want to order ${name} (₹${price}) 🌹`;
    window.open(`https://wa.me/8180895628?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="flowers" className="py-16 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Fresh & Fragrant</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Beautiful Flowers 🌹
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hand-picked fresh roses and flowers delivered with love
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {flowers.map((flower) => (
            <div key={flower.name} className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all border border-border">
              <div className="aspect-square overflow-hidden">
                <img src={flower.image} alt={flower.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-card-foreground text-sm mb-1">{flower.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">{flower.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">₹{flower.price}</span>
                  <Button size="sm" onClick={() => handleOrder(flower.name, flower.price)}>
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

export default FlowersSection;
