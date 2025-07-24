import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Clock, Target } from "lucide-react";

const Protocol = () => {
  const phases = [
    {
      phase: "Days 1-10",
      title: "Foundation Phase",
      description: "Your nervous system begins to stabilize. Sleep may improve first.",
      focus: ["Establish routine", "Track mood shifts", "Notice energy changes"],
      color: "from-indigo to-deep-teal"
    },
    {
      phase: "Days 11-30", 
      title: "Clarity Phase",
      description: "Mental fog starts lifting. Emotional reactions become less intense.",
      focus: ["Increased focus", "Better stress response", "Improved sleep quality"],
      color: "from-deep-teal to-sage"
    },
    {
      phase: "Days 31-60",
      title: "Integration Phase", 
      description: "Your authentic self begins emerging. Creativity and joy return.",
      focus: ["Stable mood", "Natural energy", "Authentic motivation"],
      color: "from-sage to-gold"
    },
    {
      phase: "Days 61-90",
      title: "Restoration Phase",
      description: "Full nervous system reset. You remember who you were before the fog.",
      focus: ["Emotional resilience", "Clear thinking", "Sustainable clarity"],
      color: "from-gold to-indigo"
    }
  ];

  const scheduleItems = [
    { time: "Morning", supplements: "Centrum + Omega-3 (2) + CoQ10 (1)", purpose: "Energy foundation" },
    { time: "Afternoon", supplements: "Ashwagandha (2) + L-Theanine (optional)", purpose: "Stress modulation" },
    { time: "Evening", supplements: "CALM Sleep Gummies (2)", purpose: "Deep repair" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-sage/10 to-gold/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-deep-teal mb-6">
                The <span className="bg-gradient-to-r from-indigo to-gold bg-clip-text text-transparent">90-Day Reset</span>
              </h1>
              <p className="text-xl text-deep-teal/70 mb-8 leading-relaxed">
                A foundational nervous system reboot for clarity, calm, and energy regulation. 
                Designed to help you rebuild who you are before life rewired you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="healing" size="lg" asChild>
                  <a href="https://www.amazon.com/hz/wishlist/ls/35TOKXAVOW09Y?ref_=wl_share&tag=unfogged0f-20&viewType=list" target="_blank" rel="noopener noreferrer">
                    Download Complete Protocol
                  </a>
                </Button>
                <Button variant="sacred" size="lg" asChild>
                  <a href="https://github.com/unfogged/unfogged-protocol/" target="_blank" rel="noopener noreferrer">
                    Join Community Support
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Daily Schedule */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-6">
                  Daily Schedule
                </h2>
                <p className="text-lg text-deep-teal/70">
                  Keep it simple. Put supplements on your counter, set phone reminders if needed. 
                  This is your ritual now.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {scheduleItems.map((item, index) => (
                  <div key={index} className="bg-background/80 backdrop-blur-sm rounded-xl p-8 border border-sage/20 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <Clock className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-semibold text-deep-teal">{item.time}</h3>
                    </div>
                    <div className="mb-4">
                      <p className="font-medium text-deep-teal mb-2">Supplements:</p>
                      <p className="text-deep-teal/70 text-sm">{item.supplements}</p>
                    </div>
                    <div>
                      <p className="font-medium text-deep-teal mb-2">Purpose:</p>
                      <p className="text-deep-teal/70 text-sm italic">{item.purpose}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 90-Day Timeline */}
        <section className="py-20 bg-gradient-to-b from-sage/5 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-6">
                  Your 90-Day Journey
                </h2>
                <p className="text-lg text-deep-teal/70">
                  Most biological systems require 8-12 weeks of consistent input to reset deeply. 
                  Here's what to expect on your path back to clarity.
                </p>
              </div>

              <div className="space-y-8">
                {phases.map((phase, index) => (
                  <div key={index} className="group">
                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                      <div className={`bg-gradient-to-r ${phase.color} rounded-xl p-8 text-sand`}>
                        <div className="text-lg font-medium opacity-90 mb-2">{phase.phase}</div>
                        <div className="text-2xl font-bold">{phase.title}</div>
                      </div>
                      
                      <div className="lg:col-span-2">
                        <p className="text-lg text-deep-teal mb-6 leading-relaxed">
                          {phase.description}
                        </p>
                        <div className="space-y-2">
                          {phase.focus.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                              <span className="text-deep-teal/80">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Guidelines */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-deep-teal mb-12 text-center">
                Important Guidelines
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-sage/10 to-gold/5 rounded-xl p-8 border border-sage/20">
                  <Target className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-deep-teal mb-4">Start Slowly</h3>
                  <p className="text-deep-teal/70 leading-relaxed">
                    If you're currently on medications or have been drinking heavily, 
                    consider starting with just Ashwagandha and gradually adding other supplements. 
                    Never stop medications abruptly.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-gold/10 to-indigo/5 rounded-xl p-8 border border-gold/20">
                  <Calendar className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-deep-teal mb-4">Stay Consistent</h3>
                  <p className="text-deep-teal/70 leading-relaxed">
                    These aren't quick fixes—they rebuild. Missing a day won't hurt, 
                    but missing a week will slow your progress. Set reminders, 
                    keep supplements visible.
                  </p>
                </div>
              </div>

              <div className="mt-12 p-8 bg-primary/5 rounded-xl border border-primary/20">
                <h3 className="text-xl font-semibold text-primary mb-4 text-center">
                  If You Slip Up After 90 Days
                </h3>
                <p className="text-deep-teal/80 text-center leading-relaxed">
                  Some people will binge again after the reset. That doesn't mean you failed—it means you're human. 
                  Your nervous system is now more sensitive and responsive to support. 
                  We have a 7-day recovery protocol to help you land softly.
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

export default Protocol;