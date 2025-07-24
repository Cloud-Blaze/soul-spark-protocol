import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const UnblockedProductivity = () => {
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
              <div className="text-6xl mb-4">🚀</div>
              <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-6">
                Productivity Without Panic
              </h1>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>Before burnout, before caffeine addiction, before procrastination—there was flow.</p>

              <p>Most people aren't lazy. They're fogged. Their body is resisting movement because their <em>soul</em> never signed off on the current plan.</p>

              <p>When you reset the system, motivation becomes <strong>natural</strong>, not forced. Work feels aligned again.</p>

              <p className="font-semibold text-primary text-xl">
                This isn't hustle culture. It's human culture.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UnblockedProductivity;