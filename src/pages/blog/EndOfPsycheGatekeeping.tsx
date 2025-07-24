import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const EndOfPsycheGatekeeping = () => {
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
              <div className="text-6xl mb-4">🧬</div>
              <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-6">
                No More Gatekeeping Your Feelings
              </h1>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>For decades, we outsourced our emotional regulation to pills and prescribers. Psychiatry told us we were broken, but never showed us how to reset.</p>

              <p>Unfogged dares to say: <strong>maybe you're not diseased—maybe you're depleted</strong>.</p>

              <p>This threatens entire industries. And that's okay.</p>

              <p className="font-semibold text-primary text-xl">
                Feelings don't need to be fixed. They need to be <em>felt</em>.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EndOfPsycheGatekeeping;