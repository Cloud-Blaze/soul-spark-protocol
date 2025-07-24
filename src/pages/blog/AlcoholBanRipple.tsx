import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AlcoholBanRipple = () => {
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
              <div className="text-6xl mb-4">🚫</div>
              <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-6">
                Could This Lead to an Alcohol Ban?
              </h1>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>Maybe not today. Maybe not tomorrow. But imagine a world where alcohol is no longer glorified—because a generation proved life is better without it.</p>

              <p>We stop handing kids a drink like it's a rite of passage. We stop calling poison a reward.</p>

              <p>Prohibition failed because of relapse.</p>

              <p className="font-semibold text-primary text-xl">
                Unfogged might not be the end of alcohol. But it could be the beginning of the end.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AlcoholBanRipple;