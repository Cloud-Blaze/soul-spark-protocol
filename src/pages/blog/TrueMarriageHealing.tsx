import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TrueMarriageHealing = () => {
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
              <div className="text-6xl mb-4">❤️</div>
              <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-6">
                Love Comes Back When the Fog Lifts
              </h1>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>When the fog lifts from the nervous system, feelings return. Not just dramatic ones—subtle ones. You start to feel your spouse's eyes on you. You hear their breath in the morning. The soft stuff you tuned out comes flooding back.</p>

              <p>Most marriages don't fail from crisis. They fade from numbness.</p>

              <p>Unfogged helps bring people back into their own bodies—and back into each other's presence.</p>

              <p className="font-semibold text-primary text-xl">
                The spark didn't die. It just got buried. Now it gets to breathe again.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrueMarriageHealing;