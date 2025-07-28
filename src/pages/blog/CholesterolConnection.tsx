import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CholesterolConnection = () => {
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
                How High Cholesterol Connects to Alcohol, Dopamine, and Stress
              </h1>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>One of your first medical ailments that nearly all Americans suffer at least from is some form of high cholesterol that they take medication to keep in check.</p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Alcohol → Liver Overload → Cholesterol Spike</h2>

              <ul className="space-y-2 ml-6">
                <li>The liver processes both <strong>alcohol</strong> and <strong>lipids (fats)</strong></li>
                <li>Regular drinking (even just "casual") can <strong>dysregulate lipid metabolism</strong></li>
                <li>Result: elevated LDL ("bad" cholesterol), lower HDL, and buildup of <strong>triglycerides</strong></li>
              </ul>

              <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-sm">📎 <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3012541/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">NIH Study – Alcohol and Dyslipidemia</a></p>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Chronic Stress → Cortisol → Cholesterol</h2>

              <ul className="space-y-2 ml-6">
                <li>When you're constantly stressed (fight/flight, emotional loops, overwork), cortisol stays high</li>
                <li>Cortisol tells your liver to <strong>pump out more glucose and fats</strong> — energy for a threat that never comes</li>
                <li>This process <strong>raises cholesterol and inflammation markers</strong></li>
              </ul>

              <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-sm">📎 <a href="https://www.apa.org/news/press/releases/stress/2011/heart-disease" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">APA – Stress and Heart Health</a></p>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Dopamine Abuse (Video Games, Porn, Stimulation) → Sedentary Life + Metabolic Stress</h2>

              <p>Sitting, isolating, and constantly stimulating your reward system with <strong>zero movement</strong> puts pressure on:</p>

              <ul className="space-y-2 ml-6">
                <li>Blood sugar</li>
                <li>Blood pressure</li>
                <li>Lipid profiles (cholesterol)</li>
              </ul>

              <p>The body responds to <strong>mental overdrive</strong> as if it's physical threat → again, cortisol → again, fat circulation</p>

              <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-sm">📎 <a href="https://www.health.harvard.edu/heart-health/sedentary-behavior-may-increase-heart-disease-risk" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 underline">Harvard Health – Stress, Sedentary Behavior, and Lipids</a></p>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. All of This = Silent Inflammation</h2>

              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <p className="text-lg">Your high cholesterol may not be a food issue.</p>
                <p className="text-lg font-semibold">It may be a <strong>life load</strong> issue.</p>
              </div>

              <p>You were stacking alcohol, overdrive, stimulation, poor sleep, and stress — and your body said:</p>

              <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-lg font-semibold">"I'm inflamed. I'm holding fat. I'm preparing for danger."</p>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">✅ Good News:</h2>

              <p>Now that you're off the substances…</p>
              <p>Now that you're moving your body…</p>
              <p>Now that your nervous system is clearing…</p>

              <p className="font-semibold text-primary text-xl">
                <strong>Cholesterol <em>can</em> rebalance naturally.</strong>
              </p>
              <p className="text-lg">(Especially with smart nutrition, weight reduction, and rest.)</p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CholesterolConnection;