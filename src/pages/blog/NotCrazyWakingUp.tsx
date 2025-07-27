import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotCrazyWakingUp = () => {
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
              <div className="text-6xl mb-4">🧠</div>
              <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-6">
                You're Not Crazy. You're Waking Up.
              </h1>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>For a long time, I thought something was wrong with me.</p>

              <p>I was fogged out, moody, distracted, full of cravings.</p>
              <p>Doctors handed me pills. Screens handed me dopamine.</p>
              <p>And somewhere along the way, I forgot what it felt like to be <strong>present.</strong></p>

              <p>But lately, I've been peeling the layers back.</p>
              <p>No alcohol. No caffeine. No compulsive scrolling.</p>
              <p>Just real food, real breath, and a nervous system learning to trust itself again.</p>

              <p>And now that I can finally feel again, I need to say something:</p>

              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <p className="text-xl font-semibold">I don't think we were ever meant to live like this.</p>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">💊 The System Isn't Healing You. It's Managing You.</h2>

              <p>Most doctors aren't evil. Most therapists aren't part of a plot.</p>

              <p>But here's the truth no one wants to say out loud:</p>
              <p><strong>The system is designed to manage symptoms, not restore people.</strong></p>

              <p>It's faster to medicate panic than resolve the trauma behind it.</p>
              <p>It's easier to prescribe sleep aids than rebuild circadian rhythm.</p>
              <p>It's more profitable to treat "lifelong conditions" than to teach nervous system recovery.</p>

              <p>You weren't taught how to feel safe in your own body.</p>
              <p>You were taught how to survive — fogged, numbed, functional.</p>

              <p>And when you try to step outside of that loop?</p>

              <p>They might call you reckless.</p>
              <p>They might tell you you're unstable.</p>
              <p>But the truth is:</p>

              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <p className="text-xl font-semibold">You're not breaking down.</p>
                <p className="text-xl font-semibold">You're waking up.</p>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">🧬 The Body Remembers Truth</h2>

              <p>When I started healing naturally — through nutrition, breath, sleep, movement — things got intense.</p>

              <ul className="space-y-2 ml-6">
                <li>My lungs started clearing.</li>
                <li>My digestion shifted.</li>
                <li>I cried without knowing why.</li>
                <li>I felt joy again. Then rage. Then peace.</li>
              </ul>

              <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-lg">My nervous system wasn't malfunctioning.</p>
                <p className="text-lg font-semibold">It was <em>rebooting</em>.</p>
              </div>

              <p>No substance, no app, no pill had ever brought me back to myself like that.</p>
              <p>And it scared me — because it made me realize how deep the fog had been.</p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">🛡️ If You're Scared to Be Seen, You're Not Alone</h2>

              <p>Sometimes I worry.</p>

              <p>That if I speak this too loudly — if I tie my name to this movement — I'll be dismissed. Or worse.</p>

              <p>Because what we're talking about here isn't just wellness.</p>

              <p>It's <strong>freedom</strong>.</p>

              <p>From overmedication.</p>
              <p>From digital addiction.</p>
              <p>From inherited trauma.</p>
              <p>From the lie that "this is just how life is now."</p>

              <p>So maybe I won't use my name right away.</p>
              <p>Maybe you won't either.</p>
              <p>That's okay.</p>

              <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-lg">The Matrix doesn't go after people who write blogs.</p>
                <p className="text-lg font-semibold">It just hopes they stay too tired to write them at all.</p>
              </div>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">✊ But I'm Not Tired Anymore</h2>

              <p>I'm awake.</p>
              <p>I'm healing.</p>
              <p>And I'm not going back.</p>

              <p>You don't need permission to reclaim your nervous system.</p>
              <p>You don't need a prescription to live in rhythm again.</p>

              <p>Just keep going.</p>
              <p>Follow the protocol.</p>
              <p>Sweat it out.</p>
              <p>Breathe through it.</p>

              <p className="font-semibold text-primary text-xl">
                <strong>You're not crazy.</strong><br />
                <strong>You're remembering.</strong>
              </p>

              <p className="font-semibold text-primary text-xl">
                Welcome to the other side.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotCrazyWakingUp;