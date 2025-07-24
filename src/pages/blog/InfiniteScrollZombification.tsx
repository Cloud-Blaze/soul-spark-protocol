import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const InfiniteScrollZombification = () => {
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
              <div className="text-6xl mb-4">📱</div>
              <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-6">
                Infinite Scroll Zombification
              </h1>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>When you're locked in infinite scroll, your brain isn't thinking—it's just surviving.
You're not learning. You're not feeling. You're consuming dopamine instead of creating anything real.</p>

              <p>Every swipe trains your nervous system to chase stimulation instead of meaning.
Every feed refresh costs you a moment you could've spent making art, writing truth, or praying through the fog.</p>

              <p>This isn't just distraction. It's <strong>biological zombification</strong>.</p>

              <p>Around 2012, as apps were optimized for addiction, something broke in society.
The average nervous system was already stressed—and now we were handing it an infinite stream of noise.</p>

              <p>2020 broke us. COVID was the last straw. Now we're all crawling back to the bottle—of dopamine, distraction, denial.</p>

              <p>Unfogged breaks the loop.</p>

              <p className="font-semibold text-primary text-xl">
                Put down the phone. Pick up the pencil. You still know how.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InfiniteScrollZombification;