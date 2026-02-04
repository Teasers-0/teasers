import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "Simply click 'Order Now' on any product, and you'll be redirected to WhatsApp. Send us the hamper name, delivery address, recipient's name, and preferred time slot. We'll confirm your order within minutes!",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept UPI (GPay, PhonePe, Paytm), bank transfer, and cash on delivery (₹50 extra). Just pay via UPI after confirming your order on WhatsApp — it's super quick!",
    },
    {
      question: "Can I get same-day delivery?",
      answer: "Yes! Orders placed before 2 PM can be delivered same-day within city limits. Additional ₹99 for express delivery. For Valentine's Day, we recommend pre-booking to secure your slot.",
    },
    {
      question: "What if my gift gets damaged during delivery?",
      answer: "We pack everything with extra care, but if something goes wrong, just share a photo within 2 hours of delivery. We'll send a replacement or full refund — no questions asked!",
    },
    {
      question: "Can I customize the gift hamper?",
      answer: "Absolutely! Want to add a handwritten note, photo, or swap items? Just let us know on WhatsApp. Custom requests may have additional charges.",
    },
    {
      question: "Is the packaging discreet?",
      answer: "100%! We understand it's a surprise. Our packaging is plain outside with no hints about what's inside. Your secret is safe with us 🤫",
    },
    {
      question: "What's your refund policy?",
      answer: "Full refund if we can't deliver on time, or if items are damaged. Cancel up to 24 hours before delivery for a full refund. Less than 24 hours = 50% refund.",
    },
    {
      question: "Do you deliver to all colleges?",
      answer: "We currently deliver to major colleges in Delhi NCR, Mumbai, Bangalore, Pune, and Chennai. DM us your college name on WhatsApp to check availability!",
    },
  ];

  return (
    <section className="py-16 px-4 bg-accent/20">
      <div className="container mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Got Questions?</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Frequently Asked Questions 🤔
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know before ordering
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/50"
            >
              <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Still have questions */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="https://wa.me/8180895628?text=Hi! I have a question about LoveBox Gifts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            Chat with us on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
