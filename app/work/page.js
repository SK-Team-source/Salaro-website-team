'use client';
import { useEffect } from 'react';
import Image from 'next/image';

export default function WorkPage() {
  useEffect(() => {
      const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.08});
        document.querySelectorAll('.rv').forEach(el=>io.observe(el));
  }, []);

  return (
    <div className="p-work">
        <div className="topbar">
          <div className="wrap">
            <a href="/" className="brand">Sala<span>ro</span></a>
            <nav className="nav"><a href="/practice">Practice</a><a href="/work" className="active">Work</a><a href="/studio">Studio</a><a href="/writing">Writing</a><a href="/contact">Contact</a></nav>
            <a href="tel:+447485222490" className="top-cta">Start a project</a>
          </div>
        </div>


        <header className="hero drifting-field">
          <div className="wrap">
            <div className="hero-inner">
              <div className="hero-copy">
                <div className="eyebrow lab a">Selected work · 1995 — now</div>
                <h1 className="serif">
                  <span className="reveal-line"><span>Practising since</span></span>
                  <span className="reveal-line"><span><span className="it">1995</span>.</span></span>
                </h1>
                <p className="sub">Most recent client work is under confidentiality and not listed here. The archive below is a sample of the kind of work we've done — and, increasingly, the kind we now do faster.</p>
              </div>
              <div className="hero-viz">
                <div className="viz-cap"><span className="lab a">Selected work</span><span className="lab">1995 — now</span></div>
                <div className="viz-fig"><span className="serif">30+</span><span className="lab">years of practice</span></div>
                <div className="barchart">
                  <div className="bar" style={{height: '18%', animationDelay: '.04s'}}></div>
                  <div className="bar" style={{height: '27%', animationDelay: '.10s'}}></div>
                  <div className="bar" style={{height: '31%', animationDelay: '.16s'}}></div>
                  <div className="bar" style={{height: '39%', animationDelay: '.22s'}}></div>
                  <div className="bar" style={{height: '35%', animationDelay: '.28s'}}></div>
                  <div className="bar" style={{height: '47%', animationDelay: '.34s'}}></div>
                  <div className="bar" style={{height: '55%', animationDelay: '.40s'}}></div>
                  <div className="bar" style={{height: '63%', animationDelay: '.46s'}}></div>
                  <div className="bar hot" style={{height: '74%', animationDelay: '.52s'}}></div>
                  <div className="bar hot" style={{height: '88%', animationDelay: '.58s'}}></div>
                  <div className="bar hot" style={{height: '100%', animationDelay: '.64s'}}></div>
                </div>
                <div className="axis"><span>1995</span><span>2005</span><span>2015</span><span>2026</span></div>
              </div>
            </div>
          </div>
        </header>

        <div className="signal-line"></div>

        <section className="group contour-drift">
          <div className="wrap"><div className="grid">
            <div className="aside rv">
              <div className="k lab a">Recent client work</div>
              <h2 className="serif">Recent <span className="it">client</span> work.</h2>
              <p>Recent client work is described on a call rather than listed publicly. We're happy to walk through two or three relevant examples in conversation.</p>
            </div>
             <div className="cards rv">
              <div className="card">
                <div className="thumb" style={{objectFit: 'cover', width: '100%', height: '300px', display: 'block', background: 'linear-gradient(135deg, #efe8da, #f5f0e6)', border: '1px solid var(--line-fine)'}}></div>
                <div className="meta"><span className="lab">Corporate</span><span className="lab">2026</span></div>
                <h3 className="serif">Strategy-led platform work</h3>
              </div>
              <div className="card">
                <div className="thumb" style={{objectFit: 'cover', width: '100%', height: '300px', display: 'block', background: 'linear-gradient(135deg, #efe8da, #f5f0e6)', border: '1px solid var(--line-fine)'}}></div>
                <div className="meta"><span className="lab">Brand</span><span className="lab">2015</span></div>
                <h3 className="serif">Experience and content systems</h3>
              </div>
              <div className="card">
                <div className="thumb" style={{objectFit: 'cover', width: '100%', height: '300px', display: 'block', background: 'linear-gradient(135deg, #efe8da, #f5f0e6)', border: '1px solid var(--line-fine)'}}></div>
                <div className="meta"><span className="lab">Brand</span><span className="lab">2020</span></div>
                <h3 className="serif">Product direction and delivery</h3>
              </div>
            </div>
          </div></div>
        </section>


        <section className="group">
          <div className="wrap"><div className="grid">
            <div className="aside rv">
              <div className="k lab a">Properties &amp; owned work</div>
              <h2 className="serif">Properties &amp; <span className="it">owned</span> work.</h2>
              <p>Projects we own or operate, distinct from client work — live ventures, in-development products, and our own legacy platform.</p>
            </div>
          
          
            <div className="cards rv">
              <div className="card">
                <div className="thumb" style={{objectFit: 'cover', width: '100%', height: '300px', display: 'block', background: 'linear-gradient(135deg, #efe8da, #f5f0e6)', border: '1px solid var(--line-fine)'}}></div>
                <div className="meta"><span className="lab">Platform</span><span className="lab">2023</span></div>
                <h3 className="serif">Owned product thinking</h3>
              </div>
              <div className="card">
                <div className="thumb" style={{objectFit: 'cover', width: '100%', height: '300px', display: 'block', background: 'linear-gradient(135deg, #efe8da, #f5f0e6)', border: '1px solid var(--line-fine)'}}></div>
                <div className="meta"><span className="lab">Brand</span><span className="lab">2015</span></div>
                <h3 className="serif">Commerce and growth systems</h3>
              </div>
              <div className="card">
                <div className="thumb" style={{objectFit: 'cover', width: '100%', height: '300px', display: 'block', background: 'linear-gradient(135deg, #efe8da, #f5f0e6)', border: '1px solid var(--line-fine)'}}></div>
                <div className="meta"><span className="lab">E-commerce</span><span className="lab">2019</span></div>
                <h3 className="serif">Practical product delivery</h3>
              </div>
            </div>


          </div></div>
        </section>


      


        <section className="founded">
          <div className="wrap rv">
            <div className="k lab a">Salaro founded</div>
            <h2 className="serif">The practice begins.</h2>
            <div className="yr lab">Practising since 1995</div>
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
