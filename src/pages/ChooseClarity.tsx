import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";

export function ChooseClarity() {
  const [choice, setChoice] = useState<'blue' | 'red' | null>(null);

  useEffect(() => {
    document.title = "Choose Clarity: Take the Red Pill of Awareness";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Curious what life looks like unplugged? Choose the clarity pill. This is your invitation to wake up from fog, rebuild focus, and reclaim your humanity.");
    }
  }, []);

  const handleBluePill = () => {
    setChoice('blue');
  };

  const handleRedPill = () => {
    setChoice('red');
  };

  if (choice === 'blue') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-blue-900/50 border border-blue-500/30 rounded-2xl p-12 backdrop-blur-sm">
              <h1 className="text-4xl md:text-6xl font-bold text-blue-100 mb-8">
                💭 You've chosen the comfort zone… but at what cost?
              </h1>
              <div className="text-lg md:text-xl text-blue-200 space-y-6 leading-relaxed">
                <p>
                  By picking the Blue Pill, you've chosen the easy way—staying in familiar patterns, numbed out, and disconnected. But it's a quieter kind of suffering.
                </p>
                <p>
                  You'll still scroll notifications. You'll still feel restless. You'll still wake up feeling "off" and wonder where your focus and energy went.
                </p>
                <p>
                  You might avoid the mess, but you don't escape it forever. Avoiding the fog doesn't mean the fog goes away—it just grows silently beneath the surface.
                </p>
                <p className="font-semibold">
                  That's the loop that keeps you stuck in digital rat race syndrome: burnout, distraction, technostress and anxiety, even if nothing else looks wrong.
                </p>
                <p className="text-blue-300 italic">
                  <a href="https://tvtropes.org/pmwiki/pmwiki.php/Main/RedPillBluePill" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-100 transition-colors">
                    TV Tropes
                  </a>
                </p>
              </div>
              <Button 
                onClick={() => setChoice(null)}
                className="mt-12 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-8 py-4 text-lg font-semibold rounded-xl"
              >
                ← Back to Choose Again
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (choice === 'red') {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                🔴 Welcome to Reality
              </h1>
              <p className="text-xl text-muted-foreground">
                You've chosen awareness. Here's the science behind reclaiming your life.
              </p>
            </div>

            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-8">Reclaiming Life from the Dopamine Trap: A Science-Backed 90-Day Lifestyle Reset</h2>

              <h3 className="text-2xl font-semibold mt-12 mb-6">Life Before the Tech Dopamine Rush</h3>
              <p>
                Life in past decades – even as recent as the 1980s – moved at a more human pace. Before smartphones and endless screen time, daily life involved more face-to-face interactions, outdoor play, and patient waiting. For example, children in the 80s spent hours in unstructured play – building forts, riding bikes, playing hide-and-seek – which helped them develop creativity, problem-solving abilities, and social skills<sup><a href="https://helpmegrowmn.org/HMG/HelpfulRes/Articles/WhyUnstructure/index.html" target="_blank" rel="noopener noreferrer">1</a></sup>. Families would read books or watch a single evening TV program together, rather than consuming a constant feed of digital content. Life before the internet required patience and anticipation: you might wait days for a letter to arrive or a week for your favorite cartoon, experiences that today's instant-gratification culture has all but erased<sup><a href="https://geediting.com/if-you-grew-up-in-the-80s-you-experienced-these-7-things-kids-today-never-will/" target="_blank" rel="noopener noreferrer">2</a></sup>. The slower pace wasn't just nostalgic – it encouraged cognitive patience and deeper focus.
              </p>
              
              <p>
                Research suggests that reading printed books or engaging in offline activities develops "slower, deeper processes in the brain" that improve comprehension, memory, and focus, whereas fast digital media often does not cultivate these traits<sup><a href="https://www.govtech.com/education/k-12/books-vs-screens-what-does-the-latest-research-say" target="_blank" rel="noopener noreferrer">3</a></sup>. In short, pre-digital life fostered a comprehensive range of human skills and resilience without the constant dopamine buzz of modern tech.
              </p>

              <h3 className="text-2xl font-semibold mt-12 mb-6">The Modern Dopamine Trap</h3>
              <p>
                Today's technology companies have intentionally transformed much of daily life into a flurry of quick hits and instant rewards. Silicon Valley insiders openly admit that platforms like Facebook were designed to exploit our brain's reward system – every notification or "like" gives users "a little dopamine hit," keeping them hooked and coming back for more<sup><a href="https://www.theguardian.com/technology/2018/mar/04/has-dopamine-got-us-hooked-on-tech-facebook-apps-addiction" target="_blank" rel="noopener noreferrer">4</a></sup>. Over time, these constant mini-rewards create a dopamine overload. Neuroscience shows that when we are bombarded with frequent, high-intensity rewards (from video games, social media, etc.), the brain's pleasure pathways become less sensitive – what used to feel satisfying no longer has the same effect<sup><a href="https://health.osu.edu/health/mental-health/does-dopamine-fasting-work" target="_blank" rel="noopener noreferrer">5</a></sup>. We adapt and crave bigger doses, leading to a vicious cycle of tech dependence.
              </p>

              <p>
                This is especially troubling for children and teens. As smartphones, tablets, and gaming became ubiquitous from the 2010s onward, youth mental health has markedly declined. One analysis noted that the environment kids grow up in now – saturated with screens and instant gratification – is literally "hostile to human development." Rates of teen depression and anxiety surged over 50% globally after 2012, coinciding with the move to smartphone-based living<sup><a href="https://www.theatlantic.com/technology/archive/2024/03/teen-childhood-smartphone-use-mental-health-effects/677722/" target="_blank" rel="noopener noreferrer">6</a></sup>. Excessive screen exposure in childhood has even been linked to measurable brain changes – for instance, higher screen use correlates with lower white matter in preschoolers' brains (white matter is crucial for language and literacy development)<sup><a href="https://www.discovermagazine.com/mind/screen-time-is-replacing-playtime-and-thats-changing-kids-brains" target="_blank" rel="noopener noreferrer">7</a></sup>.
              </p>

              <h3 className="text-2xl font-semibold mt-12 mb-6">The Case for Slowing Down (Backed by Science)</h3>
              <p>
                Breaking free of this trap is difficult, but immensely rewarding. By looking at how humans lived before we were all addicted to screens, we can rediscover healthier patterns. A growing "slow living" movement advocates returning to a more intentional pace of life – and research confirms it comes with major benefits. Slowing down and reducing overload can lower chronic stress and anxiety, which in turn improves physical health. In fact, lowering stress levels helps combat inflammation and chronic diseases (heart disease, obesity, high blood pressure, depression) according to the U.S. Department of Health & Human Services<sup><a href="https://www.runstreet.com/blog/slow-living" target="_blank" rel="noopener noreferrer">8</a></sup>.
              </p>

              <h3 className="text-2xl font-semibold mt-12 mb-6">Looking Back to Move Forward: A Renaissance of Living</h3>
              <p>
                History shows that after periods of darkness or excess, humans often find renewal by returning to core values of creativity, knowledge, and balance. The term "Renaissance" literally means rebirth – and during the Renaissance period (14th–17th centuries), society blossomed by looking back to classical wisdom and focusing on art, humanism, and science<sup><a href="https://new.artsmia.org/stories/renaissance-man-why-botticelli-still-matters-maybe-more-than-ever" target="_blank" rel="noopener noreferrer">9</a></sup>. Why is this relevant now? Because our modern world of hyper-tech saturation feels analogous to a "dark age" of distraction and anxiety.
              </p>

              <h3 className="text-2xl font-semibold mt-12 mb-6">The 90-Day Lifestyle Reset Plan (Phase-by-Phase)</h3>
              <p>
                Breaking a dependence on high-dopamine stimulation and reestablishing a healthier lifestyle is a journey. Research suggests it takes around 90 days for the brain to reset its dopamine balance and form new habits that stick<sup><a href="https://hickorytreatmentcenters.com/2022/09/how-long-does-it-take-for-dopamine-to-reset/" target="_blank" rel="noopener noreferrer">10</a></sup>. Here is a science-backed 90-day plan:
              </p>

              <div className="bg-card border rounded-xl p-8 my-8">
                <h4 className="text-xl font-semibold mb-4">Days 1–7: Detox and Rest</h4>
                <p className="mb-4">
                  The first week is about unplugging from the biggest dopamine triggers and allowing your mind/body to recalibrate. Identify the most problematic sources of instant gratification (e.g. video games, social media, gambling, junk food) and cut them out completely. Expect withdrawal effects such as irritability, anxiety, restlessness<sup><a href="https://www.sandstonecare.com/blog/dopamine-detox" target="_blank" rel="noopener noreferrer">11</a></sup>.
                </p>
              </div>

              <div className="bg-card border rounded-xl p-8 my-8">
                <h4 className="text-xl font-semibold mb-4">Days 8–30: Rebuild Healthy Foundations</h4>
                <p className="mb-4">
                  After the first week, start actively filling the void with healthier habits. Focus on establishing a balanced daily routine – regular exercise, balanced nutrition, consistent sleep schedule, mindfulness practices, and limited, intentional tech use.
                </p>
              </div>

              <div className="bg-card border rounded-xl p-8 my-8">
                <h4 className="text-xl font-semibold mb-4">Days 31–60: Expanding Your Horizons</h4>
                <p className="mb-4">
                  By the second month, your mood and focus should be noticeably improved. Deepen learning or hobbies, build real-life social connections, spend time in nature, and monitor your progress through reflection.
                </p>
              </div>

              <div className="bg-card border rounded-xl p-8 my-8">
                <h4 className="text-xl font-semibold mb-4">Days 61–90: Flourishing and Maintaining Balance</h4>
                <p className="mb-4">
                  In the final stretch, your lifestyle should resemble a balanced, human-paced life. Focus on solidifying new habits, mindfully reintroducing technology in controlled ways, and celebrating your transformation.
                </p>
              </div>

              <h3 className="text-2xl font-semibold mt-12 mb-6">Conclusion: Beyond 90 Days – A Balanced Human Life</h3>
              <p>
                By completing a 90-day reset, you've proven that it's possible to step out of the rat race of modern hyper-stimulation and not only survive, but thrive. You've likely gained a newfound appreciation for the kind of slower, intentional life that older generations took for granted – a life filled with real experiences, patience, focus, and rich human connection.
              </p>

              <div className="mt-16 text-center">
                <Button 
                  onClick={() => window.location.href = '/clarity-reset'}
                  className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-12 py-6 text-xl font-semibold rounded-xl"
                >
                  Begin Your 90-Day Reset →
                </Button>
              </div>

              <div className="mt-16 text-center">
                <Button 
                  onClick={() => window.location.href = '/clarity-reset'}
                  className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-12 py-6 text-xl font-semibold rounded-xl"
                >
                  Download Our Whitepaper For Even More Details ⬇️
                </Button>
              </div>
            </article>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-red-950">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              💊 Take the Clarity Pill
            </h1>
            <p className="text-2xl md:text-3xl text-gray-200 mb-4">
              Will You Choose the Fog or the Clear?
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Curious what life looks like unplugged? This is your invitation to wake up from fog, rebuild focus, and reclaim your humanity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Blue Pill - Smaller, less prominent */}
            <div className="relative">
              <button
                onClick={handleBluePill}
                className="w-full bg-gradient-to-br from-blue-600/80 to-blue-800/80 hover:from-blue-500/90 hover:to-blue-700/90 text-white p-8 rounded-2xl border border-blue-400/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <div className="text-6xl mb-4">🔵</div>
                <h3 className="text-2xl font-bold mb-4">The Blue Pill</h3>
                <p className="text-blue-100">
                  Stay comfortable. Keep scrolling. Nothing needs to change.
                </p>
                <p className="text-sm text-blue-200 mt-4 italic">
                  "Ignorance is bliss"
                </p>
              </button>
            </div>

            {/* Red Pill - Larger, more prominent, easier to click */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur opacity-75 animate-pulse"></div>
              <button
                onClick={handleRedPill}
                className="relative w-full bg-gradient-to-br from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white p-12 rounded-2xl border border-red-400/50 transition-all duration-300 hover:scale-110 shadow-2xl shadow-red-500/25"
              >
                <div className="text-8xl mb-6">🔴</div>
                <h3 className="text-3xl font-bold mb-6">The Red Pill</h3>
                <p className="text-red-100 text-lg leading-relaxed">
                  See the truth. Break free from digital fog. Reclaim your focus, creativity, and peace.
                </p>
                <p className="text-sm text-red-200 mt-6 italic font-semibold">
                  "The truth will set you free"
                </p>
                <div className="mt-4 text-yellow-300 font-bold">
                  ⚡ RECOMMENDED PATH ⚡
                </div>
              </button>
            </div>
          </div>

          <div className="mt-16 text-gray-400">
            <p className="text-sm">
              This choice will determine your journey toward clarity or continued fog.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}