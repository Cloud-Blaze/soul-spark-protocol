import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { RedPillContent } from "../components/RedPillContent";

export function ChooseClarity() {
  const [searchParams] = useSearchParams();
  const [choice, setChoice] = useState<'blue' | 'red' | null>(null);

  useEffect(() => {
    document.title = "Choose Clarity: Take the Red Pill of Awareness";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Curious what life looks like unplugged? Choose the clarity pill. This is your invitation to wake up from fog, rebuild focus, and reclaim your humanity.");
    }
    
    // Auto-select red pill if coming from clarity-reset
    if (searchParams.get('auto') === 'red') {
      setChoice('red');
    }
  }, [searchParams]);

  const handleBluePill = () => {
    setChoice('blue');
  };

  const handleRedPill = () => {
    setChoice('red');
  };

  if (choice === 'blue') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-blue-900/50 border border-blue-500/30 rounded-2xl p-12 backdrop-blur-sm">
              <h1 className="text-4xl md:text-6xl font-bold text-blue-100 mb-8">
                💭 You've chosen the comfort zone… but at what cost?
              </h1>
              <div className="text-lg md:text-xl text-blue-200 space-y-6 leading-relaxed">
                <p>
                  By picking the Blue Pill, you've chosen the easy way—staying in familiar patterns, numbed out, and disconnected. But it's a quieter kind of suffering.
                </p>
                <p>
                  You'll still scroll notifications. You'll still feel restless. You'll still wake up feeling "off" and wonder where your focus and energy went.
                </p>
                <p>
                  You might avoid the mess, but you don't escape it forever. Avoiding the fog doesn't mean the fog goes away—it just grows silently beneath the surface.
                </p>
                <p className="font-semibold">
                  That's the loop that keeps you stuck in digital rat race syndrome: burnout, distraction, technostress and anxiety, even if nothing else looks wrong.
                </p>
                <p className="text-blue-300 italic">
                  <a href="https://tvtropes.org/pmwiki/pmwiki.php/Main/RedPillBluePill" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-100 transition-colors">
                    TV Tropes
                  </a>
                </p>
              </div>
              <Button 
                onClick={() => setChoice(null)}
                className="mt-12 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-8 py-4 text-lg font-semibold rounded-xl"
              >
                ← Back to Choose Again
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (choice === 'red') {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <RedPillContent />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-red-950">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              💊 Take the Clarity Pill
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 mb-4">
              Will You Choose the Fog or the Clear?
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Curious what life looks like unplugged? This is your invitation to wake up from fog, rebuild focus, and reclaim your humanity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Blue Pill - Smaller, less prominent */}
            <div className="relative">
              <button
                onClick={handleBluePill}
                className="w-full bg-gradient-to-br from-blue-600/80 to-blue-800/80 hover:from-blue-500/90 hover:to-blue-700/90 text-white p-8 rounded-2xl border border-blue-400/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <div className="text-6xl mb-4">🔵</div>
                <h3 className="text-2xl font-bold mb-4">The Blue Pill</h3>
                <p className="text-blue-100">
                  Stay comfortable. Keep scrolling. Nothing needs to change.
                </p>
                <p className="text-sm text-blue-200 mt-4 italic">
                  "Ignorance is bliss"
                </p>
              </button>
            </div>

            {/* Red Pill - Larger, more prominent, easier to click */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur opacity-75 animate-pulse"></div>
              <button
                onClick={handleRedPill}
                className="relative w-full bg-gradient-to-br from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white p-12 rounded-2xl border border-red-400/50 transition-all duration-300 hover:scale-110 shadow-2xl shadow-red-500/25"
              >
                <div className="text-8xl mb-6">🔴</div>
                <h3 className="text-3xl font-bold mb-6">The Red Pill</h3>
                <p className="text-red-100 text-lg leading-relaxed">
                  See the truth. Break free from digital fog. Reclaim your focus, creativity, and peace.
                </p>
                <p className="text-sm text-red-200 mt-6 italic font-semibold">
                  "The truth will set you free"
                </p>
                <div className="mt-4 text-yellow-300 font-bold">
                  ⚡ RECOMMENDED PATH ⚡
                </div>
              </button>
            </div>
          </div>

          <div className="mt-16 text-gray-400">
            <p className="text-sm">
              This choice will determine your journey toward clarity or continued fog.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}