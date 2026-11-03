'use client';
import { useEffect } from 'react';

export default function WorkPage() {
  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.rv').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="p-work">
      <div className="topbar">
        <div className="wrap">
          <a href="/" className="brand">Sala<span>ro</span></a>
          <nav className="nav">
            <a href="/practice">Practice</a>
            <a href="/work" className="active">Work</a>
            <a href="/studio">Studio</a>
            <a href="/writing">Writing</a>
            <a href="/contact">Contact</a>
          </nav>
          <a href="tel:+447485222490" className="top-cta">Start a project</a>
        </div>
      </div>

      <header className="hero drifting-field">
        <div className="wrap">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="eyebrow lab a">Selected work</div>
              <h1 className="serif">
                <span className="reveal-line"><span>Built over time.</span></span>
                <span className="reveal-line"><span><span className="rust">Shaped</span> with care.</span></span>
              </h1>
              <p className="sub">We work across strategy, product direction, content systems, and digital platform delivery. The work below reflects the kinds of problems we help teams solve, from early thinking through long-term product care.</p>
            </div>
            <div className="hero-viz">
              <div className="viz-cap"><span className="lab a">Work overview</span><span className="lab">Selected themes</span></div>
              <div className="viz-fig"><span className="serif">6</span><span className="lab">focus areas</span></div>
              <div className="barchart">
                <span className="bar" style={{ height: '46%' }}></span>
                <span className="bar" style={{ height: '68%' }}></span>
                <span className="bar hot" style={{ height: '92%' }}></span>
                <span className="bar" style={{ height: '61%' }}></span>
                <span className="bar" style={{ height: '78%' }}></span>
              </div>
              <div className="axis"><span>Plan</span><span>Design</span><span>Build</span><span>Care</span></div>
              <div className="kpis">
                <div><b className="serif">30+</b><span>Years</span></div>
                <div><b className="serif">100+</b><span>Products</span></div>
                <div><b className="serif">UK-led</b><span>Direction</span></div>
              </div>
            </div>
          </div>
          <a href="#s01" className="scroll"><span className="lab">Scroll for more</span><span className="chev"></span></a>
        </div>
      </header>

      <div className="signal-line"></div>

      <section className="row contour-drift" id="s01">
        <div className="wrap"><div className="grid">
          <div className="rowhead rv">
            <div className="num lab a">(01)</div>
            <h2 className="serif">Quietly practical, <span className="rust">always considered</span>.</h2>
          </div>
          <div className="content rv">
            <p>The work we do is rarely loud. It is usually about making complex things easier to understand, maintain, and grow — systems that support teams and platforms that hold up over time.</p>
            <p>Strategy-led, clearly structured, and built to be maintained long after launch. We stay close to the work and to the people behind it.</p>
            <div className="caps">
              <div className="lab">Focus areas span</div>
              <div className="cap-tags">
                <span>Content systems</span><span>Product direction</span><span>Platform delivery</span><span>Product care</span><span>Migration</span>
              </div>
            </div>
          </div>
        </div></div>
      </section>

      <section className="row">
        <div className="wrap"><div className="grid">
          <div className="rowhead rv">
            <div className="num lab a">(02)</div>
            <h2 className="serif">What we help <span className="rust">shape</span></h2>
            <p className="sub">Four recurring themes across the platforms we plan, build, and look after.</p>
          </div>
          <div className="content rv">
            <div className="cards">

              <div className="card">
                <div className="thumb">
                  <span className="tag-tl">01</span>
                  <svg className="art" viewBox="0 0 240 168" role="img" aria-label="Stacked content layers">
                    <rect className="s ln" x="76" y="18" width="124" height="90" rx="3" />
                    <rect className="s ln" x="64" y="30" width="124" height="90" rx="3" />
                    <rect className="s pane" x="52" y="42" width="124" height="90" rx="3" />
                    <line className="s hot" x1="68" y1="64" x2="146" y2="64" />
                    <line className="s" x1="68" y1="82" x2="160" y2="82" />
                    <line className="s" x1="68" y1="98" x2="132" y2="98" />
                    <line className="s" x1="68" y1="114" x2="150" y2="114" />
                  </svg>
                </div>
                <div className="meta"><h3 className="serif">Content systems</h3></div>
                <p className="card-copy">Structured models and editing tools teams can actually maintain.</p>
              </div>

              <div className="card">
                <div className="thumb">
                  <span className="tag-tl">02</span>
                  <svg className="art" viewBox="0 0 240 168" role="img" aria-label="A path rising through decision points">
                    <line className="s ln" x1="40" y1="140" x2="200" y2="140" />
                    <path className="s dash" d="M48,124 L96,88 L144,102 L188,40" />
                    <circle className="s" cx="48" cy="124" r="4" />
                    <circle className="s" cx="96" cy="88" r="4" />
                    <circle className="s" cx="144" cy="102" r="4" />
                    <circle className="fill-hot" cx="188" cy="40" r="5.5" />
                    <path className="s hot" d="M170,44 L188,40 L184,58" />
                  </svg>
                </div>
                <div className="meta"><h3 className="serif">Product direction</h3></div>
                <p className="card-copy">Clear priorities, sound decisions, and a route the team can follow.</p>
              </div>

              <div className="card">
                <div className="thumb">
                  <span className="tag-tl">03</span>
                  <svg className="art" viewBox="0 0 240 168" role="img" aria-label="Stacked platform layers on a spine">
                    <line className="s ln" x1="46" y1="42" x2="46" y2="126" />
                    <line className="s ln" x1="46" y1="42" x2="64" y2="42" />
                    <line className="s ln" x1="46" y1="84" x2="64" y2="84" />
                    <line className="s ln" x1="46" y1="126" x2="64" y2="126" />
                    <rect className="s pane" x="64" y="26" width="130" height="32" rx="3" />
                    <rect className="s pane" x="64" y="68" width="130" height="32" rx="3" />
                    <rect className="s pane" x="64" y="110" width="130" height="32" rx="3" />
                    <circle className="fill-mute" cx="80" cy="42" r="3.5" />
                    <circle className="fill-hot" cx="80" cy="84" r="3.5" />
                    <circle className="fill-mute" cx="80" cy="126" r="3.5" />
                    <line className="s" x1="96" y1="42" x2="172" y2="42" />
                    <line className="s hot" x1="96" y1="84" x2="150" y2="84" />
                    <line className="s" x1="96" y1="126" x2="164" y2="126" />
                  </svg>
                </div>
                <div className="meta"><h3 className="serif">Platform delivery</h3></div>
                <p className="card-copy">Resilient foundations built for performance and long-term support.</p>
              </div>

              <div className="card">
                <div className="thumb">
                  <span className="tag-tl">04</span>
                  <svg className="art" viewBox="0 0 240 168" role="img" aria-label="A steady pulse held inside a ring">
                    <circle className="s ln" cx="120" cy="84" r="58" />
                    <circle className="s ring" cx="120" cy="84" r="58" />
                    <path className="s hot" d="M70,84 H96 L106,60 L120,110 L132,84 H170" />
                    <circle className="fill-hot" cx="170" cy="84" r="4" />
                  </svg>
                </div>
                <div className="meta"><h3 className="serif">Product care</h3></div>
                <p className="card-copy">We stay involved after launch so the platform keeps serving the business.</p>
              </div>

            </div>
          </div>
        </div></div>
      </section>

      <section className="row">
        <div className="wrap"><div className="grid">
          <div className="rowhead rv">
            <div className="num lab a">(03)</div>
            <h2 className="serif">How we think about <span className="rust">the work</span></h2>
            <p className="sub">Six principles that keep delivery steady, visible, and aligned.</p>
          </div>
          <div className="content rv">
            <div className="loc">
              <span className="ic"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" /><path d="M9 12 l2 2 4-4" /></svg></span>
              <div><h4 className="serif">Strategy-led</h4><p>We begin with the problem, not the trend, and shape the route forward from there.</p></div>
            </div>
            <div className="loc">
              <span className="ic"><svg viewBox="0 0 24 24"><path d="M8 9 l-4 3 4 3 M16 9 l4 3 -4 3 M13 7 l-2 10" /></svg></span>
              <div><h4 className="serif">Clear systems</h4><p>We shape the work so it stays understandable and maintainable long after launch.</p></div>
            </div>
            <div className="loc">
              <span className="ic"><svg viewBox="0 0 24 24"><path d="M4 16 l5-5 4 4 7-8" /><path d="M20 7 h-4 M20 7 v4" /></svg></span>
              <div><h4 className="serif">Long-term care</h4><p>We remain useful after launch, not just at kickoff, and keep progress visible.</p></div>
            </div>
            <p className="loc-note">Direct collaboration and measured progress mean the work stays close to the people behind it — practical delivery focused on what will work well in the real world.</p>
          </div>
        </div></div>
      </section>

      <section className="trust">
        <div className="wrap">
          <div className="rv">
            <div className="num lab a">(04)</div>
            <h2 className="serif">A steady, <span className="rust">four-stage</span> process</h2>
            <p className="sub">Calm structure, transparent progress, and attention to the details that make a difference.</p>
          </div>
          <div className="trust-cols four rv">
            <div className="tcol"><div className="n">01</div><h4 className="serif">Listen</h4><p>We begin by understanding the business, the audience, the goals, and the constraints that matter.</p></div>
            <div className="tcol"><div className="n">02</div><h4 className="serif">Frame</h4><p>We shape the route forward so decisions are clear and priorities are sound.</p></div>
            <div className="tcol"><div className="n">03</div><h4 className="serif">Build</h4><p>We deliver with calm structure and attention to the details that make a difference.</p></div>
            <div className="tcol"><div className="n">04</div><h4 className="serif">Support</h4><p>We stay involved after launch so the platform continues to serve the business well.</p></div>
          </div>
        </div>
      </section>

      <section className="qband">
        <div className="wrap rv">
          <blockquote className="serif">The best projects leave a team stronger than before — more confident in the product, the process, and the next step.</blockquote>
          <div className="who">Salaro approach</div>
        </div>
      </section>

      <section className="exp">
        <div className="wrap">
          <div className="head rv">
            <div className="num lab a">(05)</div>
            <h2 className="serif">A record of <span className="rust">steady delivery</span></h2>
          </div>
          <div className="metrics-grid rv">
            <div className="metric-card"><b className="serif">30+</b><div className="lab">Years of practice</div></div>
            <div className="metric-card"><b className="serif">100+</b><div className="lab">Digital products</div></div>
            <div className="metric-card"><b className="serif">24/7</b><div className="lab">Support mindset</div></div>
            <div className="metric-card"><b className="serif">99.9%</b><div className="lab">Reliability focus</div></div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <div className="rv">
            <div className="lab">Ready to talk?</div>
            <h2 className="serif">Let's talk about the <em>next step</em>.</h2>
            <div className="btns">
              <a href="tel:+447485222490" className="btn-primary">Start a conversation <span>→</span></a>
              <a href="/contact" className="btn-ghost">Get in touch</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="dark-lattice">
        <div className="cols">
          <div className="foot-top">
            <div>
              <a href="/" className="fbrand">Salaro</a>
              <p>Strategy, product direction, and long-term platform care. Practising since 1995.</p>
            </div>
            <div className="fcol"><h5>Sitemap</h5><a href="/practice">Practice</a><a href="/work">Work</a><a href="/studio">Studio</a><a href="/writing">Writing</a></div>
            <div className="fcol"><h5>Contact</h5><a href="tel:+447485222490">+44 7485 222490</a><a href="/contact">Start a project</a></div>
            <div className="fcol"><h5>Legal</h5><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div>
          </div>
          <div className="foot-bot">
            <span className="lab">© 2026 Salaro Ltd · Registered in England &amp; Wales · Guildford, Surrey</span>
            <span className="lab">UK-led practice</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
