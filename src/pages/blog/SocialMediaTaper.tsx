import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SocialMediaTaper = () => {
  useEffect(() => {
    document.title = "Techniques to Taper Off Social Media & Dopamine | Unfogged Blog";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-6">
            🧠 Techniques to Taper Off Social Media & Dopamine
          </h1>
          
          <p className="text-xl font-semibold text-warm-brown mb-8">
            This isn't about deleting your accounts forever.<br />
            It's about reclaiming your ability to focus, feel, and live in real-time.
          </p>

          <h3 className="text-2xl font-semibold text-warm-brown mb-4">
            🚫 1. <strong>Stay Off Porn</strong>
          </h3>
          
          <blockquote className="border-l-4 border-primary pl-4 italic mb-6">
            Just stop. It rewires your reward system, isolates you emotionally, and fogs your real relationships.
          </blockquote>

          <p className="text-lg leading-relaxed mb-8">
            If you're stuck in it, you already know.
          </p>

          <h3 className="text-2xl font-semibold text-warm-brown mb-4">
            📱 2. <strong>Taper Off Social Media — Don't Cold Turkey if You're Addicted</strong>
          </h3>

          <ul className="mb-8">
            <li>Delete apps from your phone first</li>
            <li>Log out of accounts</li>
            <li>Use desktop only</li>
            <li>Replace scrolling time with <em>one</em> analog habit (reading, drawing, walking)</li>
            <li><strong>Give your hands something to do</strong>: Rub a coin, fold paper, hold tea</li>
          </ul>

          <h3 className="text-2xl font-semibold text-warm-brown mb-4">
            🕹️ 3. <strong>If You Play Games, Switch to Chill Ones</strong>
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            Avoid FPS or hyper-dopamine loops at night.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            Try:
          </p>

          <ul className="mb-6">
            <li><em>Stardew Valley</em></li>
            <li><em>Unpacking</em></li>
            <li><em>Tetris Effect</em></li>
            <li><em>Animal Crossing</em></li>
            <li><em>Dorfromantik</em></li>
          </ul>

          <blockquote className="border-l-4 border-primary pl-4 italic mb-8">
            <strong>Taper down after dinner.</strong> No high-octane games after 7PM.
          </blockquote>

          <h3 className="text-2xl font-semibold text-warm-brown mb-4">
            📚 4. <strong>Read a Book Like It's 1992</strong>
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            Printed. Physical. One chapter per night.
          </p>

          <ul className="mb-8">
            <li>Go fiction or nonfiction — doesn't matter.</li>
            <li>Feel the page. Smell it. Mark it.</li>
          </ul>

          <h3 className="text-2xl font-semibold text-warm-brown mb-4">
            📝 5. <strong>Write Down Your Thoughts. With a Pen.</strong>
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            Get a small notebook. Keep it next to your bed.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            Write:
          </p>

          <ul className="mb-6">
            <li>What you're feeling</li>
            <li>What you're craving</li>
            <li>What you're remembering</li>
            <li>What you're afraid of</li>
          </ul>

          <blockquote className="border-l-4 border-primary pl-4 italic mb-8">
            Writing is your way out of looping thoughts.
          </blockquote>

          <h3 className="text-2xl font-semibold text-warm-brown mb-4">
            🧭 6. <strong>Stop Using Google Maps for Every Drive</strong>
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            If you've been there once before, <em>don't plug it in</em>.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            Let your brain:
          </p>

          <ul className="mb-6">
            <li>Navigate</li>
            <li>Be wrong</li>
            <li>Find its way again</li>
          </ul>

          <blockquote className="border-l-4 border-primary pl-4 italic mb-8">
            Every time you remember a route, your hippocampus <em>heals</em>.
          </blockquote>

          <h3 className="text-2xl font-semibold text-warm-brown mb-4">
            🌅 7. <strong>Mornings Are for Writing — Dump Your Enlightenment</strong>
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            When your nervous system is fresh and fog-free (especially in weeks 1–4 of recovery),<br />
            use the morning for <strong>downloads</strong> from your soul.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            If you're not into slow handwriting:
          </p>

          <ul className="mb-6">
            <li><strong>Just speak to AI</strong></li>
            <li>Dictate into your notes app</li>
            <li>Or write freely in a private doc</li>
          </ul>

          <blockquote className="border-l-4 border-primary pl-4 italic mb-6">
            What comes out might surprise you. And if you feel brave…
          </blockquote>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Publish it.</strong>
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Let your red-pill clarity go <em>public</em>.<br />
            Others out there are trapped in the fog — and your words might wake them up.
          </p>

          <p className="text-lg leading-relaxed font-semibold">
            We'd love your traffic. We'd love your truth.<br />
            You're not alone in this anymore.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default SocialMediaTaper;