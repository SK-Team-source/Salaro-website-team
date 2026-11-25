'use client';
import { useRef, useState } from 'react';
import Script from 'next/script';

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const PLATFORMS = ['WordPress', 'Drupal', 'Joomla', 'Other PHP', "Don't know"];
const MANAGERS = ['Me', 'An agency', 'A freelancer', 'Nobody at the moment'];
const FREQUENCIES = ['Weekly or more', 'Monthly', 'A few times a year', 'Hardly ever'];

const EMPTY = {
  name: '', email: '', siteUrl: '', platform: '', managedBy: '', changeFrequency: '', message: '',
  website: '', // honeypot — real visitors never see this
};

// Free site check form. Posts to the same /api/contact route as the contact page
// (Resend + Turnstile + honeypot), flagged with enquiry: 'site-check'.
export default function SiteCheckForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const turnstileRef = useRef(null);
  const turnstileWidgetId = useRef(null);
  const turnstileToken = useRef('');

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const renderTurnstile = () => {
    if (!window.turnstile || !turnstileRef.current || turnstileWidgetId.current) return;
    turnstileWidgetId.current = window.turnstile.render(turnstileRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      size: 'invisible',
      callback: (token) => { turnstileToken.current = token; },
      'expired-callback': () => { turnstileToken.current = ''; },
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (form.website) return; // honeypot tripped
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, enquiry: 'site-check', turnstileToken: turnstileToken.current }),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    } finally {
      if (window.turnstile && turnstileWidgetId.current) window.turnstile.reset(turnstileWidgetId.current);
      turnstileToken.current = '';
    }
  }

  if (status === 'sent') {
    return (
      <div className="sc-done" role="status">
        <p className="serif">Thanks — your site check request is in.</p>
        <p>We&apos;ll look at your site and reply by email, usually within one working day.</p>
      </div>
    );
  }

  return (
    <form className="sc-form" onSubmit={handleSubmit}>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" onLoad={renderTurnstile} />

      <div className="sc-row">
        <div className="sc-field">
          <label htmlFor="sc-name">Name</label>
          <input id="sc-name" required type="text" autoComplete="name" value={form.name} onChange={set('name')} />
        </div>
        <div className="sc-field">
          <label htmlFor="sc-email">Email</label>
          <input id="sc-email" required type="email" autoComplete="email" value={form.email} onChange={set('email')} />
        </div>
      </div>

      <div className="sc-field">
        <label htmlFor="sc-url">Website address</label>
        <input id="sc-url" required type="text" inputMode="url" placeholder="www.example.co.uk" value={form.siteUrl} onChange={set('siteUrl')} />
      </div>

      <div className="sc-row sc-row-3">
        <div className="sc-field">
          <label htmlFor="sc-platform">Current platform</label>
          <select id="sc-platform" value={form.platform} onChange={set('platform')}>
            <option value="">Choose…</option>
            {PLATFORMS.map((p) => <option key={p}>{p}</option>)}
          </select>
        </div>
        <div className="sc-field">
          <label htmlFor="sc-managed">Who manages it now?</label>
          <select id="sc-managed" value={form.managedBy} onChange={set('managedBy')}>
            <option value="">Choose…</option>
            {MANAGERS.map((p) => <option key={p}>{p}</option>)}
          </select>
        </div>
        <div className="sc-field">
          <label htmlFor="sc-freq">How often does content change?</label>
          <select id="sc-freq" value={form.changeFrequency} onChange={set('changeFrequency')}>
            <option value="">Choose…</option>
            {FREQUENCIES.map((p) => <option key={p}>{p}</option>)}
          </select>
        </div>
      </div>

      <div className="sc-field">
        <label htmlFor="sc-message">Anything else we should know? <span className="opt">(optional)</span></label>
        <textarea id="sc-message" rows="3" placeholder="Forms, shop, members' area, anything you're unsure about" value={form.message} onChange={set('message')} />
      </div>

      <div className="sc-hp" aria-hidden="true">
        <label htmlFor="sc-website">Website</label>
        <input id="sc-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} />
      </div>
      <div ref={turnstileRef} />

      {status === 'error' && (
        <p className="sc-error" role="alert">Something went wrong. Please email us at <a href="mailto:hello@salaro.com">hello@salaro.com</a> instead.</p>
      )}
      <div className="sc-submit">
        <button type="submit" className="btn-line" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : <>Request a free site check <span className="arw">→</span></>}
        </button>
        <span className="sc-note">No obligation. We reply by email.</span>
      </div>
    </form>
  );
}
