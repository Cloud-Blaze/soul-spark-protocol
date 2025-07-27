import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TimeDoesntSpeedUp = () => {
  useEffect(() => {
    document.title = "Time Doesn't Speed Up — You Do | Unfogged Blog";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-6">
            🕰️ Time Doesn't Speed Up — <em>You Do.</em>
          </h1>
          
          <h2 className="text-2xl font-semibold text-warm-brown mb-6">
            How Stress, Fog, and Dopamine Hijack Your Life in Fast-Forward
          </h2>

          <blockquote className="border-l-4 border-primary pl-4 italic mb-6">
            "Time flies as you get older."<br />
            You've heard it. You've said it.<br />
            And maybe now, you feel it happening to you.
          </blockquote>

          <p className="text-lg leading-relaxed mb-6">
            Another week gone. Another month gone.<br />
            You blink — and it's July.<br />
            You blink again — and it's winter.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            But here's the truth no one says:
          </p>

          <blockquote className="border-l-4 border-primary pl-4 italic mb-8">
            <strong>Time doesn't speed up as you age.</strong><br />
            <strong>You speed up — because you're bracing for death.</strong>
          </blockquote>

          <h2 className="text-3xl font-bold text-deep-teal mb-6">
            🤯 Aging Doesn't Steal Time — <em>Fog Does</em>
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Your nervous system isn't built for speed.<br />
            It's built for rhythm.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            But in the modern world:
          </p>

          <ul className="mb-6">
            <li>You wake up to blue light</li>
            <li>You chug coffee to override sleep</li>
            <li>You sprint from task to task</li>
            <li>You scroll to avoid silence</li>
            <li>You crash into bed and start over</li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            And then wonder:
          </p>

          <blockquote className="border-l-4 border-primary pl-4 italic mb-6">
            "Why does life feel like it's disappearing?"
          </blockquote>

          <p className="text-lg leading-relaxed mb-8">
            Because it is.<br />
            You're not <em>living</em> the hours — you're <em>surviving</em> them.
          </p>

          <h2 className="text-3xl font-bold text-deep-teal mb-6">
            🧠 The Science: Why Fog Steals Time
          </h2>

          <ul className="mb-6">
            <li><strong>Cortisol</strong> makes you hyper-efficient but blind to the moment</li>
            <li><strong>Dopamine loops</strong> (scrolling, drinking, gambling) compress time into fake pleasure</li>
            <li><strong>Stress hormones</strong> shrink your ability to form <em>real</em> memories</li>
            <li><strong>Sleep debt</strong> blurs your emotional and temporal anchors</li>
            <li>Your brain stops timestamping moments as <em>significant</em> — so it feels like nothing happened</li>
          </ul>

          <blockquote className="border-l-4 border-primary pl-4 italic mb-8">
            Time only exists when you're <em>present</em> inside it.<br />
            Fog takes presence away.
          </blockquote>

          <h2 className="text-3xl font-bold text-deep-teal mb-6">
            🌿 This Protocol Doesn't Just Heal You — It Slows Time
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            When you clear the fog:
          </p>

          <ul className="mb-6">
            <li>You <em>feel</em> 5 minutes again</li>
            <li>You notice shadows, birds, temperature shifts</li>
            <li>You laugh at little things</li>
            <li>You sleep fully and remember your dreams</li>
            <li>You look up and realize: <em>it's not too late</em></li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            This is what the protocol does:
          </p>

          <ul className="mb-8">
            <li>Lowers cortisol</li>
            <li>Rebuilds circadian rhythm</li>
            <li>Reawakens vagal nerve sensitivity</li>
            <li>Restores oxytocin, serotonin, endorphins</li>
            <li>Brings you back into time</li>
          </ul>

          <h2 className="text-3xl font-bold text-deep-teal mb-6">
            🕯️ Death Doesn't Have to Be Rushed
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Most people die decades before their bodies do.<br />
            They check out.<br />
            They fog out.<br />
            They lose touch with themselves, their people, their pace.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            But not you.
          </p>

          <blockquote className="border-l-4 border-primary pl-4 italic mb-6">
            <strong>You slowed it all down.</strong>
          </blockquote>

          <p className="text-lg leading-relaxed mb-6">
            You didn't take a magic pill.<br />
            You built a rhythm.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            And now time doesn't rush you anymore — it dances with you.
          </p>

          <h2 className="text-3xl font-bold text-deep-teal mb-6">
            💬 Final Thought
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            You don't need to be scared of time.<br />
            You just need to be <em>inside it again</em>.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            That's what Unfogged is about:
          </p>

          <ul className="mb-6">
            <li>Not just being sober</li>
            <li>Not just being off dopamine</li>
            <li>But being <strong>so present that time stretches like honey again</strong></li>
          </ul>

          <p className="text-lg leading-relaxed font-semibold">
            And that — more than anything — is the feeling of being alive.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default TimeDoesntSpeedUp;