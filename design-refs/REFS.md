# Design references: cairn.agency redesign (2026-10-08)

Built by Claude (Codex hit its usage limit; authorised takeover, see the session report).
Brief: `cairn.agency/CODEX-BRIEF.md`.

## Current live cairn.agency (what is being replaced)
Source: https://cairn.agency, screenshots taken 2026-10-08 at 1440x900 (fold + full page).
Taking: nothing visual. Recorded problems to avoid: all-caps four-line slogan hero ("YOUR BUSINESS. WORKING HARDER. WHILE YOU DON'T."), green accent that is not a Cairn brand token, unverified stats ("£0 cost per AI-answered enquiry", "100%"), a large empty dark band below the demos, demos named after businesses that are not clients.

## The Trim Company live site (the one named piece of work)
Source: https://thetrimcompany.co.uk, screenshots 1440x900 and 390x844 taken 2026-10-08 with the cookie banner declined. Saved as `client/public/images/work/trimco-home-*.jpg`.
Taking: the real screenshot as proof of work inside a plain browser frame, and its verified review line (Booksy 5.0, 354 reviews, checked 2026-10-08). Not taking its silver/mono palette, pill nav or centred badge hero (QUALITY-BAR §E2 is the reverse case, but the Cairn site should not look like a client either).

## Highland Timber benchmark (quality level, not a look)
Source: `demos/_benchmarks/highland-timber/highland-timber-1280-fold.png` and README.md, inspected 2026-10-08.
Taking: the standard only. One visual system obeyed everywhere, copy in the owner's voice, one real working tool (here: the gap check that pre-writes the enquiry), no fabrication. Not taking: full-bleed photo hero, all-caps two-line slogan, mono kickers with dot separators, warm-white + orange palette.

## RECIPE-LOG, last three active entries
Source: `demos/RECIPE-LOG.md` (Slopeside classic-heritage serif masthead, Babin Air full-bleed alpine, Highland Timber material-first photographic).
Taking: avoidance. This site is type-and-illustration led on a paper ground (no full-bleed photo hero, no serif masthead).

## Direction
- Palette: Cairn house tokens only. Paper #f2ece1 ground, ink #1a1714 text and dark bands, gold #b89a4e as accent (non-text or on ink; a deeper #74591f for gold text on paper to keep 4.5:1 contrast).
- Type: Unbounded at 500 for headings in sentence case (the brand face, used calmly), Instrument Sans for body and UI.
- Signature: an SVG cairn of four stones whose gold capstone settles into place, labelled with the parts of a small business's setup. It is the positioning ("find the gap, fill it") told through the brand name.
- Working tool: the gap check. Visitors tick what happens in their business, see the matching fixes, and can email the list straight to Ferg.
- Rhythm: paper / stone bands, one ink band for the live demos, thin ink rules between rows. Density low, motion moderate (reveal-on-scroll, the capstone settle), all of it off under prefers-reduced-motion.
- Voice: first person ("I"), because Cairn is one person.
