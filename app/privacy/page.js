import LegalPageClient from '../components/LegalPageClient';

export const metadata = {
  title: 'Privacy — Salaro',
  description: 'Privacy policy for Salaro digital consultancy.',
};

export default function PrivacyPage() {
  return (
    <LegalPageClient>
      <div className="p-legal privacy-editorial">
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
              <div className="privacy-label">Legal / Data privacy</div>
              <div className="privacy-art">
                <svg viewBox="0 0 420 240" fill="none">
                  <g stroke="#b9c5b6"><circle cx="210" cy="120" r="88"/><circle cx="210" cy="120" r="105" strokeDasharray="2 7"/><path d="M20 60H100L145 95M20 180H100L145 145M400 60H320L275 95M400 180H320L275 145"/></g>
                  <g className="privacy-flow" stroke="#7a2f1c" strokeWidth="2" strokeDasharray="5 13"><path d="M20 60H100L145 95M20 180H100L145 145M400 60H320L275 95M400 180H320L275 145"/></g>
                  <g fill="#f8f5ed" stroke="#879b88"><rect x="12" y="44" width="44" height="32" rx="4"/><rect x="12" y="164" width="44" height="32" rx="4"/><rect x="364" y="44" width="44" height="32" rx="4"/><rect x="364" y="164" width="44" height="32" rx="4"/></g>
                  <g stroke="#526b59" strokeWidth="1.5"><path d="M22 54H46M22 62H38M22 174H46M22 182H38M374 54H398M374 62H390M374 174H398M374 182H390"/></g>
                  <path d="M210 45L273 70V120C273 158 245 181 210 198C175 181 147 158 147 120V70Z" fill="#e1e9df" stroke="#526b59" strokeWidth="1.5"/>
                  <path d="M210 57L261 78V120C261 151 239 172 210 185C181 172 159 151 159 120V78Z" stroke="#a4b5a2"/>
                  <g stroke="#7a2f1c" strokeWidth="2"><rect x="190" y="109" width="40" height="35" rx="5" fill="#f8f5ed"/><path d="M198 109V99A12 12 0 0 1 222 99V109"/><circle cx="210" cy="122" r="3"/><path d="M210 125V133"/></g>
                  <circle className="privacy-pulse" cx="210" cy="120" r="76" stroke="#526b59"/>
                </svg>
              </div>
              <div className="privacy-caption">SALARO / PRIVACY POLICY</div>
            </div>
            <div className="hero-copy rv">
              <div className="privacy-label">Privacy</div>
              <h1 className="serif">Privacy policy for <span className="it">Salaro</span></h1>
              <p className="sub">How we collect, use and protect the personal data of clients, collaborators and visitors to our site.</p>
              <nav className="privacy-index" aria-label="Privacy policy sections">
                <a href="#commitment">01 / Our commitment</a><a href="#collection">02 / Information we collect</a><a href="#usage">03 / How we use your data</a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section className="section rv" id="commitment">
        <div className="wrap">
          <div className="privacy-heading"><span aria-hidden="true">01</span><h2>Our commitment</h2></div>
          <div className="privacy-body">
          <p>We treat privacy as a foundational part of every engagement. Data is only collected where it is essential, handled securely, and retained only as long as it supports the delivery of our services.</p>
          </div>
        </div>
      </section>

      <section className="section rv" id="collection">
        <div className="wrap">
          <div className="privacy-heading"><span aria-hidden="true">02</span><h2>Information we collect</h2></div>
          <div className="privacy-body">
          <p>We collect the data you provide directly, such as contact details and project requirements, along with technical information for site performance and security.</p>
          <ul>
            <li>Contact form submissions and email correspondence</li>
            <li>Usage data for website analytics</li>
            <li>Cookies required for basic site operation</li>
          </ul>
          </div>
        </div>
      </section>

      <section className="section rv" id="usage">
        <div className="wrap">
          <div className="privacy-heading"><span aria-hidden="true">03</span><h2>How we use your data</h2></div>
          <div className="privacy-body">
          <p>Data is used only to respond to inquiries, manage client relationships and improve the experience of our website. We do not sell or share your personal data to third parties for marketing purposes.</p>
          </div>
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
