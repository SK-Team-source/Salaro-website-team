import RevealOnScroll from '../../components/RevealOnScroll';

const PATH = '/writing/php-vulnerabilities-october-2026';
const TITLE = 'The October 2026 PHP vulnerabilities: what they mean for small business websites';
const DESCRIPTION = 'A plain-English guide to the PHP2Shell flaws (CVE-2026-109618 and CVE-2026-109619): who is affected, what to ask your host today, and the longer-term option of moving off PHP.';
const PUBLISHED = '2026-10-23';

export const metadata = {
  title: `${TITLE} — Salaro`,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { title: TITLE, description: DESCRIPTION, url: PATH, siteName: 'Salaro', type: 'article', publishedTime: PUBLISHED, locale: 'en_GB' },
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  mainEntityOfPage: `https://www.salaro.com${PATH}`,
  author: { '@type': 'Organization', name: 'Salaro', url: 'https://www.salaro.com' },
  publisher: { '@type': 'Organization', name: 'Salaro', url: 'https://www.salaro.com', logo: { '@type': 'ImageObject', url: 'https://www.salaro.com/images/logo.png' } },
};

export default function PhpVulnerabilitiesArticle() {
  return (
    <div className="pg-build pg-php">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <RevealOnScroll />

      <div className="topbar">
        <div className="wrap">
          <a href="/" className="brand">Sala<span>ro</span></a>
          <nav className="nav">
            <a href="/practice">Practice</a>
            <a href="/work">Work</a>
            <a href="/studio">Studio</a>
            <a href="/writing" className="active">Writing</a>
            <a href="/contact">Contact</a>
          </nav>
          <a href="/move-from-php#site-check" className="top-cta">Free site check</a>
        </div>
      </div>

      <main>
        <article className="php-article">
          <header className="masthead">
            <div className="wrap">
              <div className="php-article-col">
                <div className="eyebrow lab a kicker"><a href="/writing">Writing</a> · Advisory</div>
                <h1>The October 2026 PHP vulnerabilities: what they mean for small business websites</h1>
                <p className="lead">Two serious flaws in PHP were fixed this week. Here&apos;s what happened, what to check today, and what to think about next.</p>
                <p className="php-meta lab"><time dateTime={PUBLISHED}>23 October 2026</time> · Salaro</p>
              </div>
            </div>
          </header>

          <div className="band">
            <div className="wrap">
              <div className="php-article-col php-prose">
                <h2>What happened</h2>
                <p>On 21 October 2026 the PHP project released urgent updates for two flaws in PHP itself, tracked as <strong>CVE-2026-109618</strong> and <strong>CVE-2026-109619</strong> and nicknamed &ldquo;PHP2Shell&rdquo;. PHP is the software that runs WordPress, Drupal, Joomla and a large share of all other websites.</p>
                <p>Both flaws are rated 9.2 out of 10 for severity. In the worst case, someone on the internet could run their own code on your web server without needing a password. Details leaked before the fixes were ready, and security companies have since reported large numbers of attempts to exploit them. The US Cybersecurity and Infrastructure Security Agency (<a href="https://www.cisa.gov/news-events/alerts/2026/10/21/critical-vulnerabilities-php-require-immediate-patching" rel="noopener">CISA</a>) has told organisations to patch immediately.</p>
                <p>Here in the UK, the government took a number of online services offline as a precaution. BBC News reported that 32 were unavailable and four partially unavailable, and that the National Cyber Security Centre described the situation as unprecedented. The NCSC also said there were no signs of successful breaches. The disruption reached small firms too: one garage in Chepstow couldn&apos;t process MOT paperwork online for days because a system it relied on was down.</p>
                {/* TODO (Salar): link "BBC News reported" to the BBC article on the 32 government services — our fetcher can't reach bbc.co.uk, so the exact URL needs adding by hand. */}

                <h2>Who is affected</h2>
                <p>Every version of PHP from 5.4 up to 8.5.11 is affected, if it&apos;s serving web pages. That includes almost every WordPress, Drupal and Joomla website, and most custom PHP sites.</p>
                <p>One point is easy to miss. <strong>Keeping WordPress, your plugins and your theme up to date does not protect you from this.</strong> The flaw is in PHP, the layer underneath all of them. Only updating PHP on the server fixes it.</p>

                <h2>What to do today</h2>
                <p>If you have a PHP website, send your host, agency or developer one short message:</p>
                <blockquote className="php-ask">&ldquo;Has the PHP on our server been updated to 8.5.12, 8.4.27, 8.3.36 or 8.2.35 (or later)? If not, when will it be?&rdquo;</blockquote>
                <p>Many managed hosts moved quickly and may already have done this. It&apos;s still worth asking, because you shouldn&apos;t assume.</p>
                <p><strong>If your site runs PHP 8.1 or older</strong>, ask a second question: what has been done about it? The PHP project only releases updates for 8.2 and newer. Older versions depend on your host or Linux vendor providing a fix, and CISA advises taking unpatched older systems offline until they are fixed. If nobody can answer, treat that as a warning sign.</p>
                <p>If you don&apos;t know who looks after your server, that&apos;s worth finding out this week. You can see the official details in the <a href="https://www.php.net/archive/2026.php#2026-10-21-5" rel="noopener">php.net security advisory</a>, and there&apos;s a useful technical FAQ from <a href="https://watchtowr.com/intelligence/php-cve-2026-109618-faq/" rel="noopener">watchTowr</a>, one of the security firms tracking it.</p>

                <h2>Why this keeps happening</h2>
                <p>Most small business websites are brochure sites: a few pages about the business, some photos, a contact form and perhaps a blog. They change a few times a year. But because they&apos;re built on WordPress or similar, each one runs live server software — PHP, a database, plugins — that has to be patched indefinitely.</p>
                <p>Often nobody is really responsible for that. The site was built years ago by an agency or a freelancer, the hosting is renewed automatically, and the server software ages quietly in the background. This week showed how much of the web runs like that: Wiz, one of the firms that found the flaws, estimates PHP powers around 70% of websites.</p>

                <h2>The longer-term option: don&apos;t run PHP at all</h2>
                <p>For a site that is mostly fixed content, there&apos;s another approach. It can be rebuilt as a modern static or Next.js site and hosted on a platform like Vercel. The pages are prepared in advance and served from a global network, so there&apos;s no PHP interpreter on a server for anyone to attack and no plugin updates to keep up with. Most sites also get faster and cheaper to host.</p>
                <p>That doesn&apos;t make a site unhackable — nothing does. But it removes the specific kind of risk this week was about. And it isn&apos;t right for everyone. A large WooCommerce shop, a membership site or an online course platform depends on server-side features, and is usually better off staying where it is and being patched and maintained properly.</p>
                <p>If you&apos;re not sure which group you&apos;re in, we&apos;ll look at your site for free and give you a straight answer.</p>

                <div className="php-callout">
                  <div className="lab a">Move from PHP</div>
                  <p>We move brochure-style PHP sites to Vercel, keeping your URLs, search rankings, forms and email intact.</p>
                  <a href="/move-from-php" className="btn-line">See how it works <span className="arw">→</span></a>
                </div>

                <h2>Sources</h2>
                <ul className="php-source-list">
                  <li><a href="https://www.cisa.gov/news-events/alerts/2026/10/21/critical-vulnerabilities-php-require-immediate-patching" rel="noopener">CISA: Critical vulnerabilities in PHP require immediate patching (21 Oct 2026)</a></li>
                  <li><a href="https://www.php.net/archive/2026.php#2026-10-21-5" rel="noopener">php.net: Security advisory — critical remote code execution vulnerabilities (21 Oct 2026)</a></li>
                  <li><a href="https://cloud.google.com/blog/products/identity-security/responding-to-core-php-vulnerabilities-cve-2026-109618-cve-2026-109619" rel="noopener">Google Cloud: Responding to core PHP vulnerabilities</a></li>
                  <li><a href="https://watchtowr.com/intelligence/php-cve-2026-109618-faq/" rel="noopener">watchTowr: CVE-2026-109618 FAQ</a></li>
                  {/* TODO (Salar): add the BBC News article link here as well. */}
                  <li>BBC News coverage of the UK impact, 22–23 October 2026</li>
                </ul>
              </div>
            </div>
          </div>
        </article>
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
