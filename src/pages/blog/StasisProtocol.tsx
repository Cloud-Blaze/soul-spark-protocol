import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const StasisProtocol = () => {
  useEffect(() => {
    const title = "The Stasis Protocol: Freeze Time with Love";
    const description = "A love-anchored way to slow fear, calm your nervous system, and move from fog to clarity.";

    document.title = `${title} | Unfogged Impact Library`;

    const ensureMetaByName = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    };

    const ensureMetaByProp = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    const href = window.location.href;

    // Description and social
    ensureMetaByName("description", description);
    ensureMetaByProp("og:type", "article");
    ensureMetaByProp("og:title", title);
    ensureMetaByProp("og:description", description);
    ensureMetaByProp("og:url", href);
    ensureMetaByName("twitter:card", "summary");
    ensureMetaByName("twitter:title", title);
    ensureMetaByName("twitter:description", description);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = href;
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
            aria-label="Back to Impact Library"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Impact Library
          </Link>

          <article className="prose prose-lg max-w-none">
            <header className="text-center mb-12">
              <div className="text-6xl mb-4" aria-hidden>💠</div>
              <h1 className="text-4xl md:text-5xl font-bold text-deep-teal mb-4">
                The Stasis Protocol: Freeze Time with Love
              </h1>
              <p className="text-lg text-muted-foreground">
                Freeze time with love. Face the dark. Walk into the white.
              </p>
            </header>

            <div className="space-y-6 text-lg leading-relaxed text-foreground">
              <p>
                “There’s a moment in your recovery journey—maybe in week one, or maybe not until week two or three—when something deep begins to shift. 🕳️ And that shift can feel confusing, even terrifying, especially if you’re detoxing fast or your nervous system’s recalibrating ahead of schedule.”
              </p>

              <p className="font-semibold text-primary">
                But here’s the truth:
              </p>

              <p>
                ⚠️ You can’t run the Stasis Protocol until one thing is real: You must be grounded in true, unconditional love. Not theory. Not hope. Something—or someone—you know would still love you if you broke down in the dark.
              </p>

              <p>
                Maybe it’s your child’s laugh. 👧 Your puppy’s eyes. 🐶 Christ’s voice. ✝️ The memory of your wife’s hand in yours. 💍
              </p>

              <p>
                Whatever it is, it has to be real, and it has to be yours. Because without that? This protocol won’t stick. You’ll still be hunting for grounding while the monsters are charging.
              </p>

              <hr className="my-8 border-border/60" />

              <p>
                You’re awake, but not. Alive, but drowning. The dog’s not in the room. Your daughter is asleep and you can’t wake her. Church is closed. Your thoughts won’t stop. Your breath is shallow. 😮‍💨 Your phone glows like a trap. 📵 The sheets are soaked. The night feels endless.
              </p>

              <p>
                And in that moment—you don’t need a hack. You need a miracle weapon.
              </p>

              <hr className="my-8 border-border/60" />

              <p>
                I call it the Stasis Protocol. 💠 And it’s not a supplement. It’s a memory made of love. ❤️‍🔥
              </p>

              <p>
                A flashback of truth that freezes time like the Stasis Gun in Dead Space 🎮—that terrifying sci-fi game where monsters charge you in the dark 👹 and you only survive by stopping time. ⏸️
              </p>

              <p>
                When you hit them with stasis, they slow down. You breathe. You aim. You remember who the fuck you are. 🧍‍🔥
              </p>

              <p>
                That’s what Christ did for me. That’s what Pretzel’s eyes do when I fall apart. That’s what my daughter’s hug would do if I could hold her without waking her. That’s what my wife’s voice reminds me of when I think I’m too far gone.
              </p>

              <hr className="my-8 border-border/60" />

              <p className="font-semibold">
                The Stasis Protocol is not for fixing. It’s for surviving. It’s for weaponizing love against fear. ⚔️💓
              </p>

              <hr className="my-8 border-border/60" />

              <p>
                And here’s the rest of the truth: You’re not in darkness because you’re broken. You’re there because you’re healing faster than your nervous system can track. 🧠 You’re rebooting. And when the circuits short, fear comes in to fill the silence. ⚡
              </p>

              <p>
                But if you can hold still long enough, if you can remember your daughter’s breath, your dog’s warmth, your Savior’s whisper—then time slows. 🕰️
              </p>

              <p>
                And you can walk from gray to white.
              </p>

              <hr className="my-8 border-border/60" />

              <p>
                White is not bliss. White is clarity. 🕊️ White is nature + God + memory + truth + dirt under your feet + nothing in your hands but your breath and the knowing that you were never abandoned in the dark. 🌱
              </p>

              <p>
                You just had to stop time and look. 👁️
              </p>

              <hr className="my-8 border-border/60" />

              <p>
                Next time the fear comes for you at night… don’t fight. Don’t run. Don’t numb. Fire the Stasis Protocol. Freeze time with love. Look that fear in the face. 👺 And walk into the white—
              </p>

              <p className="text-2xl text-center">🕳️ → 🌫️ → ☯️ → 🤍</p>

              <p>
                The way unconditional love always meant for you to— no longer lost. Just finally clear.
              </p>

              <hr className="my-8 border-border/60" />

              <p className="text-center font-semibold">
                ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
              </p>

              <p className="text-center">
                🧠💊 → 🤍<br />
                <span className="font-semibold">Red pill. White path.</span><br />
                Truth is clarity. Clarity is nature.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StasisProtocol;
