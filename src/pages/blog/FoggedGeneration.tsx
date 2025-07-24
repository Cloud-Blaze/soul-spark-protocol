import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FoggedGeneration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-4">
              📱 The Fogged Generation: What We Owe the iPad Kids
            </h1>
          </div>

          <div className="space-y-6 text-foreground">
            <p className="text-lg leading-relaxed">
              There's a generation after Millennials that never knew the world before the fog.
            </p>

            <p>
              They were raised on screens, shaped by algorithms, and handed anxiety like a second backpack before they could even ride a bike.
            </p>

            <p>
              They are the <strong>iPad Generation</strong>—and many of them never got to feel <em>clear</em> in the first place.
            </p>

            <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">🧠 They Grew Up Inside the Fog</h2>

            <p>
              These young adults—born after 1996 and especially after 2005—never stood a chance:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>No recess without smartphones</li>
              <li>No family dinner without Netflix in the background</li>
              <li>No teen years without social comparison and dopamine addiction</li>
              <li>No coping tools except alcohol, weed, and SSRIs</li>
            </ul>

            <p>
              They were fogged before they were formed.
            </p>

            <p>
              And now they're hitting their 20s and 30s with burnout, chronic anxiety, hormonal chaos, sleep disruption, and no blueprint for what clarity even feels like.
            </p>

            <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">🌍 They Inherited a World That Feels Like It's Ending</h2>

            <p>They grew up with:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Pandemic lockdowns during their most formative years</li>
              <li>Climate collapse headlines before puberty</li>
              <li>Mass shootings as routine school drills</li>
              <li>The slow collapse of trust in institutions, adults, even reality itself</li>
            </ul>

            <p>
              Why wouldn't they numb out?<br />
              Why wouldn't they reach for alcohol just to feel safe in a bar?<br />
              Why wouldn't they doomscroll their way to sleep, too scared to dream?
            </p>

            <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">👶 They Never Got to Be Kids</h2>

            <p>
              This might be the first American generation that never really played outside.<br />
              They never dug in dirt, built a tree fort, or rode bikes till the streetlights came on.
            </p>

            <p>
              They never got <strong>bored</strong> long enough to create.<br />
              They never got <strong>still</strong> long enough to hear their own thoughts.
            </p>

            <p>
              This is a nervous system problem. And it can't be solved with more tech.
            </p>

            <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">💊 They Are Medicated, Monitored, and Malfunctioning</h2>

            <p>This generation:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Was diagnosed early with anxiety, depression, ADHD</li>
              <li>Was put on pills before puberty</li>
              <li>Was taught that feelings are dangerous, symptoms to suppress</li>
            </ul>

            <p>
              But nobody taught them to feel.<br />
              Nobody taught them how to heal.<br />
              Nobody taught them that <strong>clarity was even an option</strong>.
            </p>

            <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">🕊️ What We Owe Them</h2>

            <p>
              We don't need to scold them for being on TikTok.<br />
              We need to give them an <em>off-ramp</em>.
            </p>

            <p>We owe them:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Protocols like <strong>Unfogged</strong> that show what healing the nervous system can look like</li>
              <li>Faith and spirituality that feels real—not institutional</li>
              <li>Alternatives to alcohol that don't feel like punishment</li>
              <li>Nature, silence, and space to remember what they were <em>before the scroll</em></li>
            </ul>

            <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">✝️ They Need Clarity to Find Christ</h2>

            <p>
              Most of this generation doesn't reject God—they just can't feel Him.<br />
              The fog is too thick.
            </p>

            <p>
              But when their nervous systems reset, when they sleep again, when their emotions return—it's often Jesus who greets them in the stillness.
            </p>

            <p>
              They don't need a new religion.<br />
              They need an invitation back to <strong>presence</strong>.
            </p>

            <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">🧠 Unfogged Isn't Just for the Broken</h2>

            <p>
              It's for the <strong>young who were never whole</strong> to begin with.
            </p>

            <p>
              And if we give them 90 days, some magnesium, a few gummies, and a place to cry in peace...<br />
              we just might give them back a future worth building—one where children knock on doors again to play outside, barefoot and alive, rediscovering the kind of joy no algorithm can replicate.
            </p>

            <div className="border-t border-border pt-8 mt-12 text-center">
              <p className="text-lg font-semibold text-deep-teal">
                <strong>This is the fogged generation. Let's show them the way out.</strong>
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default FoggedGeneration;