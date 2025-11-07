import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutCoachSection } from "./components/AboutCoachSection";
import { WhySection } from "./components/WhySection";
import { TransformationSection } from "./components/TransformationSection";
import { MethodSection } from "./components/MethodSection";
import { OfferSection } from "./components/OfferSection";
import { FAQSection } from "./components/FAQSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { StickyCTAMobile } from "./components/StickyCTAMobile";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutCoachSection />
        <WhySection />
        <TransformationSection />
        <MethodSection />
        <OfferSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <StickyCTAMobile />
    </div>
  );
}