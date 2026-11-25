import RevealOnScroll from '../components/RevealOnScroll';
import SiteCheckForm from '../components/SiteCheckForm';

const TITLE = 'Move your PHP website to Vercel — Salaro';
const DESCRIPTION = "Your brochure website doesn't need a PHP server. After the October 2026 PHP vulnerabilities, we move WordPress, Drupal and Joomla sites to Vercel — with SEO, forms and email intact.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/move-from-php' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: '/move-from-php', siteName: 'Salaro', type: 'website', locale: 'en_GB' },
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
};

const FAQS = [
  {
    q: 'Is Vercel immune to hacking?',
    a: "No — no platform is. What moving does is remove the PHP server from your website, and that server is exactly what the October 2026 vulnerabilities targeted. A static or Next.js site on Vercel has far less exposed to the internet, and the hosting platform itself is patched by Vercel rather than by you or your host.",
  },
  {
    q: 'Will I lose my Google ranking?',
    a: "Not if the move is done carefully. We keep the same URLs wherever we can, set up 301 redirects where we can't, carry over page titles and descriptions, and submit a fresh sitemap. Rankings can wobble for a few weeks after any rebuild, so we track them before and after.",
  },
  {
    q: 'Can I still edit my site?',
    a: "Yes. Either we make edits for you on a small monthly retainer, or — if you change things often — we add a simple content editor so you can update pages yourself.",
  },
  {
    q: 'What about my contact forms?',
    a: 'We rebuild them and connect them to the same inbox, with spam protection. We test every form before the switch-over.',
  },
  {
    q: 'What happens to my emails?',
    a: "Nothing, if the switch-over is handled correctly. Your email runs on separate DNS records (MX records) from your website. We only change the records that point to the website and leave your email settings alone.",
  },
  {
    q: 'My site is WooCommerce — can you help?',
    a: "Case by case. A small shop might move well to a hosted platform such as Shopify. A large catalogue with lots of plugins is often better off staying on PHP and being patched and maintained properly. The free site check will tell you which.",
  },
];

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'PHP website migration to Vercel',
    serviceType: 'Website migration',
    description: DESCRIPTION,
    url: 'https://www.salaro.com/move-from-php',
    areaServed: ['GB', 'Worldwide'],
    provider: { '@type': 'Organization', name: 'Salaro', url: 'https://www.salaro.com', email: 'hello@salaro.com', telephone: '+447485222490' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  },
];

export default function MoveFromPhpPage() {
  return (
    <div className="pg-build pg-php">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <RevealOnScroll />

      <div className="topbar">
        <div className="wrap">
          <a href="/" className="brand">Sala<span>ro</span></a>
          <nav className="nav">
            <a href="/practice" className="active">Practice</a>
            <a href="/work">Work</a>
            <a href="/studio">Studio</a>
            <a href="/writing">Writing</a>
            <a href="/contact">Contact</a>
          </nav>
          <a href="#site-check" className="top-cta">Free site check</a>
        </div>
      </div>

      <main>
        {/* 1. Hero */}
        <header className="masthead">
          <div className="wrap">
            <div className="grid">
              <div>
                <div className="eyebrow lab a kicker">Practice · Migrate · Move from PHP</div>
                <h1>Your website doesn&apos;t need a PHP server. <span className="it">Let us move it to Vercel.</span></h1>
                <p className="lead">The PHP vulnerabilities disclosed in October 2026 hit the software underneath most WordPress, Drupal and Joomla sites. If yours is a brochure site that rarely changes, you can stop running that software altogether.</p>
                <div className="php-ctas">
                  <a href="#site-check" className="btn-line">Get a free site check <span className="arw">→</span></a>
                  <a href="#how-it-works" className="arwlink">How it works <span className="arw">→</span></a>
                </div>
              </div>
              <div className="aside">
                <div className="row"><span className="k">Service</span><span className="v">PHP site → Vercel</span></div>
                <div className="row"><span className="k">Best for</span><span className="v">Brochure &amp; small business sites</span></div>
                <div className="row"><span className="k">Keeps</span><span className="v">URLs, SEO, forms, email</span></div>
                <div className="row"><span className="k">Starts with</span><span className="v">A free site check</span></div>
              </div>
            </div>
          </div>
        </header>

        {/* 2. What happened */}
        <section className="band" aria-labelledby="what-happened">
          <div className="wrap">
            <div className="head-row rv">
              <h2 id="what-happened">What happened.</h2>
              <div className="php-prose">
                <p>On 21 October 2026 the PHP project released fixes for two critical flaws in PHP itself (CVE-2026-109618 and CVE-2026-109619, nicknamed &ldquo;PHP2Shell&rdquo;). Both are rated 9.2 out of 10 and can let an attacker run code on a web server without logging in.</p>
                <p>They affect PHP 5.4 through 8.5.11, so almost every PHP website was exposed until its server was updated. The fix is PHP 8.5.12, 8.4.27, 8.3.36 or 8.2.35. Large numbers of exploitation attempts have been reported, and the US agency CISA has urged everyone to patch immediately.</p>
                <p>Updating WordPress, plugins or themes does not fix this. Only updating PHP on the server does.</p>
                <p className="php-sources">
                  Sources: <a href="https://www.cisa.gov/news-events/alerts/2026/10/21/critical-vulnerabilities-php-require-immediate-patching" rel="noopener">CISA alert</a> ·{' '}
                  <a href="https://www.php.net/archive/2026.php#2026-10-21-5" rel="noopener">php.net security advisory</a> ·{' '}
                  <a href="/writing/php-vulnerabilities-october-2026">Our plain-English explainer</a>
                </p>
              </div>
            </div>
            <div className="php-callout rv">
              <div className="lab a">First things first</div>
              <p>If you run a PHP site today, ask your host or developer whether PHP has been updated to one of the fixed versions. If you&apos;re on PHP 8.1 or older, ask what they&apos;ve done about it — the PHP project no longer ships fixes for those versions. Do this before you think about moving.</p>
            </div>
          </div>
        </section>

        {/* 3. Why move */}
        <section className="band" aria-labelledby="why-move">
          <div className="wrap">
            <div className="head-row rv">
              <h2 id="why-move">Why move instead of just patching?</h2>
              <p className="desc">Patching fixes this problem. Moving removes this whole type of problem — for sites that never needed a server-side runtime in the first place.</p>
            </div>
            <div className="svc-grid">
              <div className="svc rv"><div className="idx">01</div><div className="kind lab a">Security</div><h3>No PHP to patch.</h3><p>The finished site is pre-built pages served from a global network. There&apos;s no PHP interpreter or database sitting on a server for anyone to attack or update.</p></div>
              <div className="svc rv"><div className="idx">02</div><div className="kind lab a">Maintenance</div><h3>No plugin update cycle.</h3><p>No plugins or themes needing monthly updates, and no compatibility surprises when one of them changes.</p></div>
              <div className="svc rv"><div className="idx">03</div><div className="kind lab a">Speed</div><h3>Fast, everywhere.</h3><p>Pages are served from a content delivery network close to each visitor, so they load quickly on phones as well as desktops.</p></div>
              <div className="svc rv"><div className="idx">04</div><div className="kind lab a">Cost</div><h3>Lower hosting bills.</h3><p>For most small sites, hosting costs less than a managed PHP plan.</p></div>
              <div className="svc rv"><div className="idx">05</div><div className="kind lab a">HTTPS</div><h3>Certificates handled.</h3><p>HTTPS is set up and renewed automatically. No expiring certificates to remember.</p></div>
              <div className="svc rv"><div className="idx">06</div><div className="kind lab a">Changes</div><h3>Preview before it&apos;s live.</h3><p>Every change gets its own preview link, so you can check it before it goes live — and roll back in one click if needed.</p></div>
            </div>
          </div>
        </section>

        {/* 4. Fit */}
        <section className="band" aria-labelledby="fit">
          <div className="wrap">
            <div className="head-row rv">
              <h2 id="fit">Is your site a good fit?</h2>
              <p className="desc">Not every site should move. If yours is in the right-hand column, staying on PHP and keeping it properly patched may well be the better choice — and we&apos;ll tell you so.</p>
            </div>
            <div className="php-fit rv">
              <div className="php-fit-col yes">
                <h3>Probably a good fit</h3>
                <ul>
                  <li>WordPress, Drupal, Joomla or a custom PHP build</li>
                  <li>Mostly fixed content: services, about, portfolio, contact</li>
                  <li>A small blog or news section</li>
                  <li>Landing pages and campaign sites</li>
                  <li>Edited rarely, or by an agency or freelancer</li>
                  <li>Nobody is actively looking after the server</li>
                </ul>
              </div>
              <div className="php-fit-col no">
                <h3>Probably not a fit</h3>
                <ul>
                  <li>WooCommerce or other shops with large catalogues</li>
                  <li>Membership sites with complex logins and payments</li>
                  <li>Online courses or learning platforms</li>
                  <li>Forums and community sites</li>
                  <li>Sites built around many interlocking plugins</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. How it works */}
        <section className="band" id="how-it-works" aria-labelledby="how">
          <div className="wrap">
            <div className="head-row rv">
              <h2 id="how">How it works.</h2>
              <p className="desc">A fixed scope, a careful rebuild and a switch-over with no downtime.</p>
            </div>
            <ol className="php-steps">
              <li className="rv"><span className="n">01</span><div><h3>Free site check</h3><p>We review your current site: pages, plugins, forms, traffic and search rankings.</p></div></li>
              <li className="rv"><span className="n">02</span><div><h3>Fixed-scope proposal</h3><p>You get a clear scope and a fixed price before any work starts.</p></div></li>
              <li className="rv"><span className="n">03</span><div><h3>Rebuild on Next.js</h3><p>We match your current design, or refresh it if you&apos;d like a change.</p></div></li>
              <li className="rv"><span className="n">04</span><div><h3>Protect your SEO</h3><p>Same URLs wherever possible, 301 redirects where not, page titles and descriptions carried over, and a new sitemap.</p></div></li>
              <li className="rv"><span className="n">05</span><div><h3>Reconnect forms and tools</h3><p>Contact forms, analytics and any other integrations are set up and tested.</p></div></li>
              <li className="rv"><span className="n">06</span><div><h3>Switch over</h3><p>We change the DNS with no downtime. Keep your old hosting for a safety period, then cancel it.</p></div></li>
            </ol>
          </div>
        </section>

        {/* 6. Editing */}
        <section className="band" aria-labelledby="editing">
          <div className="wrap">
            <div className="head-row rv">
              <h2 id="editing">Keeping your content editable.</h2>
              <p className="desc">Moving off PHP doesn&apos;t mean your site is frozen. There are two simple options.</p>
            </div>
            <div className="svc-grid">
              <div className="svc rv"><div className="kind lab a">Option A</div><h3>We make the edits.</h3><p>Send us the change by email and we make it, check it on a preview link and publish it. Covered by a small monthly retainer. Best if you update the site a few times a year.</p></div>
              <div className="svc rv"><div className="kind lab a">Option B</div><h3>You edit it yourself.</h3><p>We add a lightweight content editor so you can change text, images and blog posts in your browser. Best if you publish regularly.</p></div>
            </div>
          </div>
        </section>

        {/* 7. Who we are */}
        <section className="band" aria-labelledby="who">
          <div className="wrap">
            <div className="head-row rv">
              <h2 id="who">Who we are.</h2>
              <div className="php-prose">
                <p>Salaro is a UK web consultancy that has been building software and websites for more than 30 years. With our development team in Pondicherry, India — at its peak in 2006–07, more than 20 people — we&apos;ve built websites for nearly 1,000 customers around the world since the mid-2000s.</p>
                <p>For much of that time we worked on Microsoft .NET and DNN. Today we build on Next.js and deploy to Vercel, using AI-assisted development to work quickly and carefully. This website is built that way.</p>
                {/* TODO (Salar): add any recent PHP → Vercel migrations we're allowed to name. Do not name third-party projects without your say-so. */}
              </div>
            </div>
          </div>
        </section>

        {/* 8. Pricing */}
        <section className="band" aria-labelledby="pricing">
          <div className="wrap">
            <div className="php-callout rv">
              <h2 id="pricing" className="lab a">Pricing</h2>
              {/* TODO (Salar): supply pricing (e.g. "from £X" or fixed packages). Do not invent figures. */}
              <p>Every move is quoted as a fixed price after the free site check, so you know the full cost before you commit.</p>
            </div>
          </div>
        </section>

        {/* 9. FAQ */}
        <section className="band" aria-labelledby="faq">
          <div className="wrap">
            <div className="head-row rv">
              <h2 id="faq">Questions.</h2>
              <p className="desc">If yours isn&apos;t here, ask it in the form below.</p>
            </div>
            <div className="php-faq rv">
              {FAQS.map(({ q, a }) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Final CTA + form */}
        <section className="band php-form-band" id="site-check" aria-labelledby="check">
          <div className="wrap">
            <div className="head-row rv">
              <div className="php-form-head">
                <div className="lab a">Free site check</div>
                <h2 id="check">Find out whether your site should move.</h2>
              </div>
              <p className="desc">Tell us where your site is. We&apos;ll look at it and reply with an honest answer: move it, keep it and patch it, or something in between.</p>
            </div>
            <div className="rv"><SiteCheckForm /></div>
          </div>
        </section>
      </main>

      <footer>
        <div className="cols">
          <div className="foot-top">
            <div>
              <div className="fbrand">Salaro</div>
              <p>A UK web consultancy. We build thoughtful, resilient digital products with clear decisions and practical delivery.</p>
            </div>
            <div className="fcol"><p className="fh">Practice</p><a href="/build">Build</a><a href="/migrate">Migrate</a><a href="/move-from-php">Move from PHP</a><a href="/advise">Advise</a></div>
            <div className="fcol"><p className="fh">Work</p><a href="/work">Recent projects</a><a href="/archive">Archive</a></div>
            <div className="fcol"><p className="fh">Contact</p><a href="mailto:hello@salaro.com">hello@salaro.com</a><a href="tel:+447485222490">07485 222490</a><a href="https://uk.linkedin.com/in/salaro">LinkedIn</a></div>
          </div>
          <div className="foot-bot">
            <span className="lab">© 2026 Salaro · a trading name of S. Golestanian, sole trader · 39 Cater Gardens, Guildford, Surrey GU3 3BY</span>
            <span className="lab">Practising since 1995</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
