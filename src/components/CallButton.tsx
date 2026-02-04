import { Phone } from "lucide-react";

const CallButton = () => {
  return (
    <a
      href="tel:8180895628"
      className="fixed bottom-24 right-6 z-50 bg-[#3b82f6] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center animate-bounce delay-100"
      aria-label="Call Us"
    >
      <Phone className="w-7 h-7" />
    </a>
  );
};

export default CallButton;
