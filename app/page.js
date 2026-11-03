'use client';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
      const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12});
        document.querySelectorAll('.rv').forEach(el=>io.observe(el));

        const pipe=document.getElementById('pipe');
        const stages=[...document.querySelectorAll('.stage')];
        let started=false;
        const calm=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        // data-anim on #pipe picks the animation:  "spot" (spotlight glides stage to stage)  |  "ink" (progress line inks in)
        const mode=(pipe&&pipe.dataset.anim)||'spot';
        const cycle=mode==='ink'?7500:9000;
        function runPipe(){
          if(!pipe)return;
          pipe.classList.add('reset','fade');pipe.classList.remove('done');
          pipe.style.setProperty('--p','0');pipe.style.setProperty('--i','0');
          stages.forEach(s=>s.classList.remove('lit','on','past'));
          void pipe.offsetWidth;
          pipe.classList.remove('reset');
          setTimeout(()=>pipe.classList.remove('fade'),60);
          const last=stages.length-1;
          if(calm){stages.forEach(s=>s.classList.add(mode==='ink'?'lit':'past'));pipe.style.setProperty('--p','1');pipe.classList.add('done');return;}
          if(mode==='ink'){
            stages.forEach((s,i)=>{
              const t=300+i*1150;
              if(i>0)setTimeout(()=>pipe.style.setProperty('--p',String(i/last)),t-950);
              setTimeout(()=>{s.classList.add('lit');if(i===last)setTimeout(()=>pipe.classList.add('done'),250);},t);
            });
          }else{
            stages.forEach((s,i)=>{
              const t=500+i*1300;
              setTimeout(()=>{
                pipe.style.setProperty('--i',String(i));
                if(i>0){stages[i-1].classList.remove('on');stages[i-1].classList.add('past');}
                s.classList.add('on');
              },t);
            });
            setTimeout(()=>{stages[last].classList.remove('on');stages[last].classList.add('past');pipe.classList.add('done');},500+stages.length*1300);
            setTimeout(()=>pipe.classList.add('fade'),cycle-1100);
          }
        }
        const po=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&!started){started=true;runPipe();setInterval(runPipe,cycle);}}),{threshold:.4});
        if(pipe)po.observe(pipe);
  }, []);

  // Hero background: "traditional -> AI-driven" — a fine, watermark-light layer.
  // Every horizontal grid line has its own bubble "gun" at the left edge, each on its own random
  // rhythm, so flow is spread over the whole hero. Bubbles fly straight along the ruled grid,
  // then drift and zigzag through the neural mesh, flashing each node they pass.
  // Bubbles always travel left -> right, keep a minimum gap so they never overlap, and ignore the
  // cursor. Hovering the section only lifts the background: the AI mesh spreads further and
  // lines/nodes gain a little presence.
  useEffect(() => {
    const hero = document.querySelector('.hero');
    const cv = document.getElementById('hero-canvas');
    if (!hero || !cv) return;
    const ctx = cv.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const MUTED = [156, 143, 124], ACCENT = [122, 47, 28];
    let w = 0, h = 0, dpr = 1, sp = 44, spd = 1, cols = 0, rows = 0, nodes = [], edges = [], adjN = [];
    let pulses = [], trail = [];
    let emitters = [];
    let raf = 0, running = false, last = 0, t = 0, introT = reduce ? 99 : 0;
    let mouse = null, mouseA = 0, hov = 0;

    const smooth = (x) => { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); };
    const ease = (x) => 1 - Math.pow(1 - Math.max(0, Math.min(1, x)), 3);
    const hsh = (n) => { const s = Math.sin(n * 12.9898) * 43758.5453; return s - Math.floor(s); };
    const mix = (a, b, k) => Math.round(a + (b - a) * k);
    const maxPulses = () => (w < 700 ? 10 : 22);
    const minGap = () => sp * 0.9; // minimum centre-to-centre distance between two bubbles
    let pid = 0;

    function build() {
      const r = hero.getBoundingClientRect();
      w = r.width; h = r.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sp = w < 700 ? 38 : 44; spd = 68 / sp;
      cols = Math.ceil(w / sp) + 2; rows = Math.ceil(h / sp) + 2;
      const ox = (w - (cols - 1) * sp) / 2, oy = (h - (rows - 1) * sp) / 2;
      nodes = []; edges = []; adjN = []; pulses = []; trail = [];
      for (let r2 = 0; r2 < rows; r2++) for (let c = 0; c < cols; c++) {
        const i = r2 * cols + c, gx = ox + c * sp, gy = oy + r2 * sp;
        nodes.push({
          r: r2, c, gx, gy, x: gx, y: gy, p: 0, l: 0, fl: 0, ox: 0, oy: 0, ovx: 0, ovy: 0,
          jx: (hsh(i + 1) - 0.5) * sp * 0.55, jy: (hsh(i + 7) - 0.5) * sp * 0.55, ph: hsh(i + 3) * 6.2832
        });
        adjN.push([]);
      }
      const add = (a, b, d) => { edges.push({ a, b, d }); adjN[a].push(b); adjN[b].push(a); };
      for (let r2 = 0; r2 < rows; r2++) for (let c = 0; c < cols; c++) {
        const i = r2 * cols + c;
        if (c + 1 < cols) add(i, i + 1, 0);
        if (r2 + 1 < rows) add(i, i + cols, 0);
        if (r2 + 1 < rows) {
          if ((r2 + c) % 2 === 0 && c + 1 < cols) add(i, i + cols + 1, 1);
          if ((r2 + c) % 2 === 1 && c > 0) add(i, i + cols - 1, 1);
        }
      }
      // one emitter per horizontal line, each with its own tempo and a staggered start
      emitters = Array.from({ length: rows }, (_, r3) => ({ row: r3, k: 0.7 + Math.random() * 0.9, wait: 0.4 + Math.random() * 7 }));
    }

    // is any other bubble currently travelling to / from this node?
    function occupied(q, node) {
      for (const o of pulses) if (o !== q && (o.to === node || o.from === node)) return true;
      return false;
    }

    // strictly left -> right: straight along the row (traditional), then a gentle
    // rightward zigzag through the mesh (AI) — never back, never vertical-only.
    function nextNode(q) {
      const n = nodes[q.to];
      if (n.c + 1 >= cols) return -1;
      const right = q.to + 1;
      if (q.mode === 0) {
        if (nodes[right].p > 0.55) q.mode = 1;
        else return right;
      }
      if (!q.lastDiag) {
        let d = -1;
        if ((n.r + n.c) % 2 === 0 && n.r + 1 < rows) d = q.to + cols + 1;
        else if ((n.r + n.c) % 2 === 1 && n.r > 0) d = q.to - cols + 1;
        if (d >= 0 && !occupied(q, d)) { q.lastDiag = true; return d; }
      }
      q.lastDiag = false;
      return right;
    }

    function step(dt) {
      t += dt; introT += dt;
      mouseA += ((mouse ? 1 : 0) - mouseA) * Math.min(1, dt * 5);
      hov += ((mouse ? 1 : 0) - hov) * Math.min(1, dt * 2.5);
      const boundary = w * (1.25 - 0.75 * ease(introT / 3.4) - 0.08 * hov) + (introT > 3.4 ? w * 0.05 * Math.sin(t * 0.25) : 0);
      const band = w * 0.32;
      const R = Math.min(240, Math.max(150, w * 0.18));
      for (let i = trail.length - 1; i >= 0; i--) { trail[i].age += dt; if (trail[i].age > 1.4) trail.splice(i, 1); }
      for (const n of nodes) {
        let target = smooth((n.gx - boundary) / band + 0.5);
        let lens = 0;
        if (mouse) lens = smooth(1 - Math.hypot(n.gx - mouse.x, n.gy - mouse.y) / R) * mouseA;
        target = Math.max(target, lens);
        for (const tp of trail) {
          const d = Math.hypot(n.gx - tp.x, n.gy - tp.y);
          if (d < 70) target = Math.max(target, smooth(1 - d / 70) * (1 - tp.age / 1.4) * 0.9);
        }
        n.p += (target - n.p) * Math.min(1, dt * 4);
        n.l += (lens - n.l) * Math.min(1, dt * 6);
        n.fl = Math.max(0, n.fl - dt * 1.3);
        n.ovx += (-60 * n.ox - 7 * n.ovx) * dt; n.ovy += (-60 * n.oy - 7 * n.ovy) * dt;
        n.ox = Math.max(-18, Math.min(18, n.ox + n.ovx * dt)); n.oy = Math.max(-18, Math.min(18, n.oy + n.ovy * dt));
        n.x = n.gx + n.p * (n.jx + Math.sin(t * 0.35 + n.ph) * sp * 0.07) + n.ox;
        n.y = n.gy + n.p * (n.jy + Math.cos(t * 0.3 + n.ph) * sp * 0.07) + n.oy;
      }
      // per-row bubble guns: one shot at a time, long rest between shots, and a gun
      // holds fire if another bubble is still near the launch point or the cap is hit
      if (introT > 0.6) for (const e of emitters) {
        e.wait -= dt * (1 + 0.5 * hov);
        if (e.wait > 0) continue;
        const s0 = nodes[e.row * cols], gap = minGap();
        let clear = pulses.length < maxPulses();
        if (clear) for (const o of pulses) {
          const a = nodes[o.from], b = nodes[o.to];
          if (Math.hypot(a.x + (b.x - a.x) * o.u - s0.x, a.y + (b.y - a.y) * o.u - s0.y) < gap * 1.6) { clear = false; break; }
        }
        if (!clear) { e.wait = 0.35; continue; }
        pulses.push({ id: pid++, from: e.row * cols, to: e.row * cols + 1, u: 0, mode: 0, lastDiag: false, v: 1.15, trail: [], x: s0.x, y: s0.y });
        e.wait = (5 + Math.random() * 7) * e.k;
      }
      // current head position of every bubble (used for spacing)
      for (const q of pulses) {
        const a = nodes[q.from], b = nodes[q.to];
        q.x = a.x + (b.x - a.x) * q.u; q.y = a.y + (b.y - a.y) * q.u;
      }
      const gap = minGap();
      for (let i = pulses.length - 1; i >= 0; i--) {
        const q = pulses[i];
        // yield to any bubble just ahead (further right; id breaks ties) so none ever overlap
        let blocked = false;
        for (const o of pulses) {
          if (o === q) continue;
          if ((o.x > q.x || (o.x === q.x && o.id < q.id)) && Math.hypot(o.x - q.x, o.y - q.y) < gap) { blocked = true; break; }
        }
        if (blocked) continue;
        q.u += dt * q.v * spd * (q.mode === 1 ? 0.9 : 1.5);
        if (q.u >= 1) {
          nodes[q.to].fl = 1;
          const nx = nextNode(q);
          if (nx < 0) { pulses.splice(i, 1); continue; }
          q.from = q.to; q.to = nx; q.u = 0;
        }
        const a = nodes[q.from], b = nodes[q.to];
        q.trail.push({ x: a.x + (b.x - a.x) * q.u, y: a.y + (b.y - a.y) * q.u });
        if (q.trail.length > 7) q.trail.shift();
      }
      return R;
    }

    function draw(R) {
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 0.8;
      for (const e of edges) {
        const a = nodes[e.a], b = nodes[e.b];
        const pm = (a.p + b.p) / 2, boost = Math.max((a.l + b.l) / 2, (a.fl + b.fl) / 2 * 0.6);
        let alpha;
        if (e.d === 1) { if (pm < 0.12) continue; alpha = pm * pm * (0.022 + 0.12 * boost); }
        else alpha = 0.09 * (1 - pm) + pm * (0.03 + 0.12 * boost);
        alpha *= 1 + 0.45 * hov;
        const cm = Math.max(pm * 0.55, boost);
        ctx.strokeStyle = `rgba(${mix(MUTED[0], ACCENT[0], cm)},${mix(MUTED[1], ACCENT[1], cm)},${mix(MUTED[2], ACCENT[2], cm)},${alpha})`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
      for (const n of nodes) {
        const p = n.p, pe = Math.max(p * 0.5, n.fl * 0.75), s = 0.9 + p * 0.45 + n.fl * 0.8;
        if (p > 0.5 || n.fl > 0.05) {
          const gl = p * (0.5 + 0.5 * Math.sin(t * 0.9 + n.ph));
          ctx.fillStyle = `rgba(181,115,90,${0.008 * gl + 0.04 * n.l + 0.1 * n.fl})`;
          ctx.beginPath(); ctx.arc(n.x, n.y, s + 3 * gl + 2 * n.l + 5 * n.fl, 0, 6.2832); ctx.fill();
        }
        ctx.fillStyle = `rgba(${mix(MUTED[0], ACCENT[0], pe)},${mix(MUTED[1], ACCENT[1], pe)},${mix(MUTED[2], ACCENT[2], pe)},${(0.13 + 0.14 * pe) * (1 + 0.3 * hov)})`;
        if (pe < 0.4) ctx.fillRect(n.x - s, n.y - s, s * 2, s * 2);
        else { ctx.beginPath(); ctx.arc(n.x, n.y, s, 0, 6.2832); ctx.fill(); }
      }
      for (const q of pulses) {
        const tr = q.trail, a = nodes[q.from];
        const fadeIn = Math.min(1, (a.c + q.u) / 1.2);
        for (let i = 1; i < tr.length; i++) {
          ctx.strokeStyle = `rgba(122,47,28,${0.2 * (i / tr.length) * fadeIn})`;
          ctx.beginPath(); ctx.moveTo(tr[i - 1].x, tr[i - 1].y); ctx.lineTo(tr[i].x, tr[i].y); ctx.stroke();
        }
        if (!tr.length) continue;
        const p0 = tr[tr.length - 1], r = 3.4;
        ctx.fillStyle = `rgba(181,115,90,${0.09 * fadeIn})`; ctx.beginPath(); ctx.arc(p0.x, p0.y, r, 0, 6.2832); ctx.fill();
        ctx.strokeStyle = `rgba(122,47,28,${0.45 * fadeIn})`; ctx.beginPath(); ctx.arc(p0.x, p0.y, r, 0, 6.2832); ctx.stroke();
        ctx.fillStyle = `rgba(255,245,235,${0.5 * fadeIn})`; ctx.beginPath(); ctx.arc(p0.x - r * 0.3, p0.y - r * 0.3, 0.8, 0, 6.2832); ctx.fill();
      }
    }

    function still() { for (let i = 0; i < 30; i++) step(0.05); pulses = []; draw(step(0.016)); }
    function loop(now) {
      if (!running) return;
      const dt = Math.min(0.05, (now - last) / 1000 || 0.016); last = now;
      draw(step(dt));
      raf = requestAnimationFrame(loop);
    }
    function start() { if (running || reduce) return; running = true; last = performance.now(); raf = requestAnimationFrame(loop); }
    function stop() { running = false; cancelAnimationFrame(raf); }

    const move = (e) => {
      const r = hero.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top, now = performance.now();
      if (mouse && !reduce) {
        const dx = x - mouse.x, dy = y - mouse.y, d2 = Math.hypot(dx, dy);
        if (d2 > 0.5) {
          for (const n of nodes) {
            const d = Math.hypot(n.gx - x, n.gy - y);
            if (d < 110) { const f = smooth(1 - d / 110) * 0.2; n.ovx += dx * f * 12; n.ovy += dy * f * 12; }
          }
          const lt = trail[trail.length - 1];
          if (!lt || Math.hypot(x - lt.x, y - lt.y) > 12) { trail.push({ x, y, age: 0 }); if (trail.length > 40) trail.shift(); }
        }
      }
      mouse = { x, y };
    };
    const leave = () => { mouse = null; };

    build();
    if (reduce) still();
    const ro = new ResizeObserver(() => { build(); if (reduce) still(); });
    ro.observe(hero);
    const io = new IntersectionObserver((es) => es.forEach((e) => (e.isIntersecting ? start() : stop())), { threshold: 0.01 });
    io.observe(hero);
    const vis = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', vis);
    hero.addEventListener('pointermove', move);
    hero.addEventListener('pointerleave', leave);
    return () => {
      stop(); ro.disconnect(); io.disconnect();
      document.removeEventListener('visibilitychange', vis);
      hero.removeEventListener('pointermove', move);
      hero.removeEventListener('pointerleave', leave);
    };
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
          <canvas id="hero-canvas" className="hero-canvas" aria-hidden="true"></canvas>
          <div className="wrap"><div className="grid">
            <div className="hero-left">
              <div className="hl-top"><span className="lab a">A UK-led digital consultancy</span><span className="lab since">Practising since 1995</span></div>
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
              <div className="hl-bottom">
                <div className="ops">
                <span className="lab">Pipeline live · queue clear</span>
                <span className="lab">Human review · engaged</span>
                <span className="lab">Repo access · on request</span>
              </div>
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
                <a href="tel:+447485222490" className="phone">
                  <span className="ph-ic" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg></span>
                  <span className="ph-tx"><em className="lab">Call us directly</em><b className="serif">07485 222490</b></span>
                </a>
              </div>
              <div className="built">Built on code, not templates.</div>
            </div>

            <div className="hero-side">
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

              <div className="hero-journey">
                <div className="viz-head"><span className="lab a">Our journey</span></div>
                <ol className="jr-list">
                  <li className="jr-item">
                    <i className="jr-dot"></i>
                    <div><b className="serif">1995</b><span className="lab">Traditional craft</span><p>Hand-built, bespoke.</p></div>
                  </li>
                  <li className="jr-item now">
                    <i className="jr-dot"></i>
                    <div><b className="serif">Today</b><span className="lab a">AI-driven era</span><p>AI-built, human-led.</p></div>
                  </li>
                </ol>
              </div>
            </div>
          </div></div>
        </header>


        <div className="signal-line"></div>
        <section className="pipeline band">
          <div className="wrap">
            <div className="head-row rv">
              <h2 className="serif">How We Build<br /><span className="it">Better Technology</span>.</h2>
              <p className="desc">Every project follows a proven delivery pipeline—strategy, research, development, and review. Each stage builds on the last, with expert human oversight throughout, ensuring every solution is thoughtful, reliable, and ready to perform.</p>
            </div>
            <div className="pipe-markers">
              <span className="lab a">Human judgment · lead</span>
              <span className="lab">Build pipeline · live</span>
            </div>
            <div className="pipe rv" id="pipe" data-anim="spot">
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
         <svg width="100%" viewBox="0 28 680 336" xmlns="http://www.w3.org/2000/svg" style={{display:"block"}}>
<defs>
<marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M2 1L8 5L2 9" fill="none" stroke="#3d3d3a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</marker>
</defs>

<circle cx="340" cy="190" r="52" fill="var(--paper)" stroke="var(--accent)" stroke-width="2"/>
<text x="340" y="187" textAnchor="middle" fontFamily="'Fraunces', Georgia, serif" fontSize="17" fontWeight="300" fill="var(--accent)">Shared</text>
<text x="340" y="207" textAnchor="middle" fontFamily="'Fraunces', Georgia, serif" fontSize="17" fontWeight="300" fontStyle="italic" fill="var(--accent)">core</text>

<g transform="translate(280,30)">
<rect x="0" y="0" width="120" height="76" rx="4" fill="var(--paper)" stroke="var(--accent)" stroke-width="1.5"/>
<rect x="8" y="8" width="104" height="60" rx="2" fill="rgba(122,47,28,.06)" opacity="0.8"/>
<g className="site" style={{'--dl':'1.1s'}}>
  <rect className="sx sb" x="8" y="8" width="104" height="2" />
  <g className="sx s1"><rect className="hd" x="12" y="14" width="20.8" height="3" rx="1.5"/><rect className="ln" x="78" y="14.5" width="8" height="2" rx="1"/><rect className="ln" x="90" y="14.5" width="8" height="2" rx="1"/><rect className="ln" x="102" y="14.5" width="6" height="2" rx="1"/></g>
  <rect className="sx s2 hero" x="12" y="22" width="49.9" height="30.0" rx="2"/>
  <g className="sx s3"><rect className="ln" x="67.7" y="24" width="38.4" height="4" rx="2"/><rect className="ln" x="67.7" y="32" width="28.8" height="3" rx="1.5"/><rect className="ln" x="67.7" y="39" width="34.6" height="3" rx="1.5"/></g>
  <rect className="sx s4 btn" x="67.7" y="58" width="16" height="5" rx="2.5"/>
</g>
<rect x="45" y="76" width="30" height="8" fill="var(--accent)"/>
<rect x="30" y="84" width="60" height="5" rx="2" fill="var(--accent)"/>
</g>
<line x1="330" y1="106" x2="330" y2="140" stroke="var(--line-fine)" stroke-width="1.5"/>

<g transform="translate(70,120)">
<rect x="0" y="0" width="130" height="80" rx="6" fill="var(--paper)" stroke="var(--accent)" stroke-width="1.5"/>
<rect x="8" y="8" width="114" height="64" rx="2" fill="rgba(122,47,28,.06)" opacity="0.8"/>
<g className="site" style={{'--dl':'1.8s'}}>
  <rect className="sx sb" x="8" y="8" width="114" height="2" />
  <g className="sx s1"><rect className="hd" x="12" y="14" width="22.8" height="3" rx="1.5"/><rect className="ln" x="88" y="14.5" width="8" height="2" rx="1"/><rect className="ln" x="100" y="14.5" width="8" height="2" rx="1"/><rect className="ln" x="112" y="14.5" width="6" height="2" rx="1"/></g>
  <rect className="sx s2 hero" x="12" y="22" width="55.1" height="32.0" rx="2"/>
  <g className="sx s3"><rect className="ln" x="73.5" y="24" width="42.4" height="4" rx="2"/><rect className="ln" x="73.5" y="32" width="31.8" height="3" rx="1.5"/><rect className="ln" x="73.5" y="39" width="38.2" height="3" rx="1.5"/></g>
  <rect className="sx s4 btn" x="73.5" y="62" width="16" height="5" rx="2.5"/>
</g>
<rect x="-10" y="80" width="150" height="7" rx="3" fill="var(--accent)"/>
</g>
<line x1="200" y1="160" x2="288" y2="180" stroke="var(--line-fine)" stroke-width="1.5"/>

<g transform="translate(480,110)">
<rect x="0" y="0" width="90" height="120" rx="8" fill="var(--paper)" stroke="var(--accent)" stroke-width="1.5"/>
<rect x="8" y="10" width="74" height="90" rx="2" fill="rgba(122,47,28,.06)" opacity="0.8"/>
<g className="site" style={{'--dl':'2.5s'}}>
  <rect className="sx sb" x="8" y="10" width="74" height="2" />
  <g className="sx s1"><rect className="hd" x="12" y="16" width="22.2" height="3" rx="1.5"/><rect className="ln" x="70" y="15.5" width="8" height="1.8" rx=".9"/><rect className="ln" x="70" y="19" width="8" height="1.8" rx=".9"/></g>
  <rect className="sx s2 hero" x="12" y="25" width="66" height="27.0" rx="2"/>
  <g className="sx s3"><rect className="ln" x="12" y="59.0" width="56.1" height="3.5" rx="1.7"/><rect className="ln" x="12" y="66.0" width="42.9" height="3" rx="1.5"/><rect className="ln" x="12" y="72.0" width="49.5" height="3" rx="1.5"/></g>
  <rect className="sx s4 btn" x="12" y="91" width="27.7" height="5" rx="2.5"/>
</g>
<circle cx="45" cy="108" r="3" fill="var(--accent)"/>
</g>
<line x1="480" y1="170" x2="392" y2="185" stroke="var(--line-fine)" stroke-width="1.5"/>

<g transform="translate(150,260)">
<rect x="0" y="0" width="56" height="100" rx="10" fill="var(--paper)" stroke="var(--accent)" stroke-width="1.5"/>
<rect x="6" y="12" width="44" height="74" rx="2" fill="rgba(122,47,28,.06)" opacity="0.8"/>
<g className="site" style={{'--dl':'3.2s'}}>
  <rect className="sx sb" x="6" y="12" width="44" height="2" />
  <g className="sx s1"><rect className="hd" x="10" y="18" width="13.2" height="3" rx="1.5"/><rect className="ln" x="38" y="17.5" width="8" height="1.8" rx=".9"/><rect className="ln" x="38" y="21" width="8" height="1.8" rx=".9"/></g>
  <rect className="sx s2 hero" x="10" y="27" width="36" height="22.2" rx="2"/>
  <g className="sx s3"><rect className="ln" x="10" y="56.2" width="30.6" height="3.5" rx="1.7"/><rect className="ln" x="10" y="63.2" width="23.4" height="3" rx="1.5"/><rect className="ln" x="10" y="69.2" width="27.0" height="3" rx="1.5"/></g>
  <rect className="sx s4 btn" x="10" y="77" width="15.1" height="5" rx="2.5"/>
</g>
<circle cx="28" cy="92" r="3" fill="var(--accent)"/>
</g>
<line x1="200" y1="270" x2="292" y2="225" stroke="var(--line-fine)" stroke-width="1.5"/>

<g transform="translate(470,260)">
<rect x="0" y="0" width="56" height="100" rx="10" fill="var(--paper)" stroke="var(--accent)" stroke-width="1.5"/>
<rect x="6" y="12" width="44" height="74" rx="2" fill="rgba(122,47,28,.06)" opacity="0.8"/>
<g className="site" style={{'--dl':'3.9s'}}>
  <rect className="sx sb" x="6" y="12" width="44" height="2" />
  <g className="sx s1"><rect className="hd" x="10" y="18" width="13.2" height="3" rx="1.5"/><rect className="ln" x="38" y="17.5" width="8" height="1.8" rx=".9"/><rect className="ln" x="38" y="21" width="8" height="1.8" rx=".9"/></g>
  <rect className="sx s2 hero" x="10" y="27" width="36" height="22.2" rx="2"/>
  <g className="sx s3"><rect className="ln" x="10" y="56.2" width="30.6" height="3.5" rx="1.7"/><rect className="ln" x="10" y="63.2" width="23.4" height="3" rx="1.5"/><rect className="ln" x="10" y="69.2" width="27.0" height="3" rx="1.5"/></g>
  <rect className="sx s4 btn" x="10" y="77" width="15.1" height="5" rx="2.5"/>
</g>
<circle cx="28" cy="92" r="3" fill="var(--accent)"/>
</g>
<line x1="480" y1="270" x2="388" y2="225" stroke="var(--line-fine)" stroke-width="1.5"/>

<circle className="core-ring" cx="340" cy="190" r="52" fill="none" />
<circle className="packet" r="3" cx="0" cy="0" opacity="0"><animateMotion dur="7s" begin="0s" repeatCount="indefinite" path="M330 140 L330 106" keyPoints="0;1;1" keyTimes="0;.16;1" calcMode="linear"/><animate attributeName="opacity" dur="7s" begin="0s" repeatCount="indefinite" values="0;1;1;0;0" keyTimes="0;.02;.14;.16;1"/></circle>
<circle className="packet" r="3" cx="0" cy="0" opacity="0"><animateMotion dur="7s" begin="0.7s" repeatCount="indefinite" path="M288 180 L200 160" keyPoints="0;1;1" keyTimes="0;.16;1" calcMode="linear"/><animate attributeName="opacity" dur="7s" begin="0.7s" repeatCount="indefinite" values="0;1;1;0;0" keyTimes="0;.02;.14;.16;1"/></circle>
<circle className="packet" r="3" cx="0" cy="0" opacity="0"><animateMotion dur="7s" begin="1.4s" repeatCount="indefinite" path="M392 185 L480 170" keyPoints="0;1;1" keyTimes="0;.16;1" calcMode="linear"/><animate attributeName="opacity" dur="7s" begin="1.4s" repeatCount="indefinite" values="0;1;1;0;0" keyTimes="0;.02;.14;.16;1"/></circle>
<circle className="packet" r="3" cx="0" cy="0" opacity="0"><animateMotion dur="7s" begin="2.1s" repeatCount="indefinite" path="M292 225 L200 270" keyPoints="0;1;1" keyTimes="0;.16;1" calcMode="linear"/><animate attributeName="opacity" dur="7s" begin="2.1s" repeatCount="indefinite" values="0;1;1;0;0" keyTimes="0;.02;.14;.16;1"/></circle>
<circle className="packet" r="3" cx="0" cy="0" opacity="0"><animateMotion dur="7s" begin="2.8s" repeatCount="indefinite" path="M388 225 L480 270" keyPoints="0;1;1" keyTimes="0;.16;1" calcMode="linear"/><animate attributeName="opacity" dur="7s" begin="2.8s" repeatCount="indefinite" values="0;1;1;0;0" keyTimes="0;.02;.14;.16;1"/></circle>
<text x="340" y="318" textAnchor="middle" fontFamily="'Fraunces', Georgia, serif" fontSize="25" fontWeight="300" letterSpacing="-0.3" fill="var(--ink)"><tspan x="340" dy="0">One architecture,</tspan><tspan x="340" dy="30" fontStyle="italic" fill="var(--accent)">every device</tspan></text>
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
                <h2 className="serif">Online stores built to<br /><span className="it">grow your business</span>.</h2>
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
            <div className="two">
              <div className="rows">

                <a href="https://hbmpartners.fr/" target="_blank" rel="noopener noreferrer" className="feat-card">
                  <div className="feat-media">
                    <img src="/images/portfolio/hbmpartners.png" alt="Preview of the HBM Partners site" />
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
              <div className="fcol"><h5>Contact</h5><a href="mailto:team@salaro.com">team@salaro.com</a><a href="#">UK-based</a><a href="https://uk.linkedin.com/in/salaro">LinkedIn</a></div>
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
