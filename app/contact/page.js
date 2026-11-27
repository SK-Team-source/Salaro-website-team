'use client';
import { useEffect, useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  useEffect(() => {
      // field focus label
        document.querySelectorAll('.field input,.field textarea').forEach(el=>{
          el.addEventListener('focus',()=>el.closest('.field').classList.add('focused'));
          el.addEventListener('blur',()=>el.closest('.field').classList.remove('focused'));
        });
        // FAQ accordion
        document.querySelectorAll('.qa').forEach(qa=>{
          const a=qa.querySelector('.a');
          if(qa.classList.contains('open'))a.style.maxHeight=a.scrollHeight+'px';
          qa.querySelector('.q').addEventListener('click',()=>{
            const open=qa.classList.contains('open');
            document.querySelectorAll('.qa').forEach(o=>{o.classList.remove('open');o.querySelector('.a').style.maxHeight=null});
            if(!open){qa.classList.add('open');a.style.maxHeight=a.scrollHeight+'px';}
          });
        });
        // scroll reveal
        const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.15});
        document.querySelectorAll('.rv').forEach(el=>io.observe(el));
        // process spine + node lighting
        const steps=document.getElementById('steps'),spine=document.getElementById('spine');
        const stepEls=[...document.querySelectorAll('.step')];
        const so=new IntersectionObserver((es)=>es.forEach(e=>{
          if(e.isIntersecting){
            spine.style.height=(steps.scrollHeight-16)+'px';
            stepEls.forEach((s,i)=>setTimeout(()=>s.classList.add('lit'),i*220));
            so.disconnect();
          }
        }),{threshold:.3});
        if(steps)so.observe(steps);
  }, []);

  return (
    <div className="p-contact contact-editorial">
        <div className="topbar">
          <div className="wrap">
            <a href="https://salaro.com/" className="brand">Sala<span>ro</span></a>
            <nav className="nav">
              <a href="https://salaro.com/practice">Practice</a><a href="https://salaro.com/work">Work</a><a href="https://salaro.com/studio">Studio</a><a href="https://salaro.com/writing">Writing</a><a href="https://salaro.com/contact">Contact</a>
            </nav>
            <div className="status"><span className="dot"></span><span className="tag">Replies within one morning</span></div>
          </div>
        </div>


        <header className="hero contact-hero">
          <div className="wrap">
            <div className="contact-pills"><span>● Open for projects</span><span>UK-led digital consultancy</span></div>
            <div className="hero-inner">
              <div className="hero-copy">
                <div className="contact-hero-upper">
                <div className="eyebrow tag">Contact — start a conversation</div>
                <h1 className="serif">
                  <span className="reveal-line"><span>Let's <span className="it">start</span> a</span></span>
                  <span className="reveal-line"><span>conversation.</span></span>
                </h1>
                <p>We work with founders, product teams and marketing leads who need a calm partner for their next digital build.</p>
                <div className="contact-actions"><a className="btn primary" href="#contact-form">Send a note →</a><a className="btn ghost" href="tel:+447485222490">07485 222490</a></div>
                </div>
                <div className="contact-hero-details">
                  <div><span className="tag">01 / Connect</span><a href="mailto:team@salaro.com">team@salaro.com</a></div>
                  <div><span className="tag">02 / Discuss</span><span>30-minute video call</span></div>
                  <div><span className="tag">03 / Collaborate</span><span>UK-based · Remote</span></div>
                </div>
              </div>
              <div className="hero-viz">
                <div className="contact-viz-upper">
                <div className="viz-cap"><span className="tag">Response window</span><span className="dotlive"><i></i>Open for projects</span></div>
                <svg className="contact-signal contact-dialogue" viewBox="0 0 360 230" aria-hidden="true">
                  <defs><linearGradient id="contactPaper" x2="1" y2="1"><stop stopColor="#fffdf8"/><stop offset="1" stopColor="#e8ede3"/></linearGradient></defs>
                  <path className="dialogue-route" d="M46 55H180V115H314V177H180"/>
                  <path className="dialogue-route secondary" d="M46 55V177H180"/>
                  <g className="dialogue-stage stage-one"><rect x="16" y="32" width="110" height="48" rx="5" fill="#e4ebe0" stroke="#526b59"/><path d="M28 44H48V59H28Z M28 44L38 52L48 44" fill="none" stroke="#526b59"/><path d="M57 46H113M57 54H99M57 62H107" stroke="#526b59" strokeWidth="1.5"/><text x="16" y="94">01 / YOUR NOTE</text></g>
                  <g className="dialogue-stage stage-two"><rect x="133" y="91" width="94" height="48" rx="5" fill="url(#contactPaper)" stroke="#7a2f1c"/><circle cx="150" cy="107" r="5" fill="#7a2f1c"/><path d="M163 107H214M146 118H214M146 126H195" stroke="#7a2f1c" strokeWidth="1.5"/><text x="133" y="153">02 / REVIEW</text></g>
                  <g className="dialogue-stage stage-three"><rect x="234" y="153" width="110" height="48" rx="5" fill="#e1e9ec" stroke="#405d70"/><path d="M247 168H329M247 177H305M247 186H315" stroke="#405d70" strokeWidth="1.5"/><text x="234" y="215">03 / RESPONSE</text></g>
                  <g className="dialogue-confirm"><circle cx="314" cy="55" r="24" fill="#f1e6d2" stroke="#79613b"/><circle className="dialogue-ring" cx="314" cy="55" r="29" fill="none" stroke="#79613b"/><path d="M304 55L311 62L324 47" fill="none" stroke="#79613b" strokeWidth="2"/></g>
                  <path className="dialogue-route secondary" d="M314 79V153"/>
                  <circle className="dialogue-packet" r="3.5" fill="#7a2f1c"/><circle className="dialogue-packet packet-two" r="3" fill="#526b59"/>
                </svg><div className="viz-fig"><span className="serif">Direct</span><span className="tag">response</span></div>
                <div className="respbar"><span className="resp-fill"></span></div>
                <div className="resp-axis"><span>Now</span><span>Within a day</span><span>Clear next step</span></div>
                </div>
                <div className="viz-stats">
                  <div><b className="serif">1995</b><span className="tag">building for the web since</span></div>
                </div>
              </div>
            </div>
          </div>
        </header>


        <section className="stats">
          <div className="wrap"><div className="grid">
            <div className="stat"><div className="num">30<em>+</em></div><div className="lbl tag">Years of practice</div></div>
            <div className="stat"><div className="num">Direct</div><div className="lbl tag">Delivery</div></div>
            <div className="stat"><div className="num">Direct</div><div className="lbl tag">Collaboration</div></div>
            <div className="stat"><div className="num">Clear</div><div className="lbl tag">Process</div></div>
          </div></div>
        </section>


        <div className="signal-line"></div>
        <section className="main" id="contact-form">
          <div className="wrap"><div className="split">

    
            <div className="col-left rv">
              <div className="sec-head">
                <div className="tag">Start a project</div>
                <div className="serif">Send a <span className="it">note</span>.</div>
                <p className="lead">Tell us what you're trying to build, where you are today, and what success would look like.</p>
              </div>
              {status === 'sent' ? (
                <div className="form-success">
                  <p className="serif" style={{fontSize:'1.4rem',marginBottom:'8px'}}>Message sent.</p>
                  <p style={{color:'var(--ink-soft)'}}>Thank you — we'll be in touch within a day or two.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="field"><label className="tag" htmlFor="contact-name">Name</label><input required type="text" placeholder="Your name" id="contact-name" value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} /></div>
                  <div className="field"><label className="tag" htmlFor="contact-email">Email</label><input required type="email" placeholder="you@example.com" id="contact-email" value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} /></div>
                  <div className="field"><label className="tag" htmlFor="contact-company">Company</label><input type="text" placeholder="Optional" id="contact-company" value={form.company} onChange={e=>setForm(f=>({...f,company:e.target.value}))} /></div>
                  <div className="field"><label className="tag" htmlFor="contact-message">What are you trying to build?</label><textarea required rows="3" placeholder="A short note is enough" id="contact-message" value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))}></textarea></div>
                  {status === 'error' && <p style={{color:'var(--accent)',marginBottom:'12px'}}>Something went wrong — please email us directly at team@salaro.com</p>}
                  <div className="submit-row">
                    <button className="send" type="submit" disabled={status==='sending'}>{status==='sending' ? 'Sending…' : 'Send'} {status!=='sending' && <span className="arw">→</span>}</button>
                    <span className="or">or write directly to <a href="mailto:team@salaro.com">team@salaro.com</a></span>
                  </div>
                </form>
              )}
            </div>

            <div className="vrule"></div>

    
            <div className="col-right rv">
              <div className="sec-head"><div className="tag">How this goes</div></div>
              <div className="steps" id="steps">
                <div className="spine" id="spine"></div>
                <div className="step"><div className="n">01</div><h4>You write.</h4><p>A short note via this form or by email. No NDA is needed upfront.</p></div>
                <div className="step"><div className="n">02</div><h4>We talk.</h4><p>A 30-minute video call inside the next few days, so we both know if it's a fit.</p></div>
                <div className="step"><div className="n">03</div><h4>We propose.</h4><p>A fixed-price proposal usually comes back inside 48 hours of the call.</p></div>
                <div className="step"><div className="n">04</div><h4>We build.</h4><p>Two to six weeks of work, depending on scope, with progress visible in your own repo.</p></div>
              </div>

              <div className="direct">
                <div className="row"><div className="k tag">Email</div><div className="v"><a href="mailto:team@salaro.com">team@salaro.com</a></div></div>
                <div className="row"><div className="k tag">Phone</div><div className="v"><a href="tel:+447485222490">07485 222490</a></div></div>
                <div className="row"><div className="k tag">Location</div><div className="v">UK-based · Remote collaboration</div></div>
              </div>
            </div>

          </div></div>
        </section>


        <section className="quote">
          <div className="wrap rv">
            <div className="mark">&ldquo;</div>
            <blockquote className="serif">Salaro helped us clarify the brief, sharpen the experience, and ship something that feels like a <em>real product</em> — not a patchwork of requests.</blockquote>
            <div className="cite">
              <div className="avatar">RM</div>
              <div><div className="who">Rachel Morrow</div><div className="role tag">Managing Director · HBM Partners</div></div>
            </div>
          </div>
        </section>


        <section className="faq">
          <div className="wrap"><div className="split">
            <div className="rv"><h2>Questions teams <span className="it">ask</span> before they begin.</h2></div>
            <div className="rv">
              <div className="qa open"><button type="button" className="q">Do you work with startups or established companies?<span className="sign">+</span></button><div className="a"><p>We work with both. The process shifts depending on where you are in the journey, but the standard is always the same: clear decisions and practical delivery.</p></div></div>
              <div className="qa"><button type="button" className="q">What kind of work do you take on?<span className="sign">+</span></button><div className="a"><p>Web platforms, product interfaces, marketing sites and the design systems behind them. If it lives in a browser and needs to feel considered, it's in scope.</p></div></div>
              <div className="qa"><button type="button" className="q">Do you need a full brief before we talk?<span className="sign">+</span></button><div className="a"><p>No. A few sentences about what you're trying to build is enough to start. We'll shape the brief together on the first call.</p></div></div>
            </div>
          </div></div>
        </section>


        <section className="clients">
          <div className="track">
            <span>Product strategy</span><span>Digital build</span><span>Platform review</span><span>Experience design</span>
            <span>Product strategy</span><span>Digital build</span><span>Platform review</span><span>Experience design</span>
          </div>
        </section>


        <section className="cta">
          <div className="wrap">
            <div>
                <div className="tag">Ready to start?</div>
              <h2 className="serif">Take your <em>business</em> online — the right way.</h2>
            </div>
            <div className="btns">
              <a href="#contact-form" className="btn primary">Start a conversation</a>
              <a href="tel:+447485222490" className="btn ghost">Call us</a>
            </div>
          </div>
        </section>


        <footer className="dark-lattice">
          <div className="wrap">
            <div className="foot-top">
              <div>
                <div className="brand">Sala<span style={{color: 'var(--accent)'}}>ro</span></div>
                <p>A UK-led digital consultancy. Practising since 1995.</p>
              </div>
              <div className="fcol"><h5>Pages</h5><a href="https://salaro.com/">Home</a><a href="/practice">Practice</a><a href="/work">Work</a><a href="/studio">Studio</a><a href="/writing">Writing</a></div>
              <div className="fcol"><h5>Recent work</h5><a href="/work">Recent projects</a><a href="/archive">Archive</a><a href="/studio">Studio services</a></div>
              <div className="fcol"><h5>Connect</h5><a href="mailto:team@salaro.com">team@salaro.com</a><a href="https://uk.linkedin.com/in/salaro">LinkedIn</a><a href="https://twitter.com/salaro">Twitter / X</a><a href="https://www.instagram.com/salaro">Instagram</a></div>
            </div>
            <div className="foot-bot">
              <span className="tag">© 2026 Salaro · a trading name of S. Golestanian, sole trader</span>
              <span className="tag">Practising since 1995</span>
            </div>
          </div>
        </footer>
    </div>
  );
}
