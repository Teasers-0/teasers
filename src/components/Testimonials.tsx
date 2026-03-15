import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya S.",
      college: "Delhi University",
      text: "My friend was SO surprised! The hamper looked way more premium than I expected. Best ₹999 I ever spent 💕",
      rating: 5,
    },
    {
      name: "Rahul M.",
      college: "IIT Bombay",
      text: "Ordered at 11 PM, got confirmation instantly. Delivered on time to her hostel. She literally cried happy tears!",
      rating: 5,
    },
    {
      name: "Sneha K.",
      college: "Christ University",
      text: "The couple hoodies were such a hit! Everyone in our friend group wants to order now. Great quality!",
      rating: 5,
    },
    {
      name: "Arjun D.",
      college: "VIT Vellore",
      text: "Was nervous about buying online but WhatsApp support cleared all doubts. Super trustworthy team!",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Happy Moments</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            500+ Happy Customers 🎉
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Don't just take our word for it — here's what people are saying
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-shadow"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-card-foreground mb-4 leading-relaxed">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.college}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: "500+", label: "Happy Customers" },
            { number: "50+", label: "Colleges Served" },
            { number: "4.9★", label: "Average Rating" },
            { number: "98%", label: "On-Time Delivery" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold text-primary">{stat.number}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
