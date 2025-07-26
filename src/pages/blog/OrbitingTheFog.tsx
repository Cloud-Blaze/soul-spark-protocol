import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const OrbitingTheFog = () => {
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
              <div className="text-6xl mb-4">🚫</div>
              <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-6">
                On and Off the Wagon Isn't Sobriety — It's Just Orbiting the Fog
              </h1>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>Let's get honest.</p>

              <p>Going "on and off the wagon" feels like progress.<br />
              You stop drinking for a week or a month.<br />
              You're proud. You sleep better. You hit the gym.<br />
              Then a Friday hits, or a rough patch rolls in, and you think:</p>

              <p className="text-center italic">
                "One drink's fine. I've got this now."
              </p>

              <p>And that one turns into two.<br />
              Or five.<br />
              Or just a foggy morning, a restless night, a subtle backslide into that muted, dull version of you.</p>

              <p>You don't spiral every time.<br />
              You're "functional."<br />
              But deep down… you know:</p>

              <p className="text-center text-xl font-semibold">
                You're still orbiting the addiction.<br />
                You're still thinking about it.<br />
                Negotiating with it.<br />
                Trying to master it.
              </p>

              <p>And that's not freedom.<br />
              That's a loop.</p>

              <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">It's Not Just the Drink. It's the Itch.</h2>

              <p>Real sobriety doesn't begin when you stop drinking.<br />
              It begins when you stop itching for it.</p>

              <p>That subtle voice in your body—the one that whispers,</p>

              <p className="italic pl-6">
                "Maybe just a sip."<br />
                "It's been a good day, I deserve it."<br />
                "I'll stop again after this weekend."
              </p>

              <p>That's the itch.<br />
              And as long as that itch is alive, you're not done.<br />
              You're just in temporary control of the leash.</p>

              <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">The Moment of Clarity Isn't Early</h2>

              <p>Here's the trap:</p>

              <p>You get a taste of clarity after 2 weeks sober.<br />
              You sleep better. You're less anxious.<br />
              You think:</p>

              <p className="text-center italic">
                "Wow, I feel like myself again."
              </p>

              <p>But you don't.<br />
              Not yet.</p>

              <p>You're just feeling less broken.<br />
              Not yet reborn.</p>

              <p>The real clarity comes later.<br />
              After your nervous system has fully recalibrated.<br />
              After 30, 60, 90 days or more.<br />
              After the receptors in your brain stop screaming.<br />
              After you can walk past a bar and feel nothing.</p>

              <p><strong>That's when you feel something wild:</strong></p>

              <p className="text-center text-xl font-semibold text-primary">
                You feel your old self return.
              </p>

              <p>Not the one who managed alcohol well.<br />
              The one before alcohol ever entered the picture.</p>

              <p><strong>The one who:</strong></p>

              <ul className="space-y-2 pl-6">
                <li>Laughed without looseners</li>
                <li>Cried without shame</li>
                <li>Loved without armor</li>
                <li>Slept like a tree, rooted and calm</li>
              </ul>

              <p>And in that moment—when you feel your first real belly laugh without anything in your system—you realize:</p>

              <p className="text-center text-xl font-semibold text-primary">
                Oh my God. This is what I've been chasing in a bottle the whole time.
              </p>

              <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">You Don't Need to Get Better at Moderating</h2>

              <p>You need to stop orbiting the poison.</p>

              <p>Stop doing laps around "just one."<br />
              Stop building your confidence on "controlled drinks"<br />
              Stop giving your energy to a substance that keeps showing you it doesn't love you back.</p>

              <p>Sobriety isn't a badge.<br />
              It's not perfection.<br />
              It's not about never feeling tempted.</p>

              <p>It's about finally hitting that moment where you say,</p>

              <p className="text-center text-xl font-semibold">
                "Why the hell would I ever want that again?"
              </p>

              <p>Because you've tasted something stronger:</p>

              <p className="text-center text-xl font-semibold text-primary">
                Yourself.
              </p>

              <p>Fully awake. Fully grounded. Fully clear.</p>

              <p className="text-center text-xl font-semibold text-primary">
                And once that version of you walks in the room—<br />
                you'll never mistake the fog for freedom again.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrbitingTheFog;