import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const origin = 'https://cairn.agency';
const here = dirname(fileURLToPath(import.meta.url));

// Same text as DESCRIPTION in client/src/data/site.js.
const description =
  'Cairn builds websites and the systems behind them for small, owner-run businesses: online ordering and bookings, admin pages owners run themselves, direct booking for holiday lets, and automatic replies to missed calls and enquiries.';

// No street address or phone on purpose: Cairn is home-based and remote (service-area profile).
// sameAs: the Google Business Profile by its Maps CID, decoded from the knowledge-panel link Ferg sent 2026-10-09.
export const business = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': origin + '/#organization',
  name: 'Cairn',
  alternateName: 'CAIRN',
  url: origin + '/',
  description,
  email: 'fergus@cairn.agency',
  logo: origin + '/favicon.svg',
  address: { '@type': 'PostalAddress', addressLocality: 'Edinburgh', addressCountry: 'GB' },
  founder: { '@type': 'Person', name: 'Fergus Masson', jobTitle: 'Founder' },
  sameAs: ['https://maps.google.com/?cid=16021504094648978737'],
  knowsLanguage: 'en',
  makesOffer: [
    'Websites and the systems behind them',
    'Direct booking for holiday lets',
    'Lead automations',
  ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
};

// [title, description, noindex?]
export const pages = {
  '/': [
    'Cairn | Websites and the systems behind them',
    'Websites, online ordering and bookings, admin pages you run yourself, direct booking for holiday lets and automatic replies, for small owner-run businesses. Fergus Masson, Edinburgh.',
  ],
  '/services': [
    'Services | Websites, holiday-let direct booking and lead automations | Cairn',
    'What Cairn builds: websites with ordering, booking and admin pages, direct booking sites and guest pages for holiday lets, and missed-call text-back and instant enquiry replies.',
  ],
  '/about': [
    'About Fergus Masson | Cairn, Edinburgh',
    'Cairn is Fergus Masson, a one-person web studio in Edinburgh building websites and the systems behind them for small, owner-run businesses in any English-speaking country.',
  ],
  '/faq': [
    'FAQ | Cost, timelines and ownership | Cairn',
    'Answers to what small business owners ask before hiring Cairn: cost, timelines, who owns the site, what happens after launch and working remotely.',
  ],
  '/chat': [
    'Ask about Cairn | Cairn assistant',
    'Ask the Cairn assistant what Cairn builds, how a job runs and how to get in touch.',
  ],
  '/privacy': ['Privacy Policy | Cairn', 'How Cairn handles personal information and enquiries through its website.'],
  '/terms': ['Terms & Conditions | Cairn', 'Terms and conditions for using the Cairn website and services.'],
};

function readFaq() {
  try {
    return JSON.parse(readFileSync(join(here, '../client/src/data/faq.json'), 'utf8'));
  } catch {
    return [];
  }
}

function structuredData(route) {
  const blocks = [business];
  if (route === '/faq') {
    const faq = readFaq();
    if (faq.length) {
      blocks.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      });
    }
  }
  return blocks;
}

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

export function renderSeoHtml(template, route) {
  const page = pages[route];
  if (!page) return null;
  const [title, pageDescription, noindex = false] = page;
  const url = origin + route;
  const head = [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(pageDescription)}" />`,
    `<meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow'}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Cairn" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(pageDescription)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta name="twitter:card" content="summary" />`,
    ...structuredData(route).map(
      (block) => `<script type="application/ld+json">${JSON.stringify(block).replace(/</g, '\\u003c')}</script>`
    ),
  ].join('\n    ');
  return template
    .replace(/<title>[\s\S]*?<\/title>/gi, '')
    .replace(/<meta\b[^>]*(?:name=["'](?:description|robots|twitter:[^"']*)["']|property=["']og:[^"']*["'])[^>]*>/gi, '')
    .replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, '')
    .replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, '')
    .replace('</head>', `    ${head}\n  </head>`);
}

export function createSeoHandler(clientDistPath) {
  let template;
  return (req, res, next) => {
    const route = req.path.length > 1 ? req.path.replace(/\/+$/, '') : '/';
    if (route === '/index.html') return res.redirect(301, '/');
    if (!Object.hasOwn(pages, route)) return next();
    try {
      template ??= readFileSync(join(clientDistPath, 'index.html'), 'utf8');
      res.setHeader('Cache-Control', 'no-cache');
      return res.type('html').send(renderSeoHtml(template, route));
    } catch (error) {
      return next(error);
    }
  };
}
