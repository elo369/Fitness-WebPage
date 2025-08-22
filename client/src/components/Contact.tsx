import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Contact = () => {

  const phoneNumber = "+918530834693"; // Replace with your number

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Fitness Street", "Health City, HC 12345"],
      action: "Get Directions",
      onClick: () => window.open("https://maps.google.com?q=123+Fitness+Street")
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(555) 123-4567", "Mon-Fri: 6AM-10PM"],
      action: "Call Now",
    onClick: () => window.location.href = "tel:+918530834693"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@fmfitness.com", "support@fmfitness.com"],
      action: "Send Email",
          onClick: () => window.location.href = "mailto:info@fmfitness.com"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["24/7 Gym Access", "Staff: Mon-Fri 6AM-10PM"],
      action: "View Schedule",
          onClick: () => alert("Gym is open 24/7. Staff available Mon-Fri 6AM-10PM.")

    }
  ];

  
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-500">
            Get In 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-700 ml-3">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your fitness journey? We're here to help you every step of the way. 
            Contact us today to learn more or schedule your free consultation.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="bg-slate-900 rounded-3xl p-10 shadow-elegant md:w-[600px] text-center mx-auto border border-white my-10">
  
  <div className="grid md:grid-cols-2 gap-8 ">
    {contactInfo.map((item, index) => (
      <div key={item.title} className="flex items-start space-x-4 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
        
        {/* Icon */}
        <div className="w-14 h-14 bg-gradient-to-r from-amber-200 to-yellow-700 rounded-2xl flex items-center justify-center flex-shrink-0">
          <item.icon className="w-7 h-7 text-white" />
        </div>
        
        {/* Content */}
        <div>
          <h3 className="text-lg font-bold mb-2 text-white ">{item.title}</h3>
          <div className="space-y-1 mb-2">
            {item.details.map((detail, idx) => (
              <p key={idx} className="text-gray-200">{detail}</p>
            ))}
          </div>
          <Button
            onClick={item.onClick}
            variant="outline" 
            size="sm" 
            className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
          >
            {item.action}
          </Button>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* CTA Section */}
        <div className="text-center animate-scale-in">
          <div className="bg-gradient-to-r from-amber-200 to-yellow-700 rounded-3xl p-8 md:p-12 text-center shadow-glow max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Life?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the XT Fitness community today and discover what you're truly capable of. 
              Your strongest self is waiting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
                Book Now
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