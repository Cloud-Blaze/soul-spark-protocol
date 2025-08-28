import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AshwagandhaWarnings() {
  useEffect(() => {
    document.title = "Ashwagandha and Psychiatric Medications: Benefits and Important Warnings | Unfogged";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Important warnings about ashwagandha interactions with psychiatric medications, mood stabilizers, antidepressants, and bipolar disorder. Science-backed safety information.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="prose prose-lg max-w-none dark:prose-invert">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-primary">
              Ashwagandha and Psychiatric Medications: Benefits and Important Warnings
            </h1>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-secondary-foreground">
              Ashwagandha's Benefits for Stress and Anxiety
            </h2>
            <p className="mb-4">
              Ashwagandha (<em>Withania somnifera</em>) is an herbal adaptogen often used to ease stress, 
              anxiety, and insomnia. Studies show it can reduce stress hormones and promote calm 
              through <strong>GABAergic and serotonergic</strong> effects<sup><a href="#ref1" className="text-primary">[1]</a></sup>. 
              In fact, clinical trials have found <strong>improvements in anxiety, depression, and sleep</strong> when using ashwagandha 
              supplements, with generally <strong>few side effects</strong> reported<sup><a href="#ref1" className="text-primary">[1]</a></sup><sup><a href="#ref2" className="text-primary">[2]</a></sup>.
            </p>
            <p className="mb-4">
              This makes ashwagandha a popular natural option for people looking to curb the late-day jitters or 
              replace an evening drink with a relaxing herb. <strong>In moderate doses and short-term use, ashwagandha is 
              considered safe for most healthy adults</strong>, and it may indeed help take the edge off 
              everyday anxiety<sup><a href="#ref1" className="text-primary">[1]</a></sup>. However, <strong>if you are on psychiatric medications or have a 
              mental health condition, special caution is needed.</strong> Below we summarize which situations are 
              okay and which are <strong>"do not take this"</strong> warnings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-secondary-foreground">
              Interactions with Psychological Medications
            </h2>
            <p className="mb-4">
              Even natural supplements can interact with prescription meds. If you're considering 
              ashwagandha and you have a mental health condition or take "psych meds," keep these 
              points in mind:
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-destructive pl-4">
                <h3 className="text-xl font-semibold mb-2 text-destructive">
                  Sedatives and Mood Stabilizers (e.g. Depakote, Benzodiazepines):
                </h3>
                <p className="mb-2">
                  <em>Avoid combining ashwagandha with CNS depressants.</em> The herb has a calming, <strong>sedative 
                  effect</strong>, so taking it alongside sedating drugs like <strong>benzodiazepines (e.g. Xanax, 
                  Klonopin)</strong>, <strong>barbiturates</strong>, or certain <strong>anticonvulsant mood stabilizers</strong> (like 
                  <strong>valproate/Depakote</strong>) can <strong>exaggerate drowsiness</strong> and slow your reflexes<sup><a href="#ref3" className="text-primary">[3]</a></sup><sup><a href="#ref4" className="text-primary">[4]</a></sup>.
                </p>
                <p className="mb-2">
                  In fact, experts warn that patients on these medications <strong>"should likely avoid 
                  ashwagandha"</strong> because of its GABA-like, tranquilizing properties<sup><a href="#ref4" className="text-primary">[4]</a></sup>. <em>Translation:</em> If 
                  you are taking <strong>Depakote, lithium, a sedative anti-anxiety med, or any sleeping 
                  pill</strong>, it's best <strong>not to take ashwagandha</strong> unless your doctor explicitly approves. 
                  Mixing them could leave you oversedated or cognitively dulled<sup><a href="#ref3" className="text-primary">[3]</a></sup><sup><a href="#ref5" className="text-primary">[5]</a></sup>.
                </p>
              </div>

              <div className="border-l-4 border-warning pl-4">
                <h3 className="text-xl font-semibold mb-2 text-warning">
                  Antidepressants (SSRIs, SNRIs):
                </h3>
                <p className="mb-2">
                  Ashwagandha influences neurotransmitters like <strong>serotonin</strong>, so use caution if you're on 
                  antidepressants. A small study actually found ashwagandha <strong>enhanced anti-anxiety effects</strong> when 
                  added to an SSRI (with no major side effects)<sup><a href="#ref6" className="text-primary">[6]</a></sup>. <strong>However,</strong> this was a tiny sample – 
                  and there is a <strong>theoretical risk of serotonin syndrome</strong> when combining ashwagandha with SSRI/SNRI 
                  medications<sup><a href="#ref7" className="text-primary">[7]</a></sup>.
                </p>
                <p className="mb-2">
                  Ashwagandha may <strong>increase serotonin levels</strong> in the brain, so stacking it with other 
                  serotonin-boosting drugs could potentially send serotonin too high<sup><a href="#ref7" className="text-primary">[7]</a></sup>. At least one case 
                  report detailed <strong>serotonin syndrome</strong> in a patient taking ashwagandha together with the SSRI 
                  <strong>escitalopram (Lexapro)</strong><sup><a href="#ref8" className="text-primary">[8]</a></sup>.
                </p>
                <p>
                  Bottom line: <em>If you're on antidepressants, check with your prescriber first.</em> It might be 
                  fine, but be alert for signs like agitation, sweating, or rapid heartbeat that could signal 
                  serotonin overload.
                </p>
              </div>

              <div className="border-l-4 border-info pl-4">
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  Antipsychotics (for Schizophrenia or Bipolar):
                </h3>
                <p className="mb-2">
                  There's emerging research on ashwagandha as an add-on to antipsychotic treatment. Interestingly, 
                  a <strong>12-week trial in schizophrenia</strong> patients found that ashwagandha <strong>improved anxiety and social 
                  withdrawal</strong> (the "negative" symptoms) when taken alongside standard antipsychotics<sup><a href="#ref9" className="text-primary">[9]</a></sup><sup><a href="#ref10" className="text-primary">[10]</a></sup>. 
                  Importantly, it <strong>did not worsen hallucinations or delusions</strong> (the positive symptoms) in that study<sup><a href="#ref10" className="text-primary">[10]</a></sup>.
                </p>
                <p>
                  The main side effect noted was mild <strong>sedation</strong> in some people taking the herb<sup><a href="#ref10" className="text-primary">[10]</a></sup>. So, 
                  ashwagandha might be beneficial for stress relief even in serious mental illness, <strong>but</strong> anyone 
                  on antipsychotic meds should use it under medical supervision. The combo could make you a bit more 
                  drowsy, and every individual's reaction may differ. Always let your psychiatrist know if you plan to 
                  try an herb like this.
                </p>
              </div>

              <div className="border-l-4 border-destructive pl-4">
                <h3 className="text-xl font-semibold mb-2 text-destructive">
                  Bipolar Disorder or History of Mania:
                </h3>
                <p className="mb-2">
                  If you have ever experienced <strong>mania or psychosis</strong>, be very cautious with ashwagandha. There is 
                  concern that, in rare cases, ashwagandha <strong>might trigger manic or psychotic reactions</strong> in susceptible 
                  individuals. While formal research hasn't clearly shown ashwagandha <em>causes</em> mania, there are 
                  <strong>anecdotal reports</strong> of people feeling <strong>"manic," hyperenergetic, or delusional</strong> after taking high 
                  doses of ashwagandha<sup><a href="#ref11" className="text-primary">[11]</a></sup><sup><a href="#ref12" className="text-primary">[12]</a></sup>.
                </p>
                <p className="mb-2">
                  Some documented side effects include <strong>giddiness, hallucinations, and hyperactivity</strong> – which are 
                  obviously not good for someone at risk of mania<sup><a href="#ref11" className="text-primary">[11]</a></sup>. Because ashwagandha can affect 
                  brain chemistry and thyroid function, it <em>may</em> destabilize mood in a bipolar patient even as it 
                  calms anxiety in others.
                </p>
                <p className="text-destructive font-semibold">
                  <strong>Our advice:</strong> If you have <strong>bipolar I/II, schizoaffective disorder, or a history of manic 
                  episodes</strong>, it's safest to <strong>avoid ashwagandha</strong> or use it only with your doctor's approval and 
                  close monitoring. Your 5 p.m. stress relief routine should probably skip this herb if you're in this category.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-destructive">
              Who Should NOT Take Ashwagandha? (Key Warnings)
            </h2>
            <p className="mb-4">
              In summary, ashwagandha is a lovely natural remedy for some, but <strong>you should NOT take it</strong> (or at 
              least get medical guidance) if any of the following apply:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-destructive font-bold mr-2">•</span>
                <div>
                  <strong>You are on Depakote (divalproex sodium)</strong> or other <strong>anticonvulsant/mood stabilizers</strong> for 
                  bipolar or seizures. <em>Reason:</em> risk of increased sedation and drug interaction<sup><a href="#ref4" className="text-primary">[4]</a></sup>.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-destructive font-bold mr-2">•</span>
                <div>
                  <strong>You take sedative medications</strong> such as benzodiazepines (e.g. Ativan, Valium), Z-drugs (Ambien), 
                  or strong <strong>sleep aids</strong>. <em>Reason:</em> ashwagandha's sleep-inducing effect could add up, making you 
                  too drowsy or even cognitively impaired<sup><a href="#ref3" className="text-primary">[3]</a></sup><sup><a href="#ref4" className="text-primary">[4]</a></sup>.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-destructive font-bold mr-2">•</span>
                <div>
                  <strong>You are prone to mania or psychosis.</strong> <em>Reason:</em> though uncommon, ashwagandha has been linked 
                  to <strong>hallucinations, extreme irritability, and "manic" feelings</strong> in some cases<sup><a href="#ref11" className="text-primary">[11]</a></sup>. It may 
                  exacerbate unstable mood or perceptual disturbances.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-destructive font-bold mr-2">•</span>
                <div>
                  <strong>You have a thyroid condition or autoimmune disorder.</strong> <em>Reason:</em> ashwagandha can stimulate 
                  thyroid hormone production and the immune system<sup><a href="#ref11" className="text-primary">[11]</a></sup><sup><a href="#ref13" className="text-primary">[13]</a></sup>, which could worsen 
                  hyperthyroidism or autoimmune symptoms. (For example, it has caused <strong>thyrotoxicosis</strong> in a few 
                  individuals taking thyroid meds<sup><a href="#ref14" className="text-primary">[14]</a></sup>.)
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-destructive font-bold mr-2">•</span>
                <div>
                  <strong>You are pregnant.</strong> <em>Reason:</em> the herb may induce miscarriages at high doses<sup><a href="#ref15" className="text-primary">[15]</a></sup><sup><a href="#ref16" className="text-primary">[16]</a></sup>. 
                  (Unrelated to mental health, but an important safety note regardless.)
                </div>
              </li>
            </ul>

            <div className="bg-warning/10 border border-warning p-4 rounded-lg mb-6">
              <p className="font-semibold text-warning mb-2">Friendly reminder:</p>
              <p>
                Natural does not always mean harmless. Ashwagandha can be very helpful for <strong>stress relief</strong> – 
                many people swear by it – <strong>but</strong> it's not suitable for everyone. If you're on <strong>psychiatric 
                medication</strong> or have a complex mental health history, talk to your doctor first. A short conversation 
                can determine if ashwagandha is safe in your specific situation.
              </p>
            </div>

            <p className="mb-4">
              <strong>In conclusion</strong>, ashwagandha is generally safe and potentially beneficial for anxiety or mild 
              depression <strong>when used on its own</strong><sup><a href="#ref1" className="text-primary">[1]</a></sup>. But if <strong>"psychiatric meds" are part of your daily 
              life, you need to be careful.</strong> Certain combinations can lead to unwanted drowsiness, unstable mood, 
              or other <strong>"bad things"</strong> instead of benefits.
            </p>

            <div className="bg-destructive/10 border border-destructive p-4 rounded-lg">
              <p className="font-bold text-destructive text-lg mb-2">Important Warning:</p>
              <p className="text-destructive">
                <strong>"Do NOT take ashwagandha if you are on medications like Depakote, lithium, sedatives, or if you 
                have a history of mania/psychosis."</strong> <sup><a href="#ref4" className="text-primary">[4]</a></sup><sup><a href="#ref11" className="text-primary">[11]</a></sup>
              </p>
            </div>

            <p className="mt-4">
              By staying informed and cautious, you can make sure any supplement you try truly helps you – and doesn't 
              unexpectedly <strong>hinder your mental health progress</strong>. Always prioritize safety and consult your 
              healthcare provider when in doubt!<sup><a href="#ref2" className="text-primary">[2]</a></sup><sup><a href="#ref17" className="text-primary">[17]</a></sup>
            </p>
          </section>

          <section className="mt-12 pt-8 border-t border-border">
            <h3 className="text-xl font-semibold mb-4">References</h3>
            <div className="space-y-2 text-sm">
              <p id="ref1">[1] [2] Effects of Withania somnifera (Ashwagandha) on Stress and the Stress- Related Neuropsychiatric Disorders Anxiety, Depression, and Insomnia - PubMed. <a href="https://pubmed.ncbi.nlm.nih.gov/34254920/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://pubmed.ncbi.nlm.nih.gov/34254920/</a></p>
              
              <p id="ref3">[3] [6] [7] [8] [17] 5 Ashwagandha Interactions to Watch for - GoodRx. <a href="https://www.goodrx.com/well-being/supplements-herbs/ashwagandha-drug-interactions" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.goodrx.com/well-being/supplements-herbs/ashwagandha-drug-interactions</a></p>
              
              <p id="ref4">[4] [11] [13] [14] [15] [16] Ashwagandha | Memorial Sloan Kettering Cancer Center. <a href="https://www.mskcc.org/cancer-care/integrative-medicine/herbs/ashwagandha" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.mskcc.org/cancer-care/integrative-medicine/herbs/ashwagandha</a></p>
              
              <p id="ref5">[5] Ashwagandha - Divalproex Sodium Interaction Details | HelloPharmacist. <a href="https://hellopharmacist.com/drug-supplement-interactions/drug-herbal/ashwagandha-with-divalproex-sodium" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://hellopharmacist.com/drug-supplement-interactions/drug-herbal/ashwagandha-with-divalproex-sodium</a></p>
              
              <p id="ref9">[9] [10] Medicinal Herb May Relieve Worsening Symptoms of Schizophrenia | Brain & Behavior Research Foundation. <a href="https://bbrfoundation.org/content/medicinal-herb-may-relieve-worsening-symptoms-schizophrenia" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://bbrfoundation.org/content/medicinal-herb-may-relieve-worsening-symptoms-schizophrenia</a></p>
              
              <p id="ref12">[12] Ashwagandha: Bad Reactions - Eat for Life. <a href="https://eatfor.life/ashwagandha-dangerous-repercussions/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://eatfor.life/ashwagandha-dangerous-repercussions/</a></p>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}