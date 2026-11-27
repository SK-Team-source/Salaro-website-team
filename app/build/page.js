'use client';

import { useEffect } from 'react';
import '../globals.css';

export default function BuildPage() {
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

    const items = [...document.querySelectorAll('.disc-item')];
    const panes = [...document.querySelectorAll('.disc-pane')];
    const activateDiscipline = (key) => {
      if (!items.some((item) => item.dataset.disc === key)) return false;
      items.forEach((item) => {
        const selected = item.dataset.disc === key;
        item.classList.toggle('on', selected);
        item.setAttribute('aria-selected', String(selected));
      });
      panes.forEach((pane) => pane.classList.toggle('on', pane.dataset.pane === key));
      return true;
    };
    const onDisciplineClick = (event) => {
      const key = event.currentTarget.dataset.disc;
      activateDiscipline(key);
      window.history.replaceState(null, '', `#${key}`);
    };
    const onHashChange = () => {
      const key = window.location.hash.slice(1);
      if (activateDiscipline(key)) {
        window.requestAnimationFrame(() => document.getElementById(key)?.scrollIntoView({ block: 'center' }));
      }
    };
    items.forEach((item) => item.addEventListener('click', onDisciplineClick));
    const initialDiscipline = window.location.hash.slice(1);
    if (activateDiscipline(initialDiscipline)) {
      window.requestAnimationFrame(() => document.getElementById(initialDiscipline)?.scrollIntoView({ block: 'center' }));
    }
    window.addEventListener('hashchange', onHashChange);

    const links = [...document.querySelectorAll('.subnav a[href^="#"]')];
    const map = new Map(links.map((link) => [link.getAttribute('href').slice(1), link]));
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((link) => link.classList.remove('on'));
            map.get(entry.target.id)?.classList.add('on');
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    ['why', 'process', 'types', 'included', 'engage'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });

    return () => {
      io.disconnect();
      spy.disconnect();
      items.forEach((item) => item.removeEventListener('click', onDisciplineClick));
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  return (
    <div className="pg-build build-editorial">
      <div className="topbar">
        <div className="wrap">
          <a href="https://salaro.com/" className="brand">Sala<span>ro</span></a>
          <nav className="nav"><a href="https://salaro.com/practice" className="active">Practice</a><a href="https://salaro.com/work">Work</a><a href="https://salaro.com/migrate">Migrate</a><a href="https://salaro.com/studio">Studio</a><a href="https://salaro.com/contact">Contact</a></nav>
          <a href="tel:+447485222490" className="top-cta">Start a project</a>
        </div>
      </div>

      {/* PAGE MASTHEAD */}
      <header className="masthead">
        <div className="wrap"><div className="grid">
          <div className="build-blueprint" aria-hidden="true">
            <span className="lab a">System architecture · 01</span>
            <svg viewBox="0 0 360 300" fill="none">
              <defs><pattern id="build-engineering-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" stroke="#c9c5b6" strokeWidth=".6"/></pattern></defs>
              <rect x="8" y="8" width="344" height="284" rx="8" fill="url(#build-engineering-grid)"/>
              <g stroke="#899483" strokeWidth="1.3"><path d="M90 68H180V120M270 68H180M90 232H180V180M270 232H180"/><path className="engineering-flow" d="M90 68H180V120M270 68H180M90 232H180V180M270 232H180" stroke="#7a2f1c" strokeWidth="2"/></g>
              {[[22,38,'ARCHITECTURE'],[202,38,'RESEARCH'],[22,202,'CODE'],[202,202,'REVIEW']].map(([x,y,label],i)=><g key={label} transform={`translate(${x} ${y})`}><rect width="136" height="60" rx="5" fill={i%2?'#e5ebe1':'#f6e8db'} stroke="#b6b6a5"/><circle cx="14" cy="15" r="3" fill="#7a2f1c" className="engineering-node" style={{animationDelay:`${i*.7}s`}}/><path d="M14 29H105M14 36H84" stroke="#9b9e8c"/><text x="14" y="51" fontSize="9" fontFamily="monospace" fill="#51483d">{label}</text></g>)}
              <rect x="132" y="116" width="96" height="68" rx="8" fill="#faf7ef" stroke="#7a2f1c" strokeWidth="1.5"/><text x="180" y="151" textAnchor="middle" fontSize="24" fontFamily="monospace" fill="#7a2f1c">{'</>'}</text><text x="180" y="169" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="#526b59">BUILD SYSTEM</text>
            </svg>
            <div className="build-blueprint-foot lab"><span>Plan → Build → Review</span><span>1995 — Today</span></div>
          </div>
          <div className="build-hero-copy rv">
            <div className="eyebrow lab a kicker">Practice · Build</div>
            <h1>Built on <span className="it">code</span>, not templates.</h1>
            <p className="lead">Millions of sites already exist — a template makes you one more. We design and build platforms from first principles: an architect, a researcher, a developer and a reviewer working in sequence, under human judgment, to ship work a generalist agency can't.</p>
          <div className="aside rv">
            <div className="row"><span className="k">Service</span><span className="v">Build</span></div>
            <div className="row"><span className="k">Covers</span><span className="v">Web · Commerce · Apps · AI</span></div>
            <div className="row"><span className="k">Stack</span><span className="v">Composable</span></div>
            <div className="row"><span className="k">Delivery</span><span className="v">Human-reviewed</span></div>
            <div className="cta">
              <a href="tel:+447485222490" className="btn-line">Start a project <span className="arw">→</span></a>
             
            </div>
          </div>
          </div>
        </div></div>
      </header>

      {/* SECTION SUBNAV */}
      <nav className="subnav">
        <div className="wrap">
          <a href="#why" className="on">Why bespoke</a>
          <a href="#process">Process</a>
          <a href="#types">What we build</a>
          <a href="#apps">Native apps</a>
          <a href="#included">What's included</a>
          <a href="#engage">Engagement</a>
          <span className="grow"></span>
          <a href="tel:+447485222490" className="mini-cta">Start a project →</a>
        </div>
      </nav>

      {/* WHY BESPOKE */}
      <section className="signals band" id="why">
        <div className="wrap">
          <div className="head-row rv">
            <div style={{display:'flex', alignItems:'center', gap:'16px', marginBottom:'18px'}}>
              <svg width="44" height="44" viewBox="0 0 64 64" fill="none" aria-hidden="true" style={{flexShrink:0}}>
                <rect x="8" y="10" width="48" height="44" rx="10" stroke="var(--accent)" strokeWidth="2"/>
                <path d="M20 24h24M20 32h16M20 40h20" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h2 className="serif">Why build it <span className="it">properly</span>.</h2>
            </div>
            <p className="desc">A template gets you online. A build gets you a platform you can grow, measure and own — one that fits the business instead of the other way round.</p>
          </div>
          <div className="sig-grid rv">
            <div className="sig">
              <div className="n serif">01</div>
              <h4 className="serif">It fits how you work</h4>
              <p>The data model, the CMS and the admin are shaped around your actual process — not bent to fit a theme someone else designed for someone else.</p>
            </div>
            <div className="sig">
              <div className="n serif">02</div>
              <h4 className="serif">It's yours to own</h4>
              <p>Clean, documented code on a stack your team can maintain or hand on. No plugin sprawl, no vendor lock, no black box you can't open.</p>
            </div>
            <div className="sig">
              <div className="n serif">03</div>
              <h4 className="serif">It's built to grow</h4>
              <p>Performance, accessibility and SEO are designed in from the first commit — so the platform scales with traffic instead of buckling under it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS / LADDER */}
      <section className="pipeline band" id="process">
        <div className="wrap">
          <div className="head-row rv">
            <h2 className="serif">How we <span className="it">ship</span>.</h2>
            <p className="desc">Not a black box. Five roles work the build in sequence — each handing to the next, every stage signed off under human review. Practising since 1995, we bring that experience to every step.</p>
          </div>
          <div className="ladder rv">
            <div className="rung">
              <span className="r-role">Role i</span>
          
              <div><h4 className="serif">Architect</h4><span className="r-tag">Plan the system</span></div>
              <p className="r-note">Shapes the data model, structure and stack before a line is written.</p>
              <svg width="100%" viewBox="0 0 680 480" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern id="build-grid-3" width="30" height="30" patternUnits="userSpaceOnUse">
<path d="M30 0H0V30" fill="none" stroke="#d8cfba" strokeWidth="1"/>
</pattern>
</defs>

<rect x="40" y="40" width="600" height="400" fill="url(#build-grid-3)"/>
<circle cx="340" cy="240" r="150" fill="none" stroke="#b0523c" strokeWidth="2"/>
<circle cx="340" cy="240" r="90" fill="none" stroke="#b0523c" strokeWidth="1.5" strokeDasharray="6 6"/>
<line x1="340" y1="90" x2="340" y2="390" stroke="#928a6c" strokeWidth="1"/>
<line x1="190" y1="240" x2="490" y2="240" stroke="#928a6c" strokeWidth="1"/>
<path d="M340 130 L400 320 L280 320 Z" fill="none" stroke="#37322a" strokeWidth="2.5" strokeLinejoin="round"/>
<circle cx="340" cy="130" r="7" fill="#37322a"/>
<rect x="300" y="200" width="80" height="60" rx="4" fill="#bb7259"/>
<rect x="300" y="270" width="80" height="30" rx="4" fill="#928a6c"/>
<circle cx="340" cy="240" r="6" fill="#37322a"/>

<text x="340" y="225" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="11" letterSpacing="1.5" fill="#efe9db">DATA MODEL</text>
<text x="340" y="289" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="11" letterSpacing="1.5" fill="#efe9db">STRUCTURE</text>
<text x="340" y="115" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontSize="16" fill="#37322a">plan</text>

<rect x="130" y="380" width="60" height="20" rx="10" fill="none" stroke="#b0523c" strokeWidth="1.5"/>
<text x="160" y="394" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="10" letterSpacing="1" fill="#b0523c">STACK</text>

<rect x="490" y="380" width="60" height="20" rx="10" fill="none" stroke="#928a6c" strokeWidth="1.5"/>
<text x="520" y="394" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="10" letterSpacing="1" fill="#928a6c">BUILD</text>
</svg>
            </div>
            <div className="rung">
              <span className="r-role">Role ii</span>
             
              <div><h4 className="serif">Researcher</h4><span className="r-tag">Inform the build</span></div>
              <p className="r-note">Grounds decisions in evidence — patterns, standards and prior art.</p>
         <svg width="100%" viewBox="0 0 680 480" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern id="lines" width="14" height="14" patternUnits="userSpaceOnUse">
<path d="M0 14L14 0" fill="none" stroke="#d8cfba" strokeWidth="1"/>
</pattern>
</defs>



<rect x="220" y="300" width="240" height="20" rx="4" fill="#928a6c"/>
<rect x="235" y="272" width="210" height="20" rx="4" fill="#bb7259"/>
<rect x="250" y="244" width="180" height="20" rx="4" fill="#928a6c"/>
<rect x="265" y="216" width="150" height="20" rx="4" fill="#bb7259"/>

<text x="340" y="315" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="12" letterSpacing="2" fill="#efe9db">EVIDENCE</text>
<text x="340" y="287" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="12" letterSpacing="2" fill="#efe9db">PATTERNS</text>
<text x="340" y="259" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="12" letterSpacing="2" fill="#efe9db">STANDARDS</text>
<text x="340" y="231" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="12" letterSpacing="2" fill="#efe9db">PRIOR ART</text>

<circle cx="420" cy="150" r="80" fill="url(#lines)" stroke="#37322a" strokeWidth="3"/>
<circle cx="420" cy="150" r="80" fill="none" stroke="#37322a" strokeWidth="3"/>
<line x1="475" y1="205" x2="540" y2="270" stroke="#37322a" strokeWidth="10" strokeLinecap="round"/>

<text x="420" y="155" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontSize="18" fill="#37322a">research</text>

<rect x="105" y="380" width="110" height="24" rx="12" fill="none" stroke="#b0523c" strokeWidth="1.5"/>
<text x="160" y="397" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="11" letterSpacing="1.5" fill="#b0523c">GROUND TRUTH</text>

<rect x="460" y="380" width="115" height="24" rx="12" fill="none" stroke="#928a6c" strokeWidth="1.5"/>
<text x="517" y="397" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="11" letterSpacing="1.5" fill="#928a6c">INFORM BUILD</text>
</svg>
        
           </div>
            <div className="rung">
              <span className="r-role">Role iii</span>
              
              <div><h4 className="serif">Developer</h4><span className="r-tag">Build it</span></div>
              <p className="r-note">Writes clean, documented code against the agreed architecture.</p>
          
          <svg width="100%" viewBox="0 0 680 480" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern id="build-grid-5" width="30" height="30" patternUnits="userSpaceOnUse">
<path d="M30 0H0V30" fill="none" stroke="#d8cfba" strokeWidth="1"/>
</pattern>
</defs>


<rect x="40" y="300" width="600" height="140" fill="url(#build-grid-5)"/>
<line x1="40" y1="300" x2="640" y2="300" stroke="#b0523c" strokeWidth="1.5" strokeDasharray="6 6"/>

<text x="340" y="290" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="11" letterSpacing="1.5" fill="#b0523c">ARCHITECTURE</text>

<text x="220" y="220" fontFamily="'Courier New', monospace" fontWeight="700" fontSize="90" fill="#37322a">&lt;</text>
<text x="420" y="220" fontFamily="'Courier New', monospace" fontWeight="700" fontSize="90" fill="#37322a">/&gt;</text>

<rect x="260" y="120" width="160" height="24" rx="4" fill="#bb7259"/>
<rect x="280" y="152" width="120" height="24" rx="4" fill="#928a6c"/>
<rect x="270" y="184" width="140" height="24" rx="4" fill="#bb7259"/>

<text x="340" y="137" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="11" letterSpacing="1.5" fill="#efe9db">CLEAN CODE</text>
<text x="340" y="169" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="11" letterSpacing="1.5" fill="#efe9db">DOCS</text>
<text x="340" y="201" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="11" letterSpacing="1.5" fill="#efe9db">TESTS</text>

<rect x="105" y="380" width="60" height="20" rx="10" fill="none" stroke="#b0523c" strokeWidth="1.5"/>
<text x="135" y="394" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="10" letterSpacing="1" fill="#b0523c">BUILD</text>

<rect x="515" y="380" width="60" height="20" rx="10" fill="none" stroke="#928a6c" strokeWidth="1.5"/>
<text x="545" y="394" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="10" letterSpacing="1" fill="#928a6c">SHIP</text>
</svg>
          
            </div>
            <div className="rung">
              <span className="r-role">Role iv</span>
           
              <div><h4 className="serif">Reviewer</h4><span className="r-tag">Check everything</span></div>
              <p className="r-note">Tests, audits and challenges the work before it can move on.</p>
           
              <svg width="100%" viewBox="0 0 680 480" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern id="build-grid-6" width="30" height="30" patternUnits="userSpaceOnUse">
<path d="M30 0H0V30" fill="none" stroke="#d8cfba" strokeWidth="1"/>
</pattern>
</defs>


<rect x="40" y="40" width="600" height="400" fill="url(#build-grid-6)"/>

<rect x="230" y="110" width="220" height="260" rx="8" fill="#ffffff" stroke="#37322a" strokeWidth="2"/>

<rect x="256" y="140" width="20" height="20" rx="4" fill="none" stroke="#928a6c" strokeWidth="2"/>
<path d="M260 150 L265 156 L273 144" fill="none" stroke="#928a6c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<text x="290" y="155" fontFamily="'Courier New', monospace" fontSize="12" letterSpacing="1" fill="#4a453d">TESTS</text>

<rect x="256" y="180" width="20" height="20" rx="4" fill="none" stroke="#928a6c" strokeWidth="2"/>
<path d="M260 190 L265 196 L273 184" fill="none" stroke="#928a6c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<text x="290" y="195" fontFamily="'Courier New', monospace" fontSize="12" letterSpacing="1" fill="#4a453d">AUDITS</text>

<rect x="256" y="220" width="20" height="20" rx="4" fill="none" stroke="#b0523c" strokeWidth="2"/>
<line x1="259" y1="223" x2="273" y2="237" stroke="#b0523c" strokeWidth="2" strokeLinecap="round"/>
<line x1="273" y1="223" x2="259" y2="237" stroke="#b0523c" strokeWidth="2" strokeLinecap="round"/>
<text x="290" y="235" fontFamily="'Courier New', monospace" fontSize="12" letterSpacing="1" fill="#4a453d">CHALLENGES</text>

<circle cx="480" cy="200" r="55" fill="none" stroke="#37322a" strokeWidth="4"/>
<line x1="518" y1="238" x2="565" y2="285" stroke="#37322a" strokeWidth="9" strokeLinecap="round"/>

<rect x="130" y="380" width="90" height="20" rx="10" fill="none" stroke="#928a6c" strokeWidth="1.5"/>
<text x="175" y="394" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="10" letterSpacing="1" fill="#928a6c">CHECK ALL</text>

<rect x="460" y="380" width="90" height="20" rx="10" fill="none" stroke="#b0523c" strokeWidth="1.5"/>
<text x="505" y="394" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="10" letterSpacing="1" fill="#b0523c">MOVE ON</text>
</svg>
            </div>
            <div className="rung">
              <span className="r-role">Role v</span>

            
              <div><h4 className="serif">Shipped</h4><span className="r-tag">Go live</span></div>
              <p className="r-note">Released, monitored and handed over — code that's yours to own.</p>
           <svg width="100%" viewBox="0 0 680 480" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern id="build-grid-7" width="30" height="30" patternUnits="userSpaceOnUse">
<path d="M30 0H0V30" fill="none" stroke="#d8cfba" strokeWidth="1"/>
</pattern>
</defs>


<rect x="40" y="40" width="600" height="400" fill="url(#build-grid-7)"/>

<line x1="150" y1="430" x2="530" y2="430" stroke="#37322a" strokeWidth="2.5"/>

<path d="M340 120 C300 160 300 260 320 320 L360 320 C380 260 380 160 340 120 Z" fill="#bb7259" stroke="#37322a" strokeWidth="2"/>
<circle cx="340" cy="195" r="18" fill="#efe9db" stroke="#37322a" strokeWidth="2"/>
<path d="M320 320 L295 360 L320 350 Z" fill="#928a6c"/>
<path d="M360 320 L385 360 L360 350 Z" fill="#928a6c"/>
<path d="M328 320 L340 380 L352 320 Z" fill="#b0523c"/>

<circle cx="500" cy="160" r="46" fill="none" stroke="#37322a" strokeWidth="2.5"/>
<path d="M500 160 L500 128" stroke="#b0523c" strokeWidth="3" strokeLinecap="round"/>
<path d="M500 160 L524 176" stroke="#37322a" strokeWidth="3" strokeLinecap="round"/>
<text x="500" y="222" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="11" letterSpacing="1.5" fill="#928a6c">MONITOR</text>

<text x="340" y="105" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontSize="18" fill="#37322a">go live</text>

<rect x="115" y="380" width="90" height="20" rx="10" fill="none" stroke="#b0523c" strokeWidth="1.5"/>
<text x="160" y="394" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="10" letterSpacing="1" fill="#b0523c">RELEASED</text>

<rect x="475" y="380" width="90" height="20" rx="10" fill="none" stroke="#928a6c" strokeWidth="1.5"/>
<text x="520" y="394" textAnchor="middle" fontFamily="'Courier New', monospace" fontSize="10" letterSpacing="1" fill="#928a6c">HANDED OVER</text>
</svg>
            </div>
          </div>
          <div className="pipe-foot" style={{borderTop:'none', marginTop:'26px', paddingTop:'0'}}>
            <span className="lab">Every stage · human reviewed</span>
            <span className="lab a">i → v · practising since 1995</span>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="services band" id="types">
        <div className="wrap">
          <div className="head-row rv">
            <div style={{display:'flex', alignItems:'center', gap:'16px', marginBottom:'18px'}}>
              <svg width="44" height="44" viewBox="0 0 64 64" fill="none" aria-hidden="true" style={{flexShrink:0}}>
                <circle cx="32" cy="32" r="22" stroke="var(--accent)" strokeWidth="2"/>
                <path d="M24 32h16M32 24v16" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h2 className="serif">What we <span className="it">build</span>.</h2>
            </div>
            <p className="desc">Four disciplines, one studio. Choose a track to see how we approach it — the same standard of craft runs through all of them.</p>
          </div>

          <div className="disc rv">
            <div className="disc-list" role="tablist" aria-label="Build services">
              <button type="button" role="tab" aria-selected="true" aria-controls="web" className="disc-item on" data-disc="web"><span className="di serif">01</span><span className="dt serif">Web development</span></button>
              <button type="button" role="tab" aria-selected="false" aria-controls="commerce" className="disc-item" data-disc="commerce"><span className="di serif">02</span><span className="dt serif">E-commerce</span></button>
              <button type="button" role="tab" aria-selected="false" aria-controls="apps" className="disc-item" data-disc="apps"><span className="di serif">03</span><span className="dt serif">Apps</span></button>
              <button type="button" role="tab" aria-selected="false" aria-controls="ai" className="disc-item" data-disc="ai"><span className="di serif">04</span><span className="dt serif">AI</span></button>
            </div>
            <div className="disc-panel">
              <div className="disc-pane on" id="web" role="tabpanel" data-pane="web">
                <div className="p-kind lab a">Web · Discipline 01</div>
                <h3 className="serif">Sites made to <span className="it">stand apart</span>.</h3>
                <p>Millions of sites already exist. We design and build marketing sites, portals and platforms from first principles — so yours reflects the business rather than a theme someone else shipped.</p>
                <ul className="caps">
                  <li>Composable, content-managed architecture</li>
                  <li>Core Web Vitals tuned to pass</li>
                  <li>Accessible to WCAG 2.2 AA</li>
                </ul>
                <div className="p-foot">
                  <span className="p-stat">The right platform for the job — custom code where it counts.</span>
                  <a href="/build#web" className="arwlink">Discover <span className="arw">→</span></a>
                </div>
              </div>
              <div className="disc-pane" id="commerce" role="tabpanel" data-pane="commerce">
                <div className="p-kind lab a">Commerce · Discipline 02</div>
                <h3 className="serif">A webshop built around <span className="it">your margins</span>.</h3>
                <p>Products, services or a full catalogue — a content-managed webshop shaped by the customer journey, with conversion designed in rather than bolted on afterwards.</p>
                <ul className="caps">
                  <li>One-page, optimised checkout</li>
                  <li>Multi-language &amp; multi-currency</li>
                  <li>Real-time shipping &amp; tracking</li>
                </ul>
                <div className="p-foot">
                  <span className="p-stat">Increasing sales is the goal.</span>
                  <a href="/build#commerce" className="arwlink">Discover <span className="arw">→</span></a>
                </div>
              </div>
              <div className="disc-pane" id="apps" role="tabpanel" data-pane="apps">
                <div className="p-kind lab a">Apps · Discipline 03</div>
                <h3 className="serif">Rich native apps, <span className="it">any device</span>.</h3>
                <p>We handle device and OS compatibility so you don't have to — building rich native and cross-platform apps for iOS and Android at production quality and at scale.</p>
                <ul className="caps">
                  <li>Native iOS &amp; Android</li>
                  <li>Cross-platform where it fits</li>
                  <li>Shipped to both stores</li>
                </ul>
                <div className="p-foot">
                  <span className="p-stat">Production quality, at scale.</span>
                  <a href="/build#apps" className="arwlink">Discover <span className="arw">→</span></a>
                </div>
              </div>
              <div className="disc-pane" id="ai" role="tabpanel" data-pane="ai">
                <div className="p-kind lab a">Intelligence · Discipline 04</div>
                <h3 className="serif">AI applied with <span className="it">intent</span>.</h3>
                <p>Machine learning, natural language and computer vision — used where they earn their place. Features that solve a real problem, not a demo bolted onto a product.</p>
                <ul className="caps">
                  <li>Machine &amp; deep learning</li>
                  <li>Natural language interfaces</li>
                  <li>Computer vision pipelines</li>
                </ul>
                <div className="p-foot">
                  <span className="p-stat">Devised, not decorative.</span>
                  <a href="/build#ai" className="arwlink">Discover <span className="arw">→</span></a>
                </div>
              </div>
            </div>
          </div>

          <div className="svc-markers rv" style={{marginTop:'64px'}}>
            <div className="mk"><div className="k lab a">Founded</div><div className="v">Since 1995</div></div>
            <div className="mk"><div className="k lab a">Located</div><div className="v">Surrey &amp; London</div></div>
            <div className="mk"><div className="k lab a">Approach</div><div className="v">AI-native at scale</div></div>
            <div className="mk"><div className="k lab a">Focus</div><div className="v">Boutique &amp; technical</div></div>
          </div>
        </div>
      </section>

    
      {/* WHAT'S INCLUDED / CHECKLIST */}
      <section className="shop band" id="included">
        <div className="wrap"><div className="grid">
          <div className="rv">
            <div className="fund-label">
              
              <div className="eyebrow lab a">What's included</div>
            </div>
            <h2 className="serif">Every build ships with the <span className="it">fundamentals</span>.</h2>
            <p>Speed, accessibility and search aren't extras we quote for later — they're designed in from the first commit and verified before anything goes live.</p>
            <div className="actions">
              <a href="tel:+447485222490" className="btn-line">Start a project <span className="arw">→</span></a>
              <a href="/work" className="arwlink">See our work <span className="arw">→</span></a>
            </div>
          </div>
          <div className="rv">
            <ul className="checklist">
              <li><svg className="fund-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 17a9 9 0 0 1 18 0M12 15l5-6"/></svg>Core Web Vitals tuned to pass</li>
              <li><svg className="fund-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v3M5 8l7 3 7-3M12 11v10M12 15l-5 5M12 15l5 5"/></svg>WCAG 2.2 AA accessibility baseline</li>
              <li><svg className="fund-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 4h18v16H3zM3 9h18M9 9v11"/></svg>A composable, content-managed CMS</li>
              <li><svg className="fund-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12M15 15l6 6"/></svg>SEO, metadata &amp; structured data built in</li>
              <li><svg className="fund-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 4h15v12H2zM6 20h7M19 9h4v12h-4z"/></svg>Responsive design across every breakpoint</li>
              <li><svg className="fund-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6M14 3l-4 18"/></svg>Clean, documented, handover-ready code</li>
            </ul>
            <div className="mini-table">
              <div><div className="mt-k">Performance</div><div className="mt-v lab">Web vitals</div></div>
              <div><div className="mt-k">CMS</div><div className="mt-v lab">Composable</div></div>
              <div><div className="mt-k">Code</div><div className="mt-v lab">Yours to own</div></div>
            </div>
          </div>
        </div></div>
      </section>

      {/* ENGAGEMENT */}
      <section className="risks band" id="engage">
        <div className="wrap rv">
          <div className="eyebrow lab a" style={{marginBottom:'16px'}}>How we work together</div>
          <h2 className="serif">Ways to <span className="it">engage</span> the studio.</h2>
          <div className="risk-row">
            <div className="risk">
              <div className="k lab a">Model 01</div>
              <h4 className="serif">Fixed-scope build</h4>
              <p>A defined brief, a fixed price and a clear ship date. Best when the requirements are known and you want certainty from day one.</p>
            </div>
            <div className="risk">
              <div className="k lab a">Model 02</div>
              <h4 className="serif">Discovery &amp; design</h4>
              <p>A short paid engagement to pin down architecture, scope and cost before committing to a full build — de-risking the decision.</p>
            </div>
            <div className="risk">
              <div className="k lab a">Model 03</div>
              <h4 className="serif">Retained partnership</h4>
              <p>An ongoing relationship for teams shipping continuously — a standing pipeline of build, review and release each month.</p>
            </div>
            <div className="risk">
              <div className="k lab a">Model 04</div>
              <h4 className="serif">Rescue &amp; take-over</h4>
              <p>Inheriting a stalled or troubled project, stabilising it, and getting it back on a footing your team can build on.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ETHOS */}
      <section className="ethos">
        <div className="wrap"><div className="grid">
          <div className="rv">
            <div className="eyebrow lab a">Ethos</div>
            <div className="small serif">Intelligent design over noise.</div>
          </div>
          <div className="big serif rv">We solve problems to produce intelligent designs, deliver engaging experiences and build <em>meaningful connections</em>. Whether it's a website, a webshop or an app, we take your business online <em>the right way</em> — built on code, not templates.</div>
        </div></div>
      </section>

      {/* FOOTER */}
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
