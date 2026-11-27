'use client';

import { useEffect, useRef } from 'react';
import '../globals.css';

export default function ArchivePage() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.12 }
    );
    root.querySelectorAll('.rv').forEach((el) => io.observe(el));

    // archive filter
    const fbtns = [...root.querySelectorAll('.subnav button.f')];
    const rows = [...root.querySelectorAll('.arch .row')];
    const years = [...root.querySelectorAll('.arch .yr')];
    const countEl = root.querySelector('#count');

    const apply = (cat) => {
      let n = 0;
      rows.forEach((r) => {
        const show = cat === 'all' || r.dataset.cat === cat;
        r.style.display = show ? '' : 'none';
        if (show) n++;
      });
      years.forEach((y) => {
        const visible = [...y.querySelectorAll('.row')].some((r) => r.style.display !== 'none');
        y.style.display = visible ? '' : 'none';
      });
      if (countEl) countEl.textContent = n + (n === 1 ? ' entry' : ' entries');
    };

    const handlers = fbtns.map((b) => {
      const h = () => {
        fbtns.forEach((x) => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', String(x === b)); });
        apply(b.dataset.cat);
      };
      b.addEventListener('click', h);
      return [b, h];
    });

    apply('all');

    return () => {
      io.disconnect();
      handlers.forEach(([b, h]) => b.removeEventListener('click', h));
    };
  }, []);

  return (
    <div className="pg-archive" ref={rootRef}>
      <div className="topbar">
        <div className="wrap">
          <a href="https://salaro.com/" className="brand">Sala<span>ro</span></a>
          <nav className="nav"><a href="https://salaro.com/practice">Practice</a><a href="https://salaro.com/work" className="active">Work</a><a href="https://salaro.com/migrate">Migrate</a><a href="https://salaro.com/studio">Studio</a><a href="https://salaro.com/contact">Contact</a></nav>
          <a href="tel:+447485222490" className="top-cta">Start a project</a>
        </div>
      </div>

      {/* PAGE MASTHEAD */}
      <header className="masthead">
        <div className="wrap"><div className="grid">
          <div className="archive-visual rv">
            <div className="archive-label"><span>PROJECT INDEX</span><span>1995 — 2026</span></div>
            <div className="archive-art" aria-hidden="true">
              <svg viewBox="0 0 360 240" fill="none">
                <path d="M40 194H320M40 38V194" stroke="#b9ad99"/>
                {[0,1,2,3,4,5,6].map((n)=><g key={n} className="archive-sheet" style={{animationDelay:`${n*.32}s`}} transform={`translate(${48+n*38} ${118-n*12})`}><rect width="52" height="70" rx="3" fill={['#e7ebe1','#f4e5d9','#e2e9ed'][n%3]} stroke="#a99b87"/><path d="M10 15H42M10 25H34M10 35H40" stroke="#847766"/><circle cx="13" cy="55" r="3" fill="#7a2f1c"/></g>)}
                <path className="archive-trace" d="M48 204H310" stroke="#7a2f1c" strokeWidth="2" strokeDasharray="8 7"/>
                <circle className="archive-cursor" cx="48" cy="204" r="5" fill="#7a2f1c"/>
              </svg>
            </div>
            <div className="archive-label"><span>EARLY WEB</span><span>AI-ASSISTED BUILDS</span></div>
            <div className="archive-visual-foot"><strong>1995</strong><span>Practising since</span></div>
          </div>
          <div className="archive-copy rv">
            <div className="eyebrow lab a kicker">Work · Archive</div>
            <h1>Everything, <span className="it">since 1995</span>.</h1>
            <p className="lead">A working index of projects from 1995 to today — from the early web to current AI-assisted builds. Filter by discipline, or scan by year. The recent, detailed case studies live over in recent projects.</p>
                    <div className="aside rv">
            <div className="row"><span className="k">Spanning</span><span className="v">1995 — 2026</span></div>
            <div className="row"><span className="k">Listed</span><span className="v">Selected engagements</span></div>
            <div className="row"><span className="k">Detail</span><span className="v">Recent projects</span></div>
            <div className="cta">
              <a href="/work" className="btn-line">See recent work <span className="arw">→</span></a>
           
            </div>
          </div>
          </div>
        </div></div>
      </header>

      {/* FILTER BAR */}
      <nav className="subnav">
        <div className="wrap">
          <button className="f on" aria-pressed="true" data-cat="all">All</button>
          <button className="f" aria-pressed="false" data-cat="web">Web</button>
          <button className="f" aria-pressed="false" data-cat="commerce">Commerce</button>
          <button className="f" aria-pressed="false" data-cat="apps">Apps</button>
          <button className="f" aria-pressed="false" data-cat="advisory">Advisory</button>
          <span className="grow"></span>
          <span className="count" id="count" aria-live="polite">— entries</span>
        </div>
      </nav>

      {/* ARCHIVE TABLE */}
      <section className="band" id="archive">
        <div className="wrap">
          <div className="arch-controls rv">
            <div className="lab">Index · newest first</div>
            <div className="lab a">Select a project to open</div>
          </div>
          <div className="arch-head rv">
            <span>Year</span><span>Project</span><span>Discipline</span><span>Sector</span><span></span>
          </div>

          <div className="arch rv" id="arch">
            <div className="yr">
              <div className="y serif">2026</div>
              <div className="rows">
                <a href="https://www.leadaline.com" className="row" data-cat="apps"><span className="p-name serif">LeadaLine</span><span className="p-d">AI systems</span><span className="p-s">Electrical trades</span><span className="p-a">Open →</span></a>
              </div>
            </div>

            <div className="yr">
              <div className="y serif">2025</div>
              <div className="rows">
                <a href="https://hbmpartners.fr/" className="row" data-cat="advisory"><span className="p-name serif">H.B.M. Partners</span><span className="p-d">Advisory</span><span className="p-s">Natural resources</span><span className="p-a">Open →</span></a>
              </div>
            </div>

            <div className="yr">
              <div className="y serif">2024</div>
              <div className="rows">
                <a href="https://askdroid.com/" className="row" data-cat="apps"><span className="p-name serif">AskDroid</span><span className="p-d">AI platform</span><span className="p-s">Customer support</span><span className="p-a">Open →</span></a>
              </div>
            </div>

            <div className="yr">
              <div className="y serif">2020</div>
              <div className="rows">
                <a href="https://edenaromata.com" className="row" data-cat="commerce"><span className="p-name serif">Eden Aromate</span><span className="p-d">Brand site</span><span className="p-s">CBD wellness</span><span className="p-a">Open →</span></a>
              </div>
            </div>

            <div className="yr">
              <div className="y serif">2019</div>
              <div className="rows">
                <a href="https://cleverbotanics.com" className="row" data-cat="commerce"><span className="p-name serif">Clever Botanics</span><span className="p-d">E-commerce</span><span className="p-s">Wellness</span><span className="p-a">Open →</span></a>
              </div>
            </div>

            <div className="yr">
              <div className="y serif">2018</div>
              <div className="rows">
                <a href="https://ecogreencabins.com" className="row" data-cat="web"><span className="p-name serif">EcoGreenCabins</span><span className="p-d">Brochure</span><span className="p-s">Eco construction</span><span className="p-a">Open →</span></a>
              </div>
            </div>

            <div className="yr">
              <div className="y serif">2012</div>
              <div className="rows">
                <a href="https://properties.co.uk" className="row" data-cat="web"><span className="p-name serif">Properties.co.uk</span><span className="p-d">Directory</span><span className="p-s">Property</span><span className="p-a">Open →</span></a>
              </div>
            </div>
          </div>

          <div className="rv" style={{marginTop:'56px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'16px', borderTop:'1px solid var(--line)', paddingTop:'34px'}}>
            <span className="lab">Want the detail behind a project?</span>
            <a href="/studio" className="btn-line">See recent case studies <span className="arw">→</span></a>
          </div>
        </div>
      </section>

      {/* ETHOS */}
      <section className="ethos">
        <div className="wrap"><div className="grid">
          <div className="rv">
            <div className="eyebrow lab a">Ethos</div>
            <div className="small serif">Since 1995, one standard.</div>
          </div>
          <div className="big serif rv">The tools changed — tables gave way to frameworks, servers gave way to the cloud, and now to AI-native builds. What hasn't changed is the way we work: <em>clear decisions</em>, careful delivery, and code we're still happy to have our name on <em>years later</em>.</div>
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
            <div className="fcol"><h5>Contact</h5><a href="mailto:team@salaro.com">team@salaro.com</a><span>Guildford, Surrey</span><a href="https://uk.linkedin.com/in/salaro">LinkedIn</a></div>
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