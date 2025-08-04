import { Button } from "@/components/ui/button";
import heroImage from "@/assets/herogymm.webp";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white z-11">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-4 "
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0  bg-[#0000009e]" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl py-14 sm:py-0 mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6  animate-fade-in">
          Transform Your Life at
          <span className="block   text-8xl items-center text-transparent bg-clip-text bg-gradient-primary bg-black p-6">
            HM <span className="text-white bg-gradient-primary px-4 py-1 rounded-md text-6xl text-center">FITNESS</span> 
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl font-bold text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
          Join our community-focused gym where fitness meets friendship. 
          Professional training, modern equipment, and unlimited support on your wellness journey.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Button variant="hero" size="lg" className="text-lg px-8  py-4">
            Start Your Journey
          </Button>
          <Button variant="ghost-hero" size="lg" className="text-lg px-8 py-4">
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-bounce-in" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-bounce-in" style={{ animationDelay: '0.5s' }} />
    </section>
  );
};