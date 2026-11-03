<<<<<<< HEAD
'use client';
import { useEffect } from 'react';

export default function LegalPageClient({ children }) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('in');
      }),
      { threshold: 0.1 }
    );

    document.querySelectorAll('.rv').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return <>{children}</>;
}
=======
'use client';
import { useEffect } from 'react';

export default function LegalPageClient({ children }) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('in');
      }),
      { threshold: 0.1 }
    );

    document.querySelectorAll('.rv').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return <>{children}</>;
}
>>>>>>> origin/main
