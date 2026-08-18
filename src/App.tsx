import { ArrowUpRight, Globe2, Sparkles } from "lucide-react";

const brands = [
  {
    name: "EventsCraft",
    logo: "/eventcraft.png",
    domain: "events-craft-blush.vercel.app",
    category: "Event Management Software",
    href: "https://events-craft-blush.vercel.app",
    tone: "coral",
    description:
      "Make every event feel effortless, from first invite to final encore.",
  },
  {
    name: "RegistrationTeam",
    logo: "/registrationteam.png",
    domain: "registrationteam-landing.vercel.app",
    category: "Onsite Badging and Scanning Services",
    href: "https://registrationteam-landing.vercel.app",
    tone: "mint",
    description:
      "Fast, friendly event check-in experiences built for busy venues.",
  },
  {
    name: "ExpoCon",
    logo: "/expocon.png",
    domain: "expocon-landing.vercel.app",
    category: "Exhibition & Conference Database",
    href: "https://expocon-landing.vercel.app",
    tone: "gold",
    description:
      "Discover the people, places, and possibilities behind every expo.",
  },
  {
    name: "ePoster",
    logo: "/eposter.png",
    domain: "eposter-landing.vercel.app",
    category: "Medical ePoster Journal",
    href: "https://eposter-landing.vercel.app",
    tone: "blue",
    description: "A clearer, more connected way to share medical knowledge.",
  },
  {
    name: "MediCraft",
    logo: "/medicraft.png",
    domain: "medicraft-landing.vercel.app",
    category: "Clinic Management Software",
    href: "https://medicraft-landing.vercel.app",
    tone: "violet",
    description:
      "Thoughtful tools that help clinics spend more time with people.",
  },
  {
    name: "RetailCraft",
    logo: "/retailcraft.png",
    domain: "retailcraft-landing.vercel.app",
    category: "Retail Management",
    href: "https://retailcraft-landing.vercel.app",
    tone: "orange",
    description: "Simple, powerful retail operations for modern store teams.",
  },
] as const;

function App() {
  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <nav className="topbar page-width" aria-label="Main navigation">
        <a
          className="brand-lockup"
          href="#top"
          aria-label="SaaSCraft Studio home"
        >
          <img src="/saascraft.png" alt="SaaSCraft Studio" />
        </a>
        <a className="nav-link" href="#brands">
          Explore brands <ArrowUpRight size={16} strokeWidth={2.4} />
        </a>
      </nav>
      <section className="hero page-width" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles size={15} /> A studio of useful software
          </div>
          <h1>
            Small teams.
            <br />
            <span>Big possibilities.</span>
          </h1>
          <p className="hero-intro">
            SaaSCraft Studio creates focused digital products that make complex
            work feel beautifully simple.
          </p>
          <a className="hero-cta" href="#brands">
            Meet the family <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="hero-note">
          <span className="note-line" />
          <p>
            Six independent brands.
            <br />
            One shared belief in better tools.
          </p>
        </div>
      </section>
      <section className="brands-section page-width" id="brands">
        <div className="section-heading">
          <div>
            <p className="section-kicker">The portfolio</p>
            <h2>
              Built for the work
              <br />
              that moves us forward.
            </h2>
          </div>
          <p className="section-summary">
            Explore our growing collection of specialized products, each
            designed around a real-world need.
          </p>
        </div>
        <div className="brand-grid">
          {brands.map((brand, index) => (
            <a
              className="brand-card"
              href={brand.href}
              target="_blank"
              rel="noreferrer"
              key={brand.name}
            >
              <div className={`brand-art ${brand.tone}`}>
                <span className="brand-index">0{index + 1}</span>

                <img src={brand.logo} alt={brand.name} className="brand-logo" />

                <ArrowUpRight className="card-arrow" size={20} />
              </div>
              <div className="card-body">
                <div className="card-title-row">
                  <h3>{brand.name}</h3>
                  <Globe2 size={17} />
                </div>
                <p className="domain">{brand.domain}</p>
                <p className="category">{brand.category}</p>
                <p className="description">{brand.description}</p>
                <span className="visit-link">
                  Visit brand <ArrowUpRight size={15} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
      <footer className="footer page-width">
        <div className="footer-logo">
          <span>S</span> SaaSCraft Studio
        </div>
        <p>
          SoftwareBrands owned by SaaSCraft Studio (India) Pvt. Ltd{" "}
          <span className="footer-divider">/</span> All Rights Reserved. © 2026
        </p>
      </footer>
    </main>
  );
}

export default App;
