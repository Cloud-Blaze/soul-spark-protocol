import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import StackSection from "@/components/StackSection";
import OpenSourceSection from "@/components/OpenSourceSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <StackSection />
        <OpenSourceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
