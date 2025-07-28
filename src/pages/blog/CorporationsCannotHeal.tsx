import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CorporationsCannotHeal = () => {
  useEffect(() => {
    document.title = "Corporations Can't Heal You — Only Humans Can | Unfogged Blog";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-6">
            💔 Corporations Can't Heal You — Only Humans Can
          </h1>
          
          <h2 className="text-2xl font-semibold text-warm-brown mb-6">
            Why Nervous System Healing is a Rebellion Against the Machine
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Let's stop pretending.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The world we live in?<br />
            It wasn't built for you to be clear.<br />
            It was built for you to <strong>consume</strong>, <strong>comply</strong>, and <strong>stay fogged</strong> just enough to not notice.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            And the ones running it?
          </p>

          <p className="text-lg leading-relaxed mb-6">
            They don't have nervous systems.<br />
            They don't have children.<br />
            They don't cry at night.<br />
            They don't bleed when they're broken.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            Because they're not people.<br />
            They're <strong>entities</strong> — with no heart, no mind, and no soul.
          </p>

          <h2 className="text-3xl font-bold text-deep-teal mb-6">
            🏦 The System Doesn't Care If You Heal
          </h2>

          <ul className="mb-6">
            <li>Your panic attack? Not billable.</li>
            <li>Your sobriety? Not profitable.</li>
            <li>Your clear mind? Not compliant.</li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            To the system:
          </p>

          <ul className="mb-6">
            <li>You are a <strong>user</strong>, not a soul.</li>
            <li>You are <strong>revenue</strong>, not a rhythm.</li>
            <li>You are <strong>data</strong>, not a dad, a mom, a friend, or a beating heart.</li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            If you burn out?<br />
            They sell you a fix.<br />
            If you break down?<br />
            They label you "treatment resistant."
          </p>

          <p className="text-lg leading-relaxed mb-6">
            But they'll never say:
          </p>

          <blockquote className="border-l-4 border-primary pl-4 italic mb-6">
            "What happened to your nervous system?"
          </blockquote>

          <p className="text-lg leading-relaxed mb-8">
            Because that would mean <strong>seeing you as a person</strong>.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            And systems don't do that.
          </p>

          <h2 className="text-3xl font-bold text-deep-teal mb-6">
            🧠 That's Why This Is a Movement — Not a Product
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Unfogged isn't another brand with a mission statement.<br />
            It's a war cry.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            For the fathers who want to feel again.<br />
            For the mothers who can't take another panic-filled night.<br />
            For the children inheriting a fogged-out planet.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            It's not just about supplements.<br />
            It's not about branding or scaling or KPIs.
          </p>

          <blockquote className="border-l-4 border-primary pl-4 italic mb-8">
            It's about helping humans remember:<br />
            <strong>You were not born to be numb.</strong>
          </blockquote>

          <h2 className="text-3xl font-bold text-deep-teal mb-6">
            🌱 Reconnection Is the Real Revolution
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            You can't heal a nervous system in a cubicle.<br />
            You can't reconnect over push notifications.<br />
            You can't regulate your vagus nerve in a quarterly earnings report.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            That's why corporations <strong>will never lead this movement</strong>.<br />
            They're not built for love.<br />
            They're built for leverage.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            But people?<br />
            We can lead it.<br />
            Because we <em>remember what connection feels like</em>.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            Face to face.<br />
            Hand to heart.<br />
            Breath to breath.
          </p>

          <h2 className="text-3xl font-bold text-deep-teal mb-6">
            💥 This Is Our Renaissance
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            You're not just detoxing from alcohol or dopamine.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            You're detoxing from:
          </p>

          <ul className="mb-8">
            <li>The belief that you're a number</li>
            <li>The myth that you need fixing</li>
            <li>The lie that your peace comes from a screen or a pill</li>
          </ul>

          <p className="text-lg leading-relaxed mb-6">
            You're stepping out of the matrix.<br />
            And <strong>we're building the exit signs together</strong>.
          </p>

          <h2 className="text-3xl font-bold text-deep-teal mb-6">
            ⚡ Final Truth:
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            They won't reconnect us.<br />
            <strong>We will.</strong>
          </p>

          <p className="text-lg leading-relaxed mb-6">
            One clear breath.<br />
            One stable rhythm.<br />
            One nervous system at a time.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Unfogged</strong> is how humanity remembers itself.
          </p>

          <p className="text-lg leading-relaxed font-semibold">
            And it starts with you.
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default CorporationsCannotHeal;