import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const origin = 'https://cairn.agency';
export const business = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': origin + '/#organization',
  name: 'CAIRN',
  url: origin + '/',
  description: 'Websites, AI chatbots and online shops for local businesses.',
  email: 'fergus@cairn.agency',
};
export const pages = {
  '/': ['CAIRN | Websites, AI Chatbots & Online Shops', 'CAIRN designs and builds websites, AI chatbots and online shops for local businesses. Explore our work and get in touch.'],
  '/chat': ['Chat with CAIRN | Website & AI Enquiries', 'Talk to CAIRN about websites, AI chatbots and online shops for your business.'],
  '/privacy': ['Privacy Policy | CAIRN', 'How CAIRN handles personal information and enquiries through its website.'],
  '/terms': ['Terms & Conditions | CAIRN', 'Terms and conditions for using the CAIRN website and services.'],
};

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

export function renderSeoHtml(template, route) {
  const page = pages[route];
  if (!page) return null;
  const [title, description, noindex = false] = page;
  const url = origin + route;
  const head = [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    `<meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow'}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeHtml(business.name)}" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<script type="application/ld+json">${JSON.stringify(business).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ');
  return template
    .replace(/<title>[\s\S]*?<\/title>/gi, '')
    .replace(/<meta\b[^>]*(?:name=["'](?:description|robots)["']|property=["']og:[^"']*["'])[^>]*>/gi, '')
    .replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, '')
    .replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, '')
    .replace('</head>', `    ${head}\n  </head>`);
}

export function createSeoHandler(clientDistPath) {
  let template;
  return (req, res, next) => {
    const route = req.path.length > 1 ? req.path.replace(/\/+$/, '') : '/';
    if (route === '/index.html') return res.redirect(301, '/');
    if (route === '/shop' && pages['/txture']) return res.redirect(301, '/txture');
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

