# Self-review: cairn.agency redesign (2026-10-08)

Built by Claude, not Codex: the Codex launch failed on an OpenAI usage limit (run
`.codex/runs/2026-10-08T13-56-34-697Z-XwsXS6`, "try again at 7:25 PM"), and Fergy had
authorised Claude to take over in that case. This is a deviation from the normal
Codex-owns-design rule and is recorded as such.

## Why it fits
- Says what Cairn does now: websites plus the systems behind them, direct booking for
  holiday lets, lead automations, framed as finding the gap and filling it.
- Cairn's own house palette (ink / gold / paper) replaces the green that was never a
  brand token. Headings are sentence case at a calm weight, not an all-caps slogan.
- The signature (a cairn whose gold capstone settles last) is the positioning told
  through the brand name, and it reappears on About ("Why Cairn") and in the favicon.
- The gap check is a working tool: ticks map to fixes and the email to Ferg is
  pre-written with what the visitor ticked.
- Written as "I". Cairn is one person and the copy says so.

## Truth checks
- Trim Co review line: 5.0 from 354 on Booksy, scraped live 2026-10-08.
- No prices, stats, client counts, response times or invented quotes anywhere. The
  old hero's "£0 cost per AI-answered enquiry" and "100%" are gone.
- Other work is unnamed by request; statuses are honest (client project / pilot build / demo).
- Demo assistants are anonymous server-side as well as on the page: tested, the ski
  school bot declines to give its name or number.
- /chat used to run a prompt that introduced itself as Free-Ski and TreeZone (not
  clients). It now runs a Cairn assistant; the API default is the Cairn assistant too.

## Checks performed
- `npm run build` clean.
- Production server run locally (`PORT=3099 node server/index.js`): /, /services,
  /about, /faq, /chat, /privacy 200; unknown route 404; per-route titles; FAQPage
  JSON-LD on /faq.
- Screenshots (fold + full page) at 320, 375, 1440 for every page and 768, 1920 for
  home: zero horizontal overflow, zero console errors. A 36px overflow at 320px (chat
  cards sized to their longest suggestion chip) was found and fixed.
- Gap check exercised: two ticks, two fixes, mailto body verified.
- Live API calls through the local server for demo-ski-school, demo-bike-routes, cairn
  and no context: all on-brief.
- QA note: full-page screenshots must scroll with `behavior: 'instant'`; with the
  site's smooth scrolling, a fast scripted scroll never reaches the lower sections and
  their reveal animations stay hidden in the capture. The same artifact made the live
  site look like it had a blank band. It did not.

## Limitations
- No booking link yet: "free look" buttons open an email. One-line swap in
  `client/src/data/site.js` (`BOOKING_URL`).
- No testimonial yet: the slot renders nothing until a real quote is added.
- `ferg-bike1.jpg` (enduro race shot) looks like an event photographer's image;
  confirm it's licensed or swap it.
- `ferg-ski.jpg` is low resolution (519px wide); fine at its displayed size.
- Not deployed. The Google Business Profile URL is not in the structured data yet
  (no URL on file).
- The legal pages were restyled through the colour tokens only; their content is unchanged.

## Ready to show Ferg?
Yes, as a preview. It is not deployed and should go live only after he has looked at it.
