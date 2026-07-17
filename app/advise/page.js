'use client';

import { useEffect, useRef } from 'react';
import '../globals.css';

export default function AdvisePage() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.12 }
    );
    root.querySelectorAll('.rv').forEach((el) => io.observe(el));

    // Q&A accordion
    const qaItems = [...root.querySelectorAll('.qa-item')];
    const setPane = (item, open) => {
      const a = item.querySelector('.qa-a');
      item.classList.toggle('open', open);
      a.style.maxHeight = open ? a.scrollHeight + 'px' : '0px';
    };
    const clickHandlers = [];
    qaItems.forEach((item) => {
      const btn = item.querySelector('.qa-q');
      const onClick = () => {
        const isOpen = item.classList.contains('open');
        qaItems.forEach((i) => { if (i !== item) setPane(i, false); });
        setPane(item, !isOpen);
      };
      btn.addEventListener('click', onClick);
      clickHandlers.push([btn, onClick]);
    });
    const raf = requestAnimationFrame(() => {
      const first = root.querySelector('.qa-item.open');
      if (first) setPane(first, true);
    });

    const onResize = () => {
      const o = root.querySelector('.qa-item.open');
      if (!o) return;
      const a = o.querySelector('.qa-a');
      a.style.maxHeight = 'none';
      a.style.maxHeight = a.scrollHeight + 'px';
    };
    window.addEventListener('resize', onResize);

    // subnav scroll-spy
    const links = [...root.querySelectorAll('.subnav a[href^="#"]')];
    const map = new Map(links.map((l) => [l.getAttribute('href').slice(1), l]));
    const spy = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((l) => l.classList.remove('on'));
          map.get(e.target.id)?.classList.add('on');
        }
      }),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ['when', 'questions', 'engage', 'deliverables', 'sectors'].forEach((id) => {
      const el = root.querySelector('#' + id);
      if (el) spy.observe(el);
    });

    return () => {
      io.disconnect();
      spy.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      clickHandlers.forEach(([b, h]) => b.removeEventListener('click', h));
    };
  }, []);

  return (
    <div className="pg-advise" ref={rootRef}>
      <div className="topbar">
        <div className="wrap">
          <a href="/" className="brand">Sala<span>ro</span></a>
          <nav className="nav"><a href="/practice" className="here">Practice</a><a href="/work">Work</a><a href="/migrate">Migrate</a><a href="/studio">Studio</a><a href="/contact">Contact</a></nav>
          <a href="tel:+447485222490" className="top-cta">Book a call</a>
        </div>
      </div>

      {/* PAGE MASTHEAD */}
      <header className="masthead">
        <div className="wrap"><div className="grid">
          <div className="rv">
            <div className="eyebrow lab a kicker">Practice · Advise</div>
            <h1>Clear thinking <span className="it">before</span> you build.</h1>
            <p className="lead">Not every problem needs a new platform. Sometimes it needs an honest second opinion. We bring thirty years of practice to the decisions that come before the code — what to build, what to fix, what to leave well alone — so you commit with confidence, not on a hunch.</p>
          </div>
          <div className="aside rv">
            <div className="row"><span className="k">Service</span><span className="v">Advisory</span></div>
            <div className="row"><span className="k">Format</span><span className="v">Sprint · Fractional · Retained</span></div>
            <div className="row"><span className="k">Output</span><span className="v">Decisions you can act on</span></div>
            <div className="row"><span className="k">Bias</span><span className="v">Independent</span></div>
            <div className="cta">
              <a href="tel:+447485222490" className="btn-line">Book a call <span className="arw">→</span></a>
              <a href="tel:+447485222490" className="phone">Phone <b>07485 222490</b></a>
            </div>
          </div>
        </div></div>
      </header>

      {/* SECTION SUBNAV */}
      <nav className="subnav">
        <div className="wrap">
          <a href="#when" className="on">When to call us</a>
          <a href="#questions">Questions we answer</a>
          <a href="#engage">Engagements</a>
          <a href="#deliverables">Deliverables</a>
          <a href="#sectors">Sectors</a>
          <span className="grow"></span>
          <a href="tel:+447485222490" className="mini-cta">Book a call →</a>
        </div>
      </nav>

      {/* WHEN TO CALL */}
      <section className="signals band" id="when">
        <div className="wrap">
          <div className="head-row rv">
            <h2 className="serif">When an outside view <span className="it">pays for itself</span>.</h2>
            <p className="desc">Advice is cheapest at the start and most valuable before a big commitment. These are the moments teams tend to call.</p>
          </div>
          <div className="sig-grid rv">
            <div className="sig">
              <div className="n serif">01</div>
              <h4 className="serif">Before a big spend</h4>
              <p>You're about to commit budget to a rebuild, a replatform or a new vendor — and you want the decision pressure-tested by someone with no stake in the answer.</p>
            </div>
            <div className="sig">
              <div className="n serif">02</div>
              <h4 className="serif">When something's stuck</h4>
              <p>Delivery has slowed, quality is slipping, or nobody can quite say why the platform feels fragile. You need a clear diagnosis, not more opinions.</p>
            </div>
            <div className="sig">
              <div className="n serif">03</div>
              <h4 className="serif">When you're diligencing</h4>
              <p>You're buying, investing in, or inheriting a codebase, and you need an independent read on what you're actually taking on.</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUESTIONS WE ANSWER */}
      <section className="pipeline band" id="questions">
        <div className="wrap">
          <div className="head-row rv">
            <h2 className="serif">The questions clients <span className="it">bring us</span>.</h2>
            <p className="desc">Most advisory work starts with one of these. Open a question to see how we approach it — and what you'd walk away knowing.</p>
          </div>
          <div className="qa rv">
            <div className="qa-item open">
              <button className="qa-q"><span className="qi serif">01</span><span className="qt serif">Should we rebuild, or refactor what we have?</span><span className="qx"></span></button>
              <div className="qa-a"><div className="inner">A rebuild is the most expensive answer and rarely the right first move. We assess the existing system against where the business is heading, then give you a costed recommendation — refactor, replatform or rebuild — with the reasoning laid out so you can defend the call to the board.<span className="lab a">You leave with · a costed, defensible recommendation</span></div></div>
            </div>
            <div className="qa-item">
              <button className="qa-q"><span className="qi serif">02</span><span className="qt serif">Is our architecture holding us back?</span><span className="qx"></span></button>
              <div className="qa-a"><div className="inner">We review the architecture, data model and delivery pipeline for the bottlenecks that quietly tax every release. You get a prioritised list of what to fix now, what to plan for, and what's fine to leave — no gold-plating.<span className="lab a">You leave with · a prioritised remediation map</span></div></div>
            </div>
            <div className="qa-item">
              <button className="qa-q"><span className="qi serif">03</span><span className="qt serif">Where does AI actually fit in our product?</span><span className="qx"></span></button>
              <div className="qa-a"><div className="inner">We separate the AI features that would earn their place from the ones that only sound good in a roadmap. The output is a shortlist of high-value, feasible applications — with a realistic view of data, cost and risk.<span className="lab a">You leave with · a grounded AI opportunity shortlist</span></div></div>
            </div>
            <div className="qa-item">
              <button className="qa-q"><span className="qi serif">04</span><span className="qt serif">Why has our delivery slowed down?</span><span className="qx"></span></button>
              <div className="qa-a"><div className="inner">Slow delivery is usually a symptom, not a cause. We look at the code, the process and the handovers together to find where time actually goes, and hand back concrete changes a team can adopt without a reorg.<span className="lab a">You leave with · a diagnosis and practical fixes</span></div></div>
            </div>
            <div className="qa-item">
              <button className="qa-q"><span className="qi serif">05</span><span className="qt serif">Is this codebase worth acquiring?</span><span className="qx"></span></button>
              <div className="qa-a"><div className="inner">For technical due diligence we assess code quality, key-person risk, security posture and the true cost of ownership — then summarise it in language an investment committee can act on, with the red flags stated plainly.<span className="lab a">You leave with · an investment-ready diligence report</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENTS */}
      <section className="risks band" id="engage">
        <div className="wrap rv">
          <div className="eyebrow lab a">How we work together</div>
          <h2 className="serif">Ways to bring us <span className="it">in</span>.</h2>
          <div className="risk-row">
            <div className="risk">
              <div className="k lab a">Format 01</div>
              <h4 className="serif">Audit sprint</h4>
              <p>A fixed one- to two-week engagement that ends in a written assessment and a prioritised set of recommendations. The fastest way to get clarity on a single question.</p>
            </div>
            <div className="risk">
              <div className="k lab a">Format 02</div>
              <h4 className="serif">Fractional CTO</h4>
              <p>Technical leadership on a part-time, ongoing basis — for founders and teams who need strategic judgment without the full-time hire.</p>
            </div>
            <div className="risk">
              <div className="k lab a">Format 03</div>
              <h4 className="serif">Technical due diligence</h4>
              <p>An independent read on a codebase, team and architecture for investors and acquirers — delivered to a timeline that fits the deal.</p>
            </div>
            <div className="risk">
              <div className="k lab a">Format 04</div>
              <h4 className="serif">Roadmap &amp; strategy</h4>
              <p>A structured engagement to turn a broad ambition into a sequenced, costed technology plan your team and stakeholders can get behind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="shop band" id="deliverables">
        <div className="wrap"><div className="grid">
          <div className="rv">
            <div className="eyebrow lab a">What you walk away with</div>
            <h2 className="serif">Advice you can <span className="it">act on</span>, not a slide deck.</h2>
            <p>Every engagement ends in something concrete — written down, reasoned through, and specific enough to put in front of a board or a build team the same week.</p>
            <div className="actions">
              <a href="tel:+447485222490" className="btn-line">Book a call <span className="arw">→</span></a>
              <a href="/work" className="arwlink">See our work <span className="arw">→</span></a>
            </div>
          </div>
          <div className="rv">
            <ul className="checklist">
              <li>A written assessment in plain language</li>
              <li>Prioritised, costed recommendations</li>
              <li>A sequenced roadmap where one's needed</li>
              <li>Risks and trade-offs stated plainly</li>
              <li>A live session to walk the team through it</li>
              <li>An independent view — no upsell attached</li>
            </ul>
            <div className="mini-table">
              <div><div className="mt-k">Turnaround</div><div className="mt-v lab">1–2 weeks</div></div>
              <div><div className="mt-k">Format</div><div className="mt-v lab">Written + live</div></div>
              <div><div className="mt-k">Bias</div><div className="mt-v lab">Independent</div></div>
            </div>
          </div>
        </div></div>
      </section>

      {/* SECTORS / CLIENTS */}
      <section className="clients band" id="sectors">
        <div className="wrap rv">
          <div className="eyebrow lab a">Where we advise</div>
          <h2 className="serif">Teams and boards we've <span className="it">counselled</span>.</h2>
          <div className="client-row">
            <a href="https://cleverbotanics.com/" className="c">Clever Botanics<small>Rebuild vs refactor</small></a>
            <a href="https://hbm.salaro.com/" className="c">HBM Partners<small>Technology strategy</small></a>
            <a href="https://properties.co.uk/" className="c">Properties.co.uk<small>Architecture review</small></a>
            <a href="https://askdroid.com/" className="c">Askdroid<small>Technical diligence</small></a>
          </div>
        </div>
      </section>

      {/* ETHOS */}
      <section className="ethos">
        <div className="wrap"><div className="grid">
          <div className="rv">
            <div className="eyebrow lab a">Ethos</div>
            <div className="small serif">The best advice sometimes costs us the build.</div>
          </div>
          <div className="big serif rv">We'd rather tell you not to build something than sell you a project you don't need. Independent judgment is the whole value of advice — so we give it <em>straight</em>, even when the honest answer is to <em>do less</em>. That trust is what brings clients back when they are ready to build.</div>
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
            <div className="fcol"><h5>Contact</h5><a href="mailto:hello@salaro.com">hello@salaro.com</a><a href="#">Guildford, Surrey</a><a href="#">LinkedIn</a></div>
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