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
        fbtns.forEach((x) => x.classList.toggle('on', x === b));
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
          <a href="/" className="brand">Sala<span>ro</span></a>
          <nav className="nav"><a href="/practice">Practice</a><a href="/work" className="active">Work</a><a href="/migrate">Migrate</a><a href="/studio">Studio</a><a href="/contact">Contact</a></nav>
          <a href="/contact" className="top-cta">Start a project</a>
        </div>
      </div>

      {/* PAGE MASTHEAD */}
      <header className="masthead">
        <div className="wrap"><div className="grid">
          <div className="rv">
            <div className="eyebrow lab a kicker">Work · Archive</div>
            <h1>Everything, <span className="it">since 1995</span>.</h1>
            <p className="lead">A working index of projects across three decades of practice — from the early web to today's AI-native builds. Filter by discipline, or scan by year. The recent, detailed case studies live over in recent projects.</p>
          </div>
          <div className="aside rv">
            <div className="row"><span className="k">Spanning</span><span className="v">1995 — 2026</span></div>
            <div className="row"><span className="k">Listed</span><span className="v">Selected engagements</span></div>
            <div className="row"><span className="k">Detail</span><span className="v">Recent projects</span></div>
            <div className="cta">
              <a href="/work" className="btn-line">See recent work <span className="arw">→</span></a>
           
            </div>
          </div>
        </div></div>
      </header>

      {/* FILTER BAR */}
      <nav className="subnav">
        <div className="wrap">
          <button className="f on" data-cat="all">All</button>
          <button className="f" data-cat="web">Web</button>
          <button className="f" data-cat="commerce">Commerce</button>
          <button className="f" data-cat="apps">Apps</button>
          <button className="f" data-cat="advisory">Advisory</button>
          <span className="grow"></span>
          <span className="count" id="count">— entries</span>
        </div>
      </nav>

      {/* ARCHIVE TABLE */}
      <section className="band" id="archive">
        <div className="wrap">
          <div className="arch-controls rv">
            <div className="lab">Index · newest first</div>
            <div className="lab a">Hover a row to open</div>
          </div>
          <div className="arch-head rv">
            <span>Year</span><span>Project</span><span>Discipline</span><span>Sector</span><span></span>
          </div>

          <div className="arch rv" id="arch">

            <div className="yr">
              <div className="y serif">2026</div>
              <div className="rows">
                <a href="https://www.thegreensome.com" className="row" data-cat="web"><span className="p-name serif">The Greensome</span><span className="p-d">Editorial guide</span><span className="p-s">Food &amp; sustainability</span><span className="p-a">Open →</span></a>
              </div>
            </div>

            <div className="yr">
              <div className="y serif">2025</div>
              <div className="rows">
                <a href="https://www.hbmpartners.fr" className="row" data-cat="advisory"><span className="p-name serif">H.B.M. Partners</span><span className="p-d">Advisory</span><span className="p-s">Natural resources</span><span className="p-a">Open →</span></a>
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
            <div className="small serif">Thirty years, one standard.</div>
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
            <div className="fcol"><h5>Practice</h5><a href="/build">Build</a><a href="/migrate">Migrate</a><a href="/move-from-php">Move from PHP</a><a href="/advise">Advise</a></div>
            <div className="fcol"><h5>Work</h5><a href="/work">Recent projects</a><a href="/archive">Archive</a></div>
            <div className="fcol"><h5>Contact</h5><a href="mailto:hello@salaro.com">hello@salaro.com</a><span>Guildford, Surrey</span><a href="https://uk.linkedin.com/in/salaro">LinkedIn</a></div>
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