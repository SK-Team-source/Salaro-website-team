import Script from 'next/script';
import './globals.css';
import InteractiveGraphics from './components/InteractiveGraphics';

export const metadata = {
  metadataBase: new URL('https://www.salaro.com'),
  title: 'Salaro — UK-led digital consultancy',
  description: 'A UK-led digital consultancy. We build thoughtful, resilient digital products with clear decisions and practical delivery.',
};

// Use the dedicated viewport export for Next.js
export const viewport = 'width=device-width, initial-scale=1';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <InteractiveGraphics />
        {/* lazyOnload: the script inserts a menu button into .topbar, which must happen after hydration */}
        <Script src="/scripts/topbar-toggle.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}

