import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Sun, Moon, Sparkles, Clock } from "lucide-react";

const KidsProtocol = () => {
  useEffect(() => {
    document.title = "Unfogged Kids - 30-Day Dopamine Reset for Children | Screen-Stuck Generation";
  }, []);

  const gummySchedule = [
    {
      time: "🥣 Morning",
      gummy: "Omega-3 DHA",
      dosage: "250mg",
      function: "Brain growth, mood, memory, focus",
      icon: Brain
    },
    {
      time: "🧠 Morning",
      gummy: "B6 + B12 Complex",
      dosage: "Low-dose",
      function: "Dopamine & serotonin support",
      icon: Sparkles
    },
    {
      time: "🕓 Afternoon",
      gummy: "L-Theanine",
      dosage: "50–100mg",
      function: "Calm focus after school / screen time",
      icon: Clock
    },
    {
      time: "🌙 Evening",
      gummy: "Magnesium Glycinate",
      dosage: "100–150mg",
      function: "Sleep, nervous system repair",
      icon: Moon
    }
  ];

  const rituals = [
    {
      ritual: "Morning sunlight (10 min)",
      why: "Resets natural dopamine and circadian rhythm",
      icon: Sun
    },
    {
      ritual: '1 hour "screen break" after school',
      why: "Allows overstimulated brains to recalibrate",
      icon: Brain
    },
    {
      ritual: "Play-based boredom time",
      why: "Builds imagination + intrinsic motivation",
      icon: Sparkles
    },
    {
      ritual: "Gentle media at night (books, Mr. Rogers, Bluey)",
      why: "Avoids dopamine spikes before sleep",
      icon: Heart
    }
  ];

  const benefits = [
    "Less screen-related tantrums",
    "Better transitions between activities", 
    "More self-led, imaginative play",
    "Calmer evenings",
    "Better sleep and morning energy"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <span className="text-6xl">🧠</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                UNFOGGED KIDS
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground/90">
                The 30-Day Dopamine Reset for the Screen-Stuck Generation
              </h2>
              <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
                <strong>Doctor-formulated. Parent-approved. Kid-loved.</strong><br/>
                A natural gummy protocol to help modern children return to baseline—calm, creative, and focused like it's 1987 again.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-6">
                  Get the Protocol
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Read the Science
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 text-center">🧒 WHO IT'S FOR</h3>
              <Card className="p-8 mb-12">
                <CardContent className="p-0">
                  <p className="text-lg mb-6">Children ages <strong>6–12</strong> growing up on:</p>
                  <div className="grid md:grid-cols-2 gap-4 text-lg">
                    <ul className="space-y-2">
                      <li>• iPads, YouTube, TikTok</li>
                      <li>• Roblox, Minecraft, Fortnite</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• Hyper-edited TV and short-form content</li>
                      <li>• Emotional meltdowns after screen time</li>
                      <li>• Trouble focusing, calming down, or sleeping</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-6">🎯 WHY IT MATTERS</h3>
                <div className="bg-card p-8 rounded-lg border">
                  <p className="text-lg leading-relaxed mb-6">
                    We're witnessing the first full generation raised on <strong>dopamine superstimulus</strong>—bright screens, fast sounds, constant novelty. It's wrecking attention spans, delaying emotional development, and zombifying the spark in our kids.
                  </p>
                  <p className="text-lg leading-relaxed">
                    <strong>UNFOGGED KIDS</strong> is a simple, non-prescription daily protocol that supports the nervous system, brain chemistry, and emotional baseline of overstimulated children.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Daily Protocol */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-3xl font-bold mb-4 text-center">🍬 DAILY GUMMY PROTOCOL</h3>
              <p className="text-center text-lg mb-12 text-red-600 font-semibold">
                Always consult your pediatrician before starting.
              </p>
              
              <div className="grid gap-6 mb-12">
                {gummySchedule.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                      <CardContent className="p-0 flex items-center gap-6">
                        <div className="flex-shrink-0">
                          <IconComponent className="w-12 h-12 text-primary" />
                        </div>
                        <div className="flex-grow">
                          <div className="grid md:grid-cols-4 gap-4 items-center">
                            <div className="font-semibold text-lg">{item.time}</div>
                            <div className="font-bold text-primary">{item.gummy}</div>
                            <div className="text-muted-foreground">{item.dosage}</div>
                            <div className="text-sm">{item.function}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <Card className="p-6 bg-secondary/10">
                <CardContent className="p-0">
                  <h4 className="text-xl font-bold mb-4">🌀 Optional (2–3x/week)</h4>
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div className="font-semibold">Midday</div>
                    <div className="font-bold text-primary">CoQ10</div>
                    <div className="text-muted-foreground">30–50mg</div>
                    <div className="text-sm">Energy + cell support on no-screen days</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Home Rituals */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-3xl font-bold mb-4 text-center">👪 HOW TO USE IT AT HOME</h3>
              <p className="text-center text-lg mb-12">
                Pair the gummies with light daily rituals for full nervous system support.
              </p>
              
              <div className="grid gap-6">
                {rituals.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                      <CardContent className="p-0 flex items-center gap-6">
                        <div className="flex-shrink-0">
                          <IconComponent className="w-10 h-10 text-secondary" />
                        </div>
                        <div className="flex-grow">
                          <div className="grid md:grid-cols-2 gap-4 items-center">
                            <div className="font-semibold text-lg">{item.ritual}</div>
                            <div className="text-muted-foreground">{item.why}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Parent Reports */}
        <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-8">❤️ WHAT PARENTS REPORT</h3>
              <p className="text-xl mb-8">After 7–14 days:</p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                    <span className="text-green-500 text-xl">✅</span>
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Product Bundle */}
        <section className="py-20 bg-gradient-to-b from-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 text-center">📦 THE 30-DAY RESET BOX</h3>
              <Card className="p-8">
                <CardContent className="p-0">
                  <h4 className="text-2xl font-bold mb-6 text-center">UNFOGGED KIDS: Complete Family Protocol</h4>
                  <p className="text-center text-lg mb-8">A beautiful, shelf-ready family protocol box.</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    <ul className="space-y-3">
                      <li>• 4 Bottles of Gummies (30-day supply)</li>
                      <li>• Parent Guidebook: "Unfogged at Home"</li>
                      <li>• Daily Routine Tracker</li>
                    </ul>
                    <ul className="space-y-3">
                      <li>• Audio Calm Stories (via QR code)</li>
                      <li>• Mr. Rogers Era Sticker Sheet</li>
                      <li>• Pediatrician Letter Template</li>
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <Button size="lg" className="text-lg px-12 py-6">
                      Pre-Order Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Safety */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-8 text-center">⚠️ SAFETY & LEGITIMACY</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h4 className="font-bold mb-4">Formulation Standards</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Pediatric nutrition advisor consultation</li>
                      <li>• All ingredients GRAS (Generally Recognized As Safe)</li>
                      <li>• Sugar-free or naturally sweetened</li>
                      <li>• No artificial colors or dyes</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h4 className="font-bold mb-4">Medical Approval</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Gluten-free, dairy-free, allergen-conscious</li>
                      <li>• Co-branded with pediatric clearance</li>
                      <li>• <strong>Will not ship without physician-level sign-off</strong></li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Heart of It */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-8">📜 THE HEART OF IT</h3>
              
              <div className="bg-card p-8 rounded-lg border">
                <p className="text-lg leading-relaxed mb-6">
                  This isn't a trend. It's a <strong>reclamation of childhood</strong>.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Our mission isn't to medicate children—it's to <strong>protect their spark</strong>.
                </p>
                <p className="text-lg leading-relaxed mb-8">
                  If this helps even one parent help their kid feel human again, the work is worth it.
                </p>
                
                <div className="text-2xl font-bold text-primary mb-4">
                  Let's bring back slow wonder. Let's unfog the kids.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KidsProtocol;