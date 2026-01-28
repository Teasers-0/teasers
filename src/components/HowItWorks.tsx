import { ShoppingBag, CreditCard, Truck } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: ShoppingBag,
      step: "01",
      title: "Choose Your Gift",
      description: "Browse our curated hampers and pick the perfect surprise for your special one.",
    },
    {
      icon: CreditCard,
      step: "02",
      title: "Pay Easily",
      description: "Quick payment via UPI, GPay, or PhonePe. We'll confirm your order on WhatsApp.",
    },
    {
      icon: Truck,
      step: "03",
      title: "We Deliver the Magic",
      description: "Sit back & relax! Your gift reaches your bae on time, with a smile guaranteed.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Simple & Easy</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            How It Works 🎯
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Three simple steps to make your Valentine's Day unforgettable
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((item, index) => (
            <div key={index} className="relative text-center group">
              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
              )}
              
              {/* Icon */}
              <div className="relative inline-flex mb-6">
                <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-10 h-10 text-accent-foreground" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {item.step}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
