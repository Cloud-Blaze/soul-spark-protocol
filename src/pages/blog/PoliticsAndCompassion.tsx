import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PoliticsAndCompassion = () => {
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
              <div className="text-6xl mb-4">🕊️</div>
              <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-6">
                The End of Red vs. Blue Thinking
              </h1>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>You can't be compassionate and chronically inflamed.</p>

              <p>Political division feeds on fog—rage, cortisol, emotional shortcuts. But when people's systems are calm, they listen. They soften.</p>

              <p>Unfogged doesn't change your politics. It restores your <strong>capacity for connection</strong>.</p>

              <p className="font-semibold text-primary text-xl">
                Healing the nervous system helps heal the nation.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticsAndCompassion;