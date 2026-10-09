# Round 2 handoff, 2026-10-09

Status: Codex returned needs_followup. Claude completed the follow-up the same day (see the last section), Ferg approved it and it went live as ea9234e. The "Required follow-up" list below is kept as the original handoff.

## Implemented
- Original forest-green tokens, Unbounded + DM Sans, including legal-page CSS variables.
- Full-bleed Paul Masson Loch Morlich photograph; responsive object-position, text scrim and linked credit.
- Final headline: “Websites, bookings and online shops for small businesses.”
- Gap-check textarea, with ticks/text/both included in the email, whitespace handling and combined Clear.
- Unnamed work cards/examples and Why Cairn removed. Trim Company content/rating preserved.
- Plain headings, balanced heading wrapping, fewer repeated labels and less pill styling.
- Shared home/About ski/bike crossfade, original biography and all five credentials. Pause control and reduced-motion static image.

## Evidence
- `build-api.log`: Vite 5.4.21 production build passes, 2093 modules. Uses the actual existing Vite config through direct import to avoid the environment's config-bundler permissions failure.
- Reproduce from client/: `node --input-type=module -e "import {build} from './node_modules/vite/dist/node/index.js'; import config from './vite.config.js'; await build({...config,configFile:false});"`
- `check-gap.mjs` executes the actual GapCheck source with mocked React state hooks and element creation. `gap-check-results.json` records empty, whitespace-only, text-only, ticks-only, combined, and Clear cases. This is source-level verification, not browser interaction evidence. Run: `node qa/round2/check-gap.mjs`.
- Contrast: body/background 16.92:1; frost/surface 11.26:1; muted/surface 7.10:1; accent/surface 5.39:1; button text/accent 5.91:1. Photographic contrast still needs visual review.
- `git diff --check` passes. No edits to server/, client/index.html, robots.txt, sitemap.xml, llms.txt, site.webmanifest or faq.json. Routes, booking URL, email, chat context values and POST payload preserved.

## Required follow-up
1. Standard `npm run build` fails here while esbuild loads vite.config.js: access denied reading an ancestor directory. The build command/config has not been rewritten for this machine-specific failure.
2. Create optimised desktop WebP + JPEG fallback and mobile variants, then wire picture sources. The supplied original JPEG is currently referenced and remains untouched. sharp/Playwright at the supplied Trim project path were inaccessible; local package installation failed with network EACCES. The installed system policy rejected a PowerShell image conversion script. Failed tooling was removed; no policy was bypassed.
3. Capture and inspect fold/full-page screenshots for /, /services, /about, /faq, /chat, /privacy, /terms at 375 and 1440; home additionally at 768 and 1920. Scroll instantly to reveal each section before the full capture. No round-2 screenshots were captured. Local Chrome launch failed; connected Chrome explicitly denied localhost:3099 with a policy instruction forbidding alternate browser workarounds. No further browser route was attempted after that denial.
4. Verify photo crops (both stones and hills), 1920px sharpness, font loading, heading wraps, overflow, mobile navigation, focus, FAQ disclosure, slideshow pause/reduced-motion and all chat interactions in the browser.

The original archive screenshot and the source landscape photo were inspected; neither is evidence of the new design's rendered appearance. No API chat requests, external emails or bookings were sent. No commit, push or deployment. All frontend changes are uncommitted. The supplied Loch Morlich JPEG was already untracked at handoff and was preserved. Claude owns the closing audit and brain update.

## Follow-up done by Claude, 2026-10-09 (deviation, flagged)
Codex was blocked by its sandbox, not a usage limit. Claude completed the mechanical follow-up and four small repairs:
1. `npm run build` passes normally on this machine (the failure was sandbox-only).
2. Hero image: `loch-morlich-paul-masson.webp` (1600w, 147 KB) via `<source>`, fallback `loch-morlich-paul-masson-1600.jpg` (mozjpeg, 151 KB). No mobile size: on phones the hero is portrait and the photo is scaled by height (~1133 CSS px wide), so a smaller file would be soft. Original 745 KB JPEG kept as the source file.
3. Screenshots captured for every page at 375 and 1440, home at 768 and 1920 (instant scroll before full-page). 0 px horizontal overflow and no console errors on all 16. Unbounded and DM Sans loaded.
4. Gap check tested in Chromium: text only, ticks only, ticks + text all produce the right mailto body; Clear empties both. Evidence: `home-1440-gapcheck-filled.png`.
5. Repairs: /about showed "Most people call me Ferg" twice (page header + AboutFerg); the intro line now renders on home only. Em-dash in the restored bio changed to a comma. Bike photo crop moved to 50% 10% to hide a light strip on the source's top edge. A left-side scrim at 1024px+ so the intro and ghost button stay legible over the snow line at 1920.
