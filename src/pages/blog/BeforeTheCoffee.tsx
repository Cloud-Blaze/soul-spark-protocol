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

              <p>We didn't call it "circadian rhythm," but our bodies knew. The sun came up, and we opened our eyes. We padded barefoot to the window. We walked. We breathed. We were present.</p>

              <p><strong>And then...</strong><br />
              Screens. Cars. Coffee. Alcohol. Repeat.</p>

              <p>The modern loop is poison in disguise:</p>

              <ul className="space-y-2 pl-6">
                <li>Wake up exhausted from the wine or whiskey you thought helped you "relax."</li>
                <li>Sit in a car before you ever saw daylight.</li>
                <li>Dose yourself with caffeine to override your body's cry for repair.</li>
                <li>Stay locked in a stressed, hyperreactive state all day.</li>
                <li>Forget who the hell you even are.</li>
              </ul>

              <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">The Great Fog: This Isn't Just You—It's Everyone</h2>

              <p>Look around.<br />
              People are not well.</p>

              <p>You're not imagining it—there is a quiet epidemic of fogged-out humans, barely functioning under layers of:</p>

              <ul className="space-y-2 pl-6">
                <li>Alcohol hangovers</li>
                <li>Digital overstimulation</li>
                <li>Sleep dysfunction</li>
                <li>Caffeine compensation</li>
                <li>Nervous system dysregulation</li>
              </ul>

              <p>It's why people scream at red lights.<br />
              It's why marriages feel cold.<br />
              It's why parenting feels like war.<br />
              It's why people ghost each other, spiral into drama, or treat their neighbors like threats instead of souls.</p>

              <p>It's not because everyone's selfish—it's because they're fried.</p>

              <p className="text-center text-xl font-semibold">
                Chronically inflamed. Spiritually offline. Biologically reversed.
              </p>

              <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">You're Not Tired. You're Disconnected.</h2>

              <p>People think they're just "overwhelmed" or "burned out."<br />
              But most of the exhaustion we feel isn't from what we do—<br />
              —it's from being out of sync with what we are.</p>

              <p>Human beings were not made to blast dopamine at midnight and slam caffeine to fake alertness at 7:00 AM.<br />
              We were made to walk in the morning sun. To see a face we love. To serve. To breathe.</p>

              <p className="text-center text-xl font-semibold">
                We're solar-powered mammals.<br />
                We're biologically timed by light, not by emails.<br />
                We're wired for community, not chaos.
              </p>

              <p>But hundreds of millions of us are now living like nocturnal cyborgs—<br />
              —and wondering why life feels like a loop we can't escape.</p>

              <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">The Return: 90 Days to Remember Who You Are</h2>

              <p>Here's what no one told you:</p>

              <p>When you go 90 days without alcohol and on the UNFOGGED protocol,<br />
              and you force yourself to get sunlight and movement in the first hour of your day—<br />
              your entire nervous system will begin to repair.</p>

              <p><strong>You will:</strong></p>

              <ul className="space-y-2 pl-6">
                <li>Fall asleep with peace in your chest</li>
                <li>Wake up without the dread</li>
                <li>Laugh again—hard</li>
                <li>Cry again—honestly</li>
                <li>Start giving a damn about your neighbors, your partner, your kids… because you're not surviving anymore, you're alive</li>
              </ul>

              <p className="text-center text-xl font-semibold text-primary">
                This isn't a detox.<br />
                It's a return to who you were before the world scrambled your chemistry.
              </p>

              <p>You'll remember what it felt like to wake up as a kid—<br />
              before the fog, before the fake fixes, before the noise.</p>

              <p>You'll remember the real version of yourself—the one that loved people automatically.</p>

              <p>And once you feel that again…<br />
              you won't ever want to go back.</p>

              <p className="text-center text-xl font-semibold text-primary">
                We are the last generation before the entire population is numb on the internet and prescription drugs.
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