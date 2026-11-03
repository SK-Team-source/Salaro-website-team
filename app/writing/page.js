'use client';
import { useEffect } from 'react';

/* ---------------------------------------------------------------------------
   Platform figures — same visual language as the Studio page (site palette
   via the accent #7a2f1c, muted lines, JetBrains Mono labels). Self-contained.
--------------------------------------------------------------------------- */
const figStyle = { width: '100%', height: 'auto', display: 'block', color: 'var(--accent-soft)' };
const mut = 'var(--muted)';

function FigVercel() {
  return (
    <svg viewBox="0 0 800 450" style={{ ...figStyle, transform: 'scale(1.12)', transformOrigin: 'center' }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <filter id="v-glow" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="v-flow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#7a2f1c" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.15" />
        </linearGradient>
        <marker id="v-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#7a2f1c" opacity="0.7" />
        </marker>
      </defs>

      <g fill="none" stroke="url(#v-flow)" strokeDasharray="4 4" strokeWidth="2">
        <path d="M 220 225 Q 300 225 358 225" markerEnd="url(#v-arrow)" />
        <path d="M 442 225 Q 520 120 588 110" markerEnd="url(#v-arrow)" />
        <path d="M 442 225 Q 520 188 588 188" markerEnd="url(#v-arrow)" />
        <path d="M 442 225 Q 520 262 588 262" markerEnd="url(#v-arrow)" />
        <path d="M 442 225 Q 520 330 600 340" markerEnd="url(#v-arrow)" />
      </g>

      {/* Source (git push) */}
      <g transform="translate(95, 165)">
        <rect x="0" y="0" width="120" height="120" rx="10" fill="#ffffff" stroke={mut} strokeWidth="1.6" />
        <g stroke="#7a2f1c" strokeWidth="2.5" fill="none" strokeLinecap="round">
          <circle cx="34" cy="34" r="7" />
          <circle cx="34" cy="88" r="7" />
          <circle cx="86" cy="46" r="7" />
          <line x1="34" y1="41" x2="34" y2="81" />
          <path d="M 34 62 Q 34 46 79 46" />
        </g>
        <line x1="58" y1="88" x2="100" y2="88" stroke={mut} strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
        <text x="60" y="150" fontSize="13" fontWeight="600" fill={mut} letterSpacing="0.06em" textAnchor="middle" fontFamily="'JetBrains Mono', monospace">PUSH</text>
      </g>

      {/* Central build node with Vercel triangle */}
      <g transform="translate(400, 225)" filter="url(#v-glow)">
        <circle cx="0" cy="0" r="52" fill="#fbf6f5" stroke="#f3e6e3" strokeWidth="2" />
        <circle cx="0" cy="0" r="40" fill="#7a2f1c" opacity="0.1" />
        <path d="M 0 -25 L 25 20 L -25 20 Z" fill="#7a2f1c" />
        <text x="0" y="82" fontSize="13" fontWeight="700" fill="#7a2f1c" letterSpacing="0.06em" textAnchor="middle" fontFamily="'JetBrains Mono', monospace">BUILD</text>
      </g>

      {/* Edge network */}
      <g fill="none">
        {[[588,110],[588,188],[588,262],[600,340]].map((p, i) => (
          <g key={i} transform={`translate(${p[0]}, ${p[1]})`}>
            <circle r="17" fill="#ffffff" stroke={mut} strokeWidth="1.4" />
            <ellipse rx="7.5" ry="17" fill="none" stroke={mut} strokeWidth="1" opacity="0.55" />
            <line x1="-17" y1="0" x2="17" y2="0" stroke={mut} strokeWidth="1" opacity="0.55" />
            <circle r="3" fill="#7a2f1c" />
          </g>
        ))}
        <circle cx="588" cy="188" r="25" fill="none" stroke="#7a2f1c" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
      </g>
      <text x="600" y="405" fontSize="13" fontWeight="600" fill={mut} letterSpacing="0.06em" textAnchor="middle" fontFamily="'JetBrains Mono', monospace">EDGE NETWORK</text>
    </svg>
  );
}

function FigShopify() {
  return (
    <svg viewBox="0 0 800 450" style={{ ...figStyle, transform: 'scale(1.12)', transformOrigin: 'center' }} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <filter id="s-glow" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="s-flow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#7a2f1c" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.15" />
        </linearGradient>
        <marker id="s-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#7a2f1c" opacity="0.7" />
        </marker>
      </defs>

      <g fill="none" stroke="url(#s-flow)" strokeDasharray="4 4" strokeWidth="2">
        <path d="M 224 196 Q 305 196 360 220" />
        <path d="M 224 258 Q 305 258 360 230" />
        <path d="M 440 220 Q 515 175 578 168" markerEnd="url(#s-arrow)" />
        <path d="M 440 232 Q 515 250 578 222" markerEnd="url(#s-arrow)" />
      </g>

      {/* Catalog */}
      <g transform="translate(100, 130)">
        <rect x="12" y="0" width="80" height="100" rx="6" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" transform="rotate(-5 52 50)" />
        <rect x="40" y="24" width="80" height="100" rx="6" fill="#ffffff" stroke={mut} strokeWidth="2" transform="rotate(3 80 74)" />
        <g transform="rotate(3 80 74)">
          <rect x="52" y="36" width="56" height="40" rx="4" fill="#fbf6f5" stroke="#f3e6e3" strokeWidth="1.5" />
          <line x1="52" y1="90" x2="102" y2="90" stroke={mut} strokeWidth="2.5" strokeLinecap="round" opacity="0.45" />
          <line x1="52" y1="103" x2="82" y2="103" stroke="#7a2f1c" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <text x="66" y="158" fontSize="13" fontWeight="600" fill={mut} letterSpacing="0.06em" textAnchor="middle" fontFamily="'JetBrains Mono', monospace">CATALOG</text>
      </g>

      {/* Checkout node with bag */}
      <g transform="translate(400, 225)" filter="url(#s-glow)">
        <circle cx="0" cy="0" r="52" fill="#fbf6f5" stroke="#f3e6e3" strokeWidth="2" />
        <circle cx="0" cy="0" r="40" fill="#7a2f1c" opacity="0.1" />
        <circle cx="0" cy="0" r="30" fill="#7a2f1c" />
        <g transform="translate(0, -1)" stroke="#ffffff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M -14 -6 L -17 15 Q -17 17 -15 17 L 15 17 Q 17 17 17 15 L 14 -6 Z" />
          <path d="M -8 -6 Q -8 -16 0 -16 Q 8 -16 8 -6" />
        </g>
        <text x="0" y="82" fontSize="13" fontWeight="700" fill="#7a2f1c" letterSpacing="0.06em" textAnchor="middle" fontFamily="'JetBrains Mono', monospace">CHECKOUT</text>
      </g>

      {/* Orders / receipt */}
      <g transform="translate(560, 110)">
        <rect x="0" y="0" width="112" height="132" rx="8" fill="#ffffff" stroke={mut} strokeWidth="1.6" />
        <circle cx="22" cy="24" r="8" fill="none" stroke="#7a2f1c" strokeWidth="2" />
        <path d="M 18.5 24 l 2.5 2.5 l 5 -6" fill="none" stroke="#7a2f1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="40" y1="24" x2="94" y2="24" stroke={mut} strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />
        <line x1="20" y1="56" x2="92" y2="56" stroke={mut} strokeWidth="2" strokeLinecap="round" opacity="0.35" />
        <line x1="20" y1="74" x2="80" y2="74" stroke={mut} strokeWidth="2" strokeLinecap="round" opacity="0.35" />
        <line x1="20" y1="92" x2="92" y2="92" stroke={mut} strokeWidth="2" strokeLinecap="round" opacity="0.35" />
        <line x1="20" y1="114" x2="58" y2="114" stroke="#7a2f1c" strokeWidth="2.5" strokeLinecap="round" />
        <text x="56" y="170" fontSize="13" fontWeight="600" fill={mut} letterSpacing="0.06em" textAnchor="middle" fontFamily="'JetBrains Mono', monospace">ORDERS</text>
      </g>
    </svg>
  );
}

/* Styles for the Platforms section now live in globals.css. */

export default function WritingPage() {
  useEffect(() => {
      const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.1});
        document.querySelectorAll('.rv').forEach(el=>io.observe(el));
  }, []);

  return (
    <div className="p-writing">
        <div className="topbar">
          <div className="wrap">
            <a href="/" className="brand">Sala<span>ro</span></a>
            <nav className="nav"><a href="/practice">Practice</a><a href="/work">Work</a><a href="/studio">Studio</a><a href="/writing" className="active">Writing</a><a href="/contact">Contact</a></nav>
            <a href="tel:+447485222490" className="top-cta">Start a project</a>
          </div>
        </div>


        <header className="hero drifting-field">
          <div className="wrap"><div className="grid">
            <div>
              <div className="eyebrow">
                <span className="ic"><svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="12" rx="1"/><line x1="4" y1="20" x2="12" y2="20"/></svg></span>
                <span className="lab a">Essays &amp; field notes</span>
              </div>
              <h1>
                <span className="reveal-line"><span>We turn <span className="it">patterns</span></span></span>
                <span className="reveal-line"><span>into usable language.</span></span>
              </h1>
              <div className="body">
                <p>The work is often technical, but the point is usually simple: help a team make a better decision, explain a system more clearly, or preserve a hard-won lesson before it disappears into the next sprint.</p>
                <p>We write about practical delivery, legacy migration, editorial systems, and the peculiar problems that appear when a business has outgrown its first stack but still needs to move carefully.</p>
              </div>
              <div className="actions"><a href="tel:+447485222490" className="btn-dark">Read the notes <span className="arw">→</span></a></div>
            </div>

            <aside className="note-card rv">
              <div className="kicker lab a">Studio note</div>
              <h3 className="serif">Good writing is <span className="it">operational</span>.</h3>
              <p>It makes hidden decisions visible, preserves context, and gives a team language for what they're shipping and why.</p>
              <div className="cadence">
                <div className="cad-head"><span className="lab">Notes published</span><span className="cad-n serif">42</span></div>
                <div className="cad-bars">
                  <span style={{height: '28%', animationDelay: '.05s'}}></span>
                  <span style={{height: '40%', animationDelay: '.12s'}}></span>
                  <span style={{height: '36%', animationDelay: '.19s'}}></span>
                  <span style={{height: '54%', animationDelay: '.26s'}}></span>
                  <span style={{height: '60%', animationDelay: '.33s'}}></span>
                  <span style={{height: '74%', animationDelay: '.40s'}}></span>
                  <span style={{height: '86%', animationDelay: '.47s'}}></span>
                  <span style={{height: '100%', animationDelay: '.54s'}}></span>
                </div>
                <div className="cad-axis"><span>2019</span><span>2026</span></div>
              </div>
              <ul>
                <li>Practical, not ornamental</li>
                <li>Clear about constraints</li>
                <li>Useful long after the launch</li>
              </ul>
              <a href="tel:+447485222490" className="btn-dark">Start a conversation</a>
            </aside>
          </div></div>
        </header>

        <div className="signal-line"></div>

        <section className="legible band contour-drift">
          <div className="wrap"><div className="split-head">
            <div className="rv">
              <div className="eyebrow">
                <span className="ic"><svg viewBox="0 0 24 24"><path d="M5 19 L12 5 L19 19"/><line x1="8" y1="14" x2="16" y2="14"/></svg></span>
                <span className="lab a">Writing for founders &amp; teams</span>
              </div>
              <h2 className="serif">We write to make <span className="it">hard choices</span> legible.</h2>
              <div className="body">
                <p>We publish notes when they help a client, a founder, or a team think more clearly about what they're building. Sometimes that means unpacking the migration path from DNN. Sometimes it means making a product strategy more honest.</p>
                <p>The tone is practical. The goal is not polish for its own sake, but a cleaner way to decide and ship.</p>
              </div>
            </div>
            <div className="entries rv">
              <div className="entry"><div className="k lab">Measured pace</div><p>We write with the same care we give to product decisions: slow enough to be accurate, fast enough to be useful.</p></div>
              <div className="entry"><div className="k lab">Clear ownership</div><p>The writing is usually tied to a real problem, not a generic thought piece or a content calendar.</p></div>
              <div className="entry"><div className="k lab">Useful in the room</div><p>The value is simple: the next conversation starts with less ambiguity and better context.</p></div>
            </div>
          </div></div>
        </section>


        <section className="worknotes band">
          <div className="wrap">
            <div className="wn-head rv">
              <div>
                <div className="eyebrow">
                  <span className="ic"><svg viewBox="0 0 24 24"><path d="M4 6 H20 L18 18 H6 Z"/><line x1="9" y1="10" x2="15" y2="10"/></svg></span>
                  <span className="lab a">Selected notes</span>
                </div>
                <h2 className="serif">A small archive of <span className="it">useful</span> thinking.</h2>
              </div>
              <p className="desc">A mix of process notes, practical essays and quiet observations from the studio.</p>
            </div>

            <div className="wn-grid rv">
              <article className="wn-card">
                <div className="wn-top">
                  <span className="wn-ic"><svg viewBox="0 0 24 24"><path d="M6 3 H14 L18 7 V21 H6 Z"/><path d="M14 3 V7 H18"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="14" y2="16"/></svg></span>
                  <span className="wn-kick">01 · Essay</span>
                </div>
                <h3 className="serif">Why a ten-year-old with a template will eat most agency work</h3>
                <p>The agency market has changed. The question is no longer whether a template can do the basics, but what remains for the studio that still knows how to make decisions.</p>
                <div className="wn-tags"><span>Less decorative work</span><span>More operational value</span><span>Clearer pricing logic</span></div>
              </article>

              <article className="wn-card">
                <div className="wn-top">
                  <span className="wn-ic"><svg viewBox="0 0 24 24"><path d="M12 21 s7-6.5 7-12 a7 7 0 0 0-14 0 c0 5.5 7 12 7 12 Z"/><circle cx="12" cy="9" r="2.5"/></svg></span>
                  <span className="wn-kick">02 · Field note</span>
                </div>
                <h3 className="serif">DNN in 2026: it&apos;s still out there, and it still needs help</h3>
                <p>A practical note on the surprising number of organisations still running DNN, and how to move them without losing search rankings, history or trust.</p>
                <div className="wn-tags"><span>Migration planning</span><span>SEO continuity</span><span>Editorial preservation</span></div>
              </article>

              <article className="wn-card">
                <div className="wn-top">
                  <span className="wn-ic"><svg viewBox="0 0 24 24"><path d="M12 6 C10 4.5 7 4.5 4 5 V18 C7 17.5 10 17.5 12 19 C14 17.5 17 17.5 20 18 V5 C17 4.5 14 4.5 12 6 Z"/><line x1="12" y1="6" x2="12" y2="19"/></svg></span>
                  <span className="wn-kick">03 · Primer</span>
                </div>
                <h3 className="serif">AI for SMEs: a fortnight&apos;s primer</h3>
                <p>A small reading list and a set of concrete tools for founders who want to be more honest about AI than the online discourse allows.</p>
                <div className="wn-tags"><span>Usefulness over hype</span><span>Concrete experiments</span><span>Shared language</span></div>
              </article>

              <article className="wn-card">
                <div className="wn-top">
                  <span className="wn-ic"><svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="16" rx="2"/><line x1="4" y1="9" x2="20" y2="9"/><line x1="9" y1="3" x2="9" y2="6"/><line x1="15" y1="3" x2="15" y2="6"/><circle cx="12" cy="15" r="1.6"/></svg></span>
                  <span className="wn-kick">04 · Diary</span>
                </div>
                <h3 className="serif">Days, not months: a build diary</h3>
                <p>An unusually detailed account of a practical build, from the first call to the live deployment, with the human steps made visible.</p>
                <div className="wn-tags"><span>Real delivery sequence</span><span>Human review points</span><span>Clearer rollout logic</span></div>
              </article>
            </div>
          </div>
        </section>


        <section className="platforms band">
          <div className="wrap">
            <div className="split-head rv">
              <div>
                <div className="eyebrow">
                  <span className="ic"><svg viewBox="0 0 24 24"><path d="M4 7 L12 3 L20 7 L20 17 L12 21 L4 17 Z"/><line x1="4" y1="7" x2="12" y2="12"/><line x1="20" y1="7" x2="12" y2="12"/><line x1="12" y1="12" x2="12" y2="21"/></svg></span>
                  <span className="lab a">On the tools we build with</span>
                </div>
                <h2 className="serif">Notes on the <span className="it">platforms</span> we trust.</h2>
              </div>
              <p className="body">Two platforms carry a lot of our recent work. Here&apos;s why we reach for them — learned from shipping real stores and sites, not from a landing page.</p>
            </div>

            <div className="plat-grid rv">
              <article className="plat-card p1">
                <div className="plat-fig"><FigVercel /></div>
                <div className="plat-body">
                  <div className="k lab a">01 / Hosting &amp; delivery</div>
                  <h3 className="serif">Vercel: ship on every push, serve from the edge</h3>
                  <p>Eden Aromate runs on Vercel, and it&apos;s our default for front-end hosting. Every commit builds and deploys on its own, with a live preview URL so the whole team can review the real thing before it reaches customers.</p>
                  <ul className="plat-list">
                    <li>Push to Git and it deploys — every branch and pull request gets its own preview link.</li>
                    <li>A global edge network serves pages close to the visitor, so first loads feel instant.</li>
                    <li>Built by the team behind Next.js, so framework support is genuinely first-class.</li>
                    <li>Serverless and edge functions scale on demand — no servers to patch or babysit.</li>
                    <li>Automatic HTTPS and one-click rollback to any earlier deployment.</li>
                    <li>Built-in Web Vitals and analytics keep performance honest over time.</li>
                  </ul>
                </div>
              </article>

              <article className="plat-card p2">
                <div className="plat-fig"><FigShopify /></div>
                <div className="plat-body">
                  <div className="k lab a">02 / Commerce</div>
                  <h3 className="serif">Shopify: a commerce engine that simply stays up</h3>
                  <p>Clever Botanics and Eden Aromate both sell through Shopify. For a real store it removes the two hardest problems — a secure, compliant checkout and staying online through a sale-day spike — so we can spend our time on the storefront.</p>
                  <ul className="plat-list">
                    <li>A hosted, PCI-compliant checkout that handles payments, fraud and tax for you.</li>
                    <li>Proven reliability through traffic spikes, with no server maintenance to own.</li>
                    <li>Multi-currency, multi-region selling out of the box — GBP, EUR, CHF and USD on one store.</li>
                    <li>A deep theme and app ecosystem to extend a store without rebuilding it.</li>
                    <li>An admin non-technical staff can actually run — orders, inventory and shipping in one place.</li>
                    <li>Liquid theming, and a headless path when a brand needs something bespoke.</li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
        </section>


        <section className="alongside band">
          <div className="wrap">
            <div className="split-head rv">
              <div>
                <div className="eyebrow">
                  <span className="ic"><svg viewBox="0 0 24 24"><circle cx="9" cy="9" r="3"/><path d="M4 19 a5 5 0 0 1 10 0"/><path d="M16 7 a3 3 0 0 1 0 6"/></svg></span>
                  <span className="lab a">Studio services</span>
                </div>
                <h2 className="serif">We also work <span className="it">alongside</span> teams.</h2>
              </div>
              <p className="body">The writing is part of the same practice as the build work — a way of clarifying the next move before the next move gets expensive.</p>
            </div>

            <div className="cols3 rv">
              <div className="svc3">
                <div className="ic"><svg viewBox="0 0 24 24"><path d="M2 12 s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="2.5"/></svg></div>
                <div className="k lab">White label</div>
                <h4 className="serif">Behind the scenes</h4>
                <p>We work entirely for you with no direct contact with your client, handling the implementation and the thinking without making a fuss.</p>
              </div>
              <div className="svc3">
                <div className="ic"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="7" height="16" rx="1"/><rect x="13" y="4" width="7" height="16" rx="1"/></svg></div>
                <div className="k lab">Partnership</div>
                <h4 className="serif">Side by side</h4>
                <p>We join meetings, help shape the story, and stay close to the decisions that matter most as the project moves along.</p>
              </div>
              <div className="svc3">
                <div className="ic"><svg viewBox="0 0 24 24"><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><line x1="8" y1="11" x2="16" y2="7"/><line x1="8" y1="13" x2="16" y2="17"/></svg></div>
                <div className="k lab">Referral</div>
                <h4 className="serif">Pass it over</h4>
                <p>If you have a project you want to hand off cleanly, we can take it on and keep the momentum going without the usual handover drag.</p>
              </div>
            </div>
          </div>
        </section>


        <section className="cta">
          <div className="wrap">
            <div className="rv">
              <div className="lab">Ready to start?</div>
              <h2 className="serif">Your project <em>next</em>.</h2>
              <p className="body">Whether it's website design, an app, or a partnership that needs an experienced voice, reach out and we'll respond within one working day.</p>
            </div>
            <div className="btns rv">
              <a href="tel:+447485222490" className="btn-primary">Start a conversation <span>→</span></a>
              <a href="tel:+447485222490" className="btn-ghost">07485 222490</a>
            </div>
          </div>
        </section>


        <footer className="dark-lattice">
          <div className="cols">
            <div className="foot-top">
              <div>
                <div className="fbrand">Salaro</div>
                <p>A UK-led digital consultancy. Practising since 1995.</p>
              </div>
              <div className="fcol"><h5>Practice</h5><a href="/build">Build</a><a href="/migrate">Migrate</a><a href="/advise">Advise</a></div>
              <div className="fcol"><h5>Work</h5><a href="/work">Recent projects</a><a href="/archive">Archive</a></div>
              <div className="fcol"><h5>Contact</h5><a href="mailto:team@salaro.com">team@salaro.com</a><span>Guildford, Surrey</span><a href="https://uk.linkedin.com/in/salaro">LinkedIn</a></div>
            </div>
            <div className="foot-bot">
              <span className="lab">© 2026 Salaro Ltd · Registered in England &amp; Wales · Guildford, Surrey</span>
              <span className="lab">Practising since 1995</span>
            </div>
          </div>
        </footer>
    </div>
  );
}