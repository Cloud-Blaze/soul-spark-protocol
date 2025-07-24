import { Button } from "@/components/ui/button";
import { Github, Shield, Heart, ExternalLink } from "lucide-react";

const OpenSourceSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo/5 to-deep-teal/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-6">
              Open Source. <span className="bg-gradient-to-r from-indigo to-gold bg-clip-text text-transparent">Forever Free.</span>
            </h2>
            <p className="text-xl text-deep-teal/70 leading-relaxed max-w-3xl mx-auto">
              Because clarity shouldn't be patented. This protocol belongs to everyone who needs healing.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-8 border border-sage/20 hover:border-primary/30 transition-all duration-300">
              <Shield className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-deep-teal mb-4">Creative Commons Protected</h3>
              <p className="text-deep-teal/70 leading-relaxed">
                Licensed under CC BY-NC 4.0. You can share, adapt, and build upon this protocol—
                but never for commercial purposes. Healing stays free.
              </p>
            </div>

            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-8 border border-sage/20 hover:border-primary/30 transition-all duration-300">
              <Github className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-deep-teal mb-4">Community Driven</h3>
              <p className="text-deep-teal/70 leading-relaxed">
                Fork it, improve it, adapt it to your culture. Our GitHub community is where 
                the real healing happens—through collaboration, not commercialization.
              </p>
            </div>

            <div className="bg-background/80 backdrop-blur-sm rounded-xl p-8 border border-sage/20 hover:border-primary/30 transition-all duration-300">
              <Heart className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-xl font-semibold text-deep-teal mb-4">Cannot Be Resold</h3>
              <p className="text-deep-teal/70 leading-relaxed">
                No one can take this protocol and sell it back to you. It's legally protected 
                against exploitation. Your nervous system reset will always be accessible.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-gold/10 to-sage/10 rounded-xl p-8 border border-gold/20 mb-8">
              <h3 className="text-2xl font-bold text-deep-teal mb-4">Join the Movement</h3>
              <p className="text-deep-teal/70 mb-6 leading-relaxed">
                Our community lives on GitHub—where we share updates, support each other, 
                and ensure this protocol stays in the hands of those who need it most.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="healing" size="lg" asChild>
                  <a href="https://github.com/unfogged/unfogged-protocol/" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    Join GitHub Community
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button variant="clarity" size="lg" asChild>
                  <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener noreferrer">
                    <Shield className="w-5 h-5 mr-2" />
                    View License
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>

            <p className="text-sm text-deep-teal/60 italic">
              "If Leonardo da Vinci were alive today, he wouldn't just paint. 
              He'd build this protocol and open-source it too."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;