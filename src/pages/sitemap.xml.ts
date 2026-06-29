const site = 'https://advaluekauai.com';

const routes = [
  '/',
  '/about',
  '/services',
  '/gallery',
  '/reviews',
  '/estimate',
  '/contact',
  '/privacy',
  '/deck-builder-kauai',
  '/trex-deck-builder-kauai',
  '/fence-contractor-kauai',
  '/kitchen-remodel-kauai',
  '/bathroom-remodel-kauai',
  '/handyman-kauai',
  '/drywall-repair-kauai',
  '/custom-carpentry-kauai',
  '/property-maintenance-kauai',
];

export function GET() {
  const urls = routes
    .map((route) => `  <url><loc>${site}${route}</loc></url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
