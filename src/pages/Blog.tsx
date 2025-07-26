import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    slug: "orbiting-the-fog",
    title: "🚫 On and Off the Wagon Isn't Sobriety — It's Just Orbiting the Fog",
    excerpt: "Going 'on and off the wagon' feels like progress. You stop drinking for a week or a month. You're proud. But deep down… you know: You're still orbiting the addiction.",
    emoji: "🚫"
  },
  {
    slug: "fog-and-return",
    title: "☀️ THE FOG AND THE RETURN",
    excerpt: "A 90-Day Resurrection of Your Nervous System (and 15 daily ways to get out without dropping out)",
    emoji: "☀️"
  },
  {
    slug: "fog-children-safety",
    title: "🛡️ The Fog Is Why Our Children Aren't Safe Anymore",
    excerpt: "We like to talk about safety in terms of laws, neighborhoods, school rules… But the real threat to our children? Fogged-out adults.",
    emoji: "🛡️"
  },
  {
    slug: "before-the-coffee",
    title: "☀️ Before the Coffee, Before the Chaos: A 90-Day Return to Who You Were",
    excerpt: "There was a time—before the phone alarms, before the cold brew, before the tight chest and the adult fog—when we woke up clear.",
    emoji: "☀️"
  },
  {
    slug: "marriage-healing",
    title: "👨 When the Fog Lifts: How Sobriety Can Save a Marriage",
    excerpt: "A father starts the 90-day protocol, and one morning he remembers how much he once loved his wife. That spark didn't die—it got fogged.",
    emoji: "👨"
  },
  {
    slug: "systems-that-failed-us",
    title: "💊 The Systems That Failed Us: How Unfogged Challenges Big Pharma and Burnout Culture",
    excerpt: "There's a quiet war most people don't realize they're in—a war for their nervous system, clarity, and autonomy.",
    emoji: "💊"
  },
  {
    slug: "earth-can-breathe",
    title: "🌍 When We Stop Masking Burnout: Earth Can Finally Breathe",
    excerpt: "Every time we numb instead of heal, we're spending energy to stay broken—and it's costing the planet.",
    emoji: "🌍"
  },
  {
    slug: "cross-functional-doctors",
    title: "🧠 Where Are the Cross-Functional Doctors?",
    excerpt: "The human nervous system is failing quietly in millions of people—and modern healthcare has no coordinated plan to fix it.",
    emoji: "🧠"
  },
  {
    slug: "fogged-generation",
    title: "📱 The Fogged Generation: What We Owe the iPad Kids",
    excerpt: "There's a generation after Millennials that never knew the world before the fog. They were raised on screens, shaped by algorithms, and handed anxiety like a second backpack.",
    emoji: "📱"
  },
  {
    slug: "nervous-system-renaissance",
    title: "🧠 The Nervous System Renaissance: Why AI Alone Won't Save Us",
    excerpt: "We're living in the second Renaissance. But we've built machines that think faster than we feel. And people are still too fogged to catch up.",
    emoji: "🧠"
  },
  {
    slug: "court-ordered-clarity",
    title: "🏛️ Court-Ordered Clarity: A 90-Day Gummy Reconciliation Protocol",
    excerpt: "What if divorce courts offered a 90-day nervous system reset before signing the final papers? Just one last invitation to heal the fog before breaking the home.",
    emoji: "🏛️"
  },
  {
    slug: "alcohol-ban-ripple",
    title: "🚫 Could This Lead to an Alcohol Ban?",
    excerpt: "Maybe not today. Maybe not tomorrow. But imagine a world where alcohol is no longer glorified—because a generation proved life is better without it.",
    emoji: "🚫"
  },
  {
    slug: "artwork-returns", 
    title: "🎨 The Rebirth of Childlike Creativity",
    excerpt: "You don't need talent to make art. You need aliveness. Fogged adults stop drawing, singing, writing—not because they can't, but because they stopped wanting to.",
    emoji: "🎨"
  },
  {
    slug: "closet-anxiety",
    title: "🧠 From Paranoia to Peace", 
    excerpt: "People glued to fear cycles aren't broken. They're overloaded. Their threat-response system is in overdrive, and they've forgotten what calm feels like.",
    emoji: "🧠"
  },
  {
    slug: "end-of-psyche-gatekeeping",
    title: "🧬 No More Gatekeeping Your Feelings",
    excerpt: "For decades, we outsourced our emotional regulation to pills and prescribers. Unfogged dares to say: maybe you're not diseased—maybe you're depleted.",
    emoji: "🧬"
  },
  {
    slug: "fun-without-numbing",
    title: "🎲 Adults Can Play Again",
    excerpt: "We used to think fun required alcohol. But real joy is in you right now—it's just fogged over.",
    emoji: "🎲"
  },
  {
    slug: "infinite-scroll-zombification",
    title: "📱 Infinite Scroll Zombification", 
    excerpt: "When you're locked in infinite scroll, your brain isn't thinking—it's just surviving. Every swipe trains your nervous system to chase stimulation instead of meaning.",
    emoji: "📱"
  },
  {
    slug: "jesus-and-the-holocene",
    title: "✝️ Jesus, Capitalism, and the Great Holocene Burnout",
    excerpt: "This isn't just a nervous system fix. This is a spiritual reckoning. Jesus came to set the captives free.",
    emoji: "✝️"
  },
  {
    slug: "politics-and-compassion", 
    title: "🕊️ The End of Red vs. Blue Thinking",
    excerpt: "You can't be compassionate and chronically inflamed. Political division feeds on fog—rage, cortisol, emotional shortcuts.",
    emoji: "🕊️"
  },
  {
    slug: "pre-digital-memory-reawakening",
    title: "📼 Before Phones, There Was You",
    excerpt: "Your nervous system remembers childhood. Before screens. Before algorithms. People report strange flashes of memory.",
    emoji: "📼"
  },
  {
    slug: "reduced-deaths",
    title: "🚑 Less Death. Less Harm. More Presence.",
    excerpt: "Every life lost in a drunk driving accident... every overdose—it's not just a statistic. It's a nervous system that never got to rest.",
    emoji: "🚑"
  },
  {
    slug: "true-marriage-healing",
    title: "❤️ Love Comes Back When the Fog Lifts",
    excerpt: "When the fog lifts from the nervous system, feelings return. You start to feel your spouse's eyes on you.",
    emoji: "❤️"
  },
  {
    slug: "unblocked-productivity",
    title: "🚀 Productivity Without Panic", 
    excerpt: "Most people aren't lazy. They're fogged. When you reset the system, motivation becomes natural, not forced.",
    emoji: "🚀"
  }
];

const Blog = () => {
  useEffect(() => {
    document.title = "Unfogged Impact Library | Blog - Nervous System Renaissance & Healing Insights";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-4">
              💛 UNFOGGED IMPACT LIBRARY
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Short reads on how clearing the fog transforms everything—from creativity to compassion, from productivity to presence.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow border-border/50 hover:border-primary/20">
                  <CardHeader>
                    <div className="text-3xl mb-2">{post.emoji}</div>
                    <CardTitle className="text-lg leading-tight">
                      {post.title.replace(post.emoji + " ", "")}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;