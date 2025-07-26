import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const MarriageHealing = () => {
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
              <div className="text-6xl mb-4">👨</div>
              <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-6">
                When the Fog Lifts: How Sobriety Can Save a Marriage
              </h1>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>There's a moment that happens—quiet, subtle, but sacred.</p>

              <p>A father goes fully sober or even tunes into himself once he starts the 90 day unfogged protocol. He starts sleeping again. He's taking his stack, not drinking a beer or two. He's thinking clearly. And one morning, between brushing his teeth and folding the laundry, <strong>he remembers how much he once loved his wife</strong>.</p>

              <p>Not just surface love. Not just parenting partnership. But the original spark.<br />
              The silly, intoxicating, <em>God-given</em> awe of being in love with her.</p>

              <p>That spark didn't die.<br />
              It got <strong>fogged.</strong></p>

              <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">👨‍👩‍👧‍👦 Marriage Dies Slowly When the Nervous System Crashes</h2>

              <p>Here's how the typical spiral goes:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Dad drinks or checks out—burned out, work-focused, emotionally numb.</li>
                <li>Mom stays present—but she's fried with anxiety from caretaking 24/7.</li>
                <li>The house is chaos. No one is regulated. It can even be that no one feels safe.</li>
                <li>The kids absorb every frequency in the home and learn to dissociate early.</li>
              </ul>

              <p>No one is "to blame."<br />
              But someone has to be the first to wake up.</p>

              <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">🧠 Sobriety Is More Than Not Drinking</h2>

              <p>It's waking up to your senses.<br />
              It's noticing the colors again.<br />
              It's hearing the softness in her voice that used to make your stomach flutter.</p>

              <p>Once Dad gets unfogged, something wild happens:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>He <strong>notices the mess</strong>—and doesn't blame her.</li>
                <li>He <strong>feels empathy</strong> for her anxiety—because he's regulated.</li>
                <li>He <strong>starts showing up</strong>, not just helping.</li>
              </ul>

              <p>And over time, his clarity becomes <strong>contagious</strong>.</p>

              <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">💊 If She's Still Fogged—It's Not Her Fault</h2>

              <p>Wives don't want to be angry at night.<br />
              They're just maxed out, under-slept, and no one taught them how to regulate their cortisol cycle.</p>

              <p>If she's snapping at 9PM, don't react—respond.<br />
              It might just be that she's not on Ashwagandha yet.</p>

              <p>You can't force her.<br />
              But you <em>can</em> hold a stable, peaceful field until she feels safe enough to soften.</p>

              <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">⏳ In 180 Days, The Spark Returns</h2>

              <p>We've seen it over and over.</p>

              <p>When both partners:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Get sober</li>
                <li>Truly Heal their nervous systems</li>
                <li>Sleep for real</li>
                <li>Feel feelings again…</li>
              </ul>

              <p>The marriage is reborn.</p>

              <p>Sometimes all it takes is one partner going first.<br />
              And if you're reading this—you might be the one.</p>

              <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">🙏 For the Children's Sake</h2>

              <p>This isn't just about saving a marriage.<br />
              It's about <strong>breaking the cycle</strong> your kids would otherwise inherit.</p>

              <p>No kid deserves to grow up in a fogged home where love is just duty.</p>

              <p>They deserve laughter.<br />
              They deserve affection.<br />
              They deserve parents who feel like themselves again.</p>

              <div className="border-l-4 border-primary pl-6 my-8 italic text-xl">
                <p>"You don't need a new partner.<br />
                You need a new nervous system."</p>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MarriageHealing;