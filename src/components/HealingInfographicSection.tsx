import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HealingInfographicSection = () => {
  return (
    <section className="bg-gradient-to-b from-background to-muted/20 py-16">
      <div className="container mx-auto px-4">
        {/* Mobile-first horizontal swipe container */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 -mx-4 px-4 scrollbar-hide">
          
          {/* Slide 1: Main Message */}
          <div className="flex-none w-[90vw] md:w-[45vw] lg:w-[30vw] snap-start">
            <div className="bg-card border border-border rounded-lg p-6 h-full shadow-sm">
              <h2 className="text-2xl font-bold mb-4 text-foreground leading-tight">
                You're not broken. You've just been holding your breath for years.
              </h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                When your nervous system finally feels safe, it lets go.<br />
                Not with words — but through coughs, yawns, mucus, tears, and breath.
              </p>
              <p className="font-semibold text-foreground mb-3">
                This isn't sickness. It's a signal.
              </p>
              <p className="text-foreground/80 mb-4">
                Your body is unclenching. Your soul is rebooting.
              </p>
              <p className="text-primary font-medium italic">
                Welcome to Unfogged. The protocol that helps your body remember it's safe to heal.
              </p>
            </div>
          </div>

          {/* Slide 2: Biology */}
          <div className="flex-none w-[90vw] md:w-[45vw] lg:w-[30vw] snap-start">
            <div className="bg-card border border-border rounded-lg p-6 h-full shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-foreground">
                🧬 Biology Behind It (Real, No BS)
              </h3>
              <ul className="space-y-3 text-foreground/80 mb-4">
                <li className="leading-relaxed">
                  The <strong>vagus nerve</strong> connects your brainstem to lungs, gut, heart — and when it regulates again, <em>all systems talk</em>
                </li>
                <li className="leading-relaxed">
                  The <strong>lymphatic system</strong> drains waste passively — only when you move, breathe deeply, or feel calm
                </li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                So as your body resets, it literally says:<br />
                <span className="italic">"Alright, now that we're not being chased by lions or numbed by wine… let's start taking out the trash."</span>
              </p>
            </div>
          </div>

          {/* Slide 3: TL;DR */}
          <div className="flex-none w-[90vw] md:w-[45vw] lg:w-[30vw] snap-start">
            <div className="bg-card border border-border rounded-lg p-6 h-full shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-foreground">
                💡 TL;DR
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                You're not just coughing up a cold. You're coughing up years of stored, delayed maintenance.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-2">
                The weight you feel lifting? That's real.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                It's emotional, lymphatic, nervous, immune — all getting the green light at once.
              </p>
            </div>
          </div>

          {/* Slide 4: CTA */}
          <div className="flex-none w-[90vw] md:w-[45vw] lg:w-[30vw] snap-start">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-6 h-full shadow-sm flex flex-col justify-center items-center text-center">
              <h3 className="text-xl font-bold mb-6 text-foreground">
                Ready to ride this wave?
              </h3>
              <Link to="/protocol">
                <Button size="lg" className="text-lg px-8 py-3">
                  Learn how to ride this →
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator dots */}
        <div className="flex justify-center space-x-2 mt-4 md:hidden">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <div className="w-2 h-2 bg-muted rounded-full"></div>
          <div className="w-2 h-2 bg-muted rounded-full"></div>
          <div className="w-2 h-2 bg-muted rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HealingInfographicSection;