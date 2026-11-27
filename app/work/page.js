'use client';
import { useEffect, useState } from 'react';
import CaseStudies, { caseStudies } from '../components/CaseStudies';
import Image from 'next/image';

export default function WorkPage() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!playing || hovered || media.matches) return;
    const timer = setTimeout(() => setActive(i => (i + 1) % caseStudies.length), 6500);
    return () => clearTimeout(timer);
  }, [active, playing, hovered]);
  const project = caseStudies[active];
  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.p-work .rv').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="p-work work-showcase">
      <div className="topbar">
        <div className="wrap">
          <a href="https://salaro.com/" className="brand">Sala<span>ro</span></a>
          <nav className="nav">
            <a href="https://salaro.com/practice">Practice</a>
            <a href="https://salaro.com/work" className="active">Work</a>
            <a href="https://salaro.com/studio">Studio</a>
            <a href="https://salaro.com/writing">Writing</a>
            <a href="https://salaro.com/contact">Contact</a>
          </nav>
          <a href="tel:+447485222490" className="top-cta">Start a project</a>
        </div>
      </div>

      <header className="hero drifting-field balanced-work-hero">
        <div className="wrap">
          <div className="hero-inner">
            <div className="hero-copy"><div className="hero-intro">
              <div className="eyebrow lab a">Project portfolio</div>
              <h1 className="serif">
                <span className="reveal-line"><span>Real projects.</span></span>
                <span className="reveal-line"><span>Lasting <span className="rust">impact.</span></span></span>
              </h1>
              <p className="sub">Explore how we turn business requirements into usable digital experiences, with a focus on the decisions that make each project effective.</p>
              <a className="showcase-link" href="#case-studies">Explore our work <span>↗</span></a>
              </div><aside className="work-hero-note">
                <div className="lab a">The thinking behind the work</div>
                <h2 className="serif">Different challenges. <em>Purposeful solutions.</em></h2>
                <p>Every project begins with understanding what matters to the business and the people it serves.</p>
                <p>From complex corporate platforms to intuitive commerce experiences, we bring together thoughtful design, modern technology and practical delivery.</p><div className="work-note-values">{['Business focus','Digital craft','Built to evolve'].map((value,i)=><div key={value}><span className="lab a">0{i+1}</span><strong>{value}</strong></div>)}</div>
              </aside>
            </div>
            <div className="hero-viz">
              <div className={`cinema-portfolio ${playing && !hovered ? "is-playing" : ""}`}  onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <div className="cinema-visual"><div className="cinema-top"><span className="lab">Selected projects</span><span className="lab">0{active+1} / 0{caseStudies.length}</span></div>
                <div className="cinema-stage">
                  <div className="cinema-grid" aria-hidden="true" />
                  {[-1,0,1].map(offset => { const index=(active+offset+caseStudies.length)%caseStudies.length; const item=caseStudies[index]; return <div key={item.name} className={`cinema-panel ${offset===0?'front':offset<0?'back-left':'back-right'}`}>
                    {offset===0 ? <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${item.name}`}><Image src={item.image} alt={item.alt} width={800} height={450} sizes="(max-width: 920px) 80vw, 45vw" priority={index===0}/></a> : <button type="button" onClick={()=>setActive(index)} aria-label={`Show ${item.name}`}><Image src={item.image} alt="" width={800} height={450} sizes="25vw"/></button>}
                  </div> })}
                  <span className="cinema-corner tl"/><span className="cinema-corner br"/>
                </div>
                </div><div className="cinema-bottom"><div className="cinema-progress" aria-hidden="true"><i key={active}/></div>
                <div className="cinema-details"><div key={project.name} className="cinema-copy"><h2 className="serif">{project.name}</h2><p>{project.solution}</p><span className="lab">{project.platform}{project.status ? ` · ${project.status}` : ''}</span> <a className="cinema-visit" href={project.url} target="_blank" rel="noopener noreferrer">Visit site ↗</a></div><div className="cinema-controls"><button type="button" aria-label="Previous project" onClick={()=>setActive(i=>(i+caseStudies.length-1)%caseStudies.length)}>←</button><button type="button" aria-label={playing?'Pause slideshow':'Play slideshow'} onClick={()=>setPlaying(p=>!p)}>{playing?'Ⅱ':'▷'}</button><button type="button" aria-label="Next project" onClick={()=>setActive(i=>(i+1)%caseStudies.length)}>→</button></div></div>
                <div className="cinema-index">{caseStudies.map((item,i)=><button key={item.name} type="button" aria-pressed={active===i} onClick={()=>setActive(i)}><span>0{i+1}</span>{item.name}</button>)}</div>
              </div></div>
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
            <p>A complicated brief should lead to a straightforward experience. We organise information around the people who use it.</p>
            <p>For clients, that means fewer unnecessary steps and a more manageable digital presence.</p>
          </div>
          <div className="work-transform" aria-label="Requirements are organised into a usable platform">
            <svg viewBox="0 0 760 180" aria-hidden="true"><g fill="none" stroke="#b5a48e" strokeWidth="1.3"><path d="M105 30H205Q240 30 270 90H350M105 90H350M105 150H205Q240 150 270 90M410 90H500Q535 90 560 30H655M410 90H655M500 90Q535 90 560 150H655"/><path className="wt-flow" d="M105 30H205Q240 30 270 90H500Q535 90 560 150H655M105 90H655M105 150H205Q240 150 270 90H500Q535 90 560 30H655" stroke="#a34c2d" strokeWidth="2"/></g><g fill="#f9f5ec" stroke="#9c8f7c">{[30,90,150].map(y=><g key={y}><rect x="35" y={y-17} width="70" height="34" rx="3"/><path d={`M47 ${y-5}h45M47 ${y+5}h30`}/></g>)}</g><g className="wt-core"><rect x="350" y="55" width="60" height="70" rx="5" fill="#d8e4d3" stroke="#52735a"/><path d="M365 90l10 10 20-25" fill="none" stroke="#52735a" strokeWidth="3"/></g><g fill="#e4eadc" stroke="#78917a">{[30,90,150].map(y=><g key={y}><rect x="655" y={y-20} width="70" height="40" rx="3"/><path d={`M665 ${y-9}h50M665 ${y}h20M690 ${y}h25M665 ${y+9}h50`}/></g>)}</g></svg>
            <div className="wt-labels"><span>Business needs</span><span>Clear structure</span><span>Usable platform</span></div>
          </div>
        </div></div>
      </section>

      <section className="row work-case-studies" id="case-studies">
        <div className="wrap">
          <div className="rowhead rv">
            <div className="num lab a">Selected work</div>
            <h2 className="serif">Real sites. <span className="rust">Clear decisions.</span></h2>
          </div>
          <div className="rv"><CaseStudies /></div>
        </div>
      </section>

      <section className="row showcase-capabilities">
        <div className="wrap"><div className="grid">
          <div className="rowhead rv">
            <div className="num lab a">(02)</div>
            <h2 className="serif">What we help <span className="rust">shape</span></h2>
            <p className="sub">Explore the different needs our projects address.</p>
          </div>
          <div className="content rv">
            <div className="cards work-capabilities">

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

      <section className="row showcase-principles">
        <div className="wrap"><div className="grid">
          <div className="rowhead rv">
            <div className="num lab a">(03)</div>
            <h2 className="serif">How we think about <span className="rust">the work</span></h2>
            <p className="sub">Three principles that keep delivery steady, visible, and aligned.</p>
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

      <section className="cta">
        <div className="wrap">
          <div className="rv">
            <div className="lab">Your brief</div>
            <h2 className="serif">What could we <em>create together</em>?</h2>
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
              <a href="https://salaro.com/" className="fbrand">Salaro</a>
              <p>Strategy, product direction, and long-term platform care. Practising since 1995.</p>
            </div>
            <div className="fcol"><h5>Sitemap</h5><a href="/practice">Practice</a><a href="/work">Work</a><a href="/studio">Studio</a><a href="/writing">Writing</a></div>
            <div className="fcol"><h5>Contact</h5><a href="tel:+447485222490">+44 7485 222490</a><a href="/contact">Start a project</a></div>
            <div className="fcol"><h5>Legal</h5><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div>
          </div>
          <div className="foot-bot">
            <span className="lab">© 2026 Salaro · a trading name of S. Golestanian, sole trader · Guildford, Surrey</span>
            <span className="lab">UK-led practice</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
