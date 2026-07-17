'use client';
import { useEffect } from 'react';

export default function PracticePage() {
  useEffect(() => {
      const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.1});
        document.querySelectorAll('.rv').forEach(el=>io.observe(el));
  }, []);

  return (
    <div className="p-practice">
        <div className="topbar">
          <div className="wrap">
            <a href="/" className="brand">Sala<span>ro</span></a>
            <nav className="nav"><a href="/practice" className="active">Practice</a><a href="/work">Work</a><a href="/studio">Studio</a><a href="/writing">Writing</a><a href="/contact">Contact</a></nav>
            <a href="tel:+447485222490" className="top-cta">Start a project</a>
          </div>
        </div>


        <header className="hero drifting-field">
          <div className="wrap">
            <div className="hero-inner">
              <div className="hero-copy">
                <div className="eyebrow lab a">Our identity</div>
                <h1 className="serif">
                  <span className="reveal-line"><span>Built by People.</span></span>
                  <span className="reveal-line"><span><span className="rust">Engineered</span> for</span></span>
                  <span className="reveal-line"><span>Performance.</span></span>
                </h1>
                <p className="sub">Behind every exceptional digital platform is a dedicated collective of strategists, developers, visual artists, and project directors working with a calm approach.</p>
              </div>
              <div className="hero-viz">
                <div className="viz-cap"><span className="lab a">Performance index</span><span className="lab">2003 — 2026</span></div>
                <svg className="linechart" viewBox="0 0 400 210" aria-hidden="true">
                  <line className="grid" x1="30" y1="180" x2="382" y2="180"/>
                  <line className="grid" x1="30" y1="130" x2="382" y2="130"/>
                  <line className="grid" x1="30" y1="80" x2="382" y2="80"/>
                  <path className="area" d="M30,153 L88,129 L146,138 L204,102 L262,84 L320,60 L378,33 L378,180 L30,180 Z"/>
                  <path className="line" d="M30,153 L88,129 L146,138 L204,102 L262,84 L320,60 L378,33"/>
                  <circle className="end" cx="378" cy="33" r="4"/>
                </svg>
                <div className="axis"><span>2003</span><span>2012</span><span>2020</span><span>2026</span></div>
                <div className="kpis">
                  <div><b className="serif">99.9%</b><span>Reliability</span></div>
                  <div><b className="serif">24/7</b><span>Support</span></div>
                  <div><b className="serif">UK-led</b><span>Strategy</span></div>
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
              <h2 className="serif">We approach technical delivery with <span className="rust">absolute precision</span>.</h2>
            </div>
            <div className="content rv">
              <p>We firmly believe that impactful software engineering is rooted in authentic relationships. To us, technology should always be accompanied by intuitive, responsive, and collaborative client service.</p>
              <p>We shape bespoke digital ecosystems around your goals, combining practical technical delivery with resilient foundations that are built to last.</p>
            </div>
          </div></div>
        </section>


        <section className="row">
          <div className="wrap"><div className="grid">
            <div className="rowhead rv">
              <div className="num lab a">(02)</div>
              <h2 className="serif">Practising since <span className="rust">1995</span></h2>
            </div>
            <div className="content rv">
              <p>Salaro has been building thoughtful digital products since 1995, working with clients who need clarity, quality, and a calm approach to change. Our background in design and digital delivery gives us a strong grounding in both product thinking and practical implementation.</p>
              <p>We specialise in modernising legacy frameworks into fluid, high-conversion web experiences, intuitive content systems, custom e-commerce products, and cohesive digital identities. Our work is guided by UK-led strategy supported by an international development team.</p>
              <div className="caps">
                <div className="lab">Cross-industry capabilities span</div>
                <div className="cap-tags">
                  <span>Finance</span><span>Hospitality</span><span>Premium Retail</span><span>Manufacturing</span><span>Corporate Services</span>
                </div>
              </div>
            </div>
          </div></div>
        </section>


        <section className="row">
          <div className="wrap"><div className="grid">
            <div className="rowhead rv">
              <div className="num lab a">(03)</div>
              <h2 className="serif">Global Capability. <span className="rust">Uninterrupted</span> Support.</h2>
              <p className="sub">True operational agility requires seamless execution across borders. Salaro addresses this through a synchronised international ecosystem.</p>
            </div>
            <div className="content rv">
              <div className="loc">
                <span className="ic"><svg viewBox="0 0 24 24"><path d="M12 22 C12 22 5 14 5 9 a7 7 0 0 1 14 0 C19 14 12 22 12 22Z"/><circle cx="12" cy="9" r="2.5"/></svg></span>
                <div><h4 className="serif">Salaro United Kingdom</h4><p>UK-led strategy, client partnership, and product direction for the work that matters most.</p></div>
              </div>
              <div className="loc">
                <span className="ic"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12 H21 M12 3 a14 14 0 0 1 0 18 a14 14 0 0 1 0 -18"/></svg></span>
                <div><h4 className="serif">International delivery team</h4><p>An international development team supports implementation, systems thinking, and thoughtful product care.</p></div>
              </div>
              <p className="loc-note">By combining UK-led strategy with an international delivery team, we maintain a transparent and dependable workflow that keeps the work moving without unnecessary complexity.</p>
            </div>
          </div></div>
        </section>


        <section className="trust">
          <div className="wrap">
            <div className="rv">
              <div className="num lab a">(04)</div>
              <h2 className="serif">Why growing businesses <span className="rust">choose</span> Salaro</h2>
              <p className="sub">Choosing a digital partner is a serious decision, and it helps when the process feels calm, clear and practical.</p>
            </div>
            <div className="trust-cols rv">
              <div className="tcol"><div className="n">01</div><h4 className="serif">Transparent Execution</h4><p>We eliminate project ambiguity through rigorous management methodologies, keeping you fully informed at every milestone.</p></div>
              <div className="tcol"><div className="n">02</div><h4 className="serif">Practical Partnership</h4><p>We stay close to the work, make clear recommendations, and help teams move from idea to delivery without the usual agency friction.</p></div>
              <div className="tcol"><div className="n">03</div><h4 className="serif">Measured Delivery</h4><p>Thoughtful planning, reliable implementation, and clear communication reduce risk while keeping the experience calm and effective.</p></div>
            </div>
          </div>
        </section>


        <section className="qband">
          <div className="wrap rv">
            <blockquote className="serif">We build bespoke digital products with clear thinking, calm delivery, and no unnecessary complexity.</blockquote>
          </div>
        </section>


        <section className="exp">
          <div className="wrap">
            <div className="head rv">
              <div className="num lab a">(05)</div>
              <h2 className="serif">Areas of <span className="rust">Expertise</span></h2>
            </div>
            <div className="exp-grid rv">
              <div className="exp-item">
                <span className="ic"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M9 12 l2 2 4-4"/></svg></span>
                <div><h4 className="serif">Bespoke UI/UX Design &amp; Brand Strategy</h4><p>Crafting visual identities that resonate and interfaces that convert.</p></div>
              </div>
              <div className="exp-item">
                <span className="ic"><svg viewBox="0 0 24 24"><path d="M8 9 l-4 3 4 3 M16 9 l4 3 -4 3 M13 7 l-2 10"/></svg></span>
                <div><h4 className="serif">Practical Web &amp; Application Architecture</h4><p>Resilient technical foundations designed for performance, clarity, and long-term support.</p></div>
              </div>
              <div className="exp-item">
                <span className="ic"><svg viewBox="0 0 24 24"><rect x="7" y="3" width="10" height="18" rx="2"/><line x1="10" y1="18" x2="14" y2="18"/></svg></span>
                <div><h4 className="serif">Mobile Software Engineering</h4><p>Fluid, high-conversion mobile environments built for modern users.</p></div>
              </div>
              <div className="exp-item">
                <span className="ic"><svg viewBox="0 0 24 24"><path d="M4 16 l5-5 4 4 7-8"/><path d="M20 7 h-4 M20 7 v4"/></svg></span>
                <div><h4 className="serif">Targeted Digital Acquisition &amp; Marketing</h4><p>Strategic campaigns that drive measurable business outcomes.</p></div>
              </div>
            </div>
          </div>
        </section>


        <section className="cta">
          <div className="wrap">
            <div className="rv">
              <div className="lab">Ready to start?</div>
              <h2 className="serif">Let's build something <em>exceptional</em>.</h2>
              <div className="btns">
                <a href="tel:+447485222490" className="btn-primary">Start a conversation <span>→</span></a>
                <a href="tel:+447485222490" className="btn-ghost">07485 222490</a>
              </div>
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
              <div className="fcol"><h5>Contact</h5><a href="mailto:team@salaro.com">team@salaro.com</a><span>Guildford, Surrey</span><a href="https://www.linkedin.com">LinkedIn</a></div>
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
