// Single source for site copy and facts. The Cairn chat assistant's prompt
// (server/src/utils/promptBuilder.js, CAIRN_PROMPT) repeats these facts: keep both in step.

export const EMAIL = 'fergus@cairn.agency';

// Ferg's Cal.com page (added 2026-10-09). Set back to a mailto: and every CTA reverts to "Ask for a free look".
export const BOOKING_URL = 'https://cal.com/fergus-masson-wlb5ng';
export const BOOKING_IS_EMAIL = BOOKING_URL.startsWith('mailto:');

export const OWNER = 'Fergus Masson';
export const LOCATION = 'Edinburgh, Scotland';

// One-line description reused for metadata, llms.txt and the Google Business Profile.
export const DESCRIPTION =
  'Cairn builds websites and the systems behind them for small, owner-run businesses: online ordering and bookings, admin pages owners run themselves, direct booking for holiday lets, and automatic replies to missed calls and enquiries.';

export const OFFERS = [
  {
    id: 'websites',
    title: 'Websites and the systems behind them',
    short: 'A proper site plus the working part your business runs on.',
    who: 'Trades, shops, makers and services that are busy enough to need more than a brochure.',
    builds: [
      'A website that is fast and clear on a phone',
      'Online ordering or booking, built around how you already work',
      'An admin page for stock, prices and photos that you update yourself',
      'An assistant that answers the usual questions, where it helps',
    ],
    outcome:
      'Customers can see what you do, order or book without ringing, and you can change things without waiting on anyone.',
  },
  {
    id: 'holiday-lets',
    title: 'Direct booking for holiday lets',
    short: 'Your own booking site and a guest page, so guests can book direct.',
    who: 'Hosts and small property managers who take most bookings through Airbnb, Vrbo or Booking.com.',
    builds: [
      'A booking site in your own name',
      'A QR guest page with check-in, wifi, directions and local tips',
      'An easy way back for guests who have stayed before',
    ],
    outcome:
      'A booking made direct does not go through a platform, so there is no platform fee on it. Normal card fees still apply.',
  },
  {
    id: 'automations',
    title: 'Lead automations',
    short: 'Replies that go out while you are busy with the job in front of you.',
    who: 'Anyone who loses work because they could not answer in time.',
    builds: [
      'Missed-call text-back: the caller gets a text straight away and you get an alert',
      'Instant replies to website enquiries that ask the first few questions for you',
      'A short job summary sent to your phone',
    ],
    outcome: 'Fewer enquiries go cold while you are up a ladder, under a car or in the middle of a cut.',
  },
];

// Gap check: what a visitor ticks -> what usually fixes it.
export const GAP_ITEMS = [
  { id: 'missed-calls', label: "I miss calls while I'm working", fixes: ['missed-call'] },
  { id: 'same-questions', label: 'I answer the same questions all day by phone, text or DM', fixes: ['assistant'] },
  { id: 'orders-by-message', label: 'Orders come in by phone, email or Facebook messages', fixes: ['ordering'] },
  { id: 'booking-back-forth', label: 'Booking a time takes a few messages back and forth', fixes: ['bookings'] },
  { id: 'stock-updates', label: "I can't change stock, prices or availability on my own site", fixes: ['admin'] },
  { id: 'old-site', label: "My website is old or slow, or I don't have one", fixes: ['website'] },
  { id: 'slow-replies', label: 'Enquiries wait until the evening for a reply', fixes: ['instant-replies'] },
  { id: 'ota', label: 'I run holiday lets and most guests book through Airbnb or Booking.com', fixes: ['direct-booking'] },
];

export const FIXES = {
  website: {
    title: 'A proper website',
    line: 'Fast, clear on a phone, and built around what customers ask before they buy or book.',
    offer: 'websites',
  },
  ordering: {
    title: 'Online ordering',
    line: 'Customers build their order on the site and you get it in one place, with a reference number.',
    offer: 'websites',
  },
  bookings: {
    title: 'Online booking',
    line: 'Customers pick a time themselves. If you already use a booking app, the site links straight into it.',
    offer: 'websites',
  },
  admin: {
    title: 'An admin page you run yourself',
    line: 'Add stock, change prices, upload photos and mark things sold, without waiting on anyone.',
    offer: 'websites',
  },
  assistant: {
    title: 'An assistant for the usual questions',
    line: "Set up on your own information, so it answers the everyday questions and tells people to call when it doesn't know.",
    offer: 'websites',
  },
  'missed-call': {
    title: 'Missed-call text-back',
    line: "When you can't pick up, the caller gets a text straight away and you get an alert.",
    offer: 'automations',
  },
  'instant-replies': {
    title: 'Instant replies to enquiries',
    line: 'Every enquiry gets an answer in seconds, the first questions are asked for you, and a summary lands on your phone.',
    offer: 'automations',
  },
  'direct-booking': {
    title: 'Direct booking for your holiday let',
    line: 'Your own booking site and a QR guest page, so returning guests can book with you directly.',
    offer: 'holiday-lets',
  },
};

export const STEPS = [
  {
    title: 'A free look',
    text: "I go through your website, Google listing, booking and enquiries the way a customer would, and tell you where people are likely dropping off. Plain English, no obligation.",
  },
  {
    title: 'A plan and a quote',
    text: 'What I would build, what the build costs and the monthly cost to keep it running. Nothing starts until you say yes.',
  },
  {
    title: 'The build',
    text: 'You see it working on a private link before it goes live, and click around it like a customer would.',
  },
  {
    title: 'Looking after it',
    text: "Hosting, updates and small changes on a monthly plan, so the site doesn't go stale the day after launch.",
  },
];

// Verified on Booksy 2026-10-08: 5.0 from 354 reviews (351 five-star).
export const TRIM = {
  name: 'The Trim Company',
  place: 'Edinburgh',
  url: 'https://thetrimcompany.co.uk',
  urlLabel: 'thetrimcompany.co.uk',
  summary:
    "A barbershop on Dundas Street. The site has a 10-product online shop with card payments, booking through the shop's existing Booksy account, an assistant that knows the barbers and the products, and the shop's reviews shown on the site.",
  rating: '5.0',
  reviewCount: 354,
  reviewSource: 'Booksy',
  reviewCheckedOn: '8 October 2026',
  built: ['Website', 'Online shop', 'Booking assistant', 'Review wall'],
  // Add only a real, attributed quote from the owner. Leave null and nothing renders.
  testimonial: null, // { quote: '...', name: '...', role: '...' }
};

// Unnamed by request: describe the work, never name or show the business.
export const CASE_STUDIES = [
  {
    kind: 'Client project',
    title: 'Watch dealer',
    text: 'Website and a stock panel the owner runs: add a piece, upload photos, mark it sold. Nothing waits on me.',
    icon: 'watch',
  },
  {
    kind: 'Pilot build',
    title: 'Family sawmill',
    text: 'Website and a four-step ordering system. Customers build a cut list, choose delivery or collection and get an order reference, so the whole order arrives in one place.',
    icon: 'trees',
  },
  {
    kind: 'Demo',
    title: 'Holiday-let property manager',
    text: "A booking journey that stays on the manager's own site, instead of sending guests off to a third-party checkout.",
    icon: 'home',
  },
];

export const DEMOS = [
  {
    context: 'demo-ski-school',
    title: 'Ski school assistant',
    note: 'A family-run ski and snowboard school in the Cairngorms',
    opening:
      "Hi, I'm the assistant for a family-run ski and snowboard school in the Cairngorms. Ask me about lessons, ages, levels or how booking works.",
    prompts: ['What age can kids start?', "I've never skied. Where do I start?", 'Do you teach snowboarding?', 'How do I book?'],
  },
  {
    context: 'demo-bike-routes',
    title: 'Bike route finder',
    note: 'A bike hire shop in Aviemore',
    opening:
      "Hi, I help people hiring a bike in Aviemore find the right trail. Tell me how much riding you've done and what kind of day you're after.",
    prompts: ['Easy family ride, half a day', 'Something technical for experienced riders', 'A scenic loop past a loch', 'Which bike should I hire?'],
  },
];
