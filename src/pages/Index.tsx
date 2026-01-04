import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ImplantPackSection from "@/components/landing/ImplantPackSection";
import ProcessSection from "@/components/landing/ProcessSection";
import SuccessCasesSection from "@/components/landing/SuccessCasesSection";
import CTASection from "@/components/landing/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ImplantPackSection />
      <ProcessSection />
      <SuccessCasesSection />
      <CTASection />
    </main>
  );
};

export default Index;
