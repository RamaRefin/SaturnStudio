import { Header } from './sections/Header';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { WhySection } from './sections/WhySection';
import { PortfolioSection } from './sections/PortfolioSection';
import { ProcessSection } from './sections/ProcessSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { PricingSection } from './sections/PricingSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';

export default function LandingPage() {
  return (
    <div className="bg-ice text-space">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-10rem] h-80 w-80 rounded-full bg-blue/10 blur-3xl animate-float" />
        <div className="absolute right-[-6rem] top-[18rem] h-72 w-72 rounded-full bg-orange/10 blur-3xl animate-float [animation-delay:1.5s]" />
        <div className="absolute bottom-[-8rem] left-[20%] h-64 w-64 rounded-full bg-space/5 blur-3xl animate-float [animation-delay:3s]" />
      </div>

      <Header />
      <main id="home">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhySection />
        <PortfolioSection />
        <ProcessSection />
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}