import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroBrainFog from "@/assets/hero-brain-fog.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBrainFog})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          {/* Sacred Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage/20 border border-sage/30 text-deep-teal text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Sacred meets science-backed
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="text-deep-teal">From</span>{" "}
            <span className="bg-gradient-to-r from-fog to-muted bg-clip-text text-transparent">
              Fog
            </span>{" "}
            <span className="text-deep-teal">to</span>{" "}
            <span className="bg-gradient-to-r from-indigo to-deep-teal bg-clip-text text-transparent">
              Flow
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-deep-teal/80 mb-8 leading-relaxed">
            The open-source nervous system stack for anyone ready to reclaim 
            their clarity—without prescriptions, without shame, just repair.
          </p>

          {/* Key Promise */}
          <div className="bg-gradient-to-r from-sage/10 to-gold/10 rounded-xl p-6 mb-10 border border-sage/20">
            <div className="flex items-start gap-4">
              <Heart className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-deep-teal mb-2">
                  90 Days. $60/month. Your brain back.
                </h3>
                <p className="text-deep-teal/70 leading-relaxed">
                  Because your kids deserve a whole parent. Because you remember who you were 
                  before stress, trauma, and survival mode became your personality.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="healing" size="lg" className="group">
              Start Your 90-Day Reset
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="sacred" size="lg" asChild>
              <Link to="/science">
                Read the Science
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-sage/20">
            <p className="text-sm text-deep-teal/60 mb-4">Trusted by thousands reclaiming clarity</p>
            <div className="flex flex-wrap gap-6 text-xs text-deep-teal/50">
              <span>✓ No prescriptions required</span>
              <span>✓ Open-source protocol</span>
              <span>✓ Science-backed ingredients</span>
              <span>✓ Community supported</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;