'use client';
import { useEffect } from 'react';

export default function StudioPage() {
  useEffect(() => {
      const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.1});
      document.querySelectorAll('.rv').forEach(el=>io.observe(el));
  }, []);

  return (
    <div className="p-studio">
        <div className="topbar">
          <div className="wrap">
            <a href="/" className="brand">Sala<span>ro</span></a>
            <nav className="nav"><a href="/practice">Practice</a><a href="/work">Work</a><a href="/studio" className="active">Studio</a><a href="/writing">Writing</a><a href="/contact">Contact</a></nav>
            <a href="tel:+447485222490" className="top-cta">Start a project</a>
          </div>
        </div>


        <header className="hero drifting-field">
          <div className="wrap">
            <div className="hero-inner">
              <div className="hero-copy">
                <div className="eyebrow lab a">Studio / Services &amp; approach</div>
                <h1 className="serif">
                  <span className="reveal-line"><span>A <span className="it">studio</span> for speed,</span></span>
                  <span className="reveal-line"><span>clarity, and scale.</span></span>
                </h1>
                <p className="sub">Salaro brings UK-led strategy, thoughtful delivery and practical systems to ambitious teams that need more than a template.</p>
              </div>
              <div className="hero-viz">
                <div className="viz-cap"><span className="lab a">Delivery profile</span><span className="lab">Live studio</span></div>
                <div className="rings">
                  <svg viewBox="0 0 200 200" aria-hidden="true">
                    <g transform="rotate(-90 100 100)">
                      <circle className="ring-t" cx="100" cy="100" r="80"/>
                      <circle className="ring-v v1" cx="100" cy="100" r="80" style={{'--dash': '502.66', '--off': '40.2'}}/>
                      <circle className="ring-t" cx="100" cy="100" r="62"/>
                      <circle className="ring-v v2" cx="100" cy="100" r="62" style={{'--dash': '389.56', '--off': '46.7'}}/>
                      <circle className="ring-t" cx="100" cy="100" r="44"/>
                      <circle className="ring-v v3" cx="100" cy="100" r="44" style={{'--dash': '276.46', '--off': '55.3'}}/>
                    </g>
                  </svg>
                  <div className="legend">
                    <div><span className="dot d1"></span>Thoughtful delivery</div>
                    <div><span className="dot d2"></span>Clear systems</div>
                    <div><span className="dot d3"></span>Steady delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="signal-line"></div>

        <section className="svc contour-drift">
          <div className="wrap"><div className="grid" style={{gridTemplateColumns:'1.1fr 0.9fr', gap:'48px', alignItems:'center'}}>
            <div className="rv svc-copy">
              <div className="svc-node">
                <span className="svc-node-dot"></span>
                <div className="num lab">01 / 05</div>
              </div>
              <h3 className="serif">Intelligent content management</h3>
              <p className="desc">Bespoke content systems, thoughtful editorial workflows and flexible publishing foundations that keep teams moving without unnecessary complexity.</p>
              <a href="#" className="arwlink">See details <span className="arw">→</span></a>
            </div>
            <div className="rv" style={{border:'1px solid var(--border, #d8d6cf)', borderRadius:'10px', padding:'32px'}}>
              <div className="lab" style={{marginBottom:'16px'}}>What's included</div>
              <ul style={{listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:'14px'}}>
                <li>Bespoke CMS delivery</li>
                <li>Flexible content architecture</li>
                <li>Thoughtful integrations</li>
                <li>Modern editorial workflows</li>
                <li>Clear team enablement</li>
              </ul>
            </div>
          </div></div>
        </section>

        <section className="svc">
          <div className="wrap"><div className="grid" style={{gridTemplateColumns:'1.1fr 0.9fr', gap:'48px', alignItems:'center'}}>
            <div className="rv svc-copy">
              <div className="svc-node">
                <span className="svc-node-dot"></span>
                <div className="num lab">02 / 05</div>
              </div>
              <h3 className="serif">Next-gen cross-platform engineering</h3>
              <p className="desc">High-performance web and mobile experiences built with thoughtful product decisions, clear architecture, and a calm delivery process.</p>
              <a href="#" className="arwlink">See details <span className="arw">→</span></a>
            </div>
            <div className="rv" style={{border:'1px solid var(--border, #d8d6cf)', borderRadius:'10px', padding:'32px'}}>
              <div className="lab" style={{marginBottom:'16px'}}>What's included</div>
              <ul style={{listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:'14px'}}>
                <li>Web and mobile delivery</li>
                <li>Thoughtful product architecture</li>
                <li>Clear component systems</li>
                <li>Scalable product foundations</li>
                <li>Design-to-development alignment</li>
              </ul>
            </div>
          </div></div>
        </section>

        <section className="svc">
          <div className="wrap"><div className="grid" style={{gridTemplateColumns:'1.1fr 0.9fr', gap:'48px', alignItems:'center'}}>
            <div className="rv svc-copy">
              <div className="svc-node">
                <span className="svc-node-dot"></span>
                <div className="num lab">03 / 05</div>
              </div>
              <h3 className="serif">Algorithmic PPC &amp; growth systems</h3>
              <p className="desc">Practical growth support and clear performance reviews that help teams make better decisions without unnecessary noise.</p>
              <a href="#" className="arwlink">See details <span className="arw">→</span></a>
            </div>
            <div className="rv" style={{border:'1px solid var(--border, #d8d6cf)', borderRadius:'10px', padding:'32px'}}>
              <div className="lab" style={{marginBottom:'16px'}}>What's included</div>
              <ul style={{listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:'14px'}}>
                <li>Performance reviews</li>
                <li>Channel strategy guidance</li>
                <li>Conversion focus</li>
                <li>Measurement planning</li>
                <li>Clear next steps</li>
              </ul>
            </div>
          </div></div>
        </section>

        <section className="svc">
          <div className="wrap"><div className="grid" style={{gridTemplateColumns:'1.1fr 0.9fr', gap:'48px', alignItems:'center'}}>
            <div className="rv svc-copy">
              <div className="svc-node">
                <span className="svc-node-dot"></span>
                <div className="num lab">04 / 05</div>
              </div>
              <h3 className="serif">Reliable digital foundations</h3>
              <p className="desc">Practical platform upgrades, resilient foundations and thoughtful extensions that support speed, clarity and steady growth.</p>
              <a href="#" className="arwlink">See details <span className="arw">→</span></a>
            </div>
            <div className="rv" style={{border:'1px solid var(--border, #d8d6cf)', borderRadius:'10px', padding:'32px'}}>
              <div className="lab" style={{marginBottom:'16px'}}>What's included</div>
              <ul style={{listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:'14px'}}>
                <li>Platform upgrade planning</li>
                <li>System review and refinement</li>
                <li>Security alignment</li>
                <li>Reliable foundations</li>
                <li>Budget-conscious delivery</li>
              </ul>
            </div>
          </div></div>
        </section>

        <section className="svc">
          <div className="wrap"><div className="grid" style={{gridTemplateColumns:'1.1fr 0.9fr', gap:'48px', alignItems:'center'}}>
            <div className="rv svc-copy">
              <div className="svc-node">
                <span className="svc-node-dot"></span>
                <div className="num lab">05 / 05</div>
              </div>
              <h3 className="serif">Cloud architecture &amp; application delivery</h3>
              <p className="desc">Reliable delivery pipelines and modular application architecture that scale thoughtfully without friction.</p>
              <a href="#" className="arwlink">See details <span className="arw">→</span></a>
            </div>
            <div className="rv" style={{border:'1px solid var(--border, #d8d6cf)', borderRadius:'10px', padding:'32px'}}>
              <div className="lab" style={{marginBottom:'16px'}}>What's included</div>
              <ul style={{listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:'14px'}}>
                <li>Delivery pipeline setup</li>
                <li>Thoughtful infrastructure planning</li>
                <li>Modular environments</li>
                <li>Scalable technical foundations</li>
                <li>Reliable launch support</li>
              </ul>
            </div>
          </div></div>
        </section>


        <section className="approach">
          <div className="wrap">
            <div className="head rv">
              <div className="eyebrow lab a" style={{marginBottom: '22px'}}>How we work</div>
              <h2 className="serif">A method built to make quality repeatable.</h2>
            </div>
            <div className="app-grid rv">
              <div className="app"><div className="k lab a">Phase / Strategy</div><h4 className="serif">Strategy alignment &amp; goal definition</h4><p>We clarify product goals, success metrics and constraints so every decision has purpose and every phase stays grounded in the brief.</p></div>
              <div className="app"><div className="k lab a">Phase / Architecture</div><h4 className="serif">Research-driven architecture</h4><p>We shape systems around real user needs, commercial priorities and implementation constraints so the solution is durable.</p></div>
              <div className="app"><div className="k lab a">Phase / Systems</div><h4 className="serif">Design execution &amp; systemisation</h4><p>We build coherent interfaces and thoughtful design systems that make quality repeatable as complexity grows.</p></div>
              <div className="app"><div className="k lab a">Phase / Refinement</div><h4 className="serif">Validation, optimisation &amp; refinement</h4><p>We refine with evidence, feedback and careful iteration so the final experience is clear, resilient and effective.</p></div>
            </div>
          </div>
        </section>


        <section className="tests">
          <div className="wrap">
            <div className="head rv">
              <div className="eyebrow lab a" style={{justifyContent: 'center', marginBottom: '22px'}}>Proof of practice</div>
              <h2 className="serif">Work that is thoughtful, accountable, and built to last.</h2>
            </div>
            <div className="trust-card rv">
              <p>We prefer to speak about the work itself: the decisions made, the systems shaped, and the calm delivery process behind each build. If you want examples, we can walk through them directly in conversation.</p>
            </div>
          </div>
        </section>


        <div className="dark-block">
          <div className="cta rv">
            <h2 className="serif">Let's start something deliberate.</h2>
            <p>If you need a thoughtful build, a design system or a practical path to better digital delivery, we should talk.</p>
            <div className="btns">
              <a href="tel:+447485222490" className="b1">Request a consultation</a>
              <a href="mailto:team@salaro.com" className="b2">team@salaro.com</a>
            </div>
          </div>
         
        </div>


        <footer className="dark-lattice">
          <div className="cols">
            <div className="foot-top">
              <div>
                <div className="fbrand">Salaro</div>
                <p>A UK-led digital consultancy. Practising since 1995.</p>
              </div>
              <div className="fcol"><h5>Practice</h5><a href="/build">Build</a><a href="/migrate">Migrate</a><a href="/advise">Advise</a></div>
              <div className="fcol"><h5>Work</h5><a href="/work">Recent projects</a><a href="/archive">Archive</a></div>
              <div className="fcol"><h5>Contact</h5><a href="mailto:team@salaro.com">team@salaro.com</a><a href="#">Guildford, Surrey</a><a href="#">LinkedIn</a></div>
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