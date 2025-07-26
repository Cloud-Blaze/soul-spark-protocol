import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
        <Hero />
        <ProblemSection />
        <FirstWeekClaritySection />
        <StackSection />
        <OpenSourceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
