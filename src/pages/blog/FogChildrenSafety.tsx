import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const FogChildrenSafety = () => {
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
              <div className="text-6xl mb-4">🛡️</div>
              <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-6">
                The Fog Is Why Our Children Aren't Safe Anymore
              </h1>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>We like to talk about safety in terms of laws, neighborhoods, school rules…<br />
              But the real threat to our children?<br />
              Fogged-out adults.</p>

              <ul className="space-y-2 pl-6">
                <li>Driving while mentally fried, barely present.</li>
                <li>Scrolling through life, missing red lights and red flags.</li>
                <li>Reacting in anger instead of showing patience.</li>
                <li>Forgetting how to see a child, how to listen, how to love without condition.</li>
              </ul>

              <p>When your nervous system is maxed out—when you're sleep-deprived, caffeine-dependent, alcohol-recovering, and emotionally bankrupt—you can't show up with the care a child deserves.</p>

              <p className="text-center text-xl font-semibold text-primary">
                And that's the real danger.
              </p>

              <p>It's not just about addiction.<br />
              It's about disconnection.</p>

              <p className="text-center text-xl font-semibold">
                Disconnection from your body.<br />
                Disconnection from the people around you.<br />
                Disconnection from the sacred responsibility to protect what's innocent.
              </p>

              <p>We live in a culture where millions are walking around in stress survival mode, and they're not even aware of it.<br />
              And so what happens?</p>

              <ul className="space-y-2 pl-6">
                <li>A kid gets yelled at for acting like a kid.</li>
                <li>A spouse gets snapped at instead of held.</li>
                <li>A stranger gets treated like a threat instead of a brother.</li>
                <li>A child walking to school gets hit by a car because someone was mentally elsewhere.</li>
              </ul>

              <p>This is the cost of the fog.<br />
              And we don't talk about it enough.</p>

              <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">But Here's the Light:</h2>

              <p>You can choose to walk out of the fog.</p>

              <p>You can wake up tomorrow, walk outside, and let the morning sun reprogram your system.<br />
              You can stop drinking for 90 days—not just to "detox," but to reconnect.<br />
              You can show your nervous system what real love feels like again.</p>

              <p><strong>And when you do?</strong></p>

              <p className="text-center text-xl font-semibold">
                You don't just become a healthier adult.<br />
                You become a safe space again.<br />
                You become someone a child can trust.<br />
                You become someone your partner wants to lean into again.<br />
                You become someone your past self would be proud of.
              </p>

              <p className="text-center text-xl font-semibold text-primary">
                Because you remember what it felt like to care.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FogChildrenSafety;