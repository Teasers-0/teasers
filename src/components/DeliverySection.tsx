import { Clock, MapPin, Shield, Gift } from "lucide-react";

const DeliverySection = () => {
  const features = [
    {
      icon: MapPin,
      title: "Campus Delivery",
      description: "Direct delivery to hostels, canteens, or classrooms across major colleges.",
    },
    {
      icon: Clock,
      title: "Flexible Time Slots",
      description: "Choose morning (9-12), afternoon (12-4), or evening (4-8) delivery.",
    },
    {
      icon: Shield,
      title: "100% Secure",
      description: "Your surprise stays secret. Discreet packaging with no hints outside.",
    },
    {
      icon: Gift,
      title: "Same Day Available",
      description: "Order before 2 PM for same-day delivery. Extra charges may apply.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-accent/20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Delivery Promise</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Your Gift, Delivered with Love 📦
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We treat every order like it's our own Valentine's surprise
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Time Slots */}
        <div className="mt-12 bg-card rounded-2xl p-8 max-w-3xl mx-auto border border-border">
          <h3 className="text-xl font-bold text-card-foreground text-center mb-6">
            🕐 Choose Your Delivery Slot
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { time: "9 AM - 12 PM", label: "Morning Surprise", emoji: "🌅" },
              { time: "12 PM - 4 PM", label: "Afternoon Delight", emoji: "☀️" },
              { time: "4 PM - 8 PM", label: "Evening Romance", emoji: "🌙" },
            ].map((slot, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-4 text-center border border-border hover:border-primary transition-colors cursor-pointer"
              >
                <span className="text-2xl mb-2 block">{slot.emoji}</span>
                <p className="font-semibold text-foreground">{slot.time}</p>
                <p className="text-sm text-muted-foreground">{slot.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
