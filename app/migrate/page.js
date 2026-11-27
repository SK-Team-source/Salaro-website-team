'use client';

import { useEffect } from 'react';
import '../globals.css';

export default function MigratePage() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in');
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.rv').forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return (
    <div className="pg-migrate pg-build">
      <div className="topbar">
        <div className="wrap">
          <a href="https://salaro.com/" className="brand">Sala<span>ro</span></a>
          <nav className="nav">
            <a href="https://salaro.com/practice" className="active">Practice</a>
            <a href="https://salaro.com/work">Work</a>
            <a href="https://salaro.com/studio">Studio</a>
            <a href="https://salaro.com/writing">Writing</a>
            <a href="https://salaro.com/contact">Contact</a>
          </nav>
          <a href="tel:+447485222490" className="top-cta">Start a project</a>
        </div>
      </div>

      <header className="masthead">
        <div className="wrap">
          <div className="grid">
            <div className="migration-visual" aria-hidden="true">
              <span className="migration-pill">Platform transition</span>
              <svg viewBox="0 0 360 300" fill="none" className="migration-art">
                <g stroke="#a8a89b" strokeWidth="1"><path d="M24 45H336M24 255H336M180 24V276" strokeDasharray="3 7"/><circle cx="180" cy="150" r="104" strokeDasharray="2 8"/></g>
                <g stroke="#7a2f1c" fill="#f7eee4"><rect x="20" y="78" width="90" height="35" rx="5"/><rect x="20" y="120" width="90" height="35" rx="5"/><rect x="20" y="162" width="90" height="35" rx="5"/><path d="M33 95H70M33 137H70M33 179H70"/><circle cx="95" cy="95" r="3"/><circle cx="95" cy="137" r="3"/><circle cx="95" cy="179" r="3"/></g>
                <g stroke="#8e9e89" strokeWidth="1.5"><path d="M110 95H130V150H150M110 137H150M110 179H130V150M210 150H230V95H250M210 150H250M230 150V205H250"/></g>
                <g className="migration-flow" stroke="#7a2f1c" strokeWidth="2" strokeDasharray="5 12"><path d="M110 95H130V150H150M110 179H130V150H150M210 150H230V95H250M210 150H250M210 150H230V205H250"/></g>
                <rect x="150" y="120" width="60" height="60" rx="12" fill="#e2e9df" stroke="#526b59"/><path d="M165 150l10 10 20-22" stroke="#526b59" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <g stroke="#526b59" fill="#e4ece3"><rect x="250" y="68" width="90" height="54" rx="7"/><rect x="250" y="130" width="90" height="40" rx="7"/><rect x="250" y="178" width="90" height="54" rx="7"/><path d="M262 82H328M262 143H328M262 192H328M262 205H306"/><path d="M263 108l15-10 12 4 24-12 13 3"/></g>
                <g fill="#5c5348" fontSize="10" fontFamily="monospace" textAnchor="middle"><text x="65" y="225">LEGACY</text><text x="180" y="200">VALIDATE</text><text x="295" y="249">MODERN</text></g>
              </svg>
              <div className="migration-caption"><span>Audit · Transfer · Validate</span><span>01 — 04</span></div>
            </div>
            <div className="migration-copy">
              <div className="eyebrow lab a kicker">Practice · Migrate</div>
              <h1>Modernising legacy platforms with <em className="it">clarity.</em></h1>
              <p className="lead">We help teams move from brittle, outdated systems to resilient digital platforms without losing stability, content, or momentum.</p>
            <div className="aside">
              <div className="row"><span className="k">Service</span><span className="v">Migrate</span></div>
              <div className="row"><span className="k">Focus</span><span className="v">Legacy uplift · Modern stack</span></div>
              <div className="row"><span className="k">Outcome</span><span className="v">Performance and maintainability</span></div>
              <div className="cta">
                <a href="tel:+447485222490" className="btn-line">Start a project <span className="arw">→</span></a>
              </div>
            </div>
            </div>
          </div>
        </div>
      </header>

      <section className="band migration-process">
        <div className="wrap">
          <div className="head-row rv">
            <h2>We bring older products into a modern operating model.</h2>
            <p className="desc">Whether you're leaving an outdated platform, modernising legacy software, or consolidating multiple systems, we plan each migration carefully to minimise downtime, protect your data, and keep your business moving.</p>
          </div>
          <div className="svc-grid">
            <div className="svc rv">
              <div className="idx">01</div>
              <div className="kind lab a">Audit</div>
              <h3>Understand the platform you have today.</h3>
              <p>We review your existing architecture, content, integrations, and business goals to define the scope and risks before any move begins.</p>
            </div>
            <div className="svc rv">
              <div className="idx">02</div>
              <div className="kind lab a">Plan</div>
              <h3>Create a migration strategy with clear milestones.</h3>
              <p>Our approach includes rollback planning, data protection, and a phased transition so the move stays controlled and measurable.</p>
            </div>
            <div className="svc rv">
              <div className="idx">03</div>
              <div className="kind lab a">Transfer</div>
              <h3>Move applications, content, and services securely.</h3>
              <p>We handle the technical transfer with care, preserving functionality while reducing the chances of downtime or disruption.</p>
            </div>
            <div className="svc rv">
              <div className="idx">04</div>
              <div className="kind lab a">Validate</div>
              <h3>Test the outcome before launch.</h3>
              <p>Every migration is validated against performance, integrations, content integrity, and user experience before release.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="band migration-types">
        <div className="wrap">
          <div className="head-row rv">
            <h2>Built for complex migrations.</h2>
            <p className="desc">Technology evolves. Businesses grow. Platforms change. We help organisations migrate websites, applications, databases and digital ecosystems with a structured process that reduces risk while improving performance, security and long-term maintainability.</p>
          </div>
          <div className="svc-grid">
            <div className="svc rv">
              <div className="kind lab a">What we migrate</div>
              <h3>Websites</h3>
              <p>Modern website migrations with SEO preservation, redirects, and zero-content loss.</p>
            </div>
            <div className="svc rv">
              <div className="kind lab a">What we migrate</div>
              <h3>E-commerce</h3>
              <p>Move online stores while protecting products, customer accounts, orders, and payment integrations.</p>
            </div>
            <div className="svc rv">
              <div className="kind lab a">What we migrate</div>
              <h3>Applications</h3>
              <p>Legacy applications upgraded or migrated to modern frameworks and cloud infrastructure.</p>
            </div>
            <div className="svc rv">
              <div className="kind lab a">What we migrate</div>
              <h3>CMS platforms</h3>
              <p>Migration between WordPress, Drupal, Joomla, headless CMS platforms, and custom systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="band migration-benefits">
        <div className="wrap">
          <div className="head-row rv">
            <h2>Why businesses migrate with Salaro.</h2>
            <p className="desc">Every migration is reviewed by experienced engineers from initial assessment through to post-launch validation.</p>
          </div>
          <div className="svc-grid">
            <div className="svc rv">
              <div className="kind lab a">01</div>
              <h3>Minimal downtime</h3>
              <p>Carefully planned deployments designed to keep your business operational throughout migration.</p>
            </div>
            <div className="svc rv">
              <div className="kind lab a">02</div>
              <h3>Data integrity</h3>
              <p>Every file, database, and integration is validated to ensure nothing is lost.</p>
            </div>
            <div className="svc rv">
              <div className="kind lab a">03</div>
              <h3>Improved performance</h3>
              <p>Migration is an opportunity to optimise infrastructure, speed, and reliability rather than simply move existing problems.</p>
            </div>
            <div className="svc rv">
              <div className="kind lab a">04</div>
              <h3>Future ready</h3>
              <p>Build on a platform that's easier to maintain, extend, and scale as your business grows.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="band migration-platforms">
        <div className="wrap">
          <div className="head-row rv">
            <h2>Platform experience.</h2>
            <p className="desc">We work across the ecosystems and stacks that power modern digital operations.</p>
          </div>
          <div className="svc-grid">
            <div className="svc rv">
              <div className="kind lab a">Websites</div>
              <h3>WordPress · Craft CMS · Statamic · Drupal · Joomla</h3>
            </div>
            <div className="svc rv">
              <div className="kind lab a">Commerce</div>
              <h3>Shopify · WooCommerce · Magento · Custom Commerce</h3>
            </div>
            <div className="svc rv">
              <div className="kind lab a">Cloud</div>
              <h3>AWS · Azure · Google Cloud · DigitalOcean · Cloudflare</h3>
            </div>
            <div className="svc rv">
              <div className="kind lab a">Development</div>
              <h3>Next.js · React · Node.js · Laravel · .NET</h3>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="cols">
          <div className="foot-top">
            <div>
              <div className="fbrand">Salaro</div>
              <p>A UK web consultancy. We build thoughtful, resilient digital products with clear decisions and practical delivery.</p>
            </div>
            <div className="fcol"><h5>Practice</h5><a href="/build">Build</a><a href="/migrate">Migrate</a><a href="/advise">Advise</a></div>
            <div className="fcol"><h5>Work</h5><a href="/work">Recent projects</a><a href="/archive">Archive</a></div>
            <div className="fcol"><h5>Contact</h5><a href="mailto:team@salaro.com">team@salaro.com</a><a href="https://maps.google.com/?q=Guildford%2C%20Surrey">Guildford, Surrey</a><a href="https://uk.linkedin.com/in/salaro">LinkedIn</a></div>
          </div>
          <div className="foot-bot">
            <span className="lab">© 2026 Salaro · a trading name of S. Golestanian, sole trader</span>
            <span className="lab">Practising since 1995</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
