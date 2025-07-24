import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EarthCanBreathe = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Link 
          to="/blog" 
          className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          ← Back to Blog
        </Link>
        
        <article className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-4">🌍 When We Stop Masking Burnout: Earth Can Finally Breathe</h1>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">💸 The Capitalist Cost of Numbing</h2>
          
          <p>We don't talk about this enough:</p>
          
          <p>Every time you pop a pill, chase a stimulant, pour another drink, or scroll through a dopamine drip-feed of distraction to keep going through modern life—you're <em>spending energy to stay broken.</em></p>
          
          <p>And that energy isn't free.<br />
          It costs money.<br />
          It costs attention.<br />
          It costs creativity.</p>
          
          <p>But more than that? It costs the planet.</p>
          
          <p>Billions of dollars flow every year into systems designed not to <strong>heal</strong> your nervous system, but to <strong>sedate</strong> it enough so you can get back to work. From SSRIs to sleep aids, from alcohol to caffeine, from dopamine-maximizing media to high-stimulation everything, we've built an economic engine around <strong>burnout maintenance</strong>.</p>
          
          <p>We're not curing the disease. We're monetizing the symptoms.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">🧠 Nervous Systems in Collapse</h2>
          
          <p>Here's what happens in the late stages of modern burnout:</p>
          
          <ul>
            <li>Hormones crash</li>
            <li>Cortisol stays high</li>
            <li>Sleep becomes shallow or non-existent</li>
            <li>Gut health falls apart</li>
            <li>Emotional regulation disappears</li>
            <li>Creativity vanishes</li>
            <li>Spiritual connection goes dark</li>
          </ul>
          
          <p>Instead of recovery, the system demands <em>performance.</em> So we reach for:</p>
          
          <ul>
            <li>Energy drinks</li>
            <li>Antidepressants</li>
            <li>Over-the-counter everything</li>
            <li>Alcohol and weed</li>
            <li>Digital noise</li>
          </ul>
          
          <p>Every one of these is a <strong>market opportunity</strong>—not a healing solution.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">🌱 What Happens When We Actually Heal?</h2>
          
          <p>Imagine 100 million people reset their nervous systems. Not numbed. Not sedated. <strong>Healed.</strong></p>
          
          <p>What would happen?</p>
          
          <ul>
            <li>Less alcohol means less liver disease, car crashes, emergency room visits, domestic violence</li>
            <li>Less burnout means fewer people chasing mindless consumption to feel alive</li>
            <li>More presence means better parenting, deeper relationships, fewer divorces</li>
            <li>More sleep means fewer chronic diseases, more natural productivity</li>
            <li>More clarity means more <strong>art</strong>, <strong>innovation</strong>, and <strong>original thought</strong></li>
          </ul>
          
          <p>But most of all: <strong>the economic systems that depend on us staying fogged would collapse.</strong></p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">🔄 From Consumption to Creation</h2>
          
          <p>When you're clear and emotionally awake, you stop needing to fill the void with products.<br />
          You start creating.<br />
          You start imagining.<br />
          You start rebuilding.</p>
          
          <p>The human nervous system <em>is the generator of civilization</em>. When it breaks down, we build broken things. When it heals, we remember how to build <strong>beautiful things</strong>.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">🛠️ A New Trade Economy?</h2>
          
          <p>What if Earth's next economic model doesn't come from digital currencies or AI—but from <strong>healed humans</strong>?</p>
          
          <p>What if we moved from a scarcity model of selling sedation to a regenerative model of <strong>trading clarity</strong>?</p>
          
          <p>Imagine a world where:</p>
          
          <ul>
            <li>Art is currency</li>
            <li>Emotional labor is honored</li>
            <li>Calm minds build slow, enduring systems</li>
            <li>Farmers, healers, musicians, and craftspeople are seen as <em>central</em>, not fringe</li>
            <li>Nations collaborate on soil health and food security because no one's living in a fog anymore</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">✝️ The Earth Groans for Restoration</h2>
          
          <blockquote className="border-l-4 border-primary pl-4 italic">
            "For the creation waits in eager expectation for the children of God to be revealed." — Romans 8:19
          </blockquote>
          
          <p>We cannot restore the planet until we restore ourselves.<br />
          And we cannot restore ourselves until we stop numbing and start healing.</p>
          
          <p><strong>Unfogged</strong> isn't just a supplement protocol. It's a blueprint for planetary recovery.</p>
          
          <p>Because if enough nervous systems wake up, so will everything else.</p>
          
          <p>Let the fog lift.<br />
          Let the Earth breathe.</p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default EarthCanBreathe;