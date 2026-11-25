import LegalPageClient from '../components/LegalPageClient';

export const metadata = {
  title: 'Privacy — Salaro',
  description: 'Privacy policy for Salaro digital consultancy.',
};

export default function PrivacyPage() {
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
              <div className="eyebrow lab a">Privacy</div>
              <h1 className="serif">Privacy policy for <span className="it">Salaro</span></h1>
              <p className="sub">How we collect, use and protect the personal data of clients, collaborators and visitors to our site.</p>
            </div>
            <div className="hero-viz rv" aria-hidden="true">
              <svg viewBox="0 0 360 260" width="100%" height="100%">
                <rect x="16" y="30" width="128" height="32" rx="8" fill="rgba(122,47,28,.08)"/>
                <rect x="16" y="82" width="232" height="22" rx="6" fill="rgba(122,47,28,.12)"/>
                <rect x="16" y="122" width="192" height="22" rx="6" fill="rgba(122,47,28,.12)"/>
                <rect x="16" y="162" width="272" height="22" rx="6" fill="rgba(122,47,28,.12)"/>
                <rect x="16" y="206" width="114" height="28" rx="10" fill="rgba(122,47,28,.18)"/>
                <circle cx="286" cy="72" r="28" fill="rgba(122,47,28,.16)"/>
                <path d="M260 60 L298 60 L298 84 L260 84 Z" fill="rgba(255,255,255,.95)"/>
                <circle cx="286" cy="72" r="8" fill="var(--accent)"/>
              </svg>
            </div>
          </div>
        </div>
      </header>

      <section className="section rv">
        <div className="wrap">
          <h2>Our commitment</h2>
          <p>We treat privacy as a foundational part of every engagement. Data is only collected where it is essential, handled securely, and retained only as long as it supports the delivery of our services.</p>
        </div>
      </section>

      <section className="section rv">
        <div className="wrap">
          <h2>Information we collect</h2>
          <p>We collect the data you provide directly, such as contact details and project requirements, along with technical information for site performance and security.</p>
          <ul>
            <li>Contact form submissions and email correspondence</li>
            <li>Usage data for website analytics</li>
            <li>Cookies required for basic site operation</li>
          </ul>
        </div>
      </section>

      <section className="section rv">
        <div className="wrap">
          <h2>How we use your data</h2>
          <p>Data is used only to respond to inquiries, manage client relationships and improve the experience of our website. We do not sell or share your personal data to third parties for marketing purposes.</p>
        </div>
      </section>

      <section className="section rv">
        <div className="wrap">
          <h2>Spam protection</h2>
          <p>Our contact forms use Cloudflare Turnstile to check that submissions come from a person rather than an automated bot. To do this, Turnstile processes limited technical information from your browser, such as your IP address and browser details. It does not use this information for advertising. Cloudflare&apos;s handling of this data is described in the <a href="https://www.cloudflare.com/turnstile-privacy-policy/" target="_blank" rel="noopener noreferrer">Cloudflare Turnstile Privacy Addendum</a>.</p>
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
