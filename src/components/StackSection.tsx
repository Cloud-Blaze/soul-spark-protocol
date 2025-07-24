import { Button } from "@/components/ui/button";
import { Check, Clock, Sparkles, Shield, ShoppingCart } from "lucide-react";
import nervousSystemHealing from "@/assets/nervous-system-healing.jpg";

const StackSection = () => {
  const supplements = [
    {
      name: "Centrum + Omega-3",
      purpose: "Foundational nutrients, B-vitamins, D3",
      dosage: "2 gummies morning",
      cost: "$30/90 days",
      link: "https://www.amazon.com/dp/B08YS3DW5G?tag=unfogged0f-20"
    },
    {
      name: "CoQ10",
      purpose: "Mitochondrial repair + brain energy",
      dosage: "1 gummy morning", 
      cost: "$44/90 days",
      link: "https://www.amazon.com/dp/B078NFVCJ7?tag=unfogged0f-20"
    },
    {
      name: "Ashwagandha",
      purpose: "Cortisol modulation, stress support",
      dosage: "2 gummies afternoon",
      cost: "$60/90 days",
      link: "https://www.amazon.com/dp/B0B8QGMLBS?tag=unfogged0f-20"
    },
    {
      name: "L-Theanine",
      purpose: "Calm without sedation, anxiety rescue",
      dosage: "1 gummy as needed",
      cost: "$19/90 days",
      link: "https://www.amazon.com/dp/B0D83F2TB5?tag=unfogged0f-20"
    },
    {
      name: "CALM Sleep Gummies",
      purpose: "Magnesium + Melatonin for repair",
      dosage: "2 gummies evening",
      cost: "$50/90 days",
      link: "https://www.amazon.com/dp/B085HK5LY2?tag=unfogged0f-20"
    }
  ];

  const schedule = [
    {
      time: "Morning",
      icon: "🌅",
      supplements: ["Centrum + Omega-3 (2 gummies)", "CoQ10 (1 gummy)"],
      purpose: "Energy foundation & brain fuel"
    },
    {
      time: "Afternoon", 
      icon: "☀️",
      supplements: ["Ashwagandha (2 gummies)", "L-Theanine (optional)"],
      purpose: "Cortisol reset & calm focus"
    },
    {
      time: "Evening",
      icon: "🌙", 
      supplements: ["CALM Sleep Gummies (2 gummies)"],
      purpose: "Deep repair & nervous system reset"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-sage/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold/20 border border-gold/30 text-primary text-lg font-bold mb-8">
            <span className="text-2xl">✝️</span>
            Break the cycle: <span className="text-xl">$60/month</span> for 3 months
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-deep-teal mb-6">
            The <span className="bg-gradient-to-r from-indigo to-gold bg-clip-text text-transparent">Unfogged Stack</span>
          </h2>
          <p className="text-xl text-deep-teal/70 max-w-3xl mx-auto leading-relaxed">
            Six science-backed supplements that rebuild your mitochondrial energy, 
            neurotransmitter stability, stress rhythm, and emotional resilience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Stack Breakdown */}
          <div>
            <h3 className="text-2xl font-bold text-deep-teal mb-8">Core Stack Breakdown</h3>
            <div className="space-y-6">
              {supplements.map((supplement, index) => (
                <div key={index} className="bg-background/80 rounded-lg p-6 border border-sage/20 hover:border-primary/30 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-deep-teal">{supplement.name}</h4>
                    <span className="text-sm text-primary font-medium">{supplement.cost}</span>
                  </div>
                  <p className="text-deep-teal/70 text-sm mb-4">{supplement.purpose}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-sage/20 text-deep-teal px-3 py-1 rounded-full">
                      {supplement.dosage}
                    </span>
                    <Button variant="outline" size="sm" asChild>
                      <a href={supplement.link} target="_blank" rel="noopener noreferrer" className="text-xs">
                        <ShoppingCart className="w-3 h-3 mr-1" />
                        Try Individual
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Cost */}
            <div className="mt-8 p-6 bg-gradient-to-r from-gold/10 to-sage/10 rounded-xl border border-gold/20">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-deep-teal">Total Investment</h4>
                  <p className="text-sm text-deep-teal/70">Complete 90-day nervous system reset</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">$184-203</div>
                  <div className="text-sm text-deep-teal/70">≈ $60/month</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visualization */}
          <div className="sticky top-24">
            <div 
              className="rounded-xl overflow-hidden h-80 flex items-center justify-center relative"
              style={{ backgroundImage: `url(${nervousSystemHealing})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-indigo/40 via-transparent to-transparent" />
              <div className="relative text-center text-sand">
                <h4 className="text-2xl font-bold mb-2">Your Nervous System</h4>
                <p className="text-sand/90">Healing • Realigning • Remembering</p>
              </div>
            </div>
          </div>
        </div>

        {/* Daily Schedule */}
        <div className="bg-background/60 backdrop-blur-sm rounded-xl p-8 border border-sage/20 mb-16">
          <h3 className="text-2xl font-bold text-deep-teal mb-8 text-center">
            Daily Schedule <span className="text-primary">(Simple & Repeatable)</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {schedule.map((period, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{period.icon}</div>
                <h4 className="text-xl font-semibold text-deep-teal mb-4">{period.time}</h4>
                <div className="space-y-2 mb-4">
                  {period.supplements.map((supplement, idx) => (
                    <div key={idx} className="flex items-center justify-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-deep-teal/80">{supplement}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-deep-teal/60 italic">{period.purpose}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Message */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium mb-8">
            <Shield className="w-5 h-5" />
            If you only buy one supplement to start—make it Ashwagandha
          </div>
          
          <p className="text-lg text-deep-teal/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            That 5PM glass of wine you reach for to calm the chaos? That's your cortisol screaming. 
            Ashwagandha helps regulate that surge so your brain doesn't reach for alcohol just to shut down.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="healing" size="lg" asChild>
              <a href="https://www.amazon.com/hz/wishlist/ls/35TOKXAVOW09Y?ref_=wl_share&tag=unfogged0f-20" target="_blank" rel="noopener noreferrer">
                Get the Complete Stack
              </a>
            </Button>
            <Button variant="clarity" size="lg">
              Start with Ashwagandha
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackSection;