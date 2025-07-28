import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const StressDrainage = () => {
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
              <div className="text-6xl mb-4">🫁</div>
              <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-6">
                Why You're Coughing Up Stress History: The Truth About Nervous System Drainage No One Tells You
              </h1>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>This is a <strong>raw biological truth</strong> no one warns you about when you're numbed out, overstimulated, and just trying to survive:</p>

              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <p className="text-xl font-semibold mb-2">You're not sick.</p>
                <p className="text-xl font-semibold">You're <strong>draining</strong>.</p>
              </div>

              <p>That tightness in your chest?</p>
              <p>That post-detox cough?</p>
              <p>That strange phlegm, sinus drip, or sudden urge to exhale deeply?</p>

              <p>It's not illness.</p>
              <p>It's <strong>your body finally exhaling the storm</strong>.</p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">🧬 What's Really Happening</h2>

              <h3 className="text-xl font-bold text-deep-teal mt-6 mb-3">1. Your Vagus Nerve Was Frozen</h3>

              <p>The <strong>vagus nerve</strong> connects your brainstem to your lungs, heart, and gut.</p>
              <p>It's the main circuit that regulates:</p>

              <ul className="space-y-2 ml-6">
                <li>Your breath</li>
                <li>Your digestion</li>
                <li>Your mood</li>
                <li>Your calm</li>
              </ul>

              <p>When you're in survival mode — years of stress, substance use, overstimulation — that nerve goes offline.</p>
              <p>Your diaphragm locks.</p>
              <p>Your lungs compress.</p>
              <p>Mucus builds up.</p>
              <p>You stop breathing <em>deeply</em> and start surviving <em>shallowly</em>.</p>

              <p>And the worst part?</p>
              <p>You stop noticing. Because the fog hides it all.</p>

              <h3 className="text-xl font-bold text-deep-teal mt-6 mb-3">2. You Stopped the Threat (aka the dopamine storm)</h3>

              <p>The moment you unplug — from alcohol, caffeine, screens, porn, rage, or fake productivity — your nervous system gets the message:</p>

              <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-primary">
                <p className="text-lg font-semibold">"We're safe now."</p>
              </div>

              <p>So it sends out a new signal:</p>

              <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                <p className="text-lg font-semibold"><strong>"Time to clean house."</strong></p>
              </div>

              <p>What comes out?</p>

              <ul className="space-y-2 ml-6">
                <li>Stuck mucus</li>
                <li>Old inflammation</li>
                <li>Suppressed immune reactions</li>
                <li>Emotional debris trapped in your fascia, breath, and gut</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">💥 Why It Feels So Intense</h2>

              <p>Because for the first time in years,</p>
              <p><strong>you're not numbing it anymore.</strong></p>

              <p>You used to scroll it away.</p>
              <p>Or drink it away.</p>
              <p>Or vent it away.</p>
              <p>Or work it away.</p>

              <p>Now you <strong>feel everything.</strong></p>
              <p>Your chest. Your jaw. Your thoughts.</p>
              <p>And most of all — the weight you were carrying.</p>

              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <p className="text-lg">This isn't illness.</p>
                <p className="text-lg font-semibold">It's your body catching up with reality.</p>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">🧠 TL;DR:</h2>

              <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-xl font-semibold"><strong>You're coughing up the physical memory of your own nervous system emergency.</strong></p>
              </div>

              <p>Stored in:</p>

              <ul className="space-y-2 ml-6">
                <li>🫁 <strong>Lungs</strong> (repressed breath, grief)</li>
                <li>🧠 <strong>Mind</strong> (racing thoughts, survival loops)</li>
                <li>🦠 <strong>Gut</strong> (clenched digestion, immune traffic jams)</li>
                <li>💪 <strong>Muscles</strong> (tight shoulders, chest, jaw, back)</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">💡 This Is What Healing Feels Like</h2>

              <p>If it's <strong>coming out</strong>,</p>
              <p>you're no longer <strong>holding it in</strong>.</p>

              <p>Let that sink in.</p>

              <p>You are:</p>

              <ul className="space-y-2 ml-6">
                <li>Clearing</li>
                <li>Releasing</li>
                <li>Resetting</li>
                <li>Becoming human again</li>
              </ul>

              <p>So when it drains…</p>
              <p>When it coughs…</p>
              <p>When you finally <strong>breathe deeper than ever before</strong> —</p>

              <p>Know this:</p>

              <p className="font-semibold text-primary text-xl">
                You're not broken.<br />
                You're healing — for real this time.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StressDrainage;