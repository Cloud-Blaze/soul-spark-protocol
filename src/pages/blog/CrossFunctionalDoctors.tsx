import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const CrossFunctionalDoctors = () => {
  useEffect(() => {
    document.title = "Where Are the Cross-Functional Doctors? | Unfogged Blog - Healthcare Systems & Nervous System Care";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🧠</div>
            <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-6">
              Where Are the Cross-Functional Doctors?
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The human nervous system is failing quietly in millions of people—and modern healthcare has no coordinated plan to fix it.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed mb-6">
              We're not talking conspiracy.
              We're talking about a slow, systemic oversight that's left a global population stuck in cycles of:
            </p>

            <ul className="text-lg mb-8 space-y-2">
              <li>Alcoholism</li>
              <li>Burnout</li>
              <li>Psychiatric misdiagnosis</li>
              <li>Sleep collapse</li>
              <li>Emotional numbness</li>
            </ul>

            <p className="text-lg leading-relaxed mb-8">
              And somehow, despite decades of research and billions in health tech, no one is responsible for putting the nervous system back together.
            </p>

            <Card className="mb-8 border-primary/20">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-deep-teal mb-4 flex items-center">
                  🚑 Medicine Is Siloed — But Our Brains Aren't
                </h2>
                <p className="text-lg mb-4">If your nervous system is breaking down, where do you go?</p>
                <ul className="space-y-2 text-lg">
                  <li>A psychiatrist gives you meds.</li>
                  <li>A neurologist scans your brain for structural damage.</li>
                  <li>A sleep doctor gives you a CPAP.</li>
                  <li>A therapist talks about trauma.</li>
                  <li>A nutritionist talks about B-vitamins and magnesium.</li>
                </ul>
                <p className="text-lg mt-4">
                  Each is speaking to one part of the system. But no one is listening to the whole symphony.
                </p>
                <p className="text-lg mt-4 font-semibold">
                  The result? Millions of people with nervous systems that are chemically exhausted, emotionally blunted, and nutritionally depleted—yet still told "everything looks normal."
                </p>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-deep-teal mb-4 flex items-center">
              🍷 Alcohol's Role Gets Glossed Over
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              In many countries, the long-term neurological impact of alcohol isn't seriously discussed unless someone is in rehab or liver failure.
            </p>
            <p className="text-lg mb-4">But alcohol:</p>
            <ul className="text-lg mb-6 space-y-2">
              <li>Hijacks GABA/glutamate balance</li>
              <li>Disrupts sleep architecture (especially REM)</li>
              <li>Accelerates B-vitamin depletion (especially B1 and folate)</li>
              <li>Alters cortisol rhythms, leading to chronic stress patterns</li>
              <li>Damages gut lining, impacting serotonin and nutrient absorption</li>
            </ul>
            <p className="text-lg leading-relaxed mb-8">
              This isn't just "bad drinking habits."
              This is casual, normalized neurotoxicity that most people never connect to their fog, panic, memory loss, or fatigue.
            </p>

            <h2 className="text-2xl font-bold text-deep-teal mb-4 flex items-center">
              🔬 Tests That Nobody Orders
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              You don't need to be a conspiracy theorist to realize this: most people never get real nervous system diagnostics.
            </p>
            <p className="text-lg mb-4">Here are just a few things the average person never gets tested:</p>
            <ul className="text-lg mb-6 space-y-2">
              <li>Cortisol rhythm panel (morning/evening levels)</li>
              <li>Full B-complex panels (B1, B6, B9, B12—not just B12 alone)</li>
              <li>Omega-3 index (essential for neuron membrane repair)</li>
              <li>CoQ10 or mitochondrial function markers</li>
              <li>HRV (Heart Rate Variability) for vagal tone + stress recovery</li>
              <li>GABA/glutamate ratios (almost never done outside research)</li>
              <li>Magnesium RBC levels (not just serum magnesium)</li>
              <li>Microbiome balance and gut-brain axis inflammation</li>
            </ul>
            <p className="text-lg leading-relaxed mb-8">
              Why are these skipped?
              Because most aren't billable, standardized, or available in 10-minute doctor visits.
            </p>

            <Card className="mb-8 border-accent/20">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-deep-teal mb-4 flex items-center">
                  🌀 A Human Loop with No Exit
                </h2>
                <p className="text-lg mb-4">So we fall into a loop:</p>
                <ol className="text-lg space-y-2 list-decimal list-inside">
                  <li>Nervous system breaks down slowly (stress, alcohol, tech, trauma).</li>
                  <li>Symptoms build: anxiety, sleep, exhaustion, irritability.</li>
                  <li>You self-medicate: more caffeine, alcohol, weed, doomscrolling.</li>
                  <li>You try to fix it: SSRIs, therapy, yoga, wine.</li>
                  <li>Nothing really heals, because the system stays broken.</li>
                  <li>Repeat for years. Or decades.</li>
                </ol>
              </CardContent>
            </Card>

            <h2 className="text-2xl font-bold text-deep-teal mb-4 flex items-center">
              🕊️ Not a Theory. A Tragedy.
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              This isn't a hidden agenda. It's a missing conversation—and one that costs lives, marriages, careers, and mental clarity.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Millions are living in the fog of a frayed, undernourished nervous system.
              And they're being told it's just anxiety. Just ADHD. Just a phase.
            </p>
            <p className="text-lg leading-relaxed mb-4">It's not.</p>
            <p className="text-lg leading-relaxed mb-8">It's overload.</p>
            <p className="text-lg leading-relaxed mb-8">
              And unless someone takes responsibility for helping people reset—without stigma or pharma-first thinking—we'll keep repeating this infinite recursion loop of suffering.
            </p>

            <Card className="mb-8 border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-deep-teal mb-4 flex items-center">
                  ✍️ We Built Unfogged for This Gap
                </h2>
                <p className="text-lg mb-4">
                  We're not doctors. We're not selling treatment.
                  We just saw the gap and said: "Let's make something for the people left behind."
                </p>
                <p className="text-lg mb-4">Unfogged is:</p>
                <ul className="text-lg mb-6 space-y-2">
                  <li>Nutritional + emotional repair, not diagnosis</li>
                  <li>Faith-friendly, pharma-optional</li>
                  <li>Science-rooted, spiritually aware</li>
                </ul>
                <p className="text-lg mb-4">It's not everything. But it's a starting point.</p>
                <p className="text-lg">
                  Because the nervous system isn't waiting for consensus—it's waiting for help.
                </p>
                <p className="text-lg font-semibold mt-4">
                  And no one's coming… unless we build it together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CrossFunctionalDoctors;