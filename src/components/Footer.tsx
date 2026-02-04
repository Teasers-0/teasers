import { Heart, Instagram, MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Teasers Logo" className="w-10 h-10 rounded-full object-cover" />
              Teasers
            </h3>
            <p className="text-secondary-foreground/80 mb-4">
              Making college love stories extra special with curated gift hampers,
              delivered right to your campus. Pay easily via PhonePe!
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/teasers_0?igsh=MWJpb2Y1NmlocTdmOQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/8180895628"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>
                <a href="#flowers" className="hover:text-primary transition-colors">Flowers</a>
              </li>
              <li>
                <a href="#chocolates" className="hover:text-primary transition-colors">Chocolates</a>
              </li>
              <li>
                <a href="#products" className="hover:text-primary transition-colors">Gift Hampers</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
              </li>
              <li>
                <a href="https://wa.me/8180895628" className="hover:text-primary transition-colors">Track Order</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-secondary-foreground/80">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                <a href="tel:8180895628" className="hover:text-primary transition-colors">
                  +91 81808 95628
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:teasers.store32@gmail.com" className="hover:text-primary transition-colors">
                  teasers.store32@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-primary" />
                <a href="https://www.instagram.com/teasers_0?igsh=MWJpb2Y1NmlocTdmOQ%3D%3D&utm_source=qr" className="hover:text-primary transition-colors">
                  @teasers_0
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>Pune Maharashtra</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>© 2025 Teasers. Made with ❤️ for college couples.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            {" • "}
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            {" • "}
            <a href="#" className="hover:text-primary transition-colors">Refund Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
