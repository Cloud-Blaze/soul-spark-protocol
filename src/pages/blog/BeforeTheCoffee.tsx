import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BeforeTheCoffee = () => {
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
              <div className="text-6xl mb-4">☀️</div>
              <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-6">
                Before the Coffee, Before the Chaos: A 90-Day Return to Who You Were
              </h1>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>There was a time—before the phone alarms, before the cold brew, before the tight chest and the adult fog—when we woke up clear.</p>

              <p>We didn't call it "circadian rhythm," but our bodies knew. The sun came up, and we opened our eyes. We padded barefoot to the window. We walked. We breathed. We didn't need to "biohack" shit because the natural system was running just fine.</p>

              <p><strong>And then...</strong><br />
              Screens. Cars. Coffee. Alcohol. Repeat.</p>

              <p>The adult loop is poison in disguise:</p>

              <ul className="space-y-2 pl-6">
                <li>Wake up exhausted from the wine or whiskey you thought helped you "relax."</li>
                <li>Sit in a car before you ever saw daylight.</li>
                <li>Dose yourself with caffeine to override your body's cry for repair.</li>
                <li>Keep the system going until you forget what it feels like to actually be awake.</li>
              </ul>

              <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">The Forgotten Morning: Your Body Remembers</h2>

              <p>This post isn't about judging you. It's about inviting you back.</p>

              <p>Back to the version of you before the coping. Before the drinks. Before your body forgot how to make its own joy.</p>

              <p>Because when you go 90 days without alcohol, and you force yourself to walk outside every damn morning—no matter how bad you slept—something wild happens:</p>

              <p className="text-center text-xl font-semibold text-primary">
                You reset.<br />
                You sync.<br />
                You remember.
              </p>

              <p>Not in your brain—your nervous system remembers.</p>

              <ul className="space-y-2 pl-6">
                <li>You get tired at night like a kid again.</li>
                <li>You wake up early without an alarm.</li>
                <li>You start laughing louder.</li>
                <li>You start feeling your own life again.</li>
              </ul>

              <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">You're Not Tired. You're Disconnected.</h2>

              <p>People think they're just "tired parents" or "overworked professionals."<br />
              But most of the exhaustion we feel isn't from what we do—<br />
              —it's from being out of sync with what we are.</p>

              <p>Human beings were not made to blast dopamine at midnight on a couch, pass out with wine, and jolt themselves into fake alertness at 7:00 AM with espresso and TikTok.</p>

              <p className="text-center text-xl font-semibold">
                We are solar-powered mammals.<br />
                We are ritual-based creatures.<br />
                We are recovering from generational drift.
              </p>

              <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">Try It: 90 Days. No Alcohol. Morning Sun. Daily Walk.</h2>

              <p className="text-center text-xl font-semibold text-primary">
                This is not a challenge.<br />
                This is not a brand.<br />
                This is a fucking resurrection.
              </p>

              <p>Do this, and one morning soon, you'll wake up…<br />
              …and you'll feel it.</p>

              <p className="text-center text-xl font-semibold">
                That version of you that was never broken,<br />
                never fogged,<br />
                never anxious—<br />
                he's still in there.
              </p>

              <p className="text-center text-xl font-semibold text-primary">
                You don't have to find him.<br /><br />
                Just let the sun do what it's done for millions of years.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BeforeTheCoffee;