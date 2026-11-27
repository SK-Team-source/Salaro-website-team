import Image from 'next/image';

export const caseStudies = [
  {
    name: 'HBM Partners',
    type: 'Professional services',
    url: 'https://hbmpartners.fr/',
    image: '/images/portfolio/hbm-partners.webp',
    alt: 'HBM Partners corporate website',
    platform: 'Next.js',
    challenge: 'A Paris finance boutique needed to explain complex advisory work clearly.',
    solution: 'A corporate site that brings its technical and financial offer into focus.',
  },
  {
    name: 'Cleverbotanics',
    type: 'E-commerce',
    url: 'https://cleverbotanics.com/',
    image: '/images/portfolio/clever-botanics.webp',
    alt: 'Cleverbotanics online store',
    platform: 'Shopify',
    challenge: 'A live wellness business needed a clear route through its product range.',
    solution: 'A Shopify storefront that supports the interactive commerce demo.',
    outcome: 'The store carries 2,400+ five-star Trustpilot reviews.',
  },
  {
    name: 'AskDroid',
    type: 'Directory migration',
    url: 'https://askdroid.com/',
    image: '/images/portfolio/askdroid.webp',
    alt: 'AskDroid directory platform',
    platform: 'WordPress → Next.js on Vercel',
    challenge: 'A WordPress directory needs a modern, maintainable foundation.',
    solution: 'Migration to Next.js on Vercel is underway.',
    status: 'In progress',
  },
  {
    name: 'Quantime',
    type: 'Content and interactive visualisations',
    url: 'https://quantime.uk/',
    image: '/images/portfolio/quantime.png',
    alt: 'Quantime website for an interactive physics book',
    platform: 'Next.js',
    challenge: 'A physics project needed a clear home for complex ideas and questions.',
    solution: 'A content-led site bringing the project together with interactive visualisations.',
  },
  {
    name: 'Eco Green Cabins',
    type: 'Product site',
    url: 'https://ecogreencabins.com/',
    image: '/images/portfolio/the-ecogreen-cabins.webp',
    alt: 'Eco Green Cabins product website',
    platform: 'Next.js',
    challenge: 'A solar kit for garden cabins needed a focused product experience.',
    solution: 'A product site explaining the cabin solar offer and its benefits.',
  },
];

export default function CaseStudies() {
  return (
    <div className="case-study-grid">
      {caseStudies.map((study) => (
        <a
          className="case-study-card"
          href={study.url}
          key={study.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="case-study-image">
            <Image
              src={study.image}
              alt={study.alt}
              width={800}
              height={450}
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
              loading="lazy"
            />
          </div>
          <div className="case-study-content">
            <div className="case-study-top">
              <h3 className="serif">{study.name}</h3>
              <span className="lab">{study.type}</span>
            </div>
            <dl className="case-study-facts">
              <div><dt>Challenge</dt><dd>{study.challenge}</dd></div>
              <div><dt>What we built</dt><dd>{study.solution}</dd></div>
              {study.outcome && <div><dt>Outcome</dt><dd>{study.outcome}</dd></div>}
            </dl>
            <div className="case-study-footer">
              <span className="case-study-platform"><span className="lab">Platform</span>{study.platform}</span>
              {study.status && <span className="case-study-status">{study.status}</span>}
              <span className="case-study-link">Visit site <span aria-hidden="true">↗</span></span>
            </div>
          </div>
        </a>
      ))}
      <a href="/contact" className="case-study-next">
        <span className="case-study-next-mark" aria-hidden="true">+</span>
        <span className="lab">Your project</span>
        <h3 className="serif">Your project next.</h3>
        <span className="case-study-link">Start a project <span aria-hidden="true">→</span></span>
      </a>
    </div>
  );
}
