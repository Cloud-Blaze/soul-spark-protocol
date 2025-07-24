import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PreDigitalMemoryReawakening = () => {
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
              <div className="text-6xl mb-4">📼</div>
              <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-6">
                Before Phones, There Was You
              </h1>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>Your nervous system remembers childhood. Before screens. Before algorithms.</p>

              <p>People on this protocol report <strong>strange flashes of memory</strong>—riding a bike in the 80s, drawing in a notebook, calling a friend on a landline. It's not nostalgia. It's neurological resurfacing.</p>

              <p>You're not going backwards. You're going <em>home</em>.</p>

              <p className="font-semibold text-primary text-xl">
                We were alive before we were online. Let's remember how.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PreDigitalMemoryReawakening;