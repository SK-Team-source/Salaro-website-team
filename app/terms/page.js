import LegalPageClient from '../components/LegalPageClient';

export const metadata = {
  title: 'Terms — Salaro',
  description: 'Terms and conditions for using the Salaro website and services.',
};

export default function TermsPage() {
  return (
    <LegalPageClient>
      <div className="p-legal">
      <div className="topbar">
        <div className="wrap">
          <a href="/" className="brand">Sala<span>ro</span></a>
          <nav className="nav"><a href="/practice">Practice</a><a href="/work">Work</a><a href="/studio">Studio</a><a href="/writing">Writing</a><a href="/contact">Contact</a></nav>
          <a href="/contact" className="top-cta">Start a project</a>
        </div>
      </div>

      <header className="hero">
        <div className="wrap">
          <div className="hero-inner">
            <div className="hero-copy rv">
              <div className="eyebrow lab a">Terms</div>
              <h1 className="serif">Terms and <span className="it">conditions</span></h1>
              <p className="sub">The terms that govern your use of our website, services, and the way we work together.</p>
            </div>
            <div className="hero-viz rv" aria-hidden="true">
              <svg viewBox="0 0 360 260" width="100%" height="100%">
                <rect x="20" y="40" width="132" height="30" rx="8" fill="rgba(122,47,28,.08)"/>
                <rect x="20" y="90" width="248" height="20" rx="6" fill="rgba(122,47,28,.12)"/>
                <rect x="20" y="128" width="196" height="20" rx="6" fill="rgba(122,47,28,.12)"/>
                <rect x="20" y="166" width="268" height="20" rx="6" fill="rgba(122,47,28,.12)"/>
                <rect x="20" y="204" width="132" height="24" rx="8" fill="rgba(122,47,28,.16)"/>
                <path d="M250 52 L318 52 L318 100 L250 100 Z" fill="rgba(122,47,28,.16)"/>
                <circle cx="284" cy="76" r="12" fill="var(--accent)"/>
                <path d="M274 76 L292 76" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </header>

      <section className="section rv">
        <div className="wrap">
          <h2>Acceptance of terms</h2>
          <p>By using our site and communicating with Salaro, you agree to these terms. They apply to website visitors, prospective clients, and anyone interacting with our digital consultancy services.</p>
        </div>
      </section>

      <section className="section rv">
        <div className="wrap">
          <h2>Service scope</h2>
          <p>Our services are defined by the proposals and contracts we agree with each client. We aim for clear delivery scope, realistic timelines, and transparent communication.</p>
          <ul>
            <li>Project proposals are delivered in writing.</li>
            <li>Changes beyond agreed scope are handled through change requests.</li>
            <li>All work is subject to our standard terms and fees.</li>
          </ul>
        </div>
      </section>

      <section className="section rv">
        <div className="wrap">
          <h2>Intellectual property</h2>
          <p>Unless otherwise agreed, intellectual property created for clients is assigned to the client once payment terms are met. We retain rights to our pre-existing tools, templates and methodologies.</p>
        </div>
      </section>

      <footer className="dark-lattice">
        <div className="cols">
          <div className="foot-top">
            <div>
              <div className="fbrand">Sala<span>ro</span></div>
              <p>A UK-led digital consultancy. Practising since 1995.</p>
            </div>
            <div className="fcol">
              <h5>Pages</h5>
              <a href="/">Home</a>
              <a href="/practice">Practice</a>
              <a href="/work">Work</a>
              <a href="/studio">Studio</a>
            </div>
            <div className="fcol">
              <h5>Legal</h5>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
            </div>
            <div className="fcol">
              <h5>Connect</h5>
              <a href="mailto:hello@salaro.com">hello@salaro.com</a>
              <a href="https://uk.linkedin.com/in/salaro">LinkedIn</a>
            </div>
          </div>
          <div className="foot-bot">
            <span className="lab">© 2026 Salaro · a trading name of S. Golestanian, sole trader · 39 Cater Gardens, Guildford, Surrey GU3 3BY</span>
            <span className="lab">Practising since 1995</span>
          </div>
        </div>
      </footer>
    </div>
    </LegalPageClient>
  );
}
