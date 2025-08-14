import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import JoinMemberForm from "@/components/Form";
import GymSection from "@/components/GymSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        {/* <About /> */}
        <GymSection/>
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="contact">
        <Contact />
        <JoinMemberForm/>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
