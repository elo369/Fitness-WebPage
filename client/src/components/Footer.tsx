import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">HM</span>
              </div>
              <span className="text-2xl font-bold">Fitness</span>
            </div>
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              Your community-focused gym dedicated to helping you achieve your fitness goals 
              in a supportive, professional environment.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300">
                <Facebook size={20} className="text-primary" />
              </div>
              <div className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300">
                <Instagram size={20} className="text-primary" />
              </div>
              <div className="w-10 h-10 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300">
                <Twitter size={20} className="text-primary" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 grid grid-col-4">
              <li><a href="#home" className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300">About</a></li>
              <li><a href="#services" className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300">Services</a></li>
              <li><a href="#contact" className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300">Membership</a></li>
              <li><a href="#" className="text-secondary-foreground/70 hover:text-primary transition-colors duration-300">Classes</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/70 text-sm">123 Fitness Street, Health City, HC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/70 text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/70 text-sm">info@fmfitness.com</span>
              </li>
            </ul>
            
            <div className="mt-4 p-3 bg-primary/10 rounded-lg">
              <p className="text-sm font-medium text-primary mb-1">24/7 Access Available</p>
              <p className="text-xs text-secondary-foreground/70">Staff Hours: Mon-Fri 6AM-10PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-foreground/60 text-sm">
              © {currentYear} HM Fitness. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};