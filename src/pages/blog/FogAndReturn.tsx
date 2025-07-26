import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const FogAndReturn = () => {
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
                THE FOG AND THE RETURN
              </h1>
              <p className="text-xl text-muted-foreground">
                A 90-Day Resurrection of Your Nervous System<br />
                (and 15 daily ways to get out without dropping out)
              </p>
            </div>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>There was a time—before the phone alarms, before the cold brew, before the tight chest and the adult fog—when we woke up clear.</p>

              <p>We didn't call it "circadian rhythm," but our bodies knew.<br />
              The sun came up, and we opened our eyes. We padded barefoot to the window. We walked. We breathed. We were present.</p>

              <p><strong>Then came the loop:</strong><br />
              Screens. Cars. Coffee. Alcohol. Repeat.</p>

              <p>We built an entire culture that runs against our biology.<br />
              We wake up exhausted.<br />
              We chug caffeine to fake alertness.<br />
              We sit indoors all day under LED lights.<br />
              We scroll to sleep.<br />
              And we wonder why we feel like we're falling apart.</p>

              <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">🔥 The Great Fog</h2>

              <p>It's not just you.<br />
              The entire planet is buzzed, fried, overstimulated, under-slept, and out of rhythm.</p>

              <p>We think it's normal…<br />
              …but normal is what's killing us.</p>

              <p>Everyone's tired but can't sleep.</p>
              <p>Everyone's wired but feels numb.</p>
              <p>Everyone's surrounded by people but feels alone.</p>
              <p>Everyone's online but out of touch with their own soul.</p>

              <p><strong>This is the fog.</strong></p>

              <p>A nervous system fog that distorts your vision, floods your mind, hijacks your breath, and dulls your love.</p>

              <p>And it's not just personal.</p>

              <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">🚸 The Fog Is Why Children Aren't Safe Anymore</h2>

              <p>We talk about danger like it's "out there," but the real threat to children today is fogged-out adults.</p>

              <p>Driving without presence</p>
              <p>Parenting without patience</p>
              <p>Living without love</p>

              <p>You can't protect a child when your nervous system is shot.<br />
              You can't model peace if you haven't felt it in years.<br />
              You can't give what you don't have.</p>

              <p><strong>And that's what we've lost:</strong></p>

              <p>The ability to care unconditionally</p>
              <p>The ability to show up</p>
              <p>The ability to see a child and not just manage them</p>

              <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">🌍 Two Sides of the Human Coin</h2>

              <p>A young father in Indonesia who never drank, wakes up with the sun and walks his child to the market. He's alive, embodied, grounded.</p>

              <p>A father in Detroit wakes up in panic, hits his phone, hits the gas, and hits his limits before 9 AM.</p>

              <p>They're both human.<br />
              But neither believes in the other's world.</p>

              <p>That's what disconnection does.<br />
              We forget we carry both sides of the coin.</p>

              <p>We forget that presence, peace, clarity—it's not gone.<br />
              It's buried under the fog.</p>

              <p>You don't have to disappear from the world to come back to yourself.<br />
              You just have to reset.</p>

              <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">⏱️ 90 Days. That's All It Takes.</h2>

              <p>No alcohol.</p>
              <p>Morning sunlight.</p>
              <p>Movement.</p>
              <p>Sleep.</p>
              <p>Boundaries.</p>
              <p>Connection.</p>
              <p>God, if you want Him.</p>
              <p>Nature, if you forgot Her.</p>

              <p><strong>Do it, and your body will start remembering:</strong></p>

              <ul className="space-y-2 pl-6">
                <li>How to rest</li>
                <li>How to breathe</li>
                <li>How to care without faking</li>
                <li>How to love without burning out</li>
              </ul>

              <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">✅ 15 Ways to De-Stimulate Without Dropping Out</h2>

              <p>Once your nervous system resets, the goal isn't to become a monk or move to a cave. It's to stay awake in the world—but not consumed by it.</p>

              <p>Here's how to stay grounded, connected, and alive without getting sucked back into the fog:</p>

              <ol className="space-y-3 pl-6">
                <li><strong>Phone-free mornings (first 30–60 min):</strong> Let your mind come online before your apps do.</li>
                <li><strong>Blue light blockers after sunset:</strong> Trick your system back into remembering darkness.</li>
                <li><strong>1 daily walk without headphones:</strong> Just walk. Listen to life.</li>
                <li><strong>Drink water before coffee:</strong> Hydration before stimulation.</li>
                <li><strong>Use airplane mode during focused work:</strong> Let the silence sharpen your brain.</li>
                <li><strong>Keep your inbox closed until noon:</strong> You set the tone for your day—not your boss.</li>
                <li><strong>Light a candle or incense at night:</strong> Teach your body that it's time to downshift.</li>
                <li><strong>Turn off autoplay everywhere:</strong> Stop letting machines decide your next thought.</li>
                <li><strong>10-minute barefoot grounding per day:</strong> In dirt, grass, sand—anywhere real.</li>
                <li><strong>No alcohol at all (even socially):</strong> You're rewiring. Stay sharp.</li>
                <li><strong>Check in with your breath hourly:</strong> Shallow = fog. Deep = truth.</li>
                <li><strong>Cold water on face or neck mid-afternoon:</strong> Reboot your brain, naturally.</li>
                <li><strong>End your day with reflection, not distraction:</strong> Write, pray, or breathe.</li>
                <li><strong>Have one long conversation per week with no phone present:</strong> That's real connection.</li>
                <li><strong>Let silence be part of your music:</strong> Not everything needs to be filled.</li>
              </ol>

              <p className="text-center text-xl font-semibold">
                These are not hacks.<br />
                These are homecoming rituals.
              </p>

              <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">🧠 Final Truth: You're Not Tired. You're Disconnected.</h2>

              <p>The human body wants to be well.<br />
              The soul wants to feel again.<br />
              The heart wants to open.</p>

              <p>But the fog is thick.<br />
              It tells you:</p>

              <p>"Push through."<br />
              "Numb it out."<br />
              "Try harder."</p>

              <p><strong>The truth?</strong></p>

              <p>You don't need to try harder.<br />
              You need to slow down long enough to feel what's real.</p>

              <h2 className="text-2xl font-bold text-deep-teal mt-8 mb-4">🌞 Come Back. Just Come Back.</h2>

              <p><strong>Try it:</strong></p>

              <ul className="space-y-2 pl-6">
                <li>90 days without alcohol</li>
                <li>90 days of sunlight before screens</li>
                <li>90 days of daily walking</li>
                <li>90 days of choosing presence over performance</li>
              </ul>

              <p>And on one random morning—maybe Day 38, maybe Day 74—you'll wake up…</p>

              <p>…and feel it.</p>

              <p className="text-center text-xl font-semibold">
                The old you.<br />
                The real you.<br />
                The one who used to love unconditionally.
              </p>

              <p>You'll remember the rhythm you were born with.<br />
              And you won't want to go back.</p>

              <p className="text-center text-xl font-semibold text-primary">
                Because once you taste clarity again—<br />
                everything else feels like poison.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FogAndReturn;