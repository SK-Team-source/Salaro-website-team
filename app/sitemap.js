const BASE = 'https://www.salaro.com';

const ROUTES = [
  '',
  '/practice',
  '/build',
  '/migrate',
  '/move-from-php',
  '/advise',
  '/work',
  '/archive',
  '/studio',
  '/writing',
  '/writing/php-vulnerabilities-october-2026',
  '/contact',
  '/privacy',
  '/terms',
];

export default function sitemap() {
  return ROUTES.map((path) => ({ url: `${BASE}${path}` }));
}
