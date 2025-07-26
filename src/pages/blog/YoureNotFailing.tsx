import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const YoureNotFailing = () => {
  useEffect(() => {
    document.title = "You're Not Failing — You're Feeling Again | Unfogged";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16 max-w-3xl">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
        >
          ← Back to Impact Library
        </Link>
        
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-6 text-foreground">
            🔥You're Not Failing — You're Feeling Again
          </h1>
          
          <div className="text-lg leading-relaxed space-y-6 text-foreground/80">
            <p>
              If anyone truly wants to be <strong>sober</strong> — not just dry, but <em>awake</em>, <em>present</em>, <em>restored</em> — they need to trust again.
            </p>
            
            <p>
              <strong>Trust their family.<br />
              Trust their wife.<br />
              Trust their nervous system.</strong>
            </p>
            
            <p>
              The first week without the numbing agents? It <em>will</em> mess with you.
              Your body will scream, your brain will loop, your nights will test your sanity.
            </p>
            
            <p>But here's the truth:</p>
            
            <blockquote className="border-l-4 border-primary pl-6 italic text-xl my-8">
              <strong>Night panic isn't relapse — it's resistance leaving the body.</strong>
            </blockquote>
            
            <p>
              To get through that first week, you don't need a doctor as much as you need a protocol and someone who's been there.
            </p>
            
            <hr className="my-12 border-border" />
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-2xl font-bold mb-4 text-foreground">🚀 UNFOGGED RULE #1:</h3>
              
              <blockquote className="text-xl font-semibold text-center italic">
                "Panic at night is not a failure.<br />
                It's the first sign your soul is waking up."
              </blockquote>
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default YoureNotFailing;