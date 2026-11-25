'use client';
import { useEffect, useState } from 'react';

const KEY = 'salaro-php-notice-dismissed';

// Subtle, dismissible homepage strip pointing to /move-from-php.
// TODO (Salar): remove once the October 2026 PHP story is no longer current.
export default function PhpNoticeBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try { setShow(localStorage.getItem(KEY) !== '1'); } catch { setShow(true); }
  }, []);

  const dismiss = () => {
    setShow(false);
    try { localStorage.setItem(KEY, '1'); } catch {}
  };

  if (!show) return null;

  return (
    <div className="php-notice" role="region" aria-label="Notice">
      <div className="wrap">
        <p>
          <span className="php-notice-k">PHP security update</span>
          Running a WordPress or other PHP site? <a href="/writing/php-vulnerabilities-october-2026">What the October 2026 PHP flaws mean for you</a>
          <span className="php-notice-sep" aria-hidden="true"> · </span>
          <a href="/move-from-php">Move off PHP</a>
        </p>
        <button type="button" onClick={dismiss} aria-label="Dismiss notice">×</button>
      </div>
    </div>
  );
}
