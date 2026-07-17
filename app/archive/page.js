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
          <nav className="nav"><a href="/practice">Practice</a><a href="/work" className="here">Work</a><a href="/migrate">Migrate</a><a href="/studio">Studio</a><a href="/contact">Contact</a></nav>
          <a href="tel:+447485222490" className="top-cta">Start a project</a>
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
              <a href="#" className="btn-line">See recent work <span className="arw">→</span></a>
              <span className="phone">Practising since <b>1995</b></span>
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
                <div className="row" data-cat="commerce"><span className="p-name serif">Clever Botanics</span><span className="p-d">Commerce</span><span className="p-s">Retail</span><span className="p-a">Open →</span></div>
                <div className="row" data-cat="advisory"><span className="p-name serif">HBM Partners</span><span className="p-d">Advisory</span><span className="p-s">Natural resources</span><span className="p-a">Open →</span></div>
                <div className="row" data-cat="web"><span className="p-name serif">Northgate Trust</span><span className="p-d">Web</span><span className="p-s">Finance</span><span className="p-a">Open →</span></div>
              </div>
            </div>

            <div className="yr">
              <div className="y serif">2025</div>
              <div className="rows">
                <div className="row" data-cat="web"><span className="p-name serif">Properties.co.uk</span><span className="p-d">Web</span><span className="p-s">Property</span><span className="p-a">Open →</span></div>
                <div className="row" data-cat="apps"><span className="p-name serif">Ashdroid</span><span className="p-d">Apps</span><span className="p-s">SaaS</span><span className="p-a">Open →</span></div>
                <div className="row" data-cat="commerce"><span className="p-name serif">Meridian Supply</span><span className="p-d">Commerce</span><span className="p-s">B2B trade</span><span className="p-a">Open →</span></div>
              </div>
            </div>

            <div className="yr">
              <div className="y serif">2024</div>
              <div className="rows">
                <div className="row" data-cat="web"><span className="p-name serif">Fenwick Studio</span><span className="p-d">Web</span><span className="p-s">Architecture</span><span className="p-a">Open →</span></div>
                <div className="row" data-cat="advisory"><span className="p-name serif">Calder Health</span><span className="p-d">Advisory</span><span className="p-s">Healthcare</span><span className="p-a">Open →</span></div>
                <div className="row" data-cat="commerce"><span className="p-name serif">Rowan &amp; Vale</span><span className="p-d">Commerce</span><span className="p-s">Homeware</span><span className="p-a">Open →</span></div>
              </div>
            </div>

            <div className="yr">
              <div className="y serif">2020</div>
              <div className="rows">
                <div className="row" data-cat="apps"><span className="p-name serif">Tiller Logistics</span><span className="p-d">Apps</span><span className="p-s">Logistics</span><span className="p-a">Open →</span></div>
                <div className="row" data-cat="web"><span className="p-name serif">Beacon Council</span><span className="p-d">Web</span><span className="p-s">Public sector</span><span className="p-a">Open →</span></div>
              </div>
            </div>

            <div className="yr">
              <div className="y serif">2014</div>
              <div className="rows">
                <div className="row" data-cat="commerce"><span className="p-name serif">Harbour Goods</span><span className="p-d">Commerce</span><span className="p-s">Retail</span><span className="p-a">Open →</span></div>
                <div className="row" data-cat="web"><span className="p-name serif">Aldwych Press</span><span className="p-d">Web</span><span className="p-s">Publishing</span><span className="p-a">Open →</span></div>
              </div>
            </div>

            <div className="yr">
              <div className="y serif">2005</div>
              <div className="rows">
                <div className="row" data-cat="web"><span className="p-name serif">Marlow &amp; Reed</span><span className="p-d">Web</span><span className="p-s">Legal</span><span className="p-a">Open →</span></div>
                <div className="row" data-cat="commerce"><span className="p-name serif">Greenline Direct</span><span className="p-d">Commerce</span><span className="p-s">Mail order</span><span className="p-a">Open →</span></div>
              </div>
            </div>

            <div className="yr">
              <div className="y serif">1995</div>
              <div className="rows">
                <div className="row" data-cat="web"><span className="p-name serif">Salaro — first site</span><span className="p-d">Web</span><span className="p-s">Studio</span><span className="p-a">Open →</span></div>
              </div>
            </div>
          </div>

          <div className="rv" style={{marginTop:'56px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'16px', borderTop:'1px solid var(--line)', paddingTop:'34px'}}>
            <span className="lab">Want the detail behind a project?</span>
            <a href="tel:+447485222490" className="btn-line">See recent case studies <span className="arw">→</span></a>
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
            <div className="fcol"><h5>Practice</h5><a href="/build">Build</a><a href="/migrate">Migrate</a><a href="/advise">Advise</a></div>
            <div className="fcol"><h5>Work</h5><a href="/work">Recent projects</a><a href="/archive">Archive</a></div>
            <div className="fcol"><h5>Contact</h5><a href="mailto:hello@salaro.com">hello@salaro.com</a><span>Guildford, Surrey</span><a href="https://www.linkedin.com">LinkedIn</a></div>
          </div>
          <div className="foot-bot">
            <span className="lab">© 2026 Salaro Ltd · Registered in England &amp; Wales</span>
            <span className="lab">Practising since 1995</span>
          </div>
        </div>
      </footer>
    </div>
  );
}