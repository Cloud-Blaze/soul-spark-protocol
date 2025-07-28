import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FogNotYou = () => {
  useEffect(() => {
    document.title = "The Fog Isn't Who You Are — It's What's Been Done to You | Unfogged";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-6">
              🌀 The Fog Isn't Who You Are — It's What's Been Done to You
            </h1>
          </div>

          <div className="space-y-8">
            <section>
              <p className="text-muted-foreground leading-relaxed">
                Let's get something straight:
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you're spiraling right now — trapped in heavy drug use, out of control, maybe even without food, shelter, or safety —<br />
                <strong>you are not broken.</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You are <strong>fogged</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-teal mb-4">
                🚨 The Cycle Isn't Just Addiction — It's Survival on Fire
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Most people don't wake up and decide,
              </p>
              <blockquote className="border-l-4 border-primary pl-4 my-6">
                <p className="text-muted-foreground leading-relaxed">
                  "I think I'll throw away my life today."
                </p>
              </blockquote>
              <p className="text-muted-foreground leading-relaxed">
                What really happens is this:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li><strong>No food.</strong> No routine. Just hunger and shame.</li>
                <li><strong>No shelter.</strong> Constant cortisol. No safety.</li>
                <li><strong>No love.</strong> Just trauma, fear, and silence.</li>
                <li>Then comes the <strong>escape route</strong> — the only thing that brings momentary relief.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                A needle.<br />
                A pipe.<br />
                A bottle.<br />
                A scroll.<br />
                A lie.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                And for a second, it <em>works</em>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Until it doesn't.<br />
                Until the fog gets so thick you don't remember who you are.<br />
                You can't focus. You can't plan. You can't stop.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-teal mb-4">
                💀 The Fog Isn't You. It's the System You Fell Into.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The fog is chemical.<br />
                The fog is emotional.<br />
                The fog is the nervous system stuck in "please just survive another day" mode.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                And when someone's in that deep?
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>They don't need judgment.</strong><br />
                <strong>They don't need jail.</strong><br />
                <strong>They don't need one more government form.</strong>
              </p>
              <blockquote className="border-l-4 border-primary pl-4 my-6">
                <p className="text-muted-foreground leading-relaxed">
                  They need clarity. They need breath.<br />
                  They need the system <em>out</em> of fight-or-flight — and back into rhythm.
                </p>
              </blockquote>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-teal mb-4">
                💡 What if There Was a Path That Actually Worked?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We've been testing a natural recovery protocol. It's not magic. It's just <strong>biology + dignity</strong>:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>Supplements to reset the nervous system</li>
                <li>Daily rhythms to rewire dopamine</li>
                <li>Water, nutrition, breath, sleep</li>
                <li>And truth: spoken clearly, without shame</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                It's <strong>$60/month</strong> — for three months.<br />
                That's not a rehab center. That's not a $20K sober living scam.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                That's <strong>reality</strong> for people who want to <strong>unfog</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-teal mb-4">
                🧠 This Isn't a Market. It's a Movement.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The world is full of people in the fog.
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>Some are homeless.</li>
                <li>Some are in suits.</li>
                <li>Some are on fentanyl.</li>
                <li>Some are on antidepressants they never questioned.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                But they all want the same thing:
              </p>
              <blockquote className="border-l-4 border-primary pl-4 my-6">
                <p className="text-muted-foreground leading-relaxed">
                  To feel <strong>clear</strong> again.<br />
                  To be <strong>safe</strong> again.<br />
                  To love without numbing.<br />
                  To breathe without fear.
                </p>
              </blockquote>
              <p className="text-muted-foreground leading-relaxed">
                We can give that back.<br />
                Not perfectly. Not overnight.<br />
                But <strong>simply, powerfully, and affordably.</strong>
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-deep-teal mb-4">
                You're Not Too Far Gone.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                You're just lost in the fog.<br />
                And the way out is here.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Unfogged.</strong><br />
                $60/month. 3 months.<br />
                And your nervous system remembers how to be human again.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Let's do this — for the people the system forgot.<br />
                Because they were never broken. Just <em>fogged</em>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                And they deserve the light.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default FogNotYou;