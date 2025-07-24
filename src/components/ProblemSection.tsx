import { Clock, Brain, Heart, Zap } from "lucide-react";
import childhoodClarity from "@/assets/childhood-clarity.jpg";

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      title: "The 5PM Beer vs. 3AM Shame Cycle",
      description: "Your nervous system is fried, the house is chaos, and that glass of wine feels like the only way to turn down the volume. Then at 3AM—regret, brain fire, shame loop.",
      color: "from-indigo to-deep-teal"
    },
    {
      icon: Brain,
      title: "Overdiagnosed & Under-Nourished",
      description: "Millions are popping pills for anxiety, depression, ADHD—while their nervous systems scream for basic nutrients like magnesium, B-vitamins, and omega-3s.",
      color: "from-deep-teal to-sage"
    },
    {
      icon: Heart,
      title: "Lost Your Spark",
      description: "You remember being creative, motivated, joyful. But burnout, trauma, and survival mode became your personality. You want that person back.",
      color: "from-sage to-gold"
    },
    {
      icon: Zap,
      title: "The System Failed You",
      description: "Doctors medicate symptoms, not systems. Pharma profits from prescriptions, not healing. Meanwhile, you forgot who you were before the fog.",
      color: "from-gold to-indigo"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-sage/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-deep-teal mb-6">
            Why Just <span className="text-white md:bg-gradient-to-r md:from-indigo md:to-deep-teal md:bg-clip-text md:text-transparent">'Unfogged'</span>?
          </h2>
          <p className="text-xl text-deep-teal/70 leading-relaxed">
            Because alcohol isn't the only thing fogging your nervous system. 
            This is for anyone suffering from chronic stress, overmedication, 
            burnout, or simply forgetting who they were before survival mode took over.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {problems.map((problem, index) => (
            <div key={index} className="group">
              <div className="bg-background/60 backdrop-blur-sm rounded-xl p-8 border border-sage/20 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-sage/10 h-full">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${problem.color} mb-6`}>
                  <problem.icon className="w-6 h-6 text-sand" />
                </div>
                <h3 className="text-xl font-semibold text-deep-teal mb-4 group-hover:text-primary transition-colors">
                  {problem.title}
                </h3>
                <p className="text-deep-teal/70 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Emotional Core */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div 
                className="rounded-xl overflow-hidden shadow-lg"
                style={{ backgroundImage: `url(${childhoodClarity})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="h-80 bg-gradient-to-t from-indigo/30 to-transparent" />
              </div>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-deep-teal mb-6">
                Remember Who You Were 
                <span className="bg-gradient-to-r from-gold to-sage bg-clip-text text-transparent"> Before the Fog</span>
              </h3>
              <div className="prose prose-lg text-deep-teal/80 space-y-4">
                <p>
                  This isn't just about fixing fatigue or cutting back on alcohol. 
                  It's about getting back the parts of yourself that went missing 
                  while your nervous system was overloaded.
                </p>
                <p>
                  When the fog lifts, people report laughter that feels real, 
                  slower warmer parenting, motivation that isn't frantic, 
                  focus that doesn't come from stress.
                </p>
                <p className="font-semibold text-primary">
                  You don't become someone else. You become you again.
                </p>
              </div>
              
              {/* Sacred Quote */}
              <div className="mt-8 p-6 bg-gradient-to-r from-sage/10 to-gold/10 rounded-lg border-l-4 border-primary">
                <blockquote className="text-deep-teal/80 italic leading-relaxed">
                  "But while he was still a long way off, his father saw him and was filled with compassion for him; 
                  he ran to his son, threw his arms around him and kissed him."
                </blockquote>
                <cite className="text-sm text-primary font-medium mt-2 block">— Luke 15:20</cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;