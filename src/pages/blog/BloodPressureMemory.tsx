import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BloodPressureMemory = () => {
  useEffect(() => {
    document.title = "Why Your Blood Pressure Spiked After the Hospital | Unfogged";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-6">
              💥 Why Your Blood Pressure Spiked After the Hospital
            </h1>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-deep-teal mb-4">
                The Nervous System Doesn't Forget — Even When You're "Safe"
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Not every spike in blood pressure is about food, fitness, or family history.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Sometimes, it's memory.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Biological memory.</strong><br />
                Stored in the lungs.<br />
                In the heart.<br />
                In the places stress hides when the mind moves on — but the body hasn't.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Here's what's <em>really</em> going on when someone experiences elevated blood pressure after a hospitalization or traumatic event.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-teal mb-4">
                🫀 1. Acute Stress Becomes Chronic if It's Never Discharged
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Hospital stays — especially those involving withdrawal, mania, or high anxiety — don't just end when the patient goes home.
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>The nervous system enters survival mode</li>
                <li>Blood vessels constrict</li>
                <li>The heart rate rises slightly and stays there</li>
                <li>The <strong>vagus nerve loses its rhythm</strong></li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Even in the quiet days that follow, the body acts like it's still under threat.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Result?</strong><br />
                Persistently elevated blood pressure — especially during still moments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-teal mb-4">
                🌬️ 2. The Lungs and Chest Store the Shock
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Ever try to take a deep breath post-crisis and feel like you <em>can't quite expand fully</em>?
              </p>
              <p className="text-muted-foreground leading-relaxed">
                That's not weakness.<br />
                That's <strong>bracing</strong>.
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>The diaphragm locks</li>
                <li>The chest wall tenses</li>
                <li>Lungs compress subtly but chronically</li>
                <li>Oxygen flow drops</li>
                <li>Anxiety rises → BP rises again</li>
              </ul>
              <p className="text-sm text-muted-foreground italic">
                📎 Harvard Health: Trauma May Be Hiding in Your Chest
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-teal mb-4">
                ❤️ 3. The Heart <em>Remembers</em> the Pattern
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                New research confirms what trauma survivors have felt for decades:<br />
                The <strong>heart</strong> is part of the memory loop.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 my-6">
                <p className="text-muted-foreground leading-relaxed">
                  Not just symbolically — <em>biologically.</em>
                </p>
              </blockquote>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>Autonomic rhythm disruptions</li>
                <li>Electrical sensitivity from stress</li>
                <li>Vagal nerve misfiring and rebound cycles</li>
              </ul>
              <p className="text-sm text-muted-foreground italic">
                📎 NIH: Autonomic Dysfunction in Cardiovascular Health
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Even without conscious thought, the heart <em>feels</em> what the body hasn't processed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-teal mb-4">
                🧠 TL;DR:
              </h2>
              <blockquote className="border-l-4 border-primary pl-4 my-6">
                <p className="text-muted-foreground leading-relaxed">
                  The hospital may have discharged your body —<br />
                  but your body never discharged the <strong>hospital.</strong>
                </p>
              </blockquote>
              <p className="text-muted-foreground leading-relaxed">
                That lingering tension?<br />
                That random chest tightness?<br />
                That inexplicable BP spike after weeks of "recovery"?
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>That's the memory trying to exit.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-deep-teal mb-4">
                ✅ And Yes — This <em>Can</em> Be Fixed
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                No, it's not permanent.<br />
                And no, you're not broken.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                What helps:
              </p>
              <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                <li>🏃 Movement → opens chest and resets vagal tone</li>
                <li>💦 Sweat → flushes cortisol and tension</li>
                <li>🧘‍♂️ Breathwork → activates the parasympathetic rest state</li>
                <li>🥦 Nervous system healing → reduces inflammation across heart tissue and arteries</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                The right recovery protocol doesn't just help the gut or the brain — it <em>restores the rhythm of the entire cardiovascular system.</em>
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BloodPressureMemory;