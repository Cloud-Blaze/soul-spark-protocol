import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ClarityReset = () => {
  useEffect(() => {
    document.title = "Clarity Reset - Reclaim Life from the Dopamine Trap | Unfogged";
  }, []);

  const phases = [
    {
      phase: "Days 1–7",
      title: "Unplug from dopamine",
      description: "No social media, games, junk food. Expect restlessness and brain loops. Prioritize sleep (7–9h), water, light walks, journaling."
    },
    {
      phase: "Days 8–30", 
      title: "Build grounded routines",
      description: "Daily exercise (30 min+), whole food nutrition, consistent sleep schedule, short daily mindfulness, and strictly limited tech use (e.g. no screens before bed)."
    },
    {
      phase: "Days 31–60",
      title: "Deepen growth",
      description: "Choose hobbies or learning projects, create offline social connection, spend more time outdoors in nature to reboot mood and focus."
    },
    {
      phase: "Days 61–90",
      title: "Balance and reintegration", 
      description: "Reintroduce tech mindfully—no phone at meals, digital sunset at night. Keep reading, moving, journaling. Celebrate what you've rebuilt."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-primary via-primary-glow to-accent bg-clip-text text-transparent mb-6">
              Clarity Reset
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Reclaim Life from the Dopamine Trap: A Human-Paced Reset
            </p>
          </div>
        </section>

        {/* Life Before Tech Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
              <span className="text-2xl mr-3">🌿</span>
              Life Before Tech Overload
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Back in the 1950s–80s, kids thrived in unstructured free play—forts, bikes, block games—not screens. Players developed creativity, social skills, self-regulation, and resilience. Daily life had anticipation: waiting weeks for a letter or a favorite show. That slower life built the ability to focus deeply and feel satisfied. Modern screen habits lack these benefits and instead trigger shallow rewards.
            </p>
          </div>
        </section>

        {/* Modern Dopamine Trap Section */}
        <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-card/30 to-transparent">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
              <span className="text-2xl mr-3">⚙️</span>
              The Modern Dopamine Trap
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Social media, gaming, and apps now deliver endless micro-doses of dopamine. Every notification is engineered to hook us. Studies confirm this leads to reward pathway desensitization: what used to feel good doesn't anymore. Particularly troubling for children, rising screen time correlates with surging rates of anxiety, depression, and impaired brain development.
            </p>
          </div>
        </section>

        {/* Why Slowing Down Works Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
              <span className="text-2xl mr-3">🧠</span>
              Why Slowing Down Works
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The "slow living" movement reflects an intuitive truth: less stimulation means lower stress, less inflammation, better sleep, and stronger mental clarity. Science confirms it: unstructured activities—like reading, crafting, or talk—improve mood, focus, and physical well-being, unlike the overstimulating feeds full of dopamine.
            </p>
          </div>
        </section>

        {/* Personal Renaissance Section */}
        <section className="container mx-auto px-4 py-16 bg-gradient-to-l from-card/30 to-transparent">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
              <span className="text-2xl mr-3">🎨</span>
              A Personal Renaissance
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Just as the historical Renaissance renewed culture through art and deep thinking, your 90-day reset is an invitation to rebuild life at a human pace. Slow down, reconnect with nature, explore creative interests, read old books, and awake your sense of joy. This is not nostalgia—it's nourishment for your nervous system.
            </p>
          </div>
        </section>

        {/* 90-Day Reset Blueprint */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 flex items-center">
              <span className="text-2xl mr-3">🗓️</span>
              90-Day Reset Blueprint
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2">
              {phases.map((phase, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-6 shadow-soft hover:shadow-glow transition-all duration-300"
                >
                  <div className="text-sm font-medium text-accent mb-2">
                    {phase.phase}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Line Section */}
        <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center justify-center">
              <span className="text-2xl mr-3">✅</span>
              Bottom Line
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your brain isn't broken—it's just overloaded. Over 90 days, you reconnect with true reward, rebuild systems that support clarity, and rediscover what peace feels like from the inside. Think of it as your personal renaissance: reclaiming life on humanity's terms.
            </p>
            
            <div className="mt-12 text-center">
              <Button 
                onClick={() => window.location.href = '/choose-clarity'}
                className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-12 py-6 text-xl font-semibold rounded-xl"
              >
                Discover the Science Behind the Reset →
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ClarityReset;