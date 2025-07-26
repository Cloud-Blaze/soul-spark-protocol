import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HealingInfographicSection from "@/components/HealingInfographicSection";
import { ClarityPillChoice } from "@/components/ClarityPillChoice";
import ProblemSection from "@/components/ProblemSection";
import FirstWeekClaritySection from "@/components/FirstWeekClaritySection";
import StackSection from "@/components/StackSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Unfogged - From Fog to Flow | Nervous System Reset Protocol";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Snap scroll container for Hero and Clarity Pill sections */}
        <div className="snap-y snap-mandatory overflow-y-auto h-screen">
          <div className="snap-start h-screen">
            <Hero />
          </div>
          <div className="snap-start h-screen">
            <ClarityPillChoice redirectMode={true} />
          </div>
        </div>
        
        {/* Normal scrolling sections */}
        <div>
          <HealingInfographicSection />
          <ProblemSection />
          <FirstWeekClaritySection />
          <StackSection />
          <OpenSourceSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
