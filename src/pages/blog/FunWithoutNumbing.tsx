import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const FunWithoutNumbing = () => {
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
              <div className="text-6xl mb-4">🎲</div>
              <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-6">
                Adults Can Play Again
              </h1>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>We used to think fun required alcohol. That laughter needed permission. That joy came after the drink.</p>

              <p>But real joy is in you right now—it's just fogged over.</p>

              <p>Unfogged helps people <strong>return to a state where fun isn't scary, and pleasure doesn't require poison</strong>.</p>

              <p className="font-semibold text-primary text-xl">
                Grownups can play. Grownups can laugh. Sober doesn't mean serious.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FunWithoutNumbing;