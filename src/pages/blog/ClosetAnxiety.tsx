import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ClosetAnxiety = () => {
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
              <div className="text-6xl mb-4">🧠</div>
              <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-6">
                From Paranoia to Peace
              </h1>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>People glued to fear cycles—news loops, conspiracy rabbit holes, constant worry—aren't broken. They're overloaded. Their threat-response system is in overdrive, and they've forgotten what calm feels like.</p>

              <p>The Unfogged protocol doesn't just reduce stress. It <strong>restores agency</strong>. People begin to think again, not just react.</p>

              <p className="font-semibold text-primary text-xl">
                It's not about changing opinions. It's about giving the brain room to breathe.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ClosetAnxiety;