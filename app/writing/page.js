'use client';
import { useEffect } from 'react';

export default function WritingPage() {
  useEffect(() => {
      const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.1});
        document.querySelectorAll('.rv').forEach(el=>io.observe(el));
  }, []);

  return (
    <div className="p-writing">
        <div className="topbar">
          <div className="wrap">
            <a href="/" className="brand">Sala<span>ro</span></a>
            <nav className="nav"><a href="/practice">Practice</a><a href="/work">Work</a><a href="/studio">Studio</a><a href="/writing" className="active">Writing</a><a href="/contact">Contact</a></nav>
            <a href="tel:+447485222490" className="top-cta">Start a project</a>
          </div>
        </div>


        <header className="hero drifting-field">
          <div className="wrap"><div className="grid">
            <div>
              <div className="eyebrow">
                <span className="ic"><svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="12" rx="1"/><line x1="4" y1="20" x2="12" y2="20"/></svg></span>
                <span className="lab a">Essays &amp; field notes</span>
              </div>
              <h1>
                <span className="reveal-line"><span>We turn <span className="it">patterns</span></span></span>
                <span className="reveal-line"><span>into usable language.</span></span>
              </h1>
              <div className="body">
                <p>The work is often technical, but the point is usually simple: help a team make a better decision, explain a system more clearly, or preserve a hard-won lesson before it disappears into the next sprint.</p>
                <p>We write about practical delivery, legacy migration, editorial systems, and the peculiar problems that appear when a business has outgrown its first stack but still needs to move carefully.</p>
              </div>
              <div className="actions"><a href="tel:+447485222490" className="btn-dark">Read the notes <span className="arw">→</span></a></div>
            </div>

            <aside className="note-card rv">
              <div className="kicker lab a">Studio note</div>
              <h3 className="serif">Good writing is <span className="it">operational</span>.</h3>
              <p>It makes hidden decisions visible, preserves context, and gives a team language for what they're shipping and why.</p>
              <div className="cadence">
                <div className="cad-head"><span className="lab">Notes published</span><span className="cad-n serif">42</span></div>
                <div className="cad-bars">
                  <span style={{height: '28%', animationDelay: '.05s'}}></span>
                  <span style={{height: '40%', animationDelay: '.12s'}}></span>
                  <span style={{height: '36%', animationDelay: '.19s'}}></span>
                  <span style={{height: '54%', animationDelay: '.26s'}}></span>
                  <span style={{height: '60%', animationDelay: '.33s'}}></span>
                  <span style={{height: '74%', animationDelay: '.40s'}}></span>
                  <span style={{height: '86%', animationDelay: '.47s'}}></span>
                  <span style={{height: '100%', animationDelay: '.54s'}}></span>
                </div>
                <div className="cad-axis"><span>2019</span><span>2026</span></div>
              </div>
              <ul>
                <li>Practical, not ornamental</li>
                <li>Clear about constraints</li>
                <li>Useful long after the launch</li>
              </ul>
              <a href="tel:+447485222490" className="btn-dark">Start a conversation</a>
            </aside>
          </div></div>
        </header>

        <div className="signal-line"></div>

        <section className="legible band contour-drift">
          <div className="wrap"><div className="split-head">
            <div className="rv">
              <div className="eyebrow">
                <span className="ic"><svg viewBox="0 0 24 24"><path d="M5 19 L12 5 L19 19"/><line x1="8" y1="14" x2="16" y2="14"/></svg></span>
                <span className="lab a">Writing for founders &amp; teams</span>
              </div>
              <h2 className="serif">We write to make <span className="it">hard choices</span> legible.</h2>
              <div className="body">
                <p>We publish notes when they help a client, a founder, or a team think more clearly about what they're building. Sometimes that means unpacking the migration path from DNN. Sometimes it means making a product strategy more honest.</p>
                <p>The tone is practical. The goal is not polish for its own sake, but a cleaner way to decide and ship.</p>
              </div>
            </div>
            <div className="entries rv">
              <div className="entry"><div className="k lab">Measured pace</div><p>We write with the same care we give to product decisions: slow enough to be accurate, fast enough to be useful.</p></div>
              <div className="entry"><div className="k lab">Clear ownership</div><p>The writing is usually tied to a real problem, not a generic thought piece or a content calendar.</p></div>
              <div className="entry"><div className="k lab">Useful in the room</div><p>The value is simple: the next conversation starts with less ambiguity and better context.</p></div>
            </div>
          </div></div>
        </section>


        <section className="archive band">
          <div className="wrap">
            <div className="arch-head rv">
              <div>
                <div className="eyebrow">
                  <span className="ic"><svg viewBox="0 0 24 24"><path d="M4 6 H20 L18 18 H6 Z"/><line x1="9" y1="10" x2="15" y2="10"/></svg></span>
                  <span className="lab a">Selected notes</span>
                </div>
                <h2 className="serif">A small archive of <span className="it">useful</span> thinking.</h2>
              </div>
              <p className="desc">The pieces below are a mix of process notes, practical essays, and quiet observations from the studio.</p>
            </div>

            <div className="whatis rv">
              <div className="lab">What this is</div>
              <p>We think writing should do something. It should help a team understand a problem more clearly, preserve a way of working, or make a future decision easier.</p>
            </div>

            <div className="notes rv">
              <article className="note">
                <div className="k lab a">01 / Essay</div>
                <h3 className="serif">Why a ten-year-old with a template will eat most agency work</h3>
                <p>The agency market has changed. The question is no longer whether a template can do the basics, but what remains for the studio that still knows how to make decisions.</p>
                <ul><li>Less decorative work</li><li>More operational value</li><li>Clearer pricing logic</li></ul>
              </article>
              <article className="note">
                <div className="k lab a">02 / Field note</div>
                <h3 className="serif">DNN in 2026: it's still out there, and it still needs help</h3>
                <p>A practical note on the surprising number of organisations still running DNN and how to move them without losing search rankings, history or trust.</p>
                <ul><li>Migration planning</li><li>SEO continuity</li><li>Editorial preservation</li></ul>
              </article>
              <article className="note">
                <div className="k lab a">03 / Primer</div>
                <h3 className="serif">AI for SMEs: a fortnight's primer</h3>
                <p>A small reading list and a set of concrete tools for founders who want to be more honest about AI than the online discourse allows.</p>
                <ul><li>Usefulness over hype</li><li>Concrete experiments</li><li>Shared language</li></ul>
              </article>
              <article className="note">
                <div className="k lab a">04 / Diary</div>
                <h3 className="serif">Days, not months: a build diary</h3>
                <p>An unusually detailed account of a practical build, from the first call to the live deployment, with the human steps made visible.</p>
                <ul><li>Real delivery sequence</li><li>Human review points</li><li>Clearer rollout logic</li></ul>
              </article>
            </div>
          </div>
        </section>


        <section className="alongside band">
          <div className="wrap">
            <div className="split-head rv">
              <div>
                <div className="eyebrow">
                  <span className="ic"><svg viewBox="0 0 24 24"><circle cx="9" cy="9" r="3"/><path d="M4 19 a5 5 0 0 1 10 0"/><path d="M16 7 a3 3 0 0 1 0 6"/></svg></span>
                  <span className="lab a">Studio services</span>
                </div>
                <h2 className="serif">We also work <span className="it">alongside</span> teams.</h2>
              </div>
              <p className="body">The writing is part of the same practice as the build work — a way of clarifying the next move before the next move gets expensive.</p>
            </div>

            <div className="cols3 rv">
              <div className="svc3">
                <div className="ic"><svg viewBox="0 0 24 24"><path d="M2 12 s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="2.5"/></svg></div>
                <div className="k lab">White label</div>
                <h4 className="serif">Behind the scenes</h4>
                <p>We work entirely for you with no direct contact with your client, handling the implementation and the thinking without making a fuss.</p>
              </div>
              <div className="svc3">
                <div className="ic"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="7" height="16" rx="1"/><rect x="13" y="4" width="7" height="16" rx="1"/></svg></div>
                <div className="k lab">Partnership</div>
                <h4 className="serif">Side by side</h4>
                <p>We join meetings, help shape the story, and stay close to the decisions that matter most as the project moves along.</p>
              </div>
              <div className="svc3">
                <div className="ic"><svg viewBox="0 0 24 24"><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><line x1="8" y1="11" x2="16" y2="7"/><line x1="8" y1="13" x2="16" y2="17"/></svg></div>
                <div className="k lab">Referral</div>
                <h4 className="serif">Pass it over</h4>
                <p>If you have a project you want to hand off cleanly, we can take it on and keep the momentum going without the usual handover drag.</p>
              </div>
            </div>
          </div>
        </section>


        <section className="cta">
          <div className="wrap">
            <div className="rv">
              <div className="lab">Ready to start?</div>
              <h2 className="serif">Your project <em>next</em>.</h2>
              <p className="body">Whether it's website design, an app, or a partnership that needs an experienced voice, reach out and we'll respond within one working day.</p>
            </div>
            <div className="btns rv">
              <a href="tel:+447485222490" className="btn-primary">Start a conversation <span>→</span></a>
              <a href="tel:+447485222490" className="btn-ghost">07485 222490</a>
            </div>
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
              <div className="fcol"><h5>Contact</h5><a href="mailto:team@salaro.com">team@salaro.com</a><span>Guildford, Surrey</span><a href="https://www.linkedin.com">LinkedIn</a></div>
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
