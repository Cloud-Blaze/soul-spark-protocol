import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroBrainBackground from "@/assets/hero-brain-background.png";

const Hero = () => {
  return (
    <section className="relative h-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBrainBackground})` }}
      />
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="max-w-2xl">
          {/* Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white text-sm font-medium mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Clarity meets clinical
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
              From <span className="text-slate-300">Fog</span> to <span className="text-yellow-400">Flow</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              The open-source nervous system stack for anyone ready to reclaim their clarity—and 
              help heal the planet. Without prescriptions, without shame, just regeneration.
            </p>

            {/* Key Promise */}
            <div className="bg-black/30 rounded-xl p-8 mb-10 border border-white/20 shadow-2xl backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="text-4xl">✝️</div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    Break humanity's true alcoholism regret cycle for{" "}
                    <span className="text-yellow-400 text-3xl md:text-4xl">$60/month</span> for 3 months
                  </h3>
                  <div className="space-y-3 text-lg leading-relaxed text-white/90">
                    <p className="font-medium">Because your kids deserve a whole parent.</p>
                    <p>Because you remember the slammed doors, the yelling, the divorce, the silence, and the pain after.</p>
                    <p className="font-medium text-yellow-400">Because healing starts with one stubborn, holy decision.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="group" asChild>
                <a href="https://www.amazon.com/hz/wishlist/ls/35TOKXAVOW09Y?ref_=wl_share&tag=unfogged0f-20" target="_blank" rel="noopener noreferrer">
                  Start Your 90-Day Reset
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/science">
                  Read the Science
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-white/20">
              <p className="text-sm text-white/70 mb-4">Trusted by thousands reclaiming clarity</p>
              <div className="flex flex-wrap gap-6 text-xs text-white/60">
                <span>✓ No prescriptions required</span>
                <span>✓ Open-source protocol</span>
                <span>✓ Science-backed ingredients</span>
                <span>✓ Community supported</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;