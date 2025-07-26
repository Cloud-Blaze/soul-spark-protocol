import { Clock, Brain, Thermometer, Heart, Volume2 } from "lucide-react";

const FirstWeekClaritySection = () => {
  const symptoms = [
    {
      icon: Clock,
      title: "NIGHTTIME PANIC / CLAMMY / SWEATY / INSOMNIA",
      fixes: [
        "✅ 1 capsule Alphine Serene PM (Ashwagandha, L-Theanine blend) 30 min before bed",
        "🫶 Feet up the wall for 5 min",
        "🎧 Binaural beats or \"Deep Healing Sleep\" YouTube",
        "🛑 No screens 1 hr before bed",
        "💧 Hydrate — adrenal stress mimics dehydration"
      ],
      color: "from-indigo to-deep-teal"
    },
    {
      icon: Brain,
      title: "RACING THOUGHTS / OBSESSIVE LOOPING",
      fixes: [
        "🧪 GABA boost: 1 duwhot L-Theanine gummy (afternoon)",
        "📝 Write the looping thought down once. Say \"noted\" and breathe out slowly.",
        "🚫 Avoid caffeine after 11am"
      ],
      color: "from-deep-teal to-sage"
    },
    {
      icon: Thermometer,
      title: "SWEATING / FLUSHING / RESTLESSNESS",
      fixes: [
        "🧂 Tiny pinch of salt in warm water (mineral depletion)",
        "🚿 Shower hot → cold (nervous system reset)",
        "🐢 Slow walking or light stretching 5-10 min"
      ],
      color: "from-sage to-gold"
    },
    {
      icon: Heart,
      title: "EMOTIONAL NUMBNESS / DETACHMENT / \"FLOATY\"",
      fixes: [
        "🍬 Centrum + Omega-3 Gummies (daily dose AM)",
        "☀️ Get 20 minutes of natural light in the morning",
        "📿 Pray or just say out loud what you feel (break the numb spell)"
      ],
      color: "from-gold to-indigo"
    },
    {
      icon: Volume2,
      title: "SHORT FUSE / SNAPPING / CAN'T HANDLE SOUND",
      fixes: [
        "🎧 Noise-cancelling or soft ambient audio",
        "🧘 Ground: Sit on floor or touch bare feet to grass",
        "👃 4-7-8 breathing (inhale 4, hold 7, exhale 8)"
      ],
      color: "from-indigo to-deep-teal"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-deep-teal/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/20 border border-primary/30 text-primary text-lg font-bold mb-8">
            <span className="text-2xl">🧠</span>
            UNFOGGED: First Week Clarity Protocol
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-deep-teal mb-6">
            For People Who Feel Like They're{" "}
            <span className="bg-gradient-to-r from-indigo to-gold bg-clip-text text-transparent">
              Going Crazy
            </span>{" "}
            But Are Actually Just <span className="text-primary">Healing</span>
          </h2>
          
          <p className="text-xl text-deep-teal/70 leading-relaxed">
            Your nervous system is recalibrating. These symptoms aren't permanent—they're progress. 
            Here's how to support your body through the transition.
          </p>
        </div>

        {/* Symptoms Grid */}
        <div className="space-y-8">
          {symptoms.map((symptom, index) => (
            <div key={index} className="group">
              <div className="bg-background/80 backdrop-blur-sm rounded-xl p-8 border border-sage/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-sage/10">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 lg:min-w-0 lg:flex-1">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${symptom.color} flex-shrink-0`}>
                      <symptom.icon className="w-6 h-6 text-sand" />
                    </div>
                    <h3 className="text-lg font-bold text-deep-teal group-hover:text-primary transition-colors">
                      😰 SYMPTOM: {symptom.title}
                    </h3>
                  </div>
                  
                  {/* Arrow */}
                  <div className="hidden lg:block text-primary text-2xl font-bold px-4">
                    →
                  </div>
                  
                  {/* Fixes */}
                  <div className="lg:flex-1">
                    <h4 className="text-lg font-bold text-primary mb-4">FIX:</h4>
                    <div className="space-y-3">
                      {symptom.fixes.map((fix, fixIndex) => (
                        <div key={fixIndex} className="flex items-start gap-3">
                          <div className="text-lg leading-none mt-0.5 flex-shrink-0">
                            {fix.slice(0, 2)}
                          </div>
                          <p className="text-deep-teal/80 leading-relaxed">
                            {fix.slice(3)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-sage/10 to-gold/10 rounded-xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-deep-teal mb-4">
                Remember: This Is <span className="text-primary">Temporary</span>
              </h3>
              <p className="text-lg text-deep-teal/80 leading-relaxed mb-6">
                Your nervous system spent years adapting to stress, stimulants, and survival mode. 
                It takes time to remember its natural rhythm. These protocols support the transition—
                they don't mask the healing.
              </p>
              <p className="text-primary font-semibold">
                Week 2-3 is typically when people start feeling "like themselves again."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstWeekClaritySection;