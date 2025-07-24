import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const JesusAndTheHolocene = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Impact Library
          </Link>

          <article className="prose prose-lg max-w-none">
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">✝️</div>
              <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-6">
                Jesus, Capitalism, and the Great Holocene Burnout
              </h1>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>This isn't just a nervous system fix. This is a spiritual reckoning.</p>

              <p>Jesus came to set the captives free. But the modern world has built cages made of dopamine, stress, ambition, and numbness.</p>

              <p>Unfogged isn't a replacement for Christ. It's a pathway to feel Him again.</p>

              <p className="font-semibold text-primary text-xl">
                Walk with Him. Clear the fog. Reclaim the Earth.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JesusAndTheHolocene;