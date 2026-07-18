'use client';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
      const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12});
        document.querySelectorAll('.rv').forEach(el=>io.observe(el));

        const pipe=document.getElementById('pipe');
        const stages=[...document.querySelectorAll('.stage')];
        let started=false;
        function runPipe(){stages.forEach(s=>s.classList.remove('lit'));stages.forEach((s,i)=>setTimeout(()=>s.classList.add('lit'),i*1150));}
        const po=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&!started){started=true;runPipe();setInterval(runPipe,6000);}}),{threshold:.4});
        if(pipe)po.observe(pipe);
  }, []);

  return (
    <div className="p-home">
        <div className="topbar">
          <div className="wrap">
            <a href="/" className="brand">Sala<span>ro</span></a>
            <nav className="nav"><a href="/practice">Practice</a><a href="/work">Work</a><a href="/studio">Studio</a><a href="/writing">Writing</a><a href="/contact">Contact</a></nav>
            <a href="tel:+447485222490" className="top-cta">Start a project</a>
          </div>
        </div>


        <header className="hero drifting-field">
          <div className="wrap"><div className="grid">
            <div className="hero-left">
              <span className="lab a">A UK-led digital consultancy</span>
              <span className="lab">Practising since 1995</span>
              <div className="hero-graphic">
                <svg viewBox="0 0 150 130" aria-hidden="true">
                  <line className="edge hot" x1="20" y1="26" x2="72" y2="52"/>
                  <line className="edge hot" x1="72" y1="52" x2="126" y2="34"/>
                  <line className="edge hot" x1="72" y1="52" x2="100" y2="98"/>
                  <line className="edge" x1="20" y1="26" x2="34" y2="88"/>
                  <line className="edge" x1="34" y1="88" x2="100" y2="98"/>
                  <line className="edge" x1="126" y1="34" x2="100" y2="98"/>
                  <circle className="node" cx="20" cy="26" r="3.5"/>
                  <circle className="node hot" cx="72" cy="52" r="5"/>
                  <circle className="node" cx="126" cy="34" r="3.5"/>
                  <circle className="node" cx="34" cy="88" r="3.5"/>
                  <circle className="node hot" cx="100" cy="98" r="3.5"/>
                </svg>
              </div>
              <div className="ops">
                <span className="lab">Pipeline live · queue clear</span>
                <span className="lab">Human review · engaged</span>
                <span className="lab">Repo access · on request</span>
              </div>
            </div>

            <div className="hero-right">
              <h1 className="serif">
                <span className="reveal-line"><span>Custom digital</span></span>
                <span className="reveal-line"><span>solutions for <span className="it">businesses</span></span></span>
                <span className="reveal-line"><span>ready to scale.</span></span>
              </h1>
              <p className="sub">We work with growing businesses to shape bespoke digital products, practical transformation, and long-term support with calm delivery.</p>
              <div className="actions">
                <a href="tel:+447485222490" className="btn-line">Take your business online <span className="arw">→</span></a>
                <a href="tel:+447485222490" className="phone">Phone <b>07485 222490</b></a>
              </div>
              <div className="built">Built on code, not templates.</div>
            </div>

            <div className="hero-viz">
              <div className="viz-head"><span className="lab a">Pipeline</span><span className="live"><i></i>Live</span></div>
              <svg className="spark" viewBox="0 0 240 84" aria-hidden="true">
                <path className="s-area" d="M10,56 L50,47 L90,53 L130,38 L170,43 L210,29 L230,23 L230,80 L10,80 Z"/>
                <path className="s-line" d="M10,56 L50,47 L90,53 L130,38 L170,43 L210,29 L230,23"/>
                <circle className="s-end" cx="230" cy="23" r="3.5"/>
              </svg>
              <div className="hstat"><b className="serif">30+</b><span>years of practice</span></div>
              <div className="hstat"><b className="serif">Direct</b><span>collaboration</span></div>
            </div>
          </div></div>
        </header>


        <div className="signal-line"></div>
        <section className="pipeline band contour-drift">
          <div className="wrap">
            <div className="head-row rv">
              <h2 className="serif">How We Build<span className="it">Better Technology</span>.</h2>
              <p className="desc">Every project follows a proven delivery pipeline—strategy, research, development, and review. Each stage builds on the last, with expert human oversight throughout, ensuring every solution is thoughtful, reliable, and ready to perform.</p>
            </div>
            <div className="pipe-markers">
              <span className="lab a">Human judgment · lead</span>
              <span className="lab">Build pipeline · live</span>
            </div>
            <div className="pipe rv" id="pipe">
              <div className="track"><span className="pulse"></span></div>
              <div className="stages">
<div className="stage"><div className="dot"></div><div className="n">i</div><h4>Discover</h4></div>
<div className="stage"><div className="dot"></div><div className="n">ii</div><h4>Strategy</h4></div>
<div className="stage"><div className="dot"></div><div className="n">iii</div><h4>Design</h4></div>
<div className="stage"><div className="dot"></div><div className="n">iv</div><h4>Develop</h4></div>
<div className="stage"><div className="dot"></div><div className="n">v</div><h4>Launch</h4></div>
              </div>
            </div>
            <div className="pipe-foot">
              <span className="lab">Every stage · human reviewed</span>
              <span className="lab a">i → v · practising since 1995</span>
            </div>
          </div>
        </section>


        <div className="signal-line"></div>

<section className="services band contour-drift">
  <div className="wrap">
    <div className="eyebrow lab a rv">Capabilities</div>

    <h2
      className="serif rv"
      style={{ fontSize: "clamp(32px,4.4vw,54px)", marginBottom: "64px" }}
    >
      Digital solutions <span className="it">built to scale</span>.
    </h2>

    <div className="svc-grid rv">

      <div className="svc">
        <div className="idx serif">01</div>
        <div className="kind lab a">Development</div>
        <h3 className="serif"><span className="it">Web</span> Experiences.</h3>
        <p>
          High-performance websites and custom web applications designed for
          speed, accessibility, and long-term growth.
        </p>
        <a href="/studio" className="arwlink">
          Learn More <span className="arw">→</span>
        </a>
      </div>

      <div className="svc">
        <div className="idx serif">02</div>
        <div className="kind lab a">Commerce</div>
        <h3 className="serif"><span className="it">E-commerce</span> Platforms.</h3>
        <p>
          Custom online stores that simplify purchasing, improve conversions,
          and grow alongside your business.
        </p>
        <a href="/studio" className="arwlink">
          Learn More <span className="arw">→</span>
        </a>
      </div>

      <div className="svc">
        <div className="idx serif">03</div>
        <div className="kind lab a">Mobile</div>
        <h3 className="serif"><span className="it">Apps</span> & Platforms.</h3>
        <p>
          Native and cross-platform mobile applications built with exceptional
          performance, usability, and scalability.
        </p>
        <a href="/studio" className="arwlink">
          Learn More <span className="arw">→</span>
        </a>
      </div>

      <div className="svc">
        <div className="idx serif">04</div>
        <div className="kind lab a">Intelligence</div>
        <h3 className="serif"><span className="it">AI</span> Solutions.</h3>
        <p>
          AI-powered automation, intelligent workflows, chatbots, and data
          solutions that deliver measurable business value.
        </p>
        <a href="/studio" className="arwlink">
          Learn More <span className="arw">→</span>
        </a>
      </div>

    </div>

    <div className="svc-markers rv">
      <div className="mk">
        <div className="k lab a">Projects</div>
        <div className="v">Web, Mobile & AI</div>
      </div>

      <div className="mk">
        <div className="k lab a">Solutions</div>
        <div className="v">Custom Built</div>
      </div>

      <div className="mk">
        <div className="k lab a">Technology</div>
        <div className="v">Modern & Scalable</div>
      </div>

      <div className="mk">
        <div className="k lab a">Approach</div>
        <div className="v">Strategy First</div>
      </div>
    </div>

  </div>
</section>

        <section className="feature band">
          <div className="wrap"><div className="grid">
            <div className="rv">
              <div className="eyebrow lab a">Cross-Platform Development</div>
              <h2 className="serif">Built for every<span className="it"> device</span>.</h2>
              <p>We design and develop high-performance applications that deliver a seamless experience across web, iOS, Android, tablets, and desktop—engineered to scale with your business.</p>
              <div className="marker lab">Bespoke digital products · practical delivery</div>
            </div>
            <div className="device rv">
              <div className="mobile-signal">
         <svg width="100%" viewBox="0 0 680 380" xmlns="http://www.w3.org/2000/svg">
<defs>
<marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M2 1L8 5L2 9" fill="none" stroke="#3d3d3a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</marker>
</defs>

<circle cx="340" cy="190" r="52" fill="var(--paper)" stroke="var(--accent)" stroke-width="2"/>
<text x="340" y="184" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="500" fill="var(--accent)">Shared</text>
<text x="340" y="202" text-anchor="middle" font-family="sans-serif" font-size="13" font-weight="500" fill="var(--accent)">core</text>

<g transform="translate(280,30)">
<rect x="0" y="0" width="120" height="76" rx="4" fill="var(--paper)" stroke="var(--accent)" stroke-width="1.5"/>
<rect x="8" y="8" width="104" height="60" rx="2" fill="rgba(122,47,28,.06)" opacity="0.8"/>
<rect x="45" y="76" width="30" height="8" fill="var(--accent)"/>
<rect x="30" y="84" width="60" height="5" rx="2" fill="var(--accent)"/>
</g>
<line x1="330" y1="106" x2="330" y2="140" stroke="var(--line-fine)" stroke-width="1.5"/>

<g transform="translate(70,120)">
<rect x="0" y="0" width="130" height="80" rx="6" fill="var(--paper)" stroke="var(--accent)" stroke-width="1.5"/>
<rect x="8" y="8" width="114" height="64" rx="2" fill="rgba(122,47,28,.06)" opacity="0.8"/>
<rect x="-10" y="80" width="150" height="7" rx="3" fill="var(--accent)"/>
</g>
<line x1="200" y1="160" x2="288" y2="180" stroke="var(--line-fine)" stroke-width="1.5"/>

<g transform="translate(480,110)">
<rect x="0" y="0" width="90" height="120" rx="8" fill="var(--paper)" stroke="var(--accent)" stroke-width="1.5"/>
<rect x="8" y="10" width="74" height="90" rx="2" fill="rgba(122,47,28,.06)" opacity="0.8"/>
<circle cx="45" cy="108" r="3" fill="var(--accent)"/>
</g>
<line x1="480" y1="170" x2="392" y2="185" stroke="var(--line-fine)" stroke-width="1.5"/>

<g transform="translate(150,260)">
<rect x="0" y="0" width="56" height="100" rx="10" fill="var(--paper)" stroke="var(--accent)" stroke-width="1.5"/>
<rect x="6" y="12" width="44" height="74" rx="2" fill="rgba(122,47,28,.06)" opacity="0.8"/>
<circle cx="28" cy="92" r="3" fill="var(--accent)"/>
</g>
<line x1="200" y1="270" x2="292" y2="225" stroke="var(--line-fine)" stroke-width="1.5"/>

<g transform="translate(470,260)">
<rect x="0" y="0" width="56" height="100" rx="10" fill="var(--paper)" stroke="var(--accent)" stroke-width="1.5"/>
<rect x="6" y="12" width="44" height="74" rx="2" fill="rgba(122,47,28,.06)" opacity="0.8"/>
<circle cx="28" cy="92" r="3" fill="var(--accent)"/>
</g>
<line x1="480" y1="270" x2="388" y2="225" stroke="var(--line-fine)" stroke-width="1.5"/>

<text x="340" y="360" text-anchor="middle" font-family="sans-serif" font-size="13" fill="var(--ink-soft)">One architecture, every device</text>
</svg>
              </div>
            </div>
          </div></div>
        </section>


        <section className="shop band">
          <div className="wrap">

            <div className="shop-top">
              <div className="shop-copy rv">
                <div className="eyebrow lab a">E-commerce Solutions</div>
                <h2 className="serif">Online stores built to <span className="it">grow your business</span>.</h2>
                <p>We design and develop high-performance e-commerce platforms that deliver seamless shopping experiences, simplify management, and turn visitors into loyal customers.</p>
                <div className="actions">
                  <a href="tel:+447485222490" className="btn-line">Start a Project <span className="arw">→</span></a>
                  <a href="/work" className="arwlink">View Our Work <span className="arw">→</span></a>
                </div>
              </div>

              <div className="shop-stage rv">
                <svg className="shop-art" viewBox="0 0 540 420" role="img" aria-label="A storefront with a live basket and a rising conversion curve">
                  <defs>
                    <filter id="chipShadow" x="-30%" y="-30%" width="160%" height="180%">
                      <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#26201A" floodOpacity="0.16" />
                    </filter>
                  </defs>

                  {/* browser window */}
                  <rect className="pane" x="20" y="20" width="440" height="310" rx="6" />
                  <line className="ln" x1="20" y1="56" x2="460" y2="56" />
                  <circle className="dot" cx="40" cy="38" r="3.5" />
                  <circle className="dot" cx="54" cy="38" r="3.5" />
                  <circle className="dot" cx="68" cy="38" r="3.5" />
                  <rect className="bar" x="100" y="31" width="180" height="14" rx="7" />

                  {/* hero band */}
                  <rect className="wash" x="36" y="70" width="408" height="76" rx="4" />
                  <rect className="hot" x="52" y="88" width="104" height="9" rx="4" />
                  <rect className="bar" x="52" y="104" width="168" height="6" rx="3" />
                  <rect className="hot" x="52" y="120" width="64" height="16" rx="8" />
                  <g className="line" transform="translate(374,88)">
                    <path d="M6,14 H38 L34,44 H10 Z" />
                    <path d="M15,14 V9 a7,7 0 0 1 14,0 V14" />
                  </g>

                  {/* product grid */}
                  <g>
                    <rect className="pane" x="36" y="164" width="120" height="100" rx="4" />
                    <rect className="wash" x="46" y="174" width="100" height="54" rx="2" />
                    <rect className="bar" x="46" y="238" width="58" height="6" rx="3" />
                    <rect className="bar" x="46" y="250" width="34" height="5" rx="2.5" />
                  </g>
                  <g>
                    <rect className="pane sel" x="174" y="164" width="120" height="100" rx="4" />
                    <rect className="wash hot-wash" x="184" y="174" width="100" height="54" rx="2" />
                    <rect className="hot" x="184" y="238" width="58" height="6" rx="3" />
                    <rect className="bar" x="184" y="250" width="34" height="5" rx="2.5" />
                  </g>
                  <g>
                    <rect className="pane" x="312" y="164" width="120" height="100" rx="4" />
                    <rect className="wash" x="322" y="174" width="100" height="54" rx="2" />
                    <rect className="bar" x="322" y="238" width="58" height="6" rx="3" />
                    <rect className="bar" x="322" y="250" width="34" height="5" rx="2.5" />
                  </g>

                  <circle className="dot" cx="220" cy="292" r="3.5" />
                  <circle className="hot" cx="236" cy="292" r="4" />
                  <circle className="dot" cx="252" cy="292" r="3.5" />

                  {/* basket chip */}
                  <g filter="url(#chipShadow)" transform="translate(330,296)">
                    <rect className="chip" x="0" y="0" width="186" height="80" rx="8" />
                    <g className="line" transform="translate(20,24)">
                      <path d="M4,10 H28 L25,32 H7 Z" />
                      <path d="M11,10 V6 a5,5 0 0 1 10,0 V10" />
                    </g>
                    <rect className="bar" x="66" y="24" width="94" height="7" rx="3.5" />
                    <rect className="bar" x="66" y="40" width="62" height="6" rx="3" />
                    <rect className="hot" x="66" y="56" width="44" height="8" rx="4" />
                  </g>

                  {/* conversion chip */}
                  <g filter="url(#chipShadow)" transform="translate(24,288)">
                    <rect className="chip" x="0" y="0" width="176" height="104" rx="8" />
                    <rect className="bar" x="18" y="18" width="72" height="7" rx="3.5" />
                    <line className="ln" x1="18" y1="86" x2="158" y2="86" />
                    <path className="spark" d="M18,76 L48,60 L78,66 L110,42 L150,24" />
                    <circle className="hot" cx="150" cy="24" r="4.5" />
                  </g>
                </svg>
              </div>
            </div>

            <div className="shop-feats rv">
              <div className="feat">
                <span className="fic"><svg viewBox="0 0 24 24"><path d="M4 7 h16 l-1.6 12 H5.6 Z" /><path d="M9 7 V5.5 a3 3 0 0 1 6 0 V7" /><path d="M8.5 11 h7" /></svg></span>
                <div><h4 className="serif">Fast, intuitive shopping</h4><p>Discovery, cart, and checkout tuned so buying never stalls.</p></div>
              </div>
              <div className="feat">
                <span className="fic"><svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10.5 h18" /><path d="M6.5 15.5 h4" /></svg></span>
                <div><h4 className="serif">Secure payments</h4><p>Stripe, PayPal, and Razorpay integrated and properly tested.</p></div>
              </div>
              <div className="feat">
                <span className="fic"><svg viewBox="0 0 24 24"><rect x="2.5" y="5" width="13" height="14" rx="2" /><rect x="17.5" y="8" width="4" height="11" rx="1.5" /><path d="M6 16 h6" /></svg></span>
                <div><h4 className="serif">Responsive by default</h4><p>One build that holds its shape on desktop, tablet, and phone.</p></div>
              </div>
              <div className="feat">
                <span className="fic"><svg viewBox="0 0 24 24"><path d="M12 3 21 7.5 V16.5 L12 21 3 16.5 V7.5 Z" /><path d="M3 7.5 12 12 21 7.5 M12 12 V21" /></svg></span>
                <div><h4 className="serif">Inventory &amp; orders</h4><p>Stock, fulfilment, and returns managed from one calm place.</p></div>
              </div>
              <div className="feat">
                <span className="fic"><svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5" /><path d="M15.5 15.5 21 21" /><path d="M8 10.5 h5" /></svg></span>
                <div><h4 className="serif">SEO-ready architecture</h4><p>Clean structure and metadata so the right pages get found.</p></div>
              </div>
              <div className="feat">
                <span className="fic"><svg viewBox="0 0 24 24"><path d="M4 18 V13 M10 18 V9 M16 18 V11 M22 18 V5" /><path d="M2 21 h20" /></svg></span>
                <div><h4 className="serif">Built to scale</h4><p>Foundations that cope as catalogue, traffic, and team grow.</p></div>
              </div>
            </div>

            <div className="mini-table rv">
              <div>
                <div className="mt-k">Platform</div>
                <div className="mt-v lab">Shopify · WooCommerce · Custom</div>
              </div>
              <div>
                <div className="mt-k">Payments</div>
                <div className="mt-v lab">Stripe · PayPal · Razorpay</div>
              </div>
              <div>
                <div className="mt-k">Performance</div>
                <div className="mt-v lab">Fast · Secure · Scalable</div>
              </div>
            </div>

          </div>
        </section>


        <section className="clients band">
          <div className="wrap rv">
            <div className="eyebrow lab a">Selected work</div>
            <h2 className="serif">A few examples of the <span className="it">work</span> we’ve helped shape.</h2>
            <div className="client-row">
              <div className="c">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginBottom: '16px'}}>
                  <path d="M8 38L14 26L22 32L36 12" stroke="#7a2f1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="4" y="4" width="44" height="44" rx="2" stroke="#7a2f1c" strokeWidth="1.5" fill="none"/>
                </svg>
                <span>Product strategy</span>
              </div>
              <div className="c">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginBottom: '16px'}}>
                  <path d="M12 16L20 12L28 16V32L20 36L12 32V16Z" stroke="#7a2f1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M28 16L36 12L44 16V32L36 36L28 32V16Z" stroke="#7a2f1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M20 36V44L12 40V32" stroke="#7a2f1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Digital build</span>
              </div>
              <div className="c">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginBottom: '16px'}}>
                  <path d="M10 26L19 35L42 12" stroke="#7a2f1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="26" cy="26" r="22" stroke="#7a2f1c" strokeWidth="1.5" fill="none"/>
                </svg>
                <span>Platform review</span>
              </div>
              <div className="c">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginBottom: '16px'}}>
                  <rect x="8" y="16" width="36" height="24" rx="2" stroke="#7a2f1c" strokeWidth="1.5" fill="none"/>
                  <path d="M8 20H44" stroke="#7a2f1c" strokeWidth="1.5"/>
                  <circle cx="12" cy="34" r="1.5" fill="#7a2f1c"/>
                  <circle cx="18" cy="34" r="1.5" fill="#7a2f1c"/>
                </svg>
                <span>Experience design</span>
              </div>
            </div>
          </div>
        </section>


        <section className="sector band">
          <div className="wrap rv">
            <div className="eyebrow lab a">Sector focus · growing businesses</div>
            <div className="two">
              <div className="top-row" style={{alignItems:'center'}}>
                <div className="text">
                  <div className="sec-markers">
                    <span className="lab">SMEs</span><span className="lab">Professional services</span><span className="lab">Retail &amp; hospitality</span>
                  </div>
                  <h2 className="serif">Practical digital work for <span className="it">teams</span> ready to grow.</h2>
                  <p className="lead">We help ambitious businesses shape clear digital products, modernise legacy systems, and create a calmer path to growth.</p>
                  <div className="sec-markers">
                    <span className="lab a">Web platforms</span><span className="lab a">Product design</span><span className="lab a">Digital strategy</span><span className="lab a">Long-term support</span>
                  </div>
                </div>
                <div className="image" style={{display:'flex', justifyContent:'center'}}>
                  <div style={{width:'100%', minHeight:'220px', display:'grid', gridTemplateColumns:'1fr 1fr', gridTemplateRows:'1fr 1fr', alignItems:'center', maxWidth:720}}>
                    <div style={{padding:'45px 48px', textAlign:'center', borderRight:'1px solid var(--line-fine)'}}>
                      <b className="serif" style={{fontSize:'48px', lineHeight:1, color:'var(--accent)'}}>98<em style={{fontStyle:'normal', fontSize:'20px', marginLeft:'6px', color:'var(--accent)'}}>%</em></b>
                      <div className="tag" style={{marginTop:'12px', color:'var(--ink-soft)'}}>CLIENT RETENTION</div>
                    </div>
                    <div style={{padding:'34px 48px', textAlign:'center', borderLeft:'1px solid var(--line-fine)'}}>
                      <b className="serif" style={{fontSize:'44px', lineHeight:1, color:'var(--accent)'}}>40<em style={{fontStyle:'normal', fontSize:'18px', marginLeft:'6px', color:'var(--accent)'}}>+</em></b>
                      <div className="tag" style={{marginTop:'12px', color:'var(--ink-soft)'}}>PROJECTS DELIVERED</div>
                    </div>

                    <div style={{padding:'34px 48px', textAlign:'center', borderTop:'1px solid var(--line-fine)', borderRight:'1px solid var(--line-fine)'}}>
                      <b className="serif" style={{fontSize:'40px', lineHeight:1, color:'var(--accent)'}}>24</b>
                      <div className="tag" style={{marginTop:'12px', color:'var(--ink-soft)'}}>YEARS COMBINED EXPERIENCE</div>
                    </div>
                    <div style={{padding:'48px 48px', textAlign:'center', borderTop:'1px solid var(--line-fine)', borderLeft:'1px solid var(--line-fine)'}}>
                      <b className="serif" style={{fontSize:'40px', lineHeight:1, color:'var(--accent)'}}>24/7</b>
                      <div className="tag" style={{marginTop:'12px', color:'var(--ink-soft)'}}>SUPPORT</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rows">

                <a href="https://hbm.salaro.com/" target="_blank" rel="noopener noreferrer" className="feat-card">
                  <div className="feat-media">
                    <svg viewBox="0 0 400 200" role="img" aria-label="Preview of the HBM Partners site">
                      <rect className="fr" x="20" y="14" width="360" height="172" rx="5" />
                      <line className="fr-l" x1="20" y1="42" x2="380" y2="42" />
                      <circle className="fr-d" cx="36" cy="28" r="2.5" />
                      <circle className="fr-d" cx="46" cy="28" r="2.5" />
                      <circle className="fr-d" cx="56" cy="28" r="2.5" />
                      <rect className="fr-b" x="238" y="24" width="30" height="7" rx="3.5" />
                      <rect className="fr-b" x="276" y="24" width="30" height="7" rx="3.5" />
                      <rect className="fr-h" x="314" y="22" width="46" height="11" rx="5.5" />
                      <rect className="fr-t" x="44" y="66" width="150" height="12" rx="6" />
                      <rect className="fr-t" x="44" y="86" width="112" height="12" rx="6" />
                      <rect className="fr-b" x="44" y="112" width="176" height="6" rx="3" />
                      <rect className="fr-b" x="44" y="124" width="140" height="6" rx="3" />
                      <rect className="fr-h" x="44" y="146" width="62" height="14" rx="7" />
                      <rect className="fr-w" x="246" y="62" width="112" height="102" rx="4" />
                      <path className="fr-s" d="M258,140 L286,118 L312,126 L346,88" />
                      <circle className="fr-e" cx="346" cy="88" r="4" />
                    </svg>
                    <span className="feat-ribbon lab">Featured · Website</span>
                  </div>
                  <div className="feat-body">
                    <div className="feat-row">
                      <h4 className="serif">HBM Partners</h4>
                      <span className="feat-host lab">hbm.salaro.com</span>
                    </div>
                    <p>A considered digital presence for a professional services firm, built around clarity, trust, and thoughtful product storytelling.</p>
                    <div className="feat-tags"><span>Professional services</span><span>Brand &amp; build</span><span>Live</span></div>
                    <span className="arwlink">View the site <span className="arw">→</span></span>
                  </div>
                </a>

                <a href="tel:+447485222490" className="next-card">
                  <div className="next-mark" aria-hidden="true">
                    <svg viewBox="0 0 64 64"><path d="M32 18 V46 M18 32 H46" /></svg>
                  </div>
                  <div className="lab a">More work</div>
                  <h4 className="serif">Your project next.</h4>
                  <p>Digital strategy, bespoke builds, and practical support for teams that need a reliable partner without the usual agency noise.</p>
                  <span className="arwlink">Start a conversation <span className="arw">→</span></span>
                </a>

              </div>
            </div>
          </div>
        </section>


        <section className="ethos">
          <div className="wrap"><div className="grid">
            <div className="rv">
              <div className="eyebrow lab a">Ethos</div>
              <div className="small serif">Intelligent design over noise.</div>
            </div>
            <div className="big serif rv">We solve problems to produce intelligent designs, deliver engaging experiences and build <em>meaningful connections</em>. Whether it's website design or app development, we take your business online <em>the right way</em>.</div>
          </div></div>
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
              <div className="fcol"><h5>Contact</h5><a href="mailto:team@salaro.com">team@salaro.com</a><a href="#">UK-based</a><a href="#">LinkedIn</a></div>
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
