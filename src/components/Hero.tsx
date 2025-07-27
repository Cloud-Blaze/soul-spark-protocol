import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import morpheusDesktop from "@/assets/morpheus-desktop.jpg";
import morpheusMobile from "@/assets/morpheus-mobile.jpg";

const Hero = () => {
  return (
    <section className="relative h-full flex items-center overflow-hidden">
      {/* Background Images - Responsive */}
      <div className="absolute inset-0">
        {/* Desktop Background */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${morpheusDesktop})` }}
        />
        {/* Mobile Background */}
        <div 
          className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${morpheusMobile})` }}
        />
      </div>
      
      {/* Matrix-style Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-black/60" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="max-w-4xl">
          {/* Matrix Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Reality awaits
          </div>

          {/* Main Matrix Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
            The choice is yours:
          </h1>

          {/* Subheader */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-8">
            <span className="text-red-400">numb the fog</span>{" "}
            <span className="text-white">or</span>{" "}
            <span className="text-emerald-400">wake up clear</span>{" "}
            <span className="text-white">and break free of your ailments.</span>
          </h2>

          {/* Matrix Tagline */}
          <p className="text-xl md:text-2xl text-emerald-200/90 mb-8 leading-relaxed">
            The open-source nervous system stack for anyone ready to escape the matrix of fog
            and reclaim their true clarity. No prescriptions. No shame. Just awakening.
          </p>

          {/* Key Promise - Matrix Style */}
          <div className="bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 rounded-xl p-8 mb-10 border border-emerald-400/20 shadow-2xl backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <div className="text-6xl mb-4">💊</div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Break the fog cycle for <span className="text-emerald-400 text-3xl md:text-4xl">$60/month</span> for 3 months
                </h3>
                <div className="space-y-3 text-lg text-emerald-100 leading-relaxed">
                  <p className="font-medium">Because your kids deserve a parent who's awake.</p>
                  <p>Because you remember the disconnection, the numbness, the lost years in the fog.</p>
                  <p className="font-medium text-emerald-400">Because clarity starts with one conscious choice.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons - Matrix Style */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="healing" size="lg" className="group bg-red-600 hover:bg-red-700 text-white border-red-500" asChild>
              <a href="https://www.amazon.com/hz/wishlist/ls/35TOKXAVOW09Y?ref_=wl_share&tag=unfogged0f-20" target="_blank" rel="noopener noreferrer">
                Take the Red Pill
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black" asChild>
              <Link to="/science">
                See How Deep the Rabbit Hole Goes
              </Link>
            </Button>
          </div>

          {/* 7-Day Protocol Download - Matrix Style */}
          <div className="mt-8 p-6 rounded-xl bg-emerald-900/20 border border-emerald-400/20 shadow-lg backdrop-blur-sm">
            <a 
              href="https://storage.googleapis.com/unfogged/unfogged-7-day-starter-guide.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-emerald-300 hover:text-emerald-100 transition-colors group"
            >
              <span className="text-2xl">🌀</span>
              <div>
                <h4 className="font-semibold text-lg group-hover:underline">
                  Download the 7-Day Clarity Protocol — Your Exit from the Matrix Starts Here
                </h4>
                <p className="text-sm text-emerald-300/70 mt-1">
                  (PDF includes supplement guide, panic toolkit, sleep plan, and daily support)
                </p>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-auto" />
            </a>
          </div>

          {/* Trust Indicators - Matrix Style */}
          <div className="mt-12 pt-8 border-t border-emerald-400/20">
            <p className="text-sm text-emerald-300/60 mb-4">Trusted by thousands who chose to wake up</p>
            <div className="flex flex-wrap gap-6 text-xs text-emerald-300/50">
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