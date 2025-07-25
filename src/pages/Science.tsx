import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Heart, Microscope, FlaskConical, BookOpen, Users, Sprout, MessageCircle, Baby } from "lucide-react";

const Science = () => {
  const [activeTab, setActiveTab] = useState("adult");

  useEffect(() => {
    document.title = "The Science Behind Healing | Unfogged - Evidence-Based Nervous System Protocol";
    
    // Check URL params for tab selection
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');
    if (tabParam === 'kids') {
      setActiveTab('kids');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-sage/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Microscope className="w-8 h-8 text-primary" />
              <Badge variant="outline" className="text-sm px-4 py-2">
                Evidence-Based Protocol
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo to-deep-teal bg-clip-text text-transparent mb-6">
              The Science Behind Healing
            </h1>
            <p className="text-xl text-deep-teal/70 leading-relaxed max-w-3xl mx-auto">
              Every component in the UNFOGGED™ AND UNFOGGED KIDS™ stack is backed by clinical research, 
              nutritional science, and the sacred understanding that your nervous system 
              deserves repair—not just management.
            </p>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Brain, title: "Nervous System", count: "90+ Days", desc: "For complete neural rewiring" },
              { icon: FlaskConical, title: "Clinical Studies", count: "200+", desc: "Supporting each supplement" },
              { icon: Heart, title: "Family Impact", count: "Proven", desc: "Anxiety affects the whole household" },
              { icon: Sprout, title: "Natural Healing", count: "0 Rx", desc: "No prescriptions required" }
            ].map((stat, index) => (
              <Card key={index} className="text-center border-sage/20 bg-gradient-to-b from-sage/5 to-background">
                <CardContent className="pt-6">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-deep-teal mb-1">{stat.count}</div>
                  <div className="font-semibold text-deep-teal mb-2">{stat.title}</div>
                  <div className="text-sm text-deep-teal/60">{stat.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Research Sections */}
      <section className="py-16 bg-gradient-to-b from-background to-sage/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="adult" className="flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  Adult Protocol
                </TabsTrigger>
                <TabsTrigger value="kids" className="flex items-center gap-2">
                  <Baby className="w-4 h-4" />
                  Kids Protocol
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="adult" className="space-y-12">
              {/* 90-Day Repair Science */}
              <Card className="border-sage/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Brain className="w-6 h-6 text-primary" />
                    <CardTitle className="text-2xl text-deep-teal">The Science Behind 90-Day Nervous System Repair</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-deep-teal/70 leading-relaxed">
                    Why 90 days? Because most biological systems require 8–12 weeks of consistent input to reset deeply.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-sage/10 rounded-lg border border-sage/20">
                      <h4 className="font-semibold text-deep-teal mb-2">Neurotransmitter Regulation</h4>
                      <p className="text-sm text-deep-teal/70">Serotonin, dopamine, and GABA levels regulate gradually over 8-12 weeks</p>
                    </div>
                    <div className="p-4 bg-sage/10 rounded-lg border border-sage/20">
                      <h4 className="font-semibold text-deep-teal mb-2">Nutrient Replenishment</h4>
                      <p className="text-sm text-deep-teal/70">B12, magnesium, and CoQ10 levels replenish slowly and steadily</p>
                    </div>
                    <div className="p-4 bg-sage/10 rounded-lg border border-sage/20">
                      <h4 className="font-semibold text-deep-teal mb-2">Circadian Reset</h4>
                      <p className="text-sm text-deep-teal/70">Hormonal and sleep rhythms stabilize over multiple cycles</p>
                    </div>
                  </div>
                  <div className="bg-gold/10 p-4 rounded-lg border border-gold/20">
                    <p className="text-sm text-deep-teal italic mb-2">
                      "Supplements don't work like meds. They rebuild, not override."
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-deep-teal">Key Benefits of 90 Days:</h4>
                    <ul className="text-sm text-deep-teal/70 space-y-1">
                      <li>• Mitochondrial energy improves (especially via CoQ10)</li>
                      <li>• Sleep architecture resets completely</li>
                      <li>• Stress response normalizes naturally</li>
                    </ul>
                  </div>
                  <div className="mt-4 p-4 bg-gradient-to-r from-sage/15 to-gold/15 rounded-lg border border-sage/30">
                    <h4 className="text-base font-bold text-deep-teal mb-2 flex items-center gap-2">
                      <Brain className="w-4 h-4" />
                      90-Day Protocol Research:
                    </h4>
                    <a href="https://www.personanutrition.com/blog/90-day-supplement-journey" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors underline font-medium text-sm">→ personanutrition.com/blog/90-day-supplement-journey</a>
                  </div>
                </CardContent>
              </Card>

              {/* Core Supplements Evidence */}
              <Card className="border-sage/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FlaskConical className="w-6 h-6 text-primary" />
                    <CardTitle className="text-2xl text-deep-teal">Evidence-Based Core Supplements</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-deep-teal/70 leading-relaxed mb-6">
                    Each core component in the Unfogged stack is backed by clinical and nutritional research. These are not just "vitamins"—they are precision tools for repairing the bioelectric fog.
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { name: "Magnesium", purpose: "Calms nerves, supports GABA", effect: "Natural nervous system relaxant" },
                      { name: "B-Complex", purpose: "Builds neurotransmitters", effect: "Fuels dopamine & serotonin production" },
                      { name: "Omega-3", purpose: "Brain repair, lowers anxiety", effect: "Reduces inflammation, supports plasticity" },
                      { name: "Ashwagandha", purpose: "Lowers cortisol", effect: "Regulates stress hormone response" },
                      { name: "L-Theanine", purpose: "Boosts alpha brainwaves", effect: "Calm focus without sedation" },
                      { name: "CoQ10", purpose: "Mitochondrial recovery", effect: "Restores cellular energy production" }
                    ].map((supplement, index) => (
                      <div key={index} className="p-4 bg-gradient-to-b from-sage/5 to-background rounded-lg border border-sage/20">
                        <h4 className="font-semibold text-deep-teal mb-2">{supplement.name}</h4>
                        <p className="text-sm text-deep-teal/70 mb-2">{supplement.purpose}</p>
                        <p className="text-xs text-primary font-medium">{supplement.effect}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-6 bg-gradient-to-r from-sage/20 to-gold/20 rounded-lg border border-sage/30">
                    <h4 className="text-lg font-bold text-deep-teal mb-4 flex items-center gap-2">
                      <FlaskConical className="w-5 h-5" />
                      Clinical Research Sources:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="p-3 bg-background/80 rounded border border-sage/20">
                        <p className="font-semibold text-deep-teal mb-2">Magnesium & B-Complex:</p>
                        <a href="https://www.carenity.us/condition-information/magazine/nutrition/10-natural-supplements-that-can-transform-your-mental-health-1937" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors underline font-medium block">→ Carenity: Natural Supplements for Mental Health</a>
                      </div>
                      <div className="p-3 bg-background/80 rounded border border-sage/20">
                        <p className="font-semibold text-deep-teal mb-2">Omega-3 & Ashwagandha:</p>
                        <a href="https://www.carenity.us/condition-information/magazine/nutrition/10-natural-supplements-that-can-transform-your-mental-health-1937" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors underline font-medium block">→ Carenity: Clinical Evidence Overview</a>
                      </div>
                      <div className="p-3 bg-background/80 rounded border border-sage/20">
                        <p className="font-semibold text-deep-teal mb-2">L-Theanine Research:</p>
                        <a href="https://www.mindbodygreen.com/articles/diet-that-improved-my-sleep-energy-anxiety" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors underline font-medium block">→ MindBodyGreen: Alpha Brainwave Studies</a>
                      </div>
                      <div className="p-3 bg-background/80 rounded border border-sage/20">
                        <p className="font-semibold text-deep-teal mb-2">CoQ10 Mitochondrial Studies:</p>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/19356339/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors underline font-medium block">→ PubMed: CoQ10 Clinical Research</a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Not Cold Turkey */}
              <Card className="border-sage/20 bg-gradient-to-r from-gold/10 to-sage/10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Heart className="w-6 h-6 text-primary" />
                    <CardTitle className="text-2xl text-deep-teal">Why Supported Recovery vs. Cold Turkey</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-deep-teal/70 leading-relaxed">
                    Sudden withdrawal from psychiatric medications or alcohol is not only risky—it can cause long-term damage to the nervous system.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-deep-teal mb-3">Risks of Cold Turkey</h4>
                      <ul className="space-y-2 text-sm text-deep-teal/70">
                        <li>• Hyperexcitable nerves and glutamate surges</li>
                        <li>• Insomnia, heart palpitations, emotional destabilization</li>
                        <li>• Increased likelihood of relapse or trauma looping</li>
                        <li>• Symptoms may persist for months or years</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-deep-teal mb-3">UNFOGGED™ AND UNFOGGED KIDS™ Approach</h4>
                      <ul className="space-y-2 text-sm text-deep-teal/70">
                        <li>• Gentle nervous system support</li>
                        <li>• Nutritional scaffolding for natural healing</li>
                        <li>• No shame, no pressure, just repair</li>
                        <li>• Your brain deserves rebuilding, not just management</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-background rounded-lg border border-sage/20">
                    <p className="text-sm text-deep-teal/70 italic">
                      "The central nervous system is left unregulated... symptoms may persist for months or years." — Benzoinfo.com
                    </p>
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-gold/15 to-sage/15 rounded-lg border border-gold/30">
                    <h4 className="text-base font-bold text-deep-teal mb-3 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Withdrawal Research Sources:
                    </h4>
                    <div className="space-y-2">
                      <a href="https://www.benzoinfo.com/benzodiazepine-detox-cold-turkey-abrupt-cessation" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors underline font-medium block text-sm">→ Benzoinfo.com: Benzodiazepine Cold Turkey Dangers</a>
                      <a href="https://distance.physiology.med.ufl.edu/the-dangers-of-stopping-antidepressants-cold-turkey" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors underline font-medium block text-sm">→ University of Florida: Antidepressant Withdrawal Risks</a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Gut-Brain Axis */}
              <Card className="border-sage/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Sprout className="w-6 h-6 text-primary" />
                    <CardTitle className="text-2xl text-deep-teal">Gut-Brain Axis: Your Second Nervous System</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-deep-teal/70 leading-relaxed">
                    Your gut is not just digesting food—it's digesting life. The microbiome directly impacts your mental state.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-sage/10 rounded-lg border border-sage/20">
                      <div className="text-2xl font-bold text-primary mb-2">90%</div>
                      <div className="text-sm text-deep-teal font-medium mb-1">Serotonin Production</div>
                      <div className="text-xs text-deep-teal/60">Made in the gut</div>
                    </div>
                    <div className="text-center p-4 bg-sage/10 rounded-lg border border-sage/20">
                      <div className="text-2xl font-bold text-primary mb-2">Direct</div>
                      <div className="text-sm text-deep-teal font-medium mb-1">Inflammation Link</div>
                      <div className="text-xs text-deep-teal/60">To depression & brain fog</div>
                    </div>
                    <div className="text-center p-4 bg-sage/10 rounded-lg border border-sage/20">
                      <div className="text-2xl font-bold text-primary mb-2">Vital</div>
                      <div className="text-sm text-deep-teal font-medium mb-1">Mood Regulation</div>
                      <div className="text-xs text-deep-teal/60">Through microbiome balance</div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-background rounded-lg border border-sage/20">
                    <h4 className="font-semibold text-deep-teal mb-3">How Probiotics Support Mental Health:</h4>
                    <ul className="text-sm text-deep-teal/70 space-y-1">
                      <li>• Reduce anxiety symptoms naturally</li>
                      <li>• Improve digestion and neurotransmitter balance</li>
                      <li>• Support fermented foods and prebiotic fiber intake</li>
                    </ul>
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-sage/15 to-gold/15 rounded-lg border border-sage/30">
                    <h4 className="text-base font-bold text-deep-teal mb-3 flex items-center gap-2">
                      <Sprout className="w-4 h-4" />
                      Gut-Brain Research Sources:
                    </h4>
                    <div className="space-y-2">
                      <a href="https://www.carenity.us/condition-information/magazine/nutrition/10-natural-supplements-that-can-transform-your-mental-health-1937" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors underline font-medium block text-sm">→ Carenity: Probiotics & Mental Health Research</a>
                      <a href="https://www.mindbodygreen.com/articles/diet-that-improved-my-sleep-energy-anxiety" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors underline font-medium block text-sm">→ MindBodyGreen: Gut-Brain Axis Connection</a>
                      <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4367209/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors underline font-medium block text-sm">→ NCBI: Microbiome & Mental Health</a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Family Impact */}
              <Card className="border-sage/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-primary" />
                    <CardTitle className="text-2xl text-deep-teal">The Family Nervous System</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-deep-teal/70 leading-relaxed">
                    Anxiety is contagious—especially in families. Nervous systems sync through tone, voice, and stress patterns.
                  </p>
                  <div className="bg-gold/10 p-6 rounded-lg border border-gold/20">
                    <p className="text-deep-teal italic text-center font-medium">
                      "By healing one parent's anxiety, you may prevent a child's future diagnosis."
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-sage/10 rounded-lg border border-sage/20">
                      <h4 className="font-semibold text-deep-teal mb-2">The Problem</h4>
                      <ul className="text-sm text-deep-teal/70 space-y-1">
                        <li>• Kids of anxious parents have higher GAD/depression risk</li>
                        <li>• Dual-partner dysregulation amplifies household instability</li>
                        <li>• Stress patterns become generational</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-sage/10 rounded-lg border border-sage/20">
                      <h4 className="font-semibold text-deep-teal mb-2">The Solution</h4>
                      <ul className="text-sm text-deep-teal/70 space-y-1">
                        <li>• One parent's healing affects the whole family</li>
                        <li>• Nervous system regulation is contagious</li>
                        <li>• Children learn calm from calm adults</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-gold/15 to-sage/15 rounded-lg border border-gold/30">
                    <h4 className="text-base font-bold text-deep-teal mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Family Nervous System Research:
                    </h4>
                    <div className="space-y-2">
                      <a href="https://www.medicalnewstoday.com/articles/parental-anxiety" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors underline font-medium block text-sm">→ Medical News Today: How Parental Anxiety Affects Children</a>
                      <a href="https://www.verywellhealth.com/living-with-a-bipolar-spouse-5205006" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors underline font-medium block text-sm">→ VeryWell Health: Living with Bipolar Spouse Impact</a>
                      <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3181675/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors underline font-medium block text-sm">→ NCBI: Intergenerational Transmission of Anxiety</a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Working with Healthcare */}
              <Card className="border-sage/20 bg-gradient-to-r from-sage/10 to-gold/10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-6 h-6 text-primary" />
                    <CardTitle className="text-2xl text-deep-teal">Working with Your Healthcare Team</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-deep-teal/70 leading-relaxed">
                    You're allowed to ask for help without a prescription. Here's how to advocate for nutrition-based nervous system support.
                  </p>
                  <div className="bg-background p-6 rounded-lg border border-sage/20">
                    <h4 className="font-semibold text-deep-teal mb-3">Sample phrasing for your doctor:</h4>
                    <blockquote className="italic text-deep-teal/80 border-l-4 border-primary pl-4">
                      "I've had low energy and feel my stress in my body. I'd like a nutrition-based plan for sleep, mood, and nervous system health. No interest in meds—just support."
                    </blockquote>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-sage/10 rounded-lg border border-sage/20">
                      <h4 className="font-semibold text-deep-teal mb-2">Registered Dietitians (RD)</h4>
                      <p className="text-sm text-deep-teal/70">Often covered by insurance, nutrition-focused</p>
                    </div>
                    <div className="p-4 bg-sage/10 rounded-lg border border-sage/20">
                      <h4 className="font-semibold text-deep-teal mb-2">Functional Medicine</h4>
                      <p className="text-sm text-deep-teal/70">Whole-system approach, root cause focus</p>
                    </div>
                    <div className="p-4 bg-sage/10 rounded-lg border border-sage/20">
                      <h4 className="font-semibold text-deep-teal mb-2">Nutrition-Savvy Psychiatrists</h4>
                      <p className="text-sm text-deep-teal/70">Mental health with nutritional awareness</p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-gold/10 rounded-lg border border-gold/20">
                    <h4 className="font-semibold text-deep-teal mb-2">Insurance Coverage Tips:</h4>
                    <p className="text-sm text-deep-teal/70">
                      Many insurance plans (including BCBS) offer 1–3 covered visits per year with qualified nutrition professionals. 
                      Have your stack printed and bring your questions—you're allowed to ask for help without a prescription.
                    </p>
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-sage/15 to-gold/15 rounded-lg border border-sage/30">
                    <h4 className="text-base font-bold text-deep-teal mb-3 flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Healthcare Provider Resources:
                    </h4>
                    <div className="space-y-2">
                      <a href="https://ifm.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors underline font-medium block text-sm">→ ifm.org - Find Functional Medicine Practitioners</a>
                      <a href="https://psychologytoday.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors underline font-medium block text-sm">→ Psychology Today - Filter for Nutrition-Focused Providers</a>
                      <a href="https://www.eatright.org/find-a-nutrition-expert" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors underline font-medium block text-sm">→ Academy of Nutrition - Find Registered Dietitians</a>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </TabsContent>

            <TabsContent value="kids" className="space-y-12">
              {/* Clinical Advisory */}
              <Card className="border-gold/30 bg-gradient-to-r from-gold/10 to-sage/10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Heart className="w-6 h-6 text-primary" />
                    <CardTitle className="text-2xl text-deep-teal">⚠️ Clinical Advisory</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-deep-teal/80 font-medium">
                    <strong>Consult your pediatrician before beginning any supplement protocol with a child.</strong> While the ingredients described are Generally Recognized As Safe (GRAS) and grounded in clinical research, every child's neurodevelopmental needs and health status are unique.
                  </p>
                </CardContent>
              </Card>

              {/* Executive Summary */}
              <Card className="border-sage/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Baby className="w-6 h-6 text-primary" />
                    <CardTitle className="text-2xl text-deep-teal">Unfogged Kids: Research-Informed Protocol for Screen-Overstimulated Children (Ages 6–12)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-deep-teal/70 leading-relaxed">
                    Excessive screen exposure is now recognized as a leading factor in emotional dysregulation, dopamine system overstimulation, and attention fatigue in children. The Unfogged Kids protocol was developed to gently support nervous system reset using:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-sage/10 rounded-lg border border-sage/20">
                      <h4 className="font-semibold text-deep-teal mb-2">Targeted Screen Breaks</h4>
                      <p className="text-sm text-deep-teal/70">Structured digital detox periods</p>
                    </div>
                    <div className="p-4 bg-sage/10 rounded-lg border border-sage/20">
                      <h4 className="font-semibold text-deep-teal mb-2">Play/Sleep Routines</h4>
                      <p className="text-sm text-deep-teal/70">Regulated circadian rhythms</p>
                    </div>
                    <div className="p-4 bg-sage/10 rounded-lg border border-sage/20">
                      <h4 className="font-semibold text-deep-teal mb-2">Pediatric-Safe Nutrition</h4>
                      <p className="text-sm text-deep-teal/70">Omega-3s, L-Theanine, Magnesium, B6, B12, optional CoQ10</p>
                    </div>
                  </div>
                  <div className="bg-gold/10 p-4 rounded-lg border border-gold/20">
                    <p className="text-sm text-deep-teal italic">
                      All supplement dosages align with existing clinical research and GRAS standards. This protocol cites over 40 studies across behavioral psychology, pediatric neurobiology, and nutritional psychiatry.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Dopamine Impact */}
              <Card className="border-sage/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Brain className="w-6 h-6 text-primary" />
                    <CardTitle className="text-2xl text-deep-teal">The Dopamine Impact of Screen Overexposure</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h4 className="font-semibold text-deep-teal mb-3">📱 Effects of Chronic Digital Stimulation:</h4>
                  <ul className="text-sm text-deep-teal/70 space-y-2 mb-6">
                    <li>• Repeated dopamine surges from apps/games/videos dysregulate reward sensitivity</li>
                    <li>• Elevated screen time correlates with attention problems and impulsivity</li>
                    <li>• Fast-cut editing and interactive content simulate "digital cocaine" effects in developing brains</li>
                  </ul>
                  
                  <h4 className="font-semibold text-deep-teal mb-3">⚠️ Key Statistics:</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-sage/10 rounded-lg border border-sage/20">
                      <div className="text-2xl font-bold text-primary mb-2">5.5 hrs</div>
                      <div className="text-sm text-deep-teal font-medium mb-1">Daily Screen Use</div>
                      <div className="text-xs text-deep-teal/60">Children 8–12 average</div>
                    </div>
                    <div className="text-center p-4 bg-sage/10 rounded-lg border border-sage/20">
                      <div className="text-2xl font-bold text-primary mb-2">Rising</div>
                      <div className="text-sm text-deep-teal font-medium mb-1">ADHD Diagnoses</div>
                      <div className="text-xs text-deep-teal/60">Track with screen trends</div>
                    </div>
                    <div className="text-center p-4 bg-sage/10 rounded-lg border border-sage/20">
                      <div className="text-2xl font-bold text-primary mb-2">Virtual</div>
                      <div className="text-sm text-deep-teal font-medium mb-1">ADHD & Addiction</div>
                      <div className="text-xs text-deep-teal/60">Now recognized phenomena</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gradient-to-r from-sage/15 to-gold/15 rounded-lg border border-sage/30">
                    <h4 className="text-base font-bold text-deep-teal mb-3 flex items-center gap-2">
                      <Brain className="w-4 h-4" />
                      Screen Impact Research:
                    </h4>
                    <div className="space-y-2 text-sm">
                      <a href="https://doi.org/10.1016/j.envres.2018.01.015" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors underline font-medium block">→ Lissak, 2018: Screen Time & Attention Problems</a>
                      <a href="https://doi.org/10.1186/s12889-024-18269-0" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors underline font-medium block">→ Twenge et al., 2024: Digital Stimulation Effects</a>
                      <a href="https://www.commonsensemedia.org/research/the-common-sense-census-media-use-by-tweens-and-teens-2021" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors underline font-medium block">→ Common Sense Media, 2021: Screen Usage Stats</a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Nutritional Interventions */}
              <Card className="border-sage/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <FlaskConical className="w-6 h-6 text-primary" />
                    <CardTitle className="text-2xl text-deep-teal">Nutritional Interventions Backed by Research</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {[
                      { 
                        name: "🧠 Omega-3 DHA/EPA", 
                        purpose: "Myelin development & dopamine function", 
                        research: "Meta-analysis shows modest ADHD improvements",
                        dosing: "250–500mg DHA/EPA per day"
                      },
                      { 
                        name: "🌿 L-Theanine", 
                        purpose: "Alpha brain wave activity (calm alertness)", 
                        research: "Improved sleep quality in boys with ADHD",
                        dosing: "100–200mg per day (ages 6+)"
                      },
                      { 
                        name: "🧘 Magnesium (Glycinate)", 
                        purpose: "NMDA/GABA balance; sleep + calm", 
                        research: "72% of ADHD kids found deficient",
                        dosing: "100–200mg/day shows benefit"
                      },
                      { 
                        name: "🔬 B6 + B12", 
                        purpose: "Dopamine synthesis & myelination", 
                        research: "B6 is dopamine cofactor; B12 supports myelin",
                        dosing: "Low-range multivitamin amounts"
                      },
                      { 
                        name: "⚡ CoQ10 (Optional)", 
                        purpose: "Mitochondrial support + antioxidant", 
                        research: "Safe for children, studied in autism",
                        dosing: "1–2mg/kg/day"
                      }
                    ].map((supplement, index) => (
                      <div key={index} className="p-4 bg-gradient-to-b from-sage/5 to-background rounded-lg border border-sage/20">
                        <h4 className="font-semibold text-deep-teal mb-2">{supplement.name}</h4>
                        <p className="text-sm text-deep-teal/70 mb-2">{supplement.purpose}</p>
                        <p className="text-xs text-primary font-medium mb-2">{supplement.research}</p>
                        <p className="text-xs text-deep-teal/60 italic">{supplement.dosing}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-6 bg-gradient-to-r from-sage/20 to-gold/20 rounded-lg border border-sage/30">
                    <h4 className="text-lg font-bold text-deep-teal mb-4 flex items-center gap-2">
                      <FlaskConical className="w-5 h-5" />
                      Research Citations:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="p-3 bg-background/80 rounded border border-sage/20">
                        <p className="font-semibold text-deep-teal mb-2">Omega-3 Meta-Analysis:</p>
                        <a href="https://doi.org/10.1016/j.jaac.2011.06.008" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors underline font-medium block">→ Bloch & Qawasmi, 2011</a>
                      </div>
                      <div className="p-3 bg-background/80 rounded border border-sage/20">
                        <p className="font-semibold text-deep-teal mb-2">L-Theanine Pediatric Study:</p>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/22214254/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors underline font-medium block">→ Lyon et al., 2011</a>
                      </div>
                      <div className="p-3 bg-background/80 rounded border border-sage/20">
                        <p className="font-semibold text-deep-teal mb-2">Magnesium Deficiency in ADHD:</p>
                        <a href="https://pubmed.ncbi.nlm.nih.gov/16787222/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors underline font-medium block">→ Mousain-Bosc et al., 2006</a>
                      </div>
                      <div className="p-3 bg-background/80 rounded border border-sage/20">
                        <p className="font-semibold text-deep-teal mb-2">CoQ10 in Autism:</p>
                        <a href="https://doi.org/10.1055/s-0037-1604156" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors underline font-medium block">→ O'Leary et al., 2017</a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Protocol Safety */}
              <Card className="border-sage/20 bg-gradient-to-r from-gold/10 to-sage/10">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Heart className="w-6 h-6 text-primary" />
                    <CardTitle className="text-2xl text-deep-teal">Protocol Design + Pediatric Safety</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-deep-teal mb-3">🧸 Pediatric Safety Notes:</h4>
                      <ul className="space-y-2 text-sm text-deep-teal/70">
                        <li>• All supplements listed are GRAS, used in pediatric studies</li>
                        <li>• No melatonin. No stimulants. No synthetics.</li>
                        <li>• Emphasis is on <strong>low-dose, food-grade nutrients</strong> + routine shifts</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-deep-teal mb-3">📦 Designed For:</h4>
                      <ul className="space-y-2 text-sm text-deep-teal/70">
                        <li>• Children aged 6–12 undergoing high digital stimulation</li>
                        <li>• Families seeking <strong>non-medication path</strong> to reset screen damage</li>
                        <li>• Doctors & wellness providers seeking credible, documented tools</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-background rounded-lg border border-sage/20">
                    <p className="text-deep-teal/80 italic text-center">
                      The Unfogged Kids protocol is not a treatment—it is a <strong>researched support system</strong> for children recovering from chronic overstimulation. Grounded in nutritional neuroscience and pediatric behavioral science, it gives families a verified foundation for restoring calm, attention, and emotional resilience—gently and affordably.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Sacred Message */}
      <section className="py-16 bg-gradient-to-b from-sage/10 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-gold/10 to-sage/10 p-8 rounded-2xl border border-sage/20">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-deep-teal mb-4">
                These are not just "vitamins"
              </h3>
              <p className="text-lg text-deep-teal/80 italic leading-relaxed">
                They are precision tools for repairing the bioelectric fog. Your nervous system is sacred territory—
                and it deserves nutrients that rebuild, not just pills that override.
              </p>
              <div className="mt-6 pt-6 border-t border-sage/20">
                <p className="text-sm text-deep-teal/60">
                  Because clarity shouldn't be patented. It should be packaged in a gummy, 
                  sponsored by a friend, and delivered to someone who forgot who they were as a kid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Science;
