import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Fitness Street", "Health City, HC 12345"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(555) 123-4567", "Mon-Fri: 6AM-10PM"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@fmfitness.com", "support@fmfitness.com"],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["24/7 Gym Access", "Staff: Mon-Fri 6AM-10PM"],
      action: "View Schedule"
    }
  ];

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In 
            <span className="text-transparent bg-clip-text bg-gradient-primary ml-3">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your fitness journey? We're here to help you every step of the way. 
            Contact us today to learn more or schedule your free consultation.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <div 
              key={item.title}
              className="bg-card rounded-3xl p-8 text-center shadow-elegant hover:shadow-glow transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              
              <div className="space-y-2 mb-6">
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
              >
                {item.action}
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-scale-in">
          <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-center shadow-glow max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Life?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the HM Fitness community today and discover what you're truly capable of. 
              Your strongest self is waiting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
                Start Free Trial
              </Button>
              <Button variant="ghost-hero" size="lg" className="text-lg px-8 py-4">
                Schedule Tour
              </Button>
            </div>
            
            <p className="text-white/70 mt-6">
              No commitment required • Cancel anytime • Free fitness assessment included
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};