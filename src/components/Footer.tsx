import { Heart, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-sage/10 border-t border-sage/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo to-deep-teal bg-clip-text text-transparent mb-4">
              UNFOGGED™
            </div>
            <p className="text-deep-teal/70 leading-relaxed mb-6 max-w-md">
              The open-source nervous system stack for anyone ready to reclaim 
              their clarity—without prescriptions, without shame, just repair.
            </p>
            
            {/* Sacred Message */}
            <div className="bg-gradient-to-r from-sage/10 to-gold/10 rounded-lg p-4 border border-sage/20">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Because clarity shouldn't be patented</span>
              </div>
              <p className="text-xs text-deep-teal/70">
                Healing meets rebellion. Sacred meets science-backed.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-deep-teal mb-4">Protocol</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/protocol" className="text-deep-teal/70 hover:text-primary transition-colors">
                  90-Day Reset
                </Link>
              </li>
              <li>
                <Link to="/stack" className="text-deep-teal/70 hover:text-primary transition-colors">
                  The Stack
                </Link>
              </li>
              <li>
                <Link to="/science" className="text-deep-teal/70 hover:text-primary transition-colors">
                  Research & Science
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-deep-teal/70 hover:text-primary transition-colors">
                  About David
                </Link>
              </li>
              <li>
              <a href="https://github.com/unfogged/unfogged-protocol/" target="_blank" rel="noopener noreferrer" className="text-deep-teal/70 hover:text-primary transition-colors">
                Community Support
              </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-deep-teal mb-4">Connect</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:support@unfogged.org" className="text-deep-teal/70 hover:text-primary transition-colors">
                  support@unfogged.org
                </a>
              </div>
              <div className="text-deep-teal/70">
                <Link to="/terms" className="hover:text-primary transition-colors block mb-2">
                  Terms of Service
                </Link>
                <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors block">
                  Creative Commons License
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <div className="text-deep-teal/70">
                  <div>UNFOGGED</div>
                  <div>PO Box 80015</div>
                  <div>Rochester, MI 48308</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-sage/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-deep-teal/60">
              © 2024 UNFOGGED™. Released under Creative Commons Attribution-NonCommercial 4.0.
            </div>
            <div className="flex items-center gap-6 text-xs text-deep-teal/50">
              <span>✓ No prescriptions</span>
              <span>✓ Open-source</span>
              <span>✓ Science-backed</span>
              <span>✓ No shame</span>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-sage/10 rounded-lg border border-sage/20">
            <p className="text-xs text-deep-teal/60 leading-relaxed">
              <strong className="text-deep-teal">Disclaimer:</strong> This is a protocol, not medical advice. 
              We offer open information, not treatment plans. Always speak to a trusted medical advisor 
              before beginning any regimen—especially if currently on medications. This project is intended for adults. 
              No content or links are targeted at users under 13 years old.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;