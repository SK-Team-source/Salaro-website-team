'use client';
import { useEffect, useState } from 'react';
import CapabilityDemo from './components/CapabilityDemo';
import PhpNoticeBar from './components/PhpNoticeBar';

export default function HomePage() {
  const [activeStage, setActiveStage] = useState(0);
  const [deviceFocus, setDeviceFocus] = useState(0);
  const [focus, setFocus] = useState(0);
  const [chartMode, setChartMode] = useState(0);
  const chart = chartMode === 0 ? [56,47,53,38,43,29,23] : [65,59,44,48,32,35,18];
  const chartCurve = chart.reduce((path, y, i) => {
    const x = 10 + i * 36;
    return i === 0 ? `M${x},${y}` : `${path} C${x-18},${chart[i-1]} ${x-18},${y} ${x},${y}`;
  }, "");
  const nodes = [[45,42],[255,42],[45,145],[255,145],[150,94]];
  const labels = ["Build","Migrate","Advise","Scale","Core"];
  useEffect(() => {
    const elements = document.querySelectorAll('.p-home .rv');
    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    }), { threshold: 0, rootMargin: '0px 0px -16px 0px' });
    elements.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="p-home">
        <PhpNoticeBar />
        <div className="topbar">
          <div className="wrap">
            <a href="/" className="brand">Sala<span>ro</span></a>
            <nav className="nav"><a href="/practice">Practice</a><a href="/work">Work</a><a href="/studio">Studio</a><a href="/writing">Writing</a><a href="/contact">Contact</a></nav>
            <a href="/contact" className="top-cta">Start a project</a>
          </div>
        </div>


        <header className="hero drifting-field hero-motion-v13" onPointerLeave={e=>{e.currentTarget.style.removeProperty("--hero-x");e.currentTarget.style.removeProperty("--hero-y");}} onPointerMove={e=>{const r=e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty("--hero-x",`${e.clientX-r.left}px`);e.currentTarget.style.setProperty("--hero-y",`${e.clientY-r.top}px`);}}>
          <div className="hero-wired-field" aria-hidden="true"><svg viewBox="0 0 1920 900" preserveAspectRatio="none" focusable="false">
            <g className="hero-wire wire-copper"><path d="M0 75 H125 L170 30 H460 L500 70 H610"/><path className="wire-signal" d="M0 75 H125 L170 30 H460 L500 70 H610" pathLength="100" style={{animationDelay:"-0.0s"}}/><circle cx="0" cy="75" r="3"/><circle cx="170" cy="30" r="3"/><circle cx="500" cy="70" r="3"/></g>
            <g className="hero-wire wire-teal"><path d="M0 310 H38 L72 276 V155 L105 122"/><path className="wire-signal" d="M0 310 H38 L72 276 V155 L105 122" pathLength="100" style={{animationDelay:"-1.3s"}}/><circle cx="0" cy="310" r="3"/><circle cx="72" cy="276" r="3"/><circle cx="105" cy="122" r="3"/></g>
            <g className="hero-wire wire-copper"><path d="M0 650 H45 L75 620 V440"/><path className="wire-signal" d="M0 650 H45 L75 620 V440" pathLength="100" style={{animationDelay:"-2.6s"}}/><circle cx="0" cy="650" r="3"/><circle cx="75" cy="620" r="3"/></g>
            <g className="hero-wire wire-copper"><path d="M650 0 V38 L690 78 H820"/><path className="wire-signal" d="M650 0 V38 L690 78 H820" pathLength="100" style={{animationDelay:"-3.9s"}}/><circle cx="650" cy="0" r="3"/><circle cx="690" cy="78" r="3"/></g>
            <g className="hero-wire wire-teal"><path d="M1600 0 V42 L1640 82 H1770 L1840 152 H1920"/><path className="wire-signal" d="M1600 0 V42 L1640 82 H1770 L1840 152 H1920" pathLength="100" style={{animationDelay:"-5.2s"}}/><circle cx="1600" cy="0" r="3"/><circle cx="1640" cy="82" r="3"/><circle cx="1840" cy="152" r="3"/></g>
            <g className="hero-wire wire-copper"><path d="M1920 290 H1850 L1810 330 V470 L1760 520 H1650"/><path className="wire-signal" d="M1920 290 H1850 L1810 330 V470 L1760 520 H1650" pathLength="100" style={{animationDelay:"-6.5s"}}/><circle cx="1920" cy="290" r="3"/><circle cx="1810" cy="330" r="3"/><circle cx="1760" cy="520" r="3"/></g>
            <g className="hero-wire wire-copper"><path d="M1920 720 H1830 L1780 670 H1660"/><path className="wire-signal" d="M1920 720 H1830 L1780 670 H1660" pathLength="100" style={{animationDelay:"-7.8s"}}/><circle cx="1920" cy="720" r="3"/><circle cx="1780" cy="670" r="3"/></g>
            <g className="hero-wire wire-teal"><path d="M610 900 V790 L650 750 V570 L680 540"/><path className="wire-signal" d="M610 900 V790 L650 750 V570 L680 540" pathLength="100" style={{animationDelay:"-9.1s"}}/><circle cx="610" cy="900" r="3"/><circle cx="650" cy="750" r="3"/><circle cx="680" cy="540" r="3"/></g>
            <g className="hero-wire wire-copper"><path d="M1920 890 H1770 L1720 840 H1590"/><path className="wire-signal" d="M1920 890 H1770 L1720 840 H1590" pathLength="100" style={{animationDelay:"-10.4s"}}/><circle cx="1920" cy="890" r="3"/><circle cx="1720" cy="840" r="3"/></g>
          </svg></div>
          <div className="wrap"><div className="grid">
            <div className="hero-left">
              <span className="lab a">A UK-led digital consultancy</span>
              <span className="lab">Practising since 1995</span>
              <div className="journey-ledger"><span className="lab a">Our journey</span><div className="journey-years"><b>1995</b><span className="hero-journey-track" aria-hidden="true"><i /></span><b>Today</b></div><p>Built on code, not templates.</p></div>
              <div className="hero-graphic editorial-network">
                <span className="lab">Topology · explore the practice</span>
                <svg viewBox="0 0 300 185" aria-hidden="true">
                  <defs><pattern id="hero-grid-v5" width="15" height="15" patternUnits="userSpaceOnUse"><path d="M15 0H0V15" fill="none" stroke="#b69b85" strokeOpacity=".18"/></pattern></defs>
                  <rect width="300" height="185" fill="url(#hero-grid-v5)"/>
                  <ellipse cx="150" cy="94" rx="110" ry="67" className="v5-orbit"/><circle cx="150" cy="94" r="38" className="v5-orbit inner"/>
                  <circle r="3" fill="#a4442a" className="v5-packet"><animateMotion key={focus} dur="1.8s" repeatCount="indefinite" path={`M150 94 L${nodes[focus][0]} ${nodes[focus][1]} L150 94`}/></circle>
                  {nodes.slice(0,4).map(([x,y],i)=><line key={i} x1={x} y1={y} x2="150" y2="94" className={focus===i||focus===4?'active-edge':'quiet-edge'}/>)}
                  {nodes.map(([x,y],i)=><g key={i} onPointerEnter={()=>setFocus(i)} onClick={()=>setFocus(i)}><circle cx={x} cy={y} r="19" fill="transparent"/><circle cx={x} cy={y} r={focus===i?8:5} className={focus===i?'active-node':'quiet-node'}/><text x={x} y={y+(i<2?-16:23)} textAnchor="middle">{labels[i].toUpperCase()}</text></g>)}
                </svg>
                <div className="topology-controls">{labels.map((label,i)=><button key={label} aria-pressed={focus===i} onFocus={()=>setFocus(i)} onPointerEnter={()=>setFocus(i)} onClick={()=>setFocus(i)}>{label}</button>)}</div>
                <p className="topology-description" aria-live="polite">{["Bespoke digital products.","Practical digital transformation.","Expert human oversight.","Long-term support and growth.","Strategy, development and review."][focus]}</p>
              </div>

            </div>

            <div className="hero-right">
              <div className="hero-kicker"><span></span> BUILD · MIGRATE · ADVISE</div>
              <h1 className="serif"><span className="hero-reveal-part">Custom digital solutions for</span>{" "}<em className="it hero-reveal-part">businesses</em>{" "}<span className="hero-reveal-part">ready to scale.</span></h1>
              <p className="sub">We work with growing businesses to shape bespoke digital products, practical transformation, and long-term support with calm delivery.</p>
              <div className="actions">
                <a href="/contact" className="btn-line">Take your business online <span className="arw">→</span></a>
                <a href="tel:+447485222490" className="direct-call">
                  <span className="direct-call-icon" aria-hidden="true"><svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.69 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.26a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.69A2 2 0 0 1 22 16.92z"/><path d="M15 2a7 7 0 0 1 7 7M15 6a3 3 0 0 1 3 3"/></svg></span>
                  <span className="direct-call-content"><span>Call us directly</span><strong>07485 222490</strong></span><span className="direct-call-arrow" aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="built">Built on code, not templates.</div>
              <div className="hero-proof">            <div className="hero-viz">
              <div className="viz-head"><span className="lab a">Pipeline</span><span className="live"><i></i>Illustrative</span></div>
              <div className="v5-chart-tabs">{["Delivery", "Capacity"].map((name,i)=><button key={name} aria-pressed={chartMode===i} onClick={()=>setChartMode(i)}>{name}</button>)}</div>
              <svg className="spark teal-pipeline" viewBox="0 0 240 84" role="img" aria-label="Illustrative delivery and capacity workflow curve">
                <defs><linearGradient id="hero-teal-area" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#527c76" stopOpacity=".32"/><stop offset="100%" stopColor="#527c76" stopOpacity=".02"/></linearGradient></defs>
                {[20,40,60,80].map(y=><line key={y} x1="10" x2="230" y1={y} y2={y} stroke="#b9cbc3" strokeDasharray="2 4" opacity=".65"/>)}
                <g key={chartMode}>
                  <path className="teal-area" d={`${chartCurve} L226,80 L10,80 Z`} fill="url(#hero-teal-area)"/>
                  <path className="teal-curve" d={chartCurve} pathLength="1" fill="none"/>
                  <circle className="teal-particle" r="2.8" fill="#39736b"><animateMotion dur="4s" repeatCount="indefinite" path={chartCurve}/></circle>
                  {chart.map((y,i)=><g key={i} className="teal-point"><circle cx={10+i*36} cy={y} r="9" fill="transparent"/><circle className={i===6?'teal-halo endpoint':'teal-halo'} cx={10+i*36} cy={y} r="7"/><circle className="teal-dot" cx={10+i*36} cy={y} r={i===6?3.5:2.5}/></g>)}
                </g>
              </svg>
              <div className="hstat"><b className="serif">30+</b><span>years of practice</span></div>
              <div className="hstat"><b className="serif">Direct</b><span>collaboration</span></div>
            </div>              <div className="ops">
                <span className="lab">Pipeline live · queue clear</span>
                <span className="lab">Human review · engaged</span>
                <span className="lab">Repo access · on request</span>
              </div>
</div>
            </div>

          </div></div>
        </header>


        <div className="signal-line"></div>
        <section className="pipeline band contour-drift pipeline-aligned pipeline-spectrum pipeline-refined" data-stage={activeStage}>
          <div className="wrap">
            <div className="head-row rv">
              <h2 className="serif">How We Build <span className="it">Better Technology</span>.</h2>
              <p className="desc">Every project follows a proven delivery pipeline—strategy, research, development, and review. Each stage builds on the last, with expert human oversight throughout, ensuring every solution is thoughtful, reliable, and ready to perform.</p>
            </div>
            <div className="pipe-markers">
              <span className="lab a">Human judgment · lead</span>
              <span className="lab">Build pipeline · explore</span>
            </div>
            <div className="journey-panel journey-linear">
              <div className="journey-progress" aria-hidden="true"><span style={{width:`${activeStage*25}%`,"--journey-progress":`${activeStage*25}%`}} /></div>
              <div className="journey-steps" aria-label="Development stages">
                {deliveryStages.map((item,i)=>(<button type="button" key={item.name} className={`journey-step ${activeStage===i?'selected':''}`} aria-pressed={activeStage===i} onMouseEnter={()=>setActiveStage(i)} onFocus={()=>setActiveStage(i)} onClick={()=>setActiveStage(i)}>
                  <span className="journey-art"><StageGraphic index={i}/></span><span className="journey-node" aria-hidden="true"><i/></span><span className="journey-index">{["i","ii","iii","iv","v"][i]}</span><span className="journey-name">{item.name}</span><span className="journey-short">{item.short}</span>
                </button>))}
              </div>
              <div className="journey-detail" key={activeStage}>
                <div><span className="lab a">Stage 0{activeStage+1} · {deliveryStages[activeStage].name}</span><h3 className="serif">{deliveryStages[activeStage].title}</h3><p>{deliveryStages[activeStage].description}</p></div>
                <div className="journey-detail-right"><span className="lab">Focus areas</span><div className="journey-focus-row"><div className="journey-tags">{deliveryStages[activeStage].tags.map(tag=><span key={tag}>{tag}</span>)}</div><button type="button" onClick={()=>setActiveStage((activeStage+1)%5)}>{activeStage===4?'Back to discover':'Explore next stage'} <span aria-hidden="true">→</span></button></div></div>
              </div>
            </div>
            <div className="pipe-foot">
              <span className="lab">Every stage · human reviewed</span>
              <span className="lab a">i → v · practising since 1995</span>
            </div>
          </div>
        </section>


        <div className="signal-line"></div>

<section className="services band contour-drift capabilities-v21">
  <div className="wrap">
    <div className="eyebrow lab a rv">Capabilities</div>

    <h2
      className="serif rv"
      
    >
      Digital solutions <span className="it">built to scale</span>.
    </h2>

    <div className="svc-grid rv">

      <div className="svc">
        <div className="svc-visual"><div className="idx serif">01</div></div>
        <CapabilityDemo type={0} />
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
        <div className="svc-visual"><div className="idx serif">02</div></div>
        <CapabilityDemo type={1} />
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
        <div className="svc-visual"><div className="idx serif">03</div></div>
        <CapabilityDemo type={2} />
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
        <div className="svc-visual"><div className="idx serif">04</div></div>
        <CapabilityDemo type={3} />
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

        <section className="feature band feature-ecosystem">
          <div className="wrap"><div className="grid">
            <div className="rv">
              <div className="eyebrow lab a">Cross-Platform Development</div>
              <h2 className="serif">Built for every<span className="it"> device</span>.</h2>
              <p>We design and develop high-performance applications that deliver a seamless experience across web, iOS, Android, tablets, and desktop—engineered to scale with your business.</p>
              <div className="marker lab device-signature"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5 9-5Z M3 12l9 5 9-5 M3 16l9 5 9-5"/></svg>Bespoke digital products</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg>Practical delivery</span></div>
            </div>
            <div className="device rv">
              <div className="mobile-signal">
<div className="responsive-lab">
  <div className="lab-toolbar"><span><i /> RESPONSIVE WORKSPACE</span><span>{['Desktop','Laptop','Tablet','Mobile'][deviceFocus]} · {['1440','1024','768','390'][deviceFocus]} px</span></div>
  <div className="lab-stage">
    <div className="lab-orbit" aria-hidden="true" />
    <div className={`lab-device lab-device-${deviceFocus}`}>
      <div className="lab-browser"><span><i/><i/><i/></span><small>Responsive preview</small><span>↗</span></div>
      <div className="lab-screen">
        <div className="lab-screen-nav"><b>Studio.</b><span>Work &nbsp; About</span><i/></div>
        <div className="lab-screen-hero"><div><small>DESIGNED TO ADAPT</small><strong>One idea.<br/>Every screen.</strong><span className="lab-mini-cta">Explore →</span></div><svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="48" fill="#dce9df"/><circle cx="60" cy="60" r="34" fill="none" stroke="#70978b" strokeDasharray="3 5"/><path d="M24 80L60 20L96 80Z" fill="#426e68" opacity=".85"/><circle cx="78" cy="70" r="23" fill="#d7a57f"/><circle cx="60" cy="60" r="5" fill="#fffaf3"/></svg></div>
        <div className="lab-screen-grid">{['Design','Build','Scale'].map((label,i)=><div key={label}><span>0{i+1}</span><b>{label}</b><i/><i/></div>)}</div>
      </div>
    </div>
  </div>
</div>
<div className="eco-controls" aria-label="Explore devices">{['Desktop','Laptop','Tablet','Mobile'].map((label,i)=><button type="button" key={label} aria-pressed={deviceFocus===i} onClick={()=>setDeviceFocus(i)} onPointerEnter={(event)=>{if(event.pointerType==='mouse')setDeviceFocus(i)}}>{label}</button>)}</div>
<p className="eco-caption">One architecture, every device</p>
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
                  <a href="/contact" className="btn-line">Start a Project <span className="arw">→</span></a>
                  <a href="/work" className="arwlink">View Our Work <span className="arw">→</span></a>
                </div>
              </div>

              <div className="shop-stage rv"><CommerceShowcase /></div>
            </div>

            <div className="shop-feats shop-feats-v25 shop-feats-v29 rv">
              <div className="feat">
                <span className="fic" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 7 h16 l-1.6 12 H5.6 Z" /><path d="M9 7 V5.5 a3 3 0 0 1 6 0 V7" /><path d="M8.5 11 h7" /></svg></span>
                <div><h4 className="serif">Fast, intuitive shopping</h4><p>Discovery, cart, and checkout tuned so buying never stalls.</p></div>
              </div>
              <div className="feat">
                <span className="fic" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10.5 h18" /><path d="M6.5 15.5 h4" /></svg></span>
                <div><h4 className="serif">Secure payments</h4><p>Stripe, PayPal, and Razorpay integrated and properly tested.</p></div>
              </div>
              <div className="feat">
                <span className="fic" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="2.5" y="5" width="13" height="14" rx="2" /><rect x="17.5" y="8" width="4" height="11" rx="1.5" /><path d="M6 16 h6" /></svg></span>
                <div><h4 className="serif">Responsive by default</h4><p>One build that holds its shape on desktop, tablet, and phone.</p></div>
              </div>
              <div className="feat">
                <span className="fic" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 3 21 7.5 V16.5 L12 21 3 16.5 V7.5 Z" /><path d="M3 7.5 12 12 21 7.5 M12 12 V21" /></svg></span>
                <div><h4 className="serif">Inventory &amp; orders</h4><p>Stock, fulfilment, and returns managed from one calm place.</p></div>
              </div>
              <div className="feat">
                <span className="fic" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5" /><path d="M15.5 15.5 21 21" /><path d="M8 10.5 h5" /></svg></span>
                <div><h4 className="serif">SEO-ready architecture</h4><p>Clean structure and metadata so the right pages get found.</p></div>
              </div>
              <div className="feat">
                <span className="fic" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 18 V13 M10 18 V9 M16 18 V11 M22 18 V5" /><path d="M2 21 h20" /></svg></span>
                <div><h4 className="serif">Built to scale</h4><p>Foundations that cope as catalogue, traffic, and team grow.</p></div>
              </div>
            </div>

            <div className="mini-table commerce-specs-v25 rv">
              <div>
                <div className="mt-k">Platform</div>
                <div className="mt-v lab"><span className="commerce-pill">Shopify</span><span className="commerce-pill">WooCommerce</span><span className="commerce-pill">Custom</span></div>
              </div>
              <div>
                <div className="mt-k">Payments</div>
                <div className="mt-v lab"><span className="commerce-pill">Stripe</span><span className="commerce-pill">PayPal</span><span className="commerce-pill">Razorpay</span></div>
              </div>
              <div>
                <div className="mt-k">Performance</div>
                <div className="mt-v lab"><span className="commerce-pill">Fast</span><span className="commerce-pill">Secure</span><span className="commerce-pill">Scalable</span></div>
              </div>
            </div>

          </div>
        </section>


        <section className="clients band selected-work-v26">
          <div className="wrap rv">
            <div className="eyebrow lab a">Selected work</div>
            <h2 className="serif">A few examples of the <span className="it">work</span> we’ve helped shape.</h2>
            <div className="client-row">
              <div className="c">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 38L14 26L22 32L36 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="4" y="4" width="44" height="44" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
                <span>Product strategy</span>
              </div>
              <div className="c">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16L20 12L28 16V32L20 36L12 32V16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M28 16L36 12L44 16V32L36 36L28 32V16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M20 36V44L12 40V32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Digital build</span>
              </div>
              <div className="c">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 26L19 35L42 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="26" cy="26" r="22" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
                <span>Platform review</span>
              </div>
              <div className="c">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="16" width="36" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M8 20H44" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="34" r="1.5" fill="currentColor"/>
                  <circle cx="18" cy="34" r="1.5" fill="currentColor"/>
                </svg>
                <span>Experience design</span>
              </div>
            </div>
              <div className="rows featured-work-v34">

                <a href="https://www.hbmpartners.fr/" target="_blank" rel="noopener noreferrer" className="feat-card">
                  <div className="feat-media">
                    <svg viewBox="0 0 400 200" role="img" aria-label="Illustrative HBM Partners website concept">
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
                      <span className="feat-host lab">hbmpartners.fr</span>
                    </div>
                    <p>A considered digital presence for a professional services firm, built around clarity, trust, and thoughtful product storytelling.</p>
                    <div className="feat-tags"><span>Professional services</span><span>Brand &amp; build</span><span>Live</span></div>
                    <span className="arwlink">View the site <span className="arw">→</span></span>
                  </div>
                </a>

                <a href="/contact" className="next-card">
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
                <div className="sector-metrics" aria-label="Business statistics">
                  {[
                    ['98','%','Client retention','M4 12l5 5L20 6 M12 2a10 10 0 1 0 10 10'],
                    ['40','+','Projects delivered','M12 3 22 8 12 13 2 8Z M2 12l10 5 10-5 M2 16l10 5 10-5'],
                    ['24','','Years combined experience','M3 6h18v15H3Z M7 3v6 M17 3v6 M3 11h18 M8 15h2 M14 15h2'],
                    ['24/7','','Support','M4 13v-2a8 8 0 0 1 16 0v2 M4 12H2v6h5v-6Z M20 12h2v6h-5v-6Z M20 18q0 4-8 4']
                  ].map(([value,suffix,label,path])=>(
                    <div className="sector-metric" key={label}>
                      <div className="sector-metric-top"><span className="sector-metric-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={path}/></svg></span><b className="serif">{value}<small>{suffix}</small></b></div>
                      <span className="sector-metric-label">{label}</span>
                      <svg className="sector-wave" viewBox="0 0 240 45" preserveAspectRatio="none" aria-hidden="true"><path d="M0 45Q80 48 140 22T240 4V45Z" fill="currentColor" opacity=".12"/><path d="M0 45Q110 50 170 25T240 15V45Z" fill="currentColor" opacity=".13"/></svg>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>


        <section className="ethos ethos-v35" onPointerMove={e=>{const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty("--ethos-x",`${e.clientX-r.left}px`);e.currentTarget.style.setProperty("--ethos-y",`${e.clientY-r.top}px`);}} onPointerLeave={e=>{e.currentTarget.style.removeProperty("--ethos-x");e.currentTarget.style.removeProperty("--ethos-y");}}>
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
              <div className="fcol"><h5>Practice</h5><a href="/build">Build</a><a href="/migrate">Migrate</a><a href="/move-from-php">Move from PHP</a><a href="/advise">Advise</a></div>
              <div className="fcol"><h5>Work</h5><a href="/work">Recent projects</a><a href="/archive">Archive</a></div>
              <div className="fcol"><h5>Contact</h5><a href="mailto:hello@salaro.com">hello@salaro.com</a><a href="#">UK-based</a><a href="https://uk.linkedin.com/in/salaro">LinkedIn</a></div>
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

const deliveryStages = [
 {name:'Discover',short:'Understand the challenge',title:'Start with the right questions.',description:'Understand the business, its users and the challenges that technology needs to solve.',tags:['Research','Business needs','User insight']},
 {name:'Strategy',short:'Define the direction',title:'Turn insight into direction.',description:'Shape a practical plan that connects business objectives with the right technical approach.',tags:['Planning','Architecture','Priorities']},
 {name:'Design',short:'Shape the experience',title:'Make complexity feel simple.',description:'Translate the strategy into thoughtful interfaces and clear, intuitive user journeys.',tags:['UX','Visual design','Prototyping']},
 {name:'Develop',short:'Build with precision',title:'Bring the experience to life.',description:'Develop and review the solution with expert human oversight throughout the process.',tags:['Engineering','Integration','Review']},
 {name:'Launch',short:'Deliver with confidence',title:'Ready for the real world.',description:'Review the finished experience and prepare it for a reliable launch and ongoing support.',tags:['Testing','Deployment','Support']}
];
function StageGraphic({index}) {return <svg className="journey-svg" viewBox="0 0 120 82" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
 <circle cx="60" cy="41" r="39" opacity=".13" strokeDasharray="2 5"/><path d="M4 41h112M60 2v78" opacity=".12" strokeDasharray="2 4"/><circle cx="60" cy="41" r="32" opacity=".12"/>
 {index===0?<><circle cx="53" cy="37" r="19"/><circle cx="53" cy="37" r="11" opacity=".4"/><path d="M67 51l19 19" strokeWidth="4"/><path className="journey-motion" d="M53 18v19l15 10"/><circle cx="53" cy="37" r="3" fill="currentColor"/></>:index===1?<><path d="M25 22h70M25 41h70M25 60h70" opacity=".4"/>{[ [42,22],[76,41],[54,60] ].map(([x,y])=><circle key={y} cx={x} cy={y} r="6" fill="#fff9f2"/>)}<path className="journey-motion" d="M42 22L76 41 54 60" strokeDasharray="4 4"/></>:index===2?<><rect x="22" y="15" width="76" height="52" rx="3"/><path d="M22 25h76M31 33h27v24H31zM65 34h24M65 42h24M65 50h16"/><rect className="journey-motion" x="31" y="33" width="27" height="24" fill="currentColor" opacity=".2"/></>:index===3?<><rect x="20" y="15" width="80" height="52" rx="4"/><path d="M20 25h80M45 35L34 43l11 8M75 35l11 8-11 8M65 32L55 55" strokeWidth="2"/><path className="journey-motion" d="M31 60h58" strokeDasharray="5 4"/></>:<><path d="M60 13C76 25 79 43 60 58 41 43 44 25 60 13Z"/><circle cx="60" cy="33" r="7"/><path d="M47 43l-10 14 15-3M73 43l10 14-15-3"/><path className="journey-motion" d="M54 62l6 12 6-12" strokeWidth="2"/></>}
 </svg>}


function CommerceShowcase() {
  const [step, setStep] = useState(0);
  const stages = ['Browse', 'Basket', 'Checkout'];
  const notes = ['Discover products in a clear, responsive storefront.', 'Review your selection in a frictionless basket.', 'Complete the journey with a streamlined checkout.'];
  return <div className="commerce-demo" data-step={step}>
    <div className="commerce-demo-head"><span>COMMERCE / INTERACTIVE DEMO</span><span className="commerce-status">● {stages[step]}</span></div>
    <svg viewBox="0 0 540 330" role="img" aria-label={`Illustrative storefront: ${stages[step]}`}>
      <defs><linearGradient id="commerceWash" x2="1" y2="1"><stop stopColor="#e3eee7"/><stop offset="1" stopColor="#f4e4cb"/></linearGradient></defs>
      <rect x="18" y="15" width="504" height="300" rx="12" fill="#fffdf8" stroke="#c8cfc4"/>
      <path d="M18 49H522" stroke="#d9ded5"/>
      {[35,47,59].map(x=><circle key={x} cx={x} cy="32" r="3" fill="#b8a38b"/>)}
      <text x="270" y="35" textAnchor="middle" fontSize="10" fill="#526d65" letterSpacing="2">STOREFRONT / PREVIEW</text>
      <rect x="35" y="64" width="310" height="90" rx="6" fill="url(#commerceWash)"/>
      <text x="50" y="91" fontSize="11" fill="#426e68">THE COLLECTION</text><text x="50" y="115" fontSize="21" fontFamily="Georgia" fill="#273f39">Made for everyday.</text>
      <rect x="50" y="127" width="65" height="13" rx="6" fill="#426e68"/>
      <g transform="translate(275 76)" fill="none" stroke="#426e68" strokeWidth="1.5"><path d="M0 20H42L38 64H4Z M11 20V12a10 10 0 0 1 20 0v8"/></g>
      {[0,1,2].map(i=><g key={i} className={`commerce-product ${i===1?'featured':''}`} transform={`translate(${35+i*105} 169)`}>
        <rect width="98" height="125" rx="5" fill="#fffdf8" stroke="#d5dcd2"/>
        <rect x="7" y="7" width="84" height="73" rx="4" fill={['#e9e0d1','#dce9e2','#e7e8ec'][i]}/>
        <g fill="none" stroke="#52776b" strokeWidth="1.5">{i===0?<path d="M32 30H66L63 66H35Z M40 30V23a9 9 0 0 1 18 0v7"/>:i===1?<><rect x="36" y="29" width="26" height="40" rx="6"/><path d="M42 29V20H56V29 M40 46H58"/></>:<><path d="M30 34H65V61Q48 75 30 61Z M65 38Q82 38 73 52H65"/></>}</g>
        <path d="M12 91H68 M12 100H47" stroke="#aabbb0" strokeWidth="3" strokeLinecap="round"/>
        <rect x="12" y="109" width="37" height="8" rx="4" fill="#52776b"/>
      </g>)}
      <rect x="360" y="64" width="145" height="230" rx="8" fill="#f2f5ef" stroke="#c8d7cc"/>
      <text x="374" y="88" fontSize="10" letterSpacing="1" fill="#426e68">{['YOUR JOURNEY','YOUR BASKET','SECURE CHECKOUT'][step]}</text>
      {[0,1,2].map(i=><g key={i} className="commerce-flow-row" opacity={i<=step?1:.42}><circle cx="382" cy={115+i*44} r="9" fill={i<=step?'#426e68':'#c9d4c9'}/><path d={`M378 ${115+i*44}l3 3 5 -6`} stroke="white" fill="none"/><text x="399" y={119+i*44} fontSize="11" fill="#334c43">{stages[i]}</text></g>)}
      <path d="M382 124V150M382 168V194" stroke="#8eae9d" strokeDasharray="3 4" className="commerce-flow-line"/>
      <rect x="374" y="254" width="117" height="24" rx="12" fill={step===2?'#426e68':'#d9e5da'}/><text x="432" y="270" textAnchor="middle" fontSize="10" fill={step===2?'white':'#426e68'}>{['Explore','Review basket','Ready to pay'][step]}</text>
    </svg>
    <div className="commerce-tabs" aria-label="Explore shopping stages">{stages.map((s,i)=><button type="button" key={s} aria-pressed={step===i} onClick={()=>setStep(i)} onPointerEnter={()=>setStep(i)} onFocus={()=>setStep(i)}>{String(i+1).padStart(2,'0')} · {s}</button>)}</div>
    <p className="commerce-note" aria-live="polite">{notes[step]}</p>
  </div>;
}
