import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ExternalLink, Shield, DollarSign } from "lucide-react";

const Stack = () => {
  const supplements = [
    {
      name: "Centrum MultiGummies + Omega-3",
      purpose: "Foundational nutrients, B-vitamins, D3, Omega-3",
      dosage: "2 gummies/day (morning)",
      duration: "90 days = 180 gummies",
      cost: "$30",
      details: "Neurotransmitter fuel, energy, methylation + brain repair, inflammation modulation",
      link: "https://www.amazon.com/dp/B08YS3DW5G?tag=unfogged0f-20"
    },
    {
      name: "MaryRuth CoQ10 Gummies (100mg)",
      purpose: "Mitochondrial recovery, mood clarity",
      dosage: "1 gummy/day (morning)",
      duration: "90 days = 90 gummies",
      cost: "$44",
      details: "Cellular energy production, mental clarity without overstimulation",
      link: "https://www.amazon.com/dp/B078NFVCJ7?tag=unfogged0f-20"
    },
    {
      name: "Goli Ashwagandha Gummies",
      purpose: "Cortisol and HPA regulation",
      dosage: "2 gummies/day (afternoon)",
      duration: "90 days = 180 gummies",
      cost: "$60",
      details: "Critical for 5PM alcohol impulse control, stress hormone balance",
      link: "https://www.amazon.com/dp/B0B8QGMLBS?tag=unfogged0f-20"
    },
    {
      name: "duwhot L-Theanine Gummies",
      purpose: "Glutamate modulation, calm without sedation",
      dosage: "1 gummy/day (as needed)",
      duration: "90 days = 90 gummies",
      cost: "$19",
      details: "Anxiety rescue, promotes alpha brain waves, balances stimulation",
      link: "https://www.amazon.com/dp/B0D83F2TB5?tag=unfogged0f-20"
    },
    {
      name: "CALM Sleep Gummies (Magnesium + Melatonin)",
      purpose: "Sleep quality, GABA support",
      dosage: "2 gummies/day (evening)",
      duration: "90 days = 180 gummies",
      cost: "$50",
      details: "Deep sleep architecture repair, nervous system recovery",
      link: "https://www.amazon.com/dp/B085HK5LY2?tag=unfogged0f-20"
    }
  ];

  const alternatives = [
    {
      category: "Budget-Friendly Alternative",
      description: "If $200 feels like too much, start with these three essentials:",
      items: ["Ashwagandha ($20/month)", "Basic Multivitamin ($10/month)", "Magnesium ($15/month)"],
      total: "~$45/month"
    },
    {
      category: "International Sourcing",
      description: "For those outside the US, consider these global options:",
      items: ["iHerb.com (worldwide shipping)", "Local health stores (compare ingredients)", "Bulk powders (if comfortable with dosing)"],
      total: "Varies by region"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo/5 to-sage/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-deep-teal mb-6">
                The Complete <span className="bg-gradient-to-r from-indigo to-gold bg-clip-text text-transparent">Stack</span>
              </h1>
              <p className="text-xl text-deep-teal/70 mb-8 leading-relaxed">
                Six science-backed supplements, carefully selected for absorption, 
                quality, and nervous system repair. No guesswork—just clarity.
              </p>
              
              <div className="flex items-center justify-center gap-8 text-sm text-deep-teal/60">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Non-prescription</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  <span>~$60/month</span>
                </div>
                <div className="text-primary font-medium">90-day protocol</div>
              </div>
            </div>
          </div>
        </section>

        {/* Supplement Breakdown */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-deep-teal mb-12 text-center">
                Core Supplement Breakdown
              </h2>
              
              <div className="space-y-8">
                {supplements.map((supplement, index) => (
                  <div key={index} className="bg-background/80 backdrop-blur-sm rounded-xl border border-sage/20 hover:border-primary/30 transition-all duration-300 overflow-hidden">
                    <div className="p-8">
                      <div className="grid lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-2">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-semibold text-deep-teal">{supplement.name}</h3>
                            <div className="text-2xl font-bold text-primary">{supplement.cost}</div>
                          </div>
                          
                          <p className="text-deep-teal/80 mb-4">{supplement.purpose}</p>
                          <p className="text-sm text-deep-teal/60 mb-6 leading-relaxed">{supplement.details}</p>
                          
                          <div className="grid sm:grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="font-medium text-deep-teal">Dosage: </span>
                              <span className="text-deep-teal/70">{supplement.dosage}</span>
                            </div>
                            <div>
                              <span className="font-medium text-deep-teal">Duration: </span>
                              <span className="text-deep-teal/70">{supplement.duration}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col gap-4">
                          <Button variant="healing" className="w-full group" asChild>
                            <a href={supplement.link} target="_blank" rel="noopener noreferrer">
                              <ShoppingCart className="w-4 h-4 mr-2" />
                              Buy on Amazon
                              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                          </Button>
                          <p className="text-xs text-deep-teal/60 text-center">
                            Affiliate link supports our mission
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Cost Summary */}
              <div className="mt-16 bg-gradient-to-r from-gold/10 to-sage/10 rounded-xl p-8 border border-gold/20">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-deep-teal mb-4">Complete Stack Investment</h3>
                  <div className="text-4xl font-bold text-primary mb-2">$184-203 USD</div>
                  <p className="text-deep-teal/70 mb-6">For 90 days of nervous system repair (~$60/month)</p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="healing" size="lg" asChild>
                      <a href="https://www.amazon.com/hz/wishlist/ls/35TOKXAVOW09Y?ref_=wl_share&tag=unfogged0f-20" target="_blank" rel="noopener noreferrer">
                        Get Complete Stack
                      </a>
                    </Button>
                    <Button variant="clarity" size="lg">
                      Start with Essentials
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alternatives */}
        <section className="py-20 bg-gradient-to-b from-sage/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-deep-teal mb-12 text-center">
                Alternative Options
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {alternatives.map((alt, index) => (
                  <div key={index} className="bg-background/80 backdrop-blur-sm rounded-xl p-8 border border-sage/20">
                    <h3 className="text-xl font-semibold text-deep-teal mb-4">{alt.category}</h3>
                    <p className="text-deep-teal/70 mb-6">{alt.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {alt.items.map((item, idx) => (
                        <li key={idx} className="text-sm text-deep-teal/80 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-4 border-t border-sage/20">
                      <span className="font-medium text-primary">{alt.total}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Message */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Why Gummies Over Pills?
                </h3>
                <p className="text-deep-teal/80 leading-relaxed">
                  Healing should taste like joy, not medicine. Gummies are easier to absorb, 
                  harder to forget, and turn your recovery into a daily ritual you actually look forward to. 
                  Plus, they're a gentle reminder that taking care of yourself can feel good.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Stack;