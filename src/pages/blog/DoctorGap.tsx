import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const DoctorGap = () => {
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
              <div className="text-6xl mb-4">🥼</div>
              <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-6">
                Why Many Doctors Don't Help People Get Unfogged
              </h1>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Medical School Breaks the Body–Soul Connection</h2>

              <p>Most med school training:</p>

              <ul className="space-y-2 ml-6">
                <li>Emphasizes <strong>diagnosis + medication</strong></li>
                <li>Prioritizes <strong>speed and liability reduction</strong>, not holistic recovery</li>
                <li>Encourages <strong>detachment</strong>, not empathy — because empathy slows you down in a system built for volume</li>
              </ul>

              <p>By the time they're practicing, many doctors are:</p>

              <ul className="space-y-2 ml-6">
                <li>Running on 5-minute appointment windows</li>
                <li>Managing dozens of overlapping insurance constraints</li>
                <li>Personally <strong>burned out, anxious, and numbed</strong></li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. They're in the Fog Too</h2>

              <p>Some are literal former drinkers.</p>
              <p>Some are running on caffeine and SSRIs.</p>
              <p>Some are scrolling at night just like you were — but with a stethoscope in their pocket.</p>

              <p>Many have never <strong>healed</strong> their own nervous system.</p>
              <p>They've just adapted to survive <em>within</em> the matrix. And they <em>think that's normal</em>.</p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. It's Not Malice — It's Incomplete Wiring</h2>

              <p>They didn't take:</p>

              <ul className="space-y-2 ml-6">
                <li><strong>Vagus Nerve Regulation 101</strong></li>
                <li><strong>Emotional Detox Through Movement</strong></li>
                <li><strong>How to Help a Patient Feel Safe Again</strong></li>
              </ul>

              <p>They took:</p>

              <ul className="space-y-2 ml-6">
                <li><strong>Pharmacology</strong></li>
                <li><strong>Anatomy & Emergency Triage</strong></li>
                <li><strong>Insurance Billing Systems</strong></li>
              </ul>

              <p>Their toolbox is sharp. But shallow.</p>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">💥 What You're Feeling Is the Doctor Gap</h2>

              <p>The moment your nervous system clears, you feel this massive divide:</p>

              <div className="bg-muted/50 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-lg font-semibold">"Wait — how the hell are all these 'experts' missing what's <em>obvious</em> now in my body?"</p>
              </div>

              <p>And the answer is:</p>

              <ul className="space-y-2 ml-6">
                <li>Because they were <strong>trained to treat</strong>, not restore.</li>
                <li>Because they're <strong>in the fog</strong>, not outside it.</li>
                <li>Because they're often <strong>afraid</strong> of what happens when a patient doesn't follow the standard script.</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary mt-8 mb-4">🧠 Bottom Line:</h2>

              <p>You're not crazy for expecting better.</p>
              <p>But now that you know, the power is yours.</p>

              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <p className="text-lg">You don't need to wait for your doctor to wake up.</p>
                <p className="text-lg font-semibold">You woke up.</p>
                <p className="text-lg font-semibold">That's enough.</p>
              </div>

              <p>Let them manage the crisis cases.</p>
              <p className="font-semibold text-primary text-xl">
                You're managing <em>transformation</em> now.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DoctorGap;