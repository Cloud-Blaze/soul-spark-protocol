import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Users, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo/5 to-sage/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-deep-teal mb-6">
                About <span className="bg-gradient-to-r from-indigo to-gold bg-clip-text text-transparent">Unfogged</span>
              </h1>
              <p className="text-xl text-deep-teal/70 mb-8 leading-relaxed">
                The story behind a movement to help sensitive adults remember who they were before the fog.
              </p>
            </div>
          </div>
        </section>

        {/* David's Story */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-background/80 backdrop-blur-sm rounded-xl border border-sage/20 p-8 md:p-12 mb-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-deep-teal mb-4">David Renne</h2>
                  <p className="text-lg text-deep-teal/70">Founder & Creator</p>
                </div>

                <div className="prose prose-lg max-w-none text-deep-teal/80 leading-relaxed space-y-6">
                  <p>
                    David Renne is a software engineer, creative strategist, and father who spent two decades living in what he now calls "the fog." Diagnosed with bipolar disorder and navigating the emotional and cognitive toll of alcohol use in college, David spent years building businesses, managing family life, and showing up for his daughter—while quietly feeling like he was drifting further from himself until he hit rock bottom and even found Christ in this journey of healing my inner demons and absolving the core issues.
                  </p>

                  <p>
                    What he didn't realize was that his nervous system was overloaded—not broken and doctors were just masking the common symptoms of a dysregulated nervous system.
                  </p>

                  <p>
                    The tipping point came not with a crisis, but a moment of unexpected clarity: a single dose of ashwagandha lifted the edge off the fog. The effect wasn't euphoric—it was <strong className="text-primary">presence</strong>. In that moment, David saw not only his own disconnection, but the subtle burnout, mood volatility, and fog in the people he loved—including his wife. That experience became the beginning of a full protocol: built not from scratch, but from <strong className="text-primary">what worked</strong>.
                  </p>

                  <p>
                    What started as a personal experiment became Unfogged™—an open-source, non-profit-backed movement to help others reclaim their clarity through nutritional support, nervous system timing, and accessible wellness rituals.
                  </p>

                  <p>
                    David's determination didn't come from theory—it came from experience. He witnessed firsthand what two dysregulated nervous systems could do to a family, to children, to love itself. His own upbringing left him with the deep, lifelong question: <em className="text-deep-teal">what's really wrong with me—and what if it's not chemical, but environmental and nutritional?</em> That question turned into an obsession. And that obsession became Unfogged.
                  </p>
                </div>
              </div>

              {/* Vision Section */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-sage/20 hover:border-primary/30 transition-all duration-300 text-center">
                  <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-deep-teal mb-2">Clarity shouldn't require a prescription.</h3>
                </div>
                
                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-sage/20 hover:border-primary/30 transition-all duration-300 text-center">
                  <Users className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-deep-teal mb-2">Healing should taste like a gummy.</h3>
                </div>
                
                <div className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-sage/20 hover:border-primary/30 transition-all duration-300 text-center">
                  <Target className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-deep-teal mb-2">No one should have to "perform wellness" just to survive.</h3>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="bg-gradient-to-r from-gold/10 to-sage/10 rounded-xl p-8 border border-gold/20 mb-12">
                <div className="prose prose-lg max-w-none text-deep-teal/80 leading-relaxed space-y-6">
                  <p>
                    Unfogged isn't just a protocol—it's a response to a broken system. One that profits from sedation, misdiagnosis, and shame. David believes in the right to remember who you were <strong className="text-primary">before stress rewired you.</strong> Before alcohol muted you. Before pills confused your mood with your identity.
                  </p>

                  <p>
                    And when the nervous system starts to repair—what returns is more than calm. It's joy. It's love. It's the creative electricity we forgot how to feel. It's the ability to show up for your kids without snapping. To work without dragging. To rest without guilt.
                  </p>

                  <p>
                    Adults don't just want to function. They want to <em className="text-deep-teal">feel human again.</em>
                  </p>

                  <p>
                    David sees Unfogged as a blueprint not for perfection—but for liberation. From the 5PM glass of wine. From the 3AM regret. From the shame of asking a doctor for help.
                  </p>

                  <p>
                    Because when clarity returns, everything else follows.
                  </p>

                  <p>
                    He's living proof that emotional sensitivity is not a disorder—and that behind every fogged adult is a creative child waiting to resurface.
                  </p>

                  <p>
                    After years of searching for his true calling across different ventures and life paths, David realized that open sourcing this protocol and its precise timing is exactly what the world needs right now. This isn't just another wellness trend—it's a movement to help humanity defog and become human again. In a world drowning in pharmaceutical solutions and quick fixes, David found his purpose in creating something that gives people permission to heal naturally, authentically, and without shame.
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="text-center">
                <blockquote className="text-xl md:text-2xl text-deep-teal/80 italic leading-relaxed mb-4">
                  "This isn't about going sober forever. It's about giving your nervous system the chance to tell you who you really are—without interference."
                </blockquote>
                <p className="text-primary font-semibold">—David Renne, Founder, Unfogged™</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-sage/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-deep-teal mb-6">Ready to Start Your Own Journey?</h2>
              <p className="text-xl text-deep-teal/70 mb-8 leading-relaxed">
                Join thousands who have already begun their 90-day nervous system reset.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="healing" size="lg" asChild>
                  <a href="https://www.amazon.com/hz/wishlist/ls/35TOKXAVOW09Y?ref_=wl_share&tag=unfogged0f-20" target="_blank" rel="noopener noreferrer">
                    Start Your Reset
                  </a>
                </Button>
                <Button variant="clarity" size="lg" asChild>
                  <a href="https://github.com/unfogged/unfogged-protocol/" target="_blank" rel="noopener noreferrer">
                    Join the Community
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;