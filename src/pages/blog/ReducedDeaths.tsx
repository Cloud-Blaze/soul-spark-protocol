import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ReducedDeaths = () => {
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
              <div className="text-6xl mb-4">🚑</div>
              <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-6">
                Less Death. Less Harm. More Presence.
              </h1>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>Every life lost in a drunk driving accident... every overdose... every 3AM fall down the stairs—it's not just a statistic. It's a nervous system that never got to rest.</p>

              <p>Unfogged won't prevent every tragedy. But it might prevent <em>yours</em>.</p>

              <p className="font-semibold text-primary text-xl">
                Presence saves lives. This protocol builds presence.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReducedDeaths;