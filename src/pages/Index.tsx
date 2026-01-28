import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FlowersSection from "@/components/FlowersSection";
import ChocolatesSection from "@/components/ChocolatesSection";
import Products from "@/components/Products";
import HoodieSection from "@/components/HoodieSection";
import HowItWorks from "@/components/HowItWorks";
import DeliverySection from "@/components/DeliverySection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FlowersSection />
      <ChocolatesSection />
      <Products />
      <HoodieSection />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <DeliverySection />
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
