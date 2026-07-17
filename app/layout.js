import './globals.css';

export const metadata = {
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
        <script src="/scripts/topbar-toggle.js" defer></script>
      </body>
    </html>
  );
}

