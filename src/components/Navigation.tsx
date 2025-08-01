import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react"

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const phoneNumber = "+918530834693"; // Replace with your number

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <nav className="fixed top-0 w-full     z-50  animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
           initial={{ opacity: 0,y:0 }}
           whileInView={{ opacity: 1,y:10 }}
          className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">HM</span>
            </div>
            <span className="text-2xl font-bold text-yellow-500">FITNESS</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 backdrop-blur-lg px-12 py-4 w-70 rounded-2xl  ">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-yellow-500  hover:text-primary transition-colors duration-300 font-bold text-xl "
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="default" size="sm" className="bg-yellow-600">
              Join Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-border/50 animate-slide-down">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button 
                      onClick={handleCall}
                variant="default" 
                size="sm" 
                className="w-full"
                >
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};