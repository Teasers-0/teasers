import { Button } from "@/components/ui/button";
import { Heart, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import CountdownTimer from "./CountdownTimer";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/8180895628?text=Hi! I want to pre-book a Valentine's gift hamper 💝", "_blank");
  };

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Valentine's Gift Hamper" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-8">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium animate-pulse">
            <Heart className="w-4 h-4 fill-current" />
            Valentine's Week Special 2026
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-foreground mb-6 leading-tight">
          Make Their Heart <br />
          <span className="text-primary">Skip a Beat</span> 💕
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-8">
          Curated gift hampers, chocolates, flowers & personalized surprises delivered right to your campus.
          <span className="text-foreground font-medium"> Because love deserves more than just a text.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button size="lg" onClick={scrollToProducts} className="w-full sm:w-auto text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
            <Heart className="w-5 h-5 mr-2" />
            Pre-Book for Feb 14
          </Button>
          <Button size="lg" variant="outline" onClick={handleWhatsApp} className="w-full sm:w-auto text-lg px-8 py-6">
            <MessageCircle className="w-5 h-5 mr-2" />
            Order on WhatsApp
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">✅ 500+ Happy Couples</span>
          <span className="flex items-center gap-1">🚚 Campus Delivery</span>
          <span className="flex items-center gap-1">💯 100% Fresh & Premium</span>
        </div>

        {/* Countdown Timer */}
        <CountdownTimer />
      </div>
    </section>
  );
};

export default Hero;
