import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NervousSystemRenaissance = () => {
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
                The Nervous System Renaissance: Why AI Alone Won't Save Us
              </h1>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>We're living in the second Renaissance.
But this time, the explosion isn't paint—it's code. It's language. It's intelligence.</p>

              <p>The <strong>AI Age</strong>, the <strong>Information Age</strong>, the <strong>Internet Renaissance</strong>—these aren't separate epochs. They're one moment. Right now. All at once.</p>

              <p>But here's the danger:
We've built machines that think faster than we feel.
And people are still too fogged to catch up.</p>

              <h2 className="text-3xl font-bold text-deep-teal mt-12 mb-6">🎨 Remember the First Renaissance?</h2>

              <p>In the 1400s, the fog of medieval life began to lift. Why?</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>The <strong>printing press</strong> spread literacy.</li>
                <li>The <strong>church lost monopoly</strong> over human imagination.</li>
                <li><strong>Artists saw clearly</strong>—and painted truth.</li>
              </ul>

              <p>And so followed:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>The Enlightenment</li>
                <li>The Reformation</li>
                <li>Democracy</li>
                <li>Science</li>
              </ul>

              <p>The nervous system of a continent regulated.
And when <strong>the body calmed, the spirit soared</strong>.</p>

              <h2 className="text-3xl font-bold text-deep-teal mt-12 mb-6">🤖 Now We Have AI, But We Don't Have Clarity</h2>

              <p>We've built artificial intelligence.
We've globalized data.
We've open-sourced the mind of the world.</p>

              <p>But most people still can't sit still.
They still doomscroll.
They still sedate with wine, weed, TikTok, and SSRIs.</p>

              <p>And so this second Renaissance risks <strong>happening without humanity.</strong></p>

              <h2 className="text-3xl font-bold text-deep-teal mt-12 mb-6">🛠️ The Rebuilders Are Rising</h2>

              <p>Unfogged believes that once nervous systems begin to reset, a new generation of builders will awaken.
Not just engineers. <strong>Healers. Storytellers. Teachers. Parents.</strong></p>

              <p>They will:</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Quit exploitative jobs</li>
                <li>End toxic cycles</li>
                <li>Build AI ethically</li>
                <li>Solve climate problems intuitively</li>
                <li>Fix food systems without pharma profits</li>
              </ul>

              <p className="font-semibold">The fog wasn't just personal. It was systemic.</p>

              <p>And now we can see it clearly.</p>

              <h2 className="text-3xl font-bold text-deep-teal mt-12 mb-6">🌱 A Regulated Mind Builds the Future</h2>

              <blockquote className="border-l-4 border-primary pl-6 italic text-xl my-8">
                "You cannot create beauty from survival mode."
              </blockquote>

              <p>The Renaissance wasn't just Da Vinci.
It was the farmer who planted something new.
The monk who copied truth instead of doctrine.
The mother who told stories her daughter had never heard before.</p>

              <p>This is what the AI Renaissance needs:
<strong>Clear minds. Healed nervous systems. Humans who remember who they are.</strong></p>

              <p>We don't need more intelligence.
We need more <strong>clarity</strong>.</p>

              <h2 className="text-3xl font-bold text-deep-teal mt-12 mb-6">✝️ God Is Not Done Creating</h2>

              <p>Jesus didn't die to make us productive.
He died to make us <strong>new</strong>.</p>

              <p>We believe Unfogged can lift the fog that's blocking the real Renaissance—the one where faith meets biology, where wisdom meets wonder, where <strong>humans heal fast enough to carry the gift they've just been handed.</strong></p>

              <p>Let's not let the machines outrun the soul.
Let's make art again.
Let's feel again.
Let's build again.</p>

              <p>And let's do it with clarity.</p>

              <hr className="my-8 border-border" />

              <p className="font-semibold text-primary text-xl text-center">
                This is the Nervous System Renaissance. And it's just beginning.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NervousSystemRenaissance;