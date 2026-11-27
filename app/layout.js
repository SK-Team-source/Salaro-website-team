import './globals.css';

export const metadata = {
  title: 'Salaro — UK-led digital consultancy',
  description: 'Websites, online stores and AI tools, built by a UK-led studio with a delivery team in India. Building for the web since 1995.',
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

