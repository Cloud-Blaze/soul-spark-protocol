import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BluePillLoop = () => {
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
                When Both Parents Are in the Blue Pill Loop, One Has to Lead the Way Back To True Happiness
              </h1>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>Modern family life is beautiful — and brutal.</p>
              <p>Sleep-deprived moms with chronic anxiety.</p>
              <p>Checked-out dads numbing with casual drinks that slowly became routine.</p>

              <p>No one <em>means</em> to drift apart. But stress stacks.</p>
              <p>The house is a mess.</p>
              <p>The arguments don't make sense.</p>
              <p>The only peace is scrolling silently in different rooms.</p>

              <p>But here's the truth:</p>

              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <p className="text-xl font-semibold"><strong>If both parents are fogged, the kids grow up in the fog too.</strong></p>
              </div>

              <p>And somebody has to go first.</p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">👨‍👩‍👧‍👦 Dad — It's You.</h2>
              
              <p>You may not be the anxious one.</p>
              <p>You may not even be the drinker.</p>
              <p>But you're the one who can <strong>see the pattern</strong> clearly now — so it's on you to break it.</p>

              <p>Start the detox.</p>
              <p>Print the supplement list.</p>
              <p>Own the protocol — and <em>model</em> it.</p>

              <p>Not with lectures. Not with guilt.</p>
              <p>With calm. With clarity. With consistent love.</p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">👩 Mom won't trust a lecture. She'll trust your nervous system.</h2>

              <p>She needs to feel you steady — even when she's overwhelmed.</p>
              <p>She needs to see you eat clean, sleep deep, and say no to drinks <em>without judgment</em>.</p>

              <p>She'll start asking questions.</p>
              <p>She'll borrow your gummies.</p>
              <p>She'll stop snapping and start breathing again.</p>

              <p>But only when she <strong>feels</strong> that you're anchored.</p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">🧠 The Endgame:</h2>
              
              <ul className="space-y-2 ml-6">
                <li>Two parents, <em>present</em>, not surviving</li>
                <li>A house with <em>less yelling</em>, more repair</li>
                <li>A child who grows up seeing both parents <strong>clear</strong> — not just when the schedule allows, but as a way of being</li>
              </ul>

              <p>If the dad heals first, the family gets a map.</p>
              <p>And the mother — the heart of the house — finally gets a place to rest.</p>

              <p>No one gets out of the loop by blaming the other.</p>

              <p className="font-semibold text-primary text-xl">
                One person gets out first.<br />
                And then they <strong>open the door</strong>.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BluePillLoop;