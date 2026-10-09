# Assets: cairn.agency

| File | What | Source | Permission |
|---|---|---|---|
| `client/public/images/work/trimco-home-1440.jpg` | The Trim Company home page, desktop | Screenshot of https://thetrimcompany.co.uk taken 2026-10-08 (cookie banner declined) | Cairn built the site; Trim Co is a named client on this site. Confirm the owner is happy to be shown. |
| `client/public/images/work/trimco-home-390.jpg` | Same, phone width | As above | As above |
| `client/public/images/ferg-bike1.jpg` | Ferg racing an enduro stage (unused after round 2) | Already in the repo; looks like an event photographer's shot (race plate, course tape) | **Unconfirmed.** Check it was bought or is free to use, or swap it. |
| `client/public/images/ferg-ski.jpg` | Ferg in the air on skis (About) | Already in the repo; Ferg's own | Ferg's own photo |
| `client/public/images/ferg-bike.jpg` | Ferg on a BMX at a skatepark (About) | Already in the repo; Ferg's own | Ferg's own photo |
| `client/public/favicon.svg`, `favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` | Cairn stones mark | Drawn in code (`client/src/components/site/stone.js`), rendered 2026-10-08 | Cairn's own |
| Former Cairn hero drawing (unused after round 2) | `CairnStack.jsx` SVG | Drawn in code | Cairn's own |

Unused images still in `client/public/images/` (freeski.jpg, treezone.jpg, JuneSkiing.jpg,
BookingSelect.jpg, RouteSelect.jpg, cairngorms.png, trimco-hero.jpg, cairn-logo.png) belonged
to the old demos and are no longer referenced.

## Round 2, 2026-10-09

| File | What | Source | Permission / credit |
|---|---|---|---|
| `client/public/images/loch-morlich-paul-masson.jpg` | Frozen Loch Morlich, Cairngorm hills and two stones on the ice; supplied original, 1600×1200 | Paul Masson, https://www.paulmassonphotography.co.uk; supplied by Ferg | Family permission per Ferg, 2026-10-09. Hero displays linked “Photo: Paul Masson”. |
| `client/public/images/loch-morlich-paul-masson.webp` | WebP of the above, 1600×1200, 147 KB, served via `<source>` | Made with sharp from the original | As above |
| `client/public/images/loch-morlich-paul-masson-1600.jpg` | mozjpeg fallback, 1600×1200, 151 KB, the hero `<img>` | Made with sharp from the original | As above |

The original JPEG (745 KB) remains untouched as the source. Codex could not encode variants in its sandbox, so Claude made the WebP and 1600 JPEG above. No mobile size: on phones the hero is portrait and the photo is scaled by height (~1133 CSS px wide), so a smaller file would be soft. Hero uses object-position 45% bottom on mobile and a dark scrim, strengthened above 1700px, plus a left scrim from 1024px. Crops checked in a browser at 375, 768, 1440 and 1920 (qa/round2).

Home and About now both use the original `ferg-bike.jpg` / `ferg-ski.jpg` pair. The enduro photo is no longer displayed.
