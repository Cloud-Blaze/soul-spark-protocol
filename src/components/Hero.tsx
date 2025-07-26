import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroBrainFog from "@/assets/hero-brain-fog.jpg";

const Hero = () => {
  return (
    <section className="relative h-full flex items-center overflow-hidden">
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
            Clarity meets clinical
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
            their clarity—and help heal the planet. Without prescriptions, without shame, just regeneration.
          </p>

          {/* Key Promise */}
          <div className="bg-gradient-to-r from-sage/10 to-gold/10 rounded-xl p-8 mb-10 border border-sage/20 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="text-6xl mb-4">✝️</div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-deep-teal mb-4">
                  Break humanity's true alcoholism regret cycle for <span className="text-primary text-3xl md:text-4xl">$60/month</span> for 3 months
                </h3>
                <div className="space-y-3 text-lg text-deep-teal leading-relaxed">
                  <p className="font-medium">Because your kids deserve a whole parent.</p>
                  <p>Because you remember the slammed doors, the yelling, the divorce, the silence, and the pain after.</p>
                  <p className="font-medium text-primary">Because healing starts with one stubborn, holy decision.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="healing" size="lg" className="group" asChild>
              <a href="https://www.amazon.com/hz/wishlist/ls/35TOKXAVOW09Y?ref_=wl_share&tag=unfogged0f-20" target="_blank" rel="noopener noreferrer">
                Start Your 90-Day Reset
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="sacred" size="lg" asChild>
              <Link to="/science">
                Read the Science
              </Link>
            </Button>
          </div>

          {/* 7-Day Protocol Download */}
          <div className="mt-8 p-6 rounded-xl bg-sage/10 border border-sage/20 shadow-sm">
            <a 
              href="https://storage.googleapis.com/unfogged/unfogged-7-day-starter-guide.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-deep-teal hover:text-primary transition-colors group"
            >
              <span className="text-2xl">🌀</span>
              <div>
                <h4 className="font-semibold text-lg group-hover:underline">
                  Download the 7-Day Clarity Printable Protocol — Your Nervous System Reset Starts Here
                </h4>
                <p className="text-sm text-deep-teal/70 mt-1">
                  (PDF includes supplement guide, panic toolkit, sleep plan, and daily support)
                </p>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-auto" />
            </a>
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