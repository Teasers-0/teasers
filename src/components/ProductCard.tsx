import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Heart } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  items: string[];
  popular?: boolean;
  image: string;
}

const ProductCard = ({ name, price, originalPrice, items, popular, image }: ProductCardProps) => {
  const handleOrder = () => {
    const message = `Hi! I want to order the ${name} hamper (₹${price}) 💝`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className={`relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border ${popular ? "border-primary ring-2 ring-primary/20" : "border-border"}`}>
      {popular && (
        <Badge className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground">
          Most Popular 🔥
        </Badge>
      )}
      
      {/* Image */}
      <div className="aspect-square overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-card-foreground mb-2">{name}</h3>
        
        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-3xl font-bold text-primary">₹{price}</span>
          {originalPrice && (
            <span className="text-lg text-muted-foreground line-through">₹{originalPrice}</span>
          )}
        </div>

        {/* Items List */}
        <ul className="space-y-2 mb-6">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button onClick={handleOrder} className="w-full" size="lg">
          <Heart className="w-4 h-4 mr-2" />
          Order Now
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
