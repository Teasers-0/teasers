import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, MessageCircle } from "lucide-react";

const HoodieSection = () => {
  const handleCustomize = () => {
    const message = "Hi! I want to customize a couple hoodie with our names/photo 👕💕";
    window.open(`https://wa.me/8180895628?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="py-16 px-4 bg-accent/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop"
              alt="Couple Hoodies"
              className="rounded-2xl shadow-xl w-full"
            />
            <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground text-sm px-4 py-2">
              <Sparkles className="w-4 h-4 mr-1" />
              Customize Yours
            </Badge>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Add-On Special</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
              Matching Couple Hoodies 👕💕
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Twin with your bae! Get premium cotton hoodies customized with your names,
              initials, or a special photo. The ultimate relationship flex.
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {[
                "Premium 300 GSM Cotton Blend",
                "Custom Name/Photo Print",
                "Available in S, M, L, XL, XXL",
                "King & Queen / Couples Design",
                "Matching Colors Available",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Pricing */}
            <div className="bg-card rounded-xl p-6 border border-border mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-sm text-muted-foreground">Starting at</span>
                <span className="text-3xl font-bold text-primary">₹799</span>
                <span className="text-lg text-muted-foreground line-through">₹1199</span>
                <Badge variant="secondary">33% OFF</Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Per hoodie • Couple set: ₹1499</p>
            </div>

            <Button onClick={handleCustomize} size="lg" className="w-full sm:w-auto">
              <MessageCircle className="w-5 h-5 mr-2" />
              Customize on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoodieSection;
