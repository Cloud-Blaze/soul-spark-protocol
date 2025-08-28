import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Users, Target } from "lucide-react";
import AshwagandhaWarning from "@/components/AshwagandhaWarning";

const About = () => {
  useEffect(() => {
    document.title = "About David - Unfogged Founder | Breaking Intergenerational Nervous System Cycles";
  }, []);

/*

                  <p>
                    Because I almost lost my marriage.
                    Because I almost passed the same song down to my daughter and that scared me to the core because I lived through it and it scarred my soul until my diagnosis.
                    Because God spoke to me in the stillness—and I listened to his sweet song of love to find this solution that worked for me.
                  </p>
*/
  
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
                  <h2 className="text-3xl font-bold text-deep-teal mb-4">David</h2>
                  <p className="text-lg text-deep-teal/70">Founder & Creator</p>
                </div>

                <div className="prose prose-lg max-w-none text-deep-teal/80 leading-relaxed space-y-6">
                  <p>
                    David is a software engineer, creative strategist, and father who spent two decades living in what he now calls "the fog." Diagnosed with bipolar disorder in 2018 and navigating the emotional and cognitive toll of alcohol use in college, David spent years building businesses, managing family life, and showing up for his daughter—while quietly feeling like he was drifting further from himself until he hit rock bottom and even found Christ in this journey of healing my inner demons and absolving the core issues.
                  </p>

                  <p>
                    What he didn't realize was that his nervous system was overloaded—not broken and doctors were just masking the common symptoms of a dysregulated nervous system.
                  </p>

                  <p>
                    The tipping point came not with a crisis, but a moment of unexpected clarity: for David, an early experience with ashwagandha took the edge off the fog and revealed that his sensitivity—and his desire to love fully—had been muted by a stressed nervous system. The effect wasn't euphoric mania—it was <strong className="text-primary">presence</strong>. This was David's experience; every body is different, and nothing here is medical advice. In that moment, David saw not only his own disconnection, but the subtle burnout, mood volatility, and fog everywhere he walked in the city. That experience became the beginning of a full protocol: built not from scratch, but from <strong className="text-primary">what worked</strong>.
                  </p>

                  <AshwagandhaWarning />

                  <p>
                    What started as a personal experiment became Unfogged™—an open-source, non-profit-backed movement to help others reclaim their clarity through nutritional support, nervous system timing, and accessible wellness rituals.
                  </p>

                  <p>
                    David's determination didn't come from theory—it came from experience. He witnessed firsthand—through his own journey and long conversations with his best friend Maciej—what happens when two dysregulated nervous systems try to hold a household together. The weight it places on family, on children, and on love itself is profound. His own upbringing left him with the deep, lifelong question: <em className="text-deep-teal">what's really wrong with me—and what if it's not chemical, but environmental and nutritional?</em> That question turned into an obsession. And that obsession became Unfogged.
                  </p>
                  
                  <p>
                    This work represents 30 years of deep listening—tuning into what's really happening across different systems. From personal experience to family dynamics, from spiritual awakening to nervous system science, David has spent three decades piecing together patterns that traditional medicine often misses. His hope is simple: that this protocol helps at least one person in the world recognize when their central nervous system needs healing.
                  </p>
                  
                  <p>
                    If you have ever consumed alcohol in your life, you still feel love, but it is muted compared to the unconditional love that God instills in all of us when we are pure.
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
                  <h3 className="text-lg font-semibold text-deep-teal mb-2">Support can be simple—approachable, even like a gummy.</h3>
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
                    Unfogged isn't just a protocol—it’s a response to patterns in our care systems that, for many, have prioritized sedation or quick fixes over root healing. David honors that medication and psychiatry help many people—and he has benefited from clinical care himself—while advocating for nervous system repair and lifestyle support where it’s appropriate. He believes in the right to remember who you were <strong className="text-primary">before stress rewired you.</strong> Before alcohol muted you. Before any intervention blurred the line between symptom and self.
                  </p>

                  <p>
                    And when the nervous system starts to repair—what returns is more than calm. It's joy. It's love. It's the creative electricity we forgot how to feel. It's the ability to show up for your kids without snapping. To work without dragging. To rest without guilt.
                  </p>

                  <p>
                    Adults don't just want to function. They want to <em className="text-deep-teal">feel human again.</em>
                  </p>

                  <p>
                    David sees Unfogged as a blueprint not for perfection—but for liberation. From the 5PM glass of wine. From the 3AM regret. And from the shame often attached to asking for help—including from a doctor—when you need it.
                  </p>

                  <p>
                    Because when clarity returns, everything else follows.
                  </p>

                  <p>
                    He's living proof that emotional sensitivity is not a disorder—and that behind every fogged adult is a creative child waiting to resurface.
                  </p>
                  
                  <p>
                    This is <strong className="text-primary">the whole symphony</strong> of my life—and your potential life if you take a baby-step gummy on day one of 90 days. I just unlocked it as I have been listening closely to my emotions, and they guided me to this place I created on the internet: unfogged.org.
                  </p>

                  <p>
                    The recursive pain loop passed from parent to child—not just through trauma, but through <strong className="text-primary">chemistry</strong>, through <strong className="text-primary">fog</strong>, through <strong className="text-primary">unresolved nervous system states</strong>. I saw it. I felt it. I <em className="text-deep-teal">broke it.</em> You can too.
                  </p>

                  <p>
                    That's what sons do when they refuse to repeat the father's fate.
                    That's what Jesus did when He <strong className="text-primary">absorbed the cycle instead of continuing it.</strong>
                  </p>

                  <p>
                    I didn't just write a health protocol.
                    I transcribed <strong className="text-primary">an intergenerational resurrection.</strong>
                  </p>
                </div>
              </div>

              {/* Deep Revelation Section */}
              <div className="bg-background/80 backdrop-blur-sm rounded-xl border border-primary/20 p-8 md:p-12 mb-12">
                <div className="prose prose-lg max-w-none text-deep-teal/80 leading-relaxed space-y-6">
                  <blockquote className="text-lg md:text-xl italic border-l-4 border-primary/30 pl-6 mb-6">
                    "I was a child, watching a 30-year-old parent stuck in the same loop I'm in now—burnout, anxiety, a nervous system screaming beneath the surface. And I saw it. The whole symphony. The cycle. The fog."
                  </blockquote>

                  <p>
                    This isn't just about clarity.
                    This is about <strong className="text-primary">stopping an intergenerational handoff of nervous system chaos that has possibly lasted eons on Earth</strong>. But children often fared well in previous generations because they didn't enter a dopamine screen regimen that the internet era introduced.
                  </p>

                  <p>
                    For some, that chaos was alcoholism.
                    For others, it was unspoken mania, untreated anxiety, or CPAP machines at 35 and numbness by 40.
                  </p>

                  <p>
                    What if <em className="text-deep-teal">your body isn't broken</em>—it's just playing a song it inherited?
                  </p>

                  <p>
                    This project, Unfogged, is how we change the music.
                  </p>

                  <p>
                    I'm not afraid anymore.
                    Because now it's released.
                    And I believe others will hear it too.
                  </p>
                </div>
              </div>

              {/* Quote */}
              <div className="text-center">
                <blockquote className="text-xl md:text-2xl text-deep-teal/80 italic leading-relaxed mb-4">
                  "This isn't about going sober forever. It's about giving your nervous system the chance to tell you who you really are—without interference."
                </blockquote>
                <p className="text-primary font-semibold">—David, Founder, Unfogged™</p>
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