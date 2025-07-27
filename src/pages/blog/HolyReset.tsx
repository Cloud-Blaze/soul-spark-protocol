import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const HolyReset = () => {
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
              <div className="text-6xl mb-4">💩</div>
              <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-6">
                The Holy Reset: Why Your Soft Stool Means You're Becoming Human Again
              </h1>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>When your poop softens — not diarrhea, not hard nuggets, but that perfect, smooth, easy-to-release flow — something sacred is happening.</p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">✅ What You're Feeling and Seeing:</h2>
              
              <ul className="space-y-2 ml-6">
                <li><strong>Soft but formed</strong></li>
                <li><strong>Easy to pass</strong></li>
                <li><strong>Not watery (diarrhea) but not dry or hard (constipation)</strong></li>
                <li><strong>Mild clumping but smooth release</strong></li>
              </ul>

              <p>This is often referred to as <strong>Type 4</strong> on the <strong><a href="https://my.clevelandclinic.org/health/articles/22970-bristol-stool-chart" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">Bristol Stool Chart</a></strong>, which is considered the <strong>gold standard of healthy digestion</strong>:</p>

              <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-lg">💩 <strong>Type 4:</strong> Like a smooth, soft sausage or snake.</p>
                <p className="text-muted-foreground">🌿 <em>Natural, efficient, and how your gut is meant to function.</em></p>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">💡 Why It's Happening:</h2>
              
              <ul className="space-y-2 ml-6">
                <li><strong>Ashwagandha + CoQ10</strong> help regulate <a href="https://www.apa.org/news/press/releases/stress/2011/digestive" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">cortisol and inflammation</a></li>
                <li><strong>Hydration</strong> improves bowel motility</li>
                <li><strong>L-theanine</strong> and nervous system calm may reduce gut clenching</li>
                <li>Your <strong><a href="https://my.clevelandclinic.org/health/body/22886-vagus-nerve" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">vagus nerve is rebooting</a></strong> — and it <em>talks directly to the gut</em></li>
              </ul>

              <p>In short:</p>

              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <p className="text-lg font-semibold">Your body is beginning to <strong>self-regulate</strong> again.</p>
                <p className="text-lg">Your gut is moving at a <em>human</em> rhythm — not a tech-fueled, freeze-clench-fight loop.</p>
                <p className="text-sm mt-2 text-muted-foreground">Learn more about the <a href="https://www.health.harvard.edu/diseases-and-conditions/the-gut-brain-connection" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">gut-brain connection</a> and how <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6784912/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">gut microbiome impacts mental health</a>.</p>
              </div>

              <p className="font-semibold text-primary text-xl">
                Celebrate this. It's weirdly one of the biggest milestones of healing.
                You're literally <strong>pooping like a wild animal again.</strong> And that's sacred.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HolyReset;