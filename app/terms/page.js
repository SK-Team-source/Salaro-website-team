import LegalPageClient from '../components/LegalPageClient';

export const metadata = {
  title: 'Terms — Salaro',
  description: 'Terms and conditions for using the Salaro website and services.',
};

export default function TermsPage() {
  return (
    <LegalPageClient>
      <div className="p-legal terms-editorial">
      <div className="topbar">
        <div className="wrap">
          <a href="https://salaro.com/" className="brand">Sala<span>ro</span></a>
          <nav className="nav"><a href="https://salaro.com/practice">Practice</a><a href="https://salaro.com/work">Work</a><a href="https://salaro.com/studio">Studio</a><a href="https://salaro.com/writing">Writing</a><a href="https://salaro.com/contact">Contact</a></nav>
          <a href="tel:+447485222490" className="top-cta">Start a project</a>
        </div>
      </div>

      <header className="hero">
        <div className="wrap">
          <div className="hero-inner">
            <div className="hero-viz rv" aria-hidden="true">
              <div className="terms-label">Legal / Agreement</div>
              <svg viewBox="0 0 420 220" className="terms-art" fill="none">
                <g stroke="#c9c1b2" strokeWidth=".8"><path d="M15 40H405M15 180H405M50 12V208M370 12V208" strokeDasharray="2 6"/><circle cx="210" cy="110" r="92"/><circle cx="210" cy="110" r="78"/></g>
                <path className="terms-flow" d="M25 110H108M310 110H395" stroke="#526b59" strokeDasharray="4 6"/>
                <g className="terms-layer"><rect x="126" y="27" width="166" height="166" rx="3" fill="#dce5da" stroke="#9aab99" transform="rotate(9 209 110)"/><rect x="126" y="27" width="166" height="166" rx="3" fill="#e9ded0" stroke="#b9a58f" transform="rotate(-7 209 110)"/></g>
                <rect x="122" y="18" width="176" height="184" rx="3" fill="#fcf9f2" stroke="#a18b76"/>
                <text x="138" y="40" fontSize="8" letterSpacing="2" fill="#7a2f1c" fontFamily="monospace">SALARO / TERMS</text>
                <path d="M138 50H282" stroke="#d1c5b4"/>
                {[0,1,2].map((n)=><g key={n} className="terms-clause" style={{animationDelay:`${n*.5}s`}}><rect x="138" y={62+n*39} width="24" height="24" rx="3" fill={['#eee0d4','#e2e9df','#e2e8eb'][n]}/><text x="150" y={77+n*39} textAnchor="middle" fontSize="9" fill="#526b59" fontFamily="monospace">0{n+1}</text><path d={`M172 ${68+n*39}H278 M172 ${77+n*39}H252`} stroke="#b8ad9e" strokeWidth="1.5" strokeLinecap="round"/></g>)}
                <path className="terms-signature" d="M138 183Q150 162 157 181T174 179T194 181" stroke="#7a2f1c" strokeWidth="1.5"/>
                <circle cx="298" cy="180" r="22" fill="#e0e9df" stroke="#526b59"/><path d="M288 180L295 187L309 173" stroke="#526b59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="terms-caption">SALARO <span> / </span> TERMS &amp; CONDITIONS</div>
            </div>
            <div className="hero-copy rv">
              <div className="terms-label">Terms</div>
              <h1 className="serif">Terms and <span className="it">conditions</span></h1>
              <p className="sub">The terms that govern your use of our website, services, and the way we work together.</p>
              <nav className="terms-index" aria-label="Terms sections"><a href="#acceptance">01 / Acceptance</a><a href="#scope">02 / Service scope</a><a href="#property">03 / Intellectual property</a></nav>
            </div>
          </div>
        </div>
      </header>

      <main className="terms-reading">
      <section className="section rv" id="acceptance">
        <div className="wrap">
          <div className="terms-heading"><span className="terms-number">01 /</span><h2>Acceptance of terms</h2></div>
          <div className="terms-body">
          <p>By using our site and communicating with Salaro, you agree to these terms. They apply to website visitors, prospective clients, and anyone interacting with our digital consultancy services.</p>
          </div>
        </div>
      </section>

      <section className="section rv" id="scope">
        <div className="wrap">
          <div className="terms-heading"><span className="terms-number">02 /</span><h2>Service scope</h2></div>
          <div className="terms-body">
          <p>Our services are defined by the proposals and contracts we agree with each client. We aim for clear delivery scope, realistic timelines, and transparent communication.</p>
          <ul>
            <li>Project proposals are delivered in writing.</li>
            <li>Changes beyond agreed scope are handled through change requests.</li>
            <li>All work is subject to our standard terms and fees.</li>
          </ul>
          </div>
        </div>
      </section>

      <section className="section rv" id="property">
        <div className="wrap">
          <div className="terms-heading"><span className="terms-number">03 /</span><h2>Intellectual property</h2></div>
          <div className="terms-body">
          <p>Unless otherwise agreed, intellectual property created for clients is assigned to the client once payment terms are met. We retain rights to our pre-existing tools, templates and methodologies.</p>
          </div>
        </div>
      </section>

      </main>
      <footer className="dark-lattice">
        <div className="cols">
          <div className="foot-top">
            <div>
              <div className="fbrand">Sala<span>ro</span></div>
              <p>A UK-led digital consultancy. Practising since 1995.</p>
            </div>
            <div className="fcol">
              <h5>Pages</h5>
              <a href="https://salaro.com/">Home</a>
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
              <a href="mailto:team@salaro.com">team@salaro.com</a>
              <a href="https://uk.linkedin.com/in/salaro">LinkedIn</a>
            </div>
          </div>
          <div className="foot-bot">
            <span className="lab">© 2026 Salaro · a trading name of S. Golestanian, sole trader</span>
            <span className="lab">Practising since 1995</span>
          </div>
        </div>
      </footer>
    </div>
    </LegalPageClient>
  );
}
