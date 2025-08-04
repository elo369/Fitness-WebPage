import { Button } from "@/components/ui/button";
import { Heart, Users, Trophy, Target } from "lucide-react";
import { motion } from "motion/react";

export const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Community First",
      description:
        "We believe fitness is better together. Join a supportive community that celebrates every milestone.",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description:
        "Our certified trainers provide personalized coaching to help you reach your goals safely and effectively.",
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description:
        "Track your progress with our comprehensive fitness assessments and celebrate your achievements.",
    },
    {
      icon: Target,
      title: "Goal Focused",
      description:
        "Whether you're building strength, losing weight, or improving health, we'll create your perfect plan.",
    },
  ];

  return (
    <section
      className="py-20 "
      style={{
        backgroundImage: `
        radial-gradient(125% 125% at 50% 100%, #000000 40%, #141b4c 100%)
      `,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 ">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Why Choose
            <span className="text-yellow-400">
              HM Fitness?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            We're more than just a gym – we're your partners in building a
            healthier, stronger, and more confident you. Here's what sets us
            apart.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 ">
          {features.map((feature, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              key={feature.title}
              className="text-center group shadow-[5px_5px_20px_0px] shadow-[#282525]  p-4 rounded-md bg-[#0d0d0d]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-glow">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl text-white font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          className="text-center animate-scale-in "
        >
          <div className=" rounded-3xl p-8 md:p-12 shadow-glow max-w-4xl mx-auto bg-gradient-to-r from-red-600 to-orange-500">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
              Take the first step towards a healthier you. Join hundreds of
              satisfied members who've found their fitness home at HM Fitness.
            </p>
            <Button variant="default" size="lg" className="text-lg px-8 py-4 bg-orange-700">
              Join HM Fitness Today
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
