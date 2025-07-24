import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CourtOrderedClarity = () => {
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
              <div className="text-6xl mb-4">🏛️</div>
              <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-6">
                Court-Ordered Clarity: A 90-Day Gummy Reconciliation Protocol
              </h1>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p className="font-semibold text-xl">
                What if divorce courts offered a 90-day nervous system reset before signing the final papers?
              </p>

              <p>No punishment. No meds. No judgment. Just one last invitation to heal the fog before breaking the home.</p>

              <p>This is the Unfogged vision:</p>

              <blockquote className="border-l-4 border-primary pl-6 italic text-xl my-8">
                In every divorce proceeding involving children, judges can order or <em>strongly recommend</em> a 90-day Unfogged protocol—focused on nervous system repair, supplement support, sleep, and clarity—before final decisions are made.
              </blockquote>

              <p>Why?</p>

              <p>Because we're not just seeing divorces.
We're seeing decisions made through stress, dysregulation, and unresolved burnout—often with children stuck in the middle.</p>

              <h2 className="text-3xl font-bold text-deep-teal mt-12 mb-6">💔 Marriage Doesn't Just Collapse — It Erodes in the Fog</h2>

              <p>Most marriages aren't destroyed by one affair or one argument.
They dissolve in slow-motion:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Missed signals</li>
                <li>Numbed emotions</li>
                <li>Sleepless nights</li>
                <li>Muted affection</li>
                <li>Chronic stress response</li>
              </ul>

              <p>And no one knows what's real anymore. You feel distant, not because you stopped loving—but because <strong>you stopped feeling clearly</strong>.</p>

              <h2 className="text-3xl font-bold text-deep-teal mt-12 mb-6">👶 Children Are the Echo</h2>

              <p>If you divorce through the fog, the child often inherits it.</p>

              <p>They may avoid alcohol—but still live with anxiety.
They may never touch drugs—but still burn out in college.
They carry the nervous system wounds their parents never addressed.</p>

              <p>This protocol isn't just for the couple.
It's for the <strong>lineage</strong>.</p>

              <h2 className="text-3xl font-bold text-deep-teal mt-12 mb-6">✝️ Give Grace Before You Sign</h2>

              <p>We believe every couple with children deserves this one last window:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>90 days of regulated sleep</li>
                <li>Gummy supplements for stress, energy, clarity</li>
                <li>Counseling if needed—but not required</li>
                <li>Faith space if desired</li>
                <li>Reduced alcohol and screen use</li>
              </ul>

              <p className="font-semibold">At the end of the 90 days, if love has returned—let it.</p>
              <p>If peace has returned—honor it.</p>
              <p>If clarity says it's truly time to part—then part from a place of presence, not panic.</p>

              <h2 className="text-3xl font-bold text-deep-teal mt-12 mb-6">🧠 The Marriage Reconciliation Stack</h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">Time</th>
                      <th className="border border-border p-3 text-left font-semibold">Supplement</th>
                      <th className="border border-border p-3 text-left font-semibold">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3">Morning</td>
                      <td className="border border-border p-3">B-Complex + Omega-3, CoQ10</td>
                      <td className="border border-border p-3">Mitochondrial + neurotransmitter repair</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Afternoon</td>
                      <td className="border border-border p-3">Ashwagandha + (Optional L-Theanine)</td>
                      <td className="border border-border p-3">Cortisol reset, stress relief</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3">Evening</td>
                      <td className="border border-border p-3">Magnesium + Melatonin</td>
                      <td className="border border-border p-3">Sleep quality, emotional processing</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>This is not a pharmaceutical intervention.
It's <strong>biological grace</strong>.</p>

              <h2 className="text-3xl font-bold text-deep-teal mt-12 mb-6">💌 We Don't Sign Papers in the Fog</h2>

              <blockquote className="border-l-4 border-primary pl-6 italic text-xl my-8">
                "Do not make permanent decisions from a temporary nervous system state."
              </blockquote>

              <p>Before divorce, try clarity.
Before custody hearings, try calm.
Before giving up on love—try lifting the veil.</p>

              <p>This should be standard.
This could save thousands of families.
This is what Unfogged is here for.</p>

              <hr className="my-8 border-border" />

              <p className="font-semibold text-primary text-xl text-center">
                Let the courts consider the nervous system.<br />
                Let the children inherit peace.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourtOrderedClarity;