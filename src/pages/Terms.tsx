import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, FileText, AlertTriangle } from "lucide-react";

const Terms = () => {
  useEffect(() => {
    document.title = "Terms of Service | Unfogged - Open Source Healing Protocol";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-indigo/5 to-sage/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-deep-teal mb-6">
                Terms of <span className="bg-gradient-to-r from-indigo to-gold bg-clip-text text-transparent">Service</span>
              </h1>
              <p className="text-xl text-deep-teal/70 mb-8 leading-relaxed">
                Our commitment to keeping healing accessible, legal, and protected.
              </p>
              
              <div className="flex items-center justify-center gap-8 text-sm text-deep-teal/60">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Effective: July 24, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>Last Updated: July 24, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              
              {/* Important Notice */}
              <div className="bg-gradient-to-r from-gold/10 to-sage/10 rounded-xl p-8 border border-gold/20 mb-12">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-deep-teal mb-4">Important Medical Disclaimer</h3>
                    <p className="text-deep-teal/80 leading-relaxed mb-4">
                      <strong>THIS IS NOT MEDICAL ADVICE.</strong> The Unfogged protocol is nutritional and wellness guidance, not medical treatment. 
                      Always consult with qualified healthcare professionals before making changes to your health regimen, especially if you are currently taking medications or have existing health conditions.
                    </p>
                    <p className="text-deep-teal/80 leading-relaxed">
                      By using this information, you acknowledge that you are responsible for your own health decisions and that Unfogged™ and its creators are not liable for any outcomes, positive or negative, that may result from following this protocol.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                
                {/* Acceptance of Terms */}
                <div className="bg-background/80 backdrop-blur-sm rounded-xl border border-sage/20 p-8">
                  <h2 className="text-2xl font-bold text-deep-teal mb-6">1. Acceptance of Terms</h2>
                  <div className="text-deep-teal/80 leading-relaxed space-y-4">
                    <p>
                      By accessing, viewing, or using any part of the Unfogged™ protocol, website, or related materials, you agree to be bound by these Terms of Service and our commitment to open-source healing.
                    </p>
                    <p>
                      If you do not agree with any part of these terms, please discontinue use immediately. We believe healing should be accessible, but it must also be used responsibly.
                    </p>
                  </div>
                </div>

                {/* What Unfogged Is */}
                <div className="bg-background/80 backdrop-blur-sm rounded-xl border border-sage/20 p-8">
                  <h2 className="text-2xl font-bold text-deep-teal mb-6">2. What Unfogged™ Is (And Isn't)</h2>
                  <div className="text-deep-teal/80 leading-relaxed space-y-4">
                    <div>
                      <h3 className="font-semibold text-deep-teal mb-2">Unfogged™ IS:</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>A nutritional wellness protocol based on publicly available research</li>
                        <li>Educational information about nervous system support</li>
                        <li>A community-driven, open-source initiative</li>
                        <li>Guidance for adults seeking natural wellness approaches</li>
                        <li>A Creative Commons licensed resource that cannot be sold</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-deep-teal mb-2">Unfogged™ IS NOT:</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Medical advice, diagnosis, or treatment</li>
                        <li>A replacement for professional healthcare</li>
                        <li>A cure or guaranteed solution for any condition</li>
                        <li>Suitable for pregnant women, children, or individuals with serious medical conditions without professional supervision</li>
                        <li>A commercial product or service</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Creative Commons License */}
                <div className="bg-background/80 backdrop-blur-sm rounded-xl border border-sage/20 p-8">
                  <h2 className="text-2xl font-bold text-deep-teal mb-6">3. Creative Commons License & Usage Rights</h2>
                  <div className="text-deep-teal/80 leading-relaxed space-y-4">
                    <p>
                      The Unfogged™ protocol is licensed under <strong>Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)</strong>.
                    </p>
                    <div>
                      <h3 className="font-semibold text-deep-teal mb-2">You ARE FREE to:</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Share</strong> — copy and redistribute the material in any medium or format</li>
                        <li><strong>Adapt</strong> — remix, transform, and build upon the material</li>
                        <li>Use for personal healing and recovery</li>
                        <li>Share with family, friends, and community</li>
                        <li>Adapt for different cultures, languages, or local availability</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-deep-teal mb-2">Under These Terms:</h3>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong>Attribution</strong> — You must give appropriate credit to Unfogged™ and our soon to be built 501-C Organization</li>
                        <li><strong>NonCommercial</strong> — You may NOT use the material for commercial purposes</li>
                        <li><strong>No additional restrictions</strong> — You may not apply legal terms that legally restrict others from doing what the license permits</li>
                      </ul>
                    </div>
                    <p className="font-semibold text-primary">
                      Translation: You can share it, improve it, and adapt it—but you can never sell it.
                    </p>
                  </div>
                </div>

                {/* Prohibited Uses */}
                <div className="bg-background/80 backdrop-blur-sm rounded-xl border border-sage/20 p-8">
                  <h2 className="text-2xl font-bold text-deep-teal mb-6">4. Prohibited Uses</h2>
                  <div className="text-deep-teal/80 leading-relaxed space-y-4">
                    <p>To protect the integrity of our mission, you may NOT:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Sell, monetize, or commercialize any part of the Unfogged™ protocol</li>
                      <li>Present the information as medical advice or treatment</li>
                      <li>Remove attribution or licensing information</li>
                      <li>Use the Unfogged™ brand for commercial purposes without permission</li>
                      <li>Create derivative works that contradict the spirit of accessible healing</li>
                      <li>Use the information to harm others or promote dangerous practices</li>
                      <li>Claim ownership of the protocol or its underlying concepts</li>
                    </ul>
                  </div>
                </div>

                {/* Affiliate Links */}
                <div className="bg-background/80 backdrop-blur-sm rounded-xl border border-sage/20 p-8">
                  <h2 className="text-2xl font-bold text-deep-teal mb-6">5. Affiliate Links & Transparency</h2>
                  <div className="text-deep-teal/80 leading-relaxed space-y-4">
                    <p>
                      Some links to supplements contain affiliate codes. This means we may receive a small commission if you make a purchase through these links, at no additional cost to you.
                    </p>
                    <p>
                      <strong>Why we use affiliate links:</strong> To support the ongoing development and accessibility of this free protocol. Every commission helps us maintain the open-source nature of this work.
                    </p>
                    <p>
                      <strong>Our commitment:</strong> We only recommend products we genuinely believe in. Affiliate relationships do not influence our supplement recommendations—those are based solely on research, bioavailability, and community feedback.
                    </p>
                    <p>
                      You are always free to purchase these supplements from any retailer. The specific brands mentioned are suggestions, not requirements.
                    </p>
                    <p>
                      <strong>Important:</strong> If you choose to support our mission through purchases, please use only our official Amazon wishlist: <a href="https://www.amazon.com/hz/wishlist/ls/35TOKXAVOW09Y?ref_=wl_share&tag=unfogged0f-20" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.amazon.com/hz/wishlist/ls/35TOKXAVOW09Y?ref_=wl_share&tag=unfogged0f-20</a>. You may not substitute this with other affiliate links.
                    </p>
                  </div>
                </div>

                {/* Liability Limitations */}
                <div className="bg-background/80 backdrop-blur-sm rounded-xl border border-sage/20 p-8">
                  <h2 className="text-2xl font-bold text-deep-teal mb-6">6. Limitation of Liability</h2>
                  <div className="text-deep-teal/80 leading-relaxed space-y-4">
                    <p>
                      <strong>UNFOGGED™, DAVID RENNE, AND ALL CONTRIBUTORS PROVIDE THIS INFORMATION "AS IS" WITHOUT ANY WARRANTIES.</strong>
                    </p>
                    <p>
                      We cannot and do not guarantee specific results. Individual responses to nutritional protocols vary widely based on genetics, health status, lifestyle, and countless other factors.
                    </p>
                    <p>
                      You use this information at your own risk and responsibility. We are not liable for any direct, indirect, incidental, or consequential damages that may result from using this protocol.
                    </p>
                    <p>
                      If you experience adverse effects, discontinue use immediately and consult healthcare professionals.
                    </p>
                  </div>
                </div>

                {/* Community Guidelines */}
                <div className="bg-background/80 backdrop-blur-sm rounded-xl border border-sage/20 p-8">
                  <h2 className="text-2xl font-bold text-deep-teal mb-6">7. Community Guidelines</h2>
                  <div className="text-deep-teal/80 leading-relaxed space-y-4">
                    <p>
                      Our GitHub community and any related forums are spaces for healing, support, and improvement of the protocol. We expect:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Respectful, supportive communication</li>
                      <li>No medical advice beyond sharing personal experiences</li>
                      <li>No spam, promotional content, or commercial activities</li>
                      <li>No harmful or dangerous modifications to the protocol</li>
                      <li>Respect for the vulnerable nature of nervous system healing</li>
                    </ul>
                    <p>
                      We reserve the right to moderate community spaces to maintain a safe, healing environment.
                    </p>
                  </div>
                </div>

                {/* Privacy */}
                <div className="bg-background/80 backdrop-blur-sm rounded-xl border border-sage/20 p-8">
                  <h2 className="text-2xl font-bold text-deep-teal mb-6">8. Privacy & Data</h2>
                  <div className="text-deep-teal/80 leading-relaxed space-y-4">
                    <p>
                      We do not collect personal data or track users beyond standard analytics. Email submissions are voluntary and only used to respond directly. We do not share or sell any user information.
                    </p>
                    <p>
                      If you choose to engage with our community spaces (GitHub, etc.), you are subject to those platforms' privacy policies.
                    </p>
                    <p>
                      We will never sell, share, or monetize any personal information. Ever.
                    </p>
                  </div>
                </div>

                {/* Affiliate Links Update */}
                <div className="bg-background/80 backdrop-blur-sm rounded-xl border border-sage/20 p-8">
                  <h2 className="text-2xl font-bold text-deep-teal mb-6">8.5. Affiliate Links & Transparency (Updated)</h2>
                  <div className="text-deep-teal/80 leading-relaxed space-y-4">
                    <p>
                      Some product links may be affiliate links. We only link to products we've vetted and use in our open-source stack. Any proceeds are reinvested in keeping this project sustainable.
                    </p>
                    <p>
                      <strong>Our commitment:</strong> We only recommend products we genuinely believe in. Affiliate relationships do not influence our supplement recommendations—those are based solely on research, bioavailability, and community feedback.
                    </p>
                    <p>
                      You are always free to purchase these supplements from any retailer. The specific brands mentioned are suggestions, not requirements.
                    </p>
                  </div>
                </div>

                {/* Creative Commons License Update */}
                <div className="bg-background/80 backdrop-blur-sm rounded-xl border border-sage/20 p-8">
                  <h2 className="text-2xl font-bold text-deep-teal mb-6">8.6. Creative Commons License (Updated)</h2>
                  <div className="text-deep-teal/80 leading-relaxed space-y-4">
                    <p>
                      Unless otherwise noted, all Unfogged content is released under Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0). You may adapt and share the protocol non-commercially with credit and a link back to this site.
                    </p>
                  </div>
                </div>

                {/* Medical Disclaimer Update */}
                <div className="bg-background/80 backdrop-blur-sm rounded-xl border border-sage/20 p-8">
                  <h2 className="text-2xl font-bold text-deep-teal mb-6">8.7. Medical Disclaimer (Updated)</h2>
                  <div className="text-deep-teal/80 leading-relaxed space-y-4">
                    <p>
                      The content on this site is for educational and informational purposes only. It is not medical advice and does not substitute for consultation with a licensed healthcare provider. Always speak with a medical professional before starting any new supplement, protocol, or recovery program.
                    </p>
                  </div>
                </div>

                {/* Mission Protection */}
                <div className="bg-background/80 backdrop-blur-sm rounded-xl border border-sage/20 p-8">
                  <h2 className="text-2xl font-bold text-deep-teal mb-6">8.8. Mission Protection</h2>
                  <div className="text-deep-teal/80 leading-relaxed space-y-4">
                    <p>
                      This is a public-welfare project. Please don't resell, white-label, or misrepresent this protocol. Respect the mission. Respect the stack.
                    </p>
                  </div>
                </div>

                {/* Changes to Terms */}
                <div className="bg-background/80 backdrop-blur-sm rounded-xl border border-sage/20 p-8">
                  <h2 className="text-2xl font-bold text-deep-teal mb-6">9. Changes to These Terms</h2>
                  <div className="text-deep-teal/80 leading-relaxed space-y-4">
                    <p>
                      We may update these terms to reflect legal requirements or improvements to our mission. Any changes will be posted here with an updated effective date.
                    </p>
                    <p>
                      Continued use of Unfogged™ materials after changes constitute acceptance of the new terms.
                    </p>
                    <p>
                      Our core commitment will never change: This information remains free, accessible, and protected from commercialization.
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-background/80 backdrop-blur-sm rounded-xl border border-sage/20 p-8">
                  <h2 className="text-2xl font-bold text-deep-teal mb-6">10. Contact Information</h2>
                  <div className="text-deep-teal/80 leading-relaxed space-y-4">
                    <p>
                      For questions about these terms, the protocol, or community guidelines:
                    </p>
                    <div className="bg-sage/10 rounded-lg p-4">
                      <p><strong>Email:</strong> legal@unfogged.org</p>
                      <p><strong>GitHub:</strong> github.com/unfogged/unfogged-protocol</p>
                      <p><strong>Mailing Address:</strong><br />
                      Unfogged™<br />
                      PO Box 80015<br />
                      Rochester, MI 48308</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Final Message */}
              <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-gold/10 to-sage/10 rounded-xl p-8 border border-gold/20">
                  <h3 className="text-2xl font-bold text-deep-teal mb-4">Our Promise to You</h3>
                  <p className="text-deep-teal/80 leading-relaxed mb-6">
                    These terms exist to protect both you and our mission. We believe healing should be accessible, 
                    legally protected, and forever free from commercial exploitation. By using Unfogged™, you're 
                    joining a movement that puts human wellness above profit.
                  </p>
                  <p className="text-primary font-semibold italic">
                    "Because clarity shouldn't be patented."
                  </p>
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

export default Terms;