import { Button } from "@/components/ui/button";
import personalTrainingImage from "@/assets/personal-training1.jpg";
import { Dumbbell, Users2, Clock, Zap } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: Dumbbell,
      title: "Personal Training",
      description: "One-on-one coaching tailored to your fitness level and goals",
      features: ["Custom workout plans", "Nutrition guidance", "Progress tracking", "Flexible scheduling"]
    },
    {
      icon: Users2,
      title: "Group Classes",
      description: "High-energy classes that make fitness fun and social",
      features: ["HIIT workouts", "Strength training", "Cardio sessions", "All skill levels welcome"]
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Work out on your schedule with round-the-clock gym access",
      features: ["Keycard access", "Secure facility", "Clean & safe environment", "Modern equipment"]
    },
    {
      icon: Zap,
      title: "Nutrition Support",
      description: "Fuel your results with expert nutritional guidance",
      features: ["Meal planning", "Supplement advice", "Body composition analysis", "Healthy recipes"]
    }
  ];

  return (
    <section className="py-10 sm:py-20 ">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-6xl font-bold mb-6">
            Our 
            <span className="text-transparent bg-clip-text bg-gradient-primary ml-3">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive fitness solutions designed to help you achieve your goals, 
            whether you're just starting out or training for competition.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-card rounded-3xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Service Highlight */}
        <div className="bg-secondary rounded-3xl overflow-hidden shadow-elegant animate-scale-in">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 text-secondary-foreground flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Personal Training Excellence
              </h3>
              <p className="text-xl mb-8 text-secondary-foreground/80">
                Experience the difference of personalized fitness coaching. Our certified trainers 
                will design a program that fits your lifestyle and accelerates your results.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span>Certified & experienced trainers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span>Customized workout & nutrition plans</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span>Regular progress assessments</span>
                </div>
              </div>
              
              <Button variant="hero" size="lg" className="w-fit">
                Book Your Free Consultation
              </Button>
            </div>
            
            <div className="lg:h-full min-h-[400px]">
              <img 
                src={personalTrainingImage} 
                alt="Personal training session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};